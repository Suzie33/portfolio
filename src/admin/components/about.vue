<template lang="pug">
  section.section.about
    .about__top
      h2.section__title Блок &laquo;Обо мне&raquo;
      button.button-inscription
        .button-inscription__icon
          .plus-icon
        span.button-inscription__text Добавить группу
    ul.about__list
      li.about__item.editcard
        .form.about__form(method="POST" action="#")
          form.about__form-top.editcard__top(@submit.prevent="createCategory")
            input.form__input.form__input--group(
              v-model="title"
              placeholder="Название новой группы" 
              required="required"
              )
            .about__form-icons
              button.button-icon.button-icon__ok(type="submit")
                svgIcon(className="button-icon__icon" name="tick" fill="#00d70a" width="15" height="12")
              button.button-icon.button-icon__delete
                svgIcon(className="button-icon__icon" name="close" fill="#bf2929" width="14" height="12")
          aboutSkill

      li.about__item.editcard(v-for="cat in categories" :key="cat.id")
        .form.about__form(method="POST" action="#")
          form.about__form-top.editcard__top
            h4.about__form-group {{cat.category}}
            .about__form-icons
              button.button-icon.button-icon__delete
                svgIcon(className="button-icon__icon" name="pencil" fill="#414c63" width="16" height="15")
          .about__form-table
            table.table-skills
              tr.table-skills__row(v-for="skill in cat.skills" :key="skill.id")
                td.table-skills__skill {{skill.title}}
                td.table-skills__value {{skill.percent}}
                td.table-skills__percent %
                td.table-skills__icons
                  .about__form-icons
                    button.button-icon.button-icon__ok
                      svgIcon(className="button-icon__icon" name="pencil" fill="#414c63" width="16" height="15")
                    button.button-icon.button-icon__delete
                      svgIcon(className="button-icon__icon" name="trash" fill="#414c63" width="13" height="17")
              
          aboutSkill(
            :category-id="cat.id"
            @skillAdded="addSkill"
            )

</template>

<script>
import svgIcon from './svgIcon';
import aboutSkill from './aboutSkill';
import * as apiSettings from '../apiSettings';

export default {
  components: { svgIcon, aboutSkill },
  data: () => ({
    title: "",
    categories: []
  }),
  created() {
    this.getCategories();
  },
  methods: {
    createCategory() {
      apiSettings.axios
      .post('categories', {
        title: this.title
      })
      .then(response => {
        this.categories.unshift(response.data)
        console.log(response.data);
      })
      .catch(error => {
        console.log(error.response.data);
      })
    },
    getCategories() {
      apiSettings.axios.get('categories/315').then(response => {
        this.categories = response.data;
      })
    },
    addSkill(newSkill) {
      this.categories = this.categories.map(category => {
        if (category.id === newSkill.category) {
          category.skills.push(newSkill);
        }
        return category;
      })
    }
  }
};
</script>
