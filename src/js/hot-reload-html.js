const hotReloadHTML = async () => {
  if (process.env.NODE_ENV !== 'production') {
    await import('../main.html');
    console.log('DEVELOPMENT: Hot reload HTML Changes'); // eslint-disable-line no-console
  }
};

export default hotReloadHTML;
