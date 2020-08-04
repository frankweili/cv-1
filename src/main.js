let html = document.querySelector("#html");
let style = document.querySelector("style");
let string = `/*前端新人
*开始我的表演
*首先制作一个div
*/
#div1{
  border: 1px solid red;
  height: 300px;
  width: 300px;
  position: fixed;
  top: 20px;
  right: 50%;
}
/*接下来我要把div变成一个太极图
*首先正方形变成一个圆形
*/
#div1{
  border-radius:50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
  

}
/*太极阴阳形成
*黑白
*/
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/*添加两个龙珠
*/
#div1::before{
  content:"";
  width:150px;
  height: 150px;
  display: block;
  position: absolute;
  top:0;
  right:50%;
  transform:translateX(50%);
  background: black;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
}
#div1::after{
  content: "";
  width:150px;
  height: 150px;
  display: block;
  position: absolute;
  bottom:0;
  right:50%;
  transform:translateX(50%);
  background: white;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);

}

}

`;
let string2 = "";

let n = 0;
let step = () => {
  setTimeout(() => {
    n = n + 1;
    if (string[n] === "\n") {
      string2 = string2 + "<br>";
    } else if (string[n] === " ") {
      string2 = string2 + "&nbsp;";
    } else {
      string2 = string2 + string[n];
    }
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 99999);
    html.scrollTo(0, 99999);
    if (n < string.length - 1) {
      step();
    } else {
    }
  }, 0);
};
step();
