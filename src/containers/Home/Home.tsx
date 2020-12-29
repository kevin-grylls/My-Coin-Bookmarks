import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout, Wrapper, Section } from './Style';
import { Tab } from './Tab';
import { Spinner, Toast } from '../../components';
import { useLoading, useToast } from '../../hooks';

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
              <Route path="/market">
                <Suspense fallback={<Spinner />}>
                  <Currency />
                </Suspense>
              </Route>
              <Route path="/bookmark">
                <Suspense fallback={<Spinner />}>
                  <Bookmark />
                </Suspense>
              </Route>
              <Redirect from={'/'} to={'/market'} />
            </Switch>
          </Section>
        </main>
        {isLoading && <Spinner />}
        {isToast && <Toast />}
      </Wrapper>
    </Layout>
  );
};
