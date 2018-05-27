class Search extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="Search">
				<input type="text" onChange={this.props.search} id="searchBar" placeholder="Search..."/>
				<input onClick={this.props.submit} type="button" value="Search" className="submit"/>
			</div>
		)
	}
}

window.Search = Search;