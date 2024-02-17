import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'eventTopic',
    title: 'EventTopic',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'title' }
        }),
        defineField({
            name: 'logo',
            title: 'Logo',
            type: 'image',
        }),
        defineField({
            name: 'topicImage',
            title: 'Topic Image',
            type: 'image',
            validation: (Rule: any) => Rule.required(),
            options: {
                hotspot: true,
            }
        }),
    ],
})
