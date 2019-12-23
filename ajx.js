$(document).ready(function(){
    
    $('.klil').show();
    $('.modal').hide();

    

    $.ajax({
        url : "generated.json",
        success: function(data){
            var firstData = data[0];
                $('.wrapper').append('<div class="kota"><h1>'+firstData.Kota+'</h1>');
                $('.kota').append('<div class="destinasi">');
                //$('<div class="destinasi">').appendTo($('.kota').get(0));
                for(var i=0; i<firstData.destinasi.length; i++){
                    $('<div class="item-destinasi"><img src="'+firstData.destinasi[i].picture+'"><p>'+firstData.destinasi[i].name+'</p>').appendTo($('.destinasi'));
                    //$('<p>'+firstData.destinasi[j].name+'</p>').appendTo($('.destinasi').get(0));
               }
                
            }
    })

    $('.klil').click(function(){
        $.ajax({
            url : "generated.json",
            success: function(data){
                for(var i = 1; i< data.length; i++){
                    $('.wrapper').append('<div class="kota"><h1>'+data[i].Kota+'</h1>');
                    //$('.kota').append('<div class="destinasi">');
                    $('<div class="destinasi">').appendTo($('.kota').get(i));
                    for(var j=0; j<data[i].destinasi.length; j++){
                        $('<div class="item-destinasi"><img src="'+data[i].destinasi[j].picture+'"><p>'+data[i].destinasi[j].name+'</p>').appendTo($('.destinasi').get(i));
                        //  $('<p>'+data[i].destinasi[j].name+'</p>').appendTo($('.item-destinasi').get(j));
                   }
                }
            }
        })

        $('.klil').hide();
    })

    $(document).on('click','.item-destinasi',function(){
        $('.modal').show();
    })

    $(document).on('click','.clsModal',function(){
        $('.modal').hide();
    })
    
    
})