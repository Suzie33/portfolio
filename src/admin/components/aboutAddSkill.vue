<template lang="pug">
  form.about__form-bottom(@submit.prevent="addNewSkill")
    input.form__input.form__input--skill(
      type="text" 
      placeholder="Новый навык" 
      required="required" 
      v-model="skill.title"
      )
    input.form__input.form__input--percent(
      placeholder="100%" 
      required="required" 
      v-model="skill.percent"
      )
    button.about__form-button(type="submit")
      .plus-icon
</template>

<script>
import svgIcon from './svgIcon';
import {mapActions} from 'vuex';

export default {
  props: [
    "category"
  ],
  data() {
    return {
      skill: {
        title: "",
        percent: ""
      }
    }
  },
  methods: {
    ...mapActions("skills", ["addSkill"]),
    async addNewSkill() {
      const skillData = {
          ...this.skill,
          category: this.category.id
        }
      try {
        await this.addSkill(skillData);
      } catch (error) {
        console.log(error);
      }
    }
  }
};
</script>
