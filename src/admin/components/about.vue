<template lang="pug">
  section.section.about
    .section__top
      h2.section__title Блок &laquo;Обо мне&raquo;
      button.button-inscription(
        @click="addCategoryMode = true"
      )
        .button-inscription__icon
          .plus-icon
        span.button-inscription__text Добавить группу
    ul.about__list
      li.about__item.editcard(v-if="addCategoryMode")
        .form.about__form(method="POST" action="#")
          form.about__form-top.editcard__top(
            @submit.prevent="createCategory"
            )
            input.form__input.form__input--group(
              v-model="category.title"
              placeholder="Название новой группы" 
              required="required"
              )
            .about__form-icons
              button.button-icon.button-icon__ok(type="submit")
                svgIcon(className="button-icon__icon" name="tick" fill="#00d70a" width="15" height="12")
              button.button-icon.button-icon__delete
                svgIcon(className="button-icon__icon" name="close" fill="#bf2929" width="14" height="12")
          aboutAddSkill

      li.about__item.editcard(v-for="cat in categories" :key="cat.id")
        aboutCard(
          :category="cat"
        )
    closeButton

</template>

<script>
import { mapActions, mapState } from 'vuex';
import svgIcon from './svgIcon';
import aboutAddSkill from './aboutAddSkill';
import aboutCard from './aboutCard';
import closeButton from './closeButton';
import EventBus from '../EventBus';

export default {
  components: { svgIcon, aboutAddSkill, aboutCard, closeButton },
  data: () => {
    return {
      category: {
        title: ""
      },
      addCategoryMode: false,
    }
    
  },
  computed: {
    ...mapState("categories", {
      categories: state => state.categories
    })
  },
  created() {
    this.getCategories();
  },
  methods: {
    ...mapActions("categories", ["addCategory", "getCategories"]),
    async createCategory() {
      try {
        await this.addCategory(this.category.title);
        this.category.title = "";
        this.addCategoryMode = false;
        EventBus.$emit('updateEvent', { showed: true, message: 'Категория добавлена'  });
      } catch (error) {
        alert(error.message);
      }
    },
  }
};
</script>
