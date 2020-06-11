import Vue from "vue";
import EventBus from './EventBus';

new Vue ({
  el: "#tooltip-component",
  template: "#tooltip-container",
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
})