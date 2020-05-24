<template lang="pug">
  .admin__navigation
    .container
      nav.nav
        ul.nav__list
          li.nav__item(
            v-for="tab in tabs" :key="tab.id"
            @click="handleChange(tab)"
            :class="{'nav__item--active' : activeTabId === tab.id}"
          )
            a.nav__link(
              :href="tab.href"
              ) {{tab.title}}
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
  margin-right: 10px;
  border-bottom: 3px solid transparent;

  &:last-child {
    margin-right: 0;
  }

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
    padding: 21px;
  }
}

.nav__link {
  color: $admin-color;
}

</style>

<script>

const tabs = [
  {id: 0, title: "Обо мне", href: "admin#/about"},
  {id: 1, title: "Работы", href: "admin#/works"},
  {id: 2, title: "Отзывы", href: "admin#/reviews"}
];

import svgIcon from './svgIcon';

export default {
  components: { svgIcon },
  data() {
    return {
      tabs,
      activeTabId: 0
    }
  },
  methods: {
    handleChange(tab) {
      this.activeTabId = tab.id;
      this.$emit("tabChanged");
    }
  }
};
</script>
