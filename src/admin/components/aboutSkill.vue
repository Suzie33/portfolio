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
import * as apiSettings from '../apiSettings';

export default {
  props: [
    "categoryId"
  ],
  data() {
    return {
      skill: {
        title: "",
        percent: "",
        category: this.categoryId
      }
    }
  },
  methods: {
    addNewSkill() {
      apiSettings.axios.post('skills', this.skill).then(response => {
        this.$emit('skillAdded', response.data);
        this.skill.title = "";
        this.skill.percent = "";
      })
    }
  }
};
</script>
