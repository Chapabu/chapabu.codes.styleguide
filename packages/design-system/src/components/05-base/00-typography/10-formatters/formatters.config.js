module.exports = {
  collated: true,
  title: 'Formatting',
  default: 'strong',
  context: {
    tagName: 'strong',
    text: 'Strong',
  },
  variants: [
    {
      name: 'Emphasis',
      context: {
        tagName: 'em',
        text: 'Emphasis',
      },
    },
    {
      name: 'Abbreviation',
      context: {
        tagName: 'abbr',
        text: 'Abbreviation',
        attributes: 'title="This is an abbr tag"',
      },
    },
    {
      name: 'Citation',
      context: {
        tagName: 'cite',
        text: 'Citation',
      },
    },
    {
      name: 'Mark Text',
      context: {
        tagName: 'mark',
        text: 'Mark Text',
      },
    },
    {
      name: 'Subscript',
      context: {
        tagName: 'sub',
        text: 'Subscript',
      },
    },
    {
      name: 'Superscript',
      context: {
        tagName: 'sup',
        text: 'Superscript',
      },
    },
    {
      name: 'Deleted Text',
      context: {
        tagName: 'del',
        text: 'Deleted Text',
      },
    },
    {
      name: 'Inserted text',
      context: {
        tagName: 'em',
        text: 'Inserted text',
      },
    },
  ],
};
