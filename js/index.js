(function(){
    window.addEventListener("load", preLoader);
    function preLoader()
    {
        setTimeout(function() {
            
            const body    =   document.querySelector("body");
            const loader  =   document.getElementById("preloader");
            const pulsar  =   document.getElementById("pulsar");
            
            body.classList.remove('cut');
            pulsar.classList.add('hide');
            loader.classList.add('moveUp');
            
        }, 1000)
    }
    
    const modal = document.querySelector('.modal');
    document.getElementById('feedback').addEventListener('click', openModal);
    document.querySelector('.btn_close').addEventListener('click', closeModal);
    
    function openModal(){
        modal.style.display = "block";
    }
    
    function closeModal(){
        modal.style.display = "none";
    }
    
    window.addEventListener('click', function(event){
        if(event.target === modal){
            modal.style.display = "none";
        }
    })
    
    const modalLogin = document.querySelector('.modal_login');
    document.querySelector('.modal_login_btn').addEventListener('click', openModalLogin);
    document.querySelector('.btn_close_login').addEventListener('click', closeModalLogin);
    document.querySelector('.login_access').addEventListener('click', accessLogin);
    
    function accessLogin(){
        const signIn = document.querySelector('.sign_in');
        signIn.innerText = "Вихід";
        closeModalLogin();
        closeModalReg();
    }
    
    function openModalLogin(){
        modalLogin.style.display = "block";
    }
    
    function closeModalLogin(){
        modalLogin.style.display = "none";
    }
    
    window.addEventListener('click', function(event){
        if(event.target === modalLogin){
            modalLogin.style.display = "none";
        }
    })
    
    const modalReg = document.querySelector('.modal_reg');
    document.querySelector('.modal_regist').addEventListener('click', openModalReg);
    document.querySelector('.btn_close_reg').addEventListener('click', closeModalReg);
    document.querySelector('.cancel_reg').addEventListener('click', closeModalReg);
    document.querySelector('.access_reg').addEventListener('click', accessLogin);
    function openModalReg(){
        closeModalLogin();
        modalReg.style.display = "block";
    }
    
    function closeModalReg(){
        modalReg.style.display = "none";
    }
    
    window.addEventListener('click', function(event){
        if(event.target === modalReg){
            modalReg.style.display = "none";
        }
    })
    
     $('.hidden_btn_block').hover(btnDown, btnUp);
    
    function btnDown(event) {
        const target = $(event.target);
        const btn = $(target).parent().parent().find('.hidden_btn');
        
        $(btn).slideDown('slow');
    }
    
    function btnUp(event){
        const target = $(event.target);
        const btn = $(target).parent().parent().find('.hidden_btn');
        
        $(btn).slideUp('slow');
    }
    
    
    $('.list_item').click(zoomModal);
    
    function zoomModal(event) {
        const target = $(event.target);
        const modalProd = $(target).parent().parent().parent();
        
        
        $(modalProd).prev().addClass('item');
        $(modalProd).addClass('item_content_style');
        $(target).parent().find('.btn_close_prod').css('display', 'block');
        $(modalProd).find('.hidden_para').css('display', 'block');
        $(target).parent().parent().find('.hidden_btn')
        .removeClass('hidden_btn').addClass('hidden_btn_visible');
        
        $(target).parent().find('.btn_close_prod').click(function(){
            $(modalProd).removeClass('item_content_style');
                $(modalProd).prev().removeClass('item');
                $(modalProd).find('.hidden_para').css('display', 'none');
                $(target).parent().find('.btn_close_prod').css('display', 'none');
                $(target).parent().parent().find('.hidden_btn_visible')
                    .removeClass('hidden_btn_visible').addClass('hidden_btn');
            
        });
        
        window.addEventListener('click', function(event){
            if(event.target === document.querySelector('.item') ) {
                $(modalProd).removeClass('item_content_style');
                $(modalProd).prev().removeClass('item');
                $(modalProd).find('.hidden_para').css('display', 'none');
                $(target).parent().find('.btn_close_prod').css('display', 'none');
                $(target).parent().parent().find('.hidden_btn_visible')
                    .removeClass('hidden_btn_visible').addClass('hidden_btn');
                
            }
         })
    }
    
    document.querySelector('.login-form input[type=submit]').addEventListener('click', sendForm);
    
    function sendForm(e){
        e.preventDefault();
        const xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function (){
            if(xhr.readyState === 4 && xhr.status === 200){
                document.querySelector('.login-form').innerHTML = 'Thank you!';
                
            }else if(xhr.readyState === 4 && xhr.status != 200){
                document.querySelector('.login-form').innerHTML = 'Error!';
            }
        }
        xhr.open('POST', 'login.php', true);
        const form = document.querySelector('.login-form');
        const data = new FormData(form);
        xhr.send(data);
    }
})();