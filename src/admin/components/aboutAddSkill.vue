<template lang="pug">
  form.about__form-bottom(@submit.prevent="addNewSkill")
    input.form__input.form__input--skill(
      type="text" 
      placeholder="Новый навык" 
      required="required" 
      v-model="skill.title"
      )
    input.form__input.form__input--percent(
      type="number"
      step="1"
      min="1"
      max="100"
      placeholder="100" 
      required="required" 
      v-model="skill.percent"
      )
    button.about__form-button(type="submit" :disabled="isDisabled")
      .plus-icon
</template>

<script>
import svgIcon from './svgIcon';
import {mapActions} from 'vuex';
import EventBus from '../EventBus';

export default {
  props: [
    "category"
  ],
  data() {
    return {
      skill: {
        title: "",
        percent: ""
      },
      isDisabled: false
    };
  },
  methods: {
    ...mapActions("skills", ["addSkill"]),
    async addNewSkill() {
      const skillData = {
        ...this.skill,
        category: this.category.id
      };
      this.isDisabled = true;
      try {
        await this.addSkill(skillData);
        this.skill.title = "";
        this.skill.percent = "";
        EventBus.$emit('updateEvent', { showed: true, message: 'Навык добавлен'  });
      } catch (error) {
        alert(error.message);
      } finally {
        this.isDisabled = false;
      }
    }
  }
};
</script>
