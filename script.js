const form = document.querySelector("form");
const existing = document.getElementById("existing");

form.addEventListener("submit", submitValues);

function submitValues(e){
	e.preventDefault();
	
	const name = document.getElementById("username").value;
	const password = document.getElementById("password").value;
	const checkBox = document.getElementById("checkbox").checked;

	if (checkBox) {
		localStorage.setItem("username", name);
		localStorage.setItem("password", password);
	} else {
		localStorage.clear();
	}

	alert(`Logged in as ${name}`);

	e.target.reset();
}

if (localStorage.getItem("name")) {
	existing.style.display = "block";
	form.style.display = "none";
	existing.addEventListener("click", ()=>{
		alert(`Logged in as ${localStorage.getItem("name")}`);
	})
}









