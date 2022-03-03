import signaupPage from '../pages/signaupPagePage'
import signaupPageFactory from '../factories/signaupPageFactory'
import { it } from 'faker/lib/locales'

describe('cadastro', () => {

    /*     beforeEach(function() {
            cy.fixture('deliver').then((d)=> {
                this.deliver = d
            })
        }) */

    it('usuário deve se tornar um entregador', function () {

        var deliver = signaupPageFactory.deliver()

        signaupPage.go()
        signaupPage.fillForm(deliver)
        signaupPage.submit()

        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornaremos o contato.'
        signaupPage.modalContentShouldBe(expectedMessage)
    })

    it('CPF incorreto', function () {

        var deliver = signaupPageFactory.deliver()

        deliver.cpf = '049930778AA'

        signaupPage.go()
        signaupPage.fillForm(deliver)
        signaupPage.submit()
        signaupPage.alertMessageSouldBe('Oops! CPF inválido')

    })

    it('email incorreto', function () {

        var deliver = signaupPageFactory.deliver()

        deliver.email = 'user.com.br'

        signaupPage.go()
        signaupPage.fillForm(deliver)
        signaupPage.submit()
        signaupPage.alertMessageSouldBe('Oops! email com formato inválido')

    })

    context('Campos Obrigatórios', function () {

        const messages = [
            { field: 'nome', output: 'É necessário informar o nome' },
            { field: 'cpf', output: 'É necessário informar o CPF' },
            { field: 'email', output: 'É necessário informar o email' },
            { field: 'cep', output: 'É necessário informar o CEP' },
            { field: 'endereço', output: 'É necessário informar o endereço' },
            { field: 'método de entrega', output: 'Selecione o métido de entrega' },
            { field: 'cnh', output: 'Adicione uma foto da sua CNH' }
        ]

        BeforeUnloadEvent(function () {
            signaupPage.go()
            signaupPage.submit()
        })

        messages.forEach(function (msg) {
            it(`${msg.field} is required`, function () {
                signaupPage.alertMessageSouldBe(msg.output)
            })
        })

    })

})