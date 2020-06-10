import {Lightning, Utils} from "wpe-lightning-sdk";
import {getImgUrl} from "../../lib/tools";

export default class Item extends Lightning.Component{
    static _template(){
        return {
            Title: {
                y: 0, x: 20, wordWrap: true,
                text: {fontFace: "Magra", fontSize: 24},
                alpha: 0 // El texto aparece transparente
            },
            Image: {
                y: 45
            }
        }
    }

    /**
     * @todo:
     * - toggle alpha on focus / unfocus (transition)
     */

    set item(v){
        // @todo: patch the correct image and title
        console.log(v.title);
        console.log(v.poster_path);
        this.tag("Image").src = 'http:'+getImgUrl(v.poster_path);
        this.tag("Title").text.text = v.title;
    }
}
