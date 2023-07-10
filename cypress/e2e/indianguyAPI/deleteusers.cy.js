
describe('put user request', () => {
    let randomText =""
    let textEmail= ""
    let randomTextUpdate =""
    let textEmailUpdate= ""

    it('update users test', () => {

        var pattern ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < 10; i++)
        randomText+=pattern.charAt(Math.floor(Math.random() * pattern.length));
        textEmail = randomText + '@gmail.com'

        var patternUpdate ="1234567890abcdefghijklmnopqrstuvwxyz"
        for (var i = 0; i < 10; i++)
        randomTextUpdate+=patternUpdate.charAt(Math.floor(Math.random() * patternUpdate.length));
        textEmailUpdate = randomTextUpdate + '@gmail.com'

        //Create the user
        cy.request({
            method : 'POST',
            url : 'https://gorest.co.in/public/v1/users', 
            headers : {
                'authorization' : "Bearer 94e12646ab46330c9eafc225cce6965736b66592aed93f8367dd3a1ea8bb6f8d" //I am using it this way because for some reason it responds with authentication err if I use a const for the token
            },
            body:{ 
                "name":"CristinaPost",
                "email": textEmail,
                "gender":"female",
                "status":"active"
            }

        }).then((resp)=>{
            expect(resp.status).to.eq(201)
            expect(resp.body.data).has.property('name', 'CristinaPost')
            expect(resp.body.data).has.property("email", textEmail)
            expect(resp.body.data).has.property("gender", 'female')
            expect(resp.body.data).has.property("status", 'active')
   
            }).then((resp) =>{
                const userId = resp.body.data.id 
                cy.log("user id is: "+ userId)
                //update the user 
                cy.request({
                    method: 'PUT',
                    url : 'https://gorest.co.in/public/v1/users/'+userId,
                    headers: {
                        'authorization' : "Bearer 94e12646ab46330c9eafc225cce6965736b66592aed93f8367dd3a1ea8bb6f8d" 
                    },
                    body:{ 
                        "name":"CristinaPUT",
                        "email": textEmailUpdate,
                        "gender":"female",
                        "status":"active"
                    }


                }).then((resp) =>{
                    expect(resp.status).to.eq(200) //successful Put req responds with 200
                    expect(resp.body.data).has.property('id', userId)
                    expect(resp.body.data).has.property('name', 'CristinaPUT')
                    expect(resp.body.data).has.property("email", textEmailUpdate)
                    expect(resp.body.data).has.property("gender", 'female')
                    expect(resp.body.data).has.property("status", 'active') //after this, we can add a GET req just to verify that everything is ok.
                })
                //get the user
                cy.request({
                    method: 'GET',
                    url : 'https://gorest.co.in/public/v1/users/'+userId,
                    headers: {
                        'authorization' : "Bearer 94e12646ab46330c9eafc225cce6965736b66592aed93f8367dd3a1ea8bb6f8d" 
                    }


                }).then((resp) =>{
                    expect(resp.status).to.eq(200)
                    expect(resp.body.data).has.property('id', userId)
                    expect(resp.body.data).has.property('name', 'CristinaPUT')
                    expect(resp.body.data).has.property("email",textEmailUpdate)
                    expect(resp.body.data).has.property("gender", 'female')
                    expect(resp.body.data).has.property("status", 'active')
                })
                //delete the user
                cy.request({
                    method: 'DELETE',
                    url : 'https://gorest.co.in/public/v1/users/'+userId,
                    headers: {
                        'authorization' : "Bearer 94e12646ab46330c9eafc225cce6965736b66592aed93f8367dd3a1ea8bb6f8d" 
                    }

                }).then((resp)=>{
                    expect(resp.status).to.eq(204)


                })

            })

    })

})