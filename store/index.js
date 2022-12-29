import Vuex from "vuex";

const createStore = () => {
  return new Vuex.Store({
    state: {
      users: [],
    },
    mutations: {
      setUsers(state, users) {
        state.users = users;
      },
    },
    actions: {
      setUsers(vueContext, users) {
        vueContext.commit("setUsers", users);
      },
    },
    getters: {
      users(state) {
        return state.users;
      },
    },
  });
};

export default createStore;
