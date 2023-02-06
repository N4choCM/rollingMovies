const movies = JSON.parse(localStorage.getItem("movies")) || [
	new Movie(
		1,
		"Jungla de cristal",
		"Un grupo terrorista se apodera de un edificio de Los Ángeles y toma a un grupo de personas como rehenes. El policía de Nueva York John McClane consigue escapar del acoso terrorista.",
		"Acción",
		"false",
		"https://images.ecestaticos.com/4A26HwR1KSvrk8C2SzU1XVHGkf0=/79x0:2191x1187/1200x675/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F27e%2F7ae%2Fcbd%2F27e7aecbd12c8b3fef89bcb7b2b8a21f.jpg",
		"https://www.youtube.com/watch?v=GAdvN7KLc2o"
	),
	new Movie(
		2,
		"Terminator 2: El juicio final",
		"Algunos años antes, un viajero del tiempo le reveló a la madre de John que su hijo sería el salvador de la humanidad. Cuando un nuevo androide mejorado llega del futuro para asesinar a John, un viejo modelo será enviado para protegerle.",
		"Acción",
		"false",
		"https://s1.dmcdn.net/v/H6oHK1VhhE-Nzmcmq/x1080",
		"https://www.youtube.com/watch?v=4gn-J7gFywo"
	),
	new Movie(
		3,
		"Kill Bill",
		"El día de su boda, una asesina profesional (Thurman) sufre el ataque de algunos miembros de su propia banda, que obedecen las órdenes de Bill (David Carradine), el jefe de la organización criminal. Logra sobrevivir al ataque, aunque queda en coma. Cuatro años después despierta dominada por un gran deseo de venganza.",
		"Acción",
		"false",
		"https://media.gq.com.mx/photos/5d3606bad36a53000895171e/master/pass/killbill.jpg",
		"https://www.youtube.com/watch?v=7kSuas6mRpk"
	),
	new Movie(
		4,
		"Mad Max: Furia en la carretera",
		"Tras la guerra termonuclear que ha convertido a la Tierra en un páramo, el antiguo policía Max Rockatansky, atormentado por los espíritus de aquellos a los que no pudo proteger, se ha convertido en un hombre con un solo instinto: sobrevivir.",
		"Acción",
		"false",
		"https://images.mubicdn.net/images/film/114803/cache-94944-1658137122/image-w1280.jpg",
		"https://www.youtube.com/watch?v=GvsFoGIuRX4"
	),
	new Movie(
		5,
		"Mentiras arriesgadas",
		"El agente especial Harry Tasker mantiene una doble vida. Harry trabaja como espía internacional para Omega, una agencia gubernamental ultrasecreta encargada de la neutralización del terrorismo nuclear.",
		"Acción",
		"false",
		"https://es.web.img2.acsta.net/r_654_368/medias/nmedia/19/02/87/06/20669557.jpg",
		"https://www.youtube.com/watch?v=-lthuHzwcIs"
	),
	new Movie(
		6,
		"Indiana Jones: En busca del arca perdida",
		"Año 1936. Indiana Jones es un profesor de arqueología, dispuesto a correr peligrosas aventuras con tal de conseguir valiosas reliquias históricas. Después de una infructuosa misión en Sudamérica, el gobierno estadounidense le encarga la búsqueda del Arca de la Alianza, donde se conservan las Tablas de la Ley que Dios entregó a Moisés. Según la leyenda, quien las posea tendrá un poder absoluto, razón por la cual también la buscan los nazis. ",
		"Aventura",
		"false",
		"http://3.bp.blogspot.com/-xJjUhD0JMEU/UVwaRYzEJ7I/AAAAAAAADNY/UCCsdjNO4Uo/s1600/Sin+t%25C3%25ADtulo-1.png",
		"https://www.youtube.com/watch?v=PFhSIQO7fw0"
	),
	new Movie(
		7,
		"Indiana Jones y la última cruzada",
		"En esta tercera entrega, el padre del protagonista (Harrison Ford), Henry Jones, también arqueólogo (Sean Connery), es secuestrado cuando buscaba el Santo Grial. Indiana tendrá que ir a rescatarlo y, de paso, intentar hacerse con la preciada reliquia, que también ambicionan los nazis.",
		"Aventura",
		"false",
		"https://nerdcast.net/wp-content/uploads/2020/04/indiana-jones.jpg",
		"https://www.youtube.com/watch?v=5YbMpOOonJs"
	),
	new Movie(
		8,
		"Piratas del Caribe: La maldición de la Perla Negra",
		"Mar Caribe, siglo XVIII. El aventurero capitán Jack Sparrow piratea en aguas caribeñas, pero su andanzas terminan cuando su enemigo, el Capitán Barbossa, después de robarle su barco, el Perla Negra, ataca la ciudad de Port Royal y secuestra a Elizabeth Swann, la hija del Gobernador. Will Turner, amigo de la infancia de Elizabeth, se une a Jack para rescatarla y recuperar el Perla Negra. Pero Barbossa y su tripulación son víctimas de un conjuro que los condena a vivir eternamente y a transformarse cada noche en esqueletos vivientes. El conjuro sólo puede romperse si devuelven una pieza de oro azteca y saldan una deuda de sangre. El rescate de la bella Elizabeth será una tarea difícil, pues la maldición es real y será difícil enfrentarse con quienes no pueden morir. ",
		"Aventura",
		"false",
		"https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/0A29F30579DF2288D7A68FCBDAB779511B065504E25347CA14FE6855DE94653C/scale?width=1200&aspectRatio=1.78&format=jpeg",
		"https://www.youtube.com/watch?v=5Itr2jHuJaw"
	),
	new Movie(
		9,
		"El señor de los anillos: El retorno del rey",
		"Las fuerzas de Saruman han sido destruidas, y su fortaleza sitiada. Ha llegado el momento de decidir el destino de la Tierra Media, y, por primera vez, parece que hay una pequeña esperanza. El interés del señor oscuro Sauron se centra ahora en Gondor, el último reducto de los hombres, cuyo trono será reclamado por Aragorn. Sauron se dispone a lanzar un ataque decisivo contra Gondor. Mientras tanto, Frodo y Sam continuan su camino hacia Mordor, con la esperanza de llegar al Monte del Destino.",
		"Aventura",
		"false",
		"https://tierragamer.com/wp-content/uploads/2018/12/Elretornodelrey.jpg",
		"https://www.youtube.com/watch?v=h-9RYiqyqjk"
	),
	new Movie(
		10,
		"Gladiator",
		"En el año 180, el Imperio Romano domina todo el mundo conocido. Tras una gran victoria sobre los bárbaros del norte, el anciano emperador Marco Aurelio (Richard Harris) decide transferir el poder a Máximo (Russell Crowe), bravo general de sus ejércitos y hombre de inquebrantable lealtad al imperio. Pero su hijo Cómodo (Joaquin Phoenix), que aspiraba al trono, no lo acepta y trata de asesinar a Máximo.",
		"Aventura",
		"false",
		"https://estaticos-cdn.elperiodico.com/clip/6121618a-dbf2-498e-9719-4aa10615a9b1_alta-libre-aspect-ratio_default_0.jpg",
		"https://www.youtube.com/watch?v=uePBwv_s6gM"
	),
	new Movie(
		11,
		"Luces de la ciudad",
		"Un pobre vagabundo (Charles Chaplin) pasa mil y un avatares para conseguir dinero y ayudar a una florista ciega (Virginia Cherrill) de la que se ha enamorado.",
		"Comedia",
		"false",
		"https://i0.wp.com/www.tiempodecine.co/web/wp-content/uploads/2016/01/citylights.jpg?fit=1944%2C810&ssl=1",
		"https://www.youtube.com/watch?v=8gqD0grErps"
	),
	new Movie(
		12,
		"Fiesta de empresa",
		"A Clay las cosas no le van bien a nivel profesional a pesar de ser gerente de su oficina. Su estirada hermana, Carol Vanstone, CEO de la compañía, amenaza con cerrar su sucursal, así que Clay decide organziar una fiesta navideña épica para intentar conseguir a un nuevo cliente.",
		"Comedia",
		"false",
		"https://fotografias.larazon.es/clipping/cmsimages01/2019/08/08/F141B2E9-CD8C-428A-A394-F2565F482759/69.jpg?crop=945,532,x0,y206&width=1280&height=720&optimize=low&format=webply",
		"https://www.youtube.com/watch?v=vvVm6rSIkx0"
	),
	new Movie(
		13,
		"El lado bueno de las cosas",
		"Después de perder su casa, su trabajo y a su esposa, y de pasar ocho meses en un hospital psiquiátrico, Pat Solatano acaba viviendo con sus padres.",
		"Comedia",
		"false",
		"https://i.blogs.es/f944d6/bradley-cooper-y-jennifer-lawrence-en-silver-linings-playbook-2012-david-o-russell/450_1000.jpg",
		"https://www.youtube.com/watch?v=Ri2mbv7WpH0"
	),
	new Movie(
		14,
		"Torrente, el brazo tonto de la ley",
		"Torrente es un policía español, machista, racista y alcohólico. Este magnífico representante de las fuerzas del orden vive, con su padre hemipléjico, en Madrid. Gracias a su olfato, descubre en su propio barrio una importante red de narcotraficantes.",
		"Comedia",
		"false",
		"https://occ-0-55-37.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTl4QQhvSpdiAS92RmZZ2IBca7BdmjE3ZwSUQYz7yN_NIHJ7ymhS8m3jDa9ivMeh66dUfbrv7xTYZUEue0juwvdE1EVuz3UK1oJd.jpg?r=7c3",
		"https://www.youtube.com/watch?v=ulJSg4GYbBE"
	),
	new Movie(
		15,
		"Torrente, el brazo tonto de la ley",
		"Torrente es un policía español, machista, racista y alcohólico. Este magnífico representante de las fuerzas del orden vive, con su padre hemipléjico, en Madrid. Gracias a su olfato, descubre en su propio barrio una importante red de narcotraficantes.",
		"Comedia",
		"false",
		"https://occ-0-55-37.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABTl4QQhvSpdiAS92RmZZ2IBca7BdmjE3ZwSUQYz7yN_NIHJ7ymhS8m3jDa9ivMeh66dUfbrv7xTYZUEue0juwvdE1EVuz3UK1oJd.jpg?r=7c3",
		"https://www.youtube.com/watch?v=ulJSg4GYbBE"
	),
	new Movie(
		16,
		"Expediente Warren",
		"The Conjuring (también conocida como The Warren Files, titulada Expediente Warren: The Conjuring en España y El conjuro en Hispanoamérica) es una película estadounidense de terror de 2013 dirigida por James Wan y protagonizada por Vera Farmiga y Patrick Wilson en el papel de los parapsicólogos Lorraine y Ed Warren.",
		"Terror",
		"false",
		"https://estaticos-cdn.elperiodico.com/clip/086ad4f2-32ee-40d3-9e1a-8db052fa6a36_alta-libre-aspect-ratio_default_0.jpg",
		"https://www.youtube.com/watch?v=_LeRZFHqYLw"
	),
	new Movie(
		17,
		"La La Land",
		"Mia y Sebastian son dos jóvenes que quieren abrirse camino en el mundo de Hollywood. Mia es una joven aspirante a actriz que trabaja como camarera mientras acude a castings y Sebastian toca el piano en bares. Un día sus caminos se cruzan e inmediatamente se enamoran.",
		"Romántica",
		"false",
		"http://www.sumandohistorias.com/wp-content/uploads/2017/02/la-la-land-1454x817.jpg",
		"https://www.youtube.com/watch?v=0pdqf4P9MB8"
	),
	new Movie(
		18,
		"Buscando a nemo",
		"Nemo, un pequeño pececillo, muy querido y protegido por su padre, se pierde fuera de la gran barrera del arrecife australiano, después de ser capturado por este arrecife, Nemo terminará en una pecera en Sidney. Su padre, un pez payaso, parte en su búsqueda y se embarca en una peligrosa aventura con Dory, un pez con muy poca memoria. Al mismo tiempo, Nemo y sus nuevos amigos ya traman un plan para escapar de la pecera.",
		"Infantil",
		"false",
		"https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/06/608086-buscando-nemo-critica-pelicula-pixar-2003.jpg?itok=MKW9u9VK",
		"https://www.youtube.com/watch?v=ba4TwyaNhSQ"
	),
];

// const init = () => {
// 	const db = [];

// 	db.forEach((film) => {
// 		let movie = new Movie(
// 			film.id,
// 			film.title,
// 			film.description,
// 			film.category,
// 			film.published,
// 			film.pic,
// 			film.trailer
// 		);

// 		movies.push(movie);
// 	});

// 	localStorage.setItem("movies", JSON.stringify(movies));
// };

let banner = document.querySelector("#banner");

const getBanner = () => {
	banner.innerHTML = "";

	let publishedMovie = movies.filter((movie) => {
		return movie.published === "true";
	});

	publishedMovie.forEach((item, i) => {
		let column = document.createElement("div");

		let bannerCard = `
		<a class="pointer" href="/pages/error/error.html"><div id="carousel" class="carousel slide">
  			<div class="carousel-inner">
  				<div class="carousel-item active">
  					<img id="img-banner" src="${item.pic}" alt="${item.title}">
  				</div>
  			</div>
			  <div class="overlay">
			  <div class="container h-100">
				<div class="row h-100 align-items-center">
				  <div class="col-12 col-md-8 col-lg-6 text-md-start text-center">
					<h1 class="d-none d-md-block">${item.title}</h1>
					<h5 class="d-none d-md-block">${item.description}</h5>
				  </div>
				</div>
			  </div>
			</div>
		</div></a>
        `;

		column.innerHTML = bannerCard;

		banner.appendChild(column);
	});
};

let action = document.querySelector("#actionMovies");

const getActionMovies = () => {
	action.innerHTML = "";

	let actionMovies = movies.filter((movie) => {
		return movie.category === "Acción";
	});

	actionMovies.forEach((item, i) => {
		let column = document.createElement("div");
		let actionCarousel = `
		<div class="carousel-item active">
		<a href="/pages/error/error.html"><img class="img-carousel" src="${item.pic}" class="d-block w-100" alt="${item.title}"></a>
	  </div>
		`;

		column.innerHTML = actionCarousel;

		action.appendChild(column);
	});
};

let comedy = document.querySelector("#comedyMovies");

const getComedyMovies = () => {
	comedy.innerHTML = "";

	let comedyMovies = movies.filter((movie) => {
		return movie.category === "Comedia";
	});

	comedyMovies.forEach((item, i) => {
		let column = document.createElement("div");
		let comedyCarousel = `
		<div class="carousel-item active">
		<a href="/pages/error/error.html"><img class="img-carousel" src="${item.pic}" class="d-block w-100" alt="${item.title}"></a>
	  </div>
		`;

		column.innerHTML = comedyCarousel;

		comedy.appendChild(column);
	});
};

let adventure = document.querySelector("#adventureMovies");

const getAdventureMovies = () => {
	adventure.innerHTML = "";

	let adventureMovies = movies.filter((movie) => {
		return movie.category === "Aventura";
	});

	adventureMovies.forEach((item, i) => {
		let column = document.createElement("div");
		let adventureCarousel = `
		<div class="carousel-item active">
		<a href="/pages/error/error.html"><img class="img-carousel" src="${item.pic}" class="d-block w-100" alt="${item.title}"></a>
	  </div>
		`;

		column.innerHTML = adventureCarousel;

		adventure.appendChild(column);
	});
};

let terror = document.querySelector("#terrorMovies");

const getTerrorMovies = () => {
	terror.innerHTML = "";

	let terrorMovies = movies.filter((movie) => {
		return movie.category === "Terror";
	});

	terrorMovies.forEach((item, i) => {
		let column = document.createElement("div");
		let terrorCarousel = `
		<div class="carousel-item active">
		<a href="/pages/error/error.html"><img class="img-carousel" src="${item.pic}" class="d-block w-100" alt="${item.title}"></a>
	  </div>
		`;

		column.innerHTML = terrorCarousel;

		terror.appendChild(column);
	});
};

let romantic = document.querySelector("#romanticMovies");

const getRomanticMovies = () => {
	romantic.innerHTML = "";

	let romanticMovies = movies.filter((movie) => {
		return movie.category === "Romántica";
	});

	romanticMovies.forEach((item, i) => {
		let column = document.createElement("div");
		let romanticCarousel = `
		<div class="carousel-item active">
		<a href="/pages/error/error.html"><img class="img-carousel" src="${item.pic}" class="d-block w-100" alt="${item.title}"></a>
	  </div>
		`;

		column.innerHTML = romanticCarousel;

		romantic.appendChild(column);
	});
};

let kids = document.querySelector("#kidsMovies");

const getKidsMovies = () => {
	kids.innerHTML = "";

	let kidsMovies = movies.filter((movie) => {
		return movie.category === "Infantil";
	});

	kidsMovies.forEach((item, i) => {
		let column = document.createElement("div");
		let kidsCarousel = `
		<div class="carousel-item active">
		<a href="/pages/error/error.html"><img class="img-carousel" src="${item.pic}" class="d-block w-100" alt="${item.title}"></a>
	  </div>
		`;

		column.innerHTML = kidsCarousel;

		kids.appendChild(column);
	});
};

// init();
getBanner();
getActionMovies();
getComedyMovies();
getAdventureMovies();
getTerrorMovies();
getRomanticMovies();
getKidsMovies();
