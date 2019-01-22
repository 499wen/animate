function $_(f){
    return document.querySelector(f)
}

function $__(f){
    return document.querySelectorAll(f);
}

// 浏览器兼容
function compatible() {
    var userAgent = navigator.userAgent; // 获取浏览器字符串
    console.log(userAgent)
    var is_opera = userAgent.indexOf('OPR') > -1 ; // opera
    var is_chrome = userAgent.indexOf('Chrome') > -1
                      &&  userAgent.indexOf('Safari') > -1; // 谷歌
    var is_firefox = userAgent.indexOf('Firefox') > -1; // 火狐

    if(is_opera){
        return 'opera';
    }

    if(is_chrome){
        return 'chrome';
    }

    if(is_firefox){
        return 'firefox';
    }

}
var com = compatible()

var w_s_width = window.screen.width
var w_s_height = window.screen.height

// 给每屏设置宽度
var section = $__(".section");
for(let i of section){
    i.style.width = w_s_width + 'px'
}

// 给body下子节点 div加上 w_s_width，w_s_height
/*
 * toobar_height: 网页工具栏高度
 * screen_width: 纵向滑动条的宽度
 */
var toolbar_height = window.outerHeight - window.innerHeight;
var screen_width = window.innerWidth - document.body.clientWidth

size(w_s_width - screen_width)
// 设置初始宽高
function size(width) {
    var div = $__('body > div');

    for(let i of div){
        // w_s_width - screen_width
        i.style.width = width  + 'px';
        i.style.height = window.screen.availHeight - toolbar_height + 'px';
        i.style.overflowY = 'hidden';
    }
}

if(w_s_width == document.body.clientWidth){
    // 给头部设置固定宽度 w_s_width - screen_width
    $_('.tle').style.width = w_s_width + 'px';
} else {
    $_('.tle').style.width = w_s_width - screen_width + 'px';
}

// 随时监听浏览器尺寸
document.body.onresize = function (event) {
    var w=document.body.clientWidth;

    if(window.innerWidth == window.screen.width){
        size(w)
        $_('.tle').style.width = w + 'px';
    }
}

/*
 * data: dom对象
 * single：是否只返回实例 (true, false)
 */
function hei(data, single){

    var n = 0;
    var el = getComputedStyle(data, null);
    if(!single){
        if(el.position != 'static'){

        }else {
            n += el.marginTop.replace('px', '') * 1;
            n += el.height.replace('px', '') * 1;
            n += el.marginBottom.replace('px', '') * 1;
        }
    
        return n
    }else {
        return el
    }
    
}

// 算出元素距离页面顶部的距离
var dom = $_('.t-cat li:nth-child(1)');
var element = hei(dom, true); 
var num = 0;
var parent = dom.parentNode;
var par_el = hei(parent, true)
/* 
 * 查找当前元素(兄弟元素[上面的]) 最大的父盒子 及其兄弟(上面的)
 *
 */
// 找出当前元素 前面的兄弟元素 若当前元素是定位则只考虑定位的高度就行
if(element.position == 'static'){
    var pre = dom.previousElementSibling;
    while(pre){
        
        num += hei(pre, false)
        pre = pre.previousElementSibling;
    }
}else {
    // top值 不管是百分比还是像素 都可以转成 px
    num +=  element.top.replace('px', '') * 1;
    console.log(num)
}

// 找出最顶级父盒子(body之下)
while(parent.parentNode.tagName != 'BODY'){
    parent = parent.parentNode
}

// 找出顶级父盒子 前面的兄弟元素
var p_pre = parent.previousElementSibling;
while(p_pre){
    
    num += hei(p_pre, false)
    console.log(num)
    p_pre = p_pre.previousElementSibling;   
}

console.log('最终高度', num)

// var aa = getComputedStyle($_('.t-js'), null)
// console.log(aa.position)