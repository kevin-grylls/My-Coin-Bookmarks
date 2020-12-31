import { ROUTES, STRINGS } from '../../../src/constants';

describe('각 코인 이름을 클릭하면 코인 상세 페이지로 이동합니다.', () => {
  beforeEach(() => {
    cy.visit(ROUTES.CURRENCY);
  });

  it('Bitcoin', () => {
    cy.getByTestId('currency-table').contains('a', 'Bitcoin').click();
  });
});

describe('Details', () => {
  beforeEach(() => {
    localStorage.clear();
    cy.visit(`${ROUTES.DETAILS}/bitcoin`).wait(200);
  });

  it(`1. 코인 이름 옆 북마크 표시를 클릭하면 북마크가 추가되었다는 Toast가 표시되고,`, () => {
    cy.getByTestId('bookmark-add').click().wait(200);
    cy.getByTestId('toast-popup').contains(STRINGS.BOOKMARK_MSG[0]);
  });

  it('2. 빈 별이 아닌 채워진 별로 북마크 표시가 변경됩니다.', () => {
    cy.getByTestId('bookmark-add').click();
    cy.getByTestId('bookmark-add').should(
      'have.css',
      'color',
      'rgb(255, 215, 0)',
    );
  });

  it(`3. 반대의 경우는 북마크가 해제되었다는 Toast가 표시되고,`, () => {
    cy.getByTestId('bookmark-add').click();
    cy.getByTestId('bookmark-add').click();
    cy.getByTestId('toast-popup').contains(STRINGS.BOOKMARK_MSG[1]);
  });

  it(`4. 채워진 별에서 빈 별로 변경됩니다.`, () => {
    cy.getByTestId('bookmark-add').click();
    cy.getByTestId('bookmark-add').click();
    cy.getByTestId('bookmark-add').should(
      'have.css',
      'color',
      'rgb(232, 232, 232)',
    );
  });

  it('5. 코인 설명은 설명보기를 클릭하면 표시', () => {
    cy.getByTestId('show-desc-content').should('not.exist');
    cy.getByTestId('show-desc-btn').click();
    cy.getByTestId('show-desc-content').should('be.visible').wait(200);
  });

  it(`6. select box 변경 시 해당 내용으로 금액 표시와 가격 계산 통화가 변경됩니다.`, () => {
    cy.getByTestId('details-currency-type-select').select(
      STRINGS.FILTER.CURRENCY[1],
    );
    cy.getByTestId('currency-text').contains('$');
    cy.getByTestId('currency-type-title').contains('USD');
    cy.getByTestId('details-currency-type-select').select(
      STRINGS.FILTER.CURRENCY[0],
    );
    cy.getByTestId('currency-text').contains('₩');
    cy.getByTestId('currency-type-title').contains('KRW');
  });

  it('7. Cryptocurrency는 숫자와 마침표(.)만 입력 가능하며, 소수점은 최대 8자리까지만 입력 가능합니다.', () => {
    const sample = '0123!!45.%%12345678910';
    const target = '12345.12345678';

    cy.getByTestId('crypto-input').type(sample);
    cy.getByTestId('crypto-input')
      .invoke('val')
      .then((value) => {
        expect(value).to.equal(target);
      });
  });

  it('8. Currency 입력은 숫자만 가능하며 KRW는 0으로 시작할 수 없습니다.', () => {
    const sample = '0123!!45.%%12345678910';
    const target = '1,234,512,345,678,910';

    cy.getByTestId('currency-input').type(sample);
    cy.getByTestId('currency-input')
      .invoke('val')
      .then((value) => {
        expect(value).to.equal(target);
      });
  });
});
