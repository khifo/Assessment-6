
import { Builder, Capabilities, By } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Draw button displays the div with id=choices', async () => {
    const choicesDiv = await driver.findElement(By.id('choices'))
    const isChoicesDivVisible = await choicesDiv.isDisplayed();
    expect(isChoicesDivVisible).toBe(true)
})

test('Add to Duo button displays the div with id=player-duo', async () => {
    const playerDuoDiv = await driver.findElement(By.id('player-duo'));
    const isPlayerDuoDivVisible = await playerDuoDiv.isDisplayed();
    expect(isPlayerDuoDivVisible).toBe(true)
})