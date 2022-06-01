/// <reference types="cypress"  />

import AuthenticationPage from '../pages/authentication.page'
var auth_page = new AuthenticationPage()



Given(/^que acesso a tela de login$/, () => {
	auth_page.acessarLogin()		
});

When(/^informo o "([^"]*)" e "([^"]*)" invalidos$/, (login_error,pass_error) => {
	var lg_error = login_error
	var pg_error = pass_error

	auth_page.inputLoginError(lg_error)
	auth_page.inputPassError(pg_error)
	auth_page.clkLogin()
		
});

Then(/^sistema retorna a seguinte "([^"]*)"$/, (msg_error) => {
	
	var ms_error = msg_error

	auth_page.msgErrorLogin(ms_error)	
	
});