import { mount } from "@cypress/vue";
import HelloWorld from "./HelloWorld.vue";

describe('Component Hello World', () => {
  it('check the msg from component', () => {
    const msg = 'Meu teste de componente'
    mount(HelloWorld){
      propsData:  { msg: msg }
    }
    cy.get('h1').should('have.text', msg);
  });
});