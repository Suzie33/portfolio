<template lang="pug">
  .works__card
    .works__item-preview
      img(:src='photoUrl' alt="Work1").works__item-photo
      .works__item-tags
        .works__form-tags
          ul.tags__list
            li.tags__item {{work.techs}}
    .works__item-content
      .works__item-desc
        h3.works__item-title {{work.title}}
        p.works__item-text {{work.description}}
        a.works__item-link(href="#" target="_blank") {{work.link}}
      .works__item-controls
        button.button-inscription.button-inscription--works(
          @click.prevent="$emit('editCurrentWork', work)"
        )
          span.button-inscription__text Править
          .button-inscription__icon
            svgIcon(className="button-icon__icon" name="pencil" fill="#383bcf" width="17" height="17")
        button.button-inscription.button-inscription--works(
          @click="removeCurrentWork"
          :disabled="isDisabled"
        )
          span.button-inscription__text Удалить
          .button-inscription__icon
            svgIcon(className="button-icon__icon" name="close" fill="#c92e2e" width="15" height="15")
</template>

<script>
import {mapActions} from "vuex";
import svgIcon from './svgIcon';
import {getAbsoluteImgPath} from '../helpers/pictures';

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
    work: Object
  },
  computed: {
    photoUrl() {
      return getAbsoluteImgPath(this.work.photo);
    }
  },
  methods: {
    ...mapActions("works", ["removeWork"]),
    async removeCurrentWork() {
      try {
        this.isDisabled = true;
        await this.removeWork(this.work);
      } catch (error) {
        console.log(error);
      } finally {
        this.isDisabled = false;
      }
    }
  }
};
</script>
