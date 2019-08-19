import { getGreeting } from '../support/app.po';

describe('pegasus', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to pegasus!');
  });
});
