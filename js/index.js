$(function () {
    $('#fullpage').fullpage({
        verticalCentered: false, // 文本是否垂直居中  默认：true
        slidesNavigation: true, // 横向导航
        navigationColor: "#fff",
        // 页面加载前执行
        afterRender: function () {

        },
        // index: 当前屏页
        afterLoad: function (anchorLink, index) {
            if (index == 1) {
                $('.one img').animate({
                    top: 0,
                    opacity: 1
                }, 1000)

                $('.one .cs').animate({
                    top: 0,
                    opacity: 1
                }, 1000, function () {
                    $(this).css('transform', 'rotateX(360deg)')
                })
            }
        },
        // index: 上次屏页 nextIndex: 当前屏页 direction: 滚动趋势(up, down)
        onLeave: function (index, nextIndex, direction) {
            if (nextIndex == 2 && index == 1) {
                $('.exp').animate({
                    opacity: 1,
                    marginTop: 0
                }, 1000, function () {

                    $('.sec-t #cat').css({ 'opacity': 1, 'transform': 'rotateY(360deg)' })
                })
            }

            if (nextIndex == 3 && index == 2) {
                $('.l-tle-b').animate({
                    left: 0
                }, 500)

                $('.l-rgt .l-rgt-i > li:nth-child(1)').animate({
                    right: 0
                }, 500)

                setTimeout(function () {
                    $('.d-san .t-box .l-tle .l-img').animate({
                        left: 0
                    }, 500)

                    $('.l-rgt .l-rgt-i > li:nth-child(2)').animate({
                        right: 0
                    }, 500)
                }, 500)

                setTimeout(function () {
                    $('.l-rgt .l-rgt-i > li:nth-child(3)').animate({
                        right: 0
                    }, 500)
                }, 1000)
            }

            if (nextIndex == 4 && index == 3) {
                $('.d-si .f-box .f-box-it .it-l,.d-si .f-box .f-box-it .it-r').animate({
                    opacity: 1,
                    right: 0
                }, 500)

                am()
            }

            if (nextIndex == 5 && index == 4) {
                $('.d-wu .five-box .five-box-case').animate({
                    top: 0,
                    opacity: 1
                }, 100)

                five_am()
            }

            if (nextIndex == 6 && index == 5) {
                $('.d-liu .s-box .box-header').animate({
                    opacity: 1,
                    top: 0
                },500)

                $('.d-liu .s-box .ywx .ywx-l').animate({
                    opacity: 1,
                    left: 0
                },500)

                $('.d-liu .ywx .ywx-r').animate({
                    opacity: 1,
                    right: 0
                },500)
            }
        },
    });
});
setInterval(function () {
    $.fn.fullpage.moveSlideRight()
}, 10000)

// 第四屏
function am(f = '.d-si .f-box-it-cte .dtsh', s = 500) {
    $(f).animate({
        opacity: 1,
        bottom: 0
    }, s)
}

function tab(ev) {
    var ev = window.event || ev;

    if(com == 'chrome'){
        all_tab('selection', ev.path[0], true, 'inline-block')
    }

    if(com == 'firefox'){
        all_tab('selection', ev.target, true, 'inline-block')
    }

    if(com == 'opera'){
        all_tab('selection', ev.path[0], true, 'inline-block')
    }

}

// 第五屏
function five_am(f = '.d-wu .five-box .case-cte > .secUl', s = 500) {
    $(f).animate({
        opacity: 1,
        bottom: 0
    }, s)
}

function five_tab(ev) {
    var ev = window.event || ev;

    if(com == 'chrome'){
        all_tab('secDiv', ev.path[0], true, 'flex')
    }

    if(com == 'firefox'){
        all_tab('secDiv', ev.target, true, 'flex')
    }

    if(com == 'opera'){
        all_tab('secDiv', ev.path[0], true, 'flex')
    }
}

// 第六屏
function l_tab(ev) {
    var ev = window.event || ev;

    if(com == 'chrome'){
        all_tab('tag', ev.path[0], false, 'block')
    }

    if(com == 'firefox'){
        all_tab('tag', ev.target, false, 'block')
    }

    if(com == 'opera'){
        all_tab('tag', ev.path[0], false, 'block')
    }
}

/* 
 * tab 切换
 *   dom: 切换样式
 *   self: 配合浏览器中不同的event对象
 *   animate: 是否执行动画
 *   type：CSS display值
 */
function all_tab(dom, self, animate, type)
{   
    var cont = $_('.'+dom).dataset.cont;
    $_('#' + cont).style.display = 'none';
    $_('.'+dom).classList.remove(dom);
    if(animate)
        $('#' + cont).css({ 'bottom': '-50%', 'opacity': 0 });

    self.classList.add(dom);
    var cont = self.dataset.cont;
    $_('#' + cont).style.display = type;
    if(animate)
        am('#' + cont, 10);
    // 判断ul下面 有两个 还是三个li
    var span = $__('#' + cont + ' li span')
    if (span.length == 2) {
        for (let i of span) {
            i.style.WebkitLineClamp = 6;
        }
    } else if (span.length == 3) {
        for (let i of span) {
            i.style.WebkitLineClamp = 4;
        }
    }
}