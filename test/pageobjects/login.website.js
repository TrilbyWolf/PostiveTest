import { $ } from '@wdio/globals'
import Website from './website.js';
class LoginPage extends Website {
    get usernameElem(){
        return $('input[placeholder="Username"]');
    }
    get passwordElem(){
        return $('input[placeholder="Password"]');
    }
    get loginButtonElem(){
        return $('input[type="submit"]');
    }
    async login (username, password){
        await this.usernameElem.setValue(username);
        await this.passwordElem.setValue(password);
        await this.loginButtonElem.click();
    }
    open(){
        return super.open('login');
    }
}
export default new LoginPage();