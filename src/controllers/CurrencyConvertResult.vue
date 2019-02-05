<template src="../views/currency/result.html"></template>
<style scoped src="../views/currency/result.css"></style>

<script>
    import Currency from '@/services/Currency'
    import router from '@/router'

    export default {
        name: 'CurrencyConvertResult',
        data () {
            return {
                items: {},
                value: '',
            }
        },
        beforeRouteEnter (to, from, next) {
            if (from.params.model) {
                Currency.convert(from.params.model)
                    .then(response => {
                        next(vm => vm.setData(from.params.model, response.data))
                    })
                    .catch(error => {
                        next(vm => vm.setData(error.response.data))
                    })
            } else {
                router.replace('/')
            }
        },
        mounted () {
            this.$parent.progress().start()
        },
        methods: {
            setData (model, response) {
                this.$parent.progress().done()
                this.value = model.fromSymbol+' '+model.value+' ('+model.from+')'.trim()
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
