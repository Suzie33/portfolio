<template lang="pug">
  .admin
    router-view
</template>

<style lang="postcss" src="./global.pcss"></style>

<style lang="postcss">
@import '../styles/mixins.pcss';

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

  &:disabled {
    opacity: 0.5;
    cursor: initial;
  }
}

.button {
  &:hover {
    opacity: 0.7;
  }
}

.container {
  max-width: 1080px;

  @include tablets {
    width: 92%;
  }

  @include phones {
    width: 100%;
  }
}

.avatar {
  border-radius: 50%;
  overflow: hidden;

  &--filled {
    background-size: cover;
    background-position: top center;
    background-repeat: no-repeat;
    border: none;

    /* .photoplace__label {
      display: none;
    } */
  }
}

.avatar__pic {
  width: 100%;
  object-fit: cover;
  object-position: top;
}

.link {
  font-weight: 400;
  text-decoration: underline;
  opacity: 0.7;

  &:hover {
    opacity: 0.4;
  }
}

.main {
  padding-bottom: 25px;
  background: #fcfcfe url('../images/MountainBaloon_white.jpg') no-repeat 50%
    50%;
  background-size: cover;
}

.section {
  padding-top: 50px;
  min-height: 100vh;

  @include tablets {
    padding-top: 30px;
  }
}

.section__top {
  display: flex;
  align-items: center;
  margin-bottom: 50px;

  @include tablets {
    margin-bottom: 40px;
  }

  @include phones {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 40px;
    flex-direction: column;
    align-items: flex-start;
  }
}

.section__title {
  font-size: 21px;
  color: #414c63;
  font-weight: 700;
  margin-right: 60px;

  @include phones {
    margin-right: 0;
    margin-bottom: 25px;
  }
}

.button-inscription {
  display: flex;
  padding: 0;
  color: $admin-blue;
  background-color: transparent;
  cursor: pointer;

  &--works {
    color: inherit;

    .button-inscription__icon {
      margin-right: 0;
    }

    .button-inscription__text {
      margin-right: 15px;
    }
  }
}

.button-inscription__icon {
  width: 20px;
  height: 20px;
  margin-right: 15px;
}

.button-inscription__text {
  color: inherit;
}

.plus-icon {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-image: linear-gradient(90deg, #0069ec 0%, #3f34cb 100%);
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 30%;
    height: 2px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
  }

  &::after {
    content: '';
    display: block;
    width: 2px;
    height: 30%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
  }

  &--addcard {
    background-color: transparent;
    border: 2px solid #fff;
    margin-bottom: 25px;
  }
}

.editcard {
  padding: 25px 20px 35px;
  background-color: #fff;
  box-shadow: 4.096px 2.868px 10px rgba(0, 0, 0, 0.07);
}

.about__list {
  display: flex;
  flex-wrap: wrap;
}

.about__item {
  width: calc(100% / 2 - 15px);
  min-height: 390px;
  margin-right: 30px;
  margin-bottom: 30px;

  &:nth-of-type(2n) {
    margin-right: 0;
  }

  @include tablets {
    width: calc(100% / 2 - 10px);
    margin-right: 20px;
    margin-bottom: 20px;
  }

  @include phones {
    width: 100%;
    margin-right: 0;
  }
}

.about__form {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.form__input {
  padding-bottom: 10px;
  padding-top: 10px;
  border: none;
  border-bottom: 1px solid #000;

  &--group {
    width: 50%;
    margin-right: auto;
    margin-bottom: 10px;

    @include tablets {
      flex-grow: 1;
      margin-right: 10px;
    }
  }

  &--skill {
    width: 41%;
    margin-right: 10px;
    margin-left: auto;
    padding-left: 18px;

    @include tablets {
      flex-grow: 1;
      padding-left: 0;
    }
  }

  &--percent {
    width: 75px;
    margin-right: 30px;
    text-align: center;

    -moz-appearance: textfield;

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
    -webkit-appearance: none;
}
  }

  &--editing {
    width: 100%;
  }

  &::-webkit-input-placeholder {
    font-size: 18px;
    color: #414c63;
    opacity: 0.3;

    @include tablets {
      font-size: 16px;
    }
  }
}

.editcard__top {
  margin-bottom: 48px;
  display: flex;
  align-items: flex-start;
  border-bottom: 1px solid rgba(170, 170, 174, 0.15);

  @include tablets {
    margin-bottom: 28px;
  }
}

.about__form-top {
  margin-bottom: 20px;

  @include tablets {
    width: 100%;
  }
}

.about__form-icons {
  flex-shrink: 0;
}

.button-icon {
  margin-right: 15px;

  &:last-of-type {
    margin-right: 0;
  }
}

.about__form-bottom {
  display: flex;
  align-items: center;
  margin-top: auto;
}

.about__form-button {
  width: 40px;
  height: 40px;
}

.about__form-group {
  margin-right: auto;
  font-size: 18px;
  margin-bottom: 25px;
}

.about__form-table {
  width: 100%;
}

.table-skills {
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
  font-weight: 400;
  margin-bottom: 10px;
}

.table-skills__row {
  margin-bottom: 20px;
  display: flex;
  align-items: center;

  &:last-of-type {
    margin-bottom: 0;
  }
}

.table-skills__skill {
  flex-grow: 1;
  margin-right: 10px;
}

.table-skills__value {
  width: 40px;
}

.table-skills__percent {
  margin-right: 55px;
  opacity: 0.7;

  @include tablets {
    margin-right: 15px;
  }
}

.table-skills__icons {
  flex-shrink: 0;
}

////////////////////// works //////////////////////

.editcard__title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 20px;
}

.works__card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.works__edit {
  width: 100%;
  margin-bottom: 30px;
}

.form__input--works {
  width: 100%;
}

.works__form {
  padding-left: 10px;
  padding-right: 10px;

  @include phones {
    padding-left: 0;
    padding-right: 0;
  }
}

.form {
  display: flex;

  @include tablets {
    flex-direction: column;
    align-items: center;
  }

  &--reviews {
    @include tablets {
      flex-direction: row;
      align-items: flex-start;
    }

    @include phones {
      flex-direction: column;
    }
  }
}

.works__form-left,
.works__form-right {
  width: calc(100% / 2 - 15px);
  margin-right: 30px;

  @include tablets {
    width: 70%;
    margin-right: 0;
  }
}

.works__form-left {
  @include tablets {
    width: 63%;
    margin-bottom: 30px;
  }

  @include phones {
    width: 100%;
  }
}

.works__form-right {
  @include phones {
    width: 100%;
  }
}

.works__form-right {
  margin-right: 0;
}

.works__form-photoplace {
  width: 100%;
  height: 275px;

  @include phones {
    height: 195px;
  }
}

.button {
  display: block;
  padding: 15px 40px;
  margin-right: 20px;
  text-transform: uppercase;
  color: #fff;
  border-radius: 25px;
  background-image: linear-gradient(90deg, #0069ec 0%, #3f34cb 100%);
  border: none;
  cursor: pointer;

  &--white {
    padding: 15px 30px;
    text-transform: initial;
    background-color: #fff;
    background-image: none;
    color: #383bcf;

    @include phones {
      text-align: center;
    }
  }

  &:last-of-type {
    margin-right: 0;
  }

  @include phones {
    padding: 15px 30px;
  }
}

.works__form-button {
  text-align: center;
}

.photoplace {
  height: 100%;
  position: relative;
  background-color: #dee4ed;
  border: 1px dashed #a1a1a1;

  &--filled {
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    border: none;

    .photoplace__label {
      display: none;
    }
  }
}

.photoplace__label {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 230px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.photoplace__text {
  margin-bottom: 25px;
  opacity: 0.5;
  line-height: 2;
}

.photoplace__input {
  position: absolute;
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  z-index: -10;
}

.photoplace__button {
  z-index: 10;
}

.photoplace__input:focus + label {
  outline: 1px solid #0078d7;
  outline: -webkit-focus-ring-color auto 5px;
}

.form__label {
  display: inline-block;
  margin-bottom: 10px;
  opacity: 0.5;
}

.form__textarea {
  display: block;
  height: 145px;
  padding-left: 15px;
  padding-right: 15px;
  resize: none;
  border: 1px solid #a3a7b3;

  @include phones {
    height: 205px;
  }
}

.works__form-row {
  position: relative;
  margin-bottom: 20px;

  &:last-of-type {
    margin-bottom: 40px;
  }
}

.form__input--tags {
  margin-bottom: 20px;
}

.tags__list {
  display: flex;
  align-items: center;
}

.tags__item {
  display: inline-flex;
  align-items: center;
  padding: 7px 20px;
  margin-right: 15px;
  border-radius: 22px;
  font-size: 13px;
  background-color: #f3f5f9;

  &:last-child {
    margin-right: 0;
  }
}

.tags__text {
  margin-right: 10px;
  opacity: 0.7;
}

.form__buttons {
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.works__list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;

  @include phones {
    flex-direction: column;
  }
}

.works__item {
  display: flex;
  flex-direction: column;
  min-height: 560px;
  width: calc(100% / 3 - 20px);
  margin-right: 30px;
  margin-bottom: 30px;
  background-color: #fff;
  box-shadow: 4.096px 2.868px 10px rgba(0, 0, 0, 0.07);

  &:nth-of-type(3n) {
    margin-right: 0;
  }

  @include tablets {
    width: calc(100% / 2 - 15px);

    &:nth-of-type(2n) {
      margin-right: 0;
    }
  }

  @include phones {
    width: 100%;
    min-height: 110px;
    margin-right: 0;
  }
}

.addcard {
  width: 100%;
  height: 100%;
  position: relative;
  background-image: linear-gradient(90deg, #0069ec 0%, #3f34cb 100%);

  @include phones {
    height: 110px;
  }
}

.addcard__label {
  width: 150px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @include phones {
    width: 90%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}

.addcard__button {
  width: 150px;
  height: 150px;

  @include phones {
    width: 50px;
    height: 50px;
    margin-bottom: 0;
    flex-shrink: 0;
    margin-right: 20px;
  }
}

.addcard__text {
  width: 80%;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 700;
  line-height: 1.7;
  color: #fff;
  text-align: center;

  @include phones {
    text-align: left;
  }
}

.works__item-preview {
  position: relative;
  width: 100%;
  margin-bottom: 35px;
}

.works__item-content {
  width: 82%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding-bottom: 30px;
}

.works__item-desc {
  margin-bottom: 40px;
}

.works__item-title {
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 700;
}

.works__item-text {
  line-height: 1.8;
  opacity: 0.7;
  margin-bottom: 25px;
}

.works__item-link {
  color: $admin-blue;

  &:hover {
    text-decoration: underline;
  }
}

.works__item-controls {
  display: flex;
  justify-content: space-between;
  margin-top: auto;
}

.reviews__form-left {
  width: 200px;
  margin-right: 30px;

  @include phones {
    width: 100%;
    margin-right: 0;
    margin-bottom: 30px;
  }
}

.works__item-tags {
  position: absolute;
  right: 10px;
  bottom: 10px;
}

.form__avatar {
  position: relative;
  width: 200px;
  height: 200px;
  margin-bottom: 10px;

  @include phones {
    margin: 0 auto 10px;
  }
}

.avatar--none {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #dee4ed;
}

.avatar--none__icon {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  fill: #fff;
}

.reviews__edit {
  width: 100%;
  margin-bottom: 30px;
}

.reviews__form-right {
  width: 56%;

  @include phones {
    width: 100%;
  }
}

.reviews__form-row {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 30px;

  @include tablets {
    flex-direction: column;
    align-items: stretch;
  }

  &--top {
    @include tablets {
      width: 70%;
    }

    @include phones {
      width: 100%;
    }
  }
}

.reviews__form-block {
  position: relative;
  flex-grow: 1;
  margin-right: 20px;

  &:last-of-type {
    margin-right: 0;
  }

  @include tablets {
    margin-right: 0;
    margin-bottom: 30px;

    &:last-of-type {
      margin-bottom: 0;
    }
  }
}

.form__input--reviews {
  width: 100%;
}

.form__error {
  position: absolute;
  top: 0%;
  left: 35%;
  width: auto;
  padding: 10px 20px;
  color: #cd1515;
  font-size: 14px;
  font-weight: 400;

  &--photo {
    width: 100%;
    top: 147%;
    left: 0;
  }

  &--review {
    top: 100%;
    left: 0;
  }
}

.reviews__card {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.reviews__list {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
}

.reviews__item {
  display: flex;
  flex-direction: column;
  min-height: 380px;
  width: calc(100% / 3 - 20px);
  margin-right: 30px;
  margin-bottom: 30px;
  background-color: #fff;
  box-shadow: 4.096px 2.868px 10px rgba(0, 0, 0, 0.07);

  &:nth-of-type(3n) {
    margin-right: 0;
  }

  @include tablets {
    width: calc(100% / 2 - 15px);

    &:nth-of-type(2n) {
      margin-right: 0;
    }
  }

  @include phones {
    width: 100%;
    margin-right: 0;
    min-height: 110px;
  }
}

.reviews__item-top {
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 25px;
  border-bottom: 1px solid rgba(170, 170, 174, 0.15);

  @include phones {
    width: 90%;
    margin-left: auto;
    margin-right: auto;
  }
}

.reviews__source {
  display: flex;
  margin-bottom: 30px;
}

.reviews__avatar {
  width: 50px;
  height: 50px;
  flex-shrink: 0;
  margin-right: 20px;
}

.reviews__author {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.reviews__name {
  font-size: 18px;
  font-weight: 700;
}

.reviews__position {
  opacity: 0.3;
}

.reviews__item-content {
  width: 86%;
  height: 100%;
  margin: 0 auto;
  padding-bottom: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.reviews__item-controls {
  display: flex;
  justify-content: space-between;
}

.reviews__item-text {
  line-height: 1.8;
  opacity: 0.7;
  margin-bottom: 20px;
}

.admin__entry {
  position: relative;
  height: 100vh;
  width: 100%;
  background: #fcfcfe url('../images/parallax/Mountain_Baloon.jpg') no-repeat
    50% 50%;
  background-size: cover;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #2d3c4e;
    opacity: 0.9;
  }
}

.form--authorization {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
</style>

<script>
import svgIcon from './components/svgIcon';
import authorization from './components/authorization';
import headline from './components/headline';
import navigation from './components/navigation';
import about from './components/about';
import works from './components/works';
import reviews from './components/reviews';
import mainapp from './components/mainapp';

export default {
  components: { svgIcon, authorization, mainapp },
};
</script>
