'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var movies = [{ title: 'Mean Girls' }, { title: 'Hackers' }, { title: 'The Grey' }, { title: 'Sunshine' }, { title: 'Ex Machina' }];

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			movies: movies,
			filter: movies
		};

		_this.getSearchValue = _this.getSearchValue.bind(_this);
		_this.searchData = _this.searchData.bind(_this);
		_this.showAllMovies = _this.showAllMovies.bind(_this);
		_this.movieTitle = _this.movieTitle.bind(_this);
		return _this;
	}

	_createClass(App, [{
		key: 'getSearchValue',
		value: function getSearchValue(e) {
			this.setState({ search: e.target.value });
			console.log(this.state);
		}
	}, {
		key: 'searchData',
		value: function searchData() {
			var _this2 = this;

			var filtered = this.state.movies.filter(function (movie) {
				return movie.title.includes(_this2.state.search);
			});
			this.setState({ filter: filtered });
			console.log(this.state);
		}
	}, {
		key: 'showAllMovies',
		value: function showAllMovies() {
			var allMovies = this.state.movies;
			this.setState({ filter: allMovies });
		}
	}, {
		key: 'addMovies',
		value: function addMovies() {
			var movieTitle = this.state.movies;
			movieTitle.push(this.state.addTitle);
			this.setState({ movies: movieTitle });
		}
	}, {
		key: 'movieTitle',
		value: function movieTitle(e) {
			this.setState({ addTitle: e.target.value });
		}
	}, {
		key: 'render',
		value: function render() {
			// var currentMovies = this.state.filter
			return React.createElement(
				'div',
				null,
				React.createElement(AddMovies, { movieTitle: this.movieTitle, add: this.addMovies }),
				React.createElement(Search, { search: this.getSearchValue, submit: this.searchData }),
				React.createElement(
					'button',
					{ onClick: this.showAllMovies },
					'Show All'
				),
				React.createElement(
					'div',
					{ className: 'moviesList', movies: this.state.movies },
					this.state.movies.map(function (elem) {
						return React.createElement(MoviesList, { key: elem.title, movie: elem });
					})
				)
			);
		}
	}]);

	return App;
}(React.Component);

window.App = App;

ReactDOM.render(React.createElement(App, null), document.getElementById('movies'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHAuanN4Il0sIm5hbWVzIjpbIm1vdmllcyIsInRpdGxlIiwiQXBwIiwicHJvcHMiLCJzdGF0ZSIsImZpbHRlciIsImdldFNlYXJjaFZhbHVlIiwiYmluZCIsInNlYXJjaERhdGEiLCJzaG93QWxsTW92aWVzIiwibW92aWVUaXRsZSIsImUiLCJzZXRTdGF0ZSIsInNlYXJjaCIsInRhcmdldCIsInZhbHVlIiwiY29uc29sZSIsImxvZyIsImZpbHRlcmVkIiwibW92aWUiLCJpbmNsdWRlcyIsImFsbE1vdmllcyIsInB1c2giLCJhZGRUaXRsZSIsImFkZE1vdmllcyIsIm1hcCIsImVsZW0iLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLElBQUlBLFNBQVMsQ0FDWCxFQUFDQyxPQUFPLFlBQVIsRUFEVyxFQUVYLEVBQUNBLE9BQU8sU0FBUixFQUZXLEVBR1gsRUFBQ0EsT0FBTyxVQUFSLEVBSFcsRUFJWCxFQUFDQSxPQUFPLFVBQVIsRUFKVyxFQUtYLEVBQUNBLE9BQU8sWUFBUixFQUxXLENBQWI7O0lBUU1DLEc7OztBQUNMLGNBQVlDLEtBQVosRUFBbUI7QUFBQTs7QUFBQSx3R0FDWkEsS0FEWTs7QUFFbEIsUUFBS0MsS0FBTCxHQUFhO0FBQ1pKLFdBQVFBLE1BREk7QUFFWkssV0FBUUw7QUFGSSxHQUFiOztBQUtBLFFBQUtNLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFDQSxRQUFLQyxVQUFMLEdBQWtCLE1BQUtBLFVBQUwsQ0FBZ0JELElBQWhCLE9BQWxCO0FBQ0EsUUFBS0UsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRixJQUFuQixPQUFyQjtBQUNBLFFBQUtHLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkgsSUFBaEIsT0FBbEI7QUFWa0I7QUFXbEI7Ozs7aUNBRWNJLEMsRUFBRztBQUNqQixRQUFLQyxRQUFMLENBQWMsRUFBQ0MsUUFBUUYsRUFBRUcsTUFBRixDQUFTQyxLQUFsQixFQUFkO0FBQ0FDLFdBQVFDLEdBQVIsQ0FBWSxLQUFLYixLQUFqQjtBQUNBOzs7K0JBRVk7QUFBQTs7QUFDWixPQUFJYyxXQUFXLEtBQUtkLEtBQUwsQ0FBV0osTUFBWCxDQUFrQkssTUFBbEIsQ0FBeUI7QUFBQSxXQUFTYyxNQUFNbEIsS0FBTixDQUFZbUIsUUFBWixDQUFxQixPQUFLaEIsS0FBTCxDQUFXUyxNQUFoQyxDQUFUO0FBQUEsSUFBekIsQ0FBZjtBQUNBLFFBQUtELFFBQUwsQ0FBYyxFQUFDUCxRQUFRYSxRQUFULEVBQWQ7QUFDQUYsV0FBUUMsR0FBUixDQUFZLEtBQUtiLEtBQWpCO0FBQ0E7OztrQ0FFZTtBQUNmLE9BQUlpQixZQUFZLEtBQUtqQixLQUFMLENBQVdKLE1BQTNCO0FBQ0EsUUFBS1ksUUFBTCxDQUFjLEVBQUNQLFFBQVFnQixTQUFULEVBQWQ7QUFDQTs7OzhCQUVXO0FBQ1gsT0FBSVgsYUFBYSxLQUFLTixLQUFMLENBQVdKLE1BQTVCO0FBQ0FVLGNBQVdZLElBQVgsQ0FBZ0IsS0FBS2xCLEtBQUwsQ0FBV21CLFFBQTNCO0FBQ0EsUUFBS1gsUUFBTCxDQUFjLEVBQUNaLFFBQVFVLFVBQVQsRUFBZDtBQUNBOzs7NkJBRVVDLEMsRUFBRztBQUNiLFFBQUtDLFFBQUwsQ0FBYyxFQUFDVyxVQUFVWixFQUFFRyxNQUFGLENBQVNDLEtBQXBCLEVBQWQ7QUFDQTs7OzJCQUVRO0FBQ1I7QUFDQSxVQUNFO0FBQUE7QUFBQTtBQUNDLHdCQUFDLFNBQUQsSUFBVyxZQUFZLEtBQUtMLFVBQTVCLEVBQXdDLEtBQUssS0FBS2MsU0FBbEQsR0FERDtBQUVDLHdCQUFDLE1BQUQsSUFBUSxRQUFRLEtBQUtsQixjQUFyQixFQUFxQyxRQUFRLEtBQUtFLFVBQWxELEdBRkQ7QUFFZ0U7QUFBQTtBQUFBLE9BQVEsU0FBUyxLQUFLQyxhQUF0QjtBQUFBO0FBQUEsS0FGaEU7QUFHQztBQUFBO0FBQUEsT0FBSyxXQUFVLFlBQWYsRUFBNEIsUUFBUSxLQUFLTCxLQUFMLENBQVdKLE1BQS9DO0FBQ0UsVUFBS0ksS0FBTCxDQUFXSixNQUFYLENBQWtCeUIsR0FBbEIsQ0FBc0IsVUFBQ0MsSUFBRDtBQUFBLGFBQVUsb0JBQUMsVUFBRCxJQUFZLEtBQUtBLEtBQUt6QixLQUF0QixFQUE2QixPQUFPeUIsSUFBcEMsR0FBVjtBQUFBLE1BQXRCO0FBREY7QUFIRCxJQURGO0FBU0E7Ozs7RUFuRGdCQyxNQUFNQyxTOztBQXNEeEJDLE9BQU8zQixHQUFQLEdBQWFBLEdBQWI7O0FBRUE0QixTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBd0JDLFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBeEIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1vdmllcyA9IFtcbiAge3RpdGxlOiAnTWVhbiBHaXJscyd9LFxuICB7dGl0bGU6ICdIYWNrZXJzJ30sXG4gIHt0aXRsZTogJ1RoZSBHcmV5J30sXG4gIHt0aXRsZTogJ1N1bnNoaW5lJ30sXG4gIHt0aXRsZTogJ0V4IE1hY2hpbmEnfSxcbl07XG5cbmNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRtb3ZpZXM6IG1vdmllcyxcblx0XHRcdGZpbHRlcjogbW92aWVzXG5cdFx0fVxuXG5cdFx0dGhpcy5nZXRTZWFyY2hWYWx1ZSA9IHRoaXMuZ2V0U2VhcmNoVmFsdWUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNlYXJjaERhdGEgPSB0aGlzLnNlYXJjaERhdGEuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNob3dBbGxNb3ZpZXMgPSB0aGlzLnNob3dBbGxNb3ZpZXMuYmluZCh0aGlzKTtcblx0XHR0aGlzLm1vdmllVGl0bGUgPSB0aGlzLm1vdmllVGl0bGUuYmluZCh0aGlzKTtcblx0fVxuXG5cdGdldFNlYXJjaFZhbHVlKGUpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtzZWFyY2g6IGUudGFyZ2V0LnZhbHVlfSk7XG5cdFx0Y29uc29sZS5sb2codGhpcy5zdGF0ZSk7XG5cdH1cblxuXHRzZWFyY2hEYXRhKCkge1xuXHRcdHZhciBmaWx0ZXJlZCA9IHRoaXMuc3RhdGUubW92aWVzLmZpbHRlcihtb3ZpZSA9PiBtb3ZpZS50aXRsZS5pbmNsdWRlcyh0aGlzLnN0YXRlLnNlYXJjaCkpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe2ZpbHRlcjogZmlsdGVyZWR9KTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxuXHR9XG5cblx0c2hvd0FsbE1vdmllcygpIHtcblx0XHR2YXIgYWxsTW92aWVzID0gdGhpcy5zdGF0ZS5tb3ZpZXM7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7ZmlsdGVyOiBhbGxNb3ZpZXN9KTtcblx0fVxuXG5cdGFkZE1vdmllcygpIHtcblx0XHR2YXIgbW92aWVUaXRsZSA9IHRoaXMuc3RhdGUubW92aWVzXG5cdFx0bW92aWVUaXRsZS5wdXNoKHRoaXMuc3RhdGUuYWRkVGl0bGUpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe21vdmllczogbW92aWVUaXRsZX0pO1xuXHR9XG5cblx0bW92aWVUaXRsZShlKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7YWRkVGl0bGU6IGUudGFyZ2V0LnZhbHVlfSk7XG5cdH1cblxuXHRyZW5kZXIoKSB7XG5cdFx0Ly8gdmFyIGN1cnJlbnRNb3ZpZXMgPSB0aGlzLnN0YXRlLmZpbHRlclxuXHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PEFkZE1vdmllcyBtb3ZpZVRpdGxlPXt0aGlzLm1vdmllVGl0bGV9IGFkZD17dGhpcy5hZGRNb3ZpZXN9Lz5cblx0XHRcdFx0XHQ8U2VhcmNoIHNlYXJjaD17dGhpcy5nZXRTZWFyY2hWYWx1ZX0gc3VibWl0PXt0aGlzLnNlYXJjaERhdGF9Lz48YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2hvd0FsbE1vdmllc30+U2hvdyBBbGw8L2J1dHRvbj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vdmllc0xpc3RcIiBtb3ZpZXM9e3RoaXMuc3RhdGUubW92aWVzfT5cblx0XHRcdFx0XHRcdHt0aGlzLnN0YXRlLm1vdmllcy5tYXAoKGVsZW0pID0+IDxNb3ZpZXNMaXN0IGtleT17ZWxlbS50aXRsZX0gbW92aWU9e2VsZW19Lz4pfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxud2luZG93LkFwcCA9IEFwcDtcblxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdmllcycpKTsiXX0=