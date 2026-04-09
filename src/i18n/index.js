import { createI18n } from "vue-i18n"

import i18nFr from "./fr"
import i18nEn from "./en"

export const i18n = createI18n({
  locale: 'en',
  fallbackLocale: 'fr',
  legacy: false,
  messages: {
    en: i18nEn,
    fr: i18nFr,
  }
})