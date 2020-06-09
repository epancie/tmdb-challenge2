import {Router} from "wpe-lightning-sdk";
import {getMovies} from './api';

export default () => {

    Router.boot(async()=> {
        // this will always be called
    });

    Router.before("movies", async ({page})=>{
        // first wait for getMovies to resolve with data
        const data = getMovies();
        // call something like: page.movies = data; (page === the actual Lightning component instance)
        page.movies = data;
    }, 500 /* expires */);
}
