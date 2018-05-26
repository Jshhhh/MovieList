class MoviesList extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="text-center " id="movie">{this.props.movie.title}</div>
		)
	}
}

window.MoviesList = MoviesList;