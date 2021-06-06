const dayFormatter = (date) => {
  const day = date.substring(0, 3);

  switch (day) {
    case "Mon":
      return "Monday";
    case "Tue":
      return "Tuesday;";
    case "Wed":
      return "Wednesday";
    case "Thu":
      return "Thursday";
    case "Fri":
      return "Friday";
    case "Sat":
      return "Saturday";
    case "Sun":
      return "Sunday";
  }
  return day;
};

export default dayFormatter;
