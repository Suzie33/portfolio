import Vue from "vue";

const error = {
    template: "#form-error",
};

new Vue ({
    el: "#contact-form-component",
    template: "#form-container",
    components: { error },
    data() {
        return{
            name: '',
            email: '',
            message: ''
        };
    },
    methods: {
        sendForm() {
            if (this.validateForm()) {
                console.log('yes');
            } else {
                console.log('no');
            }
        },
        validateForm() {
            if(this.name === '' || this.email === '' || this.message === '') {
                return false;
            } else {
                return true;
            }
        },
    },
})