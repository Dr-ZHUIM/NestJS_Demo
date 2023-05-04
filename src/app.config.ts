export default () => {
  return {
    app: {
      isDev: process.env.NODE_ENV === 'development',
    },
    upload: {
      extends: 'jpeg,png,gif,pdf',
    },
  };
};
