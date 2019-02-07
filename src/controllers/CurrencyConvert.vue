<template src="../views/currency/convert.html"></template>
<style scoped src="../views/currency/convert.css"></style>

<script>
    import Currency from '@/services/Currency'
    import router from '@/router'

    export default {
        name: 'CurrencyConvert',
        data () {
            return {
                items: {},
                model: {
                    value: '',
                    from:  '',
                    to:    [],
                    fromSymbol: '',
                },
                fieldNames: {
                    value: this.$i18n.t('app.currency.convert.value.input'),
                    from:  this.$i18n.t('app.currency.convert.from.input'),
                    to:    this.$i18n.t('app.currency.convert.to.input'),
                },
            }
        },
        mounted () {
            this.$parent.progress().start()
            Currency.findAll({ sort: 'most_used' })
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
            isNumber (evt) {
                evt = (evt) ? evt : window.event
                let charCode = (evt.which) ? evt.which : evt.keyCode
                if ((charCode > 31 && (charCode < 48 || charCode > 57)) && charCode !== 46) {
                    evt.preventDefault()
                } else {
                    return true
                }
            },
            validateModel (model) {
                let isValid = true
                Object.keys(model).forEach(name => {
                    if (name !== 'fromSymbol' && (!model[name] || model[name].length === 0)) {
                        this.flashError(this.$i18n.t('app.currency.convert.error.required', { field: this.fieldNames[name] }))
                        isValid = false
                    }
                })
                if (isValid === false) window.scrollTo(0,0)
                return isValid
            },
            onSubmit () {
                if (this.validateModel(this.model)) {
                    this.model.fromSymbol = this.items[this.model.from].currencySymbol
                    this.$route.params.model = this.model
                    router.push(this.$parent.redirectTo({ path: '/result' }))
                }
            },
        },
    }
</script>
