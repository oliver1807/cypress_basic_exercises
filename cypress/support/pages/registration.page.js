/// <reference types="cypress"/>

import RegistrationElements from '../elements/registration.elements'
var reg_element = new RegistrationElements()

const Faker = require('faker')
const uuid = Cypress._.random(1,2)
const rd_month = Cypress._.random(1,12)
const address_l2 = Cypress._.random(1,5)

let user
let general_adrs

before(() => 
{
    user = {
            male_name: Faker.name.firstName('male'),
            female_name: Faker.name.firstName('female'),
            last_name: Faker.name.lastName(),
            email_user: Faker.internet.email(),
            birth_day1: `${Faker.datatype.number({min:1, max:31})}`,
            birth_day2: `${Faker.datatype.number({min:1, max:28})}`,
            birth_day3: `${Faker.datatype.number({min:1, max:30})}`,
            birth_year: `${Faker.datatype.number({min:1970, max:2004})}`
}

{
    general_adrs = {
                    street_adrs: Faker.address.streetAddress(),
                    city_adrs: Faker.address.city(),
                    number_state: `${Faker.datatype.number({min:1, max:53})}`,
                    post_code: `${Faker.datatype.number({min:10000, max:55555})}`,
                    phone_num: Faker.phone.phoneNumberFormat()

                    }
}
  
})


class CadastroClientePage {
    


    inputNewLogin(){
        return reg_element.newEmail().scrollIntoView().should('be.visible')
            .type(`${user.email_user}{enter}`)
            .url().should('include','controller=authentication&back=my-account#account-creation')
    }

    valScreenRegister(){
        return cy.url().should('include','controller=authentication&back=my-account#account-creation')
    }
    
    defSex(){

        if (uuid==1){
           return reg_element.cpCustomerName().type(user.male_name),reg_element.cpGenderM().check()
            
        } else {            
            const gender = faker=>randomElement(['female'])
            return reg_element.cpCustomerName().type(user.female_name),reg_element.cpGenderM().check()
            
        }
    }

    defLastName(){
        return reg_element.cpCustomerLatsName().type(user.last_name)
                
    }

    defPass(){
        return reg_element.cpPass().type('senha123')
    }

    defBirthdate(){
        switch (rd_month) {
            case 1:                
                return reg_element.cpDayBirth().select(user.birth_day1),
                reg_element.cpMonthBirth().select('1'),
                reg_element.cpYearBirth().select(user.birth_year)

            break
            
            case 2:
                return reg_element.cpDayBirth().select(user.birth_day2),
                reg_element.cpMonthBirth().select('2'),
                reg_element.cpYearBirth().select(user.birth_year)

            break
            
            case 3:
                return reg_element.cpDayBirth().select(user.birth_day1),
                reg_element.cpMonthBirth().select('3'),
                reg_element.cpYearBirth().select(user.birth_year)
            break

            case 4:
                return reg_element.cpDayBirth().select(user.birth_day3),
                reg_element.cpMonthBirth().select('4'),
                reg_element.cpYearBirth().select(user.birth_year)
            break

            case 5:
                return reg_element.cpDayBirth().select(user.birth_day1),
                reg_element.cpMonthBirth().select('5'),
                reg_element.cpYearBirth().select(user.birth_year)
            break

            case 6:
                return reg_element.cpDayBirth().select(user.birth_day3),
                reg_element.cpMonthBirth().select('6'),
                reg_element.cpYearBirth().select(user.birth_year)
            break

            case 7:
                return reg_element.cpDayBirth().select(user.birth_day1),
                reg_element.cpMonthBirth().select('7'),
                reg_element.cpYearBirth().select(user.birth_year)
            break

            case 8:
                return reg_element.cpDayBirth().select(user.birth_day1),
                reg_element.cpMonthBirth().select('8'),
                reg_element.cpYearBirth().select(user.birth_year)
            break

            case 9:
                return reg_element.cpDayBirth().select(user.birth_day3),
                reg_element.cpMonthBirth().select('9'),
                reg_element.cpYearBirth().select(user.birth_year)
            break

            case 10:
                return reg_element.cpDayBirth().select(user.birth_day1),
                reg_element.cpMonthBirth().select('10'),
                reg_element.cpYearBirth().select(user.birth_year)
            break

            case 11:
                return reg_element.cpDayBirth().select(user.birth_day3),
                reg_element.cpMonthBirth().select('11'),
                reg_element.cpYearBirth().select(user.birth_year)
            break

            case 12:
                return reg_element.cpDayBirth().select(user.birth_day1),
                reg_element.cpMonthBirth().select('12'),
                reg_element.cpYearBirth().select(user.birth_year)
            break
        }
    }

    defBasicAddress(){
        return reg_element.cpStreetAddress().type(general_adrs.street_adrs),
        reg_element.cpCityAddress().type(general_adrs.city_adrs),
        reg_element.cpIdState().select(general_adrs.number_state),
        reg_element.cpPostCode().type(general_adrs.post_code),
        reg_element.cpNumberMobile().type(general_adrs.phone_num)

    }

    defComplementAddress(){
        switch (address_l2)
          {
            case 1:
                 var comp_l2 = 'Apartment'
            break

            case 2:
                var comp_l2 = 'suite'
            break

            case 3:
                var comp_l2 = 'Unit'
            break

            case 4:
                var comp_l2 = 'buiding'
            break

            case 5:
                var comp_l2 = 'floor'
            break
          }

          return reg_element.cpComplementAddress().type(comp_l2)
    }

    finalizarCadastro(){
        return reg_element.btnConcluirCadastro().click()        
    }

    confirmRegister(){
        return reg_element.cpLogado().contains(user.last_name)
    }
    
}




export default CadastroClientePage;