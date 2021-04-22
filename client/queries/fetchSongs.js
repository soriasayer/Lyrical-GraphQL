import { gql } from '@apollo/client';

export const GET_SONGS = gql`
  {
    songs{
      id
      title
    }
  }
`

export const GET_SONG = gql`
  query GetSong($id: ID!){
    song(id: $id){
      id
      title
      lyrics{
        id
        likes
        content
      }
    }
  }
`

export const DELETE_SONG = gql`
  mutation DeleteSong($id: ID){
    deleteSong(id: $id){
      id
    }
  }
`