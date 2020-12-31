import { ROUTES } from '../../../src/constants';

describe('Home', () => {
  it('should render without crash', () => {
    cy.visit(ROUTES.HOME);
  });
});
