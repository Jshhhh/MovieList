"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MoviesList = function (_React$Component) {
	_inherits(MoviesList, _React$Component);

	function MoviesList(props) {
		_classCallCheck(this, MoviesList);

		return _possibleConstructorReturn(this, (MoviesList.__proto__ || Object.getPrototypeOf(MoviesList)).call(this, props));
	}

	_createClass(MoviesList, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"div",
				{ className: "text-center ", id: "movie" },
				this.props.movie.title
			);
		}
	}]);

	return MoviesList;
}(React.Component);

window.MoviesList = MoviesList;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9tb3ZpZXNMaXN0LmpzeCJdLCJuYW1lcyI6WyJNb3ZpZXNMaXN0IiwicHJvcHMiLCJtb3ZpZSIsInRpdGxlIiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsVTs7O0FBQ0wscUJBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxpSEFDWkEsS0FEWTtBQUVsQjs7OzsyQkFFUTtBQUNSLFVBQ0M7QUFBQTtBQUFBLE1BQUssV0FBVSxjQUFmLEVBQThCLElBQUcsT0FBakM7QUFBMEMsU0FBS0EsS0FBTCxDQUFXQyxLQUFYLENBQWlCQztBQUEzRCxJQUREO0FBR0E7Ozs7RUFUdUJDLE1BQU1DLFM7O0FBWS9CQyxPQUFPTixVQUFQLEdBQW9CQSxVQUFwQiIsImZpbGUiOiJtb3ZpZXNMaXN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW92aWVzTGlzdCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHR9XG5cblx0cmVuZGVyKCkge1xuXHRcdHJldHVybiAoXG5cdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cInRleHQtY2VudGVyIFwiIGlkPVwibW92aWVcIj57dGhpcy5wcm9wcy5tb3ZpZS50aXRsZX08L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxud2luZG93Lk1vdmllc0xpc3QgPSBNb3ZpZXNMaXN0OyJdfQ==