import React, { Suspense, lazy } from 'react';
import { Layout, Wrapper, Section } from './Style';
import { Tab } from './Tab';

const Table = lazy(() => import('./Table'));

export const Home = () => {
    return (
        <Layout>
            <Wrapper>
                <Section>
                    <Tab />
                </Section>
                <main>
                    <Section>
                        <Suspense fallback={<div>Loading...</div>}>
                            <Table />
                        </Suspense>
                    </Section>
                </main>
            </Wrapper>
        </Layout>
    );
};
