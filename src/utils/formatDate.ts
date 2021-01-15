function formatDate(date: Date = new Date()): string {
  const d = new Date(date);
  const year = d.getFullYear();
  let month = String(d.getMonth() + 1);
  let day = String(d.getDate());

  if (month.length < 2) {
    month = `0${month}`;
  }

  if (day.length < 2) {
    day = `0${day}`;
  }

  return [year, month, day].join('-');
}

export default formatDate;
