import { defineField, defineType } from 'sanity';

export const partner = defineType({
  name: 'partner',
  title: 'Partners / Endorsements',
  type: 'document',
  fields: [
    defineField({ name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'type', title: 'Type', type: 'string', options: { list: ['Church', 'Network', 'Endorsement', 'Donor'] } }),
    defineField({ name: 'website', title: 'Website', type: 'url' }),
    defineField({ name: 'quote', title: 'Quote', type: 'text', rows: 4 }),
    defineField({ name: 'logo', title: 'Logo', type: 'image' }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
});
