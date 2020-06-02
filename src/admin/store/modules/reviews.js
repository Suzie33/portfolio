export default {
  namespaced: true,
  state: {
    reviews: []
  },
  mutations: {
    SET_REVIEWS(state, reviews) {
      state.reviews = reviews;
    },
    ADD_REVIEW(state, newReview) {
      state.reviews.push(newReview);
    },
    REMOVE_REVIEW(state, reviewToRemove) {
      state.reviews = state.reviews.filter(
        review => review.id !== reviewToRemove.id
      );
    },
    EDIT_REVIEW(state, reviewToEdit) {
      state.reviews = state.reviews.map(review => {
        return review.id === reviewToEdit.id ? reviewToEdit : review;
      });
    },
  },
  actions: {
    async addNewReview({commit}, newReview) {
      try {
        const {data} = await this.$axios.post('reviews', newReview);
        commit("ADD_REVIEW", data);
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
    async getReviews({commit}) {
      try {
        const {data} = await this.$axios.get('reviews/315');
        commit("SET_REVIEWS", data);
      } catch (error) {
        console.log(error);
      }
    },
    async removeReview({ commit }, reviewToRemove) {
      try {
        const { data } = await this.$axios.delete(`reviews/${reviewToRemove.id}`);
        commit("reviews/REMOVE_REVIEW", reviewToRemove, { root: true });
      } catch (error) {
        console.log(error);
      }
    },
    async editReview({ commit }, { editedReview, editedReviewId }) {
      try {
        const { data:{ review } } = await this.$axios.post(`reviews/${editedReviewId}`, editedReview);
        commit("EDIT_REVIEW", review)
      } catch (error) {
        throw new Error(
          error.response.data.error || error.response.data.message
        );
      }
    },
  }
}