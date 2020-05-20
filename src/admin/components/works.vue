<template lang="pug">
  section.section.works
    .works__edit.editcard
      .works__edit-top.editcard__top
        h3.editcard__title Добавление работы
      .works__form
        form.form(method="POST" action="#")
          .works__form-left
            .works__form-photoplace
              .photoplace
                .photoplace__label
                  .photoplace__text Перетащите или загрузите для загрузки изображения
                  button.button.photoplace__button Загрузить
            .works__form-button
              .button.button--white Изменить превью
          .works__form-right
            .works__form-row
              label.form__label(for="input_work_title") Название
              input.form__input.form__input--works(placeholder="Название работы" required="required" id="input_work_title")
            .works__form-row
              label.form__label(for="input_work_link") Ссылка
              input.form__input.form__input--works(placeholder="Ссылка на работу" required="required" id="input_work_link")
            .works__form-row
              label.form__label(for="input_work_desc") Описание
              textarea.form__textarea.form__input.form__input--works(placeholder="Описание работы" required="required" id="input_work_desc")
            .works__form-row
              label.form__label(for="input_work_tags") Добавление тега
              input.form__input.form__input--works.form__input--tags(placeholder="HTML5" required="required" id="input_work_tags")
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
              input.button.button--white(type="reset" value="Отмена")
              input.button(type="submit" value="Сохранить")

    ul.works__list
      li.works__item
        .addcard
          .addcard__label
            button.addcard__button
              .plus-icon.plus-icon--addcard
            .addcard__text Добавить работу
      li.works__item
        .works__item-preview
          img(src='../../images/content/work_preview1.jpg' alt="Work1").works__item-photo
        .works__item-content
          .works__item-desc
            h3.works__item-title Сайт школы образования
            p.works__item-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
            a.works__item-link(href="#" target="_blank") https://loftschool.com
          .works__item-controls
            button.button-inscription.button-inscription--works
              span.button-inscription__text Править
              .button-inscription__icon
                svgIcon(className="button-icon__icon" name="pencil" fill="#383bcf" width="17" height="17")
            button.button-inscription.button-inscription--works
              span.button-inscription__text Удалить
              .button-inscription__icon
                svgIcon(className="button-icon__icon" name="close" fill="#c92e2e" width="15" height="15")

</template>

<script>
import svgIcon from './svgIcon';

export default {
  components: { svgIcon },
};
</script>
