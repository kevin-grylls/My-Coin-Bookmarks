import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout, Wrapper, Section } from './Style';
import { Tab } from './Tab';
import { Spinner } from '../../components';
import { useLoading } from '../../hooks';

const Currency = lazy(() => import('../Currency'));
const Bookmark = lazy(() => import('../Bookmark'));

export const Home = () => {
  const { isLoading } = useLoading();

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
                <Suspense fallback={<div>Loading...</div>}>
                  <Currency />
                </Suspense>
              </Route>
              <Route path="/bookmark">
                <Suspense fallback={<div>Loading...</div>}>
                  <Bookmark />
                </Suspense>
              </Route>
              <Redirect from={'/'} to={'/market'} />
            </Switch>
          </Section>
        </main>
        {isLoading && <Spinner />}
      </Wrapper>
    </Layout>
  );
};
