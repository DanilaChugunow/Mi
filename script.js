window.addEventListener('DOMContentLoaded', ()=>{

    // tabs
    const tabs = document.querySelectorAll('.tab'),
            tabContent = document.querySelectorAll('.tab-img'),
            tabParent = document.querySelector('.infos__box');


    function hideTabContent() {
            tabContent.forEach(item => {
            item.style.display ='none';    
        });
        tabs.forEach(item =>{
            item.classList.remove('active');
        })
    }

    function showTabContent(i=0) {
        tabContent[i].style.display ='block';
        tabs[i].classList.add('active');
    }

    hideTabContent();
    showTabContent();

    tabParent.addEventListener('click', (event) =>{
        const tr=event.target.closest('.infos__box>ul');
        if (tr) {
            tabs.forEach((item, i) =>{
                if (tr == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            })
        }
    })

    // slider
    const left = document.querySelector('.left'), 
        right = document.querySelector('.right') 
        slider = document.querySelector('.reviews__slider'); 
     
    let interval; 
    let paddingLeft = parseInt(window.getComputedStyle(slider).paddingLeft, 10); 
    left.addEventListener('mousedown', () => { 
         
        interval = setInterval(() => { 
            paddingLeft += 5; 
            slider.style.right = paddingLeft + 'px'; 
            }, 40); 
    }); 
     
    left.addEventListener('mouseup', () => { 
        clearInterval(interval); 
    }); 
     
    left.addEventListener('mouseleave', () => { 
        clearInterval(interval); 
    }); 
 
    right.addEventListener('mousedown', () => { 
        interval = setInterval(() => { 
        paddingLeft = paddingLeft - 5; 
        slider.style.right = paddingLeft + 'px'; 
        }, 40); 
    }); 
 
    right.addEventListener('mouseup', () => { 
        clearInterval(interval); 
    }); 
 
    right.addEventListener('mouseleave', () => { 
        clearInterval(interval); 
    });

})