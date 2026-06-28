/* IvyWall homepage redesign */
(function(){try{var H=document.head||document.documentElement;if(!document.getElementById("iw-fonts")){var l=document.createElement("link");l.id="iw-fonts";l.rel="stylesheet";l.href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Hanken+Grotesk:wght@400;500;600;700&display=swap";H.appendChild(l);}if(!document.getElementById("iw-redesign-css")){var s=document.createElement("style");s.id="iw-redesign-css";s.textContent="header[data-nav]{display:none !important}#ivy-dock,.ivy-bub,button[aria-label=\"Chat with Ivy\"],button[aria-label=\"Talk to Ivy, our AI receptionist\"]{display:none !important}#iwnav{position:fixed;top:0;left:0;right:0;z-index:50;display:flex;justify-content:center;padding:clamp(12px,2vh,20px) clamp(14px,3vw,40px);font-family:'Hanken Grotesk',system-ui,sans-serif;pointer-events:none}#iwnav::before{content:\"\";position:absolute;inset:0;z-index:-1;pointer-events:none;background:linear-gradient(180deg,rgba(0,0,0,.36),rgba(0,0,0,0));transition:opacity .4s ease}#iwnav.scrolled::before{opacity:0}#iwnav .nav-inner{pointer-events:auto;display:flex;align-items:center;justify-content:space-between;width:100%;gap:20px;padding:0;border-radius:999px;border:1px solid transparent;background:transparent;transition:width .5s cubic-bezier(.4,0,.2,1),max-width .5s cubic-bezier(.4,0,.2,1),gap .5s,padding .45s,background .45s,backdrop-filter .45s,border-color .45s,box-shadow .45s}#iwnav.scrolled .nav-inner{width:auto;max-width:max-content;margin:0 auto;gap:clamp(16px,2.4vw,34px);padding:8px 10px 8px 20px;background:rgba(250,249,246,.5);backdrop-filter:blur(18px) saturate(1.5);-webkit-backdrop-filter:blur(18px) saturate(1.5);border-color:rgba(255,255,255,.45);box-shadow:0 10px 34px rgba(20,15,8,.16)}#iwnav .nav-book{font-weight:600;font-size:11px;letter-spacing:.2em;text-transform:uppercase;color:#fbf7ee;border:1px solid rgba(255,255,255,.55);border-radius:999px;padding:11px 20px;text-decoration:none;white-space:nowrap;transition:color .35s,border-color .35s,background .35s}#iwnav.scrolled .nav-book{color:#2b2517;border-color:rgba(43,37,23,.25);padding:9px 18px}#iwnav .nav-book:hover{background:#F5700A;border-color:#F5700A;color:#fff}#iwnav .nav-brand{font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:clamp(19px,2vw,27px);letter-spacing:.26em;text-indent:.26em;color:#fbf7ee;text-decoration:none;white-space:nowrap;transition:color .35s,letter-spacing .4s,font-size .4s}#iwnav.scrolled .nav-brand{color:#2b2517;letter-spacing:.18em;font-size:clamp(17px,1.6vw,22px)}#iwnav .nav-burger{width:30px;height:16px;position:relative;cursor:pointer;background:none;border:0;padding:0;flex:0 0 auto}#iwnav .nav-burger span{position:absolute;left:0;right:0;height:1.6px;background:#fbf7ee;transition:background .35s}#iwnav .nav-burger span:nth-child(1){top:0}#iwnav .nav-burger span:nth-child(2){top:7px}#iwnav .nav-burger span:nth-child(3){top:14px}#iwnav.scrolled .nav-burger span{background:#2b2517}#iwnav .nav-side{display:flex;flex:0 0 auto}#iwnav .nav-side.r{justify-content:flex-end}#iwnav.scrolled .nav-side{flex:0 0 auto}@media (max-width:620px){#iwnav .nav-book{padding:10px 14px;font-size:10px}}#iw-ivytab{position:fixed;right:0;top:50%;transform:translateY(-50%);z-index:48;cursor:pointer;border:0;background:#F5700A;color:#fff;writing-mode:vertical-rl;text-orientation:mixed;font:600 12px/1 'Hanken Grotesk',system-ui,sans-serif;letter-spacing:.2em;text-transform:uppercase;padding:20px 10px;border-radius:9px 0 0 9px;box-shadow:-5px 8px 22px rgba(20,15,8,.22);transition:padding-right .25s ease,background .25s ease}#iw-ivytab:hover{padding-right:15px;background:#e3650a}#iwnav-menu{position:fixed;inset:0;z-index:55;background:#16140f;color:#fbf7ee;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:clamp(4px,1.4vh,12px);opacity:0;pointer-events:none;transition:opacity .45s ease;font-family:'Cormorant Garamond',Georgia,serif}#iwnav-menu.open{opacity:1;pointer-events:auto}#iwnav-menu a{font-size:clamp(32px,6vw,68px);font-weight:500;color:#fbf7ee;text-decoration:none;line-height:1.12;transition:color .3s,letter-spacing .3s}#iwnav-menu a:hover{color:#F5700A;letter-spacing:.02em}#iwnav-menu .mclose{position:absolute;top:24px;right:34px;font-family:'Hanken Grotesk',sans-serif;font-size:12px;letter-spacing:.2em;text-transform:uppercase;color:#fbf7ee;background:none;border:0;cursor:pointer}#iwnav-menu .mfoot{position:absolute;bottom:30px;font-family:'Hanken Grotesk',sans-serif;font-size:11px;letter-spacing:.22em;text-transform:uppercase;color:rgba(251,247,238,.55)}main .min-h-\\[100svh\\].bg-palm-night{display:none !important}#iwh{position:relative;height:130vh;background:#faf9f6}#iwh *{box-sizing:border-box}#iwh .iwh-stage{position:sticky;top:0;height:100vh;height:100svh;overflow:hidden;background:#faf9f6}#iwh .iwh-group{position:absolute;inset:0;will-change:transform}#iwh .iwh-word{position:absolute;left:0;right:0;top:50%;text-align:center;z-index:6;font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;color:#F5700A;letter-spacing:.015em;line-height:.86;white-space:nowrap;font-size:clamp(44px,12.6vw,200px);transform:translateY(-50%)}#iwh .iwh-word .w-the{color:#17140f}#iwh .iwh-word .w-ivy{color:#F5700A}#iwh .iwh-loc{position:absolute;left:0;right:0;z-index:2;text-align:center;font-family:'Hanken Grotesk',system-ui,sans-serif;font-weight:600;font-size:clamp(10px,1.05vw,15px);letter-spacing:.46em;color:#7a6c4c;text-indent:.46em}#iwh .iwh-frame{position:absolute;overflow:hidden;background:#0c0c0c;z-index:3;box-shadow:0 36px 90px rgba(46,38,20,.22);will-change:left,top,width,height,border-radius}#iwh .iwh-frame video{width:100%;height:100%;object-fit:cover;display:block}#iwh .iwh-scrim{position:absolute;inset:0;z-index:4;pointer-events:none;background:linear-gradient(180deg,rgba(0,0,0,.28),rgba(0,0,0,0) 26%)}#iwh .iwh-intro{display:none !important}#iwh .iwh-intro .col{max-width:330px;font-family:'Hanken Grotesk',system-ui,sans-serif;font-size:clamp(12px,1.05vw,14.5px);line-height:1.62;color:#4a4231}#iwh .iwh-eyebrow{position:absolute;left:0;right:0;text-align:center;z-index:2;font-family:'Hanken Grotesk',system-ui,sans-serif;font-weight:600;font-size:11px;letter-spacing:.34em;text-indent:.34em;color:#F5700A;opacity:0}#iwh .iwh-cue{position:absolute;left:0;right:0;bottom:22px;text-align:center;z-index:5;font-family:'Hanken Grotesk',system-ui,sans-serif;font-weight:600;font-size:10.5px;letter-spacing:.32em;text-indent:.32em;color:#6f6244}#iwh .iwh-cue .bar{display:block;width:1px;height:34px;margin:9px auto 0;background:rgba(90,78,48,.5)}@media (max-width:760px){#iwh .iwh-intro{flex-direction:column;align-items:center;gap:8px;bottom:4vh;padding:0 8vw;text-align:center}#iwh .iwh-intro .col{max-width:none;font-size:12px;line-height:1.55}#iwh .iwh-cue{bottom:14px}}@media (prefers-reduced-motion: reduce){#iwh{height:100vh}}section.bg-pearl.py-20{display:none !important}#iwos{position:relative;background:#faf9f6;color:#2b2517;font-family:'Hanken Grotesk',system-ui,sans-serif;padding:clamp(22px,3.4vh,52px) 0 clamp(64px,12vh,150px);overflow:hidden}#iwos .iwos-wrap{max-width:1240px;margin:0 auto;padding:0 clamp(22px,5vw,72px)}#iwos .iwos-top{display:flex;align-items:center;justify-content:space-between;border-top:1px solid rgba(70,60,36,.18);padding-top:14px;margin-bottom:clamp(20px,4vh,46px);font-size:11px;letter-spacing:.28em;text-indent:.28em;color:#7a6c4c;font-weight:600}#iwos .iwos-top .dot{width:30px;height:30px;border-radius:50%;border:1px solid rgba(70,60,36,.35);display:inline-flex;align-items:center;justify-content:center}#iwos .iwos-top .dot i{width:6px;height:6px;border-radius:50%;background:#F5700A;display:block}#iwos .iwos-head{font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;font-size:clamp(46px,9.2vw,150px);line-height:.92;letter-spacing:-.012em;color:#2b2517;margin:0 0 clamp(28px,5vh,58px)}#iwos .iwos-head .o{color:#F5700A;font-style:italic;font-weight:500}#iwos .iwos-rule{width:56px;height:3px;background:#F5700A;border-radius:2px;margin:clamp(8px,1.4vh,14px) 0 clamp(18px,3vh,28px)}#iwos .iwos-statement .w.o{color:#F5700A}#iwos .iwos-eyebrow{font-family:'Cormorant Garamond',serif;font-style:italic;font-weight:500;font-size:clamp(17px,1.5vw,22px);color:#F5700A;letter-spacing:.01em;margin-bottom:18px;display:block}#iwos .iwos-statement{font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:clamp(23px,3.05vw,46px);line-height:1.26;letter-spacing:.002em;max-width:1040px;margin:0 0 clamp(24px,3.6vh,42px)}#iwos .iwos-statement .w{display:inline-block;opacity:.16;color:#2b2517;transition:opacity .18s linear;will-change:opacity}#iwos .iwos-sub{font-size:clamp(13.5px,1.08vw,16px);line-height:1.72;color:#6b6147;max-width:600px;margin:0 0 28px}#iwos .iwos-link{display:inline-flex;align-items:center;gap:14px;text-decoration:none;font-weight:700;font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#2b2517;transition:gap .25s ease,color .25s ease}#iwos .iwos-link .lbl{border-bottom:1px solid rgba(43,37,23,.3);padding-bottom:3px;transition:border-color .25s ease}#iwos .iwos-link:hover{gap:18px;color:#F5700A}#iwos .iwos-link:hover .lbl{border-color:#F5700A}#iwos .iwos-link .arr{display:inline-flex;width:34px;height:34px;border-radius:50%;background:#F5700A;color:#fff;align-items:center;justify-content:center;font-family:Georgia,serif;font-size:15px;flex:0 0 auto;transition:transform .25s ease}#iwos .iwos-link:hover .arr{transform:translateX(3px)}#iwos .iwos-side{position:absolute;right:14px;top:42%;writing-mode:vertical-rl;font-size:10.5px;letter-spacing:.3em;color:#a89a78;font-weight:600;text-transform:uppercase}#iwos .rv{opacity:0;transform:translateY(26px);transition:opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)}#iwos.in .rv{opacity:1;transform:none}#iwos.in .rv.d1{transition-delay:.05s}#iwos.in .rv.d2{transition-delay:.13s}#iwos.in .rv.d4{transition-delay:.22s}#iwos.in .rv.d5{transition-delay:.30s}@media (max-width:760px){#iwos .iwos-side{display:none}}@media (prefers-reduced-motion: reduce){#iwos .rv{opacity:1;transform:none;transition:none}#iwos .iwos-statement .w{opacity:1;transition:none}}section[class*=\"250vh\"]{display:none !important}#iwsop{position:relative;height:100vh;height:100svh;background:#0c1116;font-family:'Hanken Grotesk',system-ui,sans-serif}#iwsop .sop-stage{position:relative;height:100vh;height:100svh;overflow:hidden;background:#0c1116}#iwsop .sop-bg{position:absolute;inset:-4% -2%;z-index:0;will-change:transform}#iwsop .sop-bg img{width:100%;height:100%;object-fit:cover;display:block}#iwsop .sop-scrim{position:absolute;inset:0;z-index:1;pointer-events:none;background:linear-gradient(180deg,rgba(8,12,16,.52),rgba(8,12,16,.05) 32%,rgba(8,12,16,.12) 66%,rgba(8,12,16,.5))}#iwsop .sop-head{position:absolute;left:0;right:0;top:17%;z-index:2;text-align:center;font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;color:#fbf7ee;font-size:clamp(40px,7.4vw,118px);line-height:.96;letter-spacing:.02em;text-shadow:0 2px 30px rgba(0,0,0,.4)}#iwsop .sop-eyebrow{position:absolute;left:clamp(20px,5vw,64px);bottom:7.5vh;z-index:4;font-weight:700;font-size:12px;letter-spacing:.34em;text-indent:.34em;color:#fbf7ee;text-transform:uppercase;border-top:1px solid rgba(251,247,238,.5);padding-top:12px;min-width:170px}#iwsop .sop-card{position:absolute;z-index:3;width:clamp(186px,16.5vw,244px);background:rgba(250,249,246,.96);border-radius:3px;padding:10px 10px 13px;box-shadow:0 28px 60px rgba(0,0,0,.36);color:#241f15;will-change:transform}#iwsop .sop-card .thumb{width:100%;height:clamp(176px,17.5vw,224px);border-radius:2px;overflow:hidden;background:#0c0c0c;margin-bottom:10px}#iwsop .sop-card .thumb img{width:100%;height:100%;object-fit:cover;display:block}#iwsop .sop-card .cap{display:flex;align-items:center;justify-content:space-between;gap:8px}#iwsop .sop-card .t{font-weight:700;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:#2b2517;line-height:1.2}#iwsop .sop-card .ar{font-family:Georgia,serif;font-size:15px;color:#F5700A;flex:0 0 auto}#iwsop .sop-card .d{margin:7px 0 0;font-size:11.5px;line-height:1.5;color:#5d5440}#iwsop .sop-dots{display:none}@keyframes iwsopFloat{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-16px) rotate(-.5deg)}}#iwsop .c1{left:4.5%;top:34%;animation:iwsopFloat 7.4s ease-in-out infinite}#iwsop .c2{left:37.5%;top:50%;animation:iwsopFloat 8.6s ease-in-out infinite;animation-delay:-2.2s}#iwsop .c3{right:4.5%;top:42%;animation:iwsopFloat 6.8s ease-in-out infinite;animation-delay:-1.1s}@media (max-width:880px){#iwsop{height:100svh;background:#0c1116}#iwsop .sop-stage{position:relative;height:100svh;min-height:560px;overflow:hidden;padding:0}#iwsop .sop-bg{position:absolute;inset:0;z-index:0}#iwsop .sop-bg img{width:100%;height:100%;object-fit:cover}#iwsop .sop-scrim{position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(8,12,16,.5),rgba(8,12,16,.18) 36%,rgba(8,12,16,.6))}#iwsop .sop-head{position:absolute;left:0;right:0;top:10%;z-index:2;margin:0;padding:0 7vw;text-align:center;font-size:clamp(32px,9vw,54px)}#iwsop .sop-eyebrow{display:none}#iwsop .sop-cards{position:absolute;left:0;right:0;bottom:8.5vh;top:auto;z-index:4;height:auto;display:block;padding:0 6vw}#iwsop .sop-card{position:absolute!important;left:0!important;right:0!important;bottom:0!important;top:auto!important;margin:0 auto!important;width:min(282px,74vw)!important;background:rgba(250,249,246,.97);border-radius:3px;padding:10px;box-shadow:0 24px 54px rgba(0,0,0,.55);animation:none!important;display:flex;flex-direction:column;opacity:0;visibility:hidden;transition:opacity .5s ease;pointer-events:none}#iwsop .sop-card.on{opacity:1;visibility:visible;pointer-events:auto}#iwsop .sop-card .thumb{order:0;width:100%;height:42vh;border-radius:2px;margin-bottom:9px}#iwsop .sop-card .cap{order:1}#iwsop .sop-card .t{font-size:12px}#iwsop .sop-card .ar{font-size:16px}#iwsop .sop-card .d{order:2;margin:6px 0 0;font-size:12px;line-height:1.45}#iwsop .sop-dots{position:absolute;left:0;right:0;bottom:3.2vh;z-index:5;display:flex;justify-content:center;gap:9px}#iwsop .sop-dots button{width:8px;height:8px;border-radius:50%;border:0;padding:0;background:rgba(251,247,238,.5);cursor:pointer;transition:background .3s,width .3s}#iwsop .sop-dots button.on{background:#F5700A;width:22px;border-radius:4px}#iwsop .c2{margin-top:0}}@media (prefers-reduced-motion:reduce){#iwsop .sop-card{animation:none!important}}section[data-ivy-station=\"highlights\"]{display:none !important}#iwrog{position:relative;height:300vh;background:#faf9f6;color:#2b2517;font-family:'Hanken Grotesk',system-ui,sans-serif}#iwrog .rog-stage{position:sticky;top:0;height:100vh;height:100svh;overflow:hidden;display:flex;align-items:center;justify-content:center}#iwrog .rog-water{position:absolute;inset:0;z-index:0;display:flex;align-items:center;justify-content:center;pointer-events:none}#iwrog .rog-water span{font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;font-size:18vw;line-height:.8;letter-spacing:.02em;color:rgba(70,58,34,.07);white-space:nowrap}#iwrog .rog-lines{position:relative;z-index:2;width:100%;display:flex;flex-direction:column;align-items:center;gap:clamp(40px,9vh,120px);will-change:transform;text-align:center}#iwrog .rog-line{font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:clamp(30px,5.6vw,92px);line-height:1.02;letter-spacing:.012em;text-transform:uppercase;color:#3a3120;max-width:15ch;will-change:filter,opacity}@media (prefers-reduced-motion:reduce){#iwrog{height:auto}#iwrog .rog-stage{position:relative;height:auto;padding:16vh 0;flex-direction:column}#iwrog .rog-line{filter:none!important;opacity:1!important}}section[style*=\"vh\"]:not(.bg-palm-night){display:none !important}#iwrooms{position:relative;background:#faf9f6;color:#2b2517;font-family:'Hanken Grotesk',system-ui,sans-serif;--rsTop:64px;--rsHeadH:104px;--gap:58px;--n:4}#iwrooms .rs-pin{position:relative}#iwrooms .rs-head{position:relative;z-index:30;background:#faf9f6;text-align:center;padding:clamp(22px,3.4vh,40px) 16px clamp(12px,1.8vh,20px)}#iwrooms .rs-head .eyebrow{font-size:10.5px;letter-spacing:.32em;text-indent:.32em;color:#F5700A;font-weight:600;text-transform:uppercase;margin-bottom:10px}#iwrooms .rs-head h2{font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:clamp(28px,4.4vw,60px);line-height:1.0;letter-spacing:.01em;margin:0;color:#2b2517}#iwrooms .rs-deck{position:relative;padding-bottom:10vh}#iwrooms .rs-panel{position:sticky;top:var(--rsTop);height:calc(100svh - var(--rsTop) - 8vh);display:flex;justify-content:center;align-items:flex-start;padding:0 clamp(18px,4vw,56px)}#iwrooms .rs-card{position:relative;width:min(92vw,1160px);height:100%;overflow:hidden;background:#0c0c0c;border-radius:18px;box-shadow:0 -14px 30px rgba(20,15,8,.14),0 28px 62px rgba(20,15,8,.26);transform-origin:50% 50%;will-change:transform,filter}#iwrooms .rs-card>img{width:100%;height:100%;object-fit:cover;display:block;transform:scale(1.05);transition:transform 1.3s cubic-bezier(.2,.7,.2,1)}#iwrooms .rs-panel.shown .rs-card>img{transform:scale(1)}#iwrooms .rs-cap{position:absolute;left:0;right:0;bottom:0;padding:clamp(22px,3.5vw,46px) clamp(20px,4vw,56px);background:linear-gradient(0deg,rgba(12,10,6,.74),rgba(12,10,6,.1) 60%,transparent);color:#f7f1e6;display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex-wrap:wrap}#iwrooms .rs-cap .idx{font-size:10.5px;letter-spacing:.3em;color:#F5B070;font-weight:600;margin-bottom:9px}#iwrooms .rs-cap h3{font-family:'Cormorant Garamond',serif;font-weight:500;font-size:clamp(26px,3.4vw,50px);margin:0;line-height:1}#iwrooms .rs-cap .specs{margin-top:10px;font-size:12px;letter-spacing:.05em;color:#dccfb6}#iwrooms .rs-cap .right{text-align:right;display:flex;flex-direction:column;align-items:flex-end;gap:11px}#iwrooms .rs-cap .price{font-family:'Cormorant Garamond',serif;font-weight:500;font-size:clamp(22px,2.2vw,32px);line-height:1}#iwrooms .rs-cap .price small{display:block;font-family:'Hanken Grotesk',sans-serif;font-size:9.5px;letter-spacing:.2em;color:#dccfb6;text-transform:uppercase;margin-top:4px}#iwrooms .rs-cap .view{font-size:10.5px;letter-spacing:.16em;text-transform:uppercase;color:#fff;text-decoration:none;border-bottom:1px solid rgba(255,255,255,.55);padding-bottom:3px;transition:border-color .25s,color .25s}#iwrooms .rs-cap .view:hover{color:#F5B070;border-color:#F5B070}#iwrooms .rs-foot{position:relative;z-index:1;background:#faf9f6;text-align:center;padding:clamp(34px,6vh,68px) 16px clamp(44px,8vh,100px)}#iwrooms .rs-foot a{display:inline-flex;gap:10px;align-items:center;font-weight:600;font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#2b2517;text-decoration:none;border-bottom:1px solid rgba(43,37,23,.4);padding-bottom:5px;transition:gap .25s,color .25s,border-color .25s}#iwrooms .rs-foot a:hover{gap:16px;color:#F5700A;border-color:#F5700A}@media (max-width:760px){#iwrooms{--rsHeadH:84px;--gap:22px}#iwrooms .rs-cap{flex-direction:column;align-items:flex-start;padding:22px}#iwrooms .rs-cap .right{text-align:left;align-items:flex-start}}@media (prefers-reduced-motion:reduce){#iwrooms .rs-panel{position:relative;top:auto;height:72vh;margin-bottom:14px}#iwrooms .rs-card>img{transform:none}}section[data-ivy-station=\"dining\"]{display:none !important}[class*=\"z-[9998]\"]{display:none !important}#iwbp{position:relative;height:320vh;background:#21261d;color:#f3ecdb;font-family:'Hanken Grotesk',system-ui,sans-serif}#iwbp .bp-stage{position:sticky;top:0;height:100vh;height:100svh;overflow:hidden}#iwbp .bp-slide{position:absolute;inset:0;z-index:4;will-change:opacity}#iwbp .bp-slide .s{position:absolute;inset:0;opacity:0;transition:opacity 1.3s ease}#iwbp .bp-slide .s.on{opacity:1}#iwbp .bp-slide .s img{width:100%;height:100%;object-fit:cover;display:block}#iwbp .bp-slidescrim{position:absolute;inset:0;z-index:5;pointer-events:none;background:linear-gradient(180deg,rgba(10,8,5,.30),rgba(10,8,5,.16) 42%,rgba(10,8,5,.66))}#iwbp .bp-collage{position:absolute;inset:0;z-index:3}#iwbp .bp-img{position:absolute;overflow:hidden;border-radius:3px;background:#0c0c0c;box-shadow:0 26px 56px rgba(0,0,0,.5);opacity:0;will-change:transform,opacity}#iwbp .bp-img img{width:100%;height:100%;object-fit:cover;display:block}#iwbp .bp-img .tag{position:absolute;left:0;right:0;bottom:0;padding:18px 12px 9px;background:linear-gradient(0deg,rgba(10,8,5,.82),transparent);font-size:10px;letter-spacing:.14em;text-transform:uppercase;color:#fbe9cf;font-weight:600}#iwbp .bp-img .tag b{color:#F59A4A}#iwbp .bp-eyebrow{position:absolute;top:7%;left:0;right:0;text-align:center;z-index:7;font-size:11px;letter-spacing:.34em;text-indent:.34em;color:#F5700A;font-weight:600;text-transform:uppercase}#iwbp .bp-head{position:absolute;left:0;right:0;top:50%;transform:translateY(-50%);text-align:center;z-index:6;font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-style:italic;color:#f7f1e2;pointer-events:none;font-size:clamp(54px,12vw,216px);line-height:.96;letter-spacing:.018em;text-shadow:0 8px 50px rgba(0,0,0,.55);opacity:0;transition:opacity 1.1s ease}#iwbp.bpin .bp-head{opacity:1}#iwbp .bp-head .orange{color:#f7f1e2}#iwbp .bp-cue{position:absolute;left:0;right:0;bottom:24px;text-align:center;z-index:8;font-size:10.5px;letter-spacing:.32em;text-indent:.32em;color:#f3ecdb;font-weight:600}#iwbp .bp-cue .bar{display:block;width:1px;height:30px;margin:8px auto 0;background:rgba(243,236,219,.5)}#iwbp .bp-cta{position:absolute;left:0;right:0;bottom:6.5vh;text-align:center;z-index:8;opacity:0}#iwbp .bp-cta a{display:inline-flex;gap:10px;align-items:center;font-weight:600;font-size:12px;letter-spacing:.18em;text-transform:uppercase;color:#f3ecdb;text-decoration:none;border-bottom:1px solid rgba(243,236,219,.45);padding-bottom:5px;transition:gap .25s,color .25s,border-color .25s}#iwbp .bp-cta a:hover{gap:16px;color:#F5700A;border-color:#F5700A}@media (max-width:820px){#iwbp{height:auto}#iwbp .bp-stage{position:relative;height:auto;display:flex;flex-direction:column;align-items:center;padding:12vh 6vw 9vh;overflow:visible}#iwbp .bp-slide,#iwbp .bp-slidescrim,#iwbp .bp-cue{display:none!important}#iwbp .bp-eyebrow{position:relative;top:auto;left:auto;right:auto;order:1;margin:0 0 12px;text-align:center}#iwbp .bp-head{position:relative;left:auto;right:auto;top:auto;transform:none;order:2;margin:0 0 6vh;text-align:center;font-size:clamp(42px,15vw,88px);line-height:.95;opacity:0;transition:opacity 1s ease}#iwbp.bpin .bp-head{opacity:1}#iwbp .bp-collage{position:relative;inset:auto;order:3;display:flex;flex-direction:column;width:100%}#iwbp .bp-img{position:relative!important;inset:auto!important;top:auto!important;left:auto!important;right:auto!important;bottom:auto!important;display:block;width:80%!important;height:clamp(205px,52vw,300px)!important;margin:0 0 -7vh!important;border-radius:9px;box-shadow:0 22px 46px rgba(0,0,0,.5);filter:none!important;opacity:0;transform:translateY(26px);transition:opacity .85s ease,transform .85s ease}#iwbp.bpin .bp-img{opacity:1;transform:none}#iwbp .bp-img:nth-child(2),#iwbp .bp-img:nth-child(3),#iwbp .bp-img:nth-child(4),#iwbp .bp-img:nth-child(5),#iwbp .bp-img:nth-child(7),#iwbp .bp-img:nth-child(8),#iwbp .bp-img:nth-child(9),#iwbp .bp-img:nth-child(10),#iwbp .bp-img:nth-child(11){display:none!important}#iwbp .bp-img:nth-child(1){align-self:flex-start;margin-left:1%!important}#iwbp .bp-img:nth-child(6){align-self:flex-end;margin-right:1%!important;width:74%!important;transition-delay:.12s}#iwbp .bp-img:nth-child(12){align-self:flex-start;margin-left:5%!important;margin-bottom:0!important;width:76%!important;transition-delay:.24s}#iwbp .bp-img .tag{font-size:11px;padding:22px 12px 10px}#iwbp .bp-cta{position:relative;left:auto;right:auto;bottom:auto;order:4;margin:7vh 0 0;opacity:1!important}}@media (prefers-reduced-motion:reduce){#iwbp{height:auto}#iwbp .bp-stage{position:relative;height:auto}#iwbp .bp-img{opacity:1!important;transform:none!important}#iwbp .bp-head{opacity:1!important}#iwbp .bp-slide{opacity:0!important}}section.container-x.py-14{display:none !important}#iwex{position:relative;background:#faf9f6;color:#2b2517;font-family:'Hanken Grotesk',system-ui,sans-serif;padding:clamp(60px,9vh,130px) 0 clamp(50px,8vh,110px);overflow:hidden}#iwex .ex-wrap{max-width:1240px;margin:0 auto;padding:0 clamp(22px,5vw,72px)}#iwex .ex-top{display:flex;align-items:flex-end;justify-content:space-between;gap:24px;flex-wrap:wrap;margin-bottom:clamp(28px,5vh,56px)}#iwex .ex-eyebrow{font-size:11px;letter-spacing:.32em;text-indent:.32em;color:#F5700A;font-weight:600;text-transform:uppercase;margin-bottom:14px}#iwex .ex-h{font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-style:italic;font-size:clamp(46px,9vw,130px);line-height:.9;letter-spacing:.005em;color:#F5700A;margin:0}#iwex .ex-viewall{display:inline-flex;align-items:center;gap:10px;text-decoration:none;font-weight:600;font-size:11.5px;letter-spacing:.16em;text-transform:uppercase;color:#2b2517;border:1px solid rgba(43,37,23,.25);border-radius:999px;padding:12px 20px;transition:background .25s,color .25s,border-color .25s}#iwex .ex-viewall:hover{background:#F5700A;color:#fff;border-color:#F5700A}#iwex .ex-list{border-top:1px solid rgba(43,37,23,.16)}#iwex .ex-row{position:relative;display:flex;align-items:center;justify-content:space-between;gap:20px;padding:clamp(22px,3.4vh,40px) clamp(8px,2vw,28px);border-bottom:1px solid rgba(43,37,23,.16);text-decoration:none;color:inherit;cursor:pointer;transition:background .35s ease,padding-left .35s ease;opacity:0;transform:translateY(24px)}#iwex .ex-row.in{opacity:1;transform:none;transition:background .35s ease,padding-left .35s ease,opacity .7s ease,transform .7s ease}#iwex .ex-row:hover{background:rgba(245,112,10,.06);padding-left:clamp(18px,3vw,44px)}#iwex .ex-l{display:flex;align-items:baseline;gap:clamp(14px,2vw,30px);min-width:0}#iwex .ex-num{font-family:'Cormorant Garamond',serif;font-size:14px;color:#b3a585;font-weight:500;width:30px;flex:0 0 auto}#iwex .ex-main{min-width:0}#iwex .ex-title{font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:clamp(24px,3.6vw,52px);line-height:1.02;margin:0 0 10px;color:#2b2517;transition:color .3s}#iwex .ex-row:hover .ex-title{color:#F5700A}#iwex .ex-tags{display:flex;gap:8px;flex-wrap:wrap}#iwex .ex-tags span{font-size:10px;letter-spacing:.16em;text-transform:uppercase;font-weight:600;color:#6b6147;border:1px solid rgba(43,37,23,.2);border-radius:999px;padding:5px 11px}#iwex .ex-arrow{flex:0 0 auto;width:48px;height:48px;border-radius:50%;border:1px solid rgba(43,37,23,.25);display:flex;align-items:center;justify-content:center;color:#2b2517;transition:background .3s,color .3s,border-color .3s,transform .3s}#iwex .ex-row:hover .ex-arrow{background:#F5700A;color:#fff;border-color:#F5700A;transform:rotate(45deg)}#iwex .ex-arrow svg{width:16px;height:16px}#iwex .ex-foot{max-width:1240px;margin:clamp(26px,4vh,48px) auto 0;padding:0 clamp(22px,5vw,72px);font-size:13px;color:#6b6147}#iwex-preview{position:fixed;top:0;left:0;width:clamp(220px,22vw,300px);height:clamp(270px,27vw,370px);border-radius:8px;overflow:hidden;pointer-events:none;z-index:60;opacity:0;transform:translate(-50%,-50%) scale(.85);transition:opacity .35s ease,transform .35s ease;box-shadow:0 30px 70px rgba(20,15,8,.34);will-change:transform,opacity}#iwex-preview.on{opacity:1;transform:translate(-50%,-50%) scale(1)}#iwex-preview img{width:100%;height:100%;object-fit:cover;display:block}#iwex-preview .vb{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);background:#F5700A;color:#fff;font-size:10px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;padding:9px 16px;border-radius:999px}@media (max-width:760px){#iwex .ex-title{font-size:26px}#iwex-preview{width:206px;height:256px}}@media (prefers-reduced-motion: reduce){#iwex .ex-row{opacity:1;transform:none}}section[data-ivy-station=\"reviews\"]{display:none !important}section[data-ivy-station=\"location\"],section[data-ivy-station=\"cta\"]{display:none !important}#iwrv{position:relative;background:#dde4d5;color:#2b2517;font-family:'Hanken Grotesk',system-ui,sans-serif;padding:clamp(60px,9vh,120px) 0 clamp(60px,10vh,130px);overflow:hidden}#iwrv .rv-head{text-align:center;margin:0 auto clamp(34px,5vh,60px);max-width:1100px;padding:0 24px}#iwrv .rv-eyebrow{font-size:11px;letter-spacing:.32em;text-indent:.32em;color:#5f7048;font-weight:600;text-transform:uppercase;margin-bottom:15px}#iwrv .rv-head h2{font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:clamp(30px,5.2vw,72px);line-height:1.0;letter-spacing:.01em;margin:0 0 15px;color:#26301d}#iwrv .rv-meta{display:inline-flex;align-items:center;gap:13px;flex-wrap:wrap;justify-content:center;font-size:13px;color:#43503a}#iwrv .rv-meta b{color:#26301d}#iwrv .rv-meta .dot{width:4px;height:4px;border-radius:50%;background:#9aa88a}#iwrv .rv-meta a{color:#26301d;text-decoration:none;border-bottom:1px solid rgba(38,48,29,.35);padding-bottom:2px}#iwrv .rv-meta a:hover{color:#F5700A;border-color:#F5700A}#iwrv .rv-rows{display:flex;flex-direction:column;gap:clamp(14px,1.8vw,22px)}#iwrv .rv-row{overflow:hidden;width:100%;-webkit-mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)}#iwrv .rv-track{display:flex;gap:clamp(14px,1.4vw,20px);width:max-content;will-change:transform}#iwrv .rv-row.ltr .rv-track{animation:rvMarqL var(--dur,46s) linear infinite}#iwrv .rv-row.rtl .rv-track{animation:rvMarqR var(--dur,46s) linear infinite}#iwrv .rv-row:hover .rv-track{animation-play-state:paused}@keyframes rvMarqL{from{transform:translateX(0)}to{transform:translateX(-50%)}}@keyframes rvMarqR{from{transform:translateX(-50%)}to{transform:translateX(0)}}#iwrv .rv-card{flex:0 0 auto;width:clamp(258px,24vw,340px);border-radius:20px;padding:18px 19px 16px;background:var(--bg,#f4eddd);color:var(--fg,#2b2517);box-shadow:0 14px 32px rgba(30,40,22,.12)}#iwrv .rv-card .rv-q{font-size:13px;line-height:1.55;margin:0 0 14px;opacity:.92}#iwrv .rv-card.short .rv-q{font-family:'Cormorant Garamond',serif;font-style:italic;font-size:clamp(16px,1.4vw,20px);line-height:1.3;opacity:1}#iwrv .rv-who{display:flex;align-items:center;gap:10px}#iwrv .rv-av{flex:0 0 auto;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:11.5px;background:var(--av,rgba(20,15,8,.12));color:var(--avc,#2b2517)}#iwrv .rv-who .nm{font-weight:600;font-size:12.5px;line-height:1.2}#iwrv .rv-who .mt{font-size:10.5px;opacity:.7;line-height:1.3;margin-top:2px}#iwrv .rv-card.coral{--bg:#F5700A;--fg:#fff;--av:rgba(255,255,255,.22);--avc:#fff}#iwrv .rv-card.sage{--bg:#cddcb9;--fg:#26301d;--av:rgba(38,48,29,.14);--avc:#26301d}#iwrv .rv-card.cream{--bg:#f4eddd}#iwrv .rv-card.sand{--bg:#e7e0cf}#iwrv .rv-card.blush{--bg:#f3ddd0}@media (prefers-reduced-motion:reduce){#iwrv .rv-track{animation:none!important}}#iwend{position:relative;background:#faf9f6;color:#2b2517;font-family:'Hanken Grotesk',system-ui,sans-serif}#iwend .ie-rip{position:absolute;left:0;right:0;z-index:4;line-height:0;pointer-events:none;height:clamp(26px,3vw,48px)}#iwend .ie-rip svg{display:block;width:100%;height:100%;filter:drop-shadow(0 3px 3px rgba(0,0,0,.16))}#iwend .ie-rip.top{top:0}#iwend .ie-loc{position:relative;overflow:hidden;padding:clamp(74px,12vh,160px) 0 clamp(56px,9vh,120px)}#iwend .ie-wrap{position:relative;z-index:1;max-width:1240px;margin:0 auto;padding:0 clamp(22px,5vw,72px)}#iwend .ie-eyebrow{font-size:11px;letter-spacing:.32em;text-indent:.32em;color:#F5700A;font-weight:600;text-transform:uppercase;margin-bottom:clamp(22px,4vh,40px)}#iwend .ie-locgrid{display:grid;grid-template-columns:1fr .8fr;gap:clamp(30px,5vw,72px);align-items:center}#iwend .ie-head{font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:clamp(31px,4.4vw,64px);line-height:1.04;letter-spacing:-.01em;margin:0 0 22px}#iwend .ie-body p{font-size:clamp(14px,1.05vw,16px);line-height:1.7;color:#5d5440;margin:0 0 16px;max-width:46ch}#iwend .ie-facts{display:grid;grid-template-columns:1fr 1fr;gap:18px 22px;margin-top:24px}#iwend .ie-fact .t{font-size:10px;letter-spacing:.2em;text-transform:uppercase;color:#F5700A;font-weight:700;margin-bottom:6px}#iwend .ie-fact .v{font-family:'Cormorant Garamond',serif;font-weight:500;font-size:clamp(19px,1.9vw,26px);color:#2b2517;line-height:1.05}#iwend .ie-fact .s{font-size:12px;color:#7a6c4c;margin-top:3px}#iwend .ie-mapcard{position:relative;width:100%;aspect-ratio:4/5;border-radius:16px;overflow:hidden;background:#2f6f5e;box-shadow:0 30px 70px rgba(20,15,8,.28);ring:1px}#iwend .ie-mapcard svg{position:absolute;inset:0;width:100%;height:100%;display:block}#iwend .ie-mapcard .mtag{position:absolute;left:14px;top:14px;z-index:2;background:rgba(250,249,246,.9);color:#2b2517;font-size:10px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;padding:6px 11px;border-radius:999px}#iwend .ie-statement{font-family:'Cormorant Garamond',Georgia,serif;font-weight:500;font-size:clamp(26px,4.4vw,62px);line-height:1.08;text-align:center;margin:clamp(46px,8vh,104px) auto 0;max-width:20ch;color:#2b2517}#iwend .ie-statement em{font-style:italic;color:#F5700A}#iwend .ie-stay{position:relative;background:#F5700A;padding-bottom:clamp(12px,2vh,26px)}#iwend .ie-cta{position:relative;overflow:hidden;min-height:100vh;display:flex;align-items:center}#iwend .ie-cta .bgimg{position:absolute;inset:0;z-index:0}#iwend .ie-cta .bgimg img{width:100%;height:100%;object-fit:cover;object-position:50% 0%}#iwend .ie-cta::after{content:'';position:absolute;inset:0;z-index:1;background:linear-gradient(90deg,rgba(10,8,5,.62),rgba(10,8,5,.08))}#iwend .ie-cta{justify-content:center;text-align:center}#iwend .ie-ctainner{position:relative;z-index:2;max-width:600px;margin:0 auto;padding:0 24px;color:#fbf7ee}#iwend .ie-ctainner .eye{font-size:11px;letter-spacing:.32em;text-indent:.32em;text-transform:uppercase;color:#F5B070;font-weight:600;margin-bottom:16px}#iwend .ie-ctainner h3{font-family:'Cormorant Garamond',serif;font-weight:500;font-size:clamp(40px,6vw,94px);line-height:.98;margin:0 0 16px;color:#fbf7ee;text-shadow:0 4px 30px rgba(0,0,0,.5)}#iwend .ie-ctainner .sub{font-size:clamp(14px,1.1vw,16.5px);line-height:1.6;color:rgba(251,247,238,.86);max-width:42ch;margin:0 auto}#iwend .ie-btns{display:flex;gap:14px;justify-content:center;flex-wrap:wrap;margin-top:30px}#iwend .ie-btn{display:inline-flex;align-items:center;justify-content:center;font-weight:600;font-size:12px;letter-spacing:.16em;text-transform:uppercase;text-decoration:none;border-radius:999px;padding:15px 30px;transition:transform .25s,background .25s,color .25s,border-color .25s}#iwend .ie-btn.primary{background:#F5700A;color:#fff;border:1px solid #F5700A}#iwend .ie-btn.primary:hover{background:#e3650a;transform:translateY(-2px)}#iwend .ie-btn.ghost{background:rgba(255,255,255,.06);color:#fbf7ee;border:1px solid rgba(255,255,255,.55)}#iwend .ie-btn.ghost:hover{background:#fbf7ee;color:#16140f;transform:translateY(-2px)}#iwend .ie-footzone{position:relative;z-index:2;height:135vh}#iwend .ie-footwrap{position:sticky;top:0;width:100%;height:100vh;background:#F5700A;overflow:hidden}#iwend .ie-footcard{position:relative;width:100%;height:100%;overflow:hidden;border-radius:0;transform-origin:50% 50%;will-change:transform,border-radius}#iwend .ie-foot{position:relative;min-height:100vh;display:flex;flex-direction:column;justify-content:flex-end;overflow:hidden;background:#16140f}#iwend .ie-foot .bgimg{position:absolute;inset:0;z-index:0}#iwend .ie-foot .bgimg img{width:100%;height:100%;object-fit:cover;object-position:50% 100%}#iwend .ie-foot::after{content:'';position:absolute;inset:0;z-index:1;background:linear-gradient(180deg,rgba(12,10,8,.30),rgba(12,10,8,.78) 62%,rgba(12,10,8,.92))}#iwend .ie-foot .cols{position:relative;z-index:2;max-width:1240px;width:100%;margin:0 auto;padding:0 clamp(22px,5vw,72px);display:grid;grid-template-columns:1.2fr 1fr 1fr 1.2fr;gap:30px}#iwend .ie-foot .brand{font-family:'Cormorant Garamond',serif;font-size:22px;letter-spacing:.22em;color:#fbf7ee;margin-bottom:13px}#iwend .ie-foot h4{font-size:10.5px;letter-spacing:.22em;text-transform:uppercase;color:#F5B070;font-weight:700;margin:0 0 11px}#iwend .ie-foot a{color:#e7ddca;text-decoration:none;font-size:13.5px;line-height:1.95;display:block;transition:color .2s}#iwend .ie-foot a:hover{color:#F5700A}#iwend .ie-foot .legal{position:relative;z-index:2;max-width:1240px;width:100%;margin:clamp(26px,4vh,46px) auto 0;padding:16px clamp(22px,5vw,72px) 0;border-top:1px solid rgba(251,247,238,.14);display:flex;justify-content:space-between;flex-wrap:wrap;gap:12px;font-size:11.5px;color:#cdbfa8}#iwend .ie-foot .legal a{display:inline;color:#cdbfa8;margin-left:16px;font-size:11.5px}#iwend .ie-foot .ie-word{position:relative;z-index:2;margin-top:clamp(14px,2.4vh,30px);text-align:center;line-height:.72;overflow:hidden}#iwend .ie-foot .ie-word span{font-family:'Cormorant Garamond',Georgia,serif;font-weight:600;font-size:clamp(56px,16.5vw,280px);letter-spacing:.02em;color:#F5700A;white-space:nowrap;display:block;transform:translateY(14%)}#iwend .rev{opacity:0;transform:translateY(26px);transition:opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)}#iwend .in .rev{opacity:1;transform:none}@media (max-width:860px){#iwend .ie-locgrid{grid-template-columns:1fr;gap:30px}#iwend .ie-mapcard{max-width:380px;margin:0 auto}#iwend .ie-statement{font-size:clamp(25px,7vw,40px)}#iwend .ie-cta{min-height:78vh;padding:0;display:flex;align-items:center}#iwend .ie-cta .bgimg img{position:absolute;left:50%;top:0;transform:translateX(-50%);width:auto;height:200%;max-width:none}#iwend .ie-foot .bgimg img{position:absolute;left:50%;bottom:0;transform:translateX(-50%);width:auto;height:200%;max-width:none}#iwend .ie-cta::after{background:linear-gradient(180deg,rgba(10,8,5,.42),rgba(10,8,5,.66))}#iwend .ie-cta .form{margin:0 auto}#iwend .ie-footzone{height:auto}#iwend .ie-footwrap{position:relative;height:auto;min-height:0;background:#F5700A;padding:0;transition:padding .4s ease}#iwend .ie-footcard{height:auto;border-radius:0;overflow:hidden;transition:border-radius .4s ease}#iwend.ie-cutnow .ie-footwrap{padding:12px}#iwend.ie-cutnow .ie-footcard{border-radius:16px}#iwend .ie-foot{min-height:82vh;padding-top:14vh}#iwend .ie-foot .cols{grid-template-columns:1fr 1fr;gap:24px 18px}#iwend .ie-foot .brandcol{grid-column:1/-1}#iwend .ie-foot .legal{flex-direction:column;align-items:flex-start}#iwend .ie-foot .legal a{margin:0 16px 0 0}#iwend .ie-foot .ie-word span{font-size:23vw}}";H.appendChild(s);}}catch(e){}})();
/* iw-tear dividers (static torn paper) */
(function(){try{if(!document.getElementById("iw-wave-css")){var st=document.createElement("style");st.id="iw-wave-css";st.textContent='.iw-tear{position:absolute;left:0;top:0;right:0;height:clamp(34px,4.6vw,66px);overflow:visible;line-height:0;z-index:6;pointer-events:none}.iw-tear svg{position:absolute;left:0;top:0;width:100%;height:100%;display:block;filter:drop-shadow(0 6px 6px rgba(35,25,12,.22))}';(document.head||document.documentElement).appendChild(st);}var PP='M0,45.1L19.2,47.7L34.6,45.7L50.6,46.5L60.6,49.6L70.0,50.0L86.2,34.9L101.0,38.0L112.7,37.1L126.5,44.2L142.6,41.8L156.6,40.9L176.6,47.5L189.0,42.6L198.8,47.6L217.1,43.8L235.4,39.3L254.4,42.7L267.8,39.0L285.4,38.3L305.0,43.4L315.1,43.7L326.0,49.8L337.1,55.8L347.4,51.1L359.4,56.6L371.7,55.6L385.1,54.0L395.2,53.7L407.0,49.6L419.3,42.4L431.0,43.1L444.9,43.9L460.3,41.1L471.0,40.6L482.7,33.5L502.0,33.0L520.7,36.0L530.9,30.2L542.5,35.1L560.6,31.9L571.5,26.0L586.7,30.7L598.7,30.2L607.9,24.0L617.6,23.2L632.9,23.8L651.7,34.1L668.3,24.2L677.5,38.0L697.1,32.5L711.4,39.7L731.4,33.3L748.5,39.3L765.2,36.6L778.1,34.6L796.7,31.4L815.2,33.3L828.4,34.1L838.3,35.3L856.9,37.1L874.0,35.9L892.2,30.7L901.6,34.7L913.1,34.7L928.9,35.7L938.0,29.9L949.2,29.0L965.5,32.9L978.1,37.0L991.8,41.3L1010.5,42.0L1023.0,42.6L1041.2,52.3L1060.6,47.8L1072.7,48.4L1088.5,50.4L1106.8,53.8L1116.6,44.8L1126.0,50.7L1138.4,44.1L1152.5,44.8L1164.1,48.9L1178.0,51.3L1195.9,54.3L1200.0,47.4L1200,0 L0,0 Z',DK='M0,48.7L19.2,51.3L34.6,49.3L50.6,50.1L60.6,53.2L70.0,53.6L86.2,38.5L101.0,41.6L112.7,40.7L126.5,47.8L142.6,45.4L156.6,44.5L176.6,51.1L189.0,46.2L198.8,51.2L217.1,47.4L235.4,42.9L254.4,46.3L267.8,42.6L285.4,41.9L305.0,47.0L315.1,47.3L326.0,53.4L337.1,59.4L347.4,54.7L359.4,60.2L371.7,59.2L385.1,57.6L395.2,57.3L407.0,53.2L419.3,46.0L431.0,46.7L444.9,47.5L460.3,44.7L471.0,44.2L482.7,37.1L502.0,36.6L520.7,39.6L530.9,33.8L542.5,38.7L560.6,35.5L571.5,29.6L586.7,34.3L598.7,33.8L607.9,27.6L617.6,26.8L632.9,27.4L651.7,37.7L668.3,27.8L677.5,41.6L697.1,36.1L711.4,43.3L731.4,36.9L748.5,42.9L765.2,40.2L778.1,38.2L796.7,35.0L815.2,36.9L828.4,37.7L838.3,38.9L856.9,40.7L874.0,39.5L892.2,34.3L901.6,38.3L913.1,38.3L928.9,39.3L938.0,33.5L949.2,32.6L965.5,36.5L978.1,40.6L991.8,44.9L1010.5,45.6L1023.0,46.2L1041.2,55.9L1060.6,51.4L1072.7,52.0L1088.5,54.0L1106.8,57.4L1116.6,48.4L1126.0,54.3L1138.4,47.7L1152.5,48.4L1164.1,52.5L1178.0,54.9L1195.9,57.9L1200.0,51.0L1200,0 L0,0 Z';window.__iwWave=function(paper,lo,_b,deckle){var rid="t"+Math.floor(Math.random()*1e6);return '<div class="iw-tear">'+'<svg viewBox="0 0 1200 70" preserveAspectRatio="none">'+'<defs><filter id="'+rid+'" x="-2%" y="-2%" width="104%" height="120%">'+'<feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" result="n"/>'+'<feColorMatrix in="n" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 -0.09 0.09" result="g"/>'+'<feComposite in="g" in2="SourceAlpha" operator="in" result="gg"/>'+'<feMerge><feMergeNode in="SourceGraphic"/><feMergeNode in="gg"/></feMerge>'+'</filter></defs>'+'<path d="'+DK+'" fill="'+deckle+'"/>'+'<path d="'+PP+'" fill="'+paper+'" filter="url(#'+rid+')"/>'+'</svg></div>';};}catch(e){}})();


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
    var mob = vw < 760;
    var ts = easeInOut(clamp(p / 0.58, 0, 1));
    var Hs = vh * (mob ? 0.40 : 0.54), Ws = Hs * 0.82;  // small (portrait) target
    if (Ws > vw * (mob ? 0.78 : 0.58)) { Ws = vw * (mob ? 0.78 : 0.58); Hs = Ws / 0.82; }
    var sx = (vw - Ws) / 2, sy = vh * (mob ? 0.085 : 0.07);   // upper-centered
    var L = lerp(0, sx, ts), T = lerp(0, sy, ts);
    var W = lerp(vw, Ws, ts), H = lerp(vh, Hs, ts);
    var R = lerp(0, 16, ts);
    frame.style.left = L + "px"; frame.style.top = T + "px";
    frame.style.width = W + "px"; frame.style.height = H + "px";
    frame.style.borderRadius = R + "px";

    // ---- wordmark + location reveal (frame overlaps the top of the word, inspo-style) ----
    var wt = easeOut(clamp((p - 0.16) / 0.42, 0, 1));
    word.style.opacity = wt;
    word.style.top = (mob ? (T + H) : vh * 0.62) + "px";   // mobile: wordmark straddles the bottom of the video (overlap)
    word.style.transform = "translateY(" + (-50 + (1 - wt) * 6) + "%)";
    loc.style.opacity = clamp((p - 0.34) / 0.30, 0, 1);
    loc.style.top = (vh * (mob ? 0.64 : 0.85)) + "px";

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
        '<div class="iwos-rule rv d1"></div>' +
        '<h2 class="iwos-head rv d1"></h2>' +
        '<span class="iwos-eyebrow rv d2"></span>' +
        '<p class="iwos-statement"></p>' +
        '<p class="iwos-sub rv d4"></p>' +
        '<a class="iwos-link rv d5"><span class="lbl">Read our story</span><span class="arr">→</span></a>' +
      '</div>';

    s.querySelector(".iwos-head").innerHTML = 'A Boholano <span class="o">welcome</span>';
    s.querySelector(".iwos-eyebrow").textContent = EYEBROW;
    s.querySelector(".iwos-sub").textContent = SUB;
    s.querySelector(".iwos-link").setAttribute("href", LINK_HREF);

    // build the statement as individual words for the scroll-linked fade
    stmtEl = s.querySelector(".iwos-statement");
    STMT.split(" ").forEach(function (wd) {
      var sp = document.createElement("span"); sp.className = (wd==="Boholano"||wd==="soul.")?"w o":"w"; sp.textContent = wd;
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
      var im=a.querySelector(".thumb img"); im.src=cd.img; im.alt=cd.t; im.loading="lazy"; im.decoding="async";
      cardWrap.appendChild(a);
    });
    stage.appendChild(bg); stage.appendChild(scrim); stage.appendChild(head); stage.appendChild(cardWrap); stage.appendChild(eyebrow);
    wrap.appendChild(stage);
    parentRef.insertBefore(wrap, beforeRef);
    built=true; update(); setupShow(); return true;
  }
  function setupShow(){
    try{
      var mq=window.matchMedia("(max-width:880px)");
      var cardsEl=document.querySelector("#iwsop .sop-cards"); if(!cardsEl) return;
      var cards=[].slice.call(cardsEl.querySelectorAll(".sop-card")); if(cards.length<2) return;
      var dotsEl=document.querySelector("#iwsop .sop-dots");
      if(!dotsEl){ dotsEl=document.createElement("div"); dotsEl.className="sop-dots";
        cardsEl.parentNode.insertBefore(dotsEl, cardsEl.nextSibling);
        cards.forEach(function(_,i){ var bd=document.createElement("button"); bd.type="button"; bd.setAttribute("aria-label","Slide "+(i+1)); bd.addEventListener("click",function(){ go(i,true); }); dotsEl.appendChild(bd); }); }
      var dots=[].slice.call(dotsEl.querySelectorAll("button"));
      var idx=0, timer=0;
      function paint(){ cards.forEach(function(c,i){ c.classList.toggle("on", i===idx); }); dots.forEach(function(d,i){ d.classList.toggle("on", i===idx); }); }
      function go(i,manual){ idx=(i+cards.length)%cards.length; paint(); if(manual){ stop(); start(); } }
      function start(){ if(mq.matches && !timer) timer=setInterval(function(){ go(idx+1); },4200); }
      function stop(){ if(timer){ clearInterval(timer); timer=0; } }
      var sx=0;
      cardsEl.addEventListener("touchstart",function(e){ sx=e.touches[0].clientX; stop(); },{passive:true});
      cardsEl.addEventListener("touchend",function(e){ var dx=e.changedTouches[0].clientX-sx; if(Math.abs(dx)>40){ go(idx+(dx<0?1:-1),true); } else { start(); } },{passive:true});
      function sync(){ if(mq.matches){ paint(); start(); } else { stop(); cards.forEach(function(c){ c.classList.remove("on"); }); dots.forEach(function(d){ d.classList.remove("on"); }); } }
      sync();
      if(mq.addEventListener) mq.addEventListener("change",sync); else if(mq.addListener) mq.addListener(sync);
    }catch(e){}
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
    linesWrap.style.transform="translateY("+lerp(vh*0.26,-vh*0.26,p).toFixed(1)+"px)";
    // sharp at centre, blurred + dimmed away from it (no reveal)
    var cy=vh/2;
    for (var i=0;i<lineEls.length;i++){
      var r=lineEls[i].getBoundingClientRect(); var d=Math.abs((r.top+r.height/2)-cy);
      var blur=clamp(d/(vh*0.22),0,1)*9;
      var op=clamp(1-d/(vh*0.74),0.30,1);
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
  var built=false, sectionEl=null, headEl=null, deckEl=null, cardEls=[], raf=0;
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
        '<img src="'+r.img+'" loading="lazy" decoding="async" alt="'+r.n+' — The Ivywall, Panglao">'+
        '<div class="rs-cap"><div class="left"><div class="idx">0'+(i+1)+' / 0'+n+'</div>'+
        '<h3>'+r.n+'</h3><div class="specs">'+r.s+'</div></div>'+
        '<div class="right"><div class="price">'+r.p+'<small>From / night</small></div>'+
        '<a class="view" href="'+ROOMS_HREF+'">View details →</a></div></div></div></div>';
    }).join("");
    s.innerHTML='<div class="rs-pin"><div class="rs-head"><div class="eyebrow">'+EYEBROW+'</div><h2>'+HEAD+'</h2></div>'+
      '<div class="rs-deck">'+panels+'</div></div>'+
      '<div class="rs-foot"><a href="'+ROOMS_HREF+'">See all rooms <span>→</span></a></div>';
    parentRef.insertBefore(s, beforeRef);
    sectionEl=s; headEl=s.querySelector(".rs-head"); deckEl=s.querySelector(".rs-deck"); cardEls=[].slice.call(s.querySelectorAll(".rs-card")); built=true; measure();
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
  function rupd(){
    if(!deckEl||!cardEls.length||!sectionEl) return;
    var rsTop=parseFloat(getComputedStyle(sectionEl).getPropertyValue("--rsTop"))||64;
    var panelH=cardEls[0].parentNode.offsetHeight; if(!panelH) return;
    var prog=(rsTop - deckEl.getBoundingClientRect().top)/panelH;
    for(var i=0;i<cardEls.length;i++){
      var rec=prog-i; if(rec<0)rec=0; if(rec>3)rec=3;
      cardEls[i].style.transform="translateY("+(-rec*24).toFixed(1)+"px) scale("+(1-rec*0.07).toFixed(3)+")";
      cardEls[i].style.filter = rec>0.02 ? "brightness("+(1-rec*0.09).toFixed(3)+")" : "none";
    }
  }
  function ronScroll(){ if(raf) return; raf=requestAnimationFrame(function(){ raf=0; rupd(); }); }
  function enforce(){ if(!document.getElementById("iwrooms")){ built=false; build(); } }
  function init(){ if(!build()){ setTimeout(init,120); return; }
    window.addEventListener("resize", function(){measure(); ronScroll();}, {passive:true});
    window.addEventListener("scroll", ronScroll, {passive:true});
    setTimeout(function(){measure();rupd();},500); setTimeout(function(){measure();rupd();},1300);
    try{ var mo=new MutationObserver(function(){enforce();}); mo.observe(document.querySelector("main")||document.body,{childList:true}); setTimeout(function(){try{mo.disconnect();}catch(e){}},9000);}catch(e){}
  }
  if (document.readyState==="complete") setTimeout(init,350);
  else window.addEventListener("load", function(){ setTimeout(init,350); });
})();

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

  function placePreview(x, y) {
    var vw = window.innerWidth, vh = window.innerHeight;
    if (vw < 760) { preview.style.left = (vw / 2) + "px"; preview.style.top = Math.max(150, Math.min(vh - 150, y - 150)) + "px"; }
    else { preview.style.left = x + "px"; preview.style.top = y + "px"; }
  }
  function wire(s) {
    var rows = [].slice.call(s.querySelectorAll(".ex-row"));
    rows.forEach(function (r) {
      r.addEventListener("mouseenter", function () { pvImg.src = r.getAttribute("data-img"); preview.classList.add("on"); });
      r.addEventListener("mouseleave", function () { preview.classList.remove("on"); });
      var pressTimer = 0, longPressed = false, tsx = 0, tsy = 0;
      r.addEventListener("touchstart", function (e) {
        longPressed = false; var t = e.touches[0]; tsx = t.clientX; tsy = t.clientY;
        pvImg.src = r.getAttribute("data-img"); placePreview(tsx, tsy);
        pressTimer = setTimeout(function () { longPressed = true; preview.classList.add("on"); }, 130);
      }, { passive: true });
      r.addEventListener("touchmove", function (e) {
        var t = e.touches[0];
        if (Math.abs(t.clientX - tsx) > 12 || Math.abs(t.clientY - tsy) > 12) { clearTimeout(pressTimer); if (!longPressed) preview.classList.remove("on"); }
        else if (preview.classList.contains("on")) placePreview(t.clientX, t.clientY);
      }, { passive: true });
      var endTouch = function (e) { clearTimeout(pressTimer); preview.classList.remove("on"); if (longPressed && e.cancelable) e.preventDefault(); };
      r.addEventListener("touchend", endTouch);
      r.addEventListener("touchcancel", function () { clearTimeout(pressTimer); preview.classList.remove("on"); });
      r.addEventListener("click", function (e) { if (longPressed) { e.preventDefault(); longPressed = false; } });
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
    s.innerHTML=(window.__iwWave?window.__iwWave("#faf9f6","#dde4d5","#e7ecdf","#fbfdf8"):"")+'<div class="rv-head"><div class="rv-eyebrow">'+EYEBROW+'</div><h2>'+HEAD+'</h2><div class="rv-meta">'+META+'</div></div><div class="rv-rows">'+rowsHtml+'</div>';
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

/* iw-end-v2 */
(function(){
 "use strict";if(!(location.pathname==="/"||location.pathname==="/index.html"||location.pathname===""))return;
 var built=false;
 var MAPSVG='<svg viewBox="0 0 320 400" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="lm-land" x1="0" x2="1" y1="0" y2="1"><stop offset="0%" stop-color="#d4641a"/><stop offset="100%" stop-color="#9a3f08"/></linearGradient></defs><rect x="0" y="0" width="320" height="400" fill="#2f6f5e"/><g stroke="#ffffff" stroke-opacity="0.12" fill="none"><path d="M0 326 Q160 310 320 326" stroke-width="2"/><path d="M0 352 Q160 336 320 352" stroke-width="2"/></g><path d="M-12 -12 H332 V278 Q280 296 240 282 Q200 268 160 288 Q120 308 82 286 Q44 266 -12 282 Z" fill="url(#lm-land)"/><path d="M332 278 Q280 296 240 282 Q200 268 160 288 Q120 308 82 286 Q44 266 -12 282" fill="none" stroke="#f3ddb8" stroke-width="5" stroke-opacity="0.9" stroke-linecap="round"/><g fill="#ffffff" opacity="0.06"><circle cx="70" cy="70" r="26"/><circle cx="258" cy="90" r="30"/><circle cx="250" cy="200" r="30"/></g><g transform="translate(36,48)" opacity="0.9"><circle r="12" fill="#FBFAF6" opacity="0.85"/><path d="M0 -8 L3 1 L0 8 L-3 1 Z" fill="#0F4C5C"/><text y="-14" font-family="Hanken Grotesk,sans-serif" font-size="7.5" text-anchor="middle" fill="#FBFAF6">N</text></g><path id="lm-route" d="M160 104 Q181 99 187 132 L191 168 Q191 193 172 207 Q150 225 138 245 Q133 252 130 256" fill="none" stroke="#FBFAF6" stroke-width="2.5" stroke-linecap="round" stroke-dasharray="1 7" opacity="0.9"/><g transform="translate(40,150)"><rect x="0" y="0" width="62" height="22" rx="11" fill="#FBFAF6"/><text x="31" y="15" font-family="Hanken Grotesk,sans-serif" font-size="11" font-weight="700" text-anchor="middle" fill="#9a3f08">3.4 km</text></g><g transform="translate(34,178)"><rect x="0" y="0" width="96" height="22" rx="11" fill="#0d1b2a"/><text x="48" y="15" font-family="Hanken Grotesk,sans-serif" font-size="10.5" font-weight="600" text-anchor="middle" fill="#f0c879">&#8776; 10 min by car</text></g><g><g transform="translate(-11,-6)"><rect x="0.5" y="1" width="21" height="10" rx="3.2" fill="#FBFAF6" stroke="#0d1b2a" stroke-opacity="0.25" stroke-width="0.6"/><rect x="3" y="1.5" width="13" height="0.9" rx="0.45" fill="#f5700a"/><rect x="3" y="9.6" width="13" height="0.9" rx="0.45" fill="#f5700a"/><path d="M16.8 1.6 h2.4 a2.3 2.3 0 0 1 2.3 2.3 v4.2 a2.3 2.3 0 0 1 -2.3 2.3 H16.8 Z" fill="#173a44" opacity="0.85"/><rect x="1.4" y="3" width="1.8" height="6" rx="0.7" fill="#173a44" opacity="0.5"/><image href="/bw-plus-logo.png" x="8.2" y="2.9" width="5.6" height="5.6" preserveAspectRatio="xMidYMid meet"/></g><animateMotion dur="5.2s" repeatCount="indefinite" rotate="auto"><mpath href="#lm-route"/></animateMotion></g><g transform="translate(186,266)" opacity="0.92"><circle r="4.5" fill="#f3ddb8" stroke="#FBFAF6" stroke-width="1"/><text x="9" y="3.5" font-family="Hanken Grotesk,sans-serif" font-size="9.5" fill="#FBFAF6">Alona Beach</text></g><g transform="translate(160,104)"><circle r="16" fill="none" stroke="#FBFAF6" stroke-opacity="0.5"><animate attributeName="r" values="16;22;16" dur="2.6s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.5;0;0.5" dur="2.6s" repeatCount="indefinite"/></circle><circle r="13" fill="#FBFAF6"/><g transform="translate(-6,-6) scale(0.5)" fill="#0F4C5C"><path d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L11 19v-5.5z"/></g></g><text x="160" y="80" font-family="Hanken Grotesk,sans-serif" font-size="9.5" font-weight="700" letter-spacing="0.5" text-anchor="middle" fill="#FBFAF6">PANGLAO INTL &#183; TAG</text><g transform="translate(130,258)"><circle cx="0" cy="-12" r="18" fill="none" stroke="#f5700a" stroke-opacity="0.55"><animate attributeName="r" values="18;26;18" dur="2.4s" repeatCount="indefinite"/><animate attributeName="opacity" values="0.55;0;0.55" dur="2.4s" repeatCount="indefinite"/></circle><path d="M0 2 C-9 -8 -9 -20 0 -24 C9 -20 9 -8 0 2 Z" fill="#f5700a" stroke="#FBFAF6" stroke-width="1.5"/><circle cx="0" cy="-14" r="4" fill="#FBFAF6"/></g><text x="116" y="256" font-family="Hanken Grotesk,sans-serif" font-size="12.5" font-weight="700" text-anchor="end" fill="#FBFAF6">The Ivywall</text><text x="116" y="270" font-family="Hanken Grotesk,sans-serif" font-size="9.5" text-anchor="end" fill="#FBFAF6" opacity="0.85">P-5 Danao &#183; Panglao</text></svg>';
 var RIP_SAGE='<svg viewBox="0 0 1200 60" preserveAspectRatio="none"><path fill="#dde4d5" d="M0,0 H1200 V18.8 L1178,16.3 L1156,41.0 L1134,15.2 L1112,30.6 L1090,40.5 L1068,21.1 L1046,44.3 L1024,26.7 L1002,15.5 L980,23.3 L958,17.8 L936,40.1 L914,32.6 L892,25.9 L870,27.9 L848,35.8 L826,24.1 L804,28.5 L782,39.4 L760,21.8 L738,30.8 L716,37.3 L694,55.6 L672,38.2 L650,46.7 L628,38.5 L606,42.0 L584,36.2 L562,32.6 L540,40.9 L518,29.2 L496,15.9 L474,34.7 L452,40.3 L430,26.3 L408,14.7 L386,29.6 L364,38.6 L342,21.9 L320,55.6 L298,31.6 L276,40.2 L254,22.9 L232,25.5 L210,44.6 L188,19.6 L166,21.5 L144,32.9 L122,14.1 L100,25.8 L78,44.5 L56,30.5 L34,55.3 L12,39.0 L0,39.0 Z"/></svg>';
 var RIP_CREAM='<svg viewBox="0 0 1200 60" preserveAspectRatio="none"><path fill="#faf9f6" d="M0,0 H1200 V35.9 L1178,41.2 L1156,21.4 L1134,21.2 L1112,18.2 L1090,20.8 L1068,27.8 L1046,46.2 L1024,18.7 L1002,39.9 L980,40.4 L958,44.4 L936,22.2 L914,29.6 L892,32.1 L870,25.7 L848,42.8 L826,39.5 L804,36.1 L782,37.9 L760,35.7 L738,19.7 L716,30.7 L694,28.7 L672,26.7 L650,29.7 L628,21.5 L606,42.6 L584,44.5 L562,37.0 L540,15.4 L518,39.8 L496,34.4 L474,27.2 L452,42.4 L430,20.5 L408,26.0 L386,18.4 L364,33.3 L342,20.8 L320,32.6 L298,25.5 L276,24.9 L254,19.3 L232,17.6 L210,16.2 L188,31.8 L166,15.2 L144,34.6 L122,45.9 L100,23.6 L78,48.0 L56,25.7 L34,14.2 L12,29.9 L0,29.9 Z"/></svg>';
 function hideFooter(){ try{ var ft=document.querySelector("body > footer")||document.querySelector("main ~ footer")||document.querySelector("footer"); if(ft && ft.id!=="iwend") ft.style.display="none"; }catch(e){} }
 var footEl=null, rafz=0;
 function fz(){ var sec=document.getElementById("iwend"); if(!sec) return;
   var zone=sec.querySelector(".ie-footzone"); var card=sec.querySelector(".ie-footcard"); if(!zone||!card) return;
   if(window.innerWidth<=860){ card.style.transform=""; card.style.borderRadius=""; var doc=document.documentElement; var nb=(window.innerHeight+window.scrollY)>=(doc.scrollHeight-28); sec.classList.toggle("ie-cutnow", nb); return; }
   var vh=window.innerHeight; var zh=zone.offsetHeight-vh; if(zh<1)zh=1;
   var prog=-zone.getBoundingClientRect().top/zh; prog=prog<0?0:(prog>1?1:prog);
   var cut=(prog-0.82)/0.18; cut=cut<0?0:(cut>1?1:cut);
   card.style.transform="scale("+(1-cut*0.055).toFixed(3)+")";
   card.style.borderRadius=(cut*18).toFixed(1)+"px";
 }
 function onScrollFz(){ if(rafz) return; rafz=requestAnimationFrame(function(){ rafz=0; fz(); }); }
 function fitWord(){ try{ var sec=document.getElementById("iwend"); if(!sec) return; var wrap=sec.querySelector(".ie-word"); var span=wrap?wrap.querySelector("span"):null; if(!span) return; span.style.fontSize=""; var w=wrap.clientWidth; var sw=span.scrollWidth; if(sw>w*0.94){ var cur=parseFloat(getComputedStyle(span).fontSize)||120; span.style.fontSize=(cur*w*0.94/sw).toFixed(1)+"px"; } }catch(e){} }
 function build(){
   if(built && document.getElementById("iwend")) return true;
   var anchor=document.querySelector('section[data-ivy-station="location"]');
   var parentRef, beforeRef;
   if(anchor){ var a=anchor; if(a.parentElement&&a.parentElement.tagName==="DIV"&&a.parentElement.children.length===1&&a.parentElement.parentElement)a=a.parentElement; parentRef=a.parentNode; beforeRef=a; }
   else { var main=document.querySelector("main"); if(!main) return false; parentRef=main; beforeRef=null; }
   var s=document.createElement("section"); s.id="iwend";
   var yr=new Date().getFullYear();
   var AERIAL="/photos/footeroption1.jpg";
   s.innerHTML=
   (window.__iwWave?window.__iwWave("#dde4d5","#faf9f6","#eef0e8","#ffffff"):"")+
   '<div class="ie-loc"><div class="ie-wrap">'+
     '<div class="ie-eyebrow rev">Find us &#183; Alona Beach, Panglao</div>'+
     '<div class="ie-locgrid"><div class="ie-loctext rev">'+
       '<h2 class="ie-head">Five minutes from the airport. A world from the everyday.</h2>'+
       '<div class="ie-body"><p>The Ivywall sits a short drive from Panglao International &mdash; yet the moment you arrive the pace changes: palm shade, the smell of salt, and Alona Beach a few steps from the lobby.</p></div>'+
       '<div class="ie-facts">'+
         '<div class="ie-fact"><div class="t">From the airport</div><div class="v">&#8776; 10 min</div><div class="s">3.4 km by car</div></div>'+
         '<div class="ie-fact"><div class="t">On the sand</div><div class="v">Alona Beach</div><div class="s">Steps to the shore</div></div>'+
         '<div class="ie-fact"><div class="t">Island</div><div class="v">Panglao, Bohol</div><div class="s">Central Visayas</div></div>'+
         '<div class="ie-fact"><div class="t">Reservations</div><div class="v">24 hours</div><div class="s">+63 (038) 412 1128</div></div>'+
       '</div>'+
     '</div>'+
     '<div class="ie-mapcard rev"><div class="mtag">Getting here</div>'+MAPSVG+'</div></div>'+
     '<p class="ie-statement rev">Not just a place to stay &mdash; <em>a place that stays with you.</em></p>'+
   '</div></div>'+
   '<div class="ie-stay">'+
     (window.__iwWave?window.__iwWave("#faf9f6","#F5700A","#f6a44e","#ffe2c4"):"")+
     '<div class="ie-cta"><div class="bgimg"><img src="'+AERIAL+'" alt="Aerial of The Ivywall, Alona Beach"></div>'+
       '<div class="ie-ctainner rev"><div class="eye">Plan your stay</div><h3>Ready when you are.</h3>'+
         '<p class="sub">Direct rates, instant confirmation, and a team that remembers your name.</p>'+
         '<div class="ie-btns"><a class="ie-btn primary" href="/book/">Reserve your stay</a><a class="ie-btn ghost" href="/rooms/">Explore rooms</a></div>'+
       '</div></div>'+
     '<div class="ie-footzone"><div class="ie-footwrap"><div class="ie-footcard"><div class="ie-foot"><div class="bgimg"><img src="'+AERIAL+'" alt="The Ivywall from above"></div>'+
       '<div class="cols">'+
         '<div class="brandcol"><div class="brand">THE IVYWALL</div><div style="font-size:12.5px;line-height:1.7;color:#b6a98f">Best Western Plus<br>Alona Beach, Panglao,<br>Bohol 6340, Philippines</div></div>'+
         '<div><h4>Explore</h4><a href="/rooms/">Rooms &amp; Suites</a><a href="/dining/">Dining</a><a href="/experiences/">Experiences</a><a href="/gallery/">Gallery</a></div>'+
         '<div><h4>Resort</h4><a href="/about/">Our Story</a><a href="/offers/">Offers</a><a href="/contact/">Contact</a><a href="/faq/">FAQ</a></div>'+
         '<div><h4>Reach us</h4><a href="tel:+63384121128">+63 (038) 412 1128</a><a href="tel:+639171662184">+63 917 166 2184</a><a href="mailto:resa@bwplusivywall-panglao.com">resa@bwplusivywall-panglao.com</a><a href="https://www.facebook.com/bwplusivywallpanglao/" target="_blank" rel="noreferrer">Facebook &#8599;</a></div>'+
       '</div>'+
       '<div class="legal"><span>&#169; '+yr+' The Ivywall Resort-Panglao. All rights reserved.</span><span><a href="/privacy/">Privacy</a><a href="/cookies/">Cookies</a><a href="/terms/">Terms</a></span></div>'+
       '<div class="ie-word"><span>THE IVYWALL</span></div>'+
     '</div></div></div></div>'+
   '</div>';
   parentRef.insertBefore(s, beforeRef);
   hideFooter();
   built=true;
   try{ var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting)e.target.classList.add("in");});},{threshold:0.1});
     [].slice.call(s.querySelectorAll(".ie-loc,.ie-cta,.ie-foot")).forEach(function(b){io.observe(b);}); }
   catch(e){ [].slice.call(s.querySelectorAll(".ie-loc,.ie-cta,.ie-foot")).forEach(function(b){b.classList.add("in");}); }
   footEl=s.querySelector(".ie-footwrap"); fz(); fitWord();
   return true;
 }
 function enforce(){ if(!document.getElementById("iwend")){ built=false; build(); } hideFooter(); }
 function init(){ if(!build()){ setTimeout(init,120); return; }
   window.addEventListener("scroll", onScrollFz, {passive:true}); window.addEventListener("resize", function(){ onScrollFz(); fitWord(); }, {passive:true});
   setTimeout(fitWord,300); setTimeout(fitWord,900); setTimeout(fitWord,1800);
   try{ var mo=new MutationObserver(function(){enforce();}); mo.observe(document.querySelector("main")||document.body,{childList:true}); setTimeout(function(){try{mo.disconnect();}catch(e){}},9000);}catch(e){}
 }
 if(document.readyState==="complete") setTimeout(init,360); else window.addEventListener("load",function(){setTimeout(init,360);});
})();

/* iw-pressband (modern recognised-by marquee) */
(function(){"use strict";if(!(location.pathname==="/"||location.pathname==="/index.html"||location.pathname===""))return;var LABEL="Recognised by";var ITEMS=["Best Western Plus","Four-Star Rated","Tripadvisor 2024","Bohol Sustainability Council","Cond\u00e9 Nast Traveler","WTA Nominee \u00b7 Asia","Native Filipino Detail"];try{if(!document.getElementById("iw-pb-css")){var st=document.createElement("style");st.id="iw-pb-css";st.textContent='section[class*="bg-pearl-warm"][class*="py-5"]{display:none!important}#iwpb{position:relative;background:#faf9f6;border-top:1px solid rgba(43,37,23,.10);border-bottom:1px solid rgba(43,37,23,.10);padding:clamp(18px,2.6vh,30px) 0;overflow:hidden;font-family:\'Hanken Grotesk\',system-ui,sans-serif}#iwpb .pb-label{text-align:center;font-size:10.5px;letter-spacing:.34em;text-indent:.34em;text-transform:uppercase;color:#F5700A;font-weight:700;margin-bottom:clamp(11px,1.7vh,17px)}#iwpb .pb-row{overflow:hidden;-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}#iwpb .pb-track{display:flex;align-items:center;width:max-content;animation:iwpbMarq 40s linear infinite}#iwpb .pb-row:hover .pb-track{animation-play-state:paused}#iwpb .pb-item{display:inline-flex;align-items:center;font-size:clamp(13px,1.15vw,16px);font-weight:600;letter-spacing:.05em;color:#2b2517;white-space:nowrap;padding:0 clamp(16px,2vw,30px)}#iwpb .pb-sep{color:#F5700A;font-size:10px;opacity:.9}@keyframes iwpbMarq{from{transform:translateX(0)}to{transform:translateX(-50%)}}@media (prefers-reduced-motion:reduce){#iwpb .pb-track{animation:none;flex-wrap:wrap;justify-content:center}}';(document.head||document.documentElement).appendChild(st);}}catch(e){}var built=false;function itemsHTML(){return ITEMS.map(function(t){return '<span class="pb-item">'+t+'</span><span class="pb-sep">\u2726</span>';}).join("");}function build(){if(built&&document.getElementById("iwpb"))return true;var orig=document.querySelector('section[class*="bg-pearl-warm"]');var parentRef,beforeRef;if(orig){parentRef=orig.parentNode;beforeRef=orig;}else{var os=document.getElementById("iwos");if(os&&os.parentNode){parentRef=os.parentNode;beforeRef=os.nextSibling;}else{var main=document.querySelector("main");if(!main)return false;parentRef=main;beforeRef=null;}}var s=document.createElement("section");s.id="iwpb";s.innerHTML='<div class="pb-label">'+LABEL+'</div><div class="pb-row"><div class="pb-track">'+itemsHTML()+itemsHTML()+'</div></div>';parentRef.insertBefore(s,beforeRef);built=true;return true;}function enforce(){if(!document.getElementById("iwpb")){built=false;build();}}function init(){if(!build()){setTimeout(init,120);return;}try{var mo=new MutationObserver(function(){enforce();});mo.observe(document.querySelector("main")||document.body,{childList:true});setTimeout(function(){try{mo.disconnect();}catch(e){}},9000);}catch(e){}}if(document.readyState==="complete")setTimeout(init,380);else window.addEventListener("load",function(){setTimeout(init,380);});})();

/* iw-theme-color -> brand orange (#F5700A) so mobile top bar matches the Ivy tab + footer reveal */
(function(){try{function setTC(){var ms=document.querySelectorAll('meta[name="theme-color"]');if(ms&&ms.length){for(var i=0;i<ms.length;i++)ms[i].setAttribute("content","#F5700A");}else{var m=document.createElement("meta");m.setAttribute("name","theme-color");m.setAttribute("content","#F5700A");(document.head||document.documentElement).appendChild(m);}}setTC();if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",setTC);setTimeout(setTC,400);setTimeout(setTC,1200);}catch(e){}})();
