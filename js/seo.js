document.body.onscroll = function (event){
    var top = document.documentElement.scrollTop;
    
    if(top >= 100 && top <= 120) {
        
        for(let i of $_('body').childNodes){
            if(i.nodeType == 1){
                // console.log(i.clientWidth, i.clientHeight)
            }
        }
    }
}

// $('.seo-banner .animated').animate({
//     opacity: 1,
//     top: '50%',
// },500)
