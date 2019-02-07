module.exports = {
    'CurrencyConvert': function (browser) {
        const devServer = browser.globals.devServerURL

        browser
            .url(devServer)

            // App
            .waitForElementVisible('#app', 5000)

            // Title
            .assert.containsText('h1', 'See quotation in multiple currencies')

            // Input for value
            .assert.containsText('label[for="value"]', 'Value to quote')
            .assert.attributeContains('input', 'id', 'value')
            .assert.attributeContains('input#value', 'type', 'number')

            // Select for base currency
            .assert.containsText('label[for="from"]', 'Choice base currency')
            .assert.attributeContains('select', 'id', 'from')

            // Label for checkgroup
            .assert.containsText('label[for="to"]', 'Choice the currencies to quote')

            // Label for checkgroup
            .assert.containsText('button', 'Quote')
            .end()
    },
    'CurrencyConvertResult': function (browser) {
        const devServer = browser.globals.devServerURL

        browser
            .url(devServer)

            // Wait at least 5 seconds to load form content
            .waitForElementVisible('option[value="USD"]', 5000)

            // Set convert values
            .setValue('input#value', '55')
            .click('select#from option[value=USD]')
            .click('input#to-USD')
            .click('button')

            // Result
            .pause(3000)

            // Title
            .assert.containsText('h1', 'Quotation for $ 55 (USD)')
            .assert.containsText('td:first-child', 'USD - United States Dollar')
            .assert.containsText('td:last-child', '$ 55.00')

            .end()
    },
}
