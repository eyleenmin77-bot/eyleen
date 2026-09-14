(function(){
  document.addEventListener('DOMContentLoaded',function(){
    document.querySelectorAll('[data-clock]').forEach(function(el){el.textContent=new Date().toLocaleTimeString([], {hour:'2-digit',minute:'2-digit'});});
  });
})();
