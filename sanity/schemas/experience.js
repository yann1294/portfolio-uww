export default {
    name: 'experience',
    title: 'experience',
    type: 'document',
    fields: [
      {
        name: 'jobTitle',
        title: 'JobTitle',
        type: 'string',
      },
      {
        name: 'companyImage',
        title: 'Company image',
        type: 'image',
        options:{
            hotspot: true,
          }
      },
      {
        name: 'company',
        title: 'Company',
        type: 'text',
      },
      {
        name: 'dateStarted',
        title: 'dateStarted',
        type: 'date'
      },
      {
        name: 'dateEnded',
        title: 'dateEnded',
        type: 'date'
      },
      {
        name: 'technologies',
        title: 'Technologies',
        type: 'array',
        of: [{type: "reference", to: {type: "skill"}}]
      },
      {
        name: 'points',
        title: 'Points',
        type: 'array',
        of: [{type: "string"}]
      }
    ]
  }
  