<template lang="pug">
  .admin__navigation
    .container
      nav.nav
        ul.nav__list
          li.nav__item(
            v-for="tab in tabs" 
            :key="tab.id"
          )
            router-link(
              :to="tab.href"
              :data-text="tab.title" 
              exact-active-class="nav__link--active"
              ).nav__link
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
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }

  &--active {
    

    .nav__link {
      color: $admin-blue;
    }
  }

  @include phones {
    padding: 21px;
  }
}

.nav__link {
  padding: 25px 30px;
  color: $admin-color;
  vertical-align: middle;
  white-space: nowrap;
  display: flex;
  height: 100%;
  align-items: center;
  cursor: pointer;
  justify-content: center;
  border-bottom: 3px solid transparent;
  text-decoration: none;

  @include phones {
    width: 100px;
  }
  &:before {
    content: attr(data-text);
  }

  &:hover {
    cursor: pointer;
    border-bottom: 3px solid $admin-blue;
    color: $admin-blue;
  }

  &--active {
    border-bottom: 3px solid $admin-blue;
    color: $admin-blue;
  }
}

</style>

<script>

import svgIcon from './svgIcon';

export default {
  components: { svgIcon },
  data() {
    return {
      tabs: [
        { id: 0, title: "Обо мне", href: "/about" },
        { id: 1, title: "Работы", href: "/works" },
        { id: 2, title: "Отзывы", href: "/reviews" }
      ],
      activeTabId: 0,
    }
  },
};
</script>
