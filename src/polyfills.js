(function() {

  // проверяем поддержку
  if (document.documentElement.textContent === undefined) {
    var elementPrototype = typeof HTMLElement !== "undefined" ? HTMLElement.prototype : Element.prototype;
    // определяем свойство
    Object.defineProperty(elementPrototype, "textContent", {
      get: function() {
        return this.innerText;
      },
      set: function(value) {
        this.innerText = value;
      }
    });
  }

})();