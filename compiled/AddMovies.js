"use strict";

var AddMovies = function AddMovies(props) {
	return React.createElement(
		"div",
		null,
		React.createElement("input", { onChange: props.movieTitle, type: "text", placeholder: "Add Movie Title..." }),
		React.createElement("input", { type: "button", value: "Add Movie", onClick: props.addMovies })
	);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9BZGRNb3ZpZXMuanN4Il0sIm5hbWVzIjpbIkFkZE1vdmllcyIsInByb3BzIiwibW92aWVUaXRsZSIsImFkZE1vdmllcyJdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJQSxZQUFZLFNBQVpBLFNBQVksQ0FBQ0MsS0FBRCxFQUFXO0FBQzFCLFFBQ0M7QUFBQTtBQUFBO0FBQ0MsaUNBQU8sVUFBVUEsTUFBTUMsVUFBdkIsRUFBbUMsTUFBSyxNQUF4QyxFQUErQyxhQUFZLG9CQUEzRCxHQUREO0FBRUMsaUNBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sV0FBM0IsRUFBdUMsU0FBU0QsTUFBTUUsU0FBdEQ7QUFGRCxFQUREO0FBTUEsQ0FQRCIsImZpbGUiOiJBZGRNb3ZpZXMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgQWRkTW92aWVzID0gKHByb3BzKSA9PiB7XG5cdHJldHVybiAoXG5cdFx0PGRpdj5cblx0XHRcdDxpbnB1dCBvbkNoYW5nZT17cHJvcHMubW92aWVUaXRsZX0gdHlwZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIkFkZCBNb3ZpZSBUaXRsZS4uLlwiLz5cblx0XHRcdDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJBZGQgTW92aWVcIiBvbkNsaWNrPXtwcm9wcy5hZGRNb3ZpZXN9Lz5cblx0XHQ8L2Rpdj5cblx0KVxufSJdfQ==