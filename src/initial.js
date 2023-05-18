import { library } from '@fortawesome/fontawesome-svg-core'

import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import axios from 'axios'


// Setting headers for axios
const axiosHeaders = {
  "accept": "application/json",
  "Content-Type": "application/json",
}

// vueApp
function initial(vueApp) {
  // Fav icons
  library.add(fas)
  library.add(far)
  library.add(fab)
  // Global register of component
  vueApp.component('font-awesome-icon', FontAwesomeIcon)

  // Set axios headers
	axios.defaults.headers.common = Object.assign({}, axios.defaults.headers.common, axiosHeaders)
}

export default initial