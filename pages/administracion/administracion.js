let main = document.querySelector("#mainAdmin");
let tableContainer = document.querySelector("#table-container");
let tableBody = document.querySelector("#table-body");

const modalUpdate = new bootstrap.Modal(
	document.getElementById("movieModalUpdate")
);
const modalCreate = new bootstrap.Modal(
	document.getElementById("movieModalCreate")
);

let db = JSON.parse(localStorage.getItem("movies")) || [];
let indexUpdate = null;

const printTable = () => {
	tableBody.innerHTML = "";
	db.forEach((movie, i) => {
		let tr = document.createElement("tr");
		let htmlContent = `
        <tr>
            <td>${movie.id}</td>
            <td>${movie.title}</td>
            <td>${movie.description}</td>
            <td>${movie.category}</td>
            <td>${movie.published}</td>
            <td>
                <div class="d-flex gap-2 text-center justify-content-center">
                    <i id="orange" class="bi bi-pencil-fill pointer" onclick="openModalUpdate(${movie.id})"></i>
                    <i class="bi bi-x-circle-fill pointer text-danger" onclick="deleteMovie(${i})"></i>
					<i class="bi bi-star-fill pointer"onclick=""></i>
                </div>
            </td>
        </tr>
              `;

		tr.innerHTML = htmlContent;

		tableBody.append(tr);
	});
};

// CREATE A MOVIE
const createMovie = (event) => {
	event.preventDefault();

	let id = new Date().getMilliseconds();
	let title = document.querySelector("#title").value;
	let description = document.querySelector("#description").value;
	let category = document.querySelector("#category").value;
	let published = document.querySelector("#published").value;
	let pic = document.querySelector("#pic").value;

	let movie = new Movie(id, title, description, category, published, pic);

	db.push(movie);

	localStorage.setItem("movies", JSON.stringify(db));

	//   document.querySelector("#id").value = '';
	document.querySelector("#title").value = "";
	document.querySelector("#description").value = "";
	document.querySelector("#category").value = "";
	document.querySelector("#published").value = "";
	document.querySelector("#pic").value = "";

	printTable();

	modalCreate.hide();
};

const deleteMovie = (i) => {
	let newDb = db.filter((movie) => {
		return movie.id != db[i].id;
	});

	let confirmation = confirm(
		`¿Está seguro de que desea eliminar la película/serie ${db[i].title}?`
	);

	if (confirmation) {
		db = [...newDb];
		localStorage.setItem("movies", JSON.stringify(db));
		printTable();
	}
};

const openModalCreate = () => {
	modalCreate.show();
};

const openModalUpdate = (id) => {
	indexUpdate = db.findIndex((item) => {
		return item.id == id;
	});
	// TODO: CHECKEAR TEMA FOTO MOSTRAR/NO MOSTRAR
	document.querySelector("#modalTitle").value = db[indexUpdate].title;
	document.querySelector("#modalDescription").value =
		db[indexUpdate].description;
	document.querySelector("#modalCategory").value = db[indexUpdate].category;
	document.querySelector("#modalPublished").value = db[indexUpdate].published;
	document.querySelector("#modalPic").value = db[indexUpdate].pic;

	modalUpdate.show();
};

const updateMovie = (event) => {
	event.preventDefault();

	db[indexUpdate].title = document.querySelector("#modalTitle").value;
	db[indexUpdate].description =
		document.querySelector("#modalDescription").value;
	db[indexUpdate].category = document.querySelector("#modalCategory").value;
	db[indexUpdate].published = document.querySelector("#modalPublished").value;
	db[indexUpdate].pic = document.querySelector("#modalPic").value;

	localStorage.setItem("movies", JSON.stringify(db));

	printTable();
	modalUpdate.hide();
};

printTable();
