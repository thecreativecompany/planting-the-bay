import { defineField, defineType } from 'sanity';

export const event = defineType({
  name: 'event',
  title: 'Pop-up Services / Events',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'region', title: 'Region', type: 'string' }),
    defineField({ name: 'date', title: 'Date', type: 'datetime' }),
    defineField({ name: 'location', title: 'Location', type: 'string' }),
    defineField({ name: 'rsvpUrl', title: 'RSVP URL', type: 'url' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
  ],
});
