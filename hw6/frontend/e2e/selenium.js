const webdriver = require('selenium-webdriver')

const url = 'http://localhost:8080/'

export const driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build()

exports.driver = driver
exports.By = webdriver.By
exports.findId = id => driver.findElement(webdriver.By.id(id))
exports.findCSS = css => driver.findElement(webdriver.By.css(css))
exports.go = _ => driver.navigate().to(url)
exports.sleep = millis => driver.sleep(millis)
exports.switchToIframe = element => driver.switchTo().frame(element)
exports.switchToDefault = _ => driver.switchTo().defaultContent()