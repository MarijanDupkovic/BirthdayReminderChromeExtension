const birthdays = [];


document.addEventListener('DOMContentLoaded', function () {
  chrome.sidePanel
    .setPanelBehavior({ openPanelOnActionClick: true })
    .catch((error) => console.error(error));
  initData();
});

async function initData() {
  await getBirthdays();
  listBirthdays();
}

async function getBirthdays() {
  const response = await fetch('./birthdays.json');
  const data = await response.json();
  birthdays.push(...data);
}

function listBirthdays() {
  birthdays.map((birthday) => {
    let table = document.getElementById('table');

    table.innerHTML += `
    <tr>
    <td>${birthday.firstName}</td>
    <td>${birthday.name}</td>
    <td>${birthday.birthday}</td>
    </tr>`;
  });
}
