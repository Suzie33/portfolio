<template lang="pug">
  section.section.reviews
    .reviews__edit.editcard
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
                v-if="review.renderedPhoto.length == false"
              )
                svgIcon(className="avatar--none__icon" name="user" fill="#c92e2e" width="85" height="113")
            .form__avatar-btn
              label(
                v-if="review.renderedPhoto.length == false"
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
                 required="required" 
                 id="input_review_name"
                 v-model="review.author"
                )
              .reviews__form-block
                label.form__label(for="input_review_position") Титул автора
                input.form__input.form__input--reviews(
                  v-model="review.position"
                  placeholder="Преподаватель" 
                  required="required" 
                  id="input_review_position"
                )
            .reviews__form-row
              .reviews__form-block
                label.form__label(for="input_review_text") Отзыв
                textarea.form__textarea.form__input.form__input--reviews(
                  v-model="review.text"
                  placeholder="Текст отзыва" 
                  required="required" 
                  id="input_review_text"
                )
            .form__buttons
              input.button.button--white(type="reset" value="Отмена")
              input.button(type="submit" value="Сохранить")
    ul.reviews__list
      li.reviews__item
        .addcard
          .addcard__label
            button.addcard__button
              .plus-icon.plus-icon--addcard
            .addcard__text Добавить отзыв
      li.reviews__item
        .reviews__item-top
          .reviews__source
            .avatar.reviews__avatar
              img(src='../../images/content/review1.jpg' alt="Avatar").avatar__pic
            .reviews__author
              .reviews__name Владимир Сабанцев
              .reviews__position Преподаватель
        .reviews__item-content
          p.reviews__item-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
          .reviews__item-controls
              button.button-inscription.button-inscription--works
                span.button-inscription__text Править
                .button-inscription__icon
                  svgIcon(className="button-icon__icon" name="pencil" fill="#383bcf" width="17" height="17")
              button.button-inscription.button-inscription--works
                span.button-inscription__text Удалить
                .button-inscription__icon
                  svgIcon(className="button-icon__icon" name="close" fill="#c92e2e" width="15" height="15")

</template>

<script>
import svgIcon from './svgIcon';
import { mapActions } from 'vuex';
import { renderer, getAbsoluteImgPath } from '../helpers/pictures';

export default {
  components: { svgIcon },
  data: () => {
    return {
      review: {
        author: "",
        position: "",
        text: "",
        photo: {},
        renderedPhoto: ""
      },
      // addingWorkMode: false,
      // editWorkMode: false,
      // editedWork: {}
    }
  },
  methods: {
    ...mapActions("reviews", ["addNewReview"]),
    async createNewReview() {
      const formData = new FormData();

      formData.append("author", this.review.author);
      formData.append("occ", this.review.position);
      formData.append("text", this.review.text);
      formData.append("photo", this.review.photo);

      await this.addNewReview(formData);
      
    },
    handleFileChange(event) {
      const photo = event.target.files[0];
      this.review.photo = photo;
      
      renderer(photo).then(pic => {
        this.review.renderedPhoto = pic;
      })
    },
  }
};
</script>