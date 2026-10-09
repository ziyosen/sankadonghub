import { e as createComponent, g as addAttribute, r as renderTemplate, h as createAstro, s as spreadAttributes, u as unescapeHTML, k as renderComponent, m as maybeRenderHead, n as renderScript, p as renderSlot, q as renderHead } from './astro/server_Dh1Z2Bpm.mjs';
import 'piccolore';
/* empty css                         */
import 'clsx';
import { a as animeConfig } from './animeConfig_Dv_0l7zJ.mjs';

const $$Astro$f = createAstro();
const $$OpenGraphArticleTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$OpenGraphArticleTags;
  const { publishedTime, modifiedTime, expirationTime, authors, section, tags } = Astro2.props.openGraph.article;
  return renderTemplate`${publishedTime ? renderTemplate`<meta property="article:published_time"${addAttribute(publishedTime, "content")}>` : null}${modifiedTime ? renderTemplate`<meta property="article:modified_time"${addAttribute(modifiedTime, "content")}>` : null}${expirationTime ? renderTemplate`<meta property="article:expiration_time"${addAttribute(expirationTime, "content")}>` : null}${authors ? authors.map((author) => renderTemplate`<meta property="article:author"${addAttribute(author, "content")}>`) : null}${section ? renderTemplate`<meta property="article:section"${addAttribute(section, "content")}>` : null}${tags ? tags.map((tag) => renderTemplate`<meta property="article:tag"${addAttribute(tag, "content")}>`) : null}`;
}, "/tmp/sanka/node_modules/astro-seo/src/components/OpenGraphArticleTags.astro", void 0);

const $$Astro$e = createAstro();
const $$OpenGraphBasicTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$OpenGraphBasicTags;
  const { openGraph } = Astro2.props;
  return renderTemplate`<meta property="og:title"${addAttribute(openGraph.basic.title, "content")}><meta property="og:type"${addAttribute(openGraph.basic.type, "content")}><meta property="og:image"${addAttribute(openGraph.basic.image, "content")}><meta property="og:url"${addAttribute(openGraph.basic.url || Astro2.url.href, "content")}>`;
}, "/tmp/sanka/node_modules/astro-seo/src/components/OpenGraphBasicTags.astro", void 0);

const $$Astro$d = createAstro();
const $$OpenGraphImageTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$OpenGraphImageTags;
  const { image } = Astro2.props.openGraph.basic;
  const { secureUrl, type, width, height, alt } = Astro2.props.openGraph.image;
  return renderTemplate`<meta property="og:image:url"${addAttribute(image, "content")}>${secureUrl ? renderTemplate`<meta property="og:image:secure_url"${addAttribute(secureUrl, "content")}>` : null}${type ? renderTemplate`<meta property="og:image:type"${addAttribute(type, "content")}>` : null}${width ? renderTemplate`<meta property="og:image:width"${addAttribute(width, "content")}>` : null}${height ? renderTemplate`<meta property="og:image:height"${addAttribute(height, "content")}>` : null}${alt ? renderTemplate`<meta property="og:image:alt"${addAttribute(alt, "content")}>` : null}`;
}, "/tmp/sanka/node_modules/astro-seo/src/components/OpenGraphImageTags.astro", void 0);

const $$Astro$c = createAstro();
const $$OpenGraphOptionalTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$OpenGraphOptionalTags;
  const { optional } = Astro2.props.openGraph;
  return renderTemplate`${optional.audio ? renderTemplate`<meta property="og:audio"${addAttribute(optional.audio, "content")}>` : null}${optional.description ? renderTemplate`<meta property="og:description"${addAttribute(optional.description, "content")}>` : null}${optional.determiner ? renderTemplate`<meta property="og:determiner"${addAttribute(optional.determiner, "content")}>` : null}${optional.locale ? renderTemplate`<meta property="og:locale"${addAttribute(optional.locale, "content")}>` : null}${optional.localeAlternate?.map((locale) => renderTemplate`<meta property="og:locale:alternate"${addAttribute(locale, "content")}>`)}${optional.siteName ? renderTemplate`<meta property="og:site_name"${addAttribute(optional.siteName, "content")}>` : null}${optional.video ? renderTemplate`<meta property="og:video"${addAttribute(optional.video, "content")}>` : null}`;
}, "/tmp/sanka/node_modules/astro-seo/src/components/OpenGraphOptionalTags.astro", void 0);

const $$Astro$b = createAstro();
const $$ExtendedTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$ExtendedTags;
  const { props } = Astro2;
  return renderTemplate`${props.extend.link?.map((attributes) => renderTemplate`<link${spreadAttributes(attributes)}>`)}${props.extend.meta?.map(({ content, httpEquiv, media, name, property }) => renderTemplate`<meta${addAttribute(name, "name")}${addAttribute(property, "property")}${addAttribute(content, "content")}${addAttribute(httpEquiv, "http-equiv")}${addAttribute(media, "media")}>`)}`;
}, "/tmp/sanka/node_modules/astro-seo/src/components/ExtendedTags.astro", void 0);

const $$Astro$a = createAstro();
const $$TwitterTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$TwitterTags;
  const { card, site, title, creator, description, image, imageAlt } = Astro2.props.twitter;
  return renderTemplate`${card ? renderTemplate`<meta name="twitter:card"${addAttribute(card, "content")}>` : null}${site ? renderTemplate`<meta name="twitter:site"${addAttribute(site, "content")}>` : null}${title ? renderTemplate`<meta name="twitter:title"${addAttribute(title, "content")}>` : null}${image ? renderTemplate`<meta name="twitter:image"${addAttribute(image, "content")}>` : null}${imageAlt ? renderTemplate`<meta name="twitter:image:alt"${addAttribute(imageAlt, "content")}>` : null}${description ? renderTemplate`<meta name="twitter:description"${addAttribute(description, "content")}>` : null}${creator ? renderTemplate`<meta name="twitter:creator"${addAttribute(creator, "content")}>` : null}`;
}, "/tmp/sanka/node_modules/astro-seo/src/components/TwitterTags.astro", void 0);

const $$Astro$9 = createAstro();
const $$LanguageAlternatesTags = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$LanguageAlternatesTags;
  const { languageAlternates } = Astro2.props;
  return renderTemplate`${languageAlternates.map((alternate) => renderTemplate`<link rel="alternate"${addAttribute(alternate.hrefLang, "hreflang")}${addAttribute(alternate.href, "href")}>`)}`;
}, "/tmp/sanka/node_modules/astro-seo/src/components/LanguageAlternatesTags.astro", void 0);

const $$Astro$8 = createAstro();
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$SEO;
  Astro2.props.surpressWarnings = true;
  function validateProps(props) {
    if (props.openGraph) {
      if (!props.openGraph.basic || (props.openGraph.basic.title ?? void 0) == void 0 || (props.openGraph.basic.type ?? void 0) == void 0 || (props.openGraph.basic.image ?? void 0) == void 0) {
        throw new Error(
          "If you pass the openGraph prop, you have to at least define the title, type, and image basic properties!"
        );
      }
    }
    if (props.title && props.openGraph?.basic.title) {
      if (props.title == props.openGraph.basic.title && !props.surpressWarnings) {
        console.warn(
          "WARNING(astro-seo): You passed the same value to `title` and `openGraph.optional.title`. This is most likely not what you want. See docs for more."
        );
      }
    }
    if (props.openGraph?.basic?.image && !props.openGraph?.image?.alt && !props.surpressWarnings) {
      console.warn(
        "WARNING(astro-seo): You defined `openGraph.basic.image`, but didn't define `openGraph.image.alt`. This is strongly discouraged.'"
      );
    }
  }
  validateProps(Astro2.props);
  let updatedTitle = "";
  if (Astro2.props.title) {
    updatedTitle = Astro2.props.title;
    if (Astro2.props.titleTemplate) {
      updatedTitle = Astro2.props.titleTemplate.replace(/%s/g, updatedTitle);
    }
  } else if (Astro2.props.titleDefault) {
    updatedTitle = Astro2.props.titleDefault;
  }
  const baseUrl = Astro2.site ?? Astro2.url;
  const defaultCanonicalUrl = new URL(Astro2.url.pathname + Astro2.url.search, baseUrl);
  return renderTemplate`${updatedTitle ? renderTemplate`<title>${unescapeHTML(updatedTitle)}</title>` : null}${Astro2.props.charset ? renderTemplate`<meta${addAttribute(Astro2.props.charset, "charset")}>` : null}<link rel="canonical"${addAttribute(Astro2.props.canonical || defaultCanonicalUrl.href, "href")}>${Astro2.props.description ? renderTemplate`<meta name="description"${addAttribute(Astro2.props.description, "content")}>` : null}<meta name="robots"${addAttribute(`${Astro2.props.noindex ? "noindex" : "index"}, ${Astro2.props.nofollow ? "nofollow" : "follow"}`, "content")}>${Astro2.props.openGraph && renderTemplate`${renderComponent($$result, "OpenGraphBasicTags", $$OpenGraphBasicTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.optional && renderTemplate`${renderComponent($$result, "OpenGraphOptionalTags", $$OpenGraphOptionalTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.image && renderTemplate`${renderComponent($$result, "OpenGraphImageTags", $$OpenGraphImageTags, { ...Astro2.props })}`}${Astro2.props.openGraph?.article && renderTemplate`${renderComponent($$result, "OpenGraphArticleTags", $$OpenGraphArticleTags, { ...Astro2.props })}`}${Astro2.props.twitter && renderTemplate`${renderComponent($$result, "TwitterTags", $$TwitterTags, { ...Astro2.props })}`}${Astro2.props.extend && renderTemplate`${renderComponent($$result, "ExtendedTags", $$ExtendedTags, { ...Astro2.props })}`}${Astro2.props.languageAlternates && renderTemplate`${renderComponent($$result, "LanguageAlternatesTags", $$LanguageAlternatesTags, { ...Astro2.props })}`}`;
}, "/tmp/sanka/node_modules/astro-seo/src/SEO.astro", void 0);

const $$Astro$7 = createAstro();
const $$CoffeIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$CoffeIcon;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)} class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z"></path></svg>`;
}, "/tmp/sanka/src/components/icons/CoffeIcon.astro", void 0);

const $$Astro$6 = createAstro();
const $$GithubIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$GithubIcon;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)} class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <path d="M21.43 3.8a2.12 2.12 0 0 0-1.92-.12L2.73 10.37a1.67 1.67 0 0 0-.11 3.1l3.58 1.37a.67.67 0 0 0 .58-.04l12.1-7.61a.33.33 0 0 1 .46.46l-9.8 8.84a.67.67 0 0 0-.19.46v3.25a1 1 0 0 0 1.76.65l2.4-2.88a.67.67 0 0 1 .83-.11l5.22 3a1.67 1.67 0 0 0 2.5-1.12L23.47 5.66a2.12 2.12 0 0 0-2.04-1.86Z"></path> </svg>`;
}, "/tmp/sanka/src/components/icons/GithubIcon.astro", void 0);

const $$Astro$5 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Footer;
  const {
    sankadonghub: { siteName, logo }
  } = animeConfig;
  const { navLinks } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<footer class="bg-white dark:bg-zinc-900"> <div class="container w-full py-8 lg:py-10"> <div class="lg:flex lg:justify-between gap-8"> <div class="mb-6 lg:mb-0 max-w-[500px]"> <a${addAttribute(Astro2.url.origin, "href")} class="flex items-center max-w-min"> <img${addAttribute(logo, "src")} class="w-8 me-3"${addAttribute(`${siteName} Logo`, "alt")}> <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">${siteName}</span> </a> <p class="py-4">
This site does not store any files on our server, we are linked to the
          media which is hosted on 3rd party services.
</p> </div> <div class="grid grid-cols-2 gap-16"> <ul class="flex flex-col gap-4 text-zinc-500 dark:text-zinc-400 font-medium"> ${navLinks._1.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")} class="hover:underline max-w-min"> ${link.title} </a> </li>`)} </ul> <ul class="flex flex-col gap-4 text-zinc-500 dark:text-zinc-400 font-medium"> ${navLinks._2.map((link) => renderTemplate`<li> <a${addAttribute(link.href, "href")}${addAttribute(link.targetBlank ? "_blank" : "", "target")} class="hover:underline max-w-min"> ${link.title} </a> </li>`)} </ul> </div> </div> <hr class="my-6 border-zinc-200 sm:mx-auto dark:border-zinc-700 lg:my-8"> <div class="sm:flex sm:items-center sm:justify-between"> <span class="text-sm text-zinc-500 sm:text-center dark:text-zinc-400">© ${(/* @__PURE__ */ new Date()).getFullYear()} <a${addAttribute(Astro2.url.origin, "href")} class="hover:underline">${siteName}™</a>. All
        Rights Reserved.
</span> <div class="flex mt-4 sm:justify-center sm:mt-0"> <a href="https://t.me/Blesh" target="_blank" class="text-zinc-500 hover:text-zinc-900 dark:hover:text-white ms-5"> ${renderComponent($$result, "GithubIcon", $$GithubIcon, {})} </a> <a href="https://nyawer.co/Benxx" target="_blank" class="text-zinc-500 hover:text-zinc-900 dark:hover:text-white ms-5"> ${renderComponent($$result, "CoffeIcon", $$CoffeIcon, {})} </a> </div> </div> </div> </footer>`;
}, "/tmp/sanka/src/components/Footer.astro", void 0);

const $$Astro$4 = createAstro();
const $$SearchIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$SearchIcon;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)} class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"> <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="m21 21-3.5-3.5M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"></path> </svg>`;
}, "/tmp/sanka/src/components/icons/SearchIcon.astro", void 0);

const $$Astro$3 = createAstro();
const $$MoonIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$MoonIcon;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)} class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M11.675 2.015a.998.998 0 0 0-.403.011C6.09 2.4 2 6.722 2 12c0 5.523 4.477 10 10 10 4.356 0 8.058-2.784 9.43-6.667a1 1 0 0 0-1.02-1.33c-.08.006-.105.005-.127.005h-.001l-.028-.002A5.227 5.227 0 0 0 20 14a8 8 0 0 1-8-8c0-.952.121-1.752.404-2.558a.996.996 0 0 0 .096-.428V3a1 1 0 0 0-.825-.985Z" clip-rule="evenodd"></path> </svg>`;
}, "/tmp/sanka/src/components/icons/MoonIcon.astro", void 0);

const $$Astro$2 = createAstro();
const $$SunIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$SunIcon;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(props)} class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"> <path fill-rule="evenodd" d="M13 3a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0V3ZM6.343 4.929A1 1 0 0 0 4.93 6.343l1.414 1.414a1 1 0 0 0 1.414-1.414L6.343 4.929Zm12.728 1.414a1 1 0 0 0-1.414-1.414l-1.414 1.414a1 1 0 0 0 1.414 1.414l1.414-1.414ZM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-9 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H3Zm16 0a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2h-2ZM7.757 17.657a1 1 0 1 0-1.414-1.414l-1.414 1.414a1 1 0 1 0 1.414 1.414l1.414-1.414Zm9.9-1.414a1 1 0 0 0-1.414 1.414l1.414 1.414a1 1 0 0 0 1.414-1.414l-1.414-1.414ZM13 19a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0v-2Z" clip-rule="evenodd"></path> </svg>`;
}, "/tmp/sanka/src/components/icons/SunIcon.astro", void 0);

const $$Astro$1 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const {
    sankadonghub: { siteName, logo }
  } = animeConfig;
  const { navLinks } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<nav id="navbar" class="bg-white dark:bg-zinc-900 fixed w-full z-50 top-0 start-0 border-b border-zinc-200 dark:border-zinc-800"> <div class="container flex flex-wrap items-center justify-between py-2"> <a${addAttribute(Astro2.url.origin, "href")} class="flex items-center space-x-3 rtl:space-x-reverse"> <img${addAttribute(logo, "src")} class="w-8"${addAttribute(`${siteName} Logo`, "alt")}> <h1 class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"> ${siteName} </h1> </a> <div class="flex md:order-2 space-x-2 md:space-x-2 rtl:space-x-reverse"> <button id="navbar-button-search-main" data-dropdown-toggle="dropdownSearch" data-dropdown-placement="bottom-end" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-700 rounded-lg hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-700"> ${renderComponent($$result, "SearchIcon", $$SearchIcon, {})} </button> <div id="dropdownSearch" class="z-10 hidden w-full"> <ul class="p-4 bg-white dark:bg-zinc-900 text-sm border-b border-zinc-200 dark:border-zinc-600 -translate-y-2"> <form id="navbar-form-search" class="max-w-md mx-auto text-zinc-700 dark:text-zinc-200"> <div class="flex"> <div class="relative w-full"> <input type="search" id="navbar-input-search" class="block p-2.5 w-full z-20 text-sm text-zinc-900 bg-zinc-50 rounded-lg border border-zinc-300 focus:ring-orange-500 focus:border-orange-500 dark:bg-zinc-800 dark:border-zinc-600 dark:placeholder-zinc-400 dark:text-white dark:focus:border-orange-500" placeholder="Cari anime.." required> <button type="submit" class="absolute top-0 end-0 h-full p-2.5 text-sm font-medium text-white bg-orange-600 rounded-e-lg border border-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 dark:bg-orange-500 dark:hover:bg-orange-600 dark:focus:ring-orange-700"> ${renderComponent($$result, "SearchIcon", $$SearchIcon, { "class": "w-4 h-4" })} </button> </div> </div> </form> </ul> </div> <button id="button-theme" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-700 rounded-lg hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-700"> ${renderComponent($$result, "MoonIcon", $$MoonIcon, { "id": "icon-moon", "class": "hidden" })} ${renderComponent($$result, "SunIcon", $$SunIcon, { "id": "icon-sun", "class": "text-amber-500 hidden" })} </button> <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-zinc-700 rounded-lg md:hidden hover:bg-zinc-100 dark:text-zinc-200 dark:hover:bg-zinc-700" aria-controls="navbar-sticky" aria-expanded="false"> <span class="sr-only">Open main menu</span> <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14"> <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"></path> </svg> </button> </div> <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky"> <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-zinc-300 rounded-lg bg-zinc-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-zinc-800 md:dark:bg-zinc-900 dark:border-zinc-700"> ${navLinks.map((link) => {
    if (link.href === Astro2.url.pathname) {
      return renderTemplate`<li> <a${addAttribute(link.href, "href")} class="navbar-link-item active"> ${link.title} </a> </li>`;
    }
    return renderTemplate`<li> <a${addAttribute(link.href, "href")} class="navbar-link-item"> ${link.title} </a> </li>`;
  })} </ul> </div> </div> </nav> ${renderScript($$result, "/tmp/sanka/src/components/Navbar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/tmp/sanka/src/components/Navbar.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const config = animeConfig.default || animeConfig;
  const {
    sankadonghub: { siteName, description, favicon }
  } = config;
  const seoProps = Astro2.props.seo;
  const seo = {
    titleDefault: siteName,
    description,
    ...seoProps
  };
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"', '><meta name="referrer" content="no-referrer"><link rel="icon"', '><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet"><link href="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css" rel="stylesheet">', "", '</head> <body class="font-inter relative bg-zinc-200 dark:bg-zinc-950 text-zinc-800 dark:text-zinc-50"> ', ' <main id="main" class="container min-h-screen relative"> <div id="leluhur" class="hidden flex-col gap-3"> ', ' </div> <div id="spinner-wrapper" class="top-0 right-8 pt-[90px] fixed flex justify-center items-center"> <span class="loader"></span> </div> </main> ', ' <script src="https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js"><\/script> <script>\n  (function () {\n    function isDark() {\n      return (\n        window.matchMedia &&\n        window.matchMedia("(prefers-color-scheme: dark)").matches\n      );\n    }\n    function getTheme() {\n      const theme = localStorage.getItem("theme");\n      if (theme) return theme;\n      return isDark() ? "dark" : "light";\n    }\n    function setTheme() {\n      const htmlEl = document.documentElement;\n      const moonIconEl = document.getElementById("icon-moon");\n      const sunIconEl = document.getElementById("icon-sun");\n      const theme = getTheme();\n      if (moonIconEl && sunIconEl) {\n        if (theme === "light") {\n          sunIconEl.classList.remove("hidden");\n          moonIconEl.classList.add("hidden");\n        } else if (theme === "dark") {\n          moonIconEl.classList.remove("hidden");\n          sunIconEl.classList.add("hidden");\n        }\n      }\n      htmlEl.dataset.theme = theme;\n      htmlEl.style.colorScheme = theme;\n      localStorage.setItem("theme", theme);\n    }\n    setTheme();\n  })();\n\n  document.addEventListener("DOMContentLoaded", () => {\n    const leluhurEl = document.getElementById("leluhur");\n    const spinnerWrapperEl = document.getElementById("spinner-wrapper");\n    leluhurEl.classList.remove("hidden");\n    leluhurEl.classList.add("flex");\n    spinnerWrapperEl.classList.add("hidden");\n  });\n<\/script> ', "</body></html>"])), addAttribute(Astro2.generator, "content"), addAttribute(favicon, "href"), renderComponent($$result, "SEO", $$SEO, { ...seo }), renderHead(), renderComponent($$result, "Navbar", $$Navbar, { "navLinks": [
    { title: "Home", href: "/" },
    { title: "Ongoing", href: "/ongoing" },
    { title: "Completed", href: "/completed" },
    { title: "History", href: "/history" },
    { title: "Donasi", href: "https://nyawer.co/Benxx" }
  ] }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "navLinks": {
    _1: [
      { title: "Daftar Genre", href: "/genres" },
      { title: "Jadwal Rilis", href: "/schedule" },
      { title: "A-Z List", href: "/az-list/A" },
      { title: "Seasons", href: "/genres" }
    ],
    _2: [
      { title: "Disclaimers", href: "/disclaimers" },
      {
        title: "Donasi",
        href: "https://nyawer.co/Benxx",
        targetBlank: true
      },
      {
        title: "Terima Kasih",
        href: "https://nyawer.co/Benxx",
        targetBlank: true
      }
    ]
  } }), renderScript($$result, "/tmp/sanka/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts"));
}, "/tmp/sanka/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$SearchIcon as a };
