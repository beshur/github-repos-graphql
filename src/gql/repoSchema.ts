import { gql } from '@apollo/client';

const REPO_QUERY = gql`
  query SearchRepos($queryString: String!) {
    search(query: $queryString, type: REPOSITORY, first: 10) {
      edges {
        cursor
        node {
          ... on Repository {
            name
            owner {
              login
            }
            stargazers {
              totalCount
            }
            forks {
              totalCount
            }
          }
        }
      }
    }
  }
`

export default REPO_QUERY;
