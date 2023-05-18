import {proxy} from  'valtio';

let state = proxy({
    intro : true,
    home : false,
    about : false,
    socialLiks : false,
    works : false,
    startPage : true,
    checker :  false
});

export default state;