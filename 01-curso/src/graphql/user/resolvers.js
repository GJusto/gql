const user = () => {
    return {
        id: '1',
        userName: 'Gustavo'
    };
};

const users = () => {
    return [
        {
        id: '1',
        userName: 'Gustavo'
        },
        {
            id: '2',
            userName: 'Vitor'
            },
            {
                id: '3',
                userName: 'Outro Vitor'
                },
    ];
};

export const userResolvers = {
    Query: {
        user,
        users,
    },
};