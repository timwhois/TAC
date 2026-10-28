/* Shared Third Axis Creative navigation. One source of truth for site pages. */
(function(){
 const home=location.pathname==='/'||location.pathname==='/index.html';
 const link=id=>home?'#'+id:'/#'+id;
 const nav='<a href="/" class="logoBox hoverable" aria-label="Third Axis Creative home"><div class="logoMark"></div><div class="logoWords"><strong>Third Axis</strong><em>Creative Systems</em></div></a>'+
 '<div class="navLinks"><a href="'+link('services')+'">Services</a><a href="'+link('work')+'">Selected work</a><a href="'+link('shootless')+'">Shootless</a><a href="'+link('parent')+'">About</a><a href="'+link('contact')+'">Contact</a></div>'+
 '<div class="navCtas"><a href="https://www.shootless.co.uk/" target="_blank" rel="noopener">Visit Shootless</a><a href="'+link('contact')+'">Talk to us</a></div><button class="menuBtn" id="menuBtn" type="button" aria-controls="mobileMenu" aria-expanded="false">Menu</button>';
 const existing=document.querySelector('nav.nav');
 if(existing){existing.innerHTML=nav;return;}
 const n=document.createElement('nav');n.className='nav shared-axis-nav';n.innerHTML=nav;document.body.insertBefore(n,document.body.firstChild);
 const menu=document.createElement('div');menu.className='mobileMenu shared-axis-mobile';menu.id='mobileMenu';menu.innerHTML='<a href="/#services">Services</a><a href="/#work">Selected work</a><a href="/#shootless">Shootless</a><a href="/#parent">About</a><a href="/#contact">Contact</a>';n.after(menu);
 n.querySelector('#menuBtn').addEventListener('click',()=>{const open=menu.classList.toggle('open');n.querySelector('#menuBtn').setAttribute('aria-expanded',String(open));});
 menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>menu.classList.remove('open')));
})();
