import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.website.js'
import MainPage from '../pageobjects/main.website.js';
describe('Swag Labs Login Application',()=>{
    it('should login with the correct login info', async()=>{
        await LoginPage.open()
        await LoginPage.login('standard_user','secret_sauce')
        await expect(MainPage.validation).toBeExisting()
        await expect(MainPage.validation).toHaveText(
            expect.stringContaining('Products'))
    })
})