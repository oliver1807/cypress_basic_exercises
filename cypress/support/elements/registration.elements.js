class RegistrationElements {
    newEmail(){
        return cy.get('#email_create')
    }

    btnNewLogin(){
       return cy.get('.login') 
    }    
    
    urlScreen(){
        return cy.get('#account-creation')
    }

    cpCustomerName(){
        return cy.get('#customer_firstname')
    }

    cpGenderM(){
        return cy.get('#id_gender1')
    }

    cpGenderF(){
        return cy.get('#id_gender2')
    }

    cpCustomerLatsName(){
        return cy.get('#customer_lastname')
    }

    cpPass(){
        return cy.get('#passwd')
    }

    cpDayBirth(){
       return cy.get('#days') 
    }

    cpMonthBirth(){
        return cy.get('#months') 
     }

     cpYearBirth(){
        return cy.get('#years') 
     }

     cpStreetAddress(){
         return cy.get('#address1')
     }

     cpCityAddress(){
         return cy.get('#city')
     }

     cpIdState(){
         return cy.get('#id_state')
     }

     cpPostCode(){
         return cy.get('#postcode')
     }

     cpNumberMobile(){
         return cy.get('#phone_mobile')
     }

     cpComplementAddress(){
         return cy.get('#address2')
     }


     btnConcluirCadastro(){
         return cy.get('#submitAccount > span')
     }

     cpLogado(){
         return cy.get('.account')
     }

    
}

export default RegistrationElements;