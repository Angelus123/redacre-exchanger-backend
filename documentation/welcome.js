const welcome = {
  '/': {
    get: {
      tag: ['Home'],
      summary: 'Welcome Page',
      description: 'welcome page',
      operationId: 'getHome',
      responses: {
        200: {
          description: 'success',
        },
      },
    },
  },
};

export default welcome;
