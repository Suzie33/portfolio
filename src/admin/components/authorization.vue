<template lang="pug">
    .admin__entry
        .authorization
            h1.authorization__title Авторизация
            form.form.form--authorization(method="POST" action="#")
                .authorization__form-row
                    .authorization__form-block
                        label.form__label.authorization__form-label(for="authorization_login") Логин
                        input.form__input.authorization__form-input(type="text" placeholder="Логин" id="authorization_login" required)
                        svgIcon(className="authorization__form-icon" name="user" fill="#a9aeb9" width="26" height="30")
                .authorization__form-row
                    .authorization__form-block
                        label.form__label.authorization__form-label(for="authorization_password") Пароль
                        input.form__input.authorization__form-input(type="password" placeholder="Пароль" id="authorization_password" required)
                        svgIcon(className="authorization__form-icon" name="key" fill="#a9aeb9" width="26" height="30")
                input.btn(type="submit" value="Отправить")
            button.close-button
                svgIcon(className="close-button__icon" name="close" fill="#414c63" width="20" height="20")

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

.form--authorization {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.authorization__form-row {
  width: 100%;
  margin-bottom: 30px;

  &:last-of-type {
    margin-bottom: 50px;
  }
}

.authorization__form-block {
  position: relative;
  display: flex;
  flex-grow: 1;
  flex-direction: column;
}

.authorization__form-label {
  padding-left: 45px;
}

.authorization__form-input {
  padding-left: 45px;
  padding-bottom: 15px;
}

.authorization__form-icon {
  position: absolute;
  left: 0;
  top: 34px;

  @include phones {
    top: 29px;
  }
}

.form__label {
  display: inline-block;
  margin-bottom: 10px;
  opacity: 0.5;
}

.form__input {
  padding-bottom: 10px;
  padding-top: 10px;
  border: none;
  border-bottom: 1px solid #000;

  &::-webkit-input-placeholder {
    font-size: 18px;
    color: #414c63;
    opacity: 0.3;

    @include tablets {
      font-size: 16px;
    }
  }
}

.btn {
  padding: 30px 120px;
  border: none;
  border-radius: 40px 5px;
  background-image: linear-gradient(90deg, #9300e7 0%, #4900ed 100%);

  text-transform: uppercase;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  cursor: pointer;

  &:hover {
    background-image: linear-gradient(90deg, #bb00ff 0%, #5900ff 100%);
  }

  &:active {
    opacity: 0.7;
  }

  @include phones {
    width: 100%;
    padding: 30px 75px;
    font-size: 16px;
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

input {
  font-weight: 600;
}

button {
  background-color: transparent;
  padding: 0;
  font-weight: 600;

  &:hover {
    opacity: 0.7;
  }
}

.button {
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
