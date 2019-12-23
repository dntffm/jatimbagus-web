$(document).ready(function(){
    $(".sidebar").hide();
    $("#menu").click(function(){
        $(".sidebar").show(500);
    });
    
    $(".close").click(function(){
        $(".sidebar").hide(500);
    }); 

    $(".card").click(function(){
        if($(this).index() == 1){
            $(".dest-inner h1").text("Pantai Papuma");
        } else if($(this).index() == 2){
            $(".dest-inner h1").text("Kawah Ijen");
        } else if($(this).index() == 3){
            $(".dest-inner h1").text("J88");
        } else if($(this).index() == 4){
            $(".dest-inner h1").text("Pantai Payangan");
        } else if($(this).index() == 0){
            $(".dest-inner h1").text("Gunung Bromo");
        } 

    });
    

});