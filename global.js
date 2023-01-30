class Movie {
    constructor(
        id,
        title,
        description,
        category,
        published = false,
        pic
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.category = category;
        this.published = published;
        this.pic = pic;
    }
}

// const movies = JSON.parse(localStorage.getItem("movies")) || [];

// const init = () => {
//     const db = [];

//     db.forEach((film) => {
//         let movie = new Movie(
//             film.id,
//             film.title,
//             film.description,
//             film.category,
//             film.published,
//             film.pic
//         );

//         movies.push(movie);
//     });

//     localStorage.setItem("movies", JSON.stringify(movies));

//     let container = document.querySelector("#contenedor");
// }