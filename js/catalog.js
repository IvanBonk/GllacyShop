(function(){
    
    
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
        $(target).parent().parent().find('.hidden_btn')
        .removeClass('hidden_btn').addClass('hidden_btn_visible');
        
        $(target).parent().find('.btn_close_prod').click(function(){
            $(modalProd).removeClass('item_content_style');
                $(modalProd).prev().removeClass('item');
                $(target).parent().find('.btn_close_prod').css('display', 'none');
                $(target).parent().parent().find('.hidden_btn_visible')
                    .removeClass('hidden_btn_visible').addClass('hidden_btn');
            
        });
        
        window.addEventListener('click', function(event){
            if(event.target === document.querySelector('.item') ) {
                $(modalProd).removeClass('item_content_style');
                $(modalProd).prev().removeClass('item');
                $(target).parent().find('.btn_close_prod').css('display', 'none');
                $(target).parent().parent().find('.hidden_btn_visible')
                    .removeClass('hidden_btn_visible').addClass('hidden_btn');
                
            }
         })
    }
})();