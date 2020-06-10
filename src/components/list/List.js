import {Lightning} from "wpe-lightning-sdk";
import Item from "../item/Item";

const itmeSpace = 250

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
        if (this._index > 0) {
            this.setIndex(this._index-1)
          }
        else{
            this.setIndex(0)
        }
        console.log("_handleLeft Idx:"+ this._index);        
    }

    _handleRight() {
        // @todo: update index and call setIndex
        if (this._index < this.items.length - 1) {
            this.setIndex(this._index+1)
          }
        else{
            this.setIndex(this.items.length - 1)
        }
        console.log("_handleRight Idx:"+ this._index);
        
    }

    setIndex(index) {
        /**
         * @todo:
         * Implement working setIndex method
         * that stores index and position movie component to focus
         * on selected item
         */
        this._index = index
        this.tag('Items').setSmooth('x', this._index * -itmeSpace)
        
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
               type: Item, item : el, x: idx*itmeSpace
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
        return this.tag("Items").children;
    }

    get activeItem() {
        // @todo: return selected item
        return this.tag('Items').children[this._index];
    }

    _getFocused() {
        // @todo:
        // return activeItem
        return this.activeItem;
    }
}
