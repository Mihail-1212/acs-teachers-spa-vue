import { createStore } from 'vuex'

import getters from './getters'
import state from './state'

import { auth } from './modules'


const storeOptions = {
  state,
  getters,
  modules: {
    auth
  }
}


export default createStore(storeOptions)