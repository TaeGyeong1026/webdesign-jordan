$(document).ready(function(){
    var page_index = [0,4,1,5,2,6,3,7];    
    
    var ww = $(window).width();
    var wh = $(window).height();
    INIT();
    SizeChange();
    
    function INIT(){
        $('body, section').css({
            width: ww,
            height: wh,
        });
        
        circleRadius = $('#rotate-circle').width();
        articleWidth = $('.page').width();
        articleHeight = $('.page').height();
        positionA = (circleRadius - articleHeight) / 2;        
        
        $('.page').eq(0).css({
            left: circleRadius,
            top: positionA,
        });
        $('.page').eq(1).css({
            left: positionA,
        });
        $('.page').eq(2).css({
            left: 0,
            top: articleHeight + positionA,
        });
        $('.page').eq(3).css({
            left: articleHeight + positionA,
            top: circleRadius,
        });

        $('.page').eq(4).css({
            left: circleRadius,
            top: positionA,
        });
        $('.page').eq(5).css({
            left: positionA,
        });
        $('.page').eq(6).css({
            left: 0,
            top: articleHeight + positionA,
        });
        $('.page').eq(7).css({
            left: articleHeight + positionA,
            top: circleRadius,
        });
    
    }
    
    function SizeChange(){
            if( ww >= 1750){
                $('.menu-but>a').css({
                    fontSize: '45px',
                });
                $('html').css({
                    fontSize: '10px',
                });
            }
            else if( ww >= 1400 && ww < 1750){
                $('.menu-but>a').css({
                    fontSize: '30px',
                });
                $('.menu-info').css({
                    fontSize: '15px',
                });  
                $('html').css({
                    fontSize: '8px',
                });      
                $('.progress-circle').circleProgress({
                     size:70,
                });                 
            }
            else if( ww >= 1024 && ww < 1400){
                $('.menu-but>a').css({
                    fontSize: '20px',
                });
                $('.menu-info').css({
                    fontSize: '10px',
                });    
                $('.menu-left').css({
                    float: 'left',
                    width: '28.94736%',
                });
                $('.menu-right').css({
                    float: 'right',
                    width: '61.403508771%',
                });      
                $('html').css({
                    fontSize: '6px',
                });     
                $('.progress-circle').circleProgress({
                     size:70,
                });                     
            }
            else if( ww >= 900 && ww < 1024){
                $('.menu-left').css({
                    float: 'left',
                    width: '100%',
                });
                $('.menu-right').css({
                    float: 'left',
                    width: '100%',
                });  
                $('html').css({
                    fontSize: '6px',
                });
                $('.progress-circle').circleProgress({
                     size:70,
                });
            }
            else if( ww >= 768 && ww < 900){
                $('.menu-left').css({
                    float: 'left',
                    width: '100%',
                });
                $('.menu-right').css({
                    float: 'left',
                    width: '100%',
                });  
                $('html').css({
                    fontSize: '6px',
                });
                $('.progress-circle').circleProgress({
                     size:50,
                });
            }
            else if( ww >= 480 && ww < 768){
                $('.menu-left').css({
                    float: 'left',
                    width: '100%',
                });
                $('.menu-right').css({
                    float: 'left',
                    width: '100%',
                });  
                $('html').css({
                    fontSize: '5px',
                });
                $('.progress-circle').circleProgress({
                     size:50,
                });
            }
            else if( ww < 480){
                $('.menu-left').css({
                    float: 'left',
                    width: '100%',
                });
                $('.menu-right').css({
                    float: 'left',
                    width: '100%',
                });  
                $('html').css({
                    fontSize: '5px',
                });
                $('.progress-circle').circleProgress({
                     size:50,
                });
            }
        }
    
    $(window).resize(function(){
        
        ww = $(window).width();
        wh = $(window).height();
        
        $('section').css({
            width: ww,
            height: wh,
        });

        INIT();
        SizeChange();
        
    });
    

    
    for(i=0;i<4;i++){
        $('.odd').children('.page').eq(i).css({
            transform: 'rotateZ('+ (-90*i) +'deg)',
        });
        $('.even').children('.page').eq(i).css({
            transform: 'rotateZ('+ (-90*i) +'deg)',
        });
    }
    

    
    
    wheelIndex = 0;
    $('section').mousewheel(function(event,delta){
        if(delta > 0){
            wheelIndex--;
            pageRotate(); 
        $('.progress-circle').circleProgress({
            animationStartValue: (wheelIndex+2)/8,
        });
        }
        else if(delta < 0){
            wheelIndex++;
            pageRotate();  
        $('.progress-circle').circleProgress({
            animationStartValue: (wheelIndex)/8,
        });          
        }
    });
    
    function pageRotate() {
        if(wheelIndex > 7){
            wheelIndex = 0;
        }
        else if(wheelIndex < 0){
            wheelIndex = 7;
        }
        
        $('#rotate-circle').css({
            transform: 'rotateZ('+ 45*wheelIndex +'deg)',
        });
        
        var pageIndex = page_index[wheelIndex];
        $('.page').removeClass('on');
        $('.page').eq(pageIndex).addClass('on');
        
        $('.progress-circle').circleProgress({
            value: (wheelIndex+1)/8,
        });
    }
    
    $('#pic-hover-1').hover(function(){
        $(this).attr({
            src: 'img/page/6-2.png',
        });
    },function(){
        $(this).attr({
            src: 'img/page/6-1.png',
        });        
    })
    $('#pic-hover-2').hover(function(){
        $(this).attr({
            src: 'img/page/7-2.png',
        });
    },function(){
        $(this).attr({
            src: 'img/page/7-1.png',
        });        
    })
    
    $('.burger').click(function(){
        $('.menu').toggleClass('menu-on');
        $('.top-burger').toggleClass('top-burger-on');
        $('.bottom-burger').toggleClass('bottom-burger-on');
    });

    
     $('.progress-circle').circleProgress({
        size:70,
        //그래프 크기
        startAngle: -Math.PI/2 ,
        //시작지점 (기본값 Math.PI)
        value: (wheelIndex+1)/8,
        //그래프에 표시될 값 
        animation: true,
        //그래프가 그려지는 애니메이션 동작 여부
        fill: {gradient: ['#ff1e41', '#ff9f8e']},

        thickness:5,
        //그래프두께
        lineCap:'round',
        //그래프 선 모양
        fill: 'white',
        //그래프 선 색
        emptyFill: "rgba(126,126,126,0.3)",
        //그래프 빈칸색 기본값 rgba(0,0,0,0.1)
  });
    $('#UP').click(function(){
       wheelIndex--; 
        pageRotate();
        $('.progress-circle').circleProgress({
            animationStartValue: (wheelIndex+2)/8,
        });      
    });
    $('#DOWN').click(function(){
       wheelIndex++; 
        pageRotate();  
        $('.progress-circle').circleProgress({
            animationStartValue: (wheelIndex)/8,
        });  
    });
});     //end