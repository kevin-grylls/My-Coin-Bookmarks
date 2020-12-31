import React from 'react';
import { useParams } from 'react-router-dom';
import { Layout, Wrapper, Section } from '../Home/Style';
import { FiltersWrapper, Select } from '../Currency/Style';
import { Star } from '../../components/Table/Style';
import {
  Title,
  Table,
  TableWrapper,
  DescBtn,
  DescContent,
  CalculatorWrapper,
  UtilityDiv,
  ContentWrapper,
  Text,
} from './Style';
import { STRINGS } from '../../constants';
import { formatter } from '../../helpers';
import { useDetails } from '../../hooks';

export function Details() {
  const { details, open, setOpen }: any = useDetails(useParams());

  const {
    id,
    symbol,
    name,
    market_cap_rank,
    market_data: { market_cap },
    localization,
    description,
    image: { thumb },
    links: { homepage },
  } = details;

  console.log(details);

  const currencyName = localization.ko;
  const currencyDesc = description.ko;

  return (
    <Layout>
      <Wrapper>
        <FiltersWrapper>
          <Title>
            <Star className={'fa fa-star'} />
            <img src={thumb} />
            {currencyName} ({symbol.toUpperCase()})
          </Title>
          <Select marginLeft={'auto'}>
            {STRINGS.FILTER.CURRENCY.map((name: string) => (
              <option key={`view-type-${name}`} value={name}>
                {name}
              </option>
            ))}
          </Select>
        </FiltersWrapper>
        <Section>
          <TableWrapper>
            <Table>
              <tbody>
                <tr>
                  <th style={{ width: '20%' }}>시가총액 Rank</th>
                  <td>Rank #{market_cap_rank}</td>
                </tr>
                <tr>
                  <th>웹사이트</th>
                  <td>{homepage[0]}</td>
                </tr>
              </tbody>
            </Table>
            <div style={{ width: '50%' }}>
              <ContentWrapper>
                <div style={{ width: '25%', marginLeft: 'auto' }}>
                  <div style={{ textAlign: 'right' }}>
                    <Text fontSize={'sm'} color={'black'} bold={true}>
                      시가 총액
                    </Text>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <Text fontSize={'xs'}>24시간 거래대금</Text>
                  </div>
                </div>
                <div style={{ marginLeft: '10px' }}>
                  <div>
                    <Text color={'red'} bold={true}>
                      0.8%
                    </Text>
                  </div>
                  <div>
                    <Text color={'red'} fontSize={'xxs'}>
                      0.1%
                    </Text>
                  </div>
                </div>
              </ContentWrapper>
              <ContentWrapper>
                <div style={{ width: '25%' }}>
                  <div style={{ textAlign: 'right' }}>
                    <Text fontSize={'xs'} color={'black'}>
                      시가 총액
                    </Text>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <Text fontSize={'xs'} color={'black'}>
                      24시간 거래대금
                    </Text>
                  </div>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <div style={{ textAlign: 'right' }}>
                    <Text fontSize={'xs'} color={'black'}>
                      시가 총액
                    </Text>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <Text fontSize={'xs'} color={'black'}>
                      24시간 거래대금
                    </Text>
                  </div>
                </div>
              </ContentWrapper>
            </div>
          </TableWrapper>
        </Section>
        <UtilityDiv padding={'20px 0 0 0'} />
        <Section>
          <CalculatorWrapper>
            <UtilityDiv>
              <span>가격 계산</span>
            </UtilityDiv>
            <ContentWrapper>
              <div
                style={{
                  width: '10%',
                  border: 'solid 1px #808080',
                  verticalAlign: 'middle',
                  lineHeight: '32px',
                  paddingInlineStart: '5px',
                }}
              >
                BTC
              </div>

              <input type="text" style={{ border: 'none' }} />

              <div
                style={{
                  width: '10%',
                  lineHeight: '32px',
                  textAlign: 'center',
                }}
              >
                &#8646;
              </div>
              <div
                style={{
                  width: '10%',
                  border: 'solid 1px #808080',
                  verticalAlign: 'middle',
                  lineHeight: '32px',
                  paddingInlineStart: '5px',
                }}
              >
                KRW
              </div>

              <input type="text" style={{ border: 'none' }} />
            </ContentWrapper>

            <UtilityDiv height={'20px'} />
          </CalculatorWrapper>
        </Section>
        <Section>
          <DescBtn onClick={() => setOpen(true)}>설명보기 &#9660;</DescBtn>
          {open && <DescContent>{currencyDesc}</DescContent>}
        </Section>
      </Wrapper>
    </Layout>
  );
}
