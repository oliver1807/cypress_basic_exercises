/// <reference types="cypress"  />


import AuthenticationElements from '../elements/authentication.elements'

var auth_elements = new AuthenticationElements()

class AuthenticationPage {
    acessarLogin() {
        return cy.visit('/').then(()=> {
            auth_elements.btnLogin().click()
            .url().should('include','controller=authentication&back=my-account')
        })       
    }

    inputLoginError(lg_error) {
        return auth_elements.cpLogin().type(lg_error)
    }

    inputPassError(pass_error) {
        return auth_elements.cpPass().type(pass_error)
    }

    clkLogin(){
        return auth_elements.btnLogar().click()
    }

    msgErrorLogin(ms_error) {            
        return auth_elements.cpAlertError().then((ms_invalid_login) => {
            let textFormat = ms_invalid_login.text()
        .replace('\n','').replace('\t','').trim()
            expect(textFormat).to.eql(ms_error)
        })
    }

}


export default AuthenticationPage;