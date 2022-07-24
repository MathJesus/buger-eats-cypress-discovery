var faker = require('faker')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: '09752090435',
            email: faker.internet.email(firstName),
            whatsapp: '82987066578',
            address: {
                postalCode: '02209090',
                street: 'Rua Arauaca',
                number: '35',
                details: 'ap 121',
                district: 'Vila Gustavo',
                city_state: 'Sao Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}