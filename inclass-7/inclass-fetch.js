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
        return fetch(url)
        .then(r => r.json())
        .then(r => {
            var docs = r.articles;
            var map = {};
            docs.forEach(doc => {
                var text = doc['text'];
                var len = text.split(' ').length;
                map[(doc['_id'])] = len;
            });
            return map;
        });
    }

    // same but no errors even with bad url
    function countWordsSafe(url) {
        return fetch(url)
        .then(r => r.json())
        .then(r => {
            var docs = r.articles;
            var map = {};
            docs.forEach(doc => {
                var text = doc['text'];
                var len = text.split(' ').length;
                map[(doc['_id'])] = len;
            });
            return map;
        })
        .catch(err => {
            console.log(err);
            return {};
        })
    }

    //  article id with most number of words
    function getLargest(url) {
        return fetch(url)
        .then(r => r.json())
        .then(r => {
            var docs = r.articles;
            var maxLen = -1;
            var maxId = -1;
            docs.forEach(doc => {
                var text = doc['text'];
                var len = text.split(' ').length;
                if (len > maxLen) {
                    maxLen = len;
                    maxId = doc['_id'];
                }
            });
            console.log(maxId);
            return maxId.toString();
        })
        .catch(err => {
            console.log(err);
            return -1;
        })
    }

    exports.inclass = {
        author: "Yusong Shen",
        countWords, countWordsSafe, getLargest
    }

})(this);
