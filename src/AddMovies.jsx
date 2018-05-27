var AddMovies = (props) => {
	return (
		<div id="AddMovies">
			<input onChange={props.setMovieTitle} type="text" placeholder="Add Movie Title..."/>
			<input className="submit" type="button" value="Add Movie" onClick={props.addMovie}/>
		</div>
	)
}