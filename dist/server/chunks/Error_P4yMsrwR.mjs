import { e as createComponent, k as renderComponent, r as renderTemplate, h as createAstro, m as maybeRenderHead, g as addAttribute } from './astro/server_Dh1Z2Bpm.mjs';
import 'piccolore';
import { $ as $$Layout } from './Layout_BFg5Q30V.mjs';
import { a as animeConfig } from './animeConfig_Dv_0l7zJ.mjs';

const $$Astro = createAstro();
const $$Error = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Error;
  const { statusCode, message } = Astro2.props;
  const {
    sankadonghub: { siteName }
  } = animeConfig;
  const title = `${statusCode} ${message} - ${siteName}`;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": {
    title,
    noindex: true,
    nofollow: true
  } }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="text-center text-xl font-extrabold"> ${statusCode} ${message} </h1> <a${addAttribute(Astro2.url.origin, "href")} class="text-center text-sky-700 dark:text-sky-400">Kembali ke halaman utama</a> ` })}`;
}, "/tmp/sanka/src/components/Error.astro", void 0);

export { $$Error as $ };
