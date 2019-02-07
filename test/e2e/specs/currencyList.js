module.exports = {
    'CurrencyList': function (browser) {
        const devServer = browser.globals.devServerURL+'/currency'

        browser
            .url(devServer)

            // Wait at least 5 seconds to load table content
            .waitForElementVisible('td', 5000)

            // App
            .waitForElementVisible('#app', 5000)

            // Title
            .assert.containsText('h1', 'Detailed currency list')

            // Table
            .assert.attributeContains('table', 'class', 'ui celled table')

            // Th
            .assert.containsText('th:first-child', 'Code')
            .assert.containsText('th:nth-child(2)', 'Name')
            .assert.containsText('th:last-child', 'Symbol')

            // First result
            .assert.containsText('td:first-child', 'AED')
            .assert.containsText('td:nth-child(2)', 'UAE Dirham')
            .assert.containsText('td:last-child', '-')
            .end()
    },
}
