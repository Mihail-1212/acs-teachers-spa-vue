import state from './state'
import actions from './actions'
import mutations from './mutations'
import getters from './getters'

export default {
	// store.auth
	namespaced: true,
	state,
	actions,
	mutations,
	getters
}