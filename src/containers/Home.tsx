import React, { Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Layout, Wrapper, Section } from './Style';
import { Tab } from './Tab';

const Currency = lazy(() => import('./Currency'));

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
                <Suspense fallback={<div>Loading...</div>}>
                  <Currency />
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
