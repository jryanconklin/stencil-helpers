module.exports = {
  multipass: true,
  js2svg: {
    indent: 2,
    pretty: true,
  },
  plugins: [
    'cleanupListOfValues',
    'convertStyleToAttrs',
    'removeDimensions',
    'removeStyleElement',
    {
      name: 'removeAttrs',
      params: {
        attrs: 'stroke',
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            stroke: 'currentColor',
          },
          {
            'aria-hidden': true,
          },
        ],
      },
    },
    {
      name: 'removeUnusedNS',
      active: false,
    },
    {
      name: 'removeViewBox',
      active: false,
    },
  ],
};
