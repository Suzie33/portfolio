<template lang="pug">
  .form.about__form(method="POST" action="#")
    form.about__form-top.editcard__top(v-if="editModeOn")
      input.form__input.form__input--group(
        type="text"
        v-model="editedCategory.category"
      )
      .about__form-icons
        button.button-icon(
          type="button"
          @click="editCurrentCategory"
        )
          svgIcon(
            className="button-icon__icon" 
            name="tick" 
            fill="#00d70a" 
            width="15" 
            height="12"
          )
        button.button-icon(
          type="button"
          @click="editModeOn = false"
        )
          svgIcon(
            className="button-icon__icon" 
            name="close" 
            fill="#bf2929" 
            width="14" 
            height="12"
          )
    form.about__form-top.editcard__top(v-else)
      h4.about__form-group {{category.category}}
      .about__form-icons
        button.button-icon(
          type="button"
          @click="editModeOn = true"
        )
          svgIcon(className="button-icon__icon" name="pencil" fill="#414c63" width="16" height="15")
        button.button-icon(
          type="button"
          @click="removeCurrentCategory"
        )
          svgIcon(className="button-icon__icon" name="trash" fill="#414c63" width="13" height="17")
    .about__form-table
      table.table-skills
        aboutSkill(
          v-for="skill in category.skills" 
          :key="skill.id"
          :skill="skill"
        )
        
    aboutAddSkill(
      :category="category"
    )
</template>

<script>
import {mapActions} from "vuex";
import svgIcon from './svgIcon';
import aboutAddSkill from './aboutAddSkill';
import aboutSkill from './aboutSkill';
import EventBus from '../EventBus';

export default {
  data() {
    return{
      editModeOn: false,
      editedCategory: {...this.category}
    }
  },
  components: { svgIcon, aboutAddSkill, aboutSkill},
  props: {
    category: Object
  },
  methods: {
    ...mapActions("categories", ["removeCategory", "editCategory"]),
    async removeCurrentCategory() {
      try {
        await this.removeCategory(this.category);
        EventBus.$emit('updateEvent', { showed: true, message: 'Категория удалена'  });
      } catch (error) {
        alert(error.message);
      }
    },
    async editCurrentCategory() {
      try {
        await this.editCategory(this.editedCategory);
        EventBus.$emit('updateEvent', { showed: true, message: 'Категория отредактирована'  });
      } catch (error) {
        alert(error.message);
      } finally {
        this.editModeOn = false;
      }
    }
  }
};
</script>