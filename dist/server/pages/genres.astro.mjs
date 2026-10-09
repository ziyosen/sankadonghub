/* empty css                                 */
import { e as createComponent, m as maybeRenderHead, g as addAttribute, r as renderTemplate, h as createAstro, k as renderComponent } from '../chunks/astro/server_Dh1Z2Bpm.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BFg5Q30V.mjs';
import { $ as $$Breadcrumb, a as $$Sesepuh, b as $$Content, c as $$WidgetTitle, d as $$Sidebar } from '../chunks/Sidebar_BHdYpvpW.mjs';
import 'clsx';
import { g as generateUrlPath } from '../chunks/generateUrlPath_Bu-CsIBe.mjs';
import { g as genreService } from '../chunks/genreService_DeDh8SHo.mjs';
import { a as animeConfig } from '../chunks/animeConfig_Dv_0l7zJ.mjs';
import { $ as $$Error } from '../chunks/Error_P4yMsrwR.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro();
const $$GenreList = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$GenreList;
  const {
    genre: { list, baseUrlPath }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="gap-2 grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5"> ${list.map((genre) => renderTemplate`<button class="genre-item"> <a${addAttribute(generateUrlPath(baseUrlPath, genre.genreId), "href")} type="button" class="line-clamp-1"> ${genre.title} </a> </button>`)} </div>`;
}, "/tmp/sanka/src/components/GenreList.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const {
    sankadonghub: { siteName }
  } = animeConfig;
  const genre = await genreService();
  return renderTemplate`${() => {
    if (genre.ok) {
      const title = `Genre | Daftar Genre - ${siteName}`;
      return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
        title,
        description: ""
      } }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})}${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Content", $$Content, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Daftar Genre" })}${renderComponent($$result4, "GenreList", $$GenreList, { "genre": {
        list: genre.data.genreList,
        baseUrlPath: "/genres"
      } })}` })}${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Sidebar" })}` })}` })}` })}`;
    }
    return renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": genre.statusCode, "message": genre.message || genre.statusMessage })}`;
  }}`;
}, "/tmp/sanka/src/pages/genres/index.astro", void 0);

const $$file = "/tmp/sanka/src/pages/genres/index.astro";
const $$url = "/genres";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
