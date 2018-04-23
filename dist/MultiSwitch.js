'use strict';

Object.defineProperty(exports, "__esModule", {
      value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

require('./MultiSwitch.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MultiSwitch = function (_Component) {
      _inherits(MultiSwitch, _Component);

      function MultiSwitch(props) {
            _classCallCheck(this, MultiSwitch);

            var _this = _possibleConstructorReturn(this, (MultiSwitch.__proto__ || Object.getPrototypeOf(MultiSwitch)).call(this, props));

            _this.state = {
                  selectedSwitch: props.selectedSwitch || 0,
                  loaded: false
            };
            return _this;
      }

      _createClass(MultiSwitch, [{
            key: 'onToggle',
            value: function onToggle(ev) {
                  var id = ev && parseInt(ev.target.id, 10);
                  this.props.onToggleCallback && this.props.onToggleCallback(id);
                  this.setState({
                        loaded: true,
                        selectedSwitch: id
                  });
            }
      }, {
            key: 'render',
            value: function render() {
                  var _this2 = this;

                  var _props = this.props,
                      texts = _props.texts,
                      bgColor = _props.bgColor,
                      eachSwitchWidth = _props.eachSwitchWidth,
                      fontColor = _props.fontColor,
                      selectedFontColor = _props.selectedFontColor,
                      fontSize = _props.fontSize,
                      fontWeight = _props.fontWeight,
                      height = _props.height,
                      borderColor = _props.borderColor,
                      borderWidth = _props.borderWidth,
                      selectedSwitchColor = _props.selectedSwitchColor;
                  var selectedSwitch = this.state.selectedSwitch;

                  var noOfSwitches = texts.length || 2;
                  var switchWidth = noOfSwitches * eachSwitchWidth;
                  var switchStyles = {
                        width: switchWidth + 'px',
                        backgroundColor: bgColor,
                        borderWidth: borderWidth,
                        borderColor: borderColor,
                        height: height
                  };
                  var labelWidth = (eachSwitchWidth || switchWidth / noOfSwitches) + 'px';

                  var switches = texts.map(function (text, index) {
                        var labelStyles = {
                              width: labelWidth,
                              color: fontColor,
                              lineHeight: height,
                              fontSize: fontSize,
                              fontWeight: fontWeight
                        };
                        var classSwitchContent = 'multi-switch-content';

                        if (selectedSwitch === index) {
                              classSwitchContent = classSwitchContent + ' multi-switch-handle-color';
                              labelStyles.color = selectedFontColor;
                        }
                        return _react2.default.createElement(
                              'label',
                              {
                                    key: index,
                                    id: index,
                                    className: classSwitchContent,
                                    style: labelStyles,
                                    onClick: _this2.onToggle.bind(_this2)
                              },
                              texts[index]
                        );
                  });

                  var switchHandleStyles = {
                        width: labelWidth,
                        left: selectedSwitch * eachSwitchWidth + 2 + 'px',
                        height: height,
                        lineHeight: height,
                        backgroundColor: selectedSwitchColor
                  };

                  var classNameHandle = 'multi-switch-handle multi-switch-handle-move';
                  return _react2.default.createElement(
                        'div',
                        { className: 'multi-switch-container', style: switchStyles },
                        switches,
                        _react2.default.createElement('span', {
                              className: classNameHandle,
                              style: switchHandleStyles
                        })
                  );
            }
      }]);

      return MultiSwitch;
}(_react.Component);

exports.default = MultiSwitch;


MultiSwitch.propTypes = {
      texts: _propTypes2.default.array.isRequired,
      selectedSwitch: _propTypes2.default.number,
      bgColor: _propTypes2.default.string,
      borderColor: _propTypes2.default.string,
      borderWidth: _propTypes2.default.string,
      fontColor: _propTypes2.default.string,
      selectedFontColor: _propTypes2.default.string,
      selectedSwitchColor: _propTypes2.default.string,
      fontSize: _propTypes2.default.string,
      fontWeight: _propTypes2.default.string,
      onToggleCallback: _propTypes2.default.func,
      eachSwitchWidth: _propTypes2.default.number,
      height: _propTypes2.default.string
};

MultiSwitch.defaultProps = {
      texts: ['Text 1', 'Text 2'],
      selectedSwitch: 0,
      bgColor: 'white',
      borderColor: 'black',
      borderWidth: '0.1rem',
      fontColor: 'black',
      selectedFontColor: 'yellow',
      selectedSwitchColor: 'teal',
      eachSwitchWidth: 100,
      height: '30px',
      fontSize: '12px',
      fontWeight: 'bold'
};