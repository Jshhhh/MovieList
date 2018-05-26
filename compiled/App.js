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
		_this.searchData = _this.searchData.bind(_this);
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
		key: 'searchData',
		value: function searchData() {
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
			this.setState({ setMovieTitle: e.target.value });
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
		}
	}, {
		key: 'render',
		value: function render() {
			// var currentMovies = this.state.filter
			return React.createElement(
				'div',
				null,
				React.createElement(AddMovies, { setMovieTitle: this.setMovieTitle, addMovie: this.addMovie }),
				React.createElement(Search, { search: this.getSearchValue, submit: this.searchData }),
				React.createElement(
					'button',
					{ onClick: this.showAllMovies },
					'Show All'
				),
				React.createElement(
					'div',
					{ className: 'moviesList', movies: this.state.current },
					this.state.current.map(function (elem, index) {
						return React.createElement(MoviesList, { key: index, movie: elem });
					})
				)
			);
		}
	}]);

	return App;
}(React.Component);

window.App = App;

ReactDOM.render(React.createElement(App, null), document.getElementById('movies'));
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BcHAuanN4Il0sIm5hbWVzIjpbIkFwcCIsInByb3BzIiwic3RhdGUiLCJtb3ZpZXMiLCJjdXJyZW50IiwiZ2V0U2VhcmNoVmFsdWUiLCJiaW5kIiwic2VhcmNoRGF0YSIsInNob3dBbGxNb3ZpZXMiLCJzZXRNb3ZpZVRpdGxlIiwiYWRkTW92aWUiLCJhbGxNb3ZpZXMiLCJzbGljZSIsInNldFN0YXRlIiwiZSIsInNlYXJjaCIsInRhcmdldCIsInZhbHVlIiwiZmlsdGVyZWQiLCJmaWx0ZXIiLCJtb3ZpZSIsInRpdGxlIiwiaW5jbHVkZXMiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudE1vdmllcyIsInB1c2giLCJtYXAiLCJlbGVtIiwiaW5kZXgiLCJSZWFjdCIsIkNvbXBvbmVudCIsIndpbmRvdyIsIlJlYWN0RE9NIiwicmVuZGVyIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztJQUFNQSxHOzs7QUFDTCxjQUFZQyxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0dBQ1pBLEtBRFk7O0FBRWxCLFFBQUtDLEtBQUwsR0FBYTtBQUNaQyxXQUFRLEVBREk7QUFFWkMsWUFBUztBQUZHLEdBQWI7O0FBS0EsUUFBS0MsY0FBTCxHQUFzQixNQUFLQSxjQUFMLENBQW9CQyxJQUFwQixPQUF0QjtBQUNBLFFBQUtDLFVBQUwsR0FBa0IsTUFBS0EsVUFBTCxDQUFnQkQsSUFBaEIsT0FBbEI7QUFDQSxRQUFLRSxhQUFMLEdBQXFCLE1BQUtBLGFBQUwsQ0FBbUJGLElBQW5CLE9BQXJCO0FBQ0EsUUFBS0csYUFBTCxHQUFxQixNQUFLQSxhQUFMLENBQW1CSCxJQUFuQixPQUFyQjtBQUNBLFFBQUtJLFFBQUwsR0FBZ0IsTUFBS0EsUUFBTCxDQUFjSixJQUFkLE9BQWhCO0FBWGtCO0FBWWxCOzs7O2tDQUVlO0FBQ2YsT0FBSUssWUFBWSxLQUFLVCxLQUFMLENBQVdDLE1BQVgsQ0FBa0JTLEtBQWxCLEVBQWhCO0FBQ0EsUUFBS0MsUUFBTCxDQUFjLEVBQUNULFNBQVNPLFNBQVYsRUFBZDtBQUNBOzs7aUNBRWNHLEMsRUFBRztBQUNqQixRQUFLRCxRQUFMLENBQWMsRUFBQ0UsUUFBUUQsRUFBRUUsTUFBRixDQUFTQyxLQUFsQixFQUFkO0FBQ0E7OzsrQkFFWTtBQUFBOztBQUNaLE9BQUlDLFdBQVcsS0FBS2hCLEtBQUwsQ0FBV0MsTUFBWCxDQUFrQmdCLE1BQWxCLENBQXlCO0FBQUEsV0FBU0MsTUFBTUMsS0FBTixDQUFZQyxRQUFaLENBQXFCLE9BQUtwQixLQUFMLENBQVdhLE1BQWhDLENBQVQ7QUFBQSxJQUF6QixDQUFmO0FBQ0EsUUFBS0YsUUFBTCxDQUFjLEVBQUNULFNBQVNjLFFBQVYsRUFBZDtBQUNBSyxXQUFRQyxHQUFSLENBQVksS0FBS3RCLEtBQWpCO0FBQ0E7OztnQ0FFYVksQyxFQUFHO0FBQ2hCLFFBQUtELFFBQUwsQ0FBYyxFQUFDSixlQUFlSyxFQUFFRSxNQUFGLENBQVNDLEtBQXpCLEVBQWQ7QUFDQTs7OzZCQUVVO0FBQ1ZNLFdBQVFDLEdBQVIsQ0FBWSxPQUFaO0FBQ0EsT0FBSWIsWUFBWSxLQUFLVCxLQUFMLENBQVdDLE1BQTNCO0FBQ0EsT0FBSXNCLGdCQUFnQixLQUFLdkIsS0FBTCxDQUFXRSxPQUEvQjtBQUNBcUIsaUJBQWNDLElBQWQsQ0FBbUIsRUFBQ0wsT0FBTyxLQUFLbkIsS0FBTCxDQUFXTyxhQUFuQixFQUFuQjtBQUNBRSxhQUFVZSxJQUFWLENBQWUsRUFBQ0wsT0FBTyxLQUFLbkIsS0FBTCxDQUFXTyxhQUFuQixFQUFmO0FBQ0EsUUFBS0ksUUFBTCxDQUFjLEVBQUNULFNBQVNxQixhQUFWLEVBQXlCdEIsUUFBUVEsU0FBakMsRUFBZDtBQUNBOzs7MkJBR1E7QUFDUjtBQUNBLFVBQ0U7QUFBQTtBQUFBO0FBQ0Msd0JBQUMsU0FBRCxJQUFXLGVBQWUsS0FBS0YsYUFBL0IsRUFBOEMsVUFBVSxLQUFLQyxRQUE3RCxHQUREO0FBRUMsd0JBQUMsTUFBRCxJQUFRLFFBQVEsS0FBS0wsY0FBckIsRUFBcUMsUUFBUSxLQUFLRSxVQUFsRCxHQUZEO0FBRWdFO0FBQUE7QUFBQSxPQUFRLFNBQVMsS0FBS0MsYUFBdEI7QUFBQTtBQUFBLEtBRmhFO0FBR0M7QUFBQTtBQUFBLE9BQUssV0FBVSxZQUFmLEVBQTRCLFFBQVEsS0FBS04sS0FBTCxDQUFXRSxPQUEvQztBQUNFLFVBQUtGLEtBQUwsQ0FBV0UsT0FBWCxDQUFtQnVCLEdBQW5CLENBQXVCLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLGFBQWlCLG9CQUFDLFVBQUQsSUFBWSxLQUFLQSxLQUFqQixFQUF3QixPQUFPRCxJQUEvQixHQUFqQjtBQUFBLE1BQXZCO0FBREY7QUFIRCxJQURGO0FBU0E7Ozs7RUF2RGdCRSxNQUFNQyxTOztBQTBEeEJDLE9BQU9oQyxHQUFQLEdBQWFBLEdBQWI7O0FBRUFpQyxTQUFTQyxNQUFULENBQWdCLG9CQUFDLEdBQUQsT0FBaEIsRUFBd0JDLFNBQVNDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBeEIiLCJmaWxlIjoiQXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcblx0Y29uc3RydWN0b3IocHJvcHMpIHtcblx0XHRzdXBlcihwcm9wcyk7XG5cdFx0dGhpcy5zdGF0ZSA9IHtcblx0XHRcdG1vdmllczogW10sXG5cdFx0XHRjdXJyZW50OiBbXVxuXHRcdH1cblxuXHRcdHRoaXMuZ2V0U2VhcmNoVmFsdWUgPSB0aGlzLmdldFNlYXJjaFZhbHVlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zZWFyY2hEYXRhID0gdGhpcy5zZWFyY2hEYXRhLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zaG93QWxsTW92aWVzID0gdGhpcy5zaG93QWxsTW92aWVzLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5zZXRNb3ZpZVRpdGxlID0gdGhpcy5zZXRNb3ZpZVRpdGxlLmJpbmQodGhpcyk7XG5cdFx0dGhpcy5hZGRNb3ZpZSA9IHRoaXMuYWRkTW92aWUuYmluZCh0aGlzKTtcblx0fVxuXG5cdHNob3dBbGxNb3ZpZXMoKSB7XG5cdFx0dmFyIGFsbE1vdmllcyA9IHRoaXMuc3RhdGUubW92aWVzLnNsaWNlKCk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7Y3VycmVudDogYWxsTW92aWVzfSk7XG5cdH1cblxuXHRnZXRTZWFyY2hWYWx1ZShlKSB7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7c2VhcmNoOiBlLnRhcmdldC52YWx1ZX0pO1xuXHR9XG5cblx0c2VhcmNoRGF0YSgpIHtcblx0XHR2YXIgZmlsdGVyZWQgPSB0aGlzLnN0YXRlLm1vdmllcy5maWx0ZXIobW92aWUgPT4gbW92aWUudGl0bGUuaW5jbHVkZXModGhpcy5zdGF0ZS5zZWFyY2gpKTtcblx0XHR0aGlzLnNldFN0YXRlKHtjdXJyZW50OiBmaWx0ZXJlZH0pO1xuXHRcdGNvbnNvbGUubG9nKHRoaXMuc3RhdGUpXG5cdH1cblxuXHRzZXRNb3ZpZVRpdGxlKGUpIHtcblx0XHR0aGlzLnNldFN0YXRlKHtzZXRNb3ZpZVRpdGxlOiBlLnRhcmdldC52YWx1ZX0pO1xuXHR9XG5cblx0YWRkTW92aWUoKSB7XG5cdFx0Y29uc29sZS5sb2coJ2FkZGVkJyk7XG5cdFx0dmFyIGFsbE1vdmllcyA9IHRoaXMuc3RhdGUubW92aWVzO1xuXHRcdHZhciBjdXJyZW50TW92aWVzID0gdGhpcy5zdGF0ZS5jdXJyZW50O1xuXHRcdGN1cnJlbnRNb3ZpZXMucHVzaCh7dGl0bGU6IHRoaXMuc3RhdGUuc2V0TW92aWVUaXRsZX0pO1xuXHRcdGFsbE1vdmllcy5wdXNoKHt0aXRsZTogdGhpcy5zdGF0ZS5zZXRNb3ZpZVRpdGxlfSk7XG5cdFx0dGhpcy5zZXRTdGF0ZSh7Y3VycmVudDogY3VycmVudE1vdmllcywgbW92aWVzOiBhbGxNb3ZpZXN9KTtcblx0fVxuXG5cblx0cmVuZGVyKCkge1xuXHRcdC8vIHZhciBjdXJyZW50TW92aWVzID0gdGhpcy5zdGF0ZS5maWx0ZXJcblx0XHRyZXR1cm4gKFxuXHRcdFx0XHQ8ZGl2PlxuXHRcdFx0XHRcdDxBZGRNb3ZpZXMgc2V0TW92aWVUaXRsZT17dGhpcy5zZXRNb3ZpZVRpdGxlfSBhZGRNb3ZpZT17dGhpcy5hZGRNb3ZpZX0vPlxuXHRcdFx0XHRcdDxTZWFyY2ggc2VhcmNoPXt0aGlzLmdldFNlYXJjaFZhbHVlfSBzdWJtaXQ9e3RoaXMuc2VhcmNoRGF0YX0vPjxidXR0b24gb25DbGljaz17dGhpcy5zaG93QWxsTW92aWVzfT5TaG93IEFsbDwvYnV0dG9uPlxuXHRcdFx0XHRcdDxkaXYgY2xhc3NOYW1lPVwibW92aWVzTGlzdFwiIG1vdmllcz17dGhpcy5zdGF0ZS5jdXJyZW50fT5cblx0XHRcdFx0XHRcdHt0aGlzLnN0YXRlLmN1cnJlbnQubWFwKChlbGVtLCBpbmRleCkgPT4gPE1vdmllc0xpc3Qga2V5PXtpbmRleH0gbW92aWU9e2VsZW19Lz4pfVxuXHRcdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHQpXG5cdH1cbn1cblxud2luZG93LkFwcCA9IEFwcDtcblxuUmVhY3RET00ucmVuZGVyKDxBcHAvPiwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdmllcycpKTsiXX0=