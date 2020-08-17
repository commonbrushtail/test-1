let tabTarget = document.querySelectorAll('[data-tab-target]');
let tabContent = document.querySelectorAll('.content');
console.log(tabContent);

function removeActive(){
    tabTarget.forEach(element => {
        element.classList.remove('active')
    });
    tabContent.forEach(element => {
        element.classList.remove('active')
    });
}


tabTarget.forEach((tab)=>{
    tab.addEventListener("click",(e)=>{
    removeActive()
    e.currentTarget.classList.add('active')
    let targetContent = e.currentTarget.dataset.tabTarget
    document.querySelector('.'+targetContent).classList.add('active')
    })
})

let stat = document.querySelector('.stat')
let count = document.querySelectorAll('.count')
let speed = 180
console.log(stat.offsetTop)
console.log(window.pageYOffset)

window.onscroll = function(e){
   
    let target = stat.offsetTop-document.documentElement.clientHeight
    console.log(target)
    console.log(window.pageYOffset)
    if(window.pageYOffset>target){
        count.forEach(element => {
            let  add = () =>{
                let targetCount = element.getAttribute('data-tab-count')
                let increment = +Math.ceil( targetCount / speed);
                let current = +element.innerText;
                
        
                if(current<targetCount){
                    element.innerText = current + increment;
                    setTimeout(() => {
                        add()
                    }, 50);
                } else {
                    element.innerText = targetCount
                }
        
                
            }
            
            add()
            
            
            
            
        });
       
    }

}






let hamburger = document.querySelector('.hamburger')
let navModal = document.querySelector('.navModal')
var html = document.getElementsByTagName("HTML")[0];

hamburger.addEventListener("click",(e)=>{
    e.currentTarget.classList.toggle('open');
    navModal.classList.toggle('active');
    html.classList.toggle("modalActive");
})

$('.owl-carousel').owlCarousel({
    autoplay:true,
    autoplayTimeout:5000,
    loop:true,
    margin:0,
    nav:false,
    
    responsive: {
        0: {
          items: 1,
        },
      },
    
})