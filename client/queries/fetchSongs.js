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

export const ADD_SONG = gql`
  mutation AddSong($title: String){
    addSong(title: $title){
      title
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

export const ADD_LYRIC = gql`
  mutation AddLyricToSong($content: String, $songId: ID){
    addLyricToSong(content: $content, songId: $songId){
      id
      lyrics{
        id
        content
        likes
      }
    }
  }
`

export const LIKE_LYRIC = gql`
  mutation LikeLyric($id: ID){
    likeLyric(id: $id){
      id
      likes
    }
  }
`