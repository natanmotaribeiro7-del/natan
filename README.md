// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8edUoPoU3XxRPhVbeZToGLsDe7hNn9W0",
  authDomain: "natan-5a665.firebaseapp.com",
  projectId: "natan-5a665",
  storageBucket: "natan-5a665.firebasestorage.app",
  messagingSenderId: "367178686273",
  appId: "1:367178686273:web:4921779d62f14b93e00bc0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
;
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
