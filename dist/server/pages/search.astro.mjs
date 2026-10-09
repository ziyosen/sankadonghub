/* empty css                                 */
import { e as createComponent, m as maybeRenderHead, k as renderComponent, n as renderScript, r as renderTemplate, h as createAstro } from '../chunks/astro/server_Dh1Z2Bpm.mjs';
import 'piccolore';
import { a as $$SearchIcon, $ as $$Layout } from '../chunks/Layout_BFg5Q30V.mjs';
import { $ as $$Breadcrumb, a as $$Sesepuh, b as $$Content, c as $$WidgetTitle, d as $$Sidebar } from '../chunks/Sidebar_BHdYpvpW.mjs';
import { a as animeConfig } from '../chunks/animeConfig_Dv_0l7zJ.mjs';
import { s as sanka } from '../chunks/sanka_DSusrVHd.mjs';
import { $ as $$AnimeList2 } from '../chunks/AnimeList2_Rk9nUHw6.mjs';
import { $ as $$Pagination } from '../chunks/Pagination_CkEdU3IL.mjs';
import { $ as $$Error } from '../chunks/Error_P4yMsrwR.mjs';
export { renderers } from '../renderers.mjs';

async function searchService(queryParam = {}) {
  const { q } = queryParam;
  if (!q) {
    return {
      statusCode: 200,
      statusMessage: "OK",
      message: "No query",
      ok: true,
      data: { animeList: [] },
      pagination: null
    };
  }
  const result = await sanka(`/search/${q}`);
  const animeList = (result.data.data || []).map((item) => ({
    title: item.title,
    poster: item.poster,
    status: item.status,
    type: item.type,
    score: "N/A",
    animeId: item.slug,
    href: `/anime/${item.slug}`,
    genreList: []
  }));
  return { ...result, data: { animeList } };
}

const $$Search = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form id="form-search" class="w-full mx-auto"> <label for="default-search" class="mb-2 text-sm font-medium text-zinc-900 sr-only dark:text-white">
Search
</label> <div class="relative"> <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"> ${renderComponent($$result, "SearchIcon", $$SearchIcon, { "class": "w-4 h-4" })} </div> <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-zinc-900 border border-zinc-300 rounded-lg bg-zinc-50 focus:ring-amber-500 focus:border-amber-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" placeholder="Cari anime..." required> <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-amber-700 hover:bg-amber-800 focus:ring-4 focus:outline-none focus:ring-amber-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-amber-600 dark:hover:bg-amber-700 dark:focus:ring-amber-800">
Search
</button> </div> </form> ${renderScript($$result, "/tmp/sanka/src/components/Search.astro?astro&type=script&index=0&lang.ts")}`;
}, "/tmp/sanka/src/components/Search.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const {
    sankadonghub: { siteName }
  } = animeConfig;
  const q = Astro2.url.searchParams.get("q");
  Astro2.url.searchParams.get("page");
  const search = await searchService({ q});
  return renderTemplate`${() => {
    if (!q) {
      const title = `Search | Cari anime - ${siteName}`;
      return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
        title,
        description: ""
      } }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})}${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Content", $$Content, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Cari anime" })}${renderComponent($$result4, "Search", $$Search, {})}` })}${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Sidebar" })}` })}` })}` })}`;
    }
    if (search.ok) {
      const title = `Search | anime ${q} - ${siteName}`;
      return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
        title,
        description: ""
      } }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, { "currentPage": {
        title: q,
        href: Astro2.url.href,
        action: "add"
      } })}${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Content", $$Content, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": `Hasil Pencarian : ${q}` })}${renderComponent($$result4, "AnimeList2", $$AnimeList2, { "anime": {
        list: search.data.animeList,
        baseUrlPath: "/anime"
      } })}${renderComponent($$result4, "Pagination", $$Pagination, { "pagination": search.pagination, "options": { qQueryParam: q } })}` })}${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Sidebar" })}` })}` })}` })}`;
    }
    return renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": search.statusCode, "message": search.message || search.statusMessage })}`;
  }}`;
}, "/tmp/sanka/src/pages/search/index.astro", void 0);

const $$file = "/tmp/sanka/src/pages/search/index.astro";
const $$url = "/search";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
