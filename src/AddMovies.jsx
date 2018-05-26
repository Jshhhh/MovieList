var AddMovies = (props) => {
	return (
		<div>
			<input onChange={props.setMovieTitle} type="text" placeholder="Add Movie Title..."/>
			<input type="button" value="Add Movie" onClick={props.addMovie}/>
		</div>
	)
}