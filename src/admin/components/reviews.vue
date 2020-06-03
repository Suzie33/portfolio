<template lang="pug">
  section.section.reviews
    .reviews__edit.editcard(v-if="addingReviewMode")
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
              button.button.button--white(
                @click="addingReviewMode = false"
                type="button"
              ) Отмена
              input.button(
                type="submit" 
                value="Сохранить" 
                )
    .reviews__edit.editcard(v-if="editReviewMode")
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
                 required="required" 
                 id="input_review_name"
                 v-model="editedReview.author"
                )
              .reviews__form-block
                label.form__label(for="input_review_position") Титул автора
                input.form__input.form__input--reviews(
                  v-model="editedReview.occ" 
                  required="required" 
                  id="input_review_position"
                )
            .reviews__form-row
              .reviews__form-block
                label.form__label(for="input_review_text") Отзыв
                textarea.form__textarea.form__input.form__input--reviews(
                  v-model="editedReview.text"
                  required="required" 
                  id="input_review_text"
                )
            .form__buttons
              button.button.button--white(
                @click="editReviewMode = false"
                type="button"
              ) Отмена
              input.button(
                type="submit" 
                value="Сохранить" 
                )
    ul.reviews__list
      li.reviews__item
        .addcard
          .addcard__label
            button.addcard__button(
              @click="addingReviewMode = true"
            )
              .plus-icon.plus-icon--addcard
              .addcard__text Добавить отзыв
      li.reviews__item(v-for="review in reviews" :key="review.id")
        reviewCard(
          :review="review"
          @editCurrentReviewMode=("editReviewModeOn")
        )

</template>

<script>
import svgIcon from './svgIcon';
import { mapActions, mapState } from 'vuex';
import { renderer, getAbsoluteImgPath } from '../helpers/pictures';
import reviewCard from './reviewCard';

export default {
  components: { svgIcon, reviewCard },
  data: () => {
    return {
      review: {
        author: "",
        position: "",
        text: "",
        photo: {},
        renderedPhoto: ""
      },
      addingReviewMode: false,
      editReviewMode: false,
      editedReview: {},
      photoChanged: false
    }
  },
  computed: {
    ...mapState("reviews", {
      reviews: state => state.reviews
    }),
    photoUrlEdited() {
      if(this.review.renderedPhoto) {
        return this.review.renderedPhoto;
      } else {
        return getAbsoluteImgPath(this.editedReview.photo);
      }
    }
  },
  created() {
    this.getReviews();
  },
  methods: {
    ...mapActions("reviews", ["addNewReview", "getReviews", "editReview"]),
    async createNewReview() {
      const formData = new FormData();

      formData.append("author", this.review.author);
      formData.append("occ", this.review.position);
      formData.append("text", this.review.text);
      formData.append("photo", this.review.photo);

      await this.addNewReview(formData);
      
      this.review.author = "";
      this.review.position = "";
      this.review.text = "";
      this.review.photo = "";
      this.review.renderedPhoto = "";

      this.addingReviewMode = false;
    },
    handleFileChange(event) {
      const photo = event.target.files[0];
      this.review.photo = photo;
      
      renderer(photo).then(pic => {
        this.review.renderedPhoto = pic;
      });
      this.photoChanged = true;
    },
    editReviewModeOn(currentReview) {
      this.editReviewMode = true;

      this.editedReview = {...currentReview};
    },
    async editCurrentReview(){
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

        this.editReviewMode = false;
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>