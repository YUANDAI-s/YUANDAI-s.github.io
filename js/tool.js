//产生随机颜色
//产生[min,max)之间随机整数
//Math.floor(Math.random() * (max - min + 1) + min);
function randomRGB() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}
//产生随机位置，boxw画布宽度，boxh画布高度
//pointw点宽度，pointh点高度
function randomPos(boxw, boxh, pointw, pointh) {
    let w = boxw - pointw; //保证点出现在画布之内
    let h = boxh - pointh;
    let x = Math.floor(Math.random() * (w + 1));
    let y = Math.floor(Math.random() * (h + 1));
    return [x, y]; //数组形式返回随机坐标
}
//获取样式obj元素的attribute属性对应的样式值
function getStyle(obj, attribute) {
    return obj.currentStyle ? obj.currentStyle[attribute] /*ie*/ : document.defaultView.getComputedStyle(obj,
        null)[attribute] /*ie9 火狐 谷歌*/ ;
}