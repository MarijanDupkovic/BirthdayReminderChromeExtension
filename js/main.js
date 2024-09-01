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
  determineNextBirthday();
}
