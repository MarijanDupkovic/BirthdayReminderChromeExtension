function getBirthdays() {
  const storedBirthdays = localStorage.getItem('birthdays');
  if (storedBirthdays) {
    const parsedBirthdays = JSON.parse(storedBirthdays);
    birthdays.push(...parsedBirthdays);
  }
}

function saveBirthdays() {
  localStorage.setItem('birthdays', JSON.stringify(birthdays));
}
