export default ({http}) => ({
    searchHistograms(data) {
        return http.post({url: '/objectsearch/histograms', data})
    },
    searchObject(data) {
        return http.post({url: '/objectsearch', data})
    },
    getDocs(ids) {
        return http.post({url: '/documents', data: {ids}})
    }
})
