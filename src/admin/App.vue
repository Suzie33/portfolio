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

    
</template>

<style lang="postcss">
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";
  @import "./style.pcss";

  
</style>