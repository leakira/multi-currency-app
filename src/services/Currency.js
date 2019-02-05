import axios from 'axios'

export default class Currency
{
    static findAll(params={}) {
        return axios.get(this.url('currency', params))
    }

    static findNames() {
        return axios.get(this.url('currency/names'))
    }

    static convert(params) {
        return axios.get(this.url('convert/'+params.value, {
            from: params.from,
            to:   params.to.join(','),
        }))
    }

    static url(path='', params={}) {
        return 'https://multi-currency-api.herokuapp.com/'+path+this.formatParams(params)
    }

    static formatParams(params={}) {
        if (!params || params.length === 0) return ''

        let queryString = []
        Object.keys(params).forEach(k => queryString.push(k+'='+params[k]))
        return '?'+queryString.join('&')
    }
}
