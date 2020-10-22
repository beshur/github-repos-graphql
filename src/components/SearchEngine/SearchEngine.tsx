import React, { useEffect } from 'react';

interface searchResult {
  name: string,
  stars: number,
  forks: number
}

const test = [
  {
    name: 'react',
    stars: 69012,
    forks: 12581
  }, {
    name: 'reselect',
    stars: 7291,
    forks: 214
  }, {
    name: 'redux',
    stars: 31705,
    forks: 6581
  }, {
    name: 'recompose',
    stars: 5671,
    forks: 342
  }
]

const SearchEngine = (props: any) => {
  useEffect(() => {
    console.log('SearchEngine', props.query);

    props.onSearchStateChange(true);
    const t = setTimeout(() => {
      console.log('Search Engine timeout');
      props.onSearchStateChange(false);
      props.onSearchResults(test)
    }, 2000);
    return () => {
      clearTimeout(t);
      props.onSearchStateChange(false);
    }
  }, [props.query]);

  return (<React.Fragment />);
};

export default SearchEngine;
