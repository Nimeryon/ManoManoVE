import { gql } from "@apollo/client";

const ObjectQuery = gql`
  {
    objects {
      id
      name
      size
      color
      shape
    }
  }
`;

export default ObjectQuery;