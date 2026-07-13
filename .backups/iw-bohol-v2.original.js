/* iw-bohol-v2 */
(function () {
  "use strict";if(!(location.pathname==="/"||location.pathname==="/index.html"||location.pathname===""))return;
  var EYEBROW = "Two restaurants · one menu of memory";
  var HEAD = 'BOHOL ON<br>A <span class="orange">PLATE</span>';
  var DINING_HREF = "/dining/";
  var SLIDES = ["/photos/BWPlus_Ivywall_21_Boodle_Platter.jpg","/photos/BWPlus_Ivywall_10_Signature_Seafood.jpg","/photos/BWPlus_Ivywall_22_Banana_Cocktail.jpg","/photos/BWPlus_Ivywall_09_Rooftop_Bar_Night.jpg","/photos/ivy_sop_boodle_beach.jpg","/photos/BWPlus_Ivywall_07_Restaurant.jpg"];
  var IMAGES = [
    { img:"/photos/BWPlus_Ivywall_21_Boodle_Platter.jpg",    css:"top:22%;left:1.5%;width:clamp(175px,21vw,380px);height:clamp(215px,42vh,460px);z-index:6;", ox:130, oy:0,   tag:"Boodle <b>feast</b>" },
    { img:"/photos/BWPlus_Ivywall_10_Signature_Seafood.jpg", css:"top:3%;left:37%;width:clamp(130px,14vw,250px);height:clamp(105px,17vh,210px);z-index:4;",   ox:0,   oy:90,  tag:"Seafood <b>paella</b>" },
    { img:"/photos/BWPlus_Ivywall_22_Banana_Cocktail.jpg",   css:"top:33%;left:15%;width:clamp(105px,12vw,210px);height:clamp(180px,33vh,350px);z-index:7;",  ox:90,  oy:-10, tag:"Calamansi <b>&amp; coconut</b>" },
    { img:"/photos/BWPlus_Ivywall_07_Restaurant.jpg",        css:"bottom:3%;left:2%;width:clamp(170px,21vw,370px);height:clamp(125px,20vh,250px);z-index:5;",  ox:120, oy:-80, tag:"" },
    { img:"/photos/BWPlus_Ivywall_19_Alon_Dining_Alt.jpg",   css:"bottom:3.5%;left:39%;width:clamp(130px,14vw,250px);height:clamp(105px,17vh,210px);z-index:4;",ox:0,   oy:-100,tag:"Alon <b>all-day</b>" },
    { img:"/photos/BWPlus_Ivywall_09_Rooftop_Bar_Night.jpg", css:"top:24%;right:1.5%;width:clamp(175px,21vw,380px);height:clamp(195px,40vh,440px);z-index:6;", ox:-130,oy:0,   tag:"Teraza <b>rooftop</b>" },
    { img:"/photos/BWPlus_Ivywall_12_Morning_Teraza.jpg",    css:"top:35%;right:15%;width:clamp(130px,14vw,250px);height:clamp(155px,28vh,310px);z-index:7;",  ox:-90, oy:0,   tag:"Morning <b>teraza</b>" },
    { img:"/photos/BWPlus_Ivywall_15_Agos_Pool_Bar.jpg",     css:"bottom:3%;right:2%;width:clamp(160px,19vw,330px);height:clamp(120px,20vh,250px);z-index:5;",  ox:-120,oy:-80, tag:"Agos <b>pool bar</b>" },
    { img:"/photos/BWPlus_Ivywall_08_Bar_Lounge.jpg",        css:"top:54%;right:31%;width:clamp(105px,12vw,210px);height:clamp(115px,21vh,250px);z-index:3;",  ox:-70, oy:-10, tag:"" },
    { img:"/photos/BWPlus_Ivywall_18_Bar_Lounge_Alt.jpg",    css:"top:9%;left:21%;width:clamp(100px,12vw,200px);height:clamp(80px,15vh,180px);z-index:3;",     ox:80,  oy:80,  tag:"" },
    { img:"/photos/BWPlus_Ivywall_17_Facade_Teraza.jpg",     css:"top:44%;left:45%;width:clamp(105px,12vw,210px);height:clamp(75px,14vh,160px);z-index:2;",    ox:0,   oy:10,  tag:"" },
    { img:"/photos/ivy_sop_boodle_beach.jpg",                css:"bottom:19%;left:21%;width:clamp(125px,14vw,260px);height:clamp(150px,26vh,300px);z-index:7;",ox:80,  oy:-50, tag:"Beach <b>boodle</b>" }
  ];;
  function clamp(v,a,b){return v<a?a:v>b?b:v;}
  function lerp(a,b,t){return a+(b-a)*t;}
  function eo(t){return 1-Math.pow(1-t,3);}
  var built=false, sectionEl=null, slideLayer=null, slideEls=[], imgEls=[], headEl=null, cueEl=null, ctaEl=null, raf=0, sIdx=0, sTimer=0, pfs=[], dims=[];
  function build() {
    if (built && document.getElementById("iwbp")) return true;
    var orig = document.querySelector('section[data-ivy-station="dining"]');
    var parentRef, beforeRef;
    if (orig) { var anchor=orig; if(orig.parentElement&&orig.parentElement.tagName==="DIV"&&orig.parentElement.children.length===1&&orig.parentElement.parentElement)anchor=orig.parentElement; parentRef=anchor.parentNode; beforeRef=anchor; }
    else { var main=document.querySelector("main"); if(!main) return false; parentRef=main; beforeRef=null; }
    var s=document.createElement("section"); s.id="iwbp";
    var slideHtml=SLIDES.map(function(src,i){return '<div class="s'+(i===0?" on":"")+'"><img src="'+src+'" loading="lazy" decoding="async" alt="Dining at The Ivywall"></div>';}).join("");
    var imgsHtml=IMAGES.map(function(im){return '<div class="bp-img" style="'+im.css+'"><img src="'+im.img+'" loading="lazy" decoding="async" alt="Bohol dining at The Ivywall">'+(im.tag?'<div class="tag">'+im.tag+'</div>':'')+'</div>';}).join("");
    s.innerHTML='<div class="bp-stage">'+
      '<div class="bp-slide">'+slideHtml+'</div><div class="bp-slidescrim"></div>'+
      '<div class="bp-collage">'+imgsHtml+'</div>'+
      '<div class="bp-eyebrow">'+EYEBROW+'</div>'+
      '<h2 class="bp-head">'+HEAD+'</h2>'+
      '<div class="bp-cue">SCROLL<span class="bar"></span></div>'+
      '<div class="bp-cta"><a href="'+DINING_HREF+'">Explore dining <span>→</span></a></div>'+
    '</div>';
    parentRef.insertBefore(s, beforeRef);
    sectionEl=s; slideLayer=s.querySelector(".bp-slide"); slideEls=[].slice.call(s.querySelectorAll(".bp-slide .s"));
    imgEls=[].slice.call(s.querySelectorAll(".bp-img")); headEl=s.querySelector(".bp-head"); cueEl=s.querySelector(".bp-cue"); ctaEl=s.querySelector(".bp-cta");
    pfs=imgEls.map(function(el){var z=parseInt(getComputedStyle(el).zIndex)||3;return 0.04+z*0.05;});
    dims=imgEls.map(function(el){var z=parseInt(getComputedStyle(el).zIndex)||3;return z<=2?0.62:(z<=3?0.8:1);});
    imgEls.forEach(function(el){var z=parseInt(getComputedStyle(el).zIndex)||3;var bl=z<=2?2.4:(z<=3?1.1:(z<=4?0.4:0));if(bl)el.style.filter="blur("+bl+"px)";});
    built=true;
    if (sTimer) clearInterval(sTimer);
    if(window.innerWidth>820){ sTimer=setInterval(function(){ sIdx=(sIdx+1)%slideEls.length; slideEls.forEach(function(el,i){ el.classList.toggle("on", i===sIdx); }); }, 2600); }
    try{ var io2=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)s.classList.add("bpin");});},{threshold:0.04}); io2.observe(s);
      if(s.getBoundingClientRect().top < window.innerHeight*0.95) s.classList.add("bpin");
    }catch(e){ s.classList.add("bpin"); }
    update();
    return true;
  }
  function update() {
    if(!sectionEl) return;
    if(window.innerWidth<=820){ return; }
    var vh=window.innerHeight, total=sectionEl.offsetHeight-vh;
    var p = total>0 ? clamp(-sectionEl.getBoundingClientRect().top/total,0,1) : 0;
    if (slideLayer) slideLayer.style.opacity = clamp(1-(p-0.07)/0.16,0,1).toFixed(3);
    for (var i=0;i<imgEls.length;i++){
      var rp = eo(clamp((p-0.03 - i*0.022)/0.52,0,1));
      var sc = lerp(1.06,1,rp);
      var enty = lerp(vh*0.40, 0, rp);
      var par = -p*vh*(pfs[i]||0.1);
      imgEls[i].style.opacity = (rp*(dims[i]||1)).toFixed(3);
      imgEls[i].style.transform = "translateY("+(enty+par).toFixed(1)+"px) scale("+sc.toFixed(3)+")";
    }
    if (cueEl) cueEl.style.opacity = clamp(1-p/0.10,0,1).toFixed(3);
    if (ctaEl) ctaEl.style.opacity = clamp((p-0.82)/0.14,0,1).toFixed(3);
  }
  function onScroll(){ if(raf) return; raf=requestAnimationFrame(function(){ raf=0; update(); }); }
  function enforce(){ if(!document.getElementById("iwbp")){ built=false; build(); } }
  function init(){ if(!build()){ setTimeout(init,120); return; }
    window.addEventListener("scroll", onScroll, {passive:true}); window.addEventListener("resize", onScroll, {passive:true});
    setTimeout(update,400); setTimeout(update,1200);
    try{ var mo=new MutationObserver(function(){enforce();}); mo.observe(document.querySelector("main")||document.body,{childList:true}); setTimeout(function(){try{mo.disconnect();}catch(e){}},9000);}catch(e){}
  }
  if (document.readyState==="complete") setTimeout(init,350);
  else window.addEventListener("load", function(){ setTimeout(init,350); });
})();
