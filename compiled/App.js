'use strict';

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
			current: []
		};

		_this.getSearchValue = _this.getSearchValue.bind(_this);
		_this.searchMovies = _this.searchMovies.bind(_this);
		_this.showAllMovies = _this.showAllMovies.bind(_this);
		_this.setMovieTitle = _this.setMovieTitle.bind(_this);
		_this.addMovie = _this.addMovie.bind(_this);
		return _this;
	}

	_createClass(App, [{
		key: 'showAllMovies',
		value: function showAllMovies() {
			var allMovies = this.state.movies.slice();
			this.setState({ current: allMovies });
		}
	}, {
		key: 'getSearchValue',
		value: function getSearchValue(e) {
			this.setState({ search: e.target.value });
		}
	}, {
		key: 'searchMovies',
		value: function searchMovies() {
			var _this2 = this;

			var filtered = this.state.movies.filter(function (movie) {
				return movie.title.includes(_this2.state.search);
			});
			this.setState({ current: filtered });
			console.log(this.state);
		}
	}, {
		key: 'setMovieTitle',
		value: function setMovieTitle(e) {
			this.setState({ setMovieTitle: e.target.value, movieInputNode: e.target });
		}
	}, {
		key: 'addMovie',
		value: function addMovie() {
			console.log('added');
			var allMovies = this.state.movies;
			var currentMovies = this.state.current;
			currentMovies.push({ title: this.state.setMovieTitle });
			allMovies.push({ title: this.state.setMovieTitle });
			this.setState({ current: currentMovies, movies: allMovies });
			this.state.movieInputNode.value = '';
		}
	}, {
		key: 'render',
		value: function render() {
			var currentMovies = this.state.current.map(function (elem, index) {
				return React.createElement(MoviesList, { key: index, movie: elem });
			});
			return React.createElement(
				'div',
				null,
				React.createElement(AddMovies, { setMovieTitle: this.setMovieTitle, addMovie: this.addMovie }),
				React.createElement(Search, { search: this.getSearchValue, submit: this.searchMovies }),
				React.createElement(
					'button',
					{ onClick: this.showAllMovies },
					'Show All'
				),
				React.createElement(
					'div',
					{ className: 'moviesList', movies: this.state.current },
					currentMovies
				)
			);
		}
	}]);

	return App;
}(React.Component);

window.App = App;

ReactDOM.render(React.createElement(App, null), document.getElementById('movies'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJjdXJyZW50IiwiZ2V0U2VhcmNoVmFsdWUiLCJiaW5kIiwic2VhcmNoTW92aWVzIiwic2hvd0FsbE1vdmllcyIsInNldE1vdmllVGl0bGUiLCJhZGRNb3ZpZSIsImFsbE1vdmllcyIsInNsaWNlIiwic2V0U3RhdGUiLCJlIiwic2VhcmNoIiwidGFyZ2V0IiwidmFsdWUiLCJmaWx0ZXJlZCIsImZpbHRlciIsIm1vdmllIiwidGl0bGUiLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJsb2ciLCJtb3ZpZUlucHV0Tm9kZSIsImN1cnJlbnRNb3ZpZXMiLCJwdXNoIiwibWFwIiwiZWxlbSIsImluZGV4IiwiUmVhY3QiLCJDb21wb25lbnQiLCJ3aW5kb3ciLCJSZWFjdERPTSIsInJlbmRlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7SUFBTUEsRzs7O0FBQ0wsY0FBWUMsS0FBWixFQUFtQjtBQUFBOztBQUFBLHdHQUNaQSxLQURZOztBQUVsQixRQUFLQyxLQUFMLEdBQWE7QUFDWkMsV0FBUSxFQURJO0FBRVpDLFlBQVM7QUFGRyxHQUFiOztBQUtBLFFBQUtDLGNBQUwsR0FBc0IsTUFBS0EsY0FBTCxDQUFvQkMsSUFBcEIsT0FBdEI7QUFDQSxRQUFLQyxZQUFMLEdBQW9CLE1BQUtBLFlBQUwsQ0FBa0JELElBQWxCLE9BQXBCO0FBQ0EsUUFBS0UsYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CRixJQUFuQixPQUFyQjtBQUNBLFFBQUtHLGFBQUwsR0FBcUIsTUFBS0EsYUFBTCxDQUFtQkgsSUFBbkIsT0FBckI7QUFDQSxRQUFLSSxRQUFMLEdBQWdCLE1BQUtBLFFBQUwsQ0FBY0osSUFBZCxPQUFoQjtBQVhrQjtBQVlsQjs7OztrQ0FFZTtBQUNmLE9BQUlLLFlBQVksS0FBS1QsS0FBTCxDQUFXQyxNQUFYLENBQWtCUyxLQUFsQixFQUFoQjtBQUNBLFFBQUtDLFFBQUwsQ0FBYyxFQUFDVCxTQUFTTyxTQUFWLEVBQWQ7QUFDQTs7O2lDQUVjRyxDLEVBQUc7QUFDakIsUUFBS0QsUUFBTCxDQUFjLEVBQUNFLFFBQVFELEVBQUVFLE1BQUYsQ0FBU0MsS0FBbEIsRUFBZDtBQUNBOzs7aUNBRWM7QUFBQTs7QUFDZCxPQUFJQyxXQUFXLEtBQUtoQixLQUFMLENBQVdDLE1BQVgsQ0FBa0JnQixNQUFsQixDQUF5QjtBQUFBLFdBQVNDLE1BQU1DLEtBQU4sQ0FBWUMsUUFBWixDQUFxQixPQUFLcEIsS0FBTCxDQUFXYSxNQUFoQyxDQUFUO0FBQUEsSUFBekIsQ0FBZjtBQUNBLFFBQUtGLFFBQUwsQ0FBYyxFQUFDVCxTQUFTYyxRQUFWLEVBQWQ7QUFDQUssV0FBUUMsR0FBUixDQUFZLEtBQUt0QixLQUFqQjtBQUNBOzs7Z0NBRWFZLEMsRUFBRztBQUNoQixRQUFLRCxRQUFMLENBQWMsRUFBQ0osZUFBZUssRUFBRUUsTUFBRixDQUFTQyxLQUF6QixFQUFnQ1EsZ0JBQWdCWCxFQUFFRSxNQUFsRCxFQUFkO0FBQ0E7Ozs2QkFFVTtBQUNWTyxXQUFRQyxHQUFSLENBQVksT0FBWjtBQUNBLE9BQUliLFlBQVksS0FBS1QsS0FBTCxDQUFXQyxNQUEzQjtBQUNBLE9BQUl1QixnQkFBZ0IsS0FBS3hCLEtBQUwsQ0FBV0UsT0FBL0I7QUFDQXNCLGlCQUFjQyxJQUFkLENBQW1CLEVBQUNOLE9BQU8sS0FBS25CLEtBQUwsQ0FBV08sYUFBbkIsRUFBbkI7QUFDQUUsYUFBVWdCLElBQVYsQ0FBZSxFQUFDTixPQUFPLEtBQUtuQixLQUFMLENBQVdPLGFBQW5CLEVBQWY7QUFDQSxRQUFLSSxRQUFMLENBQWMsRUFBQ1QsU0FBU3NCLGFBQVYsRUFBeUJ2QixRQUFRUSxTQUFqQyxFQUFkO0FBQ0EsUUFBS1QsS0FBTCxDQUFXdUIsY0FBWCxDQUEwQlIsS0FBMUIsR0FBa0MsRUFBbEM7QUFDQTs7OzJCQUdRO0FBQ1AsT0FBSVMsZ0JBQWdCLEtBQUt4QixLQUFMLENBQVdFLE9BQVgsQ0FBbUJ3QixHQUFuQixDQUF1QixVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSxXQUFpQixvQkFBQyxVQUFELElBQVksS0FBS0EsS0FBakIsRUFBd0IsT0FBT0QsSUFBL0IsR0FBakI7QUFBQSxJQUF2QixDQUFwQjtBQUNELFVBQ0U7QUFBQTtBQUFBO0FBQ0Msd0JBQUMsU0FBRCxJQUFXLGVBQWUsS0FBS3BCLGFBQS9CLEVBQThDLFVBQVUsS0FBS0MsUUFBN0QsR0FERDtBQUVDLHdCQUFDLE1BQUQsSUFBUSxRQUFRLEtBQUtMLGNBQXJCLEVBQXFDLFFBQVEsS0FBS0UsWUFBbEQsR0FGRDtBQUVrRTtBQUFBO0FBQUEsT0FBUSxTQUFTLEtBQUtDLGFBQXRCO0FBQUE7QUFBQSxLQUZsRTtBQUdDO0FBQUE7QUFBQSxPQUFLLFdBQVUsWUFBZixFQUE0QixRQUFRLEtBQUtOLEtBQUwsQ0FBV0UsT0FBL0M7QUFDRXNCO0FBREY7QUFIRCxJQURGO0FBU0E7Ozs7RUF4RGdCSyxNQUFNQyxTOztBQTJEeEJDLE9BQU9qQyxHQUFQLEdBQWFBLEdBQWI7O0FBRUFrQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBd0JDLFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBeEIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG1vdmllczogW10sXG5cdFx0XHRjdXJyZW50OiBbXVxuXHRcdH1cblxuXHRcdHRoaXMuZ2V0U2VhcmNoVmFsdWUgPSB0aGlzLmdldFNlYXJjaFZhbHVlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zZWFyY2hNb3ZpZXMgPSB0aGlzLnNlYXJjaE1vdmllcy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2hvd0FsbE1vdmllcyA9IHRoaXMuc2hvd0FsbE1vdmllcy5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuc2V0TW92aWVUaXRsZSA9IHRoaXMuc2V0TW92aWVUaXRsZS5iaW5kKHRoaXMpO1xuXHRcdHRoaXMuYWRkTW92aWUgPSB0aGlzLmFkZE1vdmllLmJpbmQodGhpcyk7XG5cdH1cblxuXHRzaG93QWxsTW92aWVzKCkge1xuXHRcdHZhciBhbGxNb3ZpZXMgPSB0aGlzLnN0YXRlLm1vdmllcy5zbGljZSgpO1xuXHRcdHRoaXMuc2V0U3RhdGUoe2N1cnJlbnQ6IGFsbE1vdmllc30pO1xuXHR9XG5cblx0Z2V0U2VhcmNoVmFsdWUoZSkge1xuXHRcdHRoaXMuc2V0U3RhdGUoe3NlYXJjaDogZS50YXJnZXQudmFsdWV9KTtcblx0fVxuXG5cdHNlYXJjaE1vdmllcygpIHtcblx0XHR2YXIgZmlsdGVyZWQgPSB0aGlzLnN0YXRlLm1vdmllcy5maWx0ZXIobW92aWUgPT4gbW92aWUudGl0bGUuaW5jbHVkZXModGhpcy5zdGF0ZS5zZWFyY2gpKTtcblx0XHR0aGlzLnNldFN0YXRlKHtjdXJyZW50OiBmaWx0ZXJlZH0pO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG5cdH1cblxuXHRzZXRNb3ZpZVRpdGxlKGUpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtzZXRNb3ZpZVRpdGxlOiBlLnRhcmdldC52YWx1ZSwgbW92aWVJbnB1dE5vZGU6IGUudGFyZ2V0fSk7XG5cdH1cblxuXHRhZGRNb3ZpZSgpIHtcblx0XHRjb25zb2xlLmxvZygnYWRkZWQnKTtcblx0XHR2YXIgYWxsTW92aWVzID0gdGhpcy5zdGF0ZS5tb3ZpZXM7XG5cdFx0dmFyIGN1cnJlbnRNb3ZpZXMgPSB0aGlzLnN0YXRlLmN1cnJlbnQ7XG5cdFx0Y3VycmVudE1vdmllcy5wdXNoKHt0aXRsZTogdGhpcy5zdGF0ZS5zZXRNb3ZpZVRpdGxlfSk7XG5cdFx0YWxsTW92aWVzLnB1c2goe3RpdGxlOiB0aGlzLnN0YXRlLnNldE1vdmllVGl0bGV9KTtcblx0XHR0aGlzLnNldFN0YXRlKHtjdXJyZW50OiBjdXJyZW50TW92aWVzLCBtb3ZpZXM6IGFsbE1vdmllc30pO1xuXHRcdHRoaXMuc3RhdGUubW92aWVJbnB1dE5vZGUudmFsdWUgPSAnJztcblx0fVxuXG5cblx0cmVuZGVyKCkge1xuXHRcdFx0dmFyIGN1cnJlbnRNb3ZpZXMgPSB0aGlzLnN0YXRlLmN1cnJlbnQubWFwKChlbGVtLCBpbmRleCkgPT4gPE1vdmllc0xpc3Qga2V5PXtpbmRleH0gbW92aWU9e2VsZW19Lz4pO1xuXHRcdHJldHVybiAoXG5cdFx0XHRcdDxkaXY+XG5cdFx0XHRcdFx0PEFkZE1vdmllcyBzZXRNb3ZpZVRpdGxlPXt0aGlzLnNldE1vdmllVGl0bGV9IGFkZE1vdmllPXt0aGlzLmFkZE1vdmllfS8+XG5cdFx0XHRcdFx0PFNlYXJjaCBzZWFyY2g9e3RoaXMuZ2V0U2VhcmNoVmFsdWV9IHN1Ym1pdD17dGhpcy5zZWFyY2hNb3ZpZXN9Lz48YnV0dG9uIG9uQ2xpY2s9e3RoaXMuc2hvd0FsbE1vdmllc30+U2hvdyBBbGw8L2J1dHRvbj5cblx0XHRcdFx0XHQ8ZGl2IGNsYXNzTmFtZT1cIm1vdmllc0xpc3RcIiBtb3ZpZXM9e3RoaXMuc3RhdGUuY3VycmVudH0+XG5cdFx0XHRcdFx0XHR7Y3VycmVudE1vdmllc31cblx0XHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PC9kaXY+XG5cdFx0KVxuXHR9XG59XG5cbndpbmRvdy5BcHAgPSBBcHA7XG5cblJlYWN0RE9NLnJlbmRlcig8QXBwLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtb3ZpZXMnKSk7Il19