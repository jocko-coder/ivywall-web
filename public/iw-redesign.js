/* IvyWall homepage redesign */
(function(){try{var H=document.head||document.documentElement;if(!document.getElementById("iw-fonts")){var l=document.createElement("link");l.id="iw-fonts";l.rel="stylesheet";l.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Hanken+Grotesk:wght@400;500;600;700&display=swap";H.appendChild(l);}if(!document.getElementById("iw-redesign-css")){var s=document.createElement("style");s.id="iw-redesign-css";s.textContent="header[data-nav]{display:none !important}button[aria-label=\"Talk to Ivy, our AI receptionist\"]{display:none !important}#iwnav{position:fixed;top:0;left:0;right:0;z-index:50;display:flex;justify-content:center;padding:clamp(12px,2vh,20px) clamp(14px,3vw,40px);font-family:'Hanken Grotesk',system-ui,sans-serif;pointer-events:none}#iwnav::before{content:\"\";position:absolute;inset:0;z-index:-1;pointer-events:none;background:linear-gradient(180deg,rgba(0,0,0,.36),rgba(0,0,0,0));transition:opacity .4s ease}#iwnav.scrolled::before{opacity:0}#iwnav .nav-inner{pointer-events:auto;display:flex;align-items:center;justify-content:space-between;width:100%;gap:20px;padding:0;border-radius:999px;border:1px solid transparent;background:transparent;transition:width .5s cubic-bezier(.4,0,.2,1),max-width .5s cubic-bezier(.4,0,.2,1),gap .5s,padding .45s,background .45s,backdrop-filter .45s,border-color .45s,box-shadow .45s}#iwnav.scrolled .nav-inner{width:auto;max-width:max-content;margin:0 auto;gap:clamp(16px,2.4vw,34px);padding:8px 10px 8px 20px;background:rgba(250,249,246,.5);backdrop-filter:blur(18px) saturate(1.5);-webkit-backdrop-filter:blur(18px) saturate(1.5);border-color:rgba(255,255,255,.45);box-shadow:0 10px 34px rgba(20,15,8,.16)}#iwnav .nav-book{font-weight:600;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#fbf7ee;border:1px solid rgba(255,255,255,.55);border-radius:999px;padding:11px 20px;text-decoration:none;white-space:nowrap;transition:color .35s,border-color .35s,background .35s}#iwnav.scrolled .nav-book{color:#2b2517;border-color:rgba(43,37,23,.25);padding:9px 18px}#iwnav .nav-book:hover{background:#F5700A;border-color:#F5700A;color:#fff}#iwnav .nav-brand{font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:clamp(19px,2vw,27px);letter-spacing:.26em;text-indent:.26em;color:#fbf7ee;text-decoration:none;white-space:nowrap;transition:color .35s,letter-spacing .4s,font-size .4s}#iwnav.scrolled .nav-brand{color:#2b2517;letter-spacing:.18em;font-size:clamp(17px,1.6vw,22px)}#iwnav .nav-burger{width:30px;height:16px;position:relative;cursor:pointer;background:none;border:0;padding:0;flex:0 0 auto}#iwnav .nav-burger span{position:absolute;left:0;right:0;height:1.6px;background:#fbf7ee;transition:background .35s}#iwnav .nav-burger span:nth-child(1){top:0}#iwnav .nav-burger span:nth-child(2){top:7px}#iwnav .nav-burger span:nth-child(3){top:14px}#iwnav.scrolled .nav-burger span{background:#2b2517}#iwnav .nav-side{display:flex;flex:0 0 auto}#iwnav .nav-side.r{justify-content:flex-end}#iwnav.scrolled .nav-side{flex:0 0 auto}@media (max-width:620px){#iwnav .nav-book{padding:10px 14px;font-size:10px}}#iw-ivytab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:48;cursor:pointer;border:0;background:#F5700A;color:#fff;writing-mode:vertical-rl;text-orientation:mixed;font:600 12px/1 'Hanken Grotesk',system-ui,sans-serif;letter-spacing:.2em;text-transform:uppercase;padding:20px 10px;border-radius:9px 0 0 9px;box-shadow:-5px 8px 22px rgba(20,15,8,.22);transition:padding-right .25s ease,background .25s ease}#iw-ivytab:hover{padding-right:15px;background:#e3650a}#iwnav-menu{position:fixed;inset:0;z-index:55;background:#16140f;color:#fbf7ee;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:clamp(4px,1.4vh,12px);opacity:0;pointer-events:none;transition:opacity .45s ease;font-family:'Cormorant Garamond',Georgia,serif}#iwnav-menu.open{opacity:1;pointer-events:auto}#iwnav-menu a{font-size:clamp(32px,6vw,68px);font-weight:500;color:#fbf7ee;text-decoration:none;line-height:1.12;transition:color .3s,letter-spacing .3s}#iwnav-menu a:hover{color:#F5700A;letter-spacing:.02em}#iwnav-menu .mclose{position:absolute;top:24px;right:34px;font-family:'Hanken Grotesk',sans-serif;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#fbf7ee;background:none;border:0;cursor:pointer}#iwnav-menu .mfoot{position:absolute;bottom:30px;font-family:'Hanken Grotesk',sans-serif;font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:rgba(251,247,238,.55)}main .min-h-\\[100svh\\].bg-palm-night{display:none !important}#iwh{position:relative;height:230vh;background:#faf9f6}#iwh *{box-sizing:border-box}#iwh .iwh-stage{position:sticky;top:0;height:100vh;height:100svh;overflow:hidden;background:#faf9f6}#iwh .iwh-group{position:absolute;inset:0;will-change:transform}#iwh .iwh-word{position:absolute;left:0;right:0;top:50%;text-align:center;z-index:6;font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;color:#F5700A;letter-spacing:.015em;line-height:.86;white-space:nowrap;font-size:clamp(44px,12.6vw,200px);transform:translateY(-50%)}#iwh .iwh-word .w-the{color:#17140f}#iwh .iwh-word .w-ivy{color:#F5700A}#iwh .iwh-loc{position:absolute;left:0;right:0;z-index:2;text-align:center;font-family:'Hanken Grotesk',system-ui,sans-serif;font-weight:600;font-size:clamp(10px,1.05vw,15px);letter-spacing:.46em;color:#7a6c4c;text-indent:.46em}#iwh .iwh-frame{position:absolute;overflow:hidden;background:#0c0c0c;z-index:3;box-shadow:0 36px 90px rgba(46,38,20,.22);will-change:left,top,width,height,border-radius}#iwh .iwh-frame video{width:100%;height:100%;object-fit:cover;display:block}#iwh .iwh-scrim{position:absolute;inset:0;z-index:4;pointer-events:none;background:linear-gradient(180deg,rgba(0,0,0,.28),rgba(0,0,0,0) 26%)}#iwh .iwh-intro{position:absolute;left:0;right:0;bottom:6.5vh;z-index:2;display:flex;justify-content:center;gap:clamp(20px,5vw,70px);padding:0 7vw;opacity:0;transform:translateY(22px)}#iwh .iwh-intro .col{max-width:330px;font-family:'Hanken Grotesk',system-ui,sans-serif;font-size:clamp(12px,1.05vw,14.5px);line-height:1.62;color:#4a4231}#iwh .iwh-eyebrow{position:absolute;left:0;right:0;text-align:center;z-index:2;font-family:'Hanken Grotesk',system-ui,sans-serif;font-weight:600;font-size:11px;letter-spacing:.34em;text-indent:.34em;color:#F5700A;opacity:0}#iwh .iwh-cue{position:absolute;left:0;right:0;bottom:22px;text-align:center;z-index:5;font-family:'Hanken Grotesk',system-ui,sans-serif;font-weight:600;font-size:10.5px;letter-spacing:.32em;text-indent:.32em;color:#6f6244}#iwh .iwh-cue .bar{display:block;width:1px;height:34px;margin:9px auto 0;background:rgba(90,78,48,.5)}@media (prefers-reduced-motion: reduce){#iwh{height:100vh}}section.bg-pearl.py-20{display:none !important}#iwos{position:relative;background:#faf9f6;color:#2b2517;font-family:'Hanken Grotesk',system-ui,sans-serif;padding:clamp(64px,10vh,140px) 0 clamp(64px,12vh,150px);overflow:hidden}#iwos .iwos-wrap{max-width:1240px;margin:0 auto;padding:0 clamp(22px,5vw,72px)}#iwos .iwos-top{display:flex;align-items:center;justify-content:space-between;border-top:1px solid rgba(70,60,36,.18);padding-top:14px;margin-bottom:clamp(20px,4vh,46px);font-size:11px;letter-spacing:.28em;text-indent:.28em;color:#7a6c4c;font-weight:600}#iwos .iwos-top .dot{width:30px;height:30px;border-radius:50%;border:1px solid rgba(70,60,36,.35);display:inline-flex;align-items:center;justify-content:center}#iwos .iwos-top .dot i{width:6px;height:6px;border-radius:50%;background:#F5700A;display:block}#iwos .iwos-head{font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:clamp(46px,9.2vw,150px);line-height:.92;letter-spacing:-.012em;color:#2b2517;margin:0 0 clamp(34px,6vh,72px)}#iwos .iwos-eyebrow{font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:500;font-size:clamp(17px,1.5vw,22px);color:#F5700A;letter-spacing:.01em;margin-bottom:18px;display:block}#iwos .iwos-statement{font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:clamp(23px,3.05vw,46px);line-height:1.26;letter-spacing:.002em;max-width:1040px;margin:0 0 clamp(24px,3.6vh,42px)}#iwos .iwos-statement .w{display:inline-block;opacity:.16;color:#2b2517;transition:opacity .18s linear;will-change:opacity}#iwos .iwos-sub{font-size:clamp(13.5px,1.08vw,16px);line-height:1.72;color:#6b6147;max-width:600px;margin:0 0 28px}#iwos .iwos-link{display:inline-flex;align-items:center;gap:10px;text-decoration:none;font-weight:600;font-size:12.5px;letter-spacing:.16em;text-transform:uppercase;color:#2b2517;padding-bottom:4px;border-bottom:1px solid rgba(43,37,23,.35);transition:gap .25s ease,border-color .25s ease,color .25s ease}#iwos .iwos-link:hover{gap:16px;border-color:#F5700A;color:#F5700A}#iwos .iwos-link .arr{font-family:serif;font-size:15px}#iwos .iwos-side{position:absolute;right:14px;top:42%;writing-mode:vertical-rl;font-size:10.5px;letter-spacing:.3em;color:#a89a78;font-weight:600;text-transform:uppercase}#iwos .rv{opacity:0;transform:translateY(26px);transition:opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)}#iwos.in .rv{opacity:1;transform:none}#iwos.in .rv.d1{transition-delay:.05s}#iwos.in .rv.d2{transition-delay:.13s}#iwos.in .rv.d4{transition-delay:.22s}#iwos.in .rv.d5{transition-delay:.30s}@media (max-width:760px){#iwos .iwos-side{display:none}}@media (prefers-reduced-motion: reduce){#iwos .rv{opacity:1;transform:none;transition:none}#iwos .iwos-statement .w{opacity:1;transition:none}}section[class*=\"250vh\"]{display:none !important}#iwsop{position:relative;height:118vh;background:#0c1116;font-family:'Hanken Grotesk',system-ui,sans-serif}#iwsop .sop-stage{position:sticky;top:0;height:100vh;height:100svh;overflow:hidden;background:#0c1116}#iwsop .sop-bg{position:absolute;inset:-4% -2%;z-index:0;will-change:transform}#iwsop .sop-bg img{width:100%;height:100%;object-fit:cover;display:block}#iwsop .sop-scrim{position:absolute;inset:0;z-index:1;pointer-events:none;background:linear-gradient(180deg,rgba(8,12,16,.52),rgba(8,12,16,.05) 32%,rgba(8,12,16,.12) 66%,rgba(8,12,16,.5))}#iwsop .sop-head{position:absolute;left:0;right:0;top:17%;z-index:2;text-align:center;font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;color:#fbf7ee;font-size:clamp(40px,7.4vw,118px);line-height:.96;letter-spacing:.02em;text-shadow:0 2px 30px rgba(0,0,0,.4)}#iwsop .sop-eyebrow{position:absolute;left:clamp(20px,5vw,64px);bottom:7.5vh;z-index:4;font-weight:700;font-size:12px;letter-spacing:.34em;text-indent:.34em;color:#fbf7ee;text-transform:uppercase;border-top:1px solid rgba(251,247,238,.5);padding-top:12px;min-width:170px}#iwsop .sop-card{position:absolute;z-index:3;width:clamp(186px,16.5vw,244px);background:rgba(250,249,246,.96);border-radius:9px;padding:10px 10px 13px;box-shadow:0 28px 60px rgba(0,0,0,.36);color:#241f15;will-change:transform}#iwsop .sop-card .thumb{width:100%;height:clamp(176px,17.5vw,224px);border-radius:5px;overflow:hidden;background:#0c0c0c;margin-bottom:10px}#iwsop .sop-card .thumb img{width:100%;height:100%;object-fit:cover;display:block}#iwsop .sop-card .cap{display:flex;align-items:center;justify-content:space-between;gap:8px}#iwsop .sop-card .t{font-weight:700;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#2b2517;line-height:1.2}#iwsop .sop-card .ar{font-family:Georgia,serif;font-size:15px;color:#F5700A;flex:0 0 auto}#iwsop .sop-card .d{margin:7px 0 0;font-size:11.5px;line-height:1.5;color:#5d5440}@keyframes iwsopFloat{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-16px) rotate(-.5deg)}}#iwsop .c1{left:4.5%;top:34%;animation:iwsopFloat 7.4s ease-in-out infinite}#iwsop .c2{left:37.5%;top:50%;animation:iwsopFloat 8.6s ease-in-out infinite;animation-delay:-2.2s}#iwsop .c3{right:4.5%;top:42%;animation:iwsopFloat 6.8s ease-in-out infinite;animation-delay:-1.1s}@media (max-width:880px){#iwsop{height:auto}#iwsop .sop-stage{position:relative;height:auto;min-height:92vh;padding:0 0 8vh}#iwsop .sop-head{position:relative;top:auto;padding:16vh 6vw 0;font-size:clamp(40px,12vw,72px)}#iwsop .sop-eyebrow{position:relative;left:auto;bottom:auto;margin:24px 6vw 18px}#iwsop .sop-cards{display:grid;grid-template-columns:1fr 1fr;gap:14px;padding:18px 6vw 0}#iwsop .sop-card{position:relative!important;left:auto!important;right:auto!important;top:auto!important;width:auto;animation:iwsopFloat 7s ease-in-out infinite}#iwsop .c2{margin-top:26px}}@media (prefers-reduced-motion:reduce){#iwsop .sop-card{animation:none!important}}section[data-ivy-station=\"highlights\"]{display:none !important}#iwrog{position:relative;height:240vh;background:#faf9f6;color:#2b2517;font-family:'Hanken Grotesk',system-ui,sans-serif}#iwrog .rog-stage{position:sticky;top:0;height:100vh;height:100svh;overflow:hidden;display:flex;align-items:center;justify-content:center}#iwrog .rog-water{position:absolute;inset:0;z-index:0;display:flex;align-items:center;justify-content:center;pointer-events:none}#iwrog .rog-water span{font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;font-size:18vw;line-height:.8;letter-spacing:.02em;color:rgba(70,58,34,.07);white-space:nowrap}#iwrog .rog-lines{position:relative;z-index:2;width:100%;display:flex;flex-direction:column;align-items:center;gap:clamp(40px,9vh,120px);will-change:transform;text-align:center}#iwrog .rog-line{font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:clamp(30px,5.6vw,92px);line-height:1.02;letter-spacing:.012em;text-transform:uppercase;color:#3a3120;max-width:15ch;will-change:filter,opacity}@media (prefers-reduced-motion:reduce){#iwrog{height:auto}#iwrog .rog-stage{position:relative;height:auto;padding:16vh 0;flex-direction:column}#iwrog .rog-line{filter:none!important;opacity:1!important}}section[style*=\"vh\"]:not(.bg-palm-night){display:none !important}#iwrooms{position:relative;background:#faf9f6;color:#2b2517;font-family:'Hanken Grotesk',system-ui,sans-serif;--rsTop:64px;--rsHeadH:104px;--gap:22px;--n:4}#iwrooms .rs-head{position:sticky;top:var(--rsTop);z-index:30;background:#faf9f6;text-align:center;padding:clamp(22px,3.4vh,40px) 16px clamp(12px,1.8vh,20px)}#iwrooms .rs-head .eyebrow{font-size:10.5px;letter-spacing:.32em;text-indent:.32em;color:#F5700A;font-weight:600;text-transform:uppercase;margin-bottom:10px}#iwrooms .rs-head h2{font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:clamp(28px,4.4vw,60px);line-height:1.0;letter-spacing:.01em;margin:0;color:#2b2517}#iwrooms .rs-deck{position:relative;padding-bottom:8vh}#iwrooms .rs-panel{position:sticky;top:calc(var(--rsTop) + var(--rsHeadH) + var(--i) * var(--gap));height:calc(100svh - var(--rsTop) - var(--rsHeadH) - (var(--n) - 1) * var(--gap) - 3vh)}#iwrooms .rs-card{position:relative;width:100%;height:100%;overflow:hidden;background:#0c0c0c;border-radius:16px 16px 0 0;box-shadow:0 -16px 34px rgba(20,15,8,.16),0 26px 60px rgba(20,15,8,.26)}#iwrooms .rs-card>img{width:100%;height:100%;object-fit:cover;display:block;transform:scale(1.05);transition:transform 1.3s cubic-bezier(.2,.7,.2,1)}#iwrooms .rs-panel.shown .rs-card>img{transform:scale(1)}#iwrooms .rs-cap{position:absolute;left:0;right:0;bottom:0;padding:clamp(22px,3.5vw,46px) clamp(20px,4vw,56px);background:linear-gradient(0deg,rgba(12,10,6,.74),rgba(12,10,6,.1) 60%,transparent);color:#f7f1e6;display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex-wrap:wrap}#iwrooms .rs-cap .idx{font-size:10.5px;letter-spacing:.3em;color:#F5B070;font-weight:600;margin-bottom:9px}#iwrooms .rs-cap h3{font-family:'Cormorant Garamond',serif;font-weight:500;font-size:clamp(26px,3.4vw,50px);margin:0;line-height:1}#iwrooms .rs-cap .specs{margin-top:10px;font-size:12px;letter-spacing:.05em;color:#dccfb6}#iwrooms .rs-cap .right{text-align:right;display:flex;flex-direction:column;align-items:flex-end;gap:11px}#iwrooms .rs-cap .price{font-family:'Cormorant Garamond',serif;font-weight:500;font-size:clamp(22px,2.2vw,32px);line-height:1}#iwrooms .rs-cap .price small{display:block;font-family:'Hanken Grotesk',sans-serif;font-size:9.5px;letter-spacing:.2em;color:#dccfb6;text-transform:uppercase;margin-top:4px}#iwrooms .rs-cap .view{font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:#fff;text-decoration:none;border-bottom:1px solid rgba(255,255,255,.55);padding-bottom:3px;transition:border-color .25s,color .25s}#iwrooms .rs-cap .view:hover{color:#F5B070;border-color:#F5B070}#iwrooms .rs-foot{position:relative;z-index:1;background:#faf9f6;text-align:center;padding:clamp(34px,6vh,68px) 16px clamp(44px,8vh,100px)}#iwrooms .rs-foot a{display:inline-flex;gap:10px;align-items:center;font-weight:600;font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#2b2517;text-decoration:none;border-bottom:1px solid rgba(43,37,23,.4);padding-bottom:5px;transition:gap .25s,color .25s,border-color .25s}#iwrooms .rs-foot a:hover{gap:16px;color:#F5700A;border-color:#F5700A}@media (max-width:760px){#iwrooms{--rsHeadH:84px;--gap:16px}#iwrooms .rs-cap{flex-direction:column;align-items:flex-start;padding:22px}#iwrooms .rs-cap .right{text-align:left;align-items:flex-start}}@media (prefers-reduced-motion:reduce){#iwrooms .rs-panel{position:relative;top:auto;height:72vh;margin-bottom:14px}#iwrooms .rs-card>img{transform:none}}section[data-ivy-station=\"dining\"]{display:none !important}[class*=\"z-[9998]\"]{display:none !important}#iwbp{position:relative;background:#21261d;color:#f3ecdb;font-family:'Hanken Grotesk',system-ui,sans-serif;overflow:hidden}#iwbp .bp-stage{position:relative;height:100vh;height:100svh;min-height:620px}#iwbp .bp-eyebrow{position:absolute;top:7%;left:0;right:0;text-align:center;z-index:7;font-size:11px;letter-spacing:.34em;text-indent:.34em;color:#F5700A;font-weight:600;text-transform:uppercase}#iwbp .bp-head{position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);text-align:center;z-index:6;font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;color:#f7f1e2;pointer-events:none;font-size:clamp(52px,11vw,190px);line-height:.9;letter-spacing:.015em;text-shadow:0 6px 40px rgba(0,0,0,.6)}#iwbp .bp-head .orange{color:#F5700A}#iwbp .bp-img{position:absolute;overflow:hidden;border-radius:5px;background:#0c0c0c;box-shadow:0 34px 72px rgba(0,0,0,.5);opacity:0;transform:translate(var(--fx,0),var(--fy,0));transition:opacity .9s ease,transform 1.15s cubic-bezier(.2,.7,.2,1)}#iwbp.in .bp-img{opacity:1;transform:translate(0,0)}#iwbp .bp-img img{width:100%;height:100%;object-fit:cover;display:block}#iwbp .bp-img .tag{position:absolute;left:0;right:0;bottom:0;padding:20px 12px 9px;background:linear-gradient(0deg,rgba(10,8,5,.82),transparent);font-size:10.5px;letter-spacing:.14em;text-transform:uppercase;color:#fbe9cf;font-weight:600}#iwbp .bp-img .tag b{color:#F59A4A}#iwbp .bp-cta{position:absolute;left:0;right:0;bottom:6.5vh;text-align:center;z-index:7}#iwbp .bp-cta a{display:inline-flex;gap:10px;align-items:center;font-weight:600;font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#f3ecdb;text-decoration:none;border-bottom:1px solid rgba(243,236,219,.45);padding-bottom:5px;transition:gap .25s,color .25s,border-color .25s}#iwbp .bp-cta a:hover{gap:16px;color:#F5700A;border-color:#F5700A}@media (max-width:820px){#iwbp .bp-stage{height:auto;min-height:0;padding:15vh 0 9vh}#iwbp .bp-head{position:relative;top:auto;transform:none;padding:0 6vw 5vh;font-size:clamp(48px,16vw,90px)}#iwbp .bp-eyebrow{position:relative;top:auto;margin-bottom:14px}#iwbp .bp-img{position:relative!important;display:inline-block;width:44%!important;height:30vh!important;margin:1.5%;inset:auto!important;opacity:1!important;transform:none!important}#iwbp .bp-cta{position:relative;bottom:auto;margin-top:5vh}}@media (prefers-reduced-motion:reduce){#iwbp .bp-img{opacity:1!important;transform:none!important}}section.container-x.py-14{display:none !important}#iwex{position:relative;background:#faf9f6;color:#2b2517;font-family:'Hanken Grotesk',system-ui,sans-serif;padding:clamp(60px,9vh,130px) 0 clamp(50px,8vh,110px);overflow:hidden}#iwex .ex-wrap{max-width:1240px;margin:0 auto;padding:0 clamp(22px,5vw,72px)}#iwex .ex-top{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex-wrap:wrap;margin-bottom:clamp(28px,5vh,56px)}#iwex .ex-eyebrow{font-size:11px;letter-spacing:.32em;text-indent:.32em;color:#F5700A;font-weight:600;text-transform:uppercase;margin-bottom:14px}#iwex .ex-h{font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-style:italic;font-size:clamp(46px,9vw,130px);line-height:.9;letter-spacing:.005em;color:#F5700A;margin:0}#iwex .ex-viewall{display:inline-flex;align-items:center;gap:10px;text-decoration:none;font-weight:600;font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#2b2517;border:1px solid rgba(43,37,23,.25);border-radius:999px;padding:12px 20px;transition:background .25s,color .25s,border-color .25s}#iwex .ex-viewall:hover{background:#F5700A;color:#fff;border-color:#F5700A}#iwex .ex-list{border-top:1px solid rgba(43,37,23,.16)}#iwex .ex-row{position:relative;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:clamp(22px,3.4vh,40px) clamp(8px,2vw,28px);border-bottom:1px solid rgba(43,37,23,.16);text-decoration:none;color:inherit;cursor:pointer;transition:background .35s ease,padding-left .35s ease;opacity:0;transform:translateY(24px)}#iwex .ex-row.in{opacity:1;transform:none;transition:background .35s ease,padding-left .35s ease,opacity .7s ease,transform .7s ease}#iwex .ex-row:hover{background:rgba(245,112,10,.06);padding-left:clamp(18px,3vw,44px)}#iwex .ex-l{display:flex;align-items:baseline;gap:clamp(14px,2vw,30px);min-width:0}#iwex .ex-num{font-family:'Cormorant Garamond',serif;font-size:14px;color:#b3a585;font-weight:500;width:30px;flex:0 0 auto}#iwex .ex-main{min-width:0}#iwex .ex-title{font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:clamp(24px,3.6vw,52px);line-height:1.02;margin:0 0 10px;color:#2b2517;transition:color .3s}#iwex .ex-row:hover .ex-title{color:#F5700A}#iwex .ex-tags{display:flex;gap:8px;flex-wrap:wrap}#iwex .ex-tags span{font-size:10px;letter-spacing:.16em;text-transform:uppercase;font-weight:600;color:#6b6147;border:1px solid rgba(43,37,23,.2);border-radius:999px;padding:5px 11px}#iwex .ex-arrow{flex:0 0 auto;width:48px;height:48px;border-radius:50%;border:1px solid rgba(43,37,23,.25);display:flex;align-items:center;justify-content:center;color:#2b2517;transition:background .3s,color .3s,border-color .3s,transform .3s}#iwex .ex-row:hover .ex-arrow{background:#F5700A;color:#fff;border-color:#F5700A;transform:rotate(45deg)}#iwex .ex-arrow svg{width:16px;height:16px}#iwex .ex-foot{max-width:1240px;margin:clamp(26px,4vh,48px) auto 0;padding:0 clamp(22px,5vw,72px);font-size:13px;color:#6b6147}#iwex-preview{position:fixed;top:0;left:0;width:clamp(220px,22vw,300px);height:clamp(270px,27vw,370px);border-radius:8px;overflow:hidden;pointer-events:none;z-index:60;opacity:0;transform:translate(-50%,-50%) scale(.85);transition:opacity .35s ease,transform .35s ease;box-shadow:0 30px 70px rgba(20,15,8,.34);will-change:transform,opacity}#iwex-preview.on{opacity:1;transform:translate(-50%,-50%) scale(1)}#iwex-preview img{width:100%;height:100%;object-fit:cover;display:block}#iwex-preview .vb{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);background:#F5700A;color:#fff;font-size:10px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;padding:9px 16px;border-radius:999px}@media (max-width:760px){#iwex .ex-title{font-size:26px}#iwex-preview{display:none}}@media (prefers-reduced-motion: reduce){#iwex .ex-row{opacity:1;transform:none}}section[data-ivy-station=\"reviews\"]{display:none !important}#iwrv{position:relative;background:#dde4d5;color:#2b2517;font-family:'Hanken Grotesk',system-ui,sans-serif;padding:clamp(60px,9vh,120px) 0 clamp(60px,10vh,130px);overflow:hidden}#iwrv .rv-head{text-align:center;margin:0 auto clamp(34px,5vh,60px);max-width:1100px;padding:0 24px}#iwrv .rv-eyebrow{font-size:11px;letter-spacing:.32em;text-indent:.32em;color:#5f7048;font-weight:600;text-transform:uppercase;margin-bottom:15px}#iwrv .rv-head h2{font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:clamp(30px,5.2vw,72px);line-height:1.0;letter-spacing:.01em;margin:0 0 15px;color:#26301d}#iwrv .rv-meta{display:inline-flex;align-items:center;gap:13px;flex-wrap:wrap;justify-content:center;font-size:13px;color:#43503a}#iwrv .rv-meta b{color:#26301d}#iwrv .rv-meta .dot{width:4px;height:4px;border-radius:50%;background:#9aa88a}#iwrv .rv-meta a{color:#26301d;text-decoration:none;border-bottom:1px solid rgba(38,48,29,.35);padding-bottom:2px}#iwrv .rv-meta a:hover{color:#F5700A;border-color:#F5700A}#iwrv .rv-rows{display:flex;flex-direction:column;gap:clamp(14px,1.8vw,22px)}#iwrv .rv-row{overflow:hidden;width:100%;-webkit-mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)}#iwrv .rv-track{display:flex;gap:clamp(14px,1.4vw,20px);width:max-content;will-change:transform}#iwrv .rv-row.ltr .rv-track{animation:rvMarqL var(--dur,46s) linear infinite}#iwrv .rv-row.rtl .rv-track{animation:rvMarqR var(--dur,46s) linear infinite}#iwrv .rv-row:hover .rv-track{animation-play-state:paused}@keyframes rvMarqL{from{transform:translateX(0)}to{transform:translateX(-50%)}}@keyframes rvMarqR{from{transform:translateX(-50%)}to{transform:translateX(0)}}#iwrv .rv-card{flex:0 0 auto;width:clamp(258px,24vw,340px);border-radius:20px;padding:18px 19px 16px;background:var(--bg,#f4eddd);color:var(--fg,#2b2517);box-shadow:0 14px 32px rgba(30,40,22,.12)}#iwrv .rv-card .rv-q{font-size:13px;line-height:1.55;margin:0 0 14px;opacity:.92}#iwrv .rv-card.short .rv-q{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:clamp(16px,1.4vw,20px);line-height:1.3;opacity:1}#iwrv .rv-who{display:flex;align-items:center;gap:10px}#iwrv .rv-av{flex:0 0 auto;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:11.5px;background:var(--av,rgba(20,15,8,.12));color:var(--avc,#2b2517)}#iwrv .rv-who .nm{font-weight:600;font-size:12.5px;line-height:1.2}#iwrv .rv-who .mt{font-size:10.5px;opacity:.7;line-height:1.3;margin-top:2px}#iwrv .rv-card.coral{--bg:#F5700A;--fg:#fff;--av:rgba(255,255,255,.22);--avc:#fff}#iwrv .rv-card.sage{--bg:#cddcb9;--fg:#26301d;--av:rgba(38,48,29,.14);--avc:#26301d}#iwrv .rv-card.cream{--bg:#f4eddd}#iwrv .rv-card.sand{--bg:#e7e0cf}#iwrv .rv-card.blush{--bg:#f3ddd0}@media (prefers-reduced-motion:reduce){#iwrv .rv-track{animation:none!important}}";H.appendChild(s);}}catch(e){}})();
/* splash */
(function () {
  "use strict";if(!(location.pathname==="/"||location.pathname==="/index.html"||location.pathname===""))return;
  try {
    // First frame of the hero video (ourstory.mp4) so the splash flows seamlessly into the hero.
    var PHOTO = "/clips/ourstory_poster.jpg";

    // Suppress the legacy dark "CinematicIntro" so only this splash plays.
    try { sessionStorage.setItem("ivywall-intro-played", "1"); } catch (e) {}

    var reduce = false;
    try { reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches; } catch (e) {}
    var played = false;
    try { played = !!sessionStorage.getItem("iw-splash-v2"); } catch (e) {}
    if (played || reduce) return;            // play once per session; respect reduced motion
    try { sessionStorage.setItem("iw-splash-v2", "1"); } catch (e) {}

    var docEl = document.documentElement;

    // --- styles ---
    var style = document.createElement("style");
    style.textContent = [
      "",
      "html.iw-lock{overflow:hidden !important;}",
      "#iw-splash{position:fixed;inset:0;z-index:2147483600;display:flex;align-items:center;justify-content:center;background:#faf9f6;overflow:hidden;-webkit-font-smoothing:antialiased;}",
      "#iw-splash .iw-wm{display:flex;align-items:center;justify-content:center;flex-wrap:nowrap;white-space:nowrap;",
        "font-family:'Cormorant Garamond','Cormorant',Georgia,'Times New Roman',serif;font-weight:500;color:#1a1a17;",
        "font-size:clamp(38px,7.6vw,112px);line-height:1;letter-spacing:.012em;padding:0 4vw;}",
      "#iw-splash .iw-word{opacity:0;filter:blur(9px);transform:translateY(.14em);",
        "transition:opacity 1.05s cubic-bezier(.2,.7,.2,1),filter 1.05s cubic-bezier(.2,.7,.2,1),transform 1.05s cubic-bezier(.2,.7,.2,1);}",
      "#iw-splash .iw-word.iw-in{opacity:1;filter:blur(0);transform:none;}",
      "#iw-splash .iw-card{position:relative;flex:0 0 auto;align-self:center;width:0;height:.92em;margin:0 .12em;",
        "border-radius:7px;overflow:hidden;opacity:0;transform:scale(.7);",
        "box-shadow:0 14px 34px rgba(20,18,14,.22);",
        "transition:width .72s cubic-bezier(.2,.7,.2,1),margin .72s cubic-bezier(.2,.7,.2,1),opacity .55s ease,transform .72s cubic-bezier(.2,.7,.2,1);}",
      "#iw-splash .iw-card.iw-in{width:1.62em;margin:0 .3em;opacity:1;transform:scale(1);}",
      "#iw-splash .iw-card img,#iw-splash .iw-hero img{width:100%;height:100%;object-fit:cover;display:block;}",
      "#iw-splash .iw-hero{position:fixed;overflow:hidden;border-radius:7px;z-index:2147483601;",
        "transform-origin:center center;box-shadow:0 18px 50px rgba(20,18,14,.28);will-change:transform;}"
    ].join("");
    (document.head || docEl).appendChild(style);

    // --- overlay (attached to <html>, outside <body>, so it never collides with React hydration) ---
    var splash = document.createElement("div");
    splash.id = "iw-splash";
    splash.setAttribute("aria-hidden", "true");

    var wm = document.createElement("div");
    wm.className = "iw-wm";

    var w1 = document.createElement("span"); w1.className = "iw-word"; w1.textContent = "The";
    var card = document.createElement("div"); card.className = "iw-card";
    var cimg = document.createElement("img"); cimg.src = PHOTO; cimg.alt = ""; card.appendChild(cimg);
    var w2 = document.createElement("span"); w2.className = "iw-word"; w2.textContent = "Ivywall";

    wm.appendChild(w1); wm.appendChild(card); wm.appendChild(w2);
    splash.appendChild(wm);
    docEl.appendChild(splash);
    docEl.classList.add("iw-lock");

    // Keep overlay attached if anything (e.g. hydration) tries to detach it mid-run.
    var obs = null;
    try {
      obs = new MutationObserver(function () {
        if (!docEl.contains(splash) && !done) docEl.appendChild(splash);
      });
      obs.observe(docEl, { childList: true });
    } catch (e) {}

    var done = false, failTimer = null;
    function finish() {
      if (done) return; done = true;
      try { if (obs) obs.disconnect(); } catch (e) {}
      if (failTimer) clearTimeout(failTimer);
      docEl.classList.remove("iw-lock");
      if (splash && splash.parentNode) splash.parentNode.removeChild(splash);
    }
    function reveal() {
      if (done) return;
      // restart the hero video from frame 0 so what's revealed matches the splash image
      try {
        var hv = document.querySelector('#iwh video');
        if (hv) { hv.currentTime = 0; var pp = hv.play(); if (pp && pp.catch) pp.catch(function(){}); }
      } catch (e) {}
      splash.style.transition = "opacity .72s ease";
      splash.style.opacity = "0";
      setTimeout(finish, 760);
    }
    function expand() {
      if (done) return;
      var r = card.getBoundingClientRect();
      var vw = window.innerWidth, vh = window.innerHeight;
      if (!r.width || !r.height) { reveal(); return; }
      var hero = document.createElement("div");
      hero.className = "iw-hero";
      hero.style.left = r.left + "px"; hero.style.top = r.top + "px";
      hero.style.width = r.width + "px"; hero.style.height = r.height + "px";
      var him = document.createElement("img"); him.src = PHOTO; him.alt = ""; hero.appendChild(him);
      splash.appendChild(hero);
      card.style.visibility = "hidden";
      // words clear away
      w1.style.transition = w2.style.transition = "opacity .45s ease, filter .45s ease, transform .6s ease";
      w1.style.opacity = w2.style.opacity = "0";
      w1.style.transform = w2.style.transform = "translateY(-.12em)";

      var cx = r.left + r.width / 2, cy = r.top + r.height / 2;
      var scale = Math.max(vw / r.width, vh / r.height) * 1.001;
      var tx = (vw / 2 - cx), ty = (vh / 2 - cy);
      var anim = hero.animate(
        [
          { transform: "translate(0px,0px) scale(1)", borderRadius: "7px" },
          { transform: "translate(" + tx + "px," + ty + "px) scale(" + scale + ")", borderRadius: "0px" }
        ],
        { duration: 1180, easing: "cubic-bezier(0.76,0,0.24,1)", fill: "forwards" }
      );
      anim.onfinish = function () { setTimeout(reveal, 280); };
    }
    function run() {
      requestAnimationFrame(function () {
        w1.classList.add("iw-in");
        setTimeout(function () { w2.classList.add("iw-in"); }, 150);
        setTimeout(function () { card.classList.add("iw-in"); }, 1060);
        setTimeout(expand, 2380);
      });
    }

    // skip on interaction
    function skip() { if (done) return; reveal(); }
    splash.addEventListener("click", skip);
    window.addEventListener("keydown", function (e) { if (e.key === "Escape" || e.key === "Enter" || e.key === " ") skip(); });

    // failsafe: never trap the page
    failTimer = setTimeout(finish, 7000);

    // start after the display font is ready (max ~650ms wait), avoids a fallback->serif flash
    function go() { run(); }
    if (document.fonts && document.fonts.load) {
      var fp = document.fonts.load("500 90px 'Cormorant Garamond'");
      Promise.race([
        (fp && fp.then ? fp : Promise.resolve()),
        new Promise(function (res) { setTimeout(res, 650); })
      ]).then(go, go);
    } else { go(); }
  } catch (err) {
    // On any error, make sure nothing stays locked.
    try { document.documentElement.classList.remove("iw-lock"); } catch (e) {}
  }
})();

/* navbar */
(function () {
  "use strict";
  var BRAND = "THE IVYWALL";
  var LINKS = [["Rooms & Suites","/rooms/"],["Dining","/dining/"],["Experiences","/experiences/"],["Gallery","/gallery/"],["Our Story","/about/"],["Contact","/contact/"]];
  var BOOK_HREF = "/book/";
  var built=false, nav=null, menu=null;
  function build() {
    if (built && document.getElementById("iwnav")) return true;
    if (!document.body) return false;
    nav=document.createElement("nav"); nav.id="iwnav"; nav.setAttribute("aria-label","Primary");
    nav.innerHTML='<div class="nav-inner"><div class="nav-side l"><a class="nav-book" href="'+BOOK_HREF+'">Book now</a></div>'+
      '<a class="nav-brand" href="/">'+BRAND+'</a>'+
      '<div class="nav-side r"><button class="nav-burger" aria-label="Open menu"><span></span><span></span><span></span></button></div></div>';
    menu=document.createElement("div"); menu.id="iwnav-menu";
    menu.innerHTML='<button class="mclose" aria-label="Close menu">Close ✕</button>'+
      LINKS.map(function(l){return '<a href="'+l[1]+'">'+l[0]+'</a>';}).join("")+
      '<div class="mfoot">Best Western Plus · Panglao, Bohol</div>';
    document.body.appendChild(nav); document.body.appendChild(menu);
    // right-edge Ivy tab -> opens the existing Ivy chat
    if (!document.getElementById("iw-ivytab")) {
      var tab=document.createElement("button"); tab.id="iw-ivytab"; tab.type="button";
      tab.setAttribute("aria-label","Talk to Ivy");
      tab.textContent="Talk to Ivy";
      tab.addEventListener("click",function(){ try{ if(window.__openIvy) window.__openIvy(); }catch(e){} });
      document.body.appendChild(tab);
    }
    built=true;
    var onScroll=function(){ nav.classList.toggle("scrolled", window.scrollY>60); };
    window.addEventListener("scroll", onScroll, {passive:true}); onScroll();
    function openMenu(o){ menu.classList.toggle("open",o); document.documentElement.style.overflow=o?"hidden":""; }
    nav.querySelector(".nav-burger").addEventListener("click",function(){openMenu(true);});
    menu.querySelector(".mclose").addEventListener("click",function(){openMenu(false);});
    menu.querySelectorAll("a").forEach(function(a){a.addEventListener("click",function(){openMenu(false);});});
    window.addEventListener("keydown",function(e){if(e.key==="Escape")openMenu(false);});
    return true;
  }
  function enforce(){ if(!document.getElementById("iwnav")){ built=false; build(); } }
  function init(){ if(!build()){ setTimeout(init,120); return; }
    try{ var mo=new MutationObserver(function(){enforce();}); mo.observe(document.body,{childList:true}); setTimeout(function(){try{mo.disconnect();}catch(e){}},9000);}catch(e){}
  }
  if (document.readyState==="complete") setTimeout(init,350);
  else window.addEventListener("load", function(){ setTimeout(init,350); });
})();

/* iw-hero-v2 */
(function () {
  "use strict";if(!(location.pathname==="/"||location.pathname==="/index.html"||location.pathname===""))return;
  var VIDEO = "/clips/ourstory.mp4";
  var POSTER = "/clips/ourstory_poster.jpg";
  var BIGWORD = "THE IVYWALL";
  var LOCLABEL = "PANGLAO · BOHOL";

  function clamp(v, a, b) { return v < a ? a : v > b ? b : v; }
  function lerp(a, b, t) { return a + (b - a) * t; }
  function easeInOut(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }
  function easeOut(t) { return 1 - Math.pow(1 - t, 3); }

  var wrap, stage, group, frame, video, word, loc, intro, eyebrow, cue, raf = 0, built = false;

  function build() {
    if (built) return true;
    var anchor = document.querySelector('main .min-h-\\[100svh\\].bg-palm-night');
    var parentRef = null, beforeRef = null;
    if (anchor) {
      var holder = anchor.parentElement || anchor;     // reveal wrapper
      parentRef = holder.parentElement; beforeRef = holder;
    } else {
      var main = document.querySelector('main');
      if (!main) return false;
      parentRef = main; beforeRef = main.firstChild;
    }

    wrap = document.createElement("section"); wrap.id = "iwh";
    stage = document.createElement("div"); stage.className = "iwh-stage";
    group = document.createElement("div"); group.className = "iwh-group";

    word = document.createElement("div"); word.className = "iwh-word";
    word.innerHTML = '<span class="w-the">THE</span> <span class="w-ivy">IVYWALL</span>';
    loc = document.createElement("div"); loc.className = "iwh-loc"; loc.textContent = LOCLABEL;

    frame = document.createElement("div"); frame.className = "iwh-frame";
    video = document.createElement("video");
    video.src = VIDEO; video.poster = POSTER;
    video.muted = true; video.loop = true; video.autoplay = true;
    video.setAttribute("muted", ""); video.setAttribute("playsinline", ""); video.playsInline = true;
    video.preload = "auto";
    var scrim = document.createElement("div"); scrim.className = "iwh-scrim";
    frame.appendChild(video); frame.appendChild(scrim);

    intro = document.createElement("div"); intro.className = "iwh-intro";
    var c1 = document.createElement("div"); c1.className = "col";
    c1.textContent = "International comfort, a Boholano soul. We built Bohol’s first international-chain beach resort the way the island lives — unhurried, generous, and proud of where it stands.";
    var c2 = document.createElement("div"); c2.className = "col";
    c2.textContent = "Eighty rooms wrapped around a pool, a rooftop above Alona Beach, and a welcome you feel from the first hello — four-star comfort, told in a Boholano accent.";
    intro.appendChild(c1); intro.appendChild(c2);

    cue = document.createElement("div"); cue.className = "iwh-cue";
    cue.innerHTML = "SCROLL<span class='bar'></span>";

    group.appendChild(word); group.appendChild(loc);
    group.appendChild(frame); group.appendChild(intro);
    stage.appendChild(group); stage.appendChild(cue);
    wrap.appendChild(stage);

    parentRef.insertBefore(wrap, beforeRef);
    built = true;
    try { var p = video.play(); if (p && p.catch) p.catch(function(){}); } catch (e) {}
    update();
    return true;
  }

  function update() {
    if (!wrap) return;
    var vw = window.innerWidth, vh = window.innerHeight;
    var total = wrap.offsetHeight - vh;
    var top = wrap.getBoundingClientRect().top;
    var p = total > 0 ? clamp(-top / total, 0, 1) : 0;

    // ---- video frame: full-bleed -> centered portrait frame (first ~58% of scroll) ----
    var ts = easeInOut(clamp(p / 0.58, 0, 1));
    var Hs = vh * 0.50, Ws = Hs * 0.82;                 // small (portrait) target
    if (Ws > vw * 0.58) { Ws = vw * 0.58; Hs = Ws / 0.82; }
    var sx = (vw - Ws) / 2, sy = vh * 0.07;             // upper-centered
    var L = lerp(0, sx, ts), T = lerp(0, sy, ts);
    var W = lerp(vw, Ws, ts), H = lerp(vh, Hs, ts);
    var R = lerp(0, 16, ts);
    frame.style.left = L + "px"; frame.style.top = T + "px";
    frame.style.width = W + "px"; frame.style.height = H + "px";
    frame.style.borderRadius = R + "px";

    // ---- wordmark + location reveal (frame overlaps the top of the word, inspo-style) ----
    var wt = easeOut(clamp((p - 0.16) / 0.42, 0, 1));
    word.style.opacity = wt;
    word.style.top = (vh * 0.595) + "px";   // higher, so the video frame overlaps the top of the word
    word.style.transform = "translateY(" + (-50 + (1 - wt) * 6) + "%)";
    loc.style.opacity = clamp((p - 0.34) / 0.30, 0, 1);
    loc.style.top = (vh * 0.805) + "px";

    // ---- group lifts slightly + intro fades in near the end ----
    var gl = easeOut(clamp((p - 0.66) / 0.34, 0, 1));
    group.style.transform = "translateY(" + (-gl * vh * 0.085) + "px)";
    intro.style.opacity = gl;
    intro.style.transform = "translateY(" + ((1 - gl) * 22) + "px)";

    // ---- scroll cue only while video is large ----
    cue.style.opacity = clamp(1 - p / 0.22, 0, 1);
  }

  function onScroll() { if (raf) return; raf = requestAnimationFrame(function () { raf = 0; update(); }); }

  function enforce() {
    // keep our hero present even if a late hydration pass re-renders the tree
    if (!document.getElementById("iwh")) { built = false; build(); }
  }

  function init() {
    if (!build()) { setTimeout(init, 120); return; }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    try {
      var mo = new MutationObserver(function () { enforce(); });
      mo.observe(document.querySelector("main") || document.body, { childList: true });
      setTimeout(function () { try { mo.disconnect(); } catch (e) {} }, 9000);
    } catch (e) {}
  }

  // run after hydration settles to avoid mismatch (splash overlay covers this moment)
  if (document.readyState === "complete") setTimeout(init, 350);
  else window.addEventListener("load", function () { setTimeout(init, 350); });
})();

/* iw-os-v2 */
(function () {
  "use strict";if(!(location.pathname==="/"||location.pathname==="/index.html"||location.pathname===""))return;
  var HEAD = "A Boholano welcome";
  var EYEBROW = "Best Western Plus · The Ivywall";
  var STMT = "International comfort, a Boholano soul. We built Bohol’s first international-chain beach resort the way the island lives — unhurried, generous, and proud of where it stands.";
  var SUB = "Eighty rooms wrapped around a pool, a rooftop above Alona Beach, and a welcome you feel from the first hello. Every detail is woven in native Filipino craft — banig headboards, capiz light, and people who learn your name by dinner. Four-star comfort, told in a Boholano accent.";
  var LINK_HREF = "/about/";

  function clamp(v,a,b){return v<a?a:v>b?b:v;}
  var built = false, sectionEl = null, words = [], stmtEl = null, raf = 0;

  function build() {
    if (built && document.getElementById("iwos")) return true;
    var orig = document.querySelector("section.bg-pearl.py-20");
    var parentRef, beforeRef;
    if (orig) {
      var anchor = orig;
      if (orig.parentElement && orig.parentElement.tagName === "DIV" &&
          orig.parentElement.children.length === 1 && orig.parentElement.parentElement) anchor = orig.parentElement;
      parentRef = anchor.parentNode; beforeRef = anchor;
    } else {
      var main = document.querySelector("main"); if (!main) return false;
      parentRef = main; beforeRef = null;
    }

    var s = document.createElement("section"); s.id = "iwos";
    s.innerHTML =
      '<div class="iwos-side">Est. Panglao · Bohol</div>' +
      '<div class="iwos-wrap">' +
        '<div class="iwos-top rv d1"><span class="dot"><i></i></span><span>Our story</span></div>' +
        '<h2 class="iwos-head rv d1"></h2>' +
        '<span class="iwos-eyebrow rv d2"></span>' +
        '<p class="iwos-statement"></p>' +
        '<p class="iwos-sub rv d4"></p>' +
        '<a class="iwos-link rv d5"><span class="lbl">Read our story</span><span class="arr">→</span></a>' +
      '</div>';

    s.querySelector(".iwos-head").textContent = HEAD;
    s.querySelector(".iwos-eyebrow").textContent = EYEBROW;
    s.querySelector(".iwos-sub").textContent = SUB;
    s.querySelector(".iwos-link").setAttribute("href", LINK_HREF);

    // build the statement as individual words for the scroll-linked fade
    stmtEl = s.querySelector(".iwos-statement");
    STMT.split(" ").forEach(function (wd) {
      var sp = document.createElement("span"); sp.className = "w"; sp.textContent = wd;
      stmtEl.appendChild(sp);
      stmtEl.appendChild(document.createTextNode(" "));   // real space between inline-block words
      words.push(sp);
    });

    parentRef.insertBefore(s, beforeRef);
    sectionEl = s; built = true;

    try {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e) { if (e.isIntersecting) { s.classList.add("in"); } });
      }, { threshold: 0.12 });
      io.observe(s);
      var r = s.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92) s.classList.add("in");
    } catch (e) { s.classList.add("in"); }

    fill();
    return true;
  }

  // light up the statement word-by-word as it scrolls up through the viewport
  function fill() {
    if (!stmtEl || !words.length) return;
    var vh = window.innerHeight;
    var r = stmtEl.getBoundingClientRect();
    var p = clamp((vh * 0.80 - r.top) / (r.height * 0.78 + vh * 0.22), 0, 1);
    var n = words.length;
    for (var i = 0; i < n; i++) {
      var local = clamp(p * n - i, 0, 1);
      words[i].style.opacity = (0.16 + 0.84 * local).toFixed(3);
    }
  }
  function onScroll(){ if (raf) return; raf = requestAnimationFrame(function(){ raf = 0; fill(); }); }
  function enforce(){ if (!document.getElementById("iwos")) { built = false; words = []; build(); } }

  function init() {
    if (!build()) { setTimeout(init, 120); return; }
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    try {
      var mo = new MutationObserver(function () { enforce(); });
      mo.observe(document.querySelector("main") || document.body, { childList: true });
      setTimeout(function () { try { mo.disconnect(); } catch (e) {} }, 9000);
    } catch (e) {}
  }

  if (document.readyState === "complete") setTimeout(init, 350);
  else window.addEventListener("load", function () { setTimeout(init, 350); });
})();

/* iw-sop-v2 */
(function () {
  "use strict";if(!(location.pathname==="/"||location.pathname==="/index.html"||location.pathname===""))return;
  var BG = "/photos/BWPlus_Ivywall_02_Facade_Pool.jpg";
  var HEAD = ['DESIGNED', 'FOR HERE'];
  var EYEBROW = "A sense of place";
  var CARDS = [
    { cls:"c1", t:"ROOTED IN BOHOL", d:"A hotel that belongs here — Best Western Plus standards, native Filipino soul.", img:"/photos/ivy_story_aerial.jpg" },
    { cls:"c2", t:"NATIVE FILIPINO DETAIL", d:"Banig-weave headboards, capiz-shell light, palm-wood inlay — made by Visayan hands.", img:"/photos/BWPlus_Ivywall_11_Family_Room.jpg" },
    { cls:"c3", t:"SUNSETS ON TERAZA", d:"Calamansi mojitos and the Bohol horizon. The rooftop opens at four.", img:"/photos/ivy_story_terrace_deck.jpg" }
  ];
  var lerp=function(a,b,t){return a+(b-a)*t;}, clamp=function(v,a,b){return v<a?a:v>b?b:v;}, easeOut=function(t){return 1-Math.pow(1-t,3);};
  var wrap, stage, bg, cardWrap=null, raf=0, built=false;

  function build() {
    if (built && document.getElementById("iwsop")) return true;
    var orig = document.querySelector('section[class*="250vh"]');
    var parentRef, beforeRef;
    if (orig) {
      var anchor = orig;
      if (orig.parentElement && orig.parentElement.tagName === "DIV" &&
          orig.parentElement.children.length === 1 && orig.parentElement.parentElement) anchor = orig.parentElement;
      parentRef = anchor.parentNode; beforeRef = anchor;
    } else { var main=document.querySelector("main"); if(!main) return false; parentRef=main; beforeRef=null; }

    wrap = document.createElement("section"); wrap.id="iwsop";
    stage = document.createElement("div"); stage.className="sop-stage";
    bg = document.createElement("div"); bg.className="sop-bg";
    var bgimg=document.createElement("img"); bgimg.src=BG; bgimg.alt="A sense of place — The Ivywall, Panglao"; bg.appendChild(bgimg);
    var scrim=document.createElement("div"); scrim.className="sop-scrim";
    var head=document.createElement("h2"); head.className="sop-head"; head.innerHTML=HEAD[0]+'<br>'+HEAD[1];
    var eyebrow=document.createElement("div"); eyebrow.className="sop-eyebrow"; eyebrow.textContent=EYEBROW.toUpperCase();
    cardWrap=document.createElement("div"); cardWrap.className="sop-cards";
    CARDS.forEach(function(cd){
      var a=document.createElement("article"); a.className="sop-card "+cd.cls;
      a.innerHTML='<div class="thumb"><img alt=""></div><div class="cap"><span class="t"></span><span class="ar">→</span></div><p class="d"></p>';
      a.querySelector(".t").textContent=cd.t; a.querySelector(".d").textContent=cd.d;
      var im=a.querySelector(".thumb img"); im.src=cd.img; im.alt=cd.t;
      cardWrap.appendChild(a);
    });
    stage.appendChild(bg); stage.appendChild(scrim); stage.appendChild(head); stage.appendChild(cardWrap); stage.appendChild(eyebrow);
    wrap.appendChild(stage);
    parentRef.insertBefore(wrap, beforeRef);
    built=true; update(); return true;
  }
  function update(){
    if(!wrap) return; var vh=window.innerHeight, total=wrap.offsetHeight-vh;
    var p = total>0 ? clamp(-wrap.getBoundingClientRect().top/total,0,1) : 0;
    bg.style.transform = "scale("+lerp(1.12,1.0,easeOut(p)).toFixed(3)+") translateY("+(p*-2.2).toFixed(2)+"%)";
  }
  function onScroll(){ if(raf) return; raf=requestAnimationFrame(function(){ raf=0; update(); }); }
  function enforce(){ if(!document.getElementById("iwsop")){ built=false; build(); } }
  function init(){
    if(!build()){ setTimeout(init,120); return; }
    window.addEventListener("scroll", onScroll, {passive:true});
    window.addEventListener("resize", onScroll, {passive:true});
    try{ var mo=new MutationObserver(function(){enforce();}); mo.observe(document.querySelector("main")||document.body,{childList:true}); setTimeout(function(){try{mo.disconnect();}catch(e){}},9000);}catch(e){}
  }
  if (document.readyState==="complete") setTimeout(init,350);
  else window.addEventListener("load", function(){ setTimeout(init,350); });
})();

/* iw-rog-v2 */
(function () {
  "use strict";if(!(location.pathname==="/"||location.pathname==="/index.html"||location.pathname===""))return;
  var WATERMARK = "PANGLAO";
  var LINES = ["Small enough to feel personal.", "Complete enough to stay.", "Everything, five minutes apart."];
  function clamp(v,a,b){return v<a?a:v>b?b:v;}
  function lerp(a,b,t){return a+(b-a)*t;}
  var built=false, lineEls=[], water=null, linesWrap=null, raf=0;

  function build() {
    if (built && document.getElementById("iwrog")) return true;
    var orig = document.querySelector('section[data-ivy-station="highlights"]');
    var parentRef, beforeRef;
    if (orig) {
      var anchor = orig;
      if (orig.parentElement && orig.parentElement.tagName === "DIV" &&
          orig.parentElement.children.length === 1 && orig.parentElement.parentElement) anchor = orig.parentElement;
      parentRef = anchor.parentNode; beforeRef = anchor;
    } else { var main=document.querySelector("main"); if(!main) return false; parentRef=main; beforeRef=null; }

    var s=document.createElement("section"); s.id="iwrog";
    s.innerHTML='<div class="rog-stage"><div class="rog-water"><span></span></div>'+
      '<div class="rog-lines">'+LINES.map(function(t){return '<div class="rog-line">'+t+'</div>';}).join("")+'</div></div>';
    s.querySelector(".rog-water span").textContent=WATERMARK;
    parentRef.insertBefore(s, beforeRef);
    built=true;
    water=s.querySelector(".rog-water span");
    linesWrap=s.querySelector(".rog-lines");
    lineEls=[].slice.call(s.querySelectorAll(".rog-line"));
    fitWater(); update(); return true;
  }
  // size the watermark so the whole word fits edge-to-edge across the viewport
  function fitWater(){
    if(!water) return;
    water.style.fontSize="100px";
    var w=water.getBoundingClientRect().width;
    if(w>0){ water.style.fontSize=(100*(window.innerWidth*0.98)/w).toFixed(1)+"px"; }
  }
  function update() {
    var sec=document.getElementById("iwrog"); if(!sec) return;
    var vh=window.innerHeight, total=sec.offsetHeight-vh;
    var p = total>0 ? clamp(-sec.getBoundingClientRect().top/total,0,1) : 0;
    // translate the whole stack so each line passes through the vertical centre
    linesWrap.style.transform="translateY("+lerp(vh*0.30,-vh*0.30,p).toFixed(1)+"px)";
    // sharp at centre, blurred + dimmed away from it (no reveal)
    var cy=vh/2;
    for (var i=0;i<lineEls.length;i++){
      var r=lineEls[i].getBoundingClientRect(); var d=Math.abs((r.top+r.height/2)-cy);
      var blur=clamp(d/(vh*0.16),0,1)*11;
      var op=clamp(1-d/(vh*0.60),0.18,1);
      lineEls[i].style.filter="blur("+blur.toFixed(2)+"px)";
      lineEls[i].style.opacity=op.toFixed(3);
    }
  }
  function onScroll(){ if(raf) return; raf=requestAnimationFrame(function(){ raf=0; update(); }); }
  function enforce(){ if(!document.getElementById("iwrog")){ built=false; lineEls=[]; build(); } }
  function init(){
    if(!build()){ setTimeout(init,120); return; }
    window.addEventListener("scroll", onScroll, {passive:true});
    window.addEventListener("resize", function(){ fitWater(); onScroll(); }, {passive:true});
    setTimeout(fitWater, 600);
    try{ var mo=new MutationObserver(function(){enforce();}); mo.observe(document.querySelector("main")||document.body,{childList:true}); setTimeout(function(){try{mo.disconnect();}catch(e){}},9000);}catch(e){}
  }
  if (document.readyState==="complete") setTimeout(init,350);
  else window.addEventListener("load", function(){ setTimeout(init,350); });
})();

/* iw-rooms-v2 */
(function () {
  "use strict";if(!(location.pathname==="/"||location.pathname==="/index.html"||location.pathname===""))return;
  var EYEBROW = "Rooms & Suites — Four ways to settle in";
  var HEAD = "A room shaped around your stay";
  var ROOMS = [
    { n:"Superior Room", s:"28 m² · Queen · Sleeps 2", p:"₱5,800", img:"/photos/BWPlus_Ivywall_04_Superior_Room.jpg" },
    { n:"Deluxe Room",   s:"32 m² · King · Sleeps 3",  p:"₱7,800", img:"/photos/BWPlus_Ivywall_05_Deluxe_Room_SeaView.jpg" },
    { n:"Premier Room",  s:"38 m² · King · Sleeps 3",  p:"₱10,500", img:"/photos/BWPlus_Ivywall_06_Premier_Room.jpg" },
    { n:"Family Room",   s:"48 m² · Two Queens · Sleeps 4", p:"₱12,500", img:"/photos/BWPlus_Ivywall_11_Family_Room.jpg" }
  ];
  var ROOMS_HREF = "/rooms/";
  var built=false, sectionEl=null, headEl=null;
  function build() {
    if (built && document.getElementById("iwrooms")) return true;
    var orig = document.querySelector('section[style*="vh"]:not(.bg-palm-night)');
    var parentRef, beforeRef;
    if (orig) {
      var anchor = orig;
      if (orig.parentElement && orig.parentElement.tagName === "DIV" &&
          orig.parentElement.children.length === 1 && orig.parentElement.parentElement) anchor = orig.parentElement;
      parentRef = anchor.parentNode; beforeRef = anchor;
    } else { var main=document.querySelector("main"); if(!main) return false; parentRef=main; beforeRef=null; }
    var s=document.createElement("section"); s.id="iwrooms"; s.style.setProperty("--n", ROOMS.length);
    var n=ROOMS.length;
    var panels=ROOMS.map(function(r,i){
      return '<div class="rs-panel" style="--i:'+i+';z-index:'+(10+i)+'"><div class="rs-card">'+
        '<img src="'+r.img+'" alt="'+r.n+' — The Ivywall, Panglao">'+
        '<div class="rs-cap"><div class="left"><div class="idx">0'+(i+1)+' / 0'+n+'</div>'+
        '<h3>'+r.n+'</h3><div class="specs">'+r.s+'</div></div>'+
        '<div class="right"><div class="price">'+r.p+'<small>From / night</small></div>'+
        '<a class="view" href="'+ROOMS_HREF+'">View details →</a></div></div></div></div>';
    }).join("");
    s.innerHTML='<div class="rs-head"><div class="eyebrow">'+EYEBROW+'</div><h2>'+HEAD+'</h2></div>'+
      '<div class="rs-deck">'+panels+'</div>'+
      '<div class="rs-foot"><a href="'+ROOMS_HREF+'">See all rooms <span>→</span></a></div>';
    parentRef.insertBefore(s, beforeRef);
    sectionEl=s; headEl=s.querySelector(".rs-head"); built=true; measure();
    try{ var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.classList.add("shown");});},{threshold:0.2});
      s.querySelectorAll(".rs-panel").forEach(function(pp){io.observe(pp);}); }catch(e){ s.querySelectorAll(".rs-panel").forEach(function(pp){pp.classList.add("shown");}); }
    return true;
  }
  function measure(){
    if(!sectionEl||!headEl) return;
    var nav=document.getElementById("iwnav")||document.querySelector("header");
    var topH=nav?Math.round(nav.getBoundingClientRect().height):64; if(!topH||topH<30)topH=64;
    sectionEl.style.setProperty("--rsTop", topH+"px");
    sectionEl.style.setProperty("--rsHeadH", headEl.offsetHeight+"px");
  }
  function enforce(){ if(!document.getElementById("iwrooms")){ built=false; build(); } }
  function init(){ if(!build()){ setTimeout(init,120); return; }
    window.addEventListener("resize", function(){measure();}, {passive:true});
    setTimeout(measure,500); setTimeout(measure,1300);
    try{ var mo=new MutationObserver(function(){enforce();}); mo.observe(document.querySelector("main")||document.body,{childList:true}); setTimeout(function(){try{mo.disconnect();}catch(e){}},9000);}catch(e){}
  }
  if (document.readyState==="complete") setTimeout(init,350);
  else window.addEventListener("load", function(){ setTimeout(init,350); });
})();

/* iw-bohol-v1 */
(function () {
  "use strict";if(!(location.pathname==="/"||location.pathname==="/index.html"||location.pathname===""))return;
  var EYEBROW = "Two restaurants · one menu of memory";
  var HEAD = 'BOHOL ON<br>A <span class="orange">PLATE</span>';
  var IMAGES = [
    { img:"/photos/BWPlus_Ivywall_21_Boodle_Platter.jpg",    css:"top:6%;left:2.5%;width:clamp(230px,28vw,440px);height:clamp(165px,20vw,320px);z-index:2;",  fx:-110,fy:0,  tag:"Boodle <b>feast</b>" },
    { img:"/photos/BWPlus_Ivywall_10_Signature_Seafood.jpg", css:"top:9%;right:3%;width:clamp(220px,26vw,410px);height:clamp(170px,21vw,330px);z-index:3;",   fx:120, fy:0,  tag:"Seafood <b>paella</b>" },
    { img:"/photos/BWPlus_Ivywall_22_Banana_Cocktail.jpg",   css:"top:38%;left:11%;width:clamp(130px,14vw,210px);height:clamp(180px,19vw,290px);z-index:5;",  fx:-80, fy:0,  tag:"Calamansi <b>&amp; coconut</b>" },
    { img:"/photos/BWPlus_Ivywall_07_Restaurant.jpg",        css:"bottom:14%;left:30%;width:clamp(210px,25vw,380px);height:clamp(150px,15vw,250px);z-index:2;", fx:0, fy:110, tag:"" },
    { img:"/photos/BWPlus_Ivywall_19_Alon_Dining_Alt.jpg",   css:"bottom:18%;right:9%;width:clamp(170px,18vw,290px);height:clamp(130px,14vw,220px);z-index:4;",fx:0, fy:120, tag:"Alon <b>all-day</b>" },
    { img:"/photos/BWPlus_Ivywall_09_Rooftop_Bar_Night.jpg", css:"top:44%;right:22%;width:clamp(210px,24vw,380px);height:clamp(150px,17vw,270px);z-index:5;", fx:110, fy:0, tag:"Teraza <b>rooftop</b>" }
  ];
  var DINING_HREF = "/dining/";
  var built=false;
  function build() {
    if (built && document.getElementById("iwbp")) return true;
    var orig = document.querySelector('section[data-ivy-station="dining"]');
    var parentRef, beforeRef;
    if (orig) {
      var anchor = orig;
      if (orig.parentElement && orig.parentElement.tagName === "DIV" &&
          orig.parentElement.children.length === 1 && orig.parentElement.parentElement) anchor = orig.parentElement;
      parentRef = anchor.parentNode; beforeRef = anchor;
    } else { var main=document.querySelector("main"); if(!main) return false; parentRef=main; beforeRef=null; }
    var s=document.createElement("section"); s.id="iwbp";
    var imgsHtml=IMAGES.map(function(im,i){
      return '<div class="bp-img" style="'+im.css+'--fx:'+im.fx+'px;--fy:'+im.fy+'px;transition-delay:'+(i*0.09).toFixed(2)+'s;"><img src="'+im.img+'" alt="Local Boholano dish at The Ivywall">'+
        (im.tag?'<div class="tag">'+im.tag+'</div>':'')+'</div>';
    }).join("");
    s.innerHTML='<div class="bp-stage"><div class="bp-eyebrow">'+EYEBROW+'</div>'+imgsHtml+
      '<h2 class="bp-head">'+HEAD+'</h2>'+
      '<div class="bp-cta"><a href="'+DINING_HREF+'">Explore dining <span>→</span></a></div></div>';
    parentRef.insertBefore(s, beforeRef);
    built=true;
    try{ var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){s.classList.add("in");io.disconnect();}});},{threshold:0.2}); io.observe(s);
      if (s.getBoundingClientRect().top < window.innerHeight*0.9) s.classList.add("in");
    }catch(e){ s.classList.add("in"); }
    return true;
  }
  function enforce(){ if(!document.getElementById("iwbp")){ built=false; build(); } }
  function init(){ if(!build()){ setTimeout(init,120); return; }
    try{ var mo=new MutationObserver(function(){enforce();}); mo.observe(document.querySelector("main")||document.body,{childList:true}); setTimeout(function(){try{mo.disconnect();}catch(e){}},9000);}catch(e){}
  }
  if (document.readyState==="complete") setTimeout(init,350);
  else window.addEventListener("load", function(){ setTimeout(init,350); });
})();

/* iw-exp-v1 */
(function () {
  "use strict";if(!(location.pathname==="/"||location.pathname==="/index.html"||location.pathname===""))return;
  var EYEBROW = "Premium Bohol experiences";
  var HEAD = "Experiences";
  var VIEWALL_HREF = "/experiences/";
  var FOOT = "Handpicked experiences that showcase the best of Bohol’s nature, culture and adventures — all arranged by our front desk.";
  var EXPS = [
    { t:"Balicasag Dolphin & Marine Sanctuary", c:"Island", h:"4 hrs", img:"/experiences/exp_balicasag.jpg" },
    { t:"Chocolate Hills & Countryside", c:"Nature", h:"8 hrs", img:"/experiences/exp_chocolate_hills.jpg" },
    { t:"Tarsier Sanctuary", c:"Nature", h:"1.5 hrs", img:"/experiences/exp_tarsier.jpg" },
    { t:"Loboc River Cruise", c:"Culture", h:"2 hrs", img:"/experiences/exp_loboc_river.jpg" },
    { t:"Hinagdanan Cave", c:"Adventure", h:"1 hr", img:"/experiences/exp_hinagdanan_cave.jpg" },
    { t:"Panglao Wall Diving", c:"Adventure", h:"5 hrs", img:"/experiences/exp_panglao_wall_diving.jpg" }
  ];

  var built = false, preview = null, pvImg = null, raf = 0, mx = 0, my = 0;

  function build() {
    if (built && document.getElementById("iwex")) return true;
    var orig = document.querySelector('section.container-x.py-14');
    var parentRef, beforeRef;
    if (orig) {
      var anchor = orig;
      if (orig.parentElement && orig.parentElement.tagName === "DIV" &&
          orig.parentElement.children.length === 1 && orig.parentElement.parentElement) anchor = orig.parentElement;
      parentRef = anchor.parentNode; beforeRef = anchor;
    } else {
      var main = document.querySelector("main"); if (!main) return false;
      parentRef = main; beforeRef = null;
    }

    var arrow = '<span class="ex-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17 17 7M9 7h8v8"/></svg></span>';
    var rows = EXPS.map(function (e, i) {
      return '<a class="ex-row" href="' + VIEWALL_HREF + '" data-img="' + e.img + '">' +
        '<span class="ex-l"><span class="ex-num">0' + (i + 1) + '</span>' +
          '<span class="ex-main"><h3 class="ex-title">' + e.t + '</h3>' +
            '<span class="ex-tags"><span>' + e.c + '</span><span>' + e.h + '</span></span></span></span>' +
        arrow + '</a>';
    }).join("");

    var s = document.createElement("section"); s.id = "iwex";
    s.innerHTML =
      '<div class="ex-wrap">' +
        '<div class="ex-top"><div><div class="ex-eyebrow">' + EYEBROW + '</div>' +
          '<h2 class="ex-h">' + HEAD + '</h2></div>' +
          '<a class="ex-viewall" href="' + VIEWALL_HREF + '">View all experiences ↗</a></div>' +
        '<div class="ex-list">' + rows + '</div>' +
      '</div>' +
      '<div class="ex-foot">' + FOOT + '</div>';

    parentRef.insertBefore(s, beforeRef);

    preview = document.createElement("div"); preview.id = "iwex-preview";
    preview.innerHTML = '<img alt=""><span class="vb">View</span>';
    pvImg = preview.querySelector("img");
    document.body.appendChild(preview);

    built = true;
    wire(s);
    return true;
  }

  function wire(s) {
    var rows = [].slice.call(s.querySelectorAll(".ex-row"));
    rows.forEach(function (r) {
      r.addEventListener("mouseenter", function () { pvImg.src = r.getAttribute("data-img"); preview.classList.add("on"); });
      r.addEventListener("mouseleave", function () { preview.classList.remove("on"); });
    });
    window.addEventListener("mousemove", function (e) {
      mx = e.clientX; my = e.clientY;
      if (raf) return;
      raf = requestAnimationFrame(function () { raf = 0; preview.style.left = mx + "px"; preview.style.top = my + "px"; });
    }, { passive: true });

    // reveal rows on scroll
    try {
      var io = new IntersectionObserver(function (es) {
        es.forEach(function (e, idx) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
      }, { threshold: 0.2 });
      rows.forEach(function (r, i) { r.style.transitionDelay = (i * 0.05) + "s"; io.observe(r); });
    } catch (e) { rows.forEach(function (r) { r.classList.add("in"); }); }
  }

  function enforce() { if (!document.getElementById("iwex")) { built = false; build(); } }

  function init() {
    if (!build()) { setTimeout(init, 120); return; }
    try {
      var mo = new MutationObserver(function () { enforce(); });
      mo.observe(document.querySelector("main") || document.body, { childList: true });
      setTimeout(function () { try { mo.disconnect(); } catch (e) {} }, 9000);
    } catch (e) {}
  }

  if (document.readyState === "complete") setTimeout(init, 350);
  else window.addEventListener("load", function () { setTimeout(init, 350); });
})();

/* iw-rv-v1 */
(function () {
  "use strict";if(!(location.pathname==="/"||location.pathname==="/index.html"||location.pathname===""))return;
  var EYEBROW = "Guest reviews · 4.6 ★";
  var HEAD = "What guests say, in their own words.";
  var META = '<b>4.6</b> average · <b>1,240+</b> reviews · Tripadvisor &amp; Google <span class="dot"></span> <a href="https://www.tripadvisor.com/" target="_blank" rel="noopener">Read all reviews ↗</a>';
  var CARDS = [
    { cls:"sage",  q:"Everything from the welcome to the pillow menu felt considered. The pool-access room was magical at sunset, and the Teraza rooftop dinner was the trip’s highlight.", av:"HK", nm:"Hiroko & Kenji", mt:"Tokyo · Honeymoon" },
    { cls:"short coral", q:"Felt like coming home — Boholano warmth with a four-star finish.", av:"AM", nm:"Aileen & Marco", mt:"Manila" },
    { cls:"cream", q:"They handled our late arrival without any fuss — a free upgrade we didn’t expect. Kids loved the pool. Already booked a return for December.", av:"P", nm:"The Park Family", mt:"Seoul · Family" },
    { cls:"sand", q:"They remembered our names by day two. Banig headboard, capiz lamp, palm-wood details — never kitschy. Would return without hesitation.", av:"ML", nm:"Marco & Lucia", mt:"Milan · Couple" },
    { cls:"short sage", q:"Three stays in. The little things make it every single time.", av:"JT", nm:"Jonathan T.", mt:"Singapore" },
    { cls:"cream", q:"Late checkout when you ask, a breakfast you look forward to, a team that remembers returning guests. Nothing feels transactional here.", av:"JT", nm:"Jonathan T.", mt:"Singapore · Solo" },
    { cls:"blush", q:"The suite overlooking Balicasag at sunrise — we still talk about it. The honeymoon setup felt sincere, not staged. Book it early.", av:"MD", nm:"Mei Lin & David", mt:"Hong Kong · Honeymoon" },
    { cls:"short sand", q:"Soft mornings, an incredible breakfast, and staff who knew our names by dinner.", av:"HK", nm:"Hiroko & Kenji", mt:"Tokyo" }
  ];
  var built=false;
  function card(c){
    return '<article class="rv-card '+c.cls+'"><p class="rv-q">'+(c.cls.indexOf("short")>-1?"“"+c.q+"”":c.q)+'</p>'+
      '<div class="rv-who"><span class="rv-av">'+c.av+'</span><span><span class="nm">'+c.nm+'</span><span class="mt">'+c.mt+'</span></span></div></article>';
  }
  function rowTrack(order){ var html=order.map(function(i){return card(CARDS[i]);}).join(""); return html+html; } // duplicate for seamless loop
  function build() {
    if (built && document.getElementById("iwrv")) return true;
    var orig = document.querySelector('section[data-ivy-station="reviews"]');
    var parentRef, beforeRef;
    if (orig) {
      var anchor = orig;
      if (orig.parentElement && orig.parentElement.tagName === "DIV" &&
          orig.parentElement.children.length === 1 && orig.parentElement.parentElement) anchor = orig.parentElement;
      parentRef = anchor.parentNode; beforeRef = anchor;
    } else { var main=document.querySelector("main"); if(!main) return false; parentRef=main; beforeRef=null; }
    var rows=[
      {dir:"ltr",dur:"52s",order:[0,1,2,3,4,5,6,7]},
      {dir:"rtl",dur:"60s",order:[4,7,2,5,0,6,1,3]},
      {dir:"ltr",dur:"48s",order:[6,3,0,7,1,4,2,5]}
    ];
    var rowsHtml=rows.map(function(r){return '<div class="rv-row '+r.dir+'" style="--dur:'+r.dur+'"><div class="rv-track">'+rowTrack(r.order)+'</div></div>';}).join("");
    var s=document.createElement("section"); s.id="iwrv";
    s.innerHTML='<div class="rv-head"><div class="rv-eyebrow">'+EYEBROW+'</div><h2>'+HEAD+'</h2><div class="rv-meta">'+META+'</div></div><div class="rv-rows">'+rowsHtml+'</div>';
    parentRef.insertBefore(s, beforeRef);
    built=true; return true;
  }
  function enforce(){ if(!document.getElementById("iwrv")){ built=false; build(); } }
  function init(){ if(!build()){ setTimeout(init,120); return; }
    try{ var mo=new MutationObserver(function(){enforce();}); mo.observe(document.querySelector("main")||document.body,{childList:true}); setTimeout(function(){try{mo.disconnect();}catch(e){}},9000);}catch(e){}
  }
  if (document.readyState==="complete") setTimeout(init,350);
  else window.addEventListener("load", function(){ setTimeout(init,350); });
})();

