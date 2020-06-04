<template lang="pug">
  section.section.works
    .section__top
      h2.section__title Блок &laquo;Работы&raquo;
    .works__edit.editcard(v-if="addingWorkMode")
      .works__edit-top.editcard__top
        h3.editcard__title Добавление работы
      .works__form
        form.form(method="POST" @submit.prevent="createNewWork")
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
                    refs="fileInput"
                    id="input_work_photo"
                    
                    type="file"
                    title="Загрузить"
                    name="photo"
                  )
                  label.button.photoplace__button(
                    for="input_work_photo"
                  ) Загрузить
                  div.form__error.form__error--photo {{validation.firstError('work.photo')}}
            .works__form-button(v-if="work.renderedPhoto.length")
              label.button.button--white(
                for="input_work_photo"
              ) Изменить превью
          .works__form-right
            .works__form-row
              label.form__label(for="input_work_title") Название
              input.form__input.form__input--works(
                v-model="work.title"
                placeholder="Название работы" 
                id="input_work_title"
              )
              div.form__error {{validation.firstError('work.title')}}
            .works__form-row
              label.form__label(for="input_work_link") Ссылка
              input.form__input.form__input--works(
                v-model="work.link"
                placeholder="Ссылка на работу"
                id="input_work_link"
              )
              div.form__error {{validation.firstError('work.link')}}
            .works__form-row
              label.form__label(for="input_work_desc") Описание
              textarea.form__textarea.form__input.form__input--works(
                v-model="work.description"
                placeholder="Описание работы"
                id="input_work_desc"
              )
              div.form__error {{validation.firstError('work.description')}}
            .works__form-row
              label.form__label(for="input_work_tags") Добавление тега
              input.form__input.form__input--works.form__input--tags(
                v-model="work.techs"
                placeholder="HTML5, CSS3, Vue.js"
                id="input_work_tags"
              )
              div.form__error {{validation.firstError('work.techs')}}
            .form__buttons
              button.button.button--white(
                @click="addingWorkMode = false"
              ) Отмена
              input.button(
                type="submit" 
                value="Сохранить"
              )
    .works__edit.editcard(v-if="editWorkMode" )
      .works__edit-top.editcard__top
        h3.editcard__title Редактирование работы
      .works__form
        form.form(method="POST" @submit.prevent="editCurrentWork")
          .works__form-left
            .works__form-photoplace
              .photoplace(
                :style="{backgroundImage: `url(${photoUrlEdited})`}"
                :class="{'photoplace--filled' : editedWork.photo.length}"
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
            .works__form-button(v-if="editedWork.photo.length")
              label.button.button--white(
                for="input_work_photo"
              ) Изменить превью
          .works__form-right
            .works__form-row
              label.form__label(for="input_work_title") Название
              input.form__input.form__input--works(
                v-model="editedWork.title"
                required="required" 
                id="input_work_title"
              )
            .works__form-row
              label.form__label(for="input_work_link") Ссылка
              input.form__input.form__input--works(
                v-model="editedWork.link"
                required="required" 
                id="input_work_link"
              )
            .works__form-row
              label.form__label(for="input_work_desc") Описание
              textarea.form__textarea.form__input.form__input--works(
                v-model="editedWork.description"
                required="required" 
                id="input_work_desc"
              )
            .works__form-row
              label.form__label(for="input_work_tags") Добавление тега
              input.form__input.form__input--works.form__input--tags(
                v-model="editedWork.techs"
                required="required" 
                id="input_work_tags"
              )
              .works__form-tags
                ul.tags__list
                  li.tags__item(v-for="(tag, index) in tagsArray")
                    span.tags__text {{tag}}
                    button.button-icon.button-icon__delete(
                      @click.prevent="deleteTag(tag, index)"
                    )
                      svgIcon(className="button-icon__icon" name="close" fill="#414c63" width="11" height="11")
            .form__buttons
              button.button.button--white(
                @click="editWorkMode = false"
              ) Отмена
              input.button(
                type="submit" 
                value="Сохранить"
              )

    ul.works__list
      li.works__item
        .addcard
          .addcard__label
            button.addcard__button(
              @click="addingWorkMode = true"
            )
              .plus-icon.plus-icon--addcard
              .addcard__text Добавить работу
      li.works__item(v-for="work in works" :key="work.id")
        worksCard(
          :work="work"
          @editCurrentWork=("editWorkModeOn")
        )

</template>

<script>
import svgIcon from './svgIcon';
import { mapActions, mapState } from 'vuex';
import { renderer, getAbsoluteImgPath } from '../helpers/pictures';
import worksCard from './worksCard';
import { Validator } from "simple-vue-validator";

export default {
  components: { svgIcon, worksCard },
  data: () => {
    return {
      work: {
        title: "",
        techs: "",
        photo: "",
        link: "",
        description: "",
        renderedPhoto: ""
      },
      addingWorkMode: false,
      editWorkMode: false,
      editedWork: {}
    }
  },
  computed: {
    ...mapState("works", {
      works: state => state.works
    }),
    photoUrl() {
      return getAbsoluteImgPath(this.editedWork.photo);
    },
    photoUrlEdited() {
      if(this.work.renderedPhoto) {
        return this.work.renderedPhoto;
      } else {
        return getAbsoluteImgPath(this.editedWork.photo);
      }
    },
    tagsArray() {
      return this.editedWork.techs.split(",");
    }
  },
  created() {
    this.getWorks();
  },
  methods: {
    ...mapActions("works", ["addNewWork", "getWorks", "editWork"]),
    createNewWork() {
      this.$validate().then(async success => {
        if (!success) return alert("Пожалуйста, заполните все поля, в том числе поле с фотографией");

        try {
          const formData = new FormData();

          formData.append("title", this.work.title);
          formData.append("techs", this.work.techs);
          formData.append("photo", this.work.photo);
          formData.append("link", this.work.link);
          formData.append("description", this.work.description);

          await this.addNewWork(formData);

          this.work.title = "",
          this.work.techs = "",
          this.work.photo = "",
          this.work.link = "",
          this.work.description = "",
          this.work.renderedPhoto = "",
          this.addingWorkMode = false
      } catch (error) {
        console.log(error);
      }
    }) 
      
    },
    handleFileChange(event) {
      const photo = event.target.files[0];
      
      if (photo.size > 1024*1024*1.5) {
        alert('Файл слишком большой. ');
      } else {
        this.work.photo = photo;
      
        renderer(photo).then(pic => {
        this.work.renderedPhoto = pic;
      })
      }
      
    },
    editWorkModeOn(currentWork) {
      this.editWorkMode = true;
      
      this.editedWork = {...currentWork};
    },
    async editCurrentWork() {
      try {
        const formData = new FormData();

        formData.append("title", this.editedWork.title);
        formData.append("techs", this.editedWork.techs);
        formData.append("photo", this.work.photo);
        formData.append("link", this.editedWork.link);
        formData.append("description", this.editedWork.description);
        
        const editedWorkData = {
          editedWork: formData, 
          editedWorkId: this.editedWork.id
        };
        
        await this.editWork(editedWorkData);

        this.editWorkMode = false;
      } catch (error) {
        console.log(error);
      }
    },
    deleteTag(tag, index) {
      this.tagsArray.splice(index, 1);
      this.editedWork.techs = this.tagsArray.toString();
    }
  },
  mixins: [require('simple-vue-validator').mixin],
  validators: {
    'work.title'(value) {
      return Validator.value(value).required('Поле не должно быть пустым');
    },
    'work.techs'(value) {
      return Validator.value(value).required('Поле не должно быть пустым');
    },
    'work.link'(value) {
      return Validator.value(value).required('Поле не должно быть пустым');
    },
    'work.description'(value) {
      return Validator.value(value).required('Поле не должно быть пустым');
    },
    'work.photo'(value) {
      return Validator.value(value).required('Загрузите фотографию размером до 1,5 Мб');
    }
  }
};
</script>
