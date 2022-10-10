const { spy, assert, stub, mock } = require('sinon')
const { Database } = require('./database')
const { UsuariosController } = require('./controller');
const { expect } = require('@jest/globals');

let respostaEsperada
describe('Controller de Usuários', () => {

    beforeAll(()=>{
        respostaEsperada = [
            {
                id: 10,
                nome: 'João Carlos',
                email: 'email@teste.com'
            }
        ]
    })

    it('fake', () => {

        const fakeDatabase = {
            findAll(){
                return respostaEsperada
            }
        }
        
        const controller = new UsuariosController(fakeDatabase)
        const response = controller.getAll()

        expect(response).toBe(respostaEsperada)
    });

    it('spy', () => {
        const findAll = spy(Database, 'findAll')
        const controller = new UsuariosController(Database)
        controller.getAll()

        assert.calledWith(findAll, 'usuarios')
        findAll.restore()
    })

    it('stub', () => {
        const findAll = stub(Database, 'findAll')
        findAll.withArgs('usuarios').returns(respostaEsperada)

        const controller = new UsuariosController(Database)
        const response = controller.getAll()

        assert.calledWith(findAll, 'usuarios')
        expect(response).toEqual(respostaEsperada)

        findAll.restore()

    });

    it('mock', () => {

        const dbMock = mock(Database)
        dbMock.expects('findAll').once().withArgs('usuarios').returns(respostaEsperada)

        const controller = new UsuariosController(Database)
        const response = controller.getAll()

        expect(response).toEqual(respostaEsperada)

        dbMock.verify()
        dbMock.restore()

    });

})