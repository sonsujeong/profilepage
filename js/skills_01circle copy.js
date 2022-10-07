 const perNum=90;
    
    $('.wp2').waypoint(function(){
      $('.wp2').addClass('animated fadeIn');
      $('.second.circle').circleProgress({
        value:perNum/100,
        startAngle:300,
        size:160,
        fill:{
          color:["#967E76"]
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
     },{ offset:'75%'
    });


    const perNum2=90;
    $('.wp1').addClass('animated fadeIn');
      $('.second.circle1').circleProgress({
        value:perNum2/100,
        startAngle:300,
        size:160,
        fill:{
          color:["#D7C0AE"]
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
      
      
      
      
      const perNum3=75;
    $('.wp1').addClass('animated fadeIn');
      $('.second.circle2').circleProgress({
        value:perNum3/100,
        startAngle:300,
        size:160,
        fill:{
          color:["#967E76"]
        },
        animation:{
          duration:1500,
          easing:"swing"
        },
        //lineCap:"rect",
        lineCap:"round",
        reverse:true
      }).on('circle-animation-progress',function(event, progress){
        $(this).find('strong').html(Math.round(perNum3*progress)+'<i>%</i>');
      });

      const perNum4=70;
    $('.wp1').addClass('animated fadeIn');
      $('.second.circle3').circleProgress({
        value:perNum4/100,
        startAngle:300,
        size:160,
        fill:{
          color:["#D7C0AE"]
        },
        animation:{
          duration:1500,
          easing:"swing"
        },
        //lineCap:"rect",
        lineCap:"round",
        reverse:true
      }).on('circle-animation-progress',function(event, progress){
        $(this).find('strong').html(Math.round(perNum4*progress)+'<i>%</i>');
      }),{offset:'75%'};

      const perNum5=80;
    $('.wp1').addClass('animated fadeIn');
      $('.second.circle4').circleProgress({
        value:perNum5/100,
        startAngle:300,
        size:160,
        fill:{
          color:["#D7C0AE"]
        },
        animation:{
          duration:1500,
          easing:"swing"
        },
        //lineCap:"rect",
        lineCap:"round",
        reverse:true
      }).on('circle-animation-progress',function(event, progress){
        $(this).find('strong').html(Math.round(perNum5*progress)+'<i>%</i>');
      }),{offset:'75%'};

      const perNum6=70;
      $('.wp1').addClass('animated fadeIn');
        $('.second.circle5').circleProgress({
          value:perNum6/100,
          startAngle:300,
          size:160,
          fill:{
            color:["#967E76"]
          },
          animation:{
            duration:1500,
            easing:"swing"
          },
          //lineCap:"rect",
          lineCap:"round",
          reverse:true
        }).on('circle-animation-progress',function(event, progress){
          $(this).find('strong').html(Math.round(perNum6*progress)+'<i>%</i>');
        });


        const perNum7=85;
        $('.wp1').addClass('animated fadeIn');
          $('.second.circle6').circleProgress({
            value:perNum7/100,
            startAngle:300,
            size:160,
            fill:{
              color:["#D7C0AE"]
            },
            animation:{
              duration:1500,
              easing:"swing"
            },
            //lineCap:"rect",
            lineCap:"round",
            reverse:true
          }).on('circle-animation-progress',function(event, progress){
            $(this).find('strong').html(Math.round(perNum7*progress)+'<i>%</i>');
          }),{offset:'75%'};

          const perNum8=60;
          $('.wp1').addClass('animated fadeIn');
            $('.second.circle7').circleProgress({
              value:perNum8/100,
              startAngle:300,
              size:160,
              fill:{
                color:["#967E76"]
              },
              animation:{
                duration:1500,
                easing:"swing"
              },
              //lineCap:"rect",
              lineCap:"round",
              reverse:true
            }).on('circle-animation-progress',function(event, progress){
              $(this).find('strong').html(Math.round(perNum8*progress)+'<i>%</i>');
            });