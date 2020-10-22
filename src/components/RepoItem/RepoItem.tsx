import React from 'react';

const RepoItem = (props: any) => {
  const name = props.owner.login + '/' + props.name;
  const url = 'https://github.com/' + name;

  return (
    <tr>
      <td><a className="App-link" href={url} target="_blank">{name}</a></td>
      <td>{props.stargazers.totalCount}</td>
      <td>{props.forks.totalCount}</td>
    </tr>
  );
};

export default RepoItem;
