<template lang="pug">
  .editcard
    .reviews__edit-top.editcard__top
      h3.editcard__title Редактировать отзыв
    .reviews__form
      form.form.form--reviews(
        method="POST" 
        action="#"
        @submit.prevent="editCurrentReview"
      )
        .reviews__form-left
          .form__avatar.avatar(
            :style="{backgroundImage: `url(${photoUrlEdited})`}"
            :class="{'avatar--filled' : editedReview.photo.length}"
          )
            input.photoplace__input(
              @change="handleFileChange"
              id="input_review_photo"
              type="file"
              title="Загрузить"
              name="photo"
            )
            .avatar--none(
              v-if="editedReview.photo.length == false"
            )
              svgIcon(className="avatar--none__icon" name="user" fill="#c92e2e" width="85" height="113")
          .form__avatar-btn
            label(
              v-if="editedReview.photo.length == false"
              for="input_review_photo"
            ).button.button--white Добавить фото
            label(
              v-if="editedReview.photo.length"
              for="input_review_photo"
            ).button.button--white Изменить фото
        .reviews__form-right
          .reviews__form-row.reviews__form-row--top
            .reviews__form-block
              label.form__label(for="input_review_name") Имя автора
              input.form__input.form__input--reviews( 
              id="input_review_name"
              v-model="editedReview.author"
              )
              div.form__error.form__error--review {{validation.firstError('editedReview.author')}}
            .reviews__form-block
              label.form__label(for="input_review_position") Титул автора
              input.form__input.form__input--reviews(
                v-model="editedReview.occ" 
                id="input_review_position"
              )
              div.form__error.form__error--review {{validation.firstError('editedReview.occ')}}
          .reviews__form-row
            .reviews__form-block
              label.form__label(for="input_review_text") Отзыв
              textarea.form__textarea.form__input.form__input--reviews(
                v-model="editedReview.text"
                id="input_review_text"
              )
              div.form__error.form__error--review {{validation.firstError('editedReview.text')}}
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
      photoChanged: false
    }
  },
  props: {
    editedReview: Object
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
    ...mapActions("reviews", ["editReview"]),
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
    async editCurrentReview(){
      this.$validate().then(async success => {
        if (!success) return alert("Пожалуйста, заполните все поля, в том числе поле с фотографией");

        try {
        const formData = new FormData();

        formData.append("author", this.editedReview.author);
        formData.append("occ", this.editedReview.occ);
        formData.append("text", this.editedReview.text);
        
        if (this.photoChanged) {
          formData.append("photo", this.review.photo);
        }
        
        const editedReviewData = {
          editedReview: formData, 
          editedReviewId: this.editedReview.id
        };
        
        await this.editReview(editedReviewData);

        this.$emit('closeCard');

        this.showTooltip();
      } catch (error) {
        console.log(error);
        alert("Какая-то ошибка");
      }
      })
    },
    showTooltip() {
      EventBus.$emit('updateEvent', { showed: true, message: 'Отзыв отредактирован' });
    }
  },
  mixins: [require('simple-vue-validator').mixin],
  validators: {
    'editedReview.author'(value) {
      return Validator.value(value).required('Поле не должно быть пустым');
    },
    'editedReview.occ'(value) {
      return Validator.value(value).required('Поле не должно быть пустым');
    },
    'editedReview.text'(value) {
      return Validator.value(value).required('Поле не должно быть пустым');
    },
    'editedReview.photo'(value) {
      return Validator.value(value).required('Загрузите фото');
    }
  }
};
</script>