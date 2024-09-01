const birthdays = [];


document.addEventListener('DOMContentLoaded', function () {
  const addButton = document.getElementById('add');
  if (addButton) {
    addButton.addEventListener('click', addBirthday);
  } else {
    console.error('Element with ID "add" not found.');
  }

  const addNew = document.getElementById('addNew');
  if (addNew) {
    addNew.addEventListener('click', toggleForm);
  } else {
    console.error('Element with ID "addNew" not found.');
  }

  chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));
  initData();
});

function initData() {
  getBirthdays();
  listBirthdays();
}

function getBirthdays() {
  const storedBirthdays = localStorage.getItem('birthdays');
  if (storedBirthdays) {
    const parsedBirthdays = JSON.parse(storedBirthdays);
    birthdays.push(...parsedBirthdays);
  }
}

function listBirthdays() {
  const table = document.getElementById('table');
  table.innerHTML = ''; // Clear existing rows

  birthdays.forEach((birthday) => {
    const row = document.createElement('tr');
    console.log(birthday.id);

    row.innerHTML = `
      <td>${birthday.firstName}</td>
      <td>${birthday.name}</td>
      <td>${birthday.birthday}</td>
      <td><button class="delete-btn" data-id="${birthday.id}">X</button></td>
    `;

    table.appendChild(row);

    // Add event listener to the delete button
    row.querySelector('.delete-btn').addEventListener('click', function () {
      const id = this.getAttribute('data-id');
      deleteBirthday(id);
    });
  });
}


function addBirthday() {
  const firstName = document.getElementById('firstName').value;
  const name = document.getElementById('lastName').value;
  const birthday = document.getElementById('birthday').value;
  const id = birthdays.length;

  birthdays.push({ name: name, firstName, birthday, id: id });

  let table = document.getElementById('table');

  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${firstName}</td>
    <td>${name}</td>
    <td>${birthday}</td>
    <td><button class="delete-btn" data-id="${id}">X</button></td>
  `;

  table.appendChild(row);

  document.getElementById('firstName').value = '';
  document.getElementById('lastName').value = '';
  document.getElementById('birthday').value = '';
  saveBirthdays();

  // Add event listener to the delete button
  row.querySelector('.delete-btn').addEventListener('click', function () {
    const id = this.getAttribute('data-id');
    deleteBirthday(id);
  });
}

function saveBirthdays() {
  localStorage.setItem('birthdays', JSON.stringify(birthdays));
}

function toggleForm() {
  const form = document.getElementById('create-new__form');
  form.classList.toggle('d-none');
}

function deleteBirthday(id) {
  console.log(id);
  const index = birthdays.findIndex(birthday => birthday.id == id);
  if (index !== -1) {
    birthdays.splice(index, 1);
    saveBirthdays();
    listBirthdays();
  }
}
