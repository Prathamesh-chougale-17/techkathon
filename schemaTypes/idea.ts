// schemas/pet.j
export default {
    name: 'idea',
    type: 'document',
    title: 'Idea',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title of Idea'
        },
        {
            name: 'slug',
            type: 'slug',
            title: 'Slug of your Idea',
            options: {
                source: 'title',
            },
        },
        {
            name: 'content',
            type: 'array',
            title: 'Content',
            of: [
                {
                    type: 'block',
                },
            ],
        },
    ]
}