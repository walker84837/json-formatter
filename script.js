function formatJSON(jsonData) {
    return JSON.stringify(jsonData, null, 2);
}
var formatButton = document.getElementById("formatButton");
formatButton.addEventListener("click", function () {
    var jsonInput = document.getElementById("jsonInput").value;
    try {
        var parsedJSON = JSON.parse(jsonInput);
        var formattedJSON = formatJSON(parsedJSON);
        document.getElementById("formattedJSON").textContent = formattedJSON;
    }
    catch (error) {
        document.getElementById("formattedJSON").textContent = "Invalid JSON!";
    }
});
