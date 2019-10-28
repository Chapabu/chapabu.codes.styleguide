module.exports = {
  context: {
    type: 'ul',
    classes: [],
  },
  default: 'unordered',
  variants: [
    {
      name: 'unordered',
      context: {
        type: 'ul',
      },
    },
    {
      name: 'ordered',
      context: {
        type: 'ol',
      },
    },
  ],
};
