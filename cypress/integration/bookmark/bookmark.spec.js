import { ROUTES, STRINGS } from '../../../src/constants';

describe('Bookmark', () => {
  let id;

  //   beforeEach(() => {
  //     cy.visit(ROUTES.CURRENCY);
  //     cy.getByTestId('currency-table');
  //     cy.getByTestId('bookmark-add').eq(0).click();
  //     cy.getByTestId('currency-table')
  //       .find('tbody')
  //       .find('tr')
  //       .find('td')
  //       .eq(1)
  //       .invoke('text')
  //       .then((text) => {
  //         id = String(text).toLowerCase();
  //         cy.visit(`${ROUTES.DETAILS}/${id}`);
  //       });
  //   });

  afterEach(() => {
    localStorage.clear();
  });

  it('각 코인 이름을 클릭하면 코인 상세 페이지로 이동합니다.', () => {
    cy.visit(ROUTES.CURRENCY);
    cy.getByTestId('currency-table');
    cy.getByTestId('bookmark-add').eq(0).click();
    cy.getByTestId('currency-table')
      .find('tbody')
      .find('tr')
      .find('td')
      .eq(1)
      .invoke('text')
      .then((text) => {
        id = String(text).toLowerCase();
        cy.visit(`${ROUTES.DETAILS}/${id}`).wait(1000);
      });
  });

  it('코인 이름 옆 북마크 표시를 클릭하면 북마크가 해제되었다는 Toast가 표시되고, 해당 코인이 리스트에서 삭제됩니다.', () => {
    cy.visit(ROUTES.CURRENCY);
    cy.getByTestId('currency-table');
    cy.getByTestId('bookmark-add').eq(0).click().wait(200);
    cy.getByTestId('toast-popup').contains(STRINGS.BOOKMARK_MSG[0]);
    cy.visit(ROUTES.BOOKMARK);
    cy.getByTestId('currency-table');
    cy.getByTestId('bookmark-add').eq(0).click().wait(200);
    cy.getByTestId('toast-popup').contains(STRINGS.BOOKMARK_MSG[1]);
  });
});
