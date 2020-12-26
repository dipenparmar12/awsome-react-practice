require('./bootstrap');
require('./Main');

if (module.hot && process.env.NODE_ENV === "development") {
  // console.log("App.js::module.hot", module.hot);
  module.hot.accept();
}
