function showEvent() {
	let http = new XMLHttpRequest();
	http.responseType = "json";

	http.open("GET", "/show-events", true);
	http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
	http.send();

	http.onload = () => {
		if (http.status === 200) {
			updateTable(http.response);
		}
	};
}

function addEvent() {
	let event = document.getElementById("event").value;
	let id = document.getElementById("id").value;
	let time = document.getElementById("time").value;

	if (!(event && id && time)) {
		alert("ERROR: Fields must not be empty!");
	} else {
		let http = new XMLHttpRequest();
		let params = "event=" + event + "&id=" + id + "&time=" + time;

		http.open("POST", "/add-event", true);
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http.send(params);

		http.onload = () => {
			if (http.status === 200) {
				updateTable(http.response);
				alert("Event added successfully!");
			} else if (http.status === 404) {
				alert("ERROR: Staff ID not found!");
			} else {
				alert("ERROR: Failed to add event!");
			}
		};
	}
}

function deleteEvent(id) {
	let event = document.getElementById(id).name;
	if (confirm(`Do you want to delete event '${event}'?`)) {
		let http = new XMLHttpRequest();
		let param = "id=" + id;

		http.responseType = "json";
		http.open("POST", "/delete-event", true);
		http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		http.send(param);
	}
}

function updateTable(data) {
	let table = "";
	for (let i = 0; i < data.length; i++) {
		let { id, event, user, time } = data[i];
		table +=
			"<tr><td>" +
			id +
			"</td><td>" +
			event +
			"</td><td>" +
			user +
			"</td><td>" +
			time +
			"</td><td><button id='" +
			id +
			"' name='" +
			event +
			"' type='submit' onclick=deleteEvent(this.id)>Delete</button></td></tr>";
	}
	document.getElementById("events").innerHTML = table;
}
