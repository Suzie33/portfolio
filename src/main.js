import SimpleVueValidation from 'simple-vue-validator';

Vue.use(SimpleVueValidation);

import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}


import "./scripts/skills";
import "./scripts/works";
import "./scripts/contact-form";
import "./scripts/hamburger-menu";
import "./scripts/parallax";
import "./scripts/reviews";
import "./scripts/tooltip";

import "./scripts/scrollTo";

