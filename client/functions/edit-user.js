function editUser(id) {
	if (!id) {
		alert("ERROR: Please enter an ID number!");
	} else if (document.getElementById(id) === null) {
		alert(`ERROR: Could not find any user with ID ${id}!`);
	} else {
		let firstname = document.getElementById("newFirstname").value;
		let lastname = document.getElementById("newLastname").value;
		if (!(firstname && lastname)) {
			alert("ERROR: First name and/or last name must not be empty!");
		} else {
			let http = new XMLHttpRequest();
			let params =
				"id=" + id + "&firstname=" + firstname + "&lastname=" + lastname;

			http.open("POST", "/edit-user", true);
			http.setRequestHeader(
				"Content-type",
				"application/x-www-form-urlencoded"
			);
			http.send(params);

			http.onload = () => {
				if (http.status === 200) {
					alert("Successfully updated user!");
				} else {
					alert("ERROR: Failed to update user!");
				}
			};
		}
	}
}
