<template src="./views/layouts/application.html"></template>
<style scoped src="./views/layouts/application.css"></style>

<script>
    import LayoutMenu from './components/LayoutMenu'
    import LayoutFooter from './components/LayoutFooter'

    export default {
        name: 'App',
        components: {
            LayoutMenu,
            LayoutFooter,
        },
    }
</script>
