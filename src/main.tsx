import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { RecoilRoot } from 'recoil';
import Loading from '@components/Loading';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <Suspense fallback={Loading()}>
        <App />
      </Suspense>
    </RecoilRoot>
  </React.StrictMode>,
);
