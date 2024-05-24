function createPoints() {
    let ps = []; //数组，保存随机生成的所有点
    for (let i = 0; i < 10; i++) {
        let color = randomRGB(); //生成随机颜色
        let [x, y] = randomPos(boxw, boxh, 20, 20); //生成随机位置
        let p = new Point(x, y, color); //构造函数生成一个点
        ps.push(p); //将p加入ps数组
        ps[i].createDiv(); //产生点对应的div
    }
}
//清空画布
function clearPoints() {
    box.innerHTML = ""; //清空box内所有内容
}