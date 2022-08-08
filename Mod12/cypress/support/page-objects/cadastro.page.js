import {
    faker
} from '@faker-js/faker';
class CadastroPage {
    editCadastro(nome, sobrenome, empresa, pais, end1, end2, cidade, estado, zip, fone, email) {
        nome = faker.name.firstName();
        sobrenome = faker.name.lastName();
        empresa = faker.company.bs();
        pais = 'Brasil';
        end1 = faker.address.streetName();
        end2 = faker.address.buildingNumber();
        cidade = faker.address.cityName();
        estado = 'Santa Catarina';
        zip = faker.address.zipCode('########');
        fone = faker.phone.number('+55 ## ##### ####');
        email = faker.internet.email(nome);
    }
}
export default new CadastroPage()