class Movie {
	constructor(id, title, description, category, published = false, pic) {
		this.id = id;
		this.title = title;
		this.description = description;
		this.category = category;
		this.published = published;
		this.pic = pic;
	}
}

// Testing if this works
const movies = JSON.parse(localStorage.getItem("movies")) || [];

let container = document.querySelector("#container");

const getMovies = () => {
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

const isPublished = (i) => {
	movies.published = false;
	movies[i].published = true;
	localStorage.setItem("movies", JSON.stringify(movies));

	getMovies();
};
