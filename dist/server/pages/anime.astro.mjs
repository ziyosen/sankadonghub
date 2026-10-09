/* empty css                                 */
import { e as createComponent, m as maybeRenderHead, k as renderComponent, g as addAttribute, r as renderTemplate, n as renderScript, h as createAstro } from '../chunks/astro/server_Dh1Z2Bpm.mjs';
import 'piccolore';
import { a as $$SearchIcon, $ as $$Layout } from '../chunks/Layout_BFg5Q30V.mjs';
import { c as $$WidgetTitle, $ as $$Breadcrumb, a as $$Sesepuh, b as $$Content, d as $$Sidebar } from '../chunks/Sidebar_BHdYpvpW.mjs';
import { s as sanka } from '../chunks/sanka_DSusrVHd.mjs';
import { a as animeConfig } from '../chunks/animeConfig_Dv_0l7zJ.mjs';
import { g as generateUrlPath } from '../chunks/generateUrlPath_Bu-CsIBe.mjs';
import { $ as $$Error } from '../chunks/Error_P4yMsrwR.mjs';
export { renderers } from '../renderers.mjs';

async function homeService() {
  const result = await sanka("/anime");
  return result;
}

const $$Astro = createAstro();
const $$AnimeList0 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AnimeList0;
  const {
    anime: { list, baseUrlPath }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="w-full mx-auto"> <label for="search-input" class="mb-2 text-sm font-medium text-zinc-900 sr-only dark:text-white">Search</label> <div class="relative"> <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"> ${renderComponent($$result, "SearchIcon", $$SearchIcon, { "class": "w-4 h-4" })} </div> <input type="search" id="search-input" class="block w-full p-3 ps-10 text-sm text-zinc-900 border border-zinc-300 rounded-lg bg-zinc-50 focus:ring-amber-500 focus:border-amber-500 dark:bg-zinc-700 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:ring-amber-500 dark:focus:border-amber-500" placeholder="Cari Anime..." required> </div> </div> <p>
Belum menemukan anime yg anda inginkan?, cari <a href="/search" class="underline text-amber-700 dark:text-amber-500">disini</a> </p> ${list.map((item) => renderTemplate`<div class="flex flex-col gap-4"> ${renderComponent($$result, "WidgetTitle", $$WidgetTitle, { "title": item.startWith })} <ul class="anime-list w-full grid sm:grid-cols-2 gap-y-2 gap-x-4 list-disc pl-4"> ${item.animeList.map((anime) => renderTemplate`<li> <a${addAttribute(generateUrlPath(baseUrlPath, anime.animeId), "href")} class="anime0-item"> ${anime.title} </a> </li>`)} </ul> </div>`)} ${renderScript($$result, "/tmp/sanka/src/components/AnimeList0.astro?astro&type=script&index=0&lang.ts")}`;
}, "/tmp/sanka/src/components/AnimeList0.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const {
    sankadonghub: { siteName }
  } = animeConfig;
  const anime = await homeService();
  return renderTemplate`${() => {
    if (anime.ok) {
      const title = `anime | Daftar anime - ${siteName}`;
      return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
        title,
        description: ""
      } }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})}${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Content", $$Content, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Daftar anime" })}${renderComponent($$result4, "AnimeList0", $$AnimeList0, { "anime": {
        list: anime.data.list,
        baseUrlPath: "/anime"
      } })}` })}${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Sidebar" })}` })}` })}` })}`;
    }
    return renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": anime.statusCode, "message": anime.message || anime.statusMessage })}`;
  }}`;
}, "/tmp/sanka/src/pages/anime/index.astro", void 0);

const $$file = "/tmp/sanka/src/pages/anime/index.astro";
const $$url = "/anime";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
