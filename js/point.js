// 构造函数，产生点
function Point(x, y, color) {
    this.w = 20; //宽20px
    this.h = 20; //高20px
    this.x = x; //位置横坐标
    this.y = y; //位置纵坐标
    this.color = color; //颜色
}
// 用原型创建点所对应的div元素，并设置样式
Point.prototype.createDiv = function () {
    //创建div添加到box中
    this.div = document.createElement('div'); //创建div元素
    box.appendChild(this.div); //添加div到box中
    //设置div样式
    this.div.style.width = this.w + 'px'; //div宽度
    this.div.style.height = this.h + 'px'; //div高度
    this.div.style.left = this.x + 'px'; //div水平位置
    this.div.style.top = this.y + 'px'; //div垂直位置
    this.div.style.backgroundColor = this.color; //div颜色
    this.div.style.borderRadius = 10 + 'px'; //div为圆形
    this.div.style.position = 'absolute'; //div绝对定位，box相对定位
}