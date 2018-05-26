class Search extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="d-flex justify-content-center">
				<input type="text" onChange={this.props.search} id="searchBar" placeholder="Search..."/>
				<input style={{marginLeft: 10}} onClick={this.props.submit} type="button" value="Submit" id="submit"/>
			</div>
		)
	}
}

window.Search = Search;