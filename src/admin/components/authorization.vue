<template lang="pug">
  .admin__entry
    .authorization
      h1.authorization__title Авторизация
      authorizationForm

</template>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.authorization {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 75px;
  width: 560px;
  min-height: 515px;
  background-color: #fff;

  @include phones {
    width: 100%;
    height: 100%;
    padding: 20px 30px;
  }
}

.authorization__title {
  margin-bottom: 20px;
  font-size: 36px;
  font-weight: 700;

  @include phones {
    font-size: 30px;
  }
}

.authorization__close {
  position: absolute;
  top: 30px;
  right: 30px;
}
</style>

<script>
import svgIcon from './svgIcon';
import closeButton from './closeButton';
import authorizationForm from './authorizationForm';

export default {
  components: { svgIcon, closeButton, authorizationForm },
};
</script>
