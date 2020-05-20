<template lang="pug">
  .admin
    headline

    navigation

    main.main
      .container
        router-view

</template>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

</style>

<script>
import svgIcon from './svgIcon';
import headline from './headline';
import navigation from './navigation';
import about from './about';
import works from './works';
import reviews from './reviews';

export default {
  components: { svgIcon, headline, navigation, about, works, reviews },
};
</script>
