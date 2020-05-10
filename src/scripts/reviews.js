import Vue from 'vue';
import Flickity from 'vue-flickity';
 
new Vue({
    el: '#reviews-section',
    components: {
        Flickity
    },

    data() {
        return {
            flickityOptions: {
                initialIndex: 0,
                prevNextButtons: false,
                pageDots: false,
                wrapAround: false,
                groupCells: true,
                freeScroll: false,
                contain: true
            }
        }
    },

    methods: {
        next() {
            this.$refs.flickity.next();
            this.checkArrows();
        },

        previous() {
            this.$refs.flickity.previous();
            this.checkArrows();
        },
        checkArrows() {
            if (this.$refs.flickity.selectedIndex() == 0) {
                this.$refs.circleBtnPrev.disabled = true;
            } else if (this.$refs.flickity.selectedIndex() == this.$refs.flickity.slides().length - 1) {
                this.$refs.circleBtnNext.disabled = true;
            } else {
                this.$refs.circleBtnPrev.disabled = false;
                this.$refs.circleBtnNext.disabled = false;
            }
        }
    }
});