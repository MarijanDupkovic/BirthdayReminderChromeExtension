function exportBirthdays() {
  const dataStr = JSON.stringify(birthdays, null, 2);
  const blob = new Blob([dataStr], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'birthdays.json';
  a.click();
  URL.revokeObjectURL(url);
}
