
                                        "use strict"

let sectionOffset=$('#about').offset().top
$(window).scroll(function(){
    let windowScroll=$(window).scrollTop()
    // console.log(windowScroll);
    if(windowScroll > sectionOffset){
        $('.navbar').css({backgroundColor:'rgba(0,0,0,0.5)'})
    }

    else{
        $('.navbar').css({backgroundColor:'transparent'})
    }



})
