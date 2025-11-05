import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.website.js'
import MainPage from '../pageobjects/main.website.js';
describe('Swag Labs Login Application',()=>{
    it('should login with the correct login info', async()=>{
        //await LoginPage.open()
        //await LoginPage.login('standard_user','secret_sauce')
        //await expect(MainPage.validation).toBeExisting()
        //await expect(MainPage.validation).toHaveText(
            //expect.stringContaining('Products'))
        const usernames=['standard_user', 'locked_out_user', 'problem_user', 'performance_glitch_user', 'error_user', 'visual_user'];
        for(var selection=0;selection<usernames.length;selection++){
	        for(var bool=0;bool<2;bool++){
                await LoginPage.open();
                if(bool==0){
	                await LoginPage.login(usernames[selection], 'secret_sauce');
	                if(selection==1){
                        await expect(LoginPage.negaValidation).toBeExisting()
                        await expect(LoginPage.negaValidation).toHaveText(
                            expect.stringContaining('Epic sadface: Sorry, this user has been locked out.'))		
                    }else{
                        await expect(MainPage.main1Validation).toBeExisting()
                        await expect(MainPage.main1Validation).toHaveText(
                            expect.stringContaining('Products'));
                        await expect(MainPage.main2Validation).toBeExisting()
                        if(selection%3==2){
                            await expect(MainPage.main2Validation).toHaveAttr(
                                'src',
                                expect.stringContaining('/static/media/sl-404.168b1cce10384b857a6f.jpg'))
                            await expect(MainPage.main3Validation).toBeExisting()
                            if(selection==2){
                                await expect(MainPage.main3Validation).toHaveAttr(
                                    'src',
                                    expect.stringContaining('static/media/sl-404.168b1cce10384b857a6f.jpg'))
                            }else if(selection==5){
                                await expect(MainPage.main3Validation).toHaveAttr(
                                    'src',
                                    expect.stringContaining('/static/media/bike-light-1200x1500.37c843b09a7d77409d63.jpg'))
                            }
                        }else{
                            await expect(MainPage.main2Validation).toHaveAttr(
                                'src',
	                            expect.stringContaining('/static/media/sauce-backpack-1200x1500.0a0b85a385945026062b.jpg'))
                        }
                    }
                }else{
                    await LoginPage.login(usernames[selection], 'secret_sauce!');
                    await expect(LoginPage.negaValidation).toBeExisting()
                    await expect(LoginPage.negaValidation).toHaveText(
                        expect.stringContaining('Epic sadface: Username and password do not match any user in this service'))
                }
            }
        }
    })
})