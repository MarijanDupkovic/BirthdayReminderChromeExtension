// js/import.js
function importBirthdaysFromJson(event) {
  const file = event.target.files[0];
  if (!file) {
    console.error('No file selected.');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const json = e.target.result;
      const importedBirthdays = JSON.parse(json);
      importedBirthdays.forEach(birthday => {
        const { firstName, name, birthday: date } = birthday;
        addBirthdayFromImport(firstName, name, date);
      });
      saveBirthdays();
      listBirthdays();
      determineNextBirthday();
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }
  };
  reader.readAsText(file);
}

function addBirthdayFromImport(firstName, name, birthday) {
  const id = birthdays.length;
  const newBirthday = { name, firstName, birthday, id };
  birthdays.push(newBirthday);
  const row = document.createElement('tr');
  row.innerHTML = createRow(firstName, name, birthday, id);
  addRowOnTable(row);
  addDeleteListener(row);
}
