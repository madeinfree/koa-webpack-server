export default {
  path: ':id',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, )
    })
  }
};
