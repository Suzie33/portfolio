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
    props: ["currentWork"]
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
    data() {
        return {
            works: [],
            currentWork: {}
        };
    },
    created() {
        const data = require("../data/works.json");
        this.works = data;
        this.currentWork = data[0];
    }
});