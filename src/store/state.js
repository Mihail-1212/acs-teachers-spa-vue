const state = {
	url: {
    urlProtocol: process.env.VUE_APP_BACKEND_URL_PROTOCOL,
    domain: process.env.VUE_APP_BACKEND_DOMAIN,
    port: process.env.VUE_APP_BACKEND_PORT,
    version: process.env.VUE_APP_BACKEND_VERSION
  },
}


export default state