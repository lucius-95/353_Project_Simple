function editUser(id) {
	if (document.getElementById(id) === null) {
		alert(`ERROR: Could not find any user with ID ${id}!`);
	} else {
		let http = new XMLHttpRequest();
		let firstname = document.getElementById("newFirstname").value;
		let lastname = document.getElementById("newLastname").value;
		let params =
			"id=" + id + "&firstname=" + firstname + "&lastname=" + lastname;

		http.open("POST", "/edit-user", true);
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http.send(params);

		http.onload = () => {
			if (http.status === 200) {
				alert("User edited successfully!");
			} else {
				alert("ERROR: Failed to edit user!");
			}
		};
	}
}
