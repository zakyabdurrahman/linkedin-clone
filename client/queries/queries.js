import { gql } from "@apollo/client";

export const LOGIN = gql`
  mutation Login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
    }
  }
`;

export const POST_DETAIL = gql`
  query GetPost($getPostId: ID) {
    getPost(id: $getPostId) {
      content
      author {
        name
        email
      }
      comments {
        name
        content
      }
      imgUrl
      likes {
        username
      }
      tags
    }
  }
`;

export const POSTS = gql`
  query Author {
    getPosts {
      author {
        name
      }
      imgUrl
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
`;

export const ADD_POST = gql`
  mutation AddPost($input: PostContent) {
    addPost(input: $input) {
      content
    }
  }
`;

export const ADD_LIKE = gql`
  mutation AddLike($postId: ID) {
    addLike(postId: $postId) {
      content
    }
  }
`;
