export default {
  namespaced: true,
  state: {
    reviews: []
  },
  mutations: {
    // SET_WORKS(state, works) {
    //   state.works = works;
    // },
    ADD_WORK(state, newWork) {
      state.works.push(newWork);
    },
    // REMOVE_WORK(state, workToRemove) {
    //   state.works = state.works.filter(
    //     work => work.id !== workToRemove.id
    //   );
    // },
    // EDIT_WORK(state, workToEdit) {
    //   state.works = state.works.map(work => {
    //     return work.id === workToEdit.id ? workToEdit : work;
    //   });
    // },
  },
  actions: {
    async addNewReview({commit}, newReview) {
      try {
        const {data} = await this.$axios.post('reviews', newReview);
        // commit("ADD_WORK", data)
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    // async getWorks({commit}) {
    //   try {
    //     const {data} = await this.$axios.get('works/315');
    //     commit("SET_WORKS", data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    // async removeWork({ commit }, workToRemove) {
    //   try {
    //     const { data } = await this.$axios.delete(`works/${workToRemove.id}`);
    //     commit("works/REMOVE_WORK", workToRemove, { root: true });
    //   } catch (error) {
    //     console.log(error);
    //   }
    // },
    // async editWork({ commit }, { editedWork, editedWorkId }) {
    //   try {
    //     const { data:{ work } } = await this.$axios.post(`works/${editedWorkId}`, editedWork);
    //     commit("EDIT_WORK", work)
    //   } catch (error) {
    //     throw new Error(
    //       error.response.data.error || error.response.data.message
    //     );
    //   }
    // },
  }
}