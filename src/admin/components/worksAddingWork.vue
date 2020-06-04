<template lang="pug">
  .editcard
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
                  ref="fileInput"
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
              @click.prevent="$emit('closeCard')"
            ) Отмена
            input.button(
              type="submit" 
              value="Сохранить"
                )
</template>

<script>
import svgIcon from './svgIcon';
import { mapActions } from 'vuex';
import { renderer, getAbsoluteImgPath } from '../helpers/pictures';
import { Validator } from "simple-vue-validator";
import EventBus from '../EventBus';

export default {
  components: { svgIcon },
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
    }
  },
  computed: {
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
  methods: {
    ...mapActions("works", ["addNewWork"]),
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

          this.clearForm();

          this.$emit('closeCard');

          this.showTooltip();
      } catch (error) {
        if(error.message === "The given data was invalid.") {
          alert("Ошибка в данных. Убедитесь, что все поля заполнены и загруженный файл является изображением размером до 1,5 Мб.");
        } else {
          alert("Какая-то ошибка");
        }
      }
      })
    },
    clearForm() {
      this.work.title = "",
      this.work.techs = "",
      this.work.photo = "",
      this.work.link = "",
      this.work.description = "",
      this.work.renderedPhoto = "",

      this.validation.reset();
    },
    showTooltip() {
      EventBus.$emit('updateEvent', { showed: true, message: 'Запись добавлена' });
    },
    handleFileChange(event) {
      const photo = event.target.files[0];
      
      if (photo.size > 1024*1024*1.5) {
        alert('Файл слишком большой. Загрузите изображение до 1,5 Мб.');
      } else {
        this.work.photo = photo;
      
        renderer(photo).then(pic => {
        this.work.renderedPhoto = pic;
      })
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
