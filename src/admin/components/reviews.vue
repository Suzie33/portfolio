<template lang="pug">
  section.section.reviews
    .section__top
      h2.section__title Блок &laquo;Отзывы&raquo;
    .reviews__edit(v-if="addingReviewMode")
      reviewsAddingCard(
        @closeCard="addingReviewMode = false"
      )

    .reviews__edit(v-if="editReviewMode")
      reviewsEditCard(
        :editedReview="editedReview"
        @closeCard="editReviewMode = false"
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
import reviewsAddingCard from './reviewsAddingCard';
import reviewsEditCard from './reviewsEditCard';
import { Validator } from "simple-vue-validator";
import EventBus from '../EventBus';

export default {
  components: { svgIcon, reviewCard, reviewsAddingCard, reviewsEditCard },
  data: () => {
    return {
      review: {
        author: "",
        position: "",
        text: "",
        photo: "",
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
      this.$validate().then(async success => {
        if (!success) return alert("Пожалуйста, заполните все поля, в том числе поле с фотографией");

        try {
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

          this.validation.reset();

          this.addingReviewMode = false;

          EventBus.$emit('updateEvent', { showed: true, message: 'Отзыв добавлен'  });
      } catch (error) {
        if(error.message === "The given data was invalid.") {
          alert("Ошибка в данных. Убедитесь, что все поля заполнены и загруженный файл является изображением размером до 1,5 Мб.");
        } else {
          alert("Какая-то ошибка");
        }
      }
    }) 
      
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

        EventBus.$emit('updateEvent', { showed: true, message: 'Отзыв отредактирован' });
      } catch (error) {
        console.log(error);
        alert("Какая-то ошибка");
      }
    }
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