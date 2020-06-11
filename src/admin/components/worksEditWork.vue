<template lang="pug">
  .editcard
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
                div.form__error.form__error--photo {{validation.firstError('editedWork.photo')}}
          .works__form-button(v-if="editedWork.photo.length")
            label.button.button--white(
              for="input_work_photo"
            ) Изменить превью
        .works__form-right
          .works__form-row
            label.form__label(for="input_work_title") Название
            input.form__input.form__input--works(
              v-model="editedWork.title"
              id="input_work_title"
            )
            div.form__error {{validation.firstError('editedWork.title')}}
          .works__form-row
            label.form__label(for="input_work_link") Ссылка
            input.form__input.form__input--works(
              v-model="editedWork.link"
              id="input_work_link"
            )
            div.form__error {{validation.firstError('editedWork.link')}}
          .works__form-row
            label.form__label(for="input_work_desc") Описание
            textarea.form__textarea.form__input.form__input--works(
              v-model="editedWork.description"
              id="input_work_desc"
            )
            div.form__error {{validation.firstError('editedWork.description')}}
          .works__form-row
            label.form__label(for="input_work_tags") Добавление тега
            input.form__input.form__input--works.form__input--tags(
              v-model="editedWork.techs"
              id="input_work_tags"
            )
            div.form__error {{validation.firstError('editedWork.techs')}}
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
  props: {
    editedWork: Object
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
    ...mapActions("works", ["editWork"]),
    handleFileChange(event) {
      const photo = event.target.files[0];
      
      if (photo.size > 1024*1024*1.5) {
        alert('Файл слишком большой. Загрузите изображение до 1,5 Мб');
      } else {
        this.work.photo = photo;
      
        renderer(photo).then(pic => {
        this.work.renderedPhoto = pic;
      })
      }
    },
    async editCurrentWork() {
      this.$validate().then(async success => {
        if (!success) return alert("Пожалуйста, заполните все поля, в том числе поле с фотографией");

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
    showTooltip() {
      EventBus.$emit('updateEvent', { showed: true, message: 'Запись отредактирована' });
    },
    deleteTag(tag, index) {
      this.tagsArray.splice(index, 1);
      this.editedWork.techs = this.tagsArray.toString();
    }
  },
  mixins: [require('simple-vue-validator').mixin],
  validators: {
    'editedWork.title'(value) {
      return Validator.value(value).required('Поле не должно быть пустым');
    },
    'editedWork.techs'(value) {
      return Validator.value(value).required('Поле не должно быть пустым');
    },
    'editedWork.link'(value) {
      return Validator.value(value).required('Поле не должно быть пустым');
    },
    'editedWork.description'(value) {
      return Validator.value(value).required('Поле не должно быть пустым');
    },
    'editedWork.photo'(value) {
      return Validator.value(value).required('Загрузите фотографию размером до 1,5 Мб');
    }
  }
};
</script>
