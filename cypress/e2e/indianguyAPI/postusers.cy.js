const dataJson = require('../../fixtures/createuserPOST')

describe('post user request', () => {
    let randomText =""
    let textEmail= ""

    it('create users test', () => {

        var pattern ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < 10; i++)
        randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
        textEmail = randomText + '@gmail.com'

        cy.request({
            method : 'POST',
            url : 'https://gorest.co.in/public/v2/users', 
            headers : {
                'authorization' : "Bearer 94e12646ab46330c9eafc225cce6965736b66592aed93f8367dd3a1ea8bb6f8d" 
            },
            body:{
                "name":dataJson.name,
                "email": textEmail,
                "gender":dataJson.gender,
                "status":dataJson.status
            }

        }).then((resp)=>{
            //cy.log(JSON.stringify(resp))
            expect(resp.status).to.eq(201)
            expect(resp.body).has.property('name', dataJson.name)
            expect(resp.body).has.property("email",textEmail)
            expect(resp.body).has.property("gender",dataJson.gender)
            expect(resp.body).has.property("status",dataJson.status)
   
            }).then((resp) =>{
                const userId = resp.body.id //fails here is the stringify is not commented/deleted
                cy.log("user id is: "+ userId)
                

                cy.request({
                    method: 'GET',
                    url : 'https://gorest.co.in/public/v2/users/'+userId,
                    headers: {
                        'authorization' : "Bearer 94e12646ab46330c9eafc225cce6965736b66592aed93f8367dd3a1ea8bb6f8d" 
                    }


                }).then((resp) =>{
                    expect(resp.status).to.eq(200)
                    expect(resp.body).has.property('id', userId)
                    expect(resp.body).has.property('name', dataJson.name)
                    expect(resp.body).has.property("email",textEmail)
                    expect(resp.body).has.property("gender",dataJson.gender)
                    expect(resp.body).has.property("status",dataJson.status)

                })
                

            })

    })

})