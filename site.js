// Veyra Media destek sitesi: dil (TR/EN, hatırlanır) ve kaydırınca beliren kartlar
(function(){
  var saved=null; try{saved=localStorage.getItem('veyra_lang')}catch(e){}
  var q=new URLSearchParams(location.search).get('lang');
  var lang=q||saved||((navigator.language||'tr').toLowerCase().indexOf('tr')===0?'tr':'en');
  window.setLang=function(l){
    document.documentElement.classList.toggle('en',l==='en');
    document.documentElement.lang=l;
    document.querySelectorAll('.lang button').forEach(function(b){b.classList.toggle('on',b.dataset.l===l)});
    try{localStorage.setItem('veyra_lang',l)}catch(e){}
  };
  setLang(lang);
  document.addEventListener('DOMContentLoaded',function(){
    setLang(document.documentElement.lang);
    if(!('IntersectionObserver' in window)){document.querySelectorAll('.reveal').forEach(function(el){el.classList.add('in')});return}
    var o=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');o.unobserve(e.target)}})},{threshold:.08});
    document.querySelectorAll('.reveal').forEach(function(el){o.observe(el)});
    // Bağlantıyla gelinen soruyu aç (#q-...)
    if(location.hash){var d=document.querySelector(location.hash);if(d&&d.tagName==='DETAILS')d.open=true}
  });
})();
