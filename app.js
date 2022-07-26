
/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const menu =document.getElementById('navbar__list');

const sections =Array.from(document.querySelectorAll('section'));

function createlist(){
    for (sect of sections)
    {
     listItem=document.createElement('li');
     listItem.innerHTML  =`<li><a href='#${sect.id}' data-nav="${sect.id}"  class='menu__link'>${sect.dataset.nav}</a></li>`;
 
     menu.appendChild(listItem);
}
}
createlist();
menu.addEventListener("click",(sec)=>{
    sec.preventDefault();
    if(sec.target.dataset.nav){
     document.getElementById(`${sec.target.dataset.nav}`)
     .scrollIntoView({behavior:"smooth"});
    } 
 });
 function scrollActive(){
    const scrollY = window.pageYOffset
    for (sect of sections){
        const sectionHeight = sect.offsetHeight
        const sectionTop = sect.offsetTop - 50;
        sectionId = sect.getAttribute('id')
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.navbar__menu a[href*=' + sectionId + ']').classList.add('your-active-class');
        }else{
            document.querySelector('.navbar__menu a[href*=' + sectionId + ']').classList.remove('your-active-class');

        }
    }

}
window.addEventListener('scroll', scrollActive)
window.onscroll =function(){
    document.querySelectorAll("section").forEach(function(active){
    if(active.getBoundingClientRect().top>=-300&&active.getBoundingClientRect().top<=100){active.classList.add("your-active-class");}
     else{active.classList.remove("your-active-class");}
    }
  );
};

  
 