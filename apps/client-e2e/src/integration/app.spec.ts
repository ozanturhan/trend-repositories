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
    cy.visit('http://localhost:4200/')
    cy.intercept({
      method: 'POST',
      url: '/graphql',
    }).as('graphql');
  });

  it('should display application name', () => {
    getHeader().contains('GitHub Trend Repositories');
  });

  it('should filter repositories by language ', () => {
    cy.wait('@graphql');
    const languages = selectLanguage();
    languages.select('PHP').should('have.value', 'PHP');
  });

  it('should filter repositories by date ', () => {
    cy.wait('@graphql');
    const languages = selectDate();
    languages.select('Last month').should('have.value', 'last_month');
  });

  it('should visit next and prev page ', () => {
    cy.wait('@graphql');
    const next = nextPage();
    next.trigger('click');

    cy.wait('@graphql');
    const prev = previousPage();
    prev.trigger('click');
  });

  it('should add a repository to favorites and visit favorites ', () => {
    const starButton = getStarButton();

    starButton.first().trigger('click', { force: true });

    const starFilter = getStarFilterButton();

    starFilter.trigger('click');

    const repository = getRepository();

    expect(repository).exist;
  });
});
