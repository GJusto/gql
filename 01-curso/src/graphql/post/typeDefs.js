import { gql } from "apollo-server";

export const postTypeDefs = gql`
    extend type Query {
        post: Post!
        posts: [Post!]!
    }

    type Post {
        id: ID!
        title: String!
        body: String!
        #user: User!
        indexRef: Int!
        createdAt: String!
    }
`;

/*
            "id": "783",
            "title": "Autem non temporibus sequi.",
            "body": "Ipsam blanditiis amet. Sapiente sed eos earum qui consequatur natus quia voluptatem nihil. Non eum omnis aut sed autem et recusandae vel. Explicabo et temporibus quod voluptatem. Dolores debitis accusamus dolore aut fuga sunt. Et explicabo voluptates tenetur sed voluptatem repellendus est officia.\n \rPariatur deleniti reiciendis quia. Et molestiae voluptatem sequi eligendi rem est voluptatem incidunt praesentium. Consectetur quo dolor nobis distinctio ratione voluptatem porro saepe. Non et corporis et ipsa natus error quisquam necessitatibus. Nihil eius consequatur minus quia repudiandae aut eos.\n \rIn fugiat qui quis soluta facilis nesciunt possimus provident laudantium. Eius aut quidem repellat. Est dolores est eveniet similique tenetur voluptatem. Optio aut dolores at quia possimus reiciendis voluptatem. Non iure nesciunt ut soluta odio omnis earum. Quia voluptatem nobis.\n \rSint est blanditiis dignissimos dolore omnis expedita aut impedit quia. Temporibus ut dolores laborum unde. Voluptates illum itaque dolorem et et commodi. Et consequatur adipisci consectetur commodi provident. Temporibus itaque sint quia odit. Magni consequatur commodi facere sit.",
            "userId": "502",
            "indexRef": 22,
            "createdAt": "2021-04-01T01:06:47.589Z"
*/