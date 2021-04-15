import { gql } from '@apollo/client';

export default gql`
  {
    songs{
      id
      title
    }
  }
`