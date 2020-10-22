import React from 'react';
import RepoItem from '../RepoItem/RepoItem';
import './ReposList.css';

const ReposList = (props: any) => {
  return (
    <div className="ReposList">
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>🌟 stars</th>
            <th>🍴 forks</th>
          </tr>
        </thead>
        <tbody>
          {
            props.repos.edges.map((repo: any, index: number) =>
              <RepoItem key={repo.node.name + index} {...repo.node} />
            )
          }
        </tbody>
      </table>
    </div>
  );
};

export default ReposList;
