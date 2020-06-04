import Vue from "vue";
import axios from 'axios';
import EventBus from './EventBus';
import { Validator } from "simple-vue-validator";

new Vue ({
    el: "#contact-form-component",
    template: "#form-container",
    data() {
        return{
            name: '',
            email: '',
            message: '',
            isDisabled: false
        }
        ;
    },
    methods: {
        sendForm() {
            this.$validate().then(async success => {
                if (!success) return;

                try {
                    this.isDisabled = true;

                    const formData = new FormData();

                    formData.append("name", this.name);
                    formData.append("phone", this.email);
                    formData.append("comment", this.message);
                    formData.append('to', 'valiazin@gmail.com');

                    await axios.post("https://webdev-api.loftschool.com/sendmail", formData);

                    this.clearForm();

                    this.validation.reset();

                    EventBus.$emit('updateEvent', { showed: true, message: 'Сообщение отправлено!' });
                } catch (error) {
                    EventBus.$emit('updateEvent', { showed: true, message: 'Произошла ошибка' });
                } finally {
                    this.isDisabled = false;
                  }
            })
        },
        clearForm() {
            this.name = this.email = this.message = "";
        },
        
    },
    mixins: [require('simple-vue-validator').mixin],
    validators: {
        'name'(value) {
            return Validator.value(value).required('');
        },
        'email'(value) {
            return Validator.value(value).required('');
        },
        'message'(value) {
            return Validator.value(value).required('');
        },
    }
})