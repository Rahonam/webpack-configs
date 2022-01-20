import "../css/main.css";
import "../css/button.css";
import "../css/counter.css";

import {counter,countBtn} from './getElements';

countBtn.addEventListener('click',function(){
    counter.innerText = parseInt(counter.innerText) + 1;  
})