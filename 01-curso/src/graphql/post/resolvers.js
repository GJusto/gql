const post = () => {
    return {
        id:'1',
        title: 'título',
        description: 'texto descritivo'
    };
};

const posts = () => {
    return [
        {
            id:'1',
            title: 'título 1',
            description: 'texto descritivo'
        },
        {
            id:'2',
            title: 'título 2',
            description: 'descrição'
        },
        {
            id:'3',
            title: 'título3',
            description: 'texto descritivo 3'
        },
    ];
};

export const postResolvers = {
    Query: {
        post,
        posts,
    }
};