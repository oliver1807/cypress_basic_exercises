

class AuthenticationElements {
    btnLogin() {
        return cy.get('.login')
    }     
    
    cpLogin() {
        return cy.get('#email')            
    }
    
    cpPass() {
        return cy.get('#passwd')            
    }

    btnLogar() {
        return cy.get('#SubmitLogin > span')
    }

    cpAlertError() {
        return cy.get('div[id="center_column"]>div[class="alert alert-danger"]>ol')
    }    
    	


}

export default AuthenticationElements;