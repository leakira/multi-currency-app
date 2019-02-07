export default {
    app: {
        name: 'Multi Currency Quote',
        menu: {
            convert: 'Cotizar',
            list:    'Todas las monedas',
        },
        language: {
            text: 'Idioma',
            options: {
                en: 'Inglés',
                ja: 'Japonés',
                pt_BR: 'Portugués (Brasil)',
                es: 'Español',
            },
        },
        footer: {
            author: {
                description: 'Desarrollado por',
            },
            source: {
                description: 'Código fuente en Github',
            },
            credit: {
                description: 'Usando',
            },
        },
        currency: {
            list: {
                title: 'Lista detallada de las monedas',
                code: 'Código',
                name: 'Nombre',
                symbol: 'Símbolo',
            },
            convert: {
                title: 'Mire cotización en varias monedas',
                value: {
                    input: 'Valor para cotizar',
                    placeholder: 'Valor',
                },
                from: {
                    input: 'Elija la moneda base',
                },
                to: {
                    input: 'Elija las monedas para cotizar',
                },
                submit: 'Cotizar',
                error: {
                    required: 'El campo "{field}" es obligatorio',
                },
            },
            result: {
                title: 'Cotización para {value}',
                back: 'Nueva cotización',
            },
        }
    }
}
