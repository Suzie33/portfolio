<template lang="pug">
  button.close-button
    svgIcon(className="close-button__icon" name="close" fill="#fff" width="20" height="20")
</template>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

button {
  background-color: transparent;
  padding: 0;
  font-weight: 600;

  &:hover {
    opacity: 0.7;
  }
}

.close-button {
  &:hover {
    opacity: 0.7;
  }
}
</style>

<script>
import svgIcon from './svgIcon';

export default {
  components: { svgIcon },
};
</script>
