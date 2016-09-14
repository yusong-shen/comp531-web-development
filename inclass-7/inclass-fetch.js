// Inclass Fetch Exercise
// ======================
//
// Navigate to https://webdev-dummy.herokuapp.com/sample
//
// This endpoint returns a list of articles.  Your assignment is to
// write a function countWords that uses fetch() to query the endpoint,
// and return a map from the article id to the number of words in the
// article's text.
//
// Also write two "helper" functions that call this initial function.
//
// If there are any exceptions then fetch() will throw an error.
// Provide a "safe" version of the countWords function that always
// returns a map, which will be empty in the case of errors.
//
// Finally, write a function that returns the article id with the
// most number of words.
//
// Below I have provided you a template, you just need to fill in
// the implementation.
//
// Navigate to mocha-inclass-fetch.html to see if your implementation
// provides the expected results.
//
(function(exports) {

    'use strict'

    // map from article id to number of words in article
    function countWords(url) {
        // throw new Error('Implement me!')
        // var url = 'https://webdev-dummy.herokuapp.com/sample';
        // return fetch(url).then(r => r.json()).then(r => console.log(r.text));
        var doc;
        var map = {};
        doc.forEach(function(item, index) {
            var text = item['text'];
            var len = text.split(' ').length;
            var map[item['_id']] = len;
        })
        return {};
    }

    // same but no errors even with empty array
    function countWordsSafe(url) {
        throw new Error('Implement me!')
    }

    //  article id with most number of words
    function getLargest(url) {
        var max = -1;
        var maxId = -1;
        for (id in map) {
            if (map[id] > max) {
                max = map[id];
                maxId = id;
            }
        }
        throw new Error('Implement me!')
    }

    exports.inclass = {
        author: "Yusong Shen",
        countWords, countWordsSafe, getLargest
    }

})(this);
