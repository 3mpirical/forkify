// Global app controller

import {helloWorldAlert, greetingQuestion} from "./view";
import { MDL } from "./model";


const CTRL = (function() {


    return {

    };
} () );


MDL.forkifySearch("burger")
    .then((searchData) => {
        console.log(searchData);
    })
    .catch((err) => {
        console.log(err);
    });
