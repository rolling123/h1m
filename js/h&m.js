//TODO  快捷导航处的搜索框效果
$("#nav .search").focus(function(){
    $(this).animate({
        width:'110px'
    },300)
})
$("#nav .search").blur(function(){
    $(this).stop(true).animate({
        width:'90px'
    },300)
})

//TODO 给快捷导航设置弹出框的效果
$("#nav>.menu>ul>li:not(last-child)").each(function(i){
    $(this).hover(function(){
        $(this).css("height","40px");
        $("#nav .menu .content").eq(i).stop(true).fadeIn();
    },function(){
        $(this).css("height","19px");
        $("#nav .menu .content").eq(i).stop(true).fadeOut();
    })
})

//TODO 轮播部分效果实现
var alter={
    LIWIDTH:0,
    timer:null,
    MID:0,
    L:0,
    autoMove:function(){
        this.L=$('.container_box_alter>li').length;
        this.MID=parseInt($('.container_box_alter>li').length/2);
        this.LIWIDTH=parseFloat($('.container_box_alter>li').css('width'));
        var me=this;
        this.timer=setInterval(function(){
            $('.container_box_alter').animate({
                left:-me.LIWIDTH+'px'
            },600,function(){
                $(this).children('li:first-child').appendTo($('.container_box_alter'));
                $(this).children("li").removeClass("hover").eq(0).addClass("hover");
                var i=$(this).children("li").eq(0).attr("data-i");
                $('.container_box_alter_idxs').children("li").removeClass("active").eq(i-1).addClass("active");
                $(".alter>.share span").text(i);
                $(this).css('left','0px');
            })
        },10000)
    }
}
//TODO 实现自动轮播
alter.autoMove();
//TODO 启停轮播
//TODO 箭头启停轮播
$('.alter>i').hover(function(){
    if(alter.timer){
        clearInterval(alter.timer);
        alter.timer=null;
    }
},function(){
    alter.autoMove();
})
//TODO 大广告处.container_alter启停轮播
$(".container_alter").hover(function(){
    if(alter.timer){
        clearInterval(alter.timer);
        alter.timer=null;
    }
},function(){
    alter.autoMove();
})
//TODO 给箭头加自动轮播效果
$('.alter>i').click(function(){
    if(this.className==='prev'){
        $(".container_box_alter>li:last-child").prependTo($(".container_box_alter"));
        $('.container_box_alter').css('left',-alter.LIWIDTH+'px');
        $('.container_box_alter').animate({
            left:'0px'
        },600,function(){
            var i=$(this).children("li").eq(0).attr("data-i");
            $('.container_box_alter_idxs').children("li").removeClass("active").eq(i-1).addClass("active");
            $(".alter>.share span").text(i);
        })
    }
    else if(this.className==='next'){
        $('.container_box_alter').animate({
            left:-alter.LIWIDTH+'px'
        },600,function(){
            $(this).children('li:first-child').appendTo($('.container_box_alter'));
            var i=$(this).children("li").eq(0).attr("data-i");
            $('.container_box_alter_idxs').children("li").removeClass("active").eq(i-1).addClass("active");
            $(".alter>.share span").text(i);
            $(this).css('left','0px');
        })
    }
})
//TODO 给下标小广告加手动效果
$(".share>div").hover(function(){
    $(".container_box_alter_idxs").stop(true).fadeIn();
    if(alter.timer){
       clearInterval(alter.timer);
       alter.timer=null;
    }
}, function(){
    $(".container_box_alter_idxs").stop(true).fadeOut();
    alter.autoMove()
})
$('.container_box_alter_idxs>li>a').each(function(item){
    $(this).click(function(e){
        e.preventDefault();
        $(this).parents(".container_box_alter_idxs").hide();
        var idx=$(".container_box_alter>li").index($("li[data-i="+(item+1)+"]"));
        var tarSrc=$(".container_box_alter>li").eq(idx).children("img").attr("src");
        if(idx>alter.MID){
            $(".target_img>img").attr("src",tarSrc);
            $(".target_img").fadeIn(300,function(){
                for(var i=0;i<alter.L-idx;i++){
                    $(".container_box_alter>li:last-child").prependTo($(".container_box_alter"));
                }
            $(this).css("display","none");
            });
        }
        else{
            $(".target_img>img").attr("src",tarSrc);
            $(".target_img").fadeIn(
                300,function(){
                for(var i=0;i<idx;i++){
                    $(".container_box_alter>li:first-child").appendTo($(".container_box_alter"));
                }
                $(this).css("display","none");
            });
        }
        $('.container_box_alter_idxs').children("li").removeClass("active").eq(item).addClass("active");
        $(".alter>.share span").text(item+1);
    })
})

//TODO 在线客户弹出效果
$("#chart").hover(function(){
    $(this).animate({
        bottom:"0"
    },200)
},function(){
    $(this).animate({
        bottom:"-52px"
    },200)
})
