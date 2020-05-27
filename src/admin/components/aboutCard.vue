<template lang="pug">
  .form.about__form(method="POST" action="#")
    form.about__form-top.editcard__top
      h4.about__form-group {{category.category}}
      .about__form-icons
        button.button-icon.button-icon__delete
          svgIcon(className="button-icon__icon" name="pencil" fill="#414c63" width="16" height="15")
        button.button-icon.button-icon__delete
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
import svgIcon from './svgIcon';
import aboutAddSkill from './aboutAddSkill';
import aboutSkill from './aboutSkill';

export default {
  components: { svgIcon, aboutAddSkill, aboutSkill},
  props: {
    category: Object
  }
};
</script>