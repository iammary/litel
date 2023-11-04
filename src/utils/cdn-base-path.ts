import { DATA_MARKUP_PREFIX, STABLE_TAG } from "@utils/constants";

let cdnBasePath: undefined | string;

export const setBasePath = (path?: string) => {
  cdnBasePath = path;
};

export function getBasePath(subpath = "", version?: string) {
  if (!cdnBasePath) {
    const scripts = [...document.querySelectorAll("script")] as HTMLScriptElement[];

    const configScript = scripts.find(script => script.dataset[DATA_MARKUP_PREFIX] !== undefined);

    if (configScript) {
      setBasePath(configScript.dataset[DATA_MARKUP_PREFIX]!);
    } else {
      const fallbackScript = scripts.find(script => {
        return /litel(\.min)?\.(js|ts)($|\?)/.test(script.src) || /markup-autoloader(\.min)?\.(js|ts)($|\?)/.test(script.src);
      });

      const path = fallbackScript?.getAttribute("src") ?? "";

      setBasePath(path.split("/").slice(0, -1).join("/"));
    }
  }

  cdnBasePath = (cdnBasePath!).replace(/\/$/, "");
  const componentPath = `${subpath.replace(/^\//, "")}`;
  const fullPath = `${cdnBasePath}/${componentPath}`;

  return version ? fullPath.replace(`@${STABLE_TAG}`, `@${version}`) : fullPath;
}
