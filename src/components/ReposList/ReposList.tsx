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
          { props.repos.map((repo: any) => <RepoItem key={repo.name} {...repo} />) }
        </tbody>
      </table>
    </div>
  );
};

export default ReposList;
