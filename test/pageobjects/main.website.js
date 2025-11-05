import { $ } from '@wdio/globals'
import Website from './website.js';
class MainPage extends Website{
    get main1Validation(){
        return $('span[class="title"]');
    }
    get main2Validation(){
        return $('a[id=item_4_img_link] img')
    }
    get main3Validation(){
        return $('a[id=item_0_img_link] img')
    }

}
export default new MainPage();