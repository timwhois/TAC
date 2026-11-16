(()=>{'use strict';
const brand=document.body.dataset.bookingBrand;
if(!['third-axis','shootless'].includes(brand))return;
// Cal.com cannot embed private d/ links (its /embed page 404s), so the inline calendar uses the
// event's public link; the direct button keeps the private link. Both are event type 7783179.
const link='third-axis-y8wlix/30min',direct=new URL('https://cal.com/d/29bDWndk4gYyTdoJTR9b2e/30min');
direct.searchParams.set('metadata[sourceBrand]',brand);
document.getElementById('booking-direct').href=direct.href;
const button=document.getElementById('booking-load'),status=document.getElementById('booking-status');
button.addEventListener('click',()=>{
 button.disabled=true;document.getElementById('booking-calendar').hidden=false;status.textContent='Loading secure Cal.com availability…';
 (function(C,A,L){let p=function(a,ar){a.q.push(ar)};let d=C.document;C.Cal=C.Cal||function(){let cal=C.Cal;let ar=arguments;if(!cal.loaded){cal.ns={};cal.q=cal.q||[];const script=d.createElement('script');script.src=A;script.onerror=()=>{status.textContent='The calendar could not load. Use the “Open directly on Cal.com” link above.';button.disabled=false;button.textContent='Try again ↗';};d.head.appendChild(script);cal.loaded=true;}if(ar[0]===L){const api=function(){p(api,arguments)};const namespace=ar[1];api.q=[];if(typeof namespace==='string'){cal.ns[namespace]=cal.ns[namespace]||api;p(cal.ns[namespace],ar);p(cal,['initNamespace',namespace]);}else p(cal,ar);return;}p(cal,ar);};})(window,'https://app.cal.com/embed/embed.js','init');
 window.Cal('init',{origin:'https://cal.com'});
 window.Cal('inline',{elementOrSelector:'#cal-embed',calLink:link,config:{theme:'dark',layout:'month_view','metadata[sourceBrand]':brand}});
 window.Cal('ui',{theme:'dark',styles:{branding:{brandColor:brand==='shootless'?'#f3a12a':'#2fa976'}},layout:'month_view'});
 window.Cal('on',{action:'linkReady',callback:()=>{status.textContent='Choose an available time. Times are shown by Cal.com in your selected timezone.';}});
 window.Cal('on',{action:'bookingSuccessfulV2',callback:()=>{status.textContent='Booking submitted to Cal.com. Check your confirmation for the appointment details.';}});
 button.textContent='Calendar opened';
});
})();
