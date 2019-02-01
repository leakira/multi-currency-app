import Vue from 'vue'
import VueI18n from 'vue-i18n'

// Languages
import en from './en'
import ptBR from './pt_BR'
import ja from './ja'

Vue.use(VueI18n)

// Ready translated locale messages
const messages = {
  en: en,
  pt_BR: ptBR,
  ja: ja
}

// Create VueI18n instance with options
export default new VueI18n({
  locale: 'en', // set locale
  messages
})
