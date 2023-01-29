import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'social',
  title: 'social',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      description: 'Platform for the social',
      type: 'string',
    },
    {
      name: "url",
      title: "Url",
      type: "url",

    },

  ],

})
