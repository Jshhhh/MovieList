"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_React$Component) {
	_inherits(App, _React$Component);

	function App(props) {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

		_this.state = {
			movies: [],
			current: [],
			searchable: true
		};

		_this.getSearchValue = _this.getSearchValue.bind(_this);
		_this.searchMovies = _this.searchMovies.bind(_this);
		_this.showAllMovies = _this.showAllMovies.bind(_this);
		_this.setMovieTitle = _this.setMovieTitle.bind(_this);
		_this.addMovie = _this.addMovie.bind(_this);
		return _this;
	}

	_createClass(App, [{
		key: "showAllMovies",
		value: function showAllMovies() {
			var allMovies = this.state.movies.slice();
			this.setState({ current: allMovies });
		}
	}, {
		key: "getSearchValue",
		value: function getSearchValue(e) {
			this.setState({ search: e.target.value });
		}
	}, {
		key: "searchMovies",
		value: function searchMovies() {
			var _this2 = this;

			var filtered = this.state.movies.filter(function (movie) {
				return movie.title.includes(_this2.state.search);
			});
			if (filtered.length === 0) {
				this.setState({ searchable: false });
			} else {
				this.setState({ searchable: true });
			}
			this.setState(function (prev) {

				return { current: prev.current.filter(function (movie) {
						return movie.title.includes(_this2.state.search);
					}) };
			});
			console.log(this.state);
		}
	}, {
		key: "setMovieTitle",
		value: function setMovieTitle(e) {
			this.setState({ setMovieTitle: e.target.value, movieInputNode: e.target });
		}
	}, {
		key: "addMovie",
		value: function addMovie() {
			var allMovies = this.state.movies;
			var currentMovies = this.state.current;
			currentMovies.push({ title: this.state.setMovieTitle });
			allMovies.push({ title: this.state.setMovieTitle });
			this.setState({ current: currentMovies, movies: allMovies });
			this.state.movieInputNode.value = '';
		}
	}, {
		key: "render",
		value: function render() {
			var currentMovies = this.state.current.map(function (elem, index) {
				return React.createElement(MoviesList, { key: index, movie: elem });
			});
			return React.createElement(
				"div",
				null,
				React.createElement(AddMovies, { setMovieTitle: this.setMovieTitle, addMovie: this.addMovie }),
				React.createElement(Search, { search: this.getSearchValue, submit: this.searchMovies }),
				React.createElement(
					"button",
					{ onClick: this.showAllMovies },
					"Show All"
				),
				React.createElement(
					"div",
					{ className: "moviesList", movies: this.state.current },
					this.state.searchable ? currentMovies : React.createElement(
						"div",
						{ className: "noResults" },
						"No movie by that name found"
					)
				)
			);
		}
	}]);

	return App;
}(React.Component);

window.App = App;

ReactDOM.render(React.createElement(App, null), document.getElementById('movies'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJjdXJyZW50Iiwic2VhcmNoYWJsZSIsImdldFNlYXJjaFZhbHVlIiwiYmluZCIsInNlYXJjaE1vdmllcyIsInNob3dBbGxNb3ZpZXMiLCJzZXRNb3ZpZVRpdGxlIiwiYWRkTW92aWUiLCJhbGxNb3ZpZXMiLCJzbGljZSIsInNldFN0YXRlIiwiZSIsInNlYXJjaCIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJtb3ZpZSIsInRpdGxlIiwiaW5jbHVkZXMiLCJsZW5ndGgiLCJwcmV2IiwiY29uc29sZSIsImxvZyIsIm1vdmllSW5wdXROb2RlIiwiY3VycmVudE1vdmllcyIsInB1c2giLCJtYXAiLCJlbGVtIiwiaW5kZXgiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDTCxjQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0dBQ1pBLEtBRFk7O0FBRWxCLFFBQUtDLEtBQUwsR0FBYTtBQUNaQyxXQUFRLEVBREk7QUFFWkMsWUFBUyxFQUZHO0FBR1pDLGVBQVk7QUFIQSxHQUFiOztBQU1BLFFBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFDQSxRQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLE9BQXBCO0FBQ0EsUUFBS0UsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRixJQUFuQixPQUFyQjtBQUNBLFFBQUtHLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkgsSUFBbkIsT0FBckI7QUFDQSxRQUFLSSxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0osSUFBZCxPQUFoQjtBQVprQjtBQWFsQjs7OztrQ0FFZTtB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QUFELE9BQWhCLEVBQXdCQyxTQUFTQyxjQUFULENBQXdCLFFBQXhCLENBQXhCIiwiZmlsZSI6IkFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNsYXNzIEFwcCBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG5cdGNvbnN0cnVjdG9yKHByb3BzKSB7XG5cdFx0c3VwZXIocHJvcHMpO1xuXHRcdHRoaXMuc3RhdGUgPSB7XG5cdFx0XHRtb3ZpZXM6IFtdLFxuXHRcdFx0Y3VycmVudDogW10sXG5cdFx0XHRzZWFyY2hhYmxlOiB0cnVlXG5cdFx0fVxuXG5cdFx0dGhpcy5nZXRTZWFyY2hWYWx1ZSA9IHRoaXMuZ2V0U2VhcmNoVmFsdWUuYmluZCh0aGlzKTtcblx0XHR0aGlzLnNlYXJjaE1vdmllcyA9IHRoaXMuc2VhcmNoTW92aWVzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaG93QWxsTW92aWVzID0gdGhpcy5zaG93QWxsTW92aWVzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zZXRNb3ZpZVRpdGxlID0gdGhpcy5zZXRNb3ZpZVRpdGxlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5hZGRNb3ZpZSA9IHRoaXMuYWRkTW92aWUuYmluZCh0aGlzKTtcblx0fVxuXG5cdHNob3dBbGxNb3ZpZXMoKSB7XG5cdFx0dmFyIGFsbE1vdmllcyA9IHRoaXMuc3RhdGUubW92aWVzLnNsaWNlKCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7Y3VycmVudDogYWxsTW92aWVzfSk7XG5cdH1cblxuXHRnZXRTZWFyY2hWYWx1ZShlKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2VhcmNoOiBlLnRhcmdldC52YWx1ZX0pO1xuXHR9XG5cblx0c2VhcmNoTW92aWVzKCkge1xuXHRcdHZhciBmaWx0ZXJlZCA9IHRoaXMuc3RhdGUubW92aWVzLmZpbHRlcihtb3ZpZSA9PiBtb3ZpZS50aXRsZS5pbmNsdWRlcyh0aGlzLnN0YXRlLnNlYXJjaCkpO1xuXHRcdGlmIChmaWx0ZXJlZC5sZW5ndGggPT09IDApIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3NlYXJjaGFibGU6IGZhbHNlfSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRoaXMuc2V0U3RhdGUoe3NlYXJjaGFibGU6IHRydWV9KTtcblx0XHR9XG5cdFx0dGhpcy5zZXRTdGF0ZSgocHJldikgPT4ge1xuXG5cdFx0XHRyZXR1cm4ge2N1cnJlbnQ6IHByZXYuY3VycmVudC5maWx0ZXIobW92aWUgPT4gbW92aWUudGl0bGUuaW5jbHVkZXModGhpcy5zdGF0ZS5zZWFyY2gpKX1cblx0XHR9KTtcblx0XHRjb25zb2xlLmxvZyh0aGlzLnN0YXRlKVxuXHR9XG5cblx0c2V0TW92aWVUaXRsZShlKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2V0TW92aWVUaXRsZTogZS50YXJnZXQudmFsdWUsIG1vdmllSW5wdXROb2RlOiBlLnRhcmdldH0pO1xuXHR9XG5cblx0YWRkTW92aWUoKSB7XG5cdFx0dmFyIGFsbE1vdmllcyA9IHRoaXMuc3RhdGUubW92aWVzO1xuXHRcdHZhciBjdXJyZW50TW92aWVzID0gdGhpcy5zdGF0ZS5jdXJyZW50O1xuXHRcdGN1cnJlbnRNb3ZpZXMucHVzaCh7dGl0bGU6IHRoaXMuc3RhdGUuc2V0TW92aWVUaXRsZX0pO1xuXHRcdGFsbE1vdmllcy5wdXNoKHt0aXRsZTogdGhpcy5zdGF0ZS5zZXRNb3ZpZVRpdGxlfSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7Y3VycmVudDogY3VycmVudE1vdmllcywgbW92aWVzOiBhbGxNb3ZpZXN9KTtcblx0XHR0aGlzLnN0YXRlLm1vdmllSW5wdXROb2RlLnZhbHVlID0gJyc7XG5cdH1cblxuXG5cdHJlbmRlcigpIHtcblx0XHRcdHZhciBjdXJyZW50TW92aWVzID0gdGhpcy5zdGF0ZS5jdXJyZW50Lm1hcCgoZWxlbSwgaW5kZXgpID0+IDxNb3ZpZXNMaXN0IGtleT17aW5kZXh9IG1vdmllPXtlbGVtfS8+KTtcblx0XHRyZXR1cm4gKFxuXHRcdFx0PGRpdj5cblx0XHRcdFx0PEFkZE1vdmllcyBzZXRNb3ZpZVRpdGxlPXt0aGlzLnNldE1vdmllVGl0bGV9IGFkZE1vdmllPXt0aGlzLmFkZE1vdmllfS8+XG5cdFx0XHRcdDxTZWFyY2ggc2VhcmNoPXt0aGlzLmdldFNlYXJjaFZhbHVlfSBzdWJtaXQ9e3RoaXMuc2VhcmNoTW92aWVzfS8+PGJ1dHRvbiBvbkNsaWNrPXt0aGlzLnNob3dBbGxNb3ZpZXN9PlNob3cgQWxsPC9idXR0b24+XG5cdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW92aWVzTGlzdFwiIG1vdmllcz17dGhpcy5zdGF0ZS5jdXJyZW50fT5cblx0XHRcdFx0XHR7KHRoaXMuc3RhdGUuc2VhcmNoYWJsZSkgPyBjdXJyZW50TW92aWVzIDogPGRpdiBjbGFzc05hbWU9XCJub1Jlc3VsdHNcIj5ObyBtb3ZpZSBieSB0aGF0IG5hbWUgZm91bmQ8L2Rpdj59XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbndpbmRvdy5BcHAgPSBBcHA7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3ZpZXMnKSk7Il19