import { defineField, defineType } from 'sanity';

export const siteSettings = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  fields: [
    defineField({ name: 'yearOneGoal', title: 'Year 1 Goal', type: 'number', initialValue: 1000000 }),
    defineField({ name: 'yearTwoGoal', title: 'Year 2 Goal', type: 'number', initialValue: 2000000 }),
    defineField({ name: 'yearThreeGoal', title: 'Year 3 Goal', type: 'number', initialValue: 2000000 }),
    defineField({ name: 'currentRaised', title: 'Current Raised', type: 'number', initialValue: 0 }),
    defineField({ name: 'heroVideoUrl', title: 'Hero Video URL', type: 'url' }),
    defineField({ name: 'formspreeGetInvolvedUrl', title: 'Formspree Get Involved URL', type: 'url' }),
    defineField({ name: 'formspreeEmailSignupUrl', title: 'Formspree Email Signup URL', type: 'url' }),
    defineField({ name: 'formspreePrayerUrl', title: 'Formspree Prayer URL', type: 'url' }),
    defineField({ name: 'formspreeContactUrl', title: 'Formspree Contact URL', type: 'url' }),
    defineField({ name: 'formspreeGivingUrl', title: 'Formspree Giving URL', type: 'url' }),
  ],
});
