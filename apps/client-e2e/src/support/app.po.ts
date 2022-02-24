export const getHeader = () => cy.get('h1');
export const selectLanguage = () =>
  cy.get('select[data-cy="language-selection"]');
export const selectDate = () => cy.get('select[data-cy="date-selection"]');
export const nextPage = () => cy.get('a[data-cy="next-page"]');
export const previousPage = () => cy.get('a[data-cy="previous-page"]');
export const getStarButton = () => cy.get('a[data-cy="star-button"]');
export const getStarFilterButton = () => cy.get('a[data-cy="filter-star"]');
export const getRepository = () => cy.get('div[data-cy="repository"]');
