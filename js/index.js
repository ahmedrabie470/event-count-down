
$('.section2 h4').click(function (e) {
  
    $(e.target).siblings().slideToggle(500)

})

var countDown = new Date("jun 18, 2025 15:37:15").getTime();
var x = setInterval(function () {
    var now = new Date().getTime()  
    var distanse = countDown - now ; 
    

    var days = Math.floor(distanse/ (1000*60*60*24));
    var hours = Math.floor((distanse  % (1000 *60*60*24)) / (1000*60*60));
    var minutes =Math.floor((distanse %(1000*60*60))/(1000*60))
    var seconds  =Math.floor((distanse%(1000*60)) / 1000);
document.getElementById('days').innerHTML= days + "D";
document.getElementById('hours').innerHTML= hours +'H';
document.getElementById('minutes').innerHTML= minutes + "M";
document.getElementById('seconds').innerHTML= seconds + "S";

    if(distanse<0)
    {
        clearInterval(x)
        document.getElementById("days").innerHTML="Expired";

    }
});

$('.sideBar i').click(function(){
  let currentWidth = $('.sideBar ul').outerWidth()
  if($('.sideBar').css('left')=='0px')
  {
    $('.sideBar ').animate({'left':-currentWidth},1000)
  }
  else
  {
    $('.sideBar ').animate({'left':0},1000)
  }
})











