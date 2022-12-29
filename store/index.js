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
      nuxtServerInit(vueContext, context) {
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            // resolve({
            vueContext.commit("setUsers", [
              {
                name: "Donyaaa",
                lastName: "Davoodi",
                age: 17,
                role: "Junior front-end developer",
                city: "Babolsar",
                id: "23f8d",
              },
              {
                name: "Arezoo",
                lastName: "Rezaei",
                age: 23,
                role: "Back-end developer",
                city: "Ahvaz",
                id: "pa21d",
              },
              {
                name: "Armita",
                lastName: "Jahani",
                age: 37,
                role: "Full-stack developer",
                city: "Tehran",
                id: "8c3x1",
              },
            ]);
            resolve();
          }, 3000);
        });
      },
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
