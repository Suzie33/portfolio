export default {
  namespaced: true,
  actions: {
    async addSkill({ commit }, skill) {
      try {
        const { data } = await this.$axios.post("skills", skill);
        commit("categories/ADD_SKILL", skill, { root: true });
      } catch (error) {
        console.log(error);
      }
    },

    async removeSkill({ commit }, skillToRemove) {
      try {
        const { data } = await this.$axios.delete(`skills/${skillToRemove.id}`);
        commit("categories/REMOVE_SKILL", skillToRemove, { root: true });
      } catch (error) {
        console.log(error);
      }
    },

    async editSkill({ commit }, editedSkill) {
      try {
        const {
          data: { skill }
        } = await this.$axios.post(`skills/${editedSkill.id}`, editedSkill);
        commit("categories/EDIT_SKILL", skill , { root: true });
      } catch (error) {}
    }
  }
}

