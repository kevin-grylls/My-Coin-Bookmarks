import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout, Wrapper, Section } from './Style';
import { Tab } from './Tab';
import { Spinner, Toast } from '../../components';
import { useLoading, useToast } from '../../hooks';
import { ROUTES } from '../../constants';

const Currency = lazy(() => import('../Currency'));
const Bookmark = lazy(() => import('../Bookmark'));

export const Home = () => {
  const { isLoading } = useLoading();
  const { isToast } = useToast();

  return (
    <Layout>
      <Wrapper>
        <header>
          <Section>
            <Tab />
          </Section>
        </header>
        <main>
          <Section>
            <Switch>
              <Route path={`${ROUTES.CURRENCY}`}>
                <Suspense fallback={<Spinner />}>
                  <Currency />
                </Suspense>
              </Route>
              <Route path={`${ROUTES.BOOKMARK}`}>
                <Suspense fallback={<Spinner />}>
                  <Bookmark />
                </Suspense>
              </Route>
              <Redirect from={`${ROUTES.HOME}`} to={`${ROUTES.CURRENCY}`} />
            </Switch>
          </Section>
        </main>
        {isLoading && <Spinner />}
        {isToast && <Toast />}
      </Wrapper>
    </Layout>
  );
};
