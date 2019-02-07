export default {
    app: {
        name: 'Multi Currency Quote',
        menu: {
            convert: 'Quote',
            list:    'All currencies',
        },
        language: {
            text: 'Language',
            options: {
                en:    'English',
                ja:    'Japanese',
                pt_BR: 'Portuguese (Brazil)',
                es:    'Spanish',
            },
        },
        footer: {
            author: {
                description: 'Developed by',
                name: 'Leandro Akira',
                github: '@leakira',
            },
            source: {
                description: 'Github source code',
                url: 'https://github.com/multi-currency/app',
            },
            credit: {
                description: 'Using',
                name: 'Vue.js',
                url: 'https://vuejs.org/',
            },
        },
        currency: {
            list: {
                title:  'Detailed currency list',
                code:   'Code',
                name:   'Name',
                symbol: 'Symbol',
            },
            convert: {
                title: 'See quotation in multiple currencies',
                value: {
                    input: 'Value to quote',
                    placeholder: 'Value',
                },
                from: {
                    input: 'Choice base currency',
                },
                to: {
                    input: 'Choice the currencies to quote',
                },
                submit: 'Quote',
                error: {
                    required: 'Field "{field}" is mandatory',
                },
            },
            result: {
                title: 'Quotation for {value}',
                back:  'New quotation',
            },
        },
        error: {
            notFound: 'Page not found',
            description: 'The page you are looking for may not exist',
        },
    }
}
