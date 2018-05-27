class Movie extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="text-center" id="movie">{this.props.movie.title}</div>
		)
	}
}