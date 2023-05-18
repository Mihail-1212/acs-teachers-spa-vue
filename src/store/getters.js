const getters = {
	/* Returns the full url to the api */
  getFullURL: state => {
    return `${state.url.urlProtocol}://${state.url.domain}:${state.url.port}/${state.url.version}`
  },
  /* Returns the full url to short links api */
  getShortLinksUrl: (state, getters) => {
    return `${getters.getFullURL}/short-links`
  }
}


export default getters