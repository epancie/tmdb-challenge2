import {
  Lightning,
  Utils,
  Router
} from 'wpe-lightning-sdk';
import provider from "./lib/data-provider";
import routes from "./lib/routes";
import {
  init as initApi
} from "./lib/api"
import {
  Splash,
  Menu
} from "./pages";

export default class App extends Lightning.Component {

  static getFonts() {
    //console.log("App fonts 1");
    return [{
        family: 'SourceSansPro-Regular',
        url: Utils.asset('fonts/SourceSansPro-Regular.ttf'),
        descriptors: {}
      },
      {
        family: 'SourceSansPro-Black',
        url: Utils.asset('fonts/SourceSansPro-Black.ttf'),
        descriptors: {}
      },
      {
        family: 'SourceSansPro-Bold',
        url: Utils.asset('fonts/SourceSansPro-Bold.ttf'),
        descriptors: {}
      }
    ];
  }

  static _states() {
    //console.log("App states 1");
    return [
      class Loading extends this {
        $enter() {
          this.tag("Loading").visible = true;
        }

        $exit() {
          this.tag("Loading").visible = false;
        }
      },
      class Widgets extends this {
        $enter(args, widget) {
          // store widget reference
          this._widget = widget;

          // since it's possible that this behaviour
          // is non-remote driven we force a recalculation
          // of the focuspath
          this._refocus();
        }

        _getFocused() {
          // we delegate focus to selected widget
          // so it can consume remotecontrol presses
          return this._widget;
        }
      }
    ];
  }

  static _template() {
    //console.log("App template 1");
    return {
      Pages: {
        forceZIndexContext: true,
        w: 1000
      },
      /*
      Splash:{
         type: Splash
      },
      */
      Widgets: {
        Menu: {
          type: Menu
        }
      },
      Loading: {

      },
      Wrapper: {
        Label: {
          text: {}
        }
      }
    };
  }

  // when App instance is initialized we call the routes
  // this will setup all pages and attach them to there route
  _setup() {
    console.log("App setup 1");
    initApi(this.stage);
    Router.startRouter({
      appInstance: this,
      provider,
      routes
    });
    Router.navigate("splash");
  }

  _handleEnter() {
    console.log("App enter 1");
    // call
  }
/*
  _getFocused() {
    console.log("App focus 1");
    return this.tag("Splash")
  }
*/
  _handleLeft() {
    console.log("App left 1");
    this.setIndex(this.index - 1);
  }

  // tell page router where to store the pages
  get pages() {
    //console.log("App pages 1");
    return this.tag("Pages");
  }

  get widgets() {
    //console.log("App widgets 1");
    return this.tag("Widgets")
  }

  _getFocused() {
    //console.log("App focused 1");
    return Router.getActivePage();
  }

}
