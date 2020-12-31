import React, { ChangeEvent } from 'react';
import { useParams } from 'react-router-dom';
import { Spinner, Toast } from '../../components';
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
  CalculatorInput,
} from './Style';
import { STRINGS } from '../../constants';
import { formatter } from '../../helpers';
import {
  useCalculator,
  useDetails,
  useFilter,
  useLoading,
  useStorage,
  useToast,
} from '../../hooks';

export function Details() {
  const { details, open, setOpen, currencyType }: any = useDetails(useParams());
  const { isLoading } = useLoading();
  const { isToast } = useToast();
  const { updateFilter } = useFilter();
  const { bookmark, updateBookmark } = useStorage();
  const { result, getCurrency, getCrypto } = useCalculator();

  const {
    id,
    symbol,
    market_cap_rank,
    market_data: {
      market_cap_change_percentage_24h,
      market_cap_change_24h_in_currency,
      total_volume,
      price_change_percentage_1h_in_currency,
      current_price,
    },
    localization,
    description,
    image: { thumb },
    links: { homepage },
  } = details;

  const currencyMark = currencyType === 'usd' ? '$' : '₩';
  const currencyName =
    currencyType === 'usd' ? localization.en : localization.ko;
  const priceChange24InCurrency =
    currencyType === 'usd'
      ? price_change_percentage_1h_in_currency.usd
      : price_change_percentage_1h_in_currency.krw;
  const currencyDesc = currencyType === 'usd' ? description.en : description.ko;
  const totalVolume =
    currencyType === 'usd' ? total_volume.usd : total_volume.krw;
  const marketCapChange24InCurrency =
    currencyType === 'usd'
      ? market_cap_change_24h_in_currency.usd
      : market_cap_change_24h_in_currency.krw;
  const marketCapPercent24 = market_cap_change_percentage_24h;
  const currentPrice =
    currencyType === 'usd' ? current_price.usd : current_price.krw;

  return (
    <Layout>
      <Wrapper>
        <FiltersWrapper>
          <Title>
            <Star
              isSelected={bookmark.includes(id)}
              className={'fa fa-star'}
              onClick={() => updateBookmark(id)}
            />
            <img src={thumb} alt={'thumbnail'} />
            {currencyName} ({symbol.toUpperCase()})
          </Title>
          <Select
            marginLeft={'auto'}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              updateFilter(e.target.value)
            }
          >
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
                      {`${currencyMark}${formatter.getCurrencyFormat(
                        currentPrice,
                      )}`}
                    </Text>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <Text fontSize={'xs'}>
                      {`1.00000000 ${String(symbol).toUpperCase()}`}
                    </Text>
                  </div>
                </div>
                <div style={{ marginLeft: '10px' }}>
                  <div>
                    <Text
                      color={
                        Number(priceChange24InCurrency) > 0 ? 'red' : 'blue'
                      }
                      bold={true}
                    >
                      {formatter.getPercentFormat(priceChange24InCurrency, 1)}%
                    </Text>
                  </div>
                  <div>
                    <Text
                      color={Number(marketCapPercent24) > 0 ? 'red' : 'blue'}
                      fontSize={'xxs'}
                    >
                      {formatter.getPercentFormat(marketCapPercent24, 1)}%
                    </Text>
                  </div>
                </div>
              </ContentWrapper>
              <ContentWrapper>
                <div style={{ width: '25%', marginLeft: '25%' }}>
                  <div style={{ textAlign: 'right' }}>
                    <Text fontSize={'xs'} color={'black'}>
                      시가 총액
                    </Text>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <Text fontSize={'xs'} color={'black'}>
                      {`${currencyMark}${formatter.getCurrencyFormat(
                        totalVolume,
                      )}`}
                    </Text>
                  </div>
                </div>
                <div style={{ marginLeft: 'auto' }}>
                  <div style={{ textAlign: 'right' }}>
                    <Text fontSize={'xs'} color={'black'}>
                      24시간 거래대금
                    </Text>
                  </div>
                  <div style={{ textAlign: 'right' }}>
                    <Text fontSize={'xs'} color={'black'}>
                      {`${currencyMark}${formatter.getCurrencyFormat(
                        marketCapChange24InCurrency,
                      )}`}
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
                  border: 'none',
                  verticalAlign: 'middle',
                  lineHeight: '32px',
                  paddingInlineStart: '5px',
                  backgroundColor: '#F5F5F5',
                }}
              >
                {String(symbol).toUpperCase()}
              </div>

              <CalculatorInput
                type={'text'}
                value={result.crypto}
                onChange={(e) =>
                  getCurrency(
                    e.target.value.replace(/[^0-9.]/g, ''),
                    currentPrice,
                  )
                }
              />

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
                  border: 'none',
                  verticalAlign: 'middle',
                  lineHeight: '32px',
                  paddingInlineStart: '5px',
                  backgroundColor: '#F5F5F5',
                }}
              >
                {String(currencyType).toUpperCase()}
              </div>

              <CalculatorInput
                type={'text'}
                value={Number(result.currency || 0).toLocaleString()}
                onChange={(e) =>
                  getCrypto(currentPrice, e.target.value.replace(/[^0-9]/g, ''))
                }
              />
            </ContentWrapper>

            <UtilityDiv height={'20px'} />
          </CalculatorWrapper>
        </Section>
        <Section>
          <DescBtn onClick={() => setOpen(true)}>설명보기 &#9660;</DescBtn>
          {open && <DescContent>{currencyDesc}</DescContent>}
        </Section>
        {isLoading && <Spinner />}
        {isToast && <Toast />}
      </Wrapper>
    </Layout>
  );
}
