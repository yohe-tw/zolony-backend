import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {
  ApolloClient, InMemoryCache, ApolloProvider, HttpLink,
} from '@apollo/client';
import { HookProvider } from './hook/usehook';




const client = new ApolloClient({ 
  uri: '/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <HookProvider>
        <App />
      </HookProvider>
    </ApolloProvider>
  </React.StrictMode>
);
