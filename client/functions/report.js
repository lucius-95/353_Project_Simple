function showDonations() {
	let http = new XMLHttpRequest();
	http.responseType = "json";

	http.open("GET", "/show-donation", true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send();

	http.onload = () => {
		if (http.status === 200) {
			getBal();
			updateTable(http.response);
		}
	};
}

function addDonations() {
	let amount = document.getElementById("amount").value;
	let id = document.getElementById("id").value;

	if (!(amount && id) || amount <= 0) {
		if (amount <= 0) {
			alert("ERROR: Invalid Donation");
		} else {
			alert("ERROR: Fields must not be empty!");
		}
	} else {
		let http = new XMLHttpRequest();
		let params = "amount=" + amount + "&id=" + id;

		http.open("POST", "/add-donation", true);
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http.send(params);

		http.onload = () => {
			if (http.status === 200) {
				getBal();
				updateTable(http.response);
				alert("Donation added successfully!");
			} else if (http.status === 404) {
				alert("ERROR: ID not found!");
			} else {
				alert("ERROR: Failed to add event!");
			}
		};
	}
}

function deleteDonations(id) {
	let user = document.getElementById(id).name;
	if (confirm(`Do you want to delete the donation from '${user}'?`)) {
		let http = new XMLHttpRequest();
		let param = "id=" + id;

		http.responseType = "json";
		http.open("POST", "/delete-donation", true);
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http.send(param);
	}
}

function getBal() {
	let http = new XMLHttpRequest();

	http.open("GET", "/get-bal", true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send();

	http.onload = () => {
		if (http.status === 200) {
			let data = JSON.parse(http.response);
			let bal = 0;
			for (let i = 0; i < data.length; i++) {
				bal = bal + data[i].amount;
			}
			document.getElementById("balance").innerHTML = `$ ${bal}`;
		} else {
			document.getElementById("balance").innerHTML =
				"Cannot Connect to Database";
		}
	};
}

function updateTable(data) {
	let table = "";
	for (let i = 0; i < data.length; i++) {
		let { id, amount, user, timestamp } = data[i];
		table +=
			"<tr><td>" +
			id +
			"</td><td>" +
			amount +
			"</td><td>" +
			user +
			"</td><td>" +
			timestamp +
			"</td><td><button id='" +
			id +
			"' name='" +
			user +
			"' type='submit' onclick=deleteDonations(this.id)>Delete</button></td></tr>";
	}
	document.getElementById("donations").innerHTML = table;
}
