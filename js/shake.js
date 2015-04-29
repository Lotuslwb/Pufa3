function shake(){
    if (window.DeviceMotionEvent) {
      window.addEventListener('devicemotion', deviceMotionHandler, false);
    } 
    
    var SHAKE_THRESHOLD = 800;
    var lastUpdate = 0;
    var x, y, z, last_x, last_y, last_z;
    var run=true,stoptime; 
    
    function deviceMotionHandler(eventData) {
      // Grab the acceleration including gravity from the results
      var acceleration = eventData.accelerationIncludingGravity;
    
      var curTime = new Date().getTime();

      if ((curTime - lastUpdate) > 100) {
    
        var diffTime = (curTime - lastUpdate);
        lastUpdate = curTime;
    
        x = acceleration.x;
        y = acceleration.y;
        z = acceleration.z;
    
        var speed = Math.abs(x+y+z-last_x-last_y-last_z) / diffTime * 10000;
    
        if (speed > SHAKE_THRESHOLD && run ) {
            run=false;
            shakedCallBack(); 
            stoptime=curTime;
        }
        if(speed<=250 && (curTime-stoptime)>500){
          run=true; 
        }
        if(speed>250){stoptime=curTime;}
        
        last_x = x;
        last_y = y;
        last_z = z;
      } 
    
    }     
    }

function shakedCallBack(){
  audioElement2.play();
  $(".shake-img").fadeOut();
  init();
  setTimeout(function(){
    _showpop();
  },1000)
  
}

function musiceInt(){
    audioElement2 = document.createElement('audio');
    audioElement2.setAttribute('src', 'mp3/shake.mp3');
    audioElement2.load();
    
    $(document).on('touchstart', function(){
      audioElement2.pause();
    })

}

function _showpop(){
  $(".overlay").show();
  $("#shaked-show").show();
}

var audioElement2

