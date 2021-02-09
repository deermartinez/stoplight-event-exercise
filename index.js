(function() {
  'use strict';

  // retrieve tehe stoplight elements //
    let stop = document.getElementById("stopButton");
    let stopLight = document.getElementById("stopLight");
    let slow = document.getElementById("slowButton");
    let slowLight = document.getElementById("slowLight");
    let go = document.getElementById("goButton");
    let goLight = document.getElementById("goLight");
  
    
    stop.addEventListener("click", function() {

//stop is calling ele,met//

//addEvent LIstener toggle=stop button clicked
      // Grabs Red Light In CSS//
      sLight.classList.toggle('stop')
    })
  
    slow.addEventListener("click", function() {
      // yellow //
      slowLight.classList.toggle('slow')
    })
  
    go.addEventListener("click", function() {
      // green  //
      goLight.classList.toggle('go')
    });
  
  // - When a user's mouse enters a button, log 
  //`.
    const buttonMouseEnter = (event) => {
      console.log(`Entered ${event.target.textContent} button`);
    };
    //logs "Entered <textContent> button"` to the console when the mouse enters button
    const buttonMouseLeave = (event) => {
      console.log(`Left ${event.target.textContent} button`);
    };
  

    stopButton.addEventListener('mouseenter', buttonMouseEnter);
    slowButton.addEventListener('mouseenter', buttonMouseEnter);
    goButton.addEventListener('mouseenter', buttonMouseEnter);
  
    stopButton.addEventListener('mouseleave', buttonMouseLeave);
    slowButton.addEventListener('mouseleave', buttonMouseLeave);
    goButton.addEventListener('mouseleave', buttonMouseLeave);
  
  // get the id/control id for the Light Bulbs //
    const controls = document.getElementById('controls');
  
    controls.addEventListener('click', (event) => {
      if (event.target === controls) {
        return;
      }
  
      let status;
  
      if (event.target === stopButton) {
        
  
        if (stopLight.classList.contains('stop')) {
          status = 'on';
        }
        else {
          status = 'off';
        }
      }
     
      else if (event.target === slowButton) {
        status = slowLight.classList.contains('slow') ? 'on' : 'off';
      }
      else {
        status = goLight.classList.contains('go') ? 'on' : 'off';
      }
      // console log current light status //
      console.log(`${event.target.textContent} light ${status}`);
    });
  })();
  
