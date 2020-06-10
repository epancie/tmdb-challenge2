import {
  Lightning,
  Utils
} from 'wpe-lightning-sdk';
import {
  List
} from "../components"

export default class Main extends Lightning.Component {
  static _template() {
    return {
      scale: 0.5,
      Lists: {
        x: 100,
        y: 1500,
        zIndex: 3,
        type: List
      },
      Logo: {
        mountX: 0.5,
        mountY: 1,
        x: 500,
        y: 200,
        scale: 2,
        src: Utils.asset('images/logo.png'),
      },
    };
  }

  _init() {
    console.log("Main init 1");
    this._index = 0;
  }

  _focus() {
    console.log("Main focus 1");
  }

  /**
   * @todo: add set movies() that will be called by the data-provider.

   * inside set movies create new List child and call it's movies setter
   * and hand over the movies
   */

  set movies(x) {
    console.log("Main set movies 1");

    x.then((value) => {
      this.tag("Lists").items = value;
    });
  }

  _unfocus() {
    // @todo
    console.log("Main unfocus 1");
  }

  _getFocused() {
    // @todo: delegate focus to List child
    //console.log("Main getfocus 1");
  }

  _handleEnter() {
    console.log("Main enter 1");
    // call
  }

}
