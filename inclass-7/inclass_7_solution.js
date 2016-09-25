// sep1 solution to inclass fetch exercise
(function(exports) {

    'use strict'

    function countWords(url) {
        return fetch(url)
            .then(res => res.json())
            .then(res =>
                res.articles.reduce((o, p) => {
                    o[p._id] = p.text.split(' ').length;
                    return o
                }, {})
            )
    }

    function countWordsSafe(url) {
        return countWords(url).catch(err => ({}))
    }

    function getLargest(url) {
        return countWords(url)
            .then(res => {
                const wordCounts = Object.keys(res).map(k => res[k])
                const maxCount = Math.max(...wordCounts)
                return Object.keys(res).filter(k => res[k] === maxCount)[0]
            })
    }

    exports.inclass = {
        author: 'sep1',
        countWords, countWordsSafe, getLargest
    }

})(this);