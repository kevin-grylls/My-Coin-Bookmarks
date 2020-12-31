import { ROUTES, STRINGS } from '../../../src/constants';

describe('Currency', () => {
  it('should render without crash', () => {
    cy.visit(ROUTES.CURRENCY);
  });

  describe('KRW, USD 보기', () => {
    it(`1. 리스트 상단에 'KRW, USD 보기'를 선택할 수 있는 통화 표시 select box가 있고,`, () => {
      cy.getByTestId('select-currency-type').contains(
        STRINGS.FILTER.CURRENCY[0],
      );
      cy.getByTestId('select-currency-type').contains(
        STRINGS.FILTER.CURRENCY[1],
      );
    });

    it(`2. 변경 시 해당 내용으로 API를 다시 호출하여 리스트를 다시 그립니다.`, () => {
      cy.getByTestId('select-currency-type')
        .select(STRINGS.FILTER.CURRENCY[1])
        .wait(1000);
      cy.contains('$');

      cy.getByTestId('select-currency-type')
        .select(STRINGS.FILTER.CURRENCY[0])
        .wait(1000);
      cy.contains('₩');
    });
  });

  describe('10, 30, 50개', () => {
    it(`1. 리스트 상단에 '10, 30, 50개'를 선택할 수 있는 페이지 당 코인 개수 select box가 있고, `, () => {
      cy.getByTestId('select-list-number').contains(
        STRINGS.FILTER.LIST_NUMBER[0],
      );
      cy.getByTestId('select-list-number').contains(
        STRINGS.FILTER.LIST_NUMBER[1],
      );
      cy.getByTestId('select-list-number').contains(
        STRINGS.FILTER.LIST_NUMBER[2],
      );
    });

    it(`select box 변경 시 해당 내용으로 API를 다시 호출하여 리스트를 다시 그립니다.`, () => {
      cy.getByTestId('select-list-number')
        .select(STRINGS.FILTER.LIST_NUMBER[2])
        .wait(1000);

      cy.getByTestId('currency-table').find('tr').should('have.length', 12); // 2 for thead and tfoot

      cy.getByTestId('select-list-number')
        .select(STRINGS.FILTER.LIST_NUMBER[1])
        .wait(1000);

      cy.getByTestId('currency-table').find('tr').should('have.length', 32); // 2 for thead and tfoot

      cy.getByTestId('select-list-number')
        .select(STRINGS.FILTER.LIST_NUMBER[0])
        .wait(1000);

      cy.getByTestId('currency-table').find('tr').should('have.length', 52); // 2 for thead and tfoot
    });
  });

  describe('더보기', () => {
    describe(`리스트 하단의 '더보기'를 클릭하면 API를 호출하여 select box에 설정되어 있는 개수만큼 코인을 더 불러와 표시합니다.`, () => {
      beforeEach(() => {
        cy.visit(ROUTES.CURRENCY);
      });
      describe('50개 더보기', () => {
        it('100개', () => {
          cy.getByTestId('currency-table').find('tr').should('have.length', 52);

          cy.getByTestId('currency-table')
            .find('tr')
            .contains(STRINGS.ADD_BTN)
            .click()
            .wait(1000);

          cy.getByTestId('currency-table')
            .find('tr')
            .should('have.length', 102);
        });
      });

      describe('30개 더보기', () => {
        it('30개', () => {
          cy.getByTestId('select-list-number')
            .select(STRINGS.FILTER.LIST_NUMBER[1])
            .wait(1000);

          cy.getByTestId('currency-table').find('tr').should('have.length', 32);

          cy.getByTestId('currency-table')
            .find('tr')
            .contains(STRINGS.ADD_BTN)
            .click()
            .wait(1000);

          cy.getByTestId('currency-table')
            .find('tr')
            .contains(STRINGS.ADD_BTN)
            .click()
            .wait(1000);

          cy.getByTestId('currency-table').find('tr').should('have.length', 92);
        });
      });

      describe('10개 더보기', () => {
        it('40개', () => {
          cy.getByTestId('select-list-number')
            .select(STRINGS.FILTER.LIST_NUMBER[2])
            .wait(500);

          cy.getByTestId('currency-table').find('tr').should('have.length', 12);

          cy.getByTestId('currency-table')
            .find('tr')
            .contains(STRINGS.ADD_BTN)
            .click()
            .wait(500)
            .click()
            .wait(500)
            .click()
            .wait(500);

          cy.getByTestId('currency-table').find('tr').should('have.length', 42);
        });
      });

      describe(`페이지 초기화 테스트`, () => {
        it('다른 페이지를 갔다오거나 새로고침을 할 경우 기본 설정을 기준으로 리스트를 다시 그립니다.', () => {
          cy.reload();
          cy.getByTestId('currency-table').find('tr').should('have.length', 52);
          cy.contains('₩');
        });
      });
    });
  });
});
