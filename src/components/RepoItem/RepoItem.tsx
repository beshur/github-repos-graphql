import React from 'react';

const RepoItem = (props: any) => {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.stars}</td>
      <td>{props.forks}</td>
    </tr>
  );
};

export default RepoItem;
