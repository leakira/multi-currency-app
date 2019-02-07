<template src="../views/currency/list.html"></template>
<style scoped src="../views/currency/list.css"></style>

<script>
    import Currency from '@/services/Currency'

    export default {
        name: 'CurrencyList',
        data () {
            return {
                items: {},
            }
        },
        mounted () {
            this.$parent.progress().start()
            Currency.findAll()
                .then(response => {
                    this.setData(response.data)
                })
                .catch(error => {
                    this.setData(error.response.data)
                })
        },
        methods: {
            setData (response) {
                this.$parent.progress().done()
                if (response.success) {
                    this.items = response.data
                } else {
                    this.flashError(response.message)
                    window.scrollTo(0,0)
                }
            },
        },
    }
</script>
