const menuBtn=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav-links');
menuBtn?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuBtn.setAttribute('aria-expanded',String(open));});
nav?.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuBtn?.setAttribute('aria-expanded','false');}));

document.getElementById('year').textContent=new Date().getFullYear();

const modal=document.getElementById('quoteModal');
const openModal=()=>{modal.classList.add('open');modal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden';};
const closeModal=()=>{modal.classList.remove('open');modal.setAttribute('aria-hidden','true');document.body.style.overflow='';};
document.querySelectorAll('[data-open-modal]').forEach(b=>b.addEventListener('click',openModal));
document.querySelectorAll('[data-close-modal]').forEach(b=>b.addEventListener('click',closeModal));
modal.addEventListener('click',e=>{if(e.target===modal)closeModal();});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeModal();});

const phone='905321234567';
function wa(message){window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`,'_blank','noopener');}
document.getElementById('quoteForm').addEventListener('submit',e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.currentTarget));wa(`Merhaba Believe Datça, teklif almak istiyorum.\nTur tipi: ${d.tour}\nTarih: ${d.date||'-'}\nKişi sayısı: ${d.people||'-'}`);});
document.getElementById('contactForm').addEventListener('submit',e=>{e.preventDefault();const d=Object.fromEntries(new FormData(e.currentTarget));wa(`Merhaba Believe Datça, rezervasyon hakkında bilgi almak istiyorum.\nAd Soyad: ${d.name}\nTelefon: ${d.phone}\nTur tipi: ${d.tour}\nTarih: ${d.date||'-'}\nNot: ${d.note||'-'}`);});

// Instagram entegrasyonu için hazır alan:
// #instagramFeed elemanının içeriği backend üzerinden Instagram Graph API verisiyle doldurulabilir.