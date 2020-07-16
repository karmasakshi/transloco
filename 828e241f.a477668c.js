(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{129:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return p}));var r=t(2),a=t(6),o=(t(0),t(147)),l={title:"Hack The Library"},i={id:"hack",isDocsHomePage:!1,title:"Hack The Library",description:"The Loader",source:"@site/docs/hack.mdx",permalink:"/transloco/docs/hack",editUrl:"https://github.com/ngneat/transloco/edit/master/docs/docs/hack.mdx",sidebar:"docs",previous:{title:"The Transpiler",permalink:"/transloco/docs/transpiler"},next:{title:"Blog Posts",permalink:"/transloco/docs/blog-posts"}},s=[{value:"The Loader",id:"the-loader",children:[]},{value:"The Interceptor",id:"the-interceptor",children:[]},{value:"Missing Handler",id:"missing-handler",children:[]},{value:"Fallback Strategy",id:"fallback-strategy",children:[]}],c={rightToc:s};function p(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"the-loader"},"The Loader"),Object(o.b)("p",null,"The loader provides you with the ability to override the default handling of translation file loading."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { TranslocoLoader } from '@ngneat/transloco';\n\nexport class CustomLoader implements TranslocoLoader {\n  getTranslation(lang: string) {\n    if(langInLocalStorage) {\n      return of(langFromStorage);\n    }\n\n    return ...\n  }\n}\n\nexport const customLoader = {\n  provide: TRANSLOCO_LOADER,\n  useClass: CustomLoader\n}\n")),Object(o.b)("h2",{id:"the-interceptor"},"The Interceptor"),Object(o.b)("p",null,"The interceptor provides you with the ability to manipulate the translation object before it is saved by the service."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { TranslocoInterceptor } from '@ngneat/transloco';\n\nexport class CustomInterceptor implements TranslocoInterceptor {\n  preSaveTranslation(translation: Translation, lang: string): Translation {\n    return translation;\n  }\n\n  preSaveTranslationKey(key: string, value: string, lang: string): string {\n    return value;\n  }\n}\n\nexport const customInterceptor = {\n  provide: TRANSLOCO_INTERCEPTOR,\n  useClass: CustomInterceptor\n};\n")),Object(o.b)("h2",{id:"missing-handler"},"Missing Handler"),Object(o.b)("p",null,"This handler is responsible for handling missing keys. The default handler calls ",Object(o.b)("inlineCode",{parentName:"p"},"console.warn()")," with the key when config.isProdMode is set to ",Object(o.b)("inlineCode",{parentName:"p"},"false"),", and returns an empty string to use as a replacement for the missing key's value."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { TranslocoMissingHandler } from '@ngneat/transloco';\n\nexport class CustomHandler implements TranslocoMissingHandler {\n  handle(key: string, config: TranslocoConfig) {\n    return '...';\n  }\n}\n\nexport const customMissingHandler = {\n  provide: TRANSLOCO_MISSING_HANDLER,\n  useClass: CustomHandler\n};\n")),Object(o.b)("h2",{id:"fallback-strategy"},"Fallback Strategy"),Object(o.b)("p",null,"The fallback strategy is responsible for loading the fallback translation file, when the selected active language has failed to load. The default behavior is to load the language set in the ",Object(o.b)("inlineCode",{parentName:"p"},"config.fallbackLang"),", and set it as the new active language."),Object(o.b)("p",null,"When you need more control over this functionality, you can define your own strategy:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-ts"}),"import { TranslocoMissingHandler } from '@ngneat/transloco';\n\nexport class CustomHandler implements TranslocoMissingHandler {\n  handle(key: string, config: TranslocoConfig) {\n    return '...';\n  }\n}\n\nexport const customMissingHandler = {\n  provide: TRANSLOCO_MISSING_HANDLER,\n  useClass: CustomHandler\n};\n")),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"getNextLangs")," method is called with the failed language, and should return an array containing the next languages to load, in order of preference."))}p.isMDXComponent=!0},147:function(e,n,t){"use strict";t.d(n,"a",(function(){return u})),t.d(n,"b",(function(){return g}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),p=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(t),b=r,g=u["".concat(l,".").concat(b)]||u[b]||d[b]||o;return t?a.a.createElement(g,i(i({ref:n},c),{},{components:t})):a.a.createElement(g,i({ref:n},c))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,l=new Array(o);l[0]=b;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=t[c];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);