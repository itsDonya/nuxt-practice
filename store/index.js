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
      async nuxtServerInit(vueContext, context) {
        let users = [];
        const data = await fetch(process.env.baseUrl + "/users").then((res) =>
          res.json().catch((e) => context.error(e))
        );
        data.forEach((user) => {
          users.push({
            name: user.name,
            email: user.email,
            phone: user.phone,
            city: user.address.city,
            id: user.id,
          });
        });
        vueContext.commit("setUsers", users);
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
