import { ROUTES, STRINGS } from '../../../src/constants';

describe('Common', () => {
  it('금액은 세 자리마다 쉼표(,)로 구분하고', () => {
    cy.visit(ROUTES.CURRENCY);

    cy.getByTestId('currency-table')
      .contains('₩')
      .invoke('text')
      .then((text) => {
        expect(text.trim()).to.contain(',');
      });
  });

  it('소수점 2자리까지 표시됩니다.', () => {
    cy.visit(`${ROUTES.DETAILS}/bitcoin`).wait(1000);
    const regExp = new RegExp(/^[0-9]{1,3}(,[0-9]{3})*(.[0-9]{1,2})?$/);
    cy.getByTestId('currency-text')
      .invoke('text')
      .then((text) => {
        // ₩23,456,34.00
        expect(regExp.test(text.replace('₩', ''))).to.equal(true);
      });
  });

  it('KRW일 경우 ₩, USD일 경우 $가 금액앞에 붙습니다.', () => {
    cy.visit(`${ROUTES.DETAILS}/bitcoin`).wait(1000);

    cy.getByTestId('currency-text')
      .invoke('text')
      .then((text) => {
        // ₩23,456,34.00
        expect(text.startsWith('₩')).to.equal(true);
      });

    cy.getByTestId('details-currency-type-select')
      .select(STRINGS.FILTER.CURRENCY[1])
      .wait(500);

    cy.getByTestId('currency-text')
      .invoke('text')
      .then((text) => {
        // ₩23,456,34.00
        expect(text.startsWith('$')).to.equal(true);
      });
  });

  it.skip('퍼센테이지(%) 표기는 상승일 경우 빨간색,', () => {});

  it.skip('하락일 경우 -를 붙인 파란색으로 표기합니다.', () => {});

  it('API 호출 시 Loader 컴포넌트가 호출되어 로딩중임이 표시되고, 응답 완료 시 로딩중 표시가 사라져야 합니다.', () => {
    cy.visit(ROUTES.CURRENCY);
    cy.getByTestId('select-list-number').select(STRINGS.FILTER.LIST_NUMBER[2]);
    cy.getByTestId('spinner').should('be.visible').wait(1000);
    cy.getByTestId('spinner').should('not.exist');
  });

  it('가상자산 시세 목록, 북마크 목록, 코인 상세 페이지는 개별 URL이 부여되어 직접 URL을 타이핑해도 접근할 수 있어야 합니다.', () => {
    cy.visit(ROUTES.HOME).wait(500);
    cy.visit(ROUTES.BOOKMARK).wait(500);
    cy.visit(ROUTES.CURRENCY).wait(500);
    cy.visit(`${ROUTES.DETAILS}/bitcoin`).wait(500);
  });

  it('코인 상세 페이지는 각 코인 별로도 구분되어 접근이 가능해야 합니다.', () => {
    cy.visit(`${ROUTES.DETAILS}/bitcoin`).wait(1000);
    cy.visit(`${ROUTES.DETAILS}/ethereum`).wait(1000);
    cy.visit(`${ROUTES.DETAILS}/eos`).wait(1000);
    cy.visit(`${ROUTES.DETAILS}/tezos`).wait(1000);
  });
});
