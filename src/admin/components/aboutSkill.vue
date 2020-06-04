<template lang="pug">
  tr.table-skills__row(v-if="editModeOn")
    td.table-skills__skill 
      input.form__input.form__input--editing(
        type="text" 
        v-model="editedSkill.title"
      )
    td.table-skills__value
      input.form__input.form__input--editing(
        type="text" 
        v-model="editedSkill.percent"
      )
    td.table-skills__percent %
    td.table-skills__icons
      .about__form-icons
        button.button-icon(
          type="button"
          @click="editCurrentSkill"
        )
          svgIcon(className="button-icon__icon" name="tick" fill="#00d70a" width="15" height="12")
        button.button-icon(
          type="button"
          @click="editModeOn = false"
        )
          svgIcon(className="button-icon__icon" name="close" fill="#bf2929" width="14" height="12")

  tr.table-skills__row(v-else)
    td.table-skills__skill {{skill.title}}
    td.table-skills__value {{skill.percent}}
    td.table-skills__percent %
    td.table-skills__icons
      .about__form-icons
        button.button-icon.button-icon__ok(
          @click="editModeOn = true"
        )
          svgIcon(className="button-icon__icon" name="pencil" fill="#414c63" width="16" height="15")
        button.button-icon.button-icon__delete(
          @click="removeCurrentSkill"
        )
          svgIcon(className="button-icon__icon" name="trash" fill="#414c63" width="13" height="17")
</template>

<script>
import {mapActions} from "vuex";
import svgIcon from './svgIcon';
import EventBus from '../EventBus';

export default {
  components: {
    svgIcon
  },
  props: {
    skill: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  data() {
    return{
      editModeOn: false,
      editedSkill: {...this.skill}
    }
  },
  methods: {
    ...mapActions("skills", ["removeSkill", "editSkill"]),
    async removeCurrentSkill() {
      try {
        await this.removeSkill(this.skill);
        EventBus.$emit('updateEvent', { showed: true });
      } catch (error) {
        alert(error.message);
      }
    },
    async editCurrentSkill() {
      try {
        await this.editSkill(this.editedSkill);
        EventBus.$emit('updateEvent', { showed: true });
      } catch (error) {
        alert(error.message);
      } finally {
        this.editModeOn = false;
      }
    }
  }
};
</script>