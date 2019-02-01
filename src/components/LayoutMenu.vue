<template src="../views/layouts/menu.html"></template>
<style scoped src="../views/layouts/menu.css"></style>

<script>
    export default {
        name: 'layout-menu',
        data () {
            return {
                language: [
                    'en',
                    'ja',
                    'pt_BR',
                ],
            }
        },
        methods: {
            isActive (name) {
                return this.$route.name === name ? 'active' : ''
            },
        },
    }
</script>
