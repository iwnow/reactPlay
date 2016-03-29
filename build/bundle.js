(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

require('./polyfills');
var Person = require('./person');

// var React = require('react');
// var ReactDOM = require('react-dom');

var HelloBox = React.createClass({
    displayName: 'HelloBox',

    getInitialState: function getInitialState() {
        var self = this;
        var p = new Promise(function (res) {
            var to = setTimeout(function () {
                self.setState({
                    name: 'Jhon'
                });
                clearTimeout(to);
                res();
            }, 3000);
        }).then(function () {
            self.setState({
                end: '[Promise end!:)]'
            });
        });
        return {
            name: 'Lee',
            end: ''
        };
    },
    render: function render() {
        return React.createElement(
            'div',
            null,
            this.state.name,
            ' this is from jsx!',
            this.state.end
        );
    }
});

ReactDOM.render(
//<hello />,
React.createElement(HelloBox, null), document.getElementById('reactApp'));

},{"./person":2,"./polyfills":3}],2:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Person = function () {
    function Person(name) {
        _classCallCheck(this, Person);

        this.name = name;
    }

    _createClass(Person, [{
        key: "info",
        value: function info() {
            return "name " + this.name;
        }
    }], [{
        key: "range",
        value: function range(n) {
            if (n < 0) return null;
            var res = [];
            while (n--) {
                res.push(new Person("person " + n));
            }
            return res;
        }
    }, {
        key: "rangeIter",
        value: function rangeIter(n) {
            var _marked = [gen].map(regeneratorRuntime.mark);

            function gen(n) {
                return regeneratorRuntime.wrap(function gen$(_context) {
                    while (1) {
                        switch (_context.prev = _context.next) {
                            case 0:
                                if (!(n < 0)) {
                                    _context.next = 2;
                                    break;
                                }

                                return _context.abrupt("return", null);

                            case 2:
                                if (! n--) {
                                    _context.next = 7;
                                    break;
                                }

                                _context.next = 5;
                                return new Person("person " + n);

                            case 5:
                                _context.next = 2;
                                break;

                            case 7:
                            case "end":
                                return _context.stop();
                        }
                    }
                }, _marked[0], this);
            };

            return gen(n);
        }
    }]);

    return Person;
}();

module.exports = Person;

},{}],3:[function(require,module,exports){
"use strict";

(function () {

  // проверяем поддержку
  if (document.documentElement.textContent === undefined) {
    var elementPrototype = typeof HTMLElement !== "undefined" ? HTMLElement.prototype : Element.prototype;
    // определяем свойство
    Object.defineProperty(elementPrototype, "textContent", {
      get: function get() {
        return this.innerText;
      },
      set: function set(value) {
        this.innerText = value;
      }
    });
  }
})();

},{}]},{},[1]);
