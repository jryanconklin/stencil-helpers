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
        attrs: 'fill',
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          {
            fill: 'currentColor',
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
