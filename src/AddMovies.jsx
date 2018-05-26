var AddMovies = (props) => {
	return (
		<div>
			<input onChange={props.movieTitle} type="text" placeholder="Add Movie Title..."/>
			<input type="button" value="Add Movie" onClick={props.addMovies}/>
		</div>
	)
}