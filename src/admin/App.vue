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
            li.about__item.about__item--add.main-list__item
              form.form.about__form(method="post" action="#")
                .about__form-top
                  input.form__input.form__input--width--50(placeholder="Название новой группы")
                  button.button-icon.button-icon__ok
                  button.button-icon.button-icon__delete

            li.about__item.main-list__item
            li.about__item.main-list__item

    
</template>

<style lang="postcss">
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import "./style.pcss";

  
</style>