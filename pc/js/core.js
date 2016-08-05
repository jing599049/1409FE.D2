define(['jquery'],function($){
    
    $(".tuonav ol").eq(1).hide();
    $(".miancons>div").eq(0).hide();
    $("#sele").change(function(){
        if($("#sele :checked").val()=='下拉内容1'){
            $(".tuonav ol").eq(0).slideDown().siblings('ol').hide();
        }else{
            $(".tuonav ol").eq(1).slideDown().siblings('ol').hide();
        }
    })
    $(".navli li").on('click',function(){
        $(this).addClass('active').siblings().removeClass('active');
        var ind=$(this).index();
        $(".miancons>div").eq(ind).fadeIn().siblings().hide();
    });
    $(".dobtn").on('click',function(){
        $(".tk").fadeOut();
    })
    $('.navbt').on('click',function(){
        $(".tuonav").toggle();
    })
    $('.gjbtn').on('click',function(){
        $(".gj ul").toggle();
    })
    
    
})

