import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

export const POSTS = gql`
  query Author {
    getPosts {
        author {
          name
        }
        content
        likes {
          username
        }
        _id
        comments {
          content
          username
        }
    }
  }
`

export const ADD_POST = gql`
  mutation AddPost($input: PostContent) {
    addPost(input: $input) {
      content
    }
}
`
