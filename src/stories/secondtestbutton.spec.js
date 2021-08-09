/* eslint-disable no-undef */
import { mount } from "@cypress/vue";
import { composeStories } from "@storybook/testing-vue";

import * as stories from './Button.stories.js'

const { Primary } = composeStories(stories)

describe('Second Button Test', () => {
  it('Primary btn', () => {
    mount(Primary());
    cy.get('button').should('exist')
  })
})