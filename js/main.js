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

  const exportButton = document.getElementById('export');
  if (exportButton) {
    exportButton.addEventListener('click', exportBirthdays);
  } else {
    console.error('Element with ID "export" not found.');
  }

  const importFile = document.getElementById('importFile');
  if (importFile) {
    importFile.addEventListener('change', importBirthdaysFromJson);
  } else {
    console.error('Element with ID "importFile" not found.');
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
