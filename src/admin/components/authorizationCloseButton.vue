<template lang="pug">
  button.close-button
    svgIcon(className="close-button__icon" name="close" fill="#414c63" width="20" height="20")
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
  position: absolute;
  top: 30px;
  right: 30px;

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
