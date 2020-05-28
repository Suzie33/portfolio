<template lang="pug">
  section.section.works
    .works__edit.editcard
      .works__edit-top.editcard__top
        h3.editcard__title Добавление работы
      .works__form
        form.form(method="POST" action="#" @submit.prevent="createNewWork")
          .works__form-left
            .works__form-photoplace
              .photoplace(
                :style="{backgroundImage: `url(${work.renderedPhoto})`}"
                :class="{'photoplace--filled' : work.renderedPhoto.length}"
              )
                .photoplace__label
                  .photoplace__text Перетащите или загрузите для загрузки изображения
                  input.photoplace__input(
                    @change="handleFileChange"
                    id="input_work_photo"
                    type="file"
                    title="Загрузить"
                    name="photo"
                  )
                  label.button.photoplace__button(
                    for="input_work_photo"
                  ) Загрузить
            .works__form-button
              .button.button--white Изменить превью
          .works__form-right
            .works__form-row
              label.form__label(for="input_work_title") Название
              input.form__input.form__input--works(
                v-model="work.title"
                placeholder="Название работы" 
                required="required" 
                id="input_work_title"
              )
            .works__form-row
              label.form__label(for="input_work_link") Ссылка
              input.form__input.form__input--works(
                v-model="work.link"
                placeholder="Ссылка на работу" 
                required="required" 
                id="input_work_link"
              )
            .works__form-row
              label.form__label(for="input_work_desc") Описание
              textarea.form__textarea.form__input.form__input--works(
                v-model="work.description"
                placeholder="Описание работы" 
                required="required" 
                id="input_work_desc"
              )
            .works__form-row
              label.form__label(for="input_work_tags") Добавление тега
              input.form__input.form__input--works.form__input--tags(
                v-model="work.techs"
                placeholder="HTML5" 
                required="required" 
                id="input_work_tags"
              )
              .works__form-tags
                ul.tags__list
                  li.tags__item 
                    span.tags__text HTML5
                    button.button-icon.button-icon__delete
                      svgIcon(className="button-icon__icon" name="close" fill="#414c63" width="11" height="11")
                  li.tags__item 
                    span.tags__text CSS
                    button.button-icon.button-icon__delete
                      svgIcon(className="button-icon__icon" name="close" fill="#414c63" width="11" height="11")
            .form__buttons
              .button.button--white Отмена
              input.button(
                type="submit" 
                value="Сохранить"
              )

    ul.works__list
      li.works__item
        .addcard
          .addcard__label
            button.addcard__button
              .plus-icon.plus-icon--addcard
            .addcard__text Добавить работу
      li.works__item(v-for="work in works" :key="work.id")
        worksCard(
          :work="work"
        )

</template>

<script>
import svgIcon from './svgIcon';
import { mapActions, mapState } from 'vuex';
import { renderer } from '../helpers/pictures';
import worksCard from './worksCard';

export default {
  components: { svgIcon, worksCard },
  data: () => {
    return {
      work: {
        title: "",
        techs: "",
        photo: {},
        link: "",
        description: "",
        renderedPhoto: ""
      }
    }
  },
  computed: {
    ...mapState("works", {
      works: state => state.works
    })
  },
  created() {
    this.getWorks();
  },
  methods: {
    ...mapActions("works", ["addNewWork", "getWorks"]),
    async createNewWork() {
      try {
        const formData = new FormData();

        formData.append("title", this.work.title);
        formData.append("techs", this.work.techs);
        formData.append("photo", this.work.photo);
        formData.append("link", this.work.link);
        formData.append("description", this.work.description);

        console.log(this.work.photo);
        

        await this.addNewWork(formData);

        this.work.title = "",
        this.work.techs = "",
        this.work.photo = {},
        this.work.link = "",
        this.work.description = "",
        this.work.renderedPhoto = ""
      } catch (error) {
        console.log(error);
      }
    },
    handleFileChange(event) {
      const photo = event.target.files[0];
      this.work.photo = photo;
      
      renderer(photo).then(pic => {
        this.work.renderedPhoto = pic;
      })
    }
  }
};
</script>
