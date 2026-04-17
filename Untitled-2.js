//configuração firebase
const firebaseconfig={
    apikey:"SUA_API_KEY",
    authdomain: "seu dominio",
    projectld:"seu_id"

};
//inicialização
firebaseconfig.initializeapp(firebaseconfig);
const auth=firebaseconfig.auth();

//Função login
function login(){
     const email=document.getElemantbyid("email").value
     const senha=DocumentFragment.getElementById("senha").value;
     const msg=document.getelemantbyid(mensagem).value

     auth.signinwithemailandpassword("email,senha").them(()=>{
          msg.innertexto="login realizado com sucesso!";
          msg.style.color="green";
     }).catch(error=>{
        msg.innertext=error.mensagem;
        msg.styler.color="red"
    })

  }








