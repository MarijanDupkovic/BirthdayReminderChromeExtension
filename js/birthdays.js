const birthdays = [];

function addBirthday() {
  const firstName = document.getElementById('firstName').value;
  const name = document.getElementById('lastName').value;
  const birthday = document.getElementById('birthday').value;
  const id = birthdays.length;
  const newBirthday = { name: name, firstName, birthday, id: id };
  birthdays.push(newBirthday);
  const row = document.createElement('tr');
  row.innerHTML = createRow(firstName, name, birthday, id);
  addRowOnTable(row);
  addDeleteListener(row);
  resetInputs();
  saveBirthdays();
  determineNextBirthday();
}

function deleteBirthday(id) {
  console.log(id);
  const index = birthdays.findIndex(birthday => birthday.id == id);
  if (index !== -1) {
    birthdays.splice(index, 1);
    saveBirthdays();
    listBirthdays();
  }
  determineNextBirthday();
}

function determineNextBirthday() {
  const today = new Date();
  let nextBirthday = new Date(today.getFullYear() + 1, 0, 1); // Setze auf 1. Januar des nächsten Jahres

  birthdays.forEach(birthday => {
    const birthdate = new Date(birthday.birthday);
    let nextBirthdate = new Date(today.getFullYear(), birthdate.getMonth(), birthdate.getDate());

    if (nextBirthdate < today) {
      nextBirthdate.setFullYear(today.getFullYear() + 1);
    }

    if (nextBirthdate < nextBirthday) {
      nextBirthday = nextBirthdate;
      document.getElementById('nextBirthday').innerHTML = birthday.firstName + ' ' + birthday.name + ' ' + nextBirthdate.toDateString();
    }
  });
}
