export default {
    app: {
        name: 'Multi Currency Quote',
        menu: {
            convert: '見積もりする',
            list:    '全ての通過',
        },
        language: {
            text: '言語',
            options: {
                en:    '英語',
                ja:    '日本語',
                pt_BR: 'ポルトガル語 (ブラジル)',
                es:    'スペイン語',
            },
        },
        footer: {
            author: {
                description: '開発者',
                name: '高木 明',
            },
            source: {
                description: 'Githubソースコード',
            },
            credit: {
                description: '使用ツール',
            },
        },
        currency: {
            list: {
                title:  '通過の詳細リスト',
                code:   'コード',
                name:   '名前',
                symbol: 'シンボル',
            },
            convert: {
                title: '複数の通過の見積もりを見る',
                value: {
                    input: '見積金額',
                    placeholder: '金額',
                },
                from: {
                    input: 'ベース通過を選択してください',
                },
                to: {
                    input: '見積もりの通過を選択してくだい',
                },
                submit: '見積もりする',
                error: {
                    required: '"{field}"は必須です',
                },
            },
            result: {
                title: '{value}の見積もり',
                back:  '新しく見積もりをする',
            },
        },
        error: {
            notFound: 'Not found',
            description: 'お探しのページが見つかりませんでした',
        },
    }
}
