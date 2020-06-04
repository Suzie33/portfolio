<template lang="pug">
  .reviews__card
    .reviews__item-top
      .reviews__source
        .avatar.reviews__avatar
          img(:src='photoUrl' alt="Avatar").avatar__pic
        .reviews__author
          .reviews__name {{review.author}}
          .reviews__position {{review.occ}}
    .reviews__item-content
      p.reviews__item-text {{review.text}}
      .reviews__item-controls
          button.button-inscription.button-inscription--works(
            @click="$emit('editCurrentReviewMode', review)"
          )
            span.button-inscription__text Править
            .button-inscription__icon
              svgIcon(className="button-icon__icon" name="pencil" fill="#383bcf" width="17" height="17")
          button.button-inscription.button-inscription--works(
            @click="removeCurrentReview"
          )
            span.button-inscription__text Удалить
            .button-inscription__icon
              svgIcon(className="button-icon__icon" name="close" fill="#c92e2e" width="15" height="15")
</template>

<script>
import {mapActions} from "vuex";
import svgIcon from './svgIcon';
import {getAbsoluteImgPath} from '../helpers/pictures';
import EventBus from '../EventBus';

export default {
  components: {
    svgIcon
  },
  data() {
    return {
      isDisabled: false
    }
  },
  props: {
    review: Object
  },
  computed: {
    photoUrl() {
      return getAbsoluteImgPath(this.review.photo);
    }
  },
  methods: {
    ...mapActions("reviews", ["removeReview"]),
    async removeCurrentReview() {
      try {
        this.isDisabled = true;
        await this.removeReview(this.review);
        EventBus.$emit('updateEvent', { showed: true, message: 'Отзыв удален'  });
      } catch (error) {
        alert(error.message);
      } finally {
        this.isDisabled = false;
      }
    }
  }
};
</script>
