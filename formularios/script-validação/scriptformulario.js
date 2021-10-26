function mostrarsenha(){
    var senha = document.getElementById("senha")
    var confirmarsenha = document.getElementById("confirmarsenha")
    if(senha.getAttribute("type") == "password") {
        senha.setAttribute("type", "text");
        confirmarsenha.setAttribute("type", "text");
    }else {
        senha.setAttribute("type", "password");
        confirmarsenha.setAttribute("type", "password");
    }
}
function validaraluno(){
    var nome = document.getElementById("nome").value.trim();
    var sobrenome = document.getElementById("sobrenome").value.trim();
    var email= document.getElementById("email").value.trim();
    var senha = document.getElementById("senha").value.trim();
    var confirmarsenha = document.getElementById("confirmarsenha").value.trim();
    var termouso = document.getElementById("termouso");
    document.getElementById("tela-cadastro").style.height = "1020px"
    
    if (nome.length < 3){
        document.getElementById('erronome').innerHTML = `<p>ERRO! Nome inválido</p>`
        document.getElementById("nome").style.border = "solid 1px red"
        document.getElementById("iconerronome").style.display = "block"
    }
    if (sobrenome == ""){
        document.getElementById('errosobrenome').innerHTML = `<p>ERRO! Sobrenome inválido</p>`
        document.getElementById("sobrenome").style.border = "solid 1px red"
        document.getElementById("iconerrosobren").style.display = "block"
    }
    if (email == ""){
        document.getElementById('erroemail').innerHTML = `<p>ERRO! E-mail inválido</p>`
        document.getElementById("email").style.border = "solid 1px red"
        document.getElementById("iconerroemail").style.display = "block"
    }
    if (senha.length < 5){
        document.getElementById('errosenha').innerHTML = `<p>ERRO! Senha inválida</p>`
        document.getElementById("senha").style.border = "solid 1px red"
        document.getElementById("iconerrosenha").style.display = "block"
    }
    if (termouso.checked == false){
        document.getElementById("errotermouso").innerHTML = `<p>Aceite os termos de uso para continuar</p>`
    }
   if (confirmarsenha != senha){
        document.getElementById('erroconfirmarsenha').innerHTML = `<p>ERRO! Senhas diferentes</p>`
        document.getElementById("confirmarsennha").style.border = "solid 1px red"
        document.getElementById("iconerroconfsenha").style.display = "block"
    }
    if(nome.length > 3 && sobrenome != "" && email != "" && senha.length > 5 &&
    confirmarsenha == senha && termouso.checked == true) {
        alert("CADASTRO REALIZADO COM SUCESSO")
        window.location.href = "../paginas/login.html";
    }
}
function validarempresa() {
    var nome = document.getElementById("nome").value.trim();
    var cnpj = document.getElementById("cnpj").value.trim();
    var email = document.getElementById("email").value.trim();
    var senha = document.getElementById("senha").value.trim();
    var confirmarsenha = document.getElementById("confirmarsenha").value.trim();
    var termouso = document.getElementById("termouso");
    document.getElementById("tela-empresa").style.height = "1150px"
    
    if (nome == ""){
        document.getElementById('erronome').innerHTML = `<p>ERRO! Nome da empresa inválido</p>`
        document.getElementById("nome").style.border = "solid 1px red"
        document.getElementById("iconerronome").style.display = "block"
    }
    if (cnpj == "" || cnpj.length < 14 || cnpj.length > 14){
        document.getElementById('errocnpj').innerHTML = `<p>ERRO! CNPJ inválido</p>`
        document.getElementById("cnpj").style.border = "solid 1px red"
        document.getElementById("iconerrocnpj").style.display = "block"
    }
    if (email == ""){
        document.getElementById('erroemail').innerHTML = `<p>ERRO! E-mail inválido</p>`
        document.getElementById("email").style.border = "solid 1px red"
        document.getElementById("iconerroemail").style.display = "block"
    }
    if (senha == "" || senha.length < 5){
        document.getElementById('errosenha').innerHTML = `<p>ERRO! Senha inválida</p>`
        document.getElementById("senha").style.border = "solid 1px red"
        document.getElementById("iconerrosenha").style.display = "block"
    }
    if (termouso.checked == false){
        document.getElementById("errotermouso").innerHTML = `<p>Aceite os termos de uso para continuar</p>`
    }    
    if (confirmarsenha != senha){
        document.getElementById('erroconfirmarsenha').innerHTML = `<p>ERRO! Senhas diferentes</p>`
        document.getElementById("confirmarsennha").style.border = "solid 1px red"
        document.getElementById("iconerroconfsenha").style.display = "block"
    }
    if(nome.length > 3 && email != "" &&  cnpj == 14 && senha.length > 5 &&
    confirmarsenha == senha && termouso.checked == true) {
        alert("CADASTRO REALIZADO COM SUCESSO")
        window.location.href = "../paginas/login.html";
    }
}
function validarprofessor() {
    var nome = document.getElementById("nome").value.trim();
    var sobrenome = document.getElementById("sobrenome").value.trim();
    var email = document.getElementById("email").value.trim();
    var curso = document.getElementById("cursograduacao").value.trim();
    var senha = document.getElementById("senha").value.trim();
    var confirmarsenha = document.getElementById("confirmarsenha").value.trim();
    var termouso = document.getElementById("termouso");
    document.getElementById("cadastro-professor").style.height = "1150px"

    if(nome == "" || nome.length < 3){
        document.getElementById("erronome").innerHTML = `<p>ERRO! Nome inválido</p>`
        document.getElementById("nome").style.border = "solid 1px red"
        document.getElementById("iconerronome").style.display = "block"
    }
    if (sobrenome == ""){
        document.getElementById("errosobrenome").innerHTML = `<p>ERRO! Sobrenome inválido</p>`
        document.getElementById("sobrenome").style.border = "solid 1px red"
        document.getElementById("iconerrosobren").style.display = "block"
    }
    if (email == ""){
        document.getElementById("erroemail").innerHTML = `<p>ERRO! E-mail inválido</p>`
        document.getElementById("email").style.border = "solid 1px red"
        document.getElementById("iconerroemail").style.display = "block"
    }
    if (curso == "") {
        document.getElementById("errocursograduacao").innerHTML = `<p>ERRO! Curso inválido</p>`
        document.getElementById("cursograduacao").style.border = "solid 1px red"
        document.getElementById("iconerrograduacao").style.display = "block"
    }
    if (senha == "" || senha.length < 5){
        document.getElementById("errosenha").innerHTML = `<p>ERRO! Senha inválida</p>`
        document.getElementById("senha").style.border = "solid 1px red"
        document.getElementById("iconerrosenha").style.display = "block"
    }
    if (termouso.checked == false){
        document.getElementById("errotermouso").innerHTML =`<p>Aceite os termos de uso para continuar</p>`
    }
    if (confirmarsenha != senha){
        document.getElementById("erroconfirmarsenha").innerHTML = `<p>ERRO! Senhas diferentes</p>`
        document.getElementById("confirmarsenha").style.border = "solid 1px red"
        document.getElementById("iconerroconfsenha").style.display = "block"
    }
    if (nome.length > 3 && sobrenome != "" && email != "" && curso != "" && senha.length > 5 &&
        confirmarsenha == senha && termouso.checked == true){
        alert("CADASTRO REALIZADO COM SUCESSO")
        window.location.href = "../paginas/login.html";
    }
}
function validarlogin() {
    var email = document.getElementById("email").value.trim();
    var senha = document.getElementById("senha").value.trim();
    document.getElementById("tela-login").style.height = "630px"

    if (email == ""){
        document.getElementById('erroemail').innerHTML = `<p>ERRO! E-mail inválido</p>`
        document.getElementById("email").style.border = "solid 1px red"
        document.getElementById("iconerroemail").style.display = "block"
    }
    if (senha == ""){
        document.getElementById("errosenha").innerHTML = `<p>ERRO! Senha inválida</p>`
        document.getElementById("senha").style.border = "solid 1px red"
        document.getElementById("iconerrosenha").style.display = "block"
    }
    if (email != "" && senha != ""){
        window.location.href = "#";
    }

}
function validarsenhanova(){
    var email = document.getElementById("email").value.trim();
    var senha = document.getElementById("senha").value.trim();
    var confirmarsenha = document.getElementById("confirmarsenha").value.trim();
    document.getElementById("tela-recuperarsenha").style.height = "680px"

    if (email == ""){
        document.getElementById("erroemail").innerHTML = `<p>ERRO! E-mail inválido</p>`
        document.getElementById("email").style.border = "solid 1px red"
        document.getElementById("iconerroemail").style.display = "block"
    }
    if (senha == "" || senha.length < 5){
        document.getElementById("errosenha").innerHTML = `<p>ERRO! Senha inválida</p>`
        document.getElementById("senha").style.border = "solid 1px red"
        document.getElementById("iconerrosenha").style.display = "block"
    }
    if (confirmarsenha != senha){
        document.getElementById("erroconfirmarsenha").innerHTML = `<p>ERRO! Senhas diferentes</p>`
        document.getElementById("confirmarsenha").style.border = "solid 1px red"
        document.getElementById("iconerroconfsenha").style.display = "block"
    }
    if (email != "" && senha.length > 5 && confirmarsenha == senha ){
        alert("SENHA ALTERADA COM SUCESSO")
        window.location.href = "../paginas/login.html";
    }
}