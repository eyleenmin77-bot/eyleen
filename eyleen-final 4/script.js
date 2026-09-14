const clock=document.querySelector('[data-clock]');function tick(){if(clock)clock.textContent=new Date().toLocaleTimeString([],{hour:'numeric',minute:'2-digit'})}tick();setInterval(tick,1000);
