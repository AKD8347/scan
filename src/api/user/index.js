export default ({http}) => ({
    login(data) {
        return http.post({url: '/account/login', data})
    },

    getInfo() {
        return http.get({url: '/account/info'})
    }
})
