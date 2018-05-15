import fields from './fields';

module.exports = () => configContext => ({
  extensions: {
    'ucbnh-organization': {
      fields: fields(configContext),
    },
  },
});
