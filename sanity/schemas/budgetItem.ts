import { defineField, defineType } from 'sanity';

export const budgetItem = defineType({
  name: 'budgetItem',
  title: 'Budget / Where Gift Goes',
  type: 'document',
  fields: [
    defineField({ name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() }),
    defineField({ name: 'category', title: 'Category', type: 'string' }),
    defineField({ name: 'description', title: 'Description', type: 'text', rows: 4 }),
    defineField({ name: 'percentage', title: 'Percentage', type: 'number' }),
    defineField({ name: 'order', title: 'Order', type: 'number' }),
  ],
});
