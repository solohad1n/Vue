import { createStore } from 'vuex'

export default createStore({
  state: {
    pizzas: [],
    searchedItems: '',
    category: null,
    sort: {
      key: 'rating',
      order: 'asc',
      name: 'по умолчанию',
    },
    query: `?_sort=rating&_order=asc,`,
    cartItems: new Map(),
  },
  getters: {
    totalSumOfPizzas(state) {
      const pizzas = state.cartItems;
      let sum = 0;

      for (const pizza of pizzas.values()) {
        sum += pizza.price * pizza.count
      }

      return sum
    },
    totalCountOfPizzas(state) {
      const pizzas = state.cartItems;
      let totalCount = 0;

      for (const pizza of pizzas.values()) {
        totalCount += pizza.count
      }

      return totalCount
    }
  },
  mutations: {
    SET_PIZZAS(state, json) {
      state.pizzas = json
    },
    SET_CATEGORY(state, value) {
      state.category = value
    },
    SET_SORT(state, value) {
      state.sort = value
      state.query = `?_sort=${value.key}&_order=asc`
    },
    ADD_PIZZA_TO_CART(state, pizza) {
      const isPizzaAlreadyAdded = state.cartItems.get(pizza.id, pizza);

      if (isPizzaAlreadyAdded) {
        const modifiedPizza = {
          ...pizza,
          count: isPizzaAlreadyAdded.count + 1
        }
        state.cartItems.set(pizza.id, modifiedPizza)
      } else {
        state.cartItems.set(pizza.id, { ...pizza, count: 1 })
      }
    },
    CLEAR_CART(state) {
      state.cartItems.clear()
    },
    DECREMENT_CART_ITEM(state, id) {
      const currentPizza = state.cartItems.get(id)

      if (currentPizza.count > 1) {
        currentPizza.count = currentPizza.count - 1;
      }
    },
    INCREMENT_CART_ITEM(state, id) {
      const currentPizza = state.cartItems.get(id)

      currentPizza.count = currentPizza.count + 1;
    },
    REMOVE_CART_ITEM(state, id) {
      state.cartItems.delete(id)
    },
    SEARCH_ITEMS(state, text) {
      state.searchedItems = text
    }
  },
  actions: {
    async getPizzas(context) {
      const response = await fetch("http://localhost:3000/pizzas");
      const json = await response.json();

      context.commit('SET_PIZZAS', json)
    },
    async setCategory(context, value) {
      const query = value !== null ? `?category=${value}` : ''

      const response = await fetch(`http://localhost:3000/pizzas${query}`);
      const json = await response.json();

      context.commit('SET_PIZZAS', json)
      context.commit('SET_CATEGORY', value)
    },
    async setSort(context, value) {
      const query = context.state.query.replace(context.state.sort.key, value.key);

      const response = await fetch(`http://localhost:3000/pizzas${query}`);
      const json = await response.json();

      context.commit('SET_PIZZAS', json),
        context.commit('SET_SORT', value)
    }
  },
  modules: {
  }
})
