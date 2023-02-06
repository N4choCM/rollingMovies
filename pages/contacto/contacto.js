function enviarMail() {
	Email.send({
		Host: "smtp.elasticemail.com",
		Username: "marcosvignoli19@gmail.com",
		Password: "9FD35E001756535B69ECF3A0640CE652BD41",
		To: "kito_kitito_kiton@hotmail.com",
		From: "marcosvignoli19@gmail.com",
		Subject: "Gracias por tu sugerencia!",
		Body: "Tu mensaje sera revisado por nuestro equipo para solucionarlo lo mas rápido posible",
	}).then((message) => alert(message));
}
