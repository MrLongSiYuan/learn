import _ from 'lodash'
import './style.css'
import img1 from './img/640_1136.jpg'
import img2 from './img/5419992.png'
import Data from './data.xml';
import printFun from './print'

function component() {
    var element = document.createElement('div');
    var btn = document.createElement('button');
    btn.innerHTML = "click me!"
    btn.addEventListener('click',printFun);

    element.setAttribute('class','error-color');
    // Lodash（目前通过一个 script 脚本引入）对于执行这一行是必需的
    element.innerHTML = _.join(['Hello', 'is me'], ' ');
    var aImg = new Image();
    var aImg2 = new Image();
    aImg.src = img1;
    aImg2.src = img2;

    element.appendChild(aImg);
    element.appendChild(aImg2);
    element.appendChild(btn);
    console.log(Data)
    return element;
}
let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);


if(module.hot){
    module.hot.accept('./print.js', function () {
        console.log('Accepting the updated printMe module!');
        document.body.removeChild(element);
        element = component(); // 重新渲染页面后，component 更新 click 事件处理
        document.body.appendChild(element);
    })
}