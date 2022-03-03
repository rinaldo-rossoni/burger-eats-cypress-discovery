var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {
    deliver: function( {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            nome: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '61992572214',
            endereco: {
                cep: '72010050',
                rua: 'Qd C 5',
                numero: '0',
                complemento: 'lote 6 apto 305',
                bairro: 'Taguatinga Centro',
                cidade_uf: 'Brasília/DF'
            },
            metodo_entrega: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data 
    })
}