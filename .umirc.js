
export default {
  exportStatic: {
    htmlSuffix: true,
    dynamicRoot: true,
  },
  plugins: [
    [
      'umi-plugin-react', {
        antd: true,
      }
    ],
  ],
  targets: {
    ie: 11,
  },
}
