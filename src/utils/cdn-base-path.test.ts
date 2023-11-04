import { expect, it, describe, afterEach, vi } from "vitest";
import { setBasePath, getBasePath } from "@utils/cdn-base-path";

describe("getBasePath", () => {
  const script = document.createElement("script");

  afterEach(() => {
    script.remove();
    setBasePath();
  });

  it("should get basepath from setBasePath", () => {
    expect(getBasePath("base", "1")).toBe(`/base`);
    setBasePath(`test`);
    expect(getBasePath("base", "1")).toBe(`test/base`);
  });

  it("should replace stable if version is specified", () => {
    setBasePath(`test@stable`);
    expect(getBasePath("base", "1")).toBe(`test@1/base`);
    setBasePath(`test@stable`);
    expect(getBasePath("base")).toBe(`test@stable/base`);
  });

  it("should use configScript when provided", () => {
    script.dataset.cdurl = "cdurl";
    document.body.append(script);
    expect(getBasePath("base", "1")).toBe(`cdurl/base`);
    script.remove();
    script.dataset.cdurl = "cdurl@stable";
    setBasePath();
    document.body.append(script);
    expect(getBasePath("base", "1")).toBe(`cdurl@1/base`);
    delete script.dataset.cdurl;
  });

  it("should use fallback script", () => {
    const spy = vi.spyOn(document, "querySelectorAll");
    // @ts-ignore
    spy.mockImplementation(() => [{ dataset: {}, src: "test/litel.min.js", getAttribute: () => "test/litel.min.js" }]);

    expect(getBasePath("base", "1")).toBe(`test/base`);

    // @ts-ignore
    spy.mockImplementation(() => [{ dataset: {}, src: "markuptest/markup-autoloader.min.js", getAttribute: () => "markuptest/markup-autoloader.min.js" }]);

    setBasePath();
    expect(getBasePath("base", "1")).toBe(`markuptest/base`);
  });
});
