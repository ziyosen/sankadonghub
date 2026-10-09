import { e as createComponent, m as maybeRenderHead, k as renderComponent, l as Fragment, r as renderTemplate, h as createAstro, g as addAttribute } from './astro/server_Dh1Z2Bpm.mjs';
import 'piccolore';
import { g as generateUrlPath } from './generateUrlPath_Bu-CsIBe.mjs';
import { $ as $$StarIcon } from './StarIcon_DbHjy4pI.mjs';

const $$Astro = createAstro();
const $$AnimeList2 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$AnimeList2;
  const {
    anime: { list, baseUrlPath }
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"> ${list.map((anime) => renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate` <a${addAttribute(generateUrlPath(
    baseUrlPath,
    anime.animeId || anime.batchId || ""
  ), "href")} class="group rounded-lg relative"> <div class="relative"> <img loading="lazy" class="anime2-item-img"${addAttribute(anime.poster, "src")}${addAttribute(anime.title, "alt")}> <span class="anime2-item-type">${anime.type}</span> <span class="anime2-item-score"> ${renderComponent($$result2, "StarIcon", $$StarIcon, { "class": "w-[12px] h-[12px]" })} <span>${anime.score}</span> </span> <span class="anime2-item-status">${anime.status}</span> </div> <div class="p-2"> <h3 class="anime2-item-title">${anime.title}</h3> </div> </a> <div class="hidden"> ${anime.genreList.map((genre) => renderTemplate`<a${addAttribute(generateUrlPath("/genres", genre.genreId), "href")}> ${genre.title} </a>`)} </div> ` })}`)} </div>`;
}, "/tmp/sanka/src/components/AnimeList2.astro", void 0);

export { $$AnimeList2 as $ };
