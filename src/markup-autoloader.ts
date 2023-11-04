import { MARKUP_PREFIX, STABLE_TAG, VERSION_PROPERTY } from "@utils/constants.ts";
import { getBasePath } from "@utils/cdn-base-path.ts";

export const discover = async (root: Element | ShadowRoot) => {
  const prefix = `${MARKUP_PREFIX}-`;

  const rootTagName = root instanceof Element ? root.tagName.toLowerCase() : "";
  const rootIsCustomElement = rootTagName?.startsWith(`${prefix}`);

  const tags = [...root.querySelectorAll(":not(:defined)")]
    .map((element) => element.tagName.toLowerCase())
    .filter((tag) => tag.startsWith(`${prefix}`));

  const tagsWithVersion: Record<string, string> = {};

  for (const element of root.querySelectorAll(":not(:defined)")) {
    const key = element.tagName.toLowerCase();
    const version = element.getAttribute(VERSION_PROPERTY) ?? `${STABLE_TAG}`;
    if (key.startsWith(`${prefix}`) && (!tagsWithVersion[key] || tagsWithVersion[key] === `${STABLE_TAG}`)) {
      tagsWithVersion[key] = version;
    }
  }

  if (rootIsCustomElement && !customElements.get(rootTagName)) {
    tags.push(rootTagName);
  }

  await Promise.allSettled(
    Object.entries(tagsWithVersion).map((tagName) => register(tagName[0], tagName[1] as string)),
  );
};

const observer = new MutationObserver(async (mutations) => {
  for (const { addedNodes } of mutations) {
    for (const node of addedNodes) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        discover(node as Element);
      }
    }
  }
});

const register = (tagName: string, version: string): Promise<void> => {
  if (customElements.get(tagName)) {
    return Promise.resolve();
  }

  const tagWithoutPrefix = tagName.replace(`${MARKUP_PREFIX}-`, "");
  let path = getBasePath(`components/${tagWithoutPrefix}/${tagWithoutPrefix}`, version);

  path = path.startsWith(`/src`) ? `${path}.ts` : `${path}.js`;

  return new Promise((resolve, reject) => {
    import(path).then(resolve).catch(() => reject(new Error(`Unable to autoload <${tagName}> from ${path}`)));
  });
};

// Listen for new undefined elements
observer.observe(document.documentElement, { subtree: true, childList: true });

discover(document.body);
