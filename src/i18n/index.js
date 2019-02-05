import Vue from 'vue'
import VueI18n from 'vue-i18n'

// Languages
import en from './en'
import ja from './ja'
import ptBR from './pt_BR'
import es from './es'

Vue.use(VueI18n)

// Ready translated locale messages
const messages = {
    en: en,
    ja: ja,
    pt_BR: ptBR,
    es: es,
}

// Create VueI18n instance with options
export default new VueI18n({
    locale: 'en', // set locale
    fallbackLocale: 'en',
    messages,
})
