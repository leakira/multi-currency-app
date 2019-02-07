<template>
    <router-view></router-view>
</template>

<script>
    import i18n from '@/i18n'

    export default {
        name: 'RouterRoot',
        beforeRouteUpdate (to, from, next) { languageRedirector(to, from, next) },
        beforeRouteEnter (to, from, next) { languageRedirector(to, from, next) },
        methods: {
            progress () { return this.$parent.$refs.progress },
            redirectTo (params) { return this.$parent.$refs.menu.redirectTo(params) },
        },
    }

    function languageIsValid(i18n, language) {
        return language && i18n.messages.hasOwnProperty(language)
    }

    function languageRedirector(to, from, next) {
        window.scrollTo(0,0)
        let language = to.params.lang || i18n.fallbackLocale
        if (languageIsValid(i18n, language) && i18n.locale !== to.params.lang)
            i18n.locale = language
        next()
    }
</script>
