function addStudent() {
    const name = document.getElementById("name").value.trim();
    const roll = document.getElementById("roll").value.trim();
    const marks = document.getElementById("marks").value;

    if (!name || !roll || !marks) {
        alert("Please fill all fields");
        return;
    }

    let result = marks >= 40 ? "Pass" : "Fail";

    const tableBody = document.getElementById("tableBody");
    const row = document.createElement("tr");

    row.innerHTML = `
        <td>${name}</td>
        <td>${roll}</td>
        <td>${marks}</td>
        <td>${result}</td>
    `;

    tableBody.appendChild(row);

    document.getElementById("name").value = "";
    document.getElementById("roll").value = "";
    document.getElementById("marks").value = "";
}
