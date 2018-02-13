/**
 * Get Chapter
 * Returns Promise
 * @param {number} url
 * @return {Promise}
 */
var storyPromise;

function getChapter(i) {
  var storyPromise = storyPromise || getJSON('story.json');

  return storyPromise.then(function(story) {
    var chapterUrl = story.chapterURLs[i];
    
    return getJSON(chapterUrl);
  });
}
/**
 * Get JSON by URL
 * Returns Promise
 * @param {String} url
 * @return {Promise}
 */
function getJSON(url) {
  return get(url).then(JSON.parse);
}

/**
 * method for making GET request
 * @param {String} url
 * return {Promise}
 */
function get(url) {
  return new Promise(function(resolve, reject) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onload = function() {
      if (xhr.status === 200) {
        resolve(xhr.response);
      } else {
        reject(Error(xhr.statusText));
      }
    };

    // Handing network errors
    xhr.onerror = function() {
      reject(Error('Network error!'));
    };

    xhr.send();

  });
}
