const movies = JSON.parse(localStorage.getItem("movies")) || [];

const init = () => {
	const db = [];

	db.forEach((film) => {
		let movie = new Movie(
			film.id,
			film.title,
			film.description,
			film.category,
			film.published,
			film.pic
		);

		movies.push(movie);
	});

	localStorage.setItem("movies", JSON.stringify(movies));
};

let container = document.querySelector("#container");
