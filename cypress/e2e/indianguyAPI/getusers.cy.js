/// <reference types ="Cypress" />

describe('get api user tests', () => {

    let accessToken = '31f82a297a3554662ea9101bcc173ed6f68ccdbcf0123afd63713269feb5460a'

    it('get users test', () => {

        cy.request({

            method : 'GET',
            url : 'https://gorest.co.in/public-api/users', 
            headers : {
                'authorization' : "Bearer" + accessToken
            }




        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.meta.pagination.limit).to.eq(10)
   
            })

    })

    it('get user by id test', () => {

        cy.request({

            method : 'GET',
            url : 'https://gorest.co.in/public-api/users/1770', //this user works, the ones in the description, don't
            headers : {
                'authorization' : "Bearer" + accessToken
            }




        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data.name).to.eq('Prof. Ambar Arora')
   
            })

    })





})
