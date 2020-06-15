<template lang="pug">
  section.section.works
    .section__top
      h2.section__title#sectionTitle(
        ref="sectionTitle"
      ) Блок &laquo;Работы&raquo;

    .works__edit(
      v-if="addingWorkMode"
    )
      worksAddingWork(
        @closeCard="addingWorkMode = false"
      )
    .works__edit(v-if="editWorkMode" )
      worksEditWork(
        :editedWork="editedWork"
        @closeCard="editWorkMode = false"
      )

    ul.works__list
      li.works__item
        .addcard
          .addcard__label
            button.addcard__button(
              @click="addingWorkModeOn"
            )
              .plus-icon.plus-icon--addcard
              .addcard__text Добавить работу
      li.works__item(v-for="work in works" :key="work.id")
        worksCard(
          :work="work"
          @editCurrentWork=("editWorkModeOn")
        )

</template>

<script>
import svgIcon from './svgIcon';
import { mapActions, mapState } from 'vuex';
import { renderer, getAbsoluteImgPath } from '../helpers/pictures';
import worksCard from './worksCard';
import worksAddingWork from './worksAddingWork';
import worksEditWork from './worksEditWork';

export default {
  components: { 
    svgIcon, 
    worksCard, 
    worksAddingWork, 
    worksEditWork, 
  },
  data: () => {
    return {
      work: {
        title: "",
        techs: "",
        photo: "",
        link: "",
        description: "",
        renderedPhoto: ""
      },
      addingWorkMode: false,
      editWorkMode: false,
      editedWork: {}
    }
  },
  computed: {
    ...mapState("works", {
      works: state => state.works
    }),
    photoUrl() {
      return getAbsoluteImgPath(this.editedWork.photo);
    },
    photoUrlEdited() {
      if(this.work.renderedPhoto) {
        return this.work.renderedPhoto;
      } else {
        return getAbsoluteImgPath(this.editedWork.photo);
      }
    },
    tagsArray() {
      return this.editedWork.techs.split(",");
    }
  },
  created() {
    this.getWorks();
  },
  methods: {
    ...mapActions("works", ["getWorks"]),
    editWorkModeOn(currentWork) {
      this.editWorkMode = true;

      this.editedWork = {...currentWork};

      this.scrollToTop();
    },
    addingWorkModeOn() {
      this.addingWorkMode = true;

      this.scrollToTop();
    },
    scrollToTop() {
      const sectionTitle = this.$refs["sectionTitle"];
      sectionTitle.scrollIntoView({behavior: "smooth"});
    }
  },
};
</script>
