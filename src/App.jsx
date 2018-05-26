class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			movies: [],
			current: []
		}

		this.getSearchValue = this.getSearchValue.bind(this);
		this.searchData = this.searchData.bind(this);
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

	searchData() {
		var filtered = this.state.movies.filter(movie => movie.title.includes(this.state.search));
		this.setState({current: filtered});
		console.log(this.state)
	}

	setMovieTitle(e) {
		this.setState({setMovieTitle: e.target.value});
	}

	addMovie() {
		console.log('added');
		var allMovies = this.state.movies;
		var currentMovies = this.state.current;
		currentMovies.push({title: this.state.setMovieTitle});
		allMovies.push({title: this.state.setMovieTitle});
		this.setState({current: currentMovies, movies: allMovies});
	}


	render() {
		// var currentMovies = this.state.filter
		return (
				<div>
					<AddMovies setMovieTitle={this.setMovieTitle} addMovie={this.addMovie}/>
					<Search search={this.getSearchValue} submit={this.searchData}/><button onClick={this.showAllMovies}>Show All</button>
					<div className="moviesList" movies={this.state.current}>
						{this.state.current.map((elem, index) => <MoviesList key={index} movie={elem}/>)}
					</div>
				</div>
		)
	}
}

window.App = App;

ReactDOM.render(<App/>, document.getElementById('movies'));