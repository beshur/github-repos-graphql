import React from 'react';
import logo from './logo.svg';
import './App.css';
import RepoContainer from './containers/RepoContainer/RepoContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Repo Explorer
      </header>
      <main>
        <RepoContainer />
      </main>
    </div>
  );
}

export default App;
