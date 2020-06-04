export default {
  namespaced: true,
  state: {
    works: []
  },
  mutations: {
    SET_WORKS(state, works) {
      state.works = works;
    },
    ADD_WORK(state, newWork) {
      state.works.push(newWork);
    },
    REMOVE_WORK(state, workToRemove) {
      state.works = state.works.filter(
        work => work.id !== workToRemove.id
      );
    },
    EDIT_WORK(state, workToEdit) {
      state.works = state.works.map(work => {
        return work.id === workToEdit.id ? workToEdit : work;
      });
    },
  },
  actions: {
    async addNewWork({commit}, newWork) {
      try {
        const {data} = await this.$axios.post('works', newWork);
        commit("ADD_WORK", data)
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async getWorks(store) {
      try {
        if (store.state.works.length === 0) {
          const {data} = await this.$axios.get('works/315');
          store.commit("SET_WORKS", data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async removeWork({ commit }, workToRemove) {
      try {
        const { data } = await this.$axios.delete(`works/${workToRemove.id}`);
        commit("works/REMOVE_WORK", workToRemove, { root: true });
      } catch (error) {
        console.log(error);
      }
    },
    async editWork({ commit }, { editedWork, editedWorkId }) {
      try {
        const { data:{ work } } = await this.$axios.post(`works/${editedWorkId}`, editedWork);
        commit("EDIT_WORK", work)
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
  }
}