<template lang="pug">
  .admin
    .admin__entry
      .authorization
        h1.authorization__title Авторизация
        form.form.form--authorization(method="POST" action="#")
          .authorization__form-row
            .authorization__form-block
              label.form__label.authorization__form-label(for="authorization_login") Логин
              input.form__input.authorization__form-input(type="text" placeholder="Логин" id="authorization_login" required)
              svgIcon(className="authorization__form-icon" name="user" fill="#a9aeb9" width="26" height="30")
          .authorization__form-row
            .authorization__form-block
              label.form__label.authorization__form-label(for="authorization_password") Пароль
              input.form__input.authorization__form-input(type="password" placeholder="Пароль" id="authorization_password" required)
              svgIcon(className="authorization__form-icon" name="key" fill="#a9aeb9" width="26" height="30")
          input.btn(type="submit" value="Отправить")
        a.close-button(href="#")
          svgIcon(className="close-button__icon" name="close" fill="#414c63" width="20" height="20")

    header.header
      .container.header__container
        .header__left
          .header__avatar.avatar
            img(src='../images/content/user.jpg' alt="Avatar").avatar__pic
          .header__name Владимир Астаханов
          .header__note Панель администрирования
        .header__right
          .header__links
            a.link(href="#") Выйти

    .admin__navigation
      .container
        nav.nav
          - var navlist = ['Обо мне', 'Работы', 'Отзывы'];
          ul.nav__list
            each item in navlist
              li.nav__item
                a.nav__link(href="#") #{item}

    main.main
      .container
        section.section.about
          .about__top
            h2.section__title Блок &laquo;Обо мне&raquo;
            button.button-inscription
              .button-inscription__icon
                .plus-icon
              span.button-inscription__text Добавить группу
          ul.about__list
            li.about__item.editcard
              form.form.about__form(method="POST" action="#")
                .about__form-top.editcard__top
                  input.form__input.form__input--group(placeholder="Название новой группы" required="required")
                  .about__form-icons
                    button.button-icon.button-icon__ok
                      svgIcon(className="button-icon__icon" name="tick" fill="#00d70a" width="15" height="12")
                    button.button-icon.button-icon__delete
                      svgIcon(className="button-icon__icon" name="close" fill="#bf2929" width="14" height="12")
                .about__form-bottom
                  input.form__input.form__input--skill(placeholder="Новый навык" required="required")
                  input.form__input.form__input--percent(placeholder="100%" required="required")
                  button.about__form-button
                    .plus-icon
            li.about__item.editcard
              form.form.about__form(method="POST" action="#")
                .about__form-top.editcard__top
                  h4.about__form-group Frontend
                  .about__form-icons
                    button.button-icon.button-icon__delete
                      svgIcon(className="button-icon__icon" name="pencil" fill="#414c63" width="16" height="15")
                .about__form-table
                  table.table-skills
                    tr.table-skills__row
                      td.table-skills__skill Git
                      td.table-skills__value 100
                      td.table-skills__percent %
                      td.table-skills__icons
                        .about__form-icons
                          button.button-icon.button-icon__ok
                            svgIcon(className="button-icon__icon" name="pencil" fill="#414c63" width="16" height="15")
                          button.button-icon.button-icon__delete
                            svgIcon(className="button-icon__icon" name="trash" fill="#414c63" width="13" height="17")
                    tr.table-skills__row
                      td.table-skills__skill Terminal
                      td.table-skills__value 90
                      td.table-skills__percent %
                      td.table-skills__icons
                        .about__form-icons
                          button.button-icon.button-icon__ok
                            svgIcon(className="button-icon__icon" name="pencil" fill="#414c63" width="16" height="15")
                          button.button-icon.button-icon__delete
                            svgIcon(className="button-icon__icon" name="trash" fill="#414c63" width="13" height="17")
                    tr.table-skills__row
                      td.table-skills__skill Gulp
                      td.table-skills__value 80
                      td.table-skills__percent %
                      td.table-skills__icons
                        .about__form-icons
                          button.button-icon.button-icon__ok
                            svgIcon(className="button-icon__icon" name="pencil" fill="#414c63" width="16" height="15")
                          button.button-icon.button-icon__delete
                            svgIcon(className="button-icon__icon" name="trash" fill="#414c63" width="13" height="17")
                    tr.table-skills__row
                      td.table-skills__skill Webpack
                      td.table-skills__value 85
                      td.table-skills__percent %
                      td.table-skills__icons
                        .about__form-icons
                          button.button-icon.button-icon__ok
                            svgIcon(className="button-icon__icon" name="pencil" fill="#414c63" width="16" height="15")
                          button.button-icon.button-icon__delete
                            svgIcon(className="button-icon__icon" name="trash" fill="#414c63" width="13" height="17")
                .about__form-bottom
                  input.form__input.form__input--skill(placeholder="Новый навык" required="required")
                  input.form__input.form__input--percent(placeholder="100%" required="required")
                  button.about__form-button
                    .plus-icon.plus-icon--size-m

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
                img(src='../images/content/work_preview1.jpg' alt="Work1").works__item-photo
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

        section.section.reviews
          .reviews__edit.editcard
            .reviews__edit-top.editcard__top
              h3.editcard__title Новый отзыв
            .reviews__form
              form.form.form--reviews(method="POST" action="#")
                .reviews__form-left
                  .form__avatar.avatar
                    .avatar--none
                      svgIcon(className="avatar--none__icon" name="user" fill="#c92e2e" width="85" height="113")
                  .form__avatar-btn
                    .button.button--white Добавить фото
                .reviews__form-right
                  .reviews__form-row.reviews__form-row--top
                    .reviews__form-block
                      label.form__label(for="input_review_name") Имя автора
                      input.form__input.form__input--reviews(placeholder="Имя" required="required" id="input_review_name")
                    .reviews__form-block
                      label.form__label(for="input_review_position") Титул автора
                      input.form__input.form__input--reviews(placeholder="Преподаватель" required="required" id="input_review_position")
                  .reviews__form-row
                    .reviews__form-block
                      label.form__label(for="input_review_text") Отзыв
                      textarea.form__textarea.form__input.form__input--reviews(placeholder="Текст отзыва" required="required" id="input_review_text")
                  .form__buttons
                    input.button.button--white(type="reset" value="Отмена")
                    input.button(type="submit" value="Сохранить")
          ul.reviews__list
            li.reviews__item
              .addcard
                .addcard__label
                  button.addcard__button
                    .plus-icon.plus-icon--addcard
                  .addcard__text Добавить отзыв
            li.reviews__item
              .reviews__item-top
                .reviews__source
                  .avatar.reviews__avatar
                    img(src='../images/content/review1.jpg' alt="Avatar").avatar__pic
                  .reviews__author
                    .reviews__name Владимир Сабанцев
                    .reviews__position Преподаватель
              .reviews__item-content
                p.reviews__item-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                .reviews__item-controls
                    button.button-inscription.button-inscription--works
                      span.button-inscription__text Править
                      .button-inscription__icon
                        svgIcon(className="button-icon__icon" name="pencil" fill="#383bcf" width="17" height="17")
                    button.button-inscription.button-inscription--works
                      span.button-inscription__text Удалить
                      .button-inscription__icon
                        svgIcon(className="button-icon__icon" name="close" fill="#c92e2e" width="15" height="15")



</template>

<style lang="postcss">
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import "./style.pcss";

</style>

<script>
import svgIcon from './components/svgIcon';

export default {
  components: {  svgIcon },

}
</script>