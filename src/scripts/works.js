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
    props: ["currentWork"]
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
    methods: {
        makeArrWithRequiredImages(array) {
            return array.map((item) => {
                const requirePic = require(`../images/content/${item.photo}`);
                item.photo = requirePic;
                return item;
            });
        },
    },
    created() {
        const data = require("../data/works.json");
        this.works = this.makeArrWithRequiredImages(data);
        this.currentWork = this.works[0];
    },
});