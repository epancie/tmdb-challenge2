import {Lightning} from "wpe-lightning-sdk";
import Item from "../item/Item";

export default class List extends Lightning.Component {
    static _template() {
        return {
            Label: {
                text: {text: '', fontFace: 'Magra'}
            },
            Items: {
                y: 75
            }
        }
    }

    _init() {
      console.log("List init 1");
        this._index = 0;
    }

    _handleLeft() {
        // @todo: update index and call setIndex
    }

    _handleRight() {
        // @todo: update index and call setIndex
    }

    setIndex(index) {
        /**
         * @todo:
         * Implement working setIndex method
         * that stores index and position movie component to focus
         * on selected item
         */
    }

    set label(v) {
        // @todo: update list title
    }

    set items(value) {
      console.log("List set movies 1");
      /*
      for (var i = 0; i < value.results.length; i++) {
        console.log(value.results[i].original_title);
      }
      */

      this.tag("Items").children = value.results.map((el, idx)=>{
           return {
               type: Item, item : el, x: idx*250
           };
    });

        // we add an array of object with type: Item
        // this.tag("Levels").children = v.map((el, idx)=>{
        //     return {
        //         type: Item
        //     };
        // });

    }

    get items() {
        return this.tag("Levels").children;
    }

    get activeItem() {
        // @todo: return selected item
    }

    _getFocused() {
        // @todo:
        // return activeItem
    }
}
