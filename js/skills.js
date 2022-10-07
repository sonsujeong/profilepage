$(function(){
    $("#menu ul li a").click(function(){
        $("#menu ul li a").removeClass();
        $(this).addClass("selected");
      });   


      const perNum=80;
  
      $('.second.circle').circleProgress({
        value:perNum/100,
        startAngle:300,
        size:150,
        fill:{
          color:["red"]
        },
        animation:{
          duration:1500,
          easing:"swing"
        },
        //lineCap:"rect",
        lineCap:"round",
        reverse:true
      }).on('circle-animation-progress',function(event, progress){
        $(this).find('strong').html(Math.round(perNum*progress)+'<i>%</i>');
      });
   
    const perNum2=75;
   
      $('.second.circle1').circleProgress({
        value:perNum2/100,
        startAngle:300,
        size:150,
        fill:{
          color:["red"]
        },
        animation:{
          duration:1500,
          easing:"swing"
        },
        //lineCap:"rect",
        lineCap:"round",
        reverse:true
      }).on('circle-animation-progress',function(event, progress){
        $(this).find('strong').html(Math.round(perNum2*progress)+'<i>%</i>');
      });


	


});