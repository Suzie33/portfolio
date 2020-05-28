export default {
  namespaced: true,
  state: {
    
  },
  mutations: {

  },
  actions: {
    async addNewWork({commit}, newWork) {
      try {
        const {data} = await this.$axios.post('works', newWork);
        // commit("ADD_CATEGORY", data)
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
  }
}