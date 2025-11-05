import { $ } from '@wdio/globals'
import Website from './website.js';
class MainPage extends Website{
    get validation(){
        return $('span[class="title"]');
    }
}
export default new MainPage();