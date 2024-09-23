/* eslint-disable react-refresh/only-export-components */
import { SDKProvider, useInitDataRaw } from '@telegram-apps/sdk-react';
import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './App.tsx';
import './index.css';

const Provider = ({ children }: { children: React.ReactNode }) => {
  const dataRaw = useInitDataRaw();
  if (!dataRaw) return null;
  return <>{children}</>;
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SDKProvider debug>
      <Provider>
        <App />
      </Provider>
    </SDKProvider>
  </StrictMode>,
);
