const clock=document.querySelector('[data-clock]');function tick(){if(clock)clock.textContent=new Date().toLocaleTimeString([],{hour:'numeric',minute:'2-digit'})}tick();setInterval(tick,1000);

const boot=document.getElementById('boot');
if(boot){
  if(sessionStorage.getItem('eyleenBootSeen')){
    boot.remove();
  }else{
    const bar=document.getElementById('progressBar');
    const label=document.getElementById('progressText');
    let progress=0;
    const timer=setInterval(()=>{
      progress=Math.min(100,progress+Math.floor(Math.random()*11)+5);
      bar.style.width=progress+'%';
      label.textContent='Opening portfolio... '+progress+'%';
      if(progress===100){
        clearInterval(timer);
        sessionStorage.setItem('eyleenBootSeen','yes');
        setTimeout(()=>{
          boot.classList.add('hidden');
          setTimeout(()=>boot.remove(),600);
        },450);
      }
    },120);
  }
}
