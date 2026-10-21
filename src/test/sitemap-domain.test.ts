import { readFileSync } from "node:fs";
import { describe, expect, it } from "vitest";
import { sitemapXML } from "@/lib/sitemap";

describe("Public sitemap domain", () => {
  it("generates the Natali homepage URL without an invented lastmod", () => {
    const source = readFileSync("src/routes/sitemap[.]xml.ts", "utf8");
    const baseURL = source.match(/const BASE_URL = "([^"]+)"/)?.[1];
    expect(baseURL).toBe("https://nataliterapeuta.lovable.app");
    const xml = sitemapXML(baseURL ?? "", [{ path: "/" }]);
    expect(xml).toContain("<loc>https://nataliterapeuta.lovable.app/</loc>");
    expect(xml).not.toContain("<lastmod>");
  });

  it("directs crawlers to the Natali sitemap", () => {
    const robots = readFileSync("public/robots.txt", "utf8");
    const sitemapDirectives = robots.split("\n").filter((line) => line.startsWith("Sitemap:"));
    expect(sitemapDirectives).toEqual(["Sitemap: https://nataliterapeuta.lovable.app/sitemap.xml"]);
  });
});