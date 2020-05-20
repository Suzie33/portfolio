import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/works";
import "./scripts/contact-form";
import "./scripts/reviews";
import "./scripts/hamburger-menu";
import "./scripts/scrollTo";
import "./scripts/parallax";