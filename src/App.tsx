import React from 'react';
import { ApolloProvider } from '@apollo/client';

import './App.css';
import RepoContainer from './containers/RepoContainer/RepoContainer';
import client from './gql/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <header className="App-header">
          Repo Explorer
        </header>
        <main>
          <RepoContainer />
        </main>
      </div>
    </ApolloProvider>
  );
}

export default App;
