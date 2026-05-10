document.addEventListener('DOMContentLoaded',function(){


// clearing , sending and to the top , button functions

    //variable definition
    const Form = document.querySelector('.vtouch');
    const EmailInput = document.querySelector('.vmail input');
    const MessageInput = document.querySelector('.vmessage input');
    const ButtonClick = document.querySelector('.button-click')

    if(Form){
        Form.addEventListener('submit', function(event){
            event.preventDefault();
    
            //clearing after send
            EmailInput.value = '';
            MessageInput.value = '';

            ButtonClick.textContent = 'Message sent';
            ButtonClick.style.display = 'inline-block';


            //clearing displayed text after delay
            setTimeout(() => {
                
            ButtonClick.style.display = 'none';
            }, 2000);
        })
    }
    //variable definition
    const newsletterForm = document.querySelector('.fletter');      
    const newsletterEmail = document.querySelector('.wrp input[type="email"]');

    if (newsletterForm) {
            newsletterForm.addEventListener('submit', function (event) {
            event.preventDefault();
            newsletterEmail.value = '';   
            
        })
    }


    // Scroll for mouse function

    //variable definition
    const scrollContainer = document.querySelector('.scroll');

    if (scrollContainer) {
        let isDown = false;
        let startX;
        let scrollLeft;

        // when pressing mouse in scroll area
        scrollContainer.addEventListener('mousedown', (event) => {
            isDown = true;
            scrollContainer.classList.add('active');       
            startX = event.pageX - scrollContainer.offsetLeft;  
            scrollLeft = scrollContainer.scrollLeft;        
            scrollContainer.style.cursor = 'grabbing';      
        });

        // stopping drag outs the scroll area
        scrollContainer.addEventListener('mouseleave', () => {
            isDown = false;
            scrollContainer.classList.remove('active');
            scrollContainer.style.cursor = 'grab';
        });

        // stopping drag after release
        scrollContainer.addEventListener('mouseup', () => {
            isDown = false;
            scrollContainer.classList.remove('active');
            scrollContainer.style.cursor = 'grab';
        });

        // mowith with holding down mouse
        scrollContainer.addEventListener('mousemove', (event) => {
            if (!isDown) return;                
            event.preventDefault();                
            const x = event.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 1.5;      
            scrollContainer.scrollLeft = scrollLeft - walk;
        });
    }

    //Hamburger menu open 

    //variable definition
    const ButtonM = document.querySelector('.title2 button');
    const ButtonNav = document.querySelector('.title2 nav');

    // opening nav after click on buttnon
    if (ButtonM && ButtonNav) {
    ButtonM.addEventListener('click', () => {
       ButtonNav.classList.toggle('nav-open');
    });
    }
})