<template lang="pug">
  .editcard
    .reviews__edit-top.editcard__top
      h3.editcard__title Новый отзыв
    .reviews__form
      form.form.form--reviews(
        method="POST" 
        action="#"
        @submit.prevent="createNewReview"
      )
        .reviews__form-left
          .form__avatar.avatar(
            :style="{backgroundImage: `url(${review.renderedPhoto})`}"
            :class="{'avatar--filled' : review.renderedPhoto.length}"
          )
            input.photoplace__input(
              @change="handleFileChange"
              id="input_review_photo"
              type="file"
              title="Загрузить"
              name="photo"
            )
            .avatar--none(
              v-if="review.renderedPhoto.length === 0"
            )
              svgIcon(className="avatar--none__icon" name="user" fill="#c92e2e" width="85" height="113")
          .form__avatar-btn
            label(
              v-if="review.renderedPhoto.length === 0"
              for="input_review_photo"
            ).button.button--white Добавить фото
            label(
              v-if="review.renderedPhoto.length"
              for="input_review_photo"
            ).button.button--white Изменить фото
        .reviews__form-right
          .reviews__form-row.reviews__form-row--top
            .reviews__form-block
              label.form__label(for="input_review_name") Имя автора
              input.form__input.form__input--reviews( placeholder="Имя"
              id="input_review_name"
              v-model="review.author"
              )
              div.form__error.form__error--review {{validation.firstError('review.author')}}
            .reviews__form-block
              label.form__label(for="input_review_position") Титул автора
              input.form__input.form__input--reviews(
                v-model="review.position"
                placeholder="Преподаватель" 
                id="input_review_position"
              )
              div.form__error.form__error--review {{validation.firstError('review.position')}}
          .reviews__form-row
            .reviews__form-block
              label.form__label(for="input_review_text") Отзыв
              textarea.form__textarea.form__input.form__input--reviews(
                v-model="review.text"
                placeholder="Текст отзыва" 
                id="input_review_text"
              )
              div.form__error.form__error--review {{validation.firstError('review.text')}}
          .form__buttons
            button.button.button--white(
              @click.prevent="$emit('closeCard')"
              type="button"
            ) Отмена
            input.button(
              type="submit" 
              value="Сохранить" 
              )
</template>

<script>
import svgIcon from './svgIcon';
import { mapActions } from 'vuex';
import { renderer, getAbsoluteImgPath } from '../helpers/pictures';
import { Validator } from "simple-vue-validator";
import EventBus from '../EventBus';

export default {
  components: { svgIcon },
  data: () => {
    return {
      review: {
        author: "",
        position: "",
        text: "",
        photo: "",
        renderedPhoto: ""
      },
    }
  },
  computed: {
    photoUrlEdited() {
      if(this.review.renderedPhoto) {
        return this.review.renderedPhoto;
      } else {
        return getAbsoluteImgPath(this.editedReview.photo);
      }
    }
  },
  methods: {
    ...mapActions("reviews", ["addNewReview"]),
    async createNewReview() {
      this.$validate().then(async success => {
        if (!success) return alert("Пожалуйста, заполните все поля, в том числе поле с фотографией");

        try {
          const formData = new FormData();

          formData.append("author", this.review.author);
          formData.append("occ", this.review.position);
          formData.append("text", this.review.text);
          formData.append("photo", this.review.photo);

          await this.addNewReview(formData);
          
          this.clearForm();

          this.$emit('closeCard');

          this.showTooltip();
      } catch (error) {
        if(error.message === "The given data was invalid.") {
          alert("Ошибка в данных. Убедитесь, что все поля заполнены и загруженный файл является изображением размером до 1,5 Мб.");
        } else {
          alert("Какая-то ошибка");
        }
      }
    }) 
    },
    clearForm() {
      this.review.author = "";
      this.review.position = "";
      this.review.text = "";
      this.review.photo = "";
      this.review.renderedPhoto = "";

      this.validation.reset();
    },
    showTooltip() {
      EventBus.$emit('updateEvent', { showed: true, message: 'Отзыв добавлен' });
    },
    handleFileChange(event) {
      const photo = event.target.files[0];

      if (photo.size > 1024*1024*1.5) {
        alert('Файл слишком большой. Загрузите изображение до 1,5 Мб');
      } else {
        this.review.photo = photo;
      
        renderer(photo).then(pic => {
          this.review.renderedPhoto = pic;
        });
        this.photoChanged = true;
      }
      
    },
  },
  mixins: [require('simple-vue-validator').mixin],
  validators: {
    'review.author'(value) {
      return Validator.value(value).required('Поле не должно быть пустым');
    },
    'review.position'(value) {
      return Validator.value(value).required('Поле не должно быть пустым');
    },
    'review.text'(value) {
      return Validator.value(value).required('Поле не должно быть пустым');
    },
    'review.photo'(value) {
      return Validator.value(value).required('Загрузите фото');
    }
  }
};
</script>