document.addEventListener("DOMContentLoaded", () => {
  const appointments = JSON.parse(localStorage.getItem("userAppointments")) || [];
  const tableBody = document.querySelector("#appointmentList tbody");

  if (tableBody) {
    if (appointments.length === 0) {
      tableBody.innerHTML = "<tr><td colspan='6'>Don't have any appointment </td></tr>";
      return;
    }

    tableBody.innerHTML = "";
    appointments.forEach((appt, index) => {
      const row = `<tr>
        <td>${index + 1}</td>
        <td>${appt.patient}</td>
        <td>${appt.doctor}</td>
        <td>${appt.date}</td>
        <td>${appt.time}</td>
        <td>Pending</td>
      </tr>`;
      tableBody.innerHTML += row;
    });
  }
});