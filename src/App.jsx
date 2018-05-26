var movies = [
  {title: 'Mean Girls'},
  {title: 'Hackers'},
  {title: 'The Grey'},
  {title: 'Sunshine'},
  {title: 'Ex Machina'},
];

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: movies,
			filter: movies
		}

		this.getSearchValue = this.getSearchValue.bind(this);
		this.searchData = this.searchData.bind(this);
		this.showAllMovies = this.showAllMovies.bind(this);
		this.movieTitle = this.movieTitle.bind(this);
	}

	getSearchValue(e) {
		this.setState({search: e.target.value});
		console.log(this.state);
	}

	searchData() {
		var filtered = this.state.movies.filter(movie => movie.title.includes(this.state.search));
		this.setState({filter: filtered});
		console.log(this.state)
	}

	showAllMovies() {
		var allMovies = this.state.movies;
		this.setState({filter: allMovies});
	}

	addMovies() {
		var movieTitle = this.state.movies
		movieTitle.push(this.state.addTitle);
		this.setState({movies: movieTitle});
	}

	movieTitle(e) {
		this.setState({addTitle: e.target.value});
	}

	render() {
		// var currentMovies = this.state.filter
		return (
				<div>
					<AddMovies movieTitle={this.movieTitle} add={this.addMovies}/>
					<Search search={this.getSearchValue} submit={this.searchData}/><button onClick={this.showAllMovies}>Show All</button>
					<div className="moviesList" movies={this.state.movies}>
						{this.state.movies.map((elem) => <MoviesList key={elem.title} movie={elem}/>)}
					</div>
				</div>
		)
	}
}

window.App = App;

ReactDOM.render(<App/>, document.getElementById('movies'));