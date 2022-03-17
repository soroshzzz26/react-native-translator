import Translator from './components/Translator';
export default Translator;

export const USER_AGENT =
  'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.0.4) Gecko/20100101 Firefox/4.0';

export {default as useTranslator} from './hooks/useTranslator';
export {default as TranslatorProvider} from './providers/TranslatorProvider';

export type LanguageCode =
  | 'af'
  | 'ga'
  | 'sq'
  | 'it'
  | 'ar'
  | 'ja'
  | 'az'
  | 'kn'
  | 'eu'
  | 'ko'
  | 'bn'
  | 'la'
  | 'be'
  | 'lv'
  | 'bg'
  | 'lt'
  | 'ca'
  | 'mk'
  | 'zh-CN'
  | 'ms'
  | 'zh-TW'
  | 'mt'
  | 'hr'
  | 'no'
  | 'cs'
  | 'fa'
  | 'da'
  | 'pl'
  | 'nl'
  | 'pt'
  | 'en'
  | 'ro'
  | 'eo'
  | 'ru'
  | 'et'
  | 'sr'
  | 'tl'
  | 'sk'
  | 'fi'
  | 'sl'
  | 'fr'
  | 'es'
  | 'gl'
  | 'sw'
  | 'ka'
  | 'sv'
  | 'de'
  | 'ta'
  | 'el'
  | 'te'
  | 'gu'
  | 'th'
  | 'ht'
  | 'tr'
  | 'iw'
  | 'uk'
  | 'hi'
  | 'ur'
  | 'hu'
  | 'vi'
  | 'is'
  | 'cy'
  | 'id'
  | 'yi';

export const LANGUAGE_CODES: LanguageCode[] = [
  'af',
  'ga',
  'sq',
  'it',
  'ar',
  'ja',
  'az',
  'kn',
  'eu',
  'ko',
  'bn',
  'la',
  'be',
  'lv',
  'bg',
  'lt',
  'ca',
  'mk',
  'zh-CN',
  'ms',
  'zh-TW',
  'mt',
  'hr',
  'no',
  'cs',
  'fa',
  'da',
  'pl',
  'nl',
  'pt',
  'en',
  'ro',
  'eo',
  'ru',
  'et',
  'sr',
  'tl',
  'sk',
  'fi',
  'sl',
  'fr',
  'es',
  'gl',
  'sw',
  'ka',
  'sv',
  'de',
  'ta',
  'el',
  'te',
  'gu',
  'th',
  'ht',
  'tr',
  'iw',
  'uk',
  'hi',
  'ur',
  'hu',
  'vi',
  'is',
  'cy',
  'id',
  'yi',
];
