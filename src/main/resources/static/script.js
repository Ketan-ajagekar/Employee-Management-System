const api = "http://localhost:8080/employees";

function addEmployee() {
    const emp = {
        name: document.getElementById("name").value,
        salary: document.getElementById("salary").value
    };

    fetch(api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(emp)
    })
    .then(() => loadEmployees());
}

function loadEmployees() {
    fetch(api)
    .then(res => res.json())
    .then(data => {
        let list = document.getElementById("list");
        list.innerHTML = "";
        data.forEach(e => {
            list.innerHTML += `
                <li class="list-group-item d-flex justify-content-between">
                    ${e.name} - ₹${e.salary}
                    <button class="btn btn-danger btn-sm"
                        onclick="deleteEmployee(${e.id})">
                        Delete
                    </button>
                </li>`;
        });
    });
}

function deleteEmployee(id) {
    fetch(api + "/" + id, { method: "DELETE" })
    .then(() => loadEmployees());
}

loadEmployees();
