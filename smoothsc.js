
function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}





/*             FOR THE SCROLL DOWN OPTION         */

const display = document.querySelector('.Intro .icontainer .hello .he');
const action = document.querySelector('.Intro .icontainer .scrdd ');

document.addEventListener('scroll', function () {
    if(isInViewport(display) ){
        
        
        action.style.opacity =    "1" ;
    }
        else{
            action.style.opacity =    "0" ;
        }
}, {
    passive: true
});
const displayy = document.querySelector('.Intro .icontainer .scrd'); 
const othery = document.querySelector('.endth .scrd');
const actionn = document.querySelector('.Intro .hanging ');

document.addEventListener('scroll', function () {
    if(isInViewport(displayy) || isInViewport(othery) ){
        
        
        actionn.style.position =   "absolute"  ;
    }
        else{
            actionn.style.position =  "fixed"  ;
        }
}, {
    passive: true
});

