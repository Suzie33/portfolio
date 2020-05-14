<template lang="pug">
  .admin
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
        section.about
          .about__top
            h2.section__title Блок &laquo;Обо мне&raquo;
            button.button-inscription
              .button-inscription__icon
                .plus-icon
              span.button-inscription__text Добавить группу
          ul.about__list.main-list
            li.about__item.main-list__item
              form.form.about__form(method="POST" action="#")
                .about__form-top
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
                    .plus-icon.plus-icon--size-m
            li.about__item.main-list__item
              form.form.about__form(method="POST" action="#")
                .about__form-top
                  span.about__form-group Frontend
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


    
</template>

<style lang="postcss">
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