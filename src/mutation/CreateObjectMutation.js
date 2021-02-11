import { gql } from "@apollo/client";

const CreateObjectMutation = gql`
  mutation createObject($name: String!, $size: [String!], $color: String!, $shape: [[Boolean!]]) {
    createObject(name: $name, size: $size, color: $color, shape: $shape) {
      id
    }
  }
`;

export default CreateObjectMutation;