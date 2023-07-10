describe('get api user tests', () => {

    let accessToken = '31f82a297a3554662ea9101bcc173ed6f68ccdbcf0123afd63713269feb5460a'

    it('get users test', () => {

        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v1/users', 
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
            url : 'https://gorest.co.in/public/v1/users/2861469', 
            headers : {
                'authorization' : "Bearer" + accessToken
            }

        }).then((res)=>{
            expect(res.status).to.eq(200)
            expect(res.body.data.name).to.eq('Divjot Khanna')
            expect(res.body.data.email).to.eq('khanna_divjot@brakus-rippin.example')
            expect(res.body.data.gender).to.eq('female')
            expect(res.body.data.status).to.eq('active')
   
            })
    })
})
