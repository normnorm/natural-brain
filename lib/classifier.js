'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _brain = require('brain.js');

var _brain2 = _interopRequireDefault(_brain);

var _lodash = require('lodash.maxby');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Classifier = function () {
  function Classifier(options) {
    _classCallCheck(this, Classifier);

    this.brain = new _brain2.default.NeuralNetwork(options);
    this.data = [];
  }

  _createClass(Classifier, [{
    key: 'addExample',
    value: function addExample(input, label) {
      this.data.push({
        input: input, output: _defineProperty({}, label, 1)
      });
    }
  }, {
    key: 'train',
    value: function train() {
      return this.brain.train(this.data);
    }
  }, {
    key: 'getClassifications',
    value: function getClassifications(features) {
      var data = this.brain.run(features);

      return Object.keys(data).map(function (label) {
        return { label: label, value: data[label] };
      });
    }
  }, {
    key: 'classify',
    value: function classify(features) {
      var classifications = this.getClassifications(features);
      var res = (0, _lodash2.default)(classifications, function (current) {
        return current.value;
      });

      return res ? res.label : null;
    }
  }, {
    key: 'export',
    value: function _export() {
      return this.brain.toJSON();
    }
  }]);

  return Classifier;
}();

exports.default = Classifier;
module.exports = exports['default'];