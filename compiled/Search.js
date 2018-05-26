"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
	_inherits(Search, _React$Component);

	function Search(props) {
		_classCallCheck(this, Search);

		return _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this, props));
	}

	_createClass(Search, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "d-flex justify-content-center" },
				React.createElement("input", { type: "text", onChange: this.props.search, id: "searchBar", placeholder: "Search..." }),
				React.createElement("input", { style: { marginLeft: 10 }, onClick: this.props.submit, type: "button", value: "Submit", id: "submit" })
			);
		}
	}]);

	return Search;
}(React.Component);

window.Search = Search;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9TZWFyY2guanN4Il0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwic2VhcmNoIiwibWFyZ2luTGVmdCIsInN1Ym1pdCIsIlJlYWN0IiwiQ29tcG9uZW50Iiwid2luZG93Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQU1BLE07OztBQUNMLGlCQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEseUdBQ1pBLEtBRFk7QUFFbEI7Ozs7MkJBQ1E7QUFDUixVQUNDO0FBQUE7QUFBQSxNQUFLLFdBQVUsK0JBQWY7QUFDQyxtQ0FBTyxNQUFLLE1BQVosRUFBbUIsVUFBVSxLQUFLQSxLQUFMLENBQVdDLE1BQXhDLEVBQWdELElBQUcsV0FBbkQsRUFBK0QsYUFBWSxXQUEzRSxHQUREO0FBRUMsbUNBQU8sT0FBTyxFQUFDQyxZQUFZLEVBQWIsRUFBZCxFQUFnQyxTQUFTLEtBQUtGLEtBQUwsQ0FBV0csTUFBcEQsRUFBNEQsTUFBSyxRQUFqRSxFQUEwRSxPQUFNLFFBQWhGLEVBQXlGLElBQUcsUUFBNUY7QUFGRCxJQUREO0FBTUE7Ozs7RUFYbUJDLE1BQU1DLFM7O0FBYzNCQyxPQUFPUCxNQUFQLEdBQWdCQSxNQUFoQiIsImZpbGUiOiJTZWFyY2guanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTZWFyY2ggZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuXHRjb25zdHJ1Y3Rvcihwcm9wcykge1xuXHRcdHN1cGVyKHByb3BzKTtcblx0fVxuXHRyZW5kZXIoKSB7XG5cdFx0cmV0dXJuIChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cblx0XHRcdFx0PGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e3RoaXMucHJvcHMuc2VhcmNofSBpZD1cInNlYXJjaEJhclwiIHBsYWNlaG9sZGVyPVwiU2VhcmNoLi4uXCIvPlxuXHRcdFx0XHQ8aW5wdXQgc3R5bGU9e3ttYXJnaW5MZWZ0OiAxMH19IG9uQ2xpY2s9e3RoaXMucHJvcHMuc3VibWl0fSB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJTdWJtaXRcIiBpZD1cInN1Ym1pdFwiLz5cblx0XHRcdDwvZGl2PlxuXHRcdClcblx0fVxufVxuXG53aW5kb3cuU2VhcmNoID0gU2VhcmNoOyJdfQ==