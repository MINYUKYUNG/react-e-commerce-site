import React, { Suspense } from 'react';
import { RecoilRoot } from 'recoil';
import { render } from '@testing-library/react';
import App from '../src/App';

test('App rendering', () => {
  render(
    <RecoilRoot>
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    </RecoilRoot>,
  );
});
