<template lang="pug">
  .tooltip(
    :class="{ showed : tooltip.showed }"
  )
    .tooltip__message {{ tooltip.message }}
    .tooltip__close(
      @click="closeTooltip"
    )
      closeButton(
        @click="closeTooltip"
      )
</template>

<style lang="postcss" scoped>
@import '../../styles/mixins.pcss';

.tooltip {
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background-color: #4bb133;
  color: #fff;
  padding: 20px 30px;
  line-height: 1;
  visibility: hidden;
  transition: 0.3s;

  &.showed {
    bottom: 0;
    visibility: visible;
  }
}

.tooltip__message {
  margin-right: 100px;
}

.tooltip__close {
  color: #fff;
}
</style>

<script>
import svgIcon from './svgIcon';
import closeButton from './closeButton';
import { mapActions, mapState } from 'vuex';
import EventBus from '../EventBus';

export default {
  components: { svgIcon, closeButton },

   data: () => ({
    tooltip: {
      showed: false,
      type: 'success',
      message: 'Информация обновлена!'
    }
  }),
  methods: {
    closeTooltip() {
      this.tooltip.showed = false;
    }
  },
  mounted() {
    EventBus.$on('updateEvent', payload => {
      this.tooltip.showed = payload.showed;
      this.tooltip.message = payload.message;
    });
  },
  watch: {
    "tooltip.showed" (value) {
      if (value) {
        let timeout;

        clearTimeout(timeout);

        timeout = setTimeout(() => {
          this.closeTooltip();
        }, 3000);
      }
    }
  }
};
</script>
