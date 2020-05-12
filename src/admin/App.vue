<template lang="pug">
  header.header
    .header__left
      .header__avatar.avatar
        img(src='../images/content/user.jpg')
      .header__name Владимир Астаханов
      .header__note Панель администрирования
    .header__right
      .header__exit
        a.header__exit(href="#") Выйти
</template>

<style lang="postcss">
  @import "normalize.css";
  @import "../styles/mixins.pcss";
  @import "../styles/layout/base.pcss";

  body {
    color: green;
  }
</style>