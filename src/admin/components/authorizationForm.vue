<template lang="pug">
  form.form.form--authorization(
    method="POST" action="#"
    @submit.prevent="login"
    )
    .authorization__form-row
      .authorization__form-block
        label.form__label.authorization__form-label(for="authorization_login") Логин
        input.form__input.authorization__form-input(
          type="text" 
          placeholder="Логин" 
          id="authorization_login"
          v-model="user.name"
          )
        svgIcon(className="authorization__form-icon" name="user" fill="#a9aeb9" width="26" height="30")
    .authorization__form-row
      .authorization__form-block
        label.form__label.authorization__form-label(for="authorization_password") Пароль
        input.form__input.authorization__form-input(
          type="password" 
          placeholder="Пароль" 
          id="authorization_password"
          v-model="user.password"
          )
        svgIcon(className="authorization__form-icon" name="key" fill="#a9aeb9" width="26" height="30")
    input.btn(type="submit" value="Отправить")
</template>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

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

input {
  font-weight: 600;
}

.button {
  &:hover {
    opacity: 0.7;
  }
}
</style>

<script>
import svgIcon from './svgIcon';
import $axios from '../helpers/apiSettings';

export default {
  components: { svgIcon },
  data: () => ({
    user: {
      name: "",
      password: ""
    }
  }),
  methods: {
    async login() {
      try {
        const response = await $axios.post('login', this.user);
        const token = response.data.token;

        localStorage.setItem('token', token);
        $axios.defaults.headers['Authorization'] = `Bearer ${token}`;
        this.$router.replace("/about");
      } catch (error) {
        console.log(error);
      }
    },
  }
  };
</script>
