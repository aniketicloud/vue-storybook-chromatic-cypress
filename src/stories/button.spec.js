/* eslint-disable no-undef */
/// <reference types="cypress" />

import { mount } from "@cypress/vue";
import Button from './Button.vue';

it('Button', () => {

  mount(Button, {
    propsData: {
      label: "Secondary"
    }
  })

  cy.get('button').contains('Secondary').click();
})