import React, { useState, useEffect } from 'react';
import { useQuery, gql } from '@apollo/client';

import LoadingPlaceholder from '../../components/LoadingPlaceholder/LoadingPlaceholder';
import ReposList from '../../components/ReposList/ReposList';
import SearchBar from '../../components/SearchBar/SearchBar';

import REPO_QUERY from '../../gql/repoSchema';

const RepoContainer = (props: any) => {
  const [searchQuery, setSearchQuery] = useState('react');

  const style = {
    border: '1px solid #eee',
    margin: '20px',
    padding: '40px'
  };

  const blockStyle = {
    margin: '0 0 20px',
  };

  const { loading, error, data } = useQuery(REPO_QUERY, {
    variables: {
      queryString: searchQuery
    }
  });

  return (
    <div style={style}>
      <div style={blockStyle}>
        <SearchBar query={searchQuery} change={setSearchQuery} />
      </div>
      <div style={blockStyle}>
        { loading ? <LoadingPlaceholder /> : null }
        { error ? <div>{error}</div> : null }
        { (data && data.search && data.search.repositoryCount > 0) ? <ReposList repos={data.search} /> : null }
      </div>
    </div>
  );
};

export default RepoContainer;
