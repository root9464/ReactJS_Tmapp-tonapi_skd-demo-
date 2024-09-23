import { Api, TonApiClient } from '@ton-api/client';
import { Address } from '@ton/core';
import './App.css';

export function App(): JSX.Element {
  const http = new TonApiClient({
    baseUrl: 'https://tonapi.io',
  });

  const api = new Api(http);
  const account = api.accounts.getAccount(Address.parse('UQAYRw04JzUo1IEK6TL6vKfos66gsdN6vUFfJeA3OOjOfIhM'));
  account.then(console.log);
  return (
    <>
      <h1>Hello</h1>
    </>
  );
}
