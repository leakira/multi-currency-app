<template src="../views/layouts/footer.html"></template>
<style scoped src="../views/layouts/footer.css"></style>

<script>
    import i18n from '@/i18n'

    export default {
        name: 'layout-footer',
        data () {
            return {
                language: Object.keys(i18n.messages),
            }
        },
        methods: {
            isActive (name) { return this.$route.name === name ? 'active' : '' },
            redirectTo (params) {
                if (!params.lang) params.lang = this.$route.params.lang || ''
                if (!params.path) {
                    let paths = this.$route.path.split('/')
                    params.path = paths[paths.length-1]
                }

                let fullPath = '/'
                if (params.lang && params.lang !== 'en') fullPath += `${params.lang}/`
                if (params.path) {
                    let path = params.path.replace('/', '')
                    if (path) fullPath += path
                }

                return fullPath
            }
        },
    }
</script>
