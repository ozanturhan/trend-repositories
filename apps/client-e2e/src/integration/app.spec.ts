import {
  getHeader,
  getRepository,
  getStarButton,
  getStarFilterButton,
  nextPage,
  previousPage,
  selectDate,
  selectLanguage,
} from '../support/app.po';

describe('client', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.intercept({
      method: 'POST',
      url: '/graphql',
    }).as('graphql');
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(5 * 1000);
  });

  it('should display application name', () => {
    getHeader().contains('GitHub Trend Repositories');
  });

  it('should filter repositories by language ', () => {
    const languages = selectLanguage();
    languages.select('PHP').should('have.value', 'PHP');
    cy.wait('@graphql');
  });

  it('should filter repositories by date ', () => {
    const languages = selectDate();
    languages.select('Last month').should('have.value', 'last_month');
    cy.wait('@graphql');
  });

  it('should visit next and prev page ', () => {
    const next = nextPage();

    next.trigger('click');
    cy.wait('@graphql');
    cy.wait(5 * 1000);

    const prev = previousPage();
    prev.trigger('click');
  });

  it('should add a repository to favorites and visit favorites ', () => {
    const starButton = getStarButton();

    starButton.first().trigger('click');

    const starFilter = getStarFilterButton();

    starFilter.trigger('click');

    const repository = getRepository();

    expect(repository).exist;
  });
});
