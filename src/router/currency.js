import CurrencyList from '@/controllers/CurrencyList'
import CurrencyConvert from '@/controllers/CurrencyConvert'
import CurrencyConvertResult from '@/controllers/CurrencyConvertResult'

export default [
    {
        path: '/',
        name: 'CurrencyConvert',
        component: CurrencyConvert,
    },
    {
        path: '/result',
        name: 'CurrencyConvertResult',
        component: CurrencyConvertResult,
    },
    {
        path: '/currency',
        name: 'CurrencyList',
        component: CurrencyList,
    },
]
