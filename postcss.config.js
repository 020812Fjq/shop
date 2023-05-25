// postcss.config.js
module.exports = {
  plugins: {
    "postcss-pxtorem": {
      rootValue: 37.5, //针对375像素做的适配
      propList: ["*"],
    },
  },
};
