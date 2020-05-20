<template lang="pug">
  .admin__navigation
    .container
      nav.nav
        - var navlist = ['Обо мне', 'Работы', 'Отзывы'];
        ul.nav__list
          each item in navlist
            li.nav__item
              a.nav__link(href="#") #{item}
</template>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';


.nav {
  background-color: #fff;
}

.nav__list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.nav__item {
  padding: 25px 30px;
  border-bottom: 3px solid transparent;

  &:hover {
    cursor: pointer;
    border-bottom: 3px solid $admin-blue;

    .nav__link {
      color: $admin-blue;
    }
  }

  &--active {
    border-bottom: 3px solid $admin-blue;

    .nav__link {
      color: $admin-blue;
    }
  }

  @include phones {
    padding: 25px;
  }
}

.nav__link {
  color: $admin-color;
}

</style>

<script>
import svgIcon from './svgIcon';

export default {
  components: { svgIcon },
};
</script>
