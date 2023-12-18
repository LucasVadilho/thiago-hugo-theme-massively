
    /* COMPRAR O LIVRO */
    let closeComprarLivroFisico = function () {
            let containerComprarLivroFisico = document.getElementsByClassName("comprarLivroFisicoSnack");
            containerComprarLivroFisico[0].style.display="none"
        }
    
        let flagComprarLivroFisicoAberto = false;
        let comprarLivroFisico = function(e) {
            e.stopPropagation()
            let containerComprarLivroFisico = document.getElementsByClassName("comprarLivroFisicoSnack");
            containerComprarLivroFisico[0].style.display = "inline-flex";
            flagComprarLivroFisicoAberto  = true;
    
            window.addEventListener('click', function(g){
                if (containerComprarLivroFisico.contains(g.target)){
                } else{
                    closeComprarLivroFisico();  
                }
            }, options = {"once": true})
        }
    
        document.addEventListener('keydown', (ev) => {
            if((ev.key == 'Escape') && (flagComprarLivroFisicoAberto == true)){
                closeComprarLivroFisico();
            }
        }) 
    /* COMPRAR O LIVRO */
    
    /* PARTICIPAR NUVEM DE PALAVRAS */
        let closeparticiparnuvemDePalavras = function () {
            let containerparticiparnuvemDePalavras = document.getElementById("participarSnack");
            containerparticiparnuvemDePalavras.style.display="none"
        }
    
        let flagParticiparSnackAberto = false;
        let participarnuvemDePalavras = function(e) {
            e.stopPropagation()
            let containerparticiparnuvemDePalavras = document.getElementById("participarSnack");
            containerparticiparnuvemDePalavras.style.display = "inline-flex";
            flagParticiparSnackAberto  = true;
            let selectinput = document.getElementById('txt_nuvemDePalavraHaQnto');
            selectinput.focus();
            selectinput.select();
    
            window.addEventListener('click', function(g){
                if (containerparticiparnuvemDePalavras.contains(g.target)){
                } else{
                    closeparticiparnuvemDePalavras();  
                }
            }, options = {"once": true})
        }
    
        document.addEventListener('keydown', (ev) => {
            if((ev.key == 'Escape') && (flagParticiparSnackAberto == true)){
                closeparticiparnuvemDePalavras();
            }
        }) 
    /* FIM PARTICIPAR NUVEM DE PALAVRAS */
            
    /* COMPARTILHAMENTO */
        function fbSharing(post_url) {
            var url = new String(post_url);
            window.open(post_url , "share_dialog", "width=500, height=300");
        }
    
        function ttSharing(post_url){
            var url = new String(post_url);
            window.open(post_url , "share_dialog", "width=790, height=462");
        }
    
        function redditSharing(post_url){
            var url = new String(post_url);
            window.open(post_url , "share_dialog", "width=790, height=742");
        }
    
        function pinterestSharing(post_url){
            var url = new String(post_url);
            window.open(post_url , "share_dialog", "width=1080, height=727");
        }
        
        /* Carregando links de compartilhamento */
        let urlCurrentPage = window.location.href;
    
        /* WPP */
        document.getElementById('wpp_sharebutton').innerHTML += 
            `<a href="https://api.whatsapp.com/send?text=${urlCurrentPage}" target="_blank" data-action="share/whatsapp/share">
                <div class="logoRedeContainerWpp">
                    <i class="icon alt icon_compartilharLivro fa-whatsapp fa-lg"></i>
                </div>
                <div class="nomeRedeContainerWpp">WhatsApp</div>
            </a>`
    
        /* Twitter */
        document.getElementById('twitter_sharebutton').innerHTML += 
            `<a onclick='ttSharing("https://twitter.com/share?url=` + urlCurrentPage + `%0a%0a&text=há quanto tempo você não olha para as estrelas?&hashtags=LivrosTDVadilho,AmoLer")'>
                <div class="logoRedeContainerTwitter">
                    <i class="icon alt icon_compartilharLivro fa-twitter fa-lg"></i>
                </div>
                <div class="nomeRedeContainerTwitter">Twitter</div>    
            </a>`
    
        /* Facebook */
        document.getElementById('facebook_sharebutton').innerHTML += 
        `<a onclick='fbSharing("https://www.facebook.com/sharer/sharer.php?u=` + urlCurrentPage + `")'>
            <div class="logoRedeContainerFacebook">
                <i class="icon alt icon_compartilharLivro fa-facebook fa-lg"></i>
            </div>
            <div class="nomeRedeContainerFacebook">Facebook</div>    
        </a>`
    
        /* Reddit */
        let reddit_url = "https://www.reddit.com/submit?title=Historieta%20-%20TDVadilho&text=há%20quanto%20tempo%2você%20não%20olha%20para%20as%20estrelas?"
        document.getElementById('reddit_sharebutton').innerHTML += 
            `<a onclick='redditSharing("${reddit_url}(${urlCurrentPage})%0a%0a&signup_survey=true")'>
                <div class="logoRedeContainerReddit">
                    <i class="icon alt icon_compartilharLivro fa-reddit-alien fa-lg"></i>
                </div>
                <div class="nomeRedeContainerReddit">Reddit</div>
            </a>`
            
        /* Pinterest */
        let pinterest_url = "pinterestSharing('{{ .Params.linkPin }}')"
        document.getElementById('pinterest_sharebutton').innerHTML += `<a onclick="${pinterest_url}">
                <div class="logoRedeContainerPinterest">
                    <i class="icon alt icon_compartilharLivro fa-pinterest fa-lg"></i>
                </div>
                <div class="nomeRedeContainerPinterest">Pinterest</div>    
            </a>`
    
        /* Copiar URL*/    
        document.getElementById('copyUrl_sharebutton').innerHTML += 
            `<a onclick="copiarUrl()">
                <div class="iconeContainerCopyUrl">
                    <i class="icon alt icon_compartilharLivro fa-link fa-lg"></i>
                </div>
                <div class="nomeContainerCopyUrl">Copiar url</div>    
            </a>`
    
        let copiarUrl = function() {
            let createCopiarNotification = function() {
                let notification = document.getElementById("urlCopiarNotification");
                notification.style.display = "block";
                notification.innerHTML = '<i class="fa fa-link"></i> URL COPIADA</div>';
                
                setTimeout(() => {
                    notification.style.display = 'none';
                }, 2800);
            }
    
            if(navigator.clipboard) {
                navigator.clipboard.writeText(window.location.href);
                createCopiarNotification();
            }
            createCopiarNotification();
        }
        
        let flagCompartilharAberto = false;
        let abrirCompartilharLivro = function(e) {
            e.stopPropagation()
            let container = document.getElementById("compartilharContainer");
            container.style.display = "inline-flex";
            flagCompartilharAberto = true;
    
            window.addEventListener('click', function(g){
                if (container.contains(g.target)){
                } else{
                    closeCompartilharLivro();  
                }
            }, options = {"once": true})
        }
    
        document.addEventListener('keydown', (ev) => {
            if((ev.key == 'Escape') && (flagCompartilharAberto == true)){
                closeCompartilharLivro();
            }
        }) 
    
        let closeCompartilharLivro = function () {
            let container = document.getElementById("compartilharContainer")
            container.style.display="none"
        }
    /* FIM COMPARTILHAMENTO */
    
        let flagsinopseopen = true;
        let flagmsgdoautor = false;
        let focus_sinopse = function (){
            if ((flagmsgdoautor == true) && (flagsinopseopen != true)){
                document.getElementsByClassName("txt_msgautor")[0].classList.remove('selectedtext')
                document.getElementsByClassName("txt_sinopse")[0].classList.add('selectedtext')
    
                document.getElementsByClassName("sinopse")[0].classList.add('selectedmenu')
                document.getElementsByClassName("msgdoautor")[0].classList.remove('selectedmenu')
    
                flagsinopseopen = true; 
                flagmsgdoautor = false;       
            }
        }
    
        let focus_msgautor = function (){
            if ((flagmsgdoautor != true) && (flagsinopseopen == true)){
                document.getElementsByClassName("txt_msgautor")[0].classList.add('selectedtext')
                document.getElementsByClassName("txt_sinopse")[0].classList.remove('selectedtext')
    
                document.getElementsByClassName("msgdoautor")[0].classList.add('selectedmenu')
                document.getElementsByClassName("sinopse")[0].classList.remove('selectedmenu')
    
                flagmsgdoautor = true;
                flagsinopseopen = false;  
            }
        }
    
        let flagcomentariosdopublico = true;
        let flagrespostasdoautor = false;
        let flagconteudosextras = false;
        let focus_comentariosdopublico = function (){
            if (flagcomentariosdopublico != true){
                document.getElementsByClassName("txt_comentariosdopublico")[0].classList.add('selectedtext')
                document.getElementsByClassName("txt_respostasdoautor")[0].classList.remove('selectedtext')
                document.getElementsByClassName("txt_conteudosextras")[0].classList.remove('selectedtext')
    
                document.getElementsByClassName("comentariosdopublico")[0].classList.add('selectedmenu')
                document.getElementsByClassName("respostasdoautor")[0].classList.remove('selectedmenu')
                document.getElementsByClassName("conteudosextras")[0].classList.remove('selectedmenu')
    
                flagcomentariosdopublico = true;
                flagrespostasdoautor = false; 
                flagconteudosextras = false;
            }
        }
    
        let focus_respostasdoautor= function (){
            if (flagrespostasdoautor != true){
                document.getElementsByClassName("txt_comentariosdopublico")[0].classList.remove('selectedtext')
                document.getElementsByClassName("txt_respostasdoautor")[0].classList.add('selectedtext')
                document.getElementsByClassName("txt_conteudosextras")[0].classList.remove('selectedtext')
    
                document.getElementsByClassName("comentariosdopublico")[0].classList.remove('selectedmenu')
                document.getElementsByClassName("respostasdoautor")[0].classList.add('selectedmenu')
                document.getElementsByClassName("conteudosextras")[0].classList.remove('selectedmenu')
    
                flagcomentariosdopublico = false;
                flagrespostasdoautor = true; 
                flagconteudosextras = false;
            }
        }
    
        let focus_conteudosextras = function (){
            if (flagconteudosextras != true){
                document.getElementsByClassName("txt_comentariosdopublico")[0].classList.remove('selectedtext')
                document.getElementsByClassName("txt_respostasdoautor")[0].classList.remove('selectedtext')
                document.getElementsByClassName("txt_conteudosextras")[0].classList.add('selectedtext')
    
                document.getElementsByClassName("comentariosdopublico")[0].classList.remove('selectedmenu')
                document.getElementsByClassName("respostasdoautor")[0].classList.remove('selectedmenu')
                document.getElementsByClassName("conteudosextras")[0].classList.add('selectedmenu')
    
                flagcomentariosdopublico = false;
                flagrespostasdoautor = false; 
                flagconteudosextras = true;
            }
        }
    
        //SWIPE LEFT OR RIGHT
        let touchsurface = document.getElementById('container_images'),
        startX, 
        startY,
        dist,
        distThreshold,
        thresholdX = 50,
        thresholdY = 50,
        allowedTime = 1500,
        elapsedTime,
        startTime
    
        let setupSliderHaQnto = function() {
            touchsurface.addEventListener('touchstart', function(t) {
                let touchobj = t.changedTouches[0]
                
                dist = 0
                distThreshold = 0
                startX = touchobj.pageX
                startY = touchobj.pageY
                startTime = new Date().getTime() 
            }, false)
    
            touchsurface.addEventListener('touchend', function(t) {
                var touchobj = t.changedTouches[0]
                dist = touchobj.pageX - startX
                distThreshold = Math.abs(dist)
                elapsedTime = new Date().getTime() - startTime
                
                console.log('dist ' + dist + ' threshold X ' + thresholdX)
                console.log('abs y ' + Math.abs(touchobj.pageY - startY) + ' thrs Y ' + thresholdY)
                console.log('elapsedTime ' + elapsedTime + ' allowed ' + allowedTime)
    
                if (elapsedTime <= allowedTime && distThreshold >= thresholdX && Math.abs(touchobj.pageY - startY) <= thresholdY && dist > 0){
                    document.getElementById('nextButtonHaQnto').childNodes[1].click();
                }
    
                if (elapsedTime <= allowedTime && distThreshold >= thresholdX && Math.abs(touchobj.pageY - startY) <= thresholdY && dist < 0){                                         
                    document.getElementById('prevButtonHaQnto').childNodes[1].click();
                }
            }, false)
        }
    
        let navPanelToggle = document.getElementById("navPanelToggle")
        let flagImagesHaqntoAberto = false;
        document.addEventListener('keydown', (ev) => {
            if(flagImagesHaqntoAberto==true){
                if(ev.key == 'Escape'){/* para ler quando preciona o esc*/
                    closeSnackbarHaQnto();
                }
                if(ev.keyCode == '39'){/*para ler quando preciona a seta direita*/
                    nextFotoHaQnto();
                }
                if(ev.keyCode == '37'){/*para ler quando preciona a seta esquerda*/
                    prevFotoHaQnto();
                }
            }
        })
    
        let isMouseover = Boolean
        let checkIfCanCloseHaQntoImages = function (){
            if(isMouseover == false){
                closeSnackbarHaQnto();
            }
        }
    
        let checkMouseOverContainersHaQnto = function(){
            $("#buttonCloseImgsHaQnto, #nextButtonHaQnto, #prevButtonHaQnto, .imageSection").mouseover(function() {
                isMouseover = true;
            })
            $("#buttonCloseImgsHaQnto, #nextButtonHaQnto, #prevButtonHaQnto, .imageSection").mouseout(function() {
                isMouseover = false;
            })
        }
    
        function closeSnackbarHaQnto(){/*Função para fechar snack e retornar elementos ao padrão*/
            let snackbarToClose = document.getElementsByClassName('snackbar_showimages')
            snackbarToClose[0].classList.remove('snackbar_showimagesOpen');
        
            if(window.innerWidth < 980){
                navPanelToggle.style.cssText = ''
            }
    
            document.body.style.cssText = 'overflow: auto';
            flagImagesHaqntoAberto = false;
            isMouseover = true;
        }
    
        let currentImageHaQnto = Number
        let openSnakbarImagesLivro=function(e){
            let snackbarToOpen = document.getElementsByClassName("snackbar_showimages");
            checkMouseOverContainersHaQnto();
            setupSliderHaQnto();
            flagImagesHaqntoAberto = true;
            document.body.style.cssText = 'overflow: hidden';
            navPanelToggle.style.cssText = 'display: none';
            
            if (e==1){
                document.getElementById('container_images').childNodes[1].style="display:flex;flex-direction: column;"
                currentImageHaQnto = 1;
                snackbarToOpen[0].classList.add('snackbar_showimagesOpen');
                document.getElementById('container_images').childNodes[3].style="display:none;"
                document.getElementById('container_images').childNodes[5].style="display:none;"
                window.addEventListener("click", checkIfCanCloseHaQntoImages);
            }
    
            if (e==2){
                document.getElementById('container_images').childNodes[3].style="display:flex;flex-direction: column;"
                currentImageHaQnto = 3;
                snackbarToOpen[0].classList.add('snackbar_showimagesOpen');
                document.getElementById('container_images').childNodes[1].style="display:none;"
                document.getElementById('container_images').childNodes[5].style="display:none;"
                window.addEventListener("click", checkIfCanCloseHaQntoImages);
            }
    
            if(e==3){
                document.getElementById('container_images').childNodes[5].style="display:flex;flex-direction: column;"
                currentImageHaQnto = 5;
                snackbarToOpen[0].classList.add('snackbar_showimagesOpen');
                document.getElementById('container_images').childNodes[1].style="display:none;"
                document.getElementById('container_images').childNodes[3].style="display:none;"
                window.addEventListener("click", checkIfCanCloseHaQntoImages);
            }
        }
    
        let nextFotoHaQnto = function(){
            currentImageHaQnto += 2;
            if(currentImageHaQnto >= 7){
                currentImageHaQnto = 1;
                document.getElementById('container_images').childNodes[3].style="display:none;"
                document.getElementById('container_images').childNodes[5].style="display:none;"
                document.getElementById('container_images').childNodes[1].style="display:flex;flex-direction: column;"
            }
    
            if(currentImageHaQnto == 3){
                document.getElementById('container_images').childNodes[1].style="display:none;"
                document.getElementById('container_images').childNodes[5].style="display:none;"
                document.getElementById('container_images').childNodes[3].style="display:flex;flex-direction: column;"
            }
    
            if(currentImageHaQnto == 5){
                document.getElementById('container_images').childNodes[1].style="display:none;"
                document.getElementById('container_images').childNodes[3].style="display:none;"
                document.getElementById('container_images').childNodes[5].style="display:flex;flex-direction: column;"
            }
        }
    
        let prevFotoHaQnto = function(){
            currentImageHaQnto -= 2;
            if(currentImageHaQnto <= 0){
                currentImageHaQnto = 5;
                document.getElementById('container_images').childNodes[1].style="display:none;"
                document.getElementById('container_images').childNodes[3].style="display:none;"
                document.getElementById('container_images').childNodes[5].style="display:flex;flex-direction: column;"            
            }
    
            if(currentImageHaQnto == 3){
                document.getElementById('container_images').childNodes[1].style="display:none;"
                document.getElementById('container_images').childNodes[5].style="display:none;"
                document.getElementById('container_images').childNodes[3].style="display:flex;flex-direction: column;"
            }
    
            if(currentImageHaQnto == 1){
                document.getElementById('container_images').childNodes[5].style="display:none;"
                document.getElementById('container_images').childNodes[3].style="display:none;"
                document.getElementById('container_images').childNodes[1].style="display:flex;flex-direction: column;"
            }
        }
    
    /* ENVIAR PALAVRA PARA A NUVEM DE PALAVRAS */
        document.getElementById('txt_nuvemDePalavraHaQnto').addEventListener("submit", (e) => {
            e.preventDefault();
    
            document.getElementById('btn_enviarPalavraHaQnto').setAttribute('disabled', 'a');
            document.getElementById('li_btn_nuvemDePalavrasHaQnto').classList.add('borderAnim', 'in');
            
        
            data = Object.fromEntries(new FormData(e.target).entries());
            url = 'https://thiago.oioipio.com/wordcloud';
            
            fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(result => {
                document.getElementById('btn_enviarPalavraHaQnto').removeAttribute('disabled');
                document.getElementById('li_btn_nuvemDePalavrasHaQnto').classList.remove('borderAnim', 'in');
                
                emailenviado();
            }).catch(error => {
                document.getElementById('btn_enviarPalavraHaQnto').removeAttribute('disabled');
                document.getElementById('li_btn_nuvemDePalavrasHaQnto').classList.remove('borderAnim', 'in');
                
                emailnaoenviado();
            })
        })
    
        let emailenviado = function(){
            var form = document.getElementById("participarSnack");
            form.className = "showSucess"; 
            document.getElementById('participarSnack').innerHTML = "<h3>A sua palavra foi enviada</h3><h4>Obrigado pela sua participação! A sua palavra entrará para a nuvem na próxima atualização</h4>"
    
            setTimeout(function(){ 
                form.className = form.className.replace("showSucess", "");   
                resetForm();
            }, 8000);
    
            window.history.pushState('', '', '#form-enviado');
        }
    
        let palavraNaoEnviada = function(){
            let palavraNaoEnviada = document.getElementById('emailenviado');
            let form = document.getElementById("Snackbar");
            form.className = "showFail";
            
            document.getElementById('participarSnack').innerHTML = "<h3>Falha no servidor<h3><h4>Desculpe, infelizmente a palavra não pode ser enviada. Por favor, tente novamente em alguns instantes</h4";
            setTimeout(function(){ 
                form.className = form.className.replace("showFail", "");   
            }, 8000);
        }
    /* FIM DO ENVIAR PALAVRA PARA A NUVEM DE PALAVRAS */
