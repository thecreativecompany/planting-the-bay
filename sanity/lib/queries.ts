export const siteSettingsQuery = `*[_type == "siteSettings"][0]{
  yearOneGoal,
  yearTwoGoal,
  yearThreeGoal,
  currentRaised,
  heroVideoUrl,
  formspreeGetInvolvedUrl,
  formspreeEmailSignupUrl,
  formspreePrayerUrl,
  formspreeContactUrl,
  formspreeGivingUrl
}`;

export const updatesQuery = `*[_type == "update"] | order(publishedAt desc)[0...6]{
  title,
  slug,
  excerpt,
  publishedAt
}`;

export const eventsQuery = `*[_type == "event"] | order(date asc)[0...6]{
  title,
  region,
  date,
  location,
  rsvpUrl,
  description
}`;

export const teamMembersQuery = `*[_type == "teamMember"] | order(order asc){
  name,
  role,
  bio,
  image
}`;

export const partnersQuery = `*[_type == "partner"] | order(order asc){
  name,
  type,
  website,
  quote
}`;
