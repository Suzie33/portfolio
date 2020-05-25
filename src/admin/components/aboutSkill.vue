<template lang="pug">
  tr.table-skills__row
    td.table-skills__skill {{skill.title}}
    td.table-skills__value {{skill.percent}}
    td.table-skills__percent %
    td.table-skills__icons
      .about__form-icons
        button.button-icon.button-icon__ok
          svgIcon(className="button-icon__icon" name="pencil" fill="#414c63" width="16" height="15")
        button.button-icon.button-icon__delete
          svgIcon(className="button-icon__icon" name="trash" fill="#414c63" width="13" height="17")
</template>

<script>
import svgIcon from './svgIcon';

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
  }
};
</script>