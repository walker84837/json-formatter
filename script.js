function format_json(json_data)
{
	return JSON.stringify(json_data, null, 2);
}

let format_button = document.getElementById("formatButton");
format_button.addEventListener("click", function () {
	let json_input = document.getElementById("jsonInput").value;
	try {
		let parsed_json = JSON.parse(json_input);
		let formatted_json = format_json(parsed_json);
		document.getElementById("formattedJSON").textContent = formatted_json;
	} catch (error) {
		document.getElementById("formattedJSON").textContent = `Invalid JSON: {error}`;
	}
});