import Vue from "vue";
import $axios from "../admin/helpers/apiSettings";
import {getAbsoluteImgPath} from '../admin/helpers/pictures';

const previews = {
    template: "#slider-previews",
    props: ["works", "currentWork"],
    methods: {
        photoUrl(path) {
          return getAbsoluteImgPath(path);
        }
      },
};

const buttons = {
    template: "#slider-buttons",
};

const display = {
    template: "#slider-display",
    components: { buttons, previews },
    props: ["currentWork", "works", "currentIndex"],
    methods: {
        photoUrl(path) {
          return getAbsoluteImgPath(path);
        }
      },
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
            return this.currentWork.techs.split(",");
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
    },
    async created() {
        const { data } = await $axios.get("works/315");
        this.works = data;
    },
});