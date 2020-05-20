<template lang="pug">
  section.section.reviews
    .reviews__edit.editcard
      .reviews__edit-top.editcard__top
        h3.editcard__title Новый отзыв
      .reviews__form
        form.form.form--reviews(method="POST" action="#")
          .reviews__form-left
            .form__avatar.avatar
              .avatar--none
                svgIcon(className="avatar--none__icon" name="user" fill="#c92e2e" width="85" height="113")
            .form__avatar-btn
              .button.button--white Добавить фото
          .reviews__form-right
            .reviews__form-row.reviews__form-row--top
              .reviews__form-block
                label.form__label(for="input_review_name") Имя автора
                input.form__input.form__input--reviews(placeholder="Имя" required="required" id="input_review_name")
              .reviews__form-block
                label.form__label(for="input_review_position") Титул автора
                input.form__input.form__input--reviews(placeholder="Преподаватель" required="required" id="input_review_position")
            .reviews__form-row
              .reviews__form-block
                label.form__label(for="input_review_text") Отзыв
                textarea.form__textarea.form__input.form__input--reviews(placeholder="Текст отзыва" required="required" id="input_review_text")
            .form__buttons
              input.button.button--white(type="reset" value="Отмена")
              input.button(type="submit" value="Сохранить")
    ul.reviews__list
      li.reviews__item
        .addcard
          .addcard__label
            button.addcard__button
              .plus-icon.plus-icon--addcard
            .addcard__text Добавить отзыв
      li.reviews__item
        .reviews__item-top
          .reviews__source
            .avatar.reviews__avatar
              img(src='../../images/content/review1.jpg' alt="Avatar").avatar__pic
            .reviews__author
              .reviews__name Владимир Сабанцев
              .reviews__position Преподаватель
        .reviews__item-content
          p.reviews__item-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
          .reviews__item-controls
              button.button-inscription.button-inscription--works
                span.button-inscription__text Править
                .button-inscription__icon
                  svgIcon(className="button-icon__icon" name="pencil" fill="#383bcf" width="17" height="17")
              button.button-inscription.button-inscription--works
                span.button-inscription__text Удалить
                .button-inscription__icon
                  svgIcon(className="button-icon__icon" name="close" fill="#c92e2e" width="15" height="15")

</template>

<script>
import svgIcon from './svgIcon';

export default {
  components: { svgIcon },
};
</script>