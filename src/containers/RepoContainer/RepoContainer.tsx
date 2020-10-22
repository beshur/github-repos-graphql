import React, { useState, useEffect } from 'react';
import LoadingPlaceholder from '../../components/LoadingPlaceholder/LoadingPlaceholder';
import ReposList from '../../components/ReposList/ReposList';
import SearchBar from '../../components/SearchBar/SearchBar';
import SearchEngine from '../../components/SearchEngine/SearchEngine';

const RepoContainer = (props: any) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchState, setSearchState] = useState(false);
  const [searchResults, setSearchResults] = useState([]);

  const onSearchChange = (query: string) => {
    console.log('onSearchChange', query);
    setSearchQuery(query);
  }

  const style = {
    border: '1px solid #eee',
    margin: '20px',
    padding: '40px'
  };

  const blockStyle = {
    margin: '0 0 20px',
  };

  return (
    <div style={style}>
      <div style={blockStyle}>
        <SearchBar change={onSearchChange} />
      </div>
      <SearchEngine
        query={searchQuery}
        onSearchStateChange={setSearchState}
        onSearchResults={( res: any ) => {console.log('results', res); setSearchResults(res); }} />
      <div style={blockStyle}>
        { searchState ? <LoadingPlaceholder /> : <ReposList repos={searchResults} /> }
      </div>
    </div>
  );
};

export default RepoContainer;
