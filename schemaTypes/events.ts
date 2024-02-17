import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'upcomingevents',
    title: 'Upcoming Events',
    type: 'document',
    fields: [
        defineField({
            name: 'eventname',
            title: 'Event Name',
            type: 'string',
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'eventname' }
        }), defineField({
            name: "totaldays",
            title: "Total Days",
            type: "number",
        }),
        defineField({
            name: 'startdate',
            title: 'Start Date',
            type: 'string',
        }),
        defineField({
            name: 'students',
            title: 'Number of students',
            type: 'number',
        }),
        defineField({
            name: 'prizepool',
            title: 'Prize Pool',
            type: 'number',
        }),
        defineField({
            name: 'organizer',
            title: 'Organizer',
            type: 'string'
        }),
        defineField({
            name: 'participationfee',
            title: 'Participation Fee',
            type: 'string',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'string',
        }),
        defineField({
            name: 'eventTopic',
            title: 'Event Topic',
            type: 'string',
            options: {
                // type: 'string',
                list: ['coding', 'design', 'marketing', 'business', 'data-science', 'cyber-security', 'ai', 'blockchain', 'robotics', 'iot', 'cloud-computing', 'game-development', 'mobile-app-development', 'web-development', 'other'],
            }
        })
    ],
})
