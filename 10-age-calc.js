function dob(date, month, year) {
  const current_time = new Date();
  const current_year = current_time.getFullYear();
  const current_month = current_time.getMonth() + 1;
  const current_date = current_time.getDate();
  let age = current_year - year;

  if (
    current_month < month ||
    (current_month === month && current_date < date)
  ) {
    age = age - 1;
  }
  return age;
}
console.log(dob(30, 4, 1997));
