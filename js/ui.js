function listBirthdays() {
  const table = document.getElementById('table');
  table.innerHTML = '';
  table.innerHTML = createTableHeader();
  birthdays.forEach((birthday) => {
    createRows(birthday, table);
  });
}

function createRows(birthday, table) {
  const row = document.createElement('tr');
  row.innerHTML = createRow(birthday.firstName, birthday.name, birthday.birthday, birthday.id);
  table.appendChild(row);
  row.querySelector('.delete-btn').addEventListener('click', function () {
    const id = this.getAttribute('data-id');
    deleteBirthday(id);
  });
}

function addRowOnTable(row) {
  let table = document.getElementById('table');
  table.appendChild(row);
}

function addDeleteListener(row) {
  row.querySelector('.delete-btn').addEventListener('click', function () {
    const id = this.getAttribute('data-id');
    deleteBirthday(id);
  });
}

function resetInputs() {
  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('birthday').value = '';
}

function toggleForm() {
  const form = document.getElementById('create-new__form');
  form.classList.toggle('d-none');
}

function createTableHeader() {
  return `
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Birthday</th>
      </tr>
    `;
}

function createRow(firstName, name, birthday, id) {
  return `
      <td>${firstName}</td>
      <td>${name}</td>
      <td>${birthday}</td>
      <td><button class="delete-btn" data-id="${id}">X</button></td>
    `;
}
