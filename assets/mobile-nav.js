(function(){
  var nav=document.querySelector('header nav');
  var links=nav&&nav.querySelector('.navlinks');
  if(!nav||!links) return;

  links.id='mobile-navigation';
  var toggle=document.createElement('button');
  toggle.className='menu-toggle';
  toggle.type='button';
  toggle.setAttribute('aria-label','메뉴 열기');
  toggle.setAttribute('aria-controls',links.id);
  toggle.setAttribute('aria-expanded','false');
  toggle.innerHTML='<span class="menu-icon" aria-hidden="true"></span>';

  var backdrop=document.createElement('button');
  backdrop.className='nav-backdrop';
  backdrop.type='button';
  backdrop.setAttribute('aria-label','메뉴 닫기');
  nav.appendChild(toggle);
  document.body.appendChild(backdrop);

  function setOpen(open){
    links.classList.toggle('is-open',open);
    backdrop.classList.toggle('is-open',open);
    document.body.classList.toggle('menu-open',open);
    toggle.setAttribute('aria-expanded',String(open));
    toggle.setAttribute('aria-label',open?'메뉴 닫기':'메뉴 열기');
    if(open) links.querySelector('a').focus();
  }
  toggle.addEventListener('click',function(){setOpen(toggle.getAttribute('aria-expanded')!=='true');});
  backdrop.addEventListener('click',function(){setOpen(false);});
  links.addEventListener('click',function(event){if(event.target.closest('a')) setOpen(false);});
  document.addEventListener('keydown',function(event){if(event.key==='Escape') setOpen(false);});
  window.addEventListener('resize',function(){if(window.innerWidth>860) setOpen(false);});
})();
