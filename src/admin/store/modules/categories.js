export default {
  namespaced: true,
  state: {
    categories: []
  },
  mutations: {
    SET_CATEGORIES(state, categories) {
      state.categories = categories;
    },
    ADD_CATEGORY(state, newCategory) {
      newCategory.skills = [];
      state.categories.unshift(newCategory);
    },
    REMOVE_CATEGORY(state, deletedCategory) {
      state.categories = state.categories.filter(
        category => category.id !== deletedCategory.id
      );
    },
    EDIT_CATEGORY(state, editedCategory) {
      const replaceCategoryName = category => {
        category.category = editedCategory.category;
      };

      const findCategory = category => {
        if (category.id === editedCategory.id) {
          replaceCategoryName(category);
        }

        return category;
      };

      state.categories = state.categories.map(findCategory);
    },

    ADD_SKILL: (state, newSkill) => {
      state.categories = state.categories.map(category => {
        if (category.id === newSkill.category) {
          category.skills.push(newSkill);
        }
        return category;
      });
    },
    REMOVE_SKILL: (state, deletedSkill) => {
      const removeSkillInCategory = category => {
        category.skills = category.skills.filter(
          skill => skill.id !== deletedSkill.id
        );
      };

      const findCategory = category => {
        if (category.id === deletedSkill.category) {
          removeSkillInCategory(category);
        }

        return category;
      };

      state.categories = state.categories.map(findCategory);
    },
    EDIT_SKILL: (state, editedSkill) => {
      const editSkillInCategory = category => {
        category.skills = category.skills.map(skill => {
          return skill.id === editedSkill.id ? editedSkill : skill;
        });
      };

      const findCategory = category => {
        if (category.id === editedSkill.category) {
          editSkillInCategory(category);
        }

        return category;
      };

      state.categories = state.categories.map(findCategory);
    }
  },
  actions: {
    async addCategory({commit}, title) {
      try {
        const {data} = await this.$axios.post('categories', {title});
        commit("ADD_CATEGORY", data)
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async getCategories(store) {
      try {
        if (store.state.categories.length === 0) {
          const {data} = await this.$axios.get('categories/315');
          store.commit("SET_CATEGORIES", data);
        }
      } catch (error) {
        console.log(error);
      }
    },
    async removeCategory({ commit }, categoryToRemove) {
      try {
        const { data } = await this.$axios.delete(`categories/${categoryToRemove.id}`);
        commit("categories/REMOVE_CATEGORY", categoryToRemove, { root: true });
      } catch (error) {
        console.log(error);
      }
    },
    async editCategory({ commit }, editedCategory) {
      try {
        const {
          data: { category }
        } = await this.$axios.post(`categories/${editedCategory.id}`,
         {title: editedCategory.category});
        
        commit("categories/EDIT_CATEGORY", category, { root: true });
      } catch (error) {
        console.log(error);
      }
    }
  }
};