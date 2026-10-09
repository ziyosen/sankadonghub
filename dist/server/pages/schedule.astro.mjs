/* empty css                                 */
import { e as createComponent, m as maybeRenderHead, k as renderComponent, l as Fragment, r as renderTemplate, h as createAstro, g as addAttribute } from '../chunks/astro/server_Dh1Z2Bpm.mjs';
import 'piccolore';
import { $ as $$Layout } from '../chunks/Layout_BFg5Q30V.mjs';
import { c as $$WidgetTitle, $ as $$Breadcrumb, a as $$Sesepuh, b as $$Content, d as $$Sidebar } from '../chunks/Sidebar_BHdYpvpW.mjs';
import { a as animeConfig } from '../chunks/animeConfig_Dv_0l7zJ.mjs';
import { s as sanka } from '../chunks/sanka_DSusrVHd.mjs';
import { g as generateUrlPath } from '../chunks/generateUrlPath_Bu-CsIBe.mjs';
import { $ as $$StarIcon } from '../chunks/StarIcon_DbHjy4pI.mjs';
import { $ as $$Error } from '../chunks/Error_P4yMsrwR.mjs';
export { renderers } from '../renderers.mjs';

async function scheduleService() {
  const result = await sanka("/schedule");
  const days = (result.data.schedule || []).map((d) => ({
    day: d.day,
    animeList: (d.donghua_list || []).map((item) => ({
      title: item.title,
      poster: item.poster,
      type: "anime",
      score: "N/A",
      estimation: item.release_time || "",
      animeId: item.slug,
      genres: ""
    }))
  }));
  return { ...result, data: { days } };
}

const $$Astro = createAstro();
const $$AnimeList4 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AnimeList4;
  const {
    anime: { days, baseUrlPath }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex flex-col gap-4"> ${days.map((day) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "WidgetTitle", $$WidgetTitle, { "title": day.day })} <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"> ${day.animeList.map((anime) => renderTemplate`${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <a${addAttribute(generateUrlPath(baseUrlPath, anime.animeId), "href")} class="group rounded-lg relative"> <div class="relative"> <img loading="lazy" class="anime2-item-img"${addAttribute(anime.poster, "src")}${addAttribute(anime.title, "alt")}> <span class="anime2-item-type">${anime.type}</span> <span class="anime2-item-score"> ${renderComponent($$result3, "StarIcon", $$StarIcon, { "class": "w-[12px] h-[12px]" })} <span>${anime.score}</span> </span> <span class="anime2-item-status">${anime.estimation}</span> </div> <div class="p-2"> <h3 class="anime2-item-title">${anime.title}</h3> </div> </a> <div class="hidden">${anime.genres}</div> ` })}`)} </div> ` })}`)} </div>`;
}, "/tmp/sanka/src/components/AnimeList4.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const {
    sankadonghub: { siteName }
  } = animeConfig;
  const schedule = await scheduleService();
  return renderTemplate`${() => {
    if (schedule.ok) {
      const title = `Schedule | Jadwal Rilis - ${siteName}`;
      return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
        title,
        description: ""
      } }, { "default": async ($$result2) => renderTemplate`${renderComponent($$result2, "Breadcrumb", $$Breadcrumb, {})}${renderComponent($$result2, "Sesepuh", $$Sesepuh, {}, { "default": async ($$result3) => renderTemplate`${renderComponent($$result3, "Content", $$Content, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Jadwal Rilis" })}${renderComponent($$result4, "AnimeList4", $$AnimeList4, { "anime": {
        days: schedule.data.days,
        baseUrlPath: "/anime"
      } })}` })}${renderComponent($$result3, "Sidebar", $$Sidebar, {}, { "default": async ($$result4) => renderTemplate`${renderComponent($$result4, "WidgetTitle", $$WidgetTitle, { "title": "Sidebar" })}` })}` })}` })}`;
    }
    return renderTemplate`${renderComponent($$result, "Error", $$Error, { "statusCode": schedule.statusCode, "message": schedule.message || schedule.statusMessage })}`;
  }}`;
}, "/tmp/sanka/src/pages/schedule/index.astro", void 0);

const $$file = "/tmp/sanka/src/pages/schedule/index.astro";
const $$url = "/schedule";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
