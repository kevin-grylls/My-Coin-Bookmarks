import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout, Wrapper, Section } from './Style';
import { Tab } from './Tab';
import { Filter } from './Filter';

const Table = lazy(() => import('./Table'));

export const Home = () => {
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
                <Filter />
                <Suspense fallback={<div>Loading...</div>}>
                  <Table />
                </Suspense>
              </Route>
              <Redirect from={'/'} to={'/market'} />
            </Switch>
          </Section>
        </main>
      </Wrapper>
    </Layout>
  );
};
