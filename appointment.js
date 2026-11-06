// USER REGISTRATION DATA SAVE

document.getElementById("registerForm")?.addEventListener("submit", function(e) {

    e.preventDefault();

    let user = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        doctor: document.getElementById("doctor").value,
        date: document.getElementById("date").value,
        status: "Pending"
    };

    let users = JSON.parse(localStorage.getItem("appointments")) || [];

    users.push(user);

    localStorage.setItem("appointments", JSON.stringify(users));

    alert("Registration Successful!");

    window.location.href = "admin.html";

});


// ADMIN PAGE DATA DISPLAY

let table = document.getElementById("appointmentData");

if (table) {

    let users = JSON.parse(localStorage.getItem("appointments")) || [];

    users.forEach(function(user) {

        let row = table.insertRow();

        row.innerHTML = `
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.phone}</td>
            <td>${user.doctor}</td>
            <td>${user.date}</td>
            <td>
                <button class="status pending" onclick="changeStatus(this)">
                    ${user.status}
                </button>
            </td>
        `;

    });

}


// YOUR STATUS FUNCTION

function changeStatus(button) {

    let status = button.textContent.trim().toLowerCase();

    if (status === "pending") {
        button.textContent = "Confirmed";
        button.className = "status confirmed";
    }
    else if (status === "confirmed") {
        button.textContent = "Cancelled";
        button.className = "status cancelled";
    }
    else if (status === "cancelled") {
        button.textContent = "Pending";
        button.className = "status pending";
    }


}