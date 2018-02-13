var StoryView = (function() {
  /** 
   * @constructor 
   */
  function View() {
    this._title = qs('.story__title');
    this._content = qs('.story__content');
    this._spinner = qs('.story__spinner');
    
    var chapterTemp = qs('#chapterTemplate').innerHTML;
    
    this._chapter = _.template(chapterTemp);
  }

  /**
   * Sets title
   * @param {String} val
   */
  View.prototype.setTitle = function(val) {
    addTextToElement(this._title, val);
  };
  /**
   * Adds Chapter to the content
   * @param {Object} data
   */
  View.prototype.addChapter = function(data) {
    addHTMLToElement(this._content, this._chapter(data));
  };
  /**
   * Hides Spinner
   * @param {Object} data
   */
  View.prototype.hideSpinner = function() {
    this._spinner.style.display = 'none';
  };
  /**
   * shows Error
   * @param {Object} data
   */
  View.prototype.showError = function(errText) {
    addTextToElement(this._content, errText);
  };

  return View;
})();