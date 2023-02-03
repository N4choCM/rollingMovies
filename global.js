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
