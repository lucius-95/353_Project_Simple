function showUsers(role) {
	let http = new XMLHttpRequest();
	http.responseType = "json";

	http.open("POST", "/show-users", true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send(`role=${role}`);

	http.onload = () => {
		if (http.status === 200) {
			let data = http.response;
			let table = "";
			for (let i = 0; i < data.length; i++) {
				let { id, firstname, lastname } = data[i];
				table +=
					"<tr><td>" +
					id +
					"</td><td>" +
					firstname +
					"</td><td>" +
					lastname +
					"</td><td><button id='" +
					id +
					"' name='" +
					firstname +
					" " +
					lastname +
					"' type='submit' onclick=deleteUser(this.id)>Delete</button></td></tr>";
			}
			document.getElementById(`${role}`).innerHTML = table;
		}
	};
}

function deleteUser(id) {
	let name = document.getElementById(id).name;
	if (confirm(`Delete user ${name} whose ID is ${id}?`)) {
		let http = new XMLHttpRequest();
		let param = "id=" + id;

		http.responseType = "json";
		http.open("POST", "/delete-user", true);
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http.send(param);
	}
}
