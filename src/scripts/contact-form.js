import Vue from "vue";
import axios from 'axios';
import EventBus from './EventBus';

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
        async sendForm() {
            if (this.validateForm()) {
                try {
                    const formData = new FormData();

                    formData.append("name", this.name);
                    formData.append("phone", this.email);
                    formData.append("comment", this.message);
                    formData.append('to', 'valiazin@gmail.com');

                    await axios.post("https://webdev-api.loftschool.com/sendmail", formData);

                    this.clearForm();

                    EventBus.$emit('updateEvent', { showed: true, message: 'Сообщение отправлено!' });
                    
                } catch (error) {
                    console.log(error);
                    
                }
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
        clearForm() {
            this.name = this.email = this.message = "";
        }
    },
})