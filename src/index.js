import _ from 'lodash'
import './style.css'
import img1 from './img/640_1136.jpg'
import Data from './data.xml';
import printFun from './print'

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    btn.innerHTML = "click me!"
    btn.addEventListener('click',printFun);

    element.setAttribute('class','error-color');
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    var aImg = new Image();
    aImg.src = img1;

    element.appendChild(aImg);
    element.appendChild(btn);
    console.log(Data)
    return element;
}

document.body.appendChild(component());