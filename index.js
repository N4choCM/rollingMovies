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

const getMovies = () => {
	container.innerHTML = "";
	movies.forEach((movie) => {
		let column = document.createElement("div");
		column.className = "col";

		let card = `
        <div class="card h-100">
            <div class="container-img">
                <img src = "${movie.pic}" class="card-img-top card-pic" alt="${movie.title}">
            </div>
            <div class="card-body">
                <h5 class="card-title">${movie.title}</h5>
            </div>
        </div>`;

		column.innerHTML = card;

		container.appendChild(column);
	});
};

let banner = document.querySelector("#banner");

const getBanner = () => {
	banner.innerHTML = "";

	let publishedMovie = movies.filter((movie) => {
		return movie.published === true;
	});

	publishedMovie.forEach((item, i) => {
		let column = document.createElement("div");

		column.className = "col";

		let bannerCard = `
        <div class="w-100">
            <img src="${item.pic}" alt="${item.title}">        
        </div>
        `;

		column.innerHTML = bannerCard;

		banner.appendChild(column);
	});
};

getMovies();
