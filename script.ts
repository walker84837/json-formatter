function formatJSON(jsonData: any): string {
  return JSON.stringify(jsonData, null, 2);
}

const formatButton = document.getElementById("formatButton") as HTMLButtonElement;
formatButton.addEventListener("click", function () {
  const jsonInput = (document.getElementById("jsonInput") as HTMLTextAreaElement).value;

  try {
    const parsedJSON = JSON.parse(jsonInput);
    const formattedJSON = formatJSON(parsedJSON);
    (document.getElementById("formattedJSON") as HTMLPreElement).textContent = formattedJSON;
  } catch (error) {
    (document.getElementById("formattedJSON") as HTMLPreElement).textContent = "Invalid JSON!";
  }
});
