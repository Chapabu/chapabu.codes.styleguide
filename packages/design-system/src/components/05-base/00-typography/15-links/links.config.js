module.exports = {
  context: {
    text: 'Libero officia quia',
  },
  variants: [
    {
      name: 'Main nav',
      context: {
        classes: ['main-nav-link'],
      },
    },
    {
      name: 'Main nav - active',
      context: {
        classes: ['main-nav-link', 'is-active'],
      },
    },
  ],
};
