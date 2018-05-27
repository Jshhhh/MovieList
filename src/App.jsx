class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			current: [],
			searchable: true
		}

		this.getSearchValue = this.getSearchValue.bind(this);
		this.searchMovies = this.searchMovies.bind(this);
		this.showAllMovies = this.showAllMovies.bind(this);
		this.setMovieTitle = this.setMovieTitle.bind(this);
		this.addMovie = this.addMovie.bind(this);
	}

	showAllMovies() {
		var allMovies = this.state.movies.slice();
		this.setState({current: allMovies});
	}

	getSearchValue(e) {
		this.setState({search: e.target.value});
	}

	searchMovies() {
		var filtered = this.state.movies.filter(movie => movie.title.includes(this.state.search));
		if (filtered.length === 0) {
			this.setState({searchable: false});
		} else {
			this.setState({searchable: true});
		}
		this.setState((prev) => {

			return {current: prev.current.filter(movie => movie.title.includes(this.state.search))}
		});
		console.log(this.state)
	}

	setMovieTitle(e) {
		this.setState({setMovieTitle: e.target.value, movieInputNode: e.target});
	}

	addMovie() {
		var allMovies = this.state.movies;
		var currentMovies = this.state.current;
		currentMovies.push({title: this.state.setMovieTitle});
		allMovies.push({title: this.state.setMovieTitle});
		this.setState({current: currentMovies, movies: allMovies});
		this.state.movieInputNode.value = '';
	}


	render() {
			var currentMovies = this.state.current.map((elem, index) => <MoviesList key={index} movie={elem}/>);
		return (
			<div>
				<AddMovies setMovieTitle={this.setMovieTitle} addMovie={this.addMovie}/>
				<Search search={this.getSearchValue} submit={this.searchMovies}/><button onClick={this.showAllMovies}>Show All</button>
				<div className="moviesList" movies={this.state.current}>
					{(this.state.searchable) ? currentMovies : <div className="noResults">No movie by that name found</div>}
				</div>
			</div>
		)
	}
}

window.App = App;

ReactDOM.render(<App/>, document.getElementById('movies'));