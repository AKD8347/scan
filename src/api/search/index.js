export default ({http}) => ({
    searchHistograms(data) {
        return http.post({url: '/objectsearch/histograms', data})
    }
})
