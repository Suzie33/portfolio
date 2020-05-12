import Vue from "vue";

const previews = {
    template: "#slider-previews",
};

const buttons = {
    template: "#slider-buttons",
};

const display = {
    template: "#slider-display",
    components: { buttons, previews },
};

const tags = {
    template: "#slider-tags",
};

const info = {
    template: "#slider-info",
    components: { tags },
};


new Vue ({
    el: "#slider-component",
    template: "#slider-container",
    components: { display, info },
});