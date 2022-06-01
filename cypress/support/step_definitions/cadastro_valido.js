/// <reference types="cypress"  />

import AuthenticationPage from '../pages/authentication.page'
import CadastroClientePage from '../pages/registration.page' 

var auth_page = new AuthenticationPage()
var cad_page = new CadastroClientePage()


Given(/^que acesso o site Practice Test na pagina de autenticacao$/, () => {
	auth_page.acessarLogin()    
});


When(/^informo meu email para cadastro$/, () => {
	cad_page.inputNewLogin()	
});


And(/^sou redirecionado para tela de cadastro$/, () => {
	cad_page.valScreenRegister()
});

And(/^informo meus dados pessoais$/, () => {
	cad_page.defSex()
	cad_page.defLastName()
	cad_page.defPass()
	cad_page.defBirthdate()
});

And(/^informo meu endereco$/, () => {
	cad_page.defBasicAddress()
	cad_page.defComplementAddress()
});


Then(/^meu cadastro e realizado com sucesso$/, () => {
	cad_page.finalizarCadastro()
	cad_page.confirmRegister()
});