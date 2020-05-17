import Vue from "vue";

const previews = {
    template: "#slider-previews",
    props: ["works", "currentWork"]
};

const buttons = {
    template: "#slider-buttons",
};

const display = {
    template: "#slider-display",
    components: { buttons, previews },
    props: ["currentWork", "works"],
};

const tags = {
    template: "#slider-tags",
    props: ["tags"]
};

const info = {
    template: "#slider-info",
    components: { tags },
    props: ["currentWork"],
    computed: {
        tagsArray() {
            return this.currentWork.skills.split(",");
        }
    }
};

new Vue ({
    el: "#slider-component",
    template: "#slider-container",
    components: { display, info },
    data() {
        return {
            works: [],
            currentIndex: 2
        };
    },
    computed: {
        currentWork() {
            return this.works[this.currentIndex];
        }
    },
    watch: {
        currentIndex(value) {
            this.makeInfiniteLoopForIndex(value);
        },
    },
    methods: {
        makeInfiniteLoopForIndex(value) {
            const worksAmountFromZero = this.works.length - 1;
            if(value > worksAmountFromZero) {
                this.currentIndex = 0;
            }
            if(value < 0) {
                this.currentIndex = worksAmountFromZero;
            }
        },
        handleSlide(direction) {
            switch(direction) {
                case 'next' :
                    this.currentIndex++;
                    break;
                case 'prev' :
                    this.currentIndex--;
                    break;
            }
        },
        handleSlidePreview(index) {
            this.currentIndex = index;
        },
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
    },
});