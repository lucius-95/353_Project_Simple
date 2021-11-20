function addUser(role) {
	let firstname = document.getElementById("firstname").value;
	let lastname = document.getElementById("lastname").value;

	if (!(firstname && lastname)) {
		alert("ERROR: First name and/or last name must not be empty!");
	} else {
		let http = new XMLHttpRequest();
		let params =
			"firstname=" + firstname + "&lastname=" + lastname + `&role=${role}`;

		http.open("POST", "/add-user", true);
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http.send(params);

		http.onload = () => {
			if (http.status === 200) {
				alert("Staff added successfully!");
			} else {
				alert("ERROR: Failed to add staff!");
			}
		};
	}
}
