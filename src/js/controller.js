// Global app controller

import {helloWorldAlert, greetingQuestion} from "./view";
import { MDL } from "./model";


const CTRL = (function() {


    return {

    };
} () );


MDL.forkifySearch("54634235 364vkjbg")
    .then((searchData) => {
        console.log(`resolved: ${JSON.stringify(searchData, null, 2)}`);
    })
    .catch((err) => {
        console.log(`rejected: ${JSON.stringify(err, null, 2)}`);
    });
