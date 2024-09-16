calculateTime = () => {
  // Cream un obiect date
  var date = new Date();

  // Accesam numarul zilei si stocam valoarea in variabila
  var dayNumber = date.getDay();

  // Accesam ora si stocam in variabila
  var hour = date.getHours();

  // Accesam minutele si stocam in variabila
  var minute = date.getMinutes();

  // Setam ora la formatul am/pm
  var ampm = hour >= 12 ? "PM" : "AM";

  // Cream un array cu zilele saptamainii care sa le putem accesa ulterior prin numarul zilei curente
  var dayNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

  // Avem nevoie să afişăm ora în format AM/PM, deci avem nevoie de un range de 12 ore. Folosim modulo (%)
  // Respectiv dacă e ora 17, hour va fi egal cu 5 (restul împărţirii 17 la 12)
  hour = hour % 12;
  // Pentru cazurile de miazăzi şi miazănoapte, modulo va fi 0, deaceea trebuie să acoperim şi acest scenariu
  // Dacă e orice oră în afară de 00 şi 12, vom afişa ora dată - deja prin setarea anterioară de modulo
  // Dacă însă e 00 sau 12 - o să afişăm 12
  hour = hour ? hour : "12";
  // De asemenea, dorim să afişăm ora mereu prin 2 cifre, respectiv trebuie să acoperim scenariul când ora e 1, 2, 3 - pănâ la 10
  // şi să afişăm un zero în faţă. În caz contrar (ora 10 / 11 / 12) - afişăm însăşi ora
  hour = hour < 10 ? "0" + hour : hour;
  // Acelaşi lucru îl aplicăm pentru minute
  minute = minute < 10 ? "0" + minute : minute;

  // Targhetam elementele necesare din pagina
  // Ziua saptamanii
  document.querySelector("#day").textContent = dayNames[dayNumber];
  // Ora
  document.querySelector("#hour").textContent = hour;
  // Minutele
  document.querySelector("#minute").textContent = minute;
  // am/pm
  document.querySelector("#ampm").textContent = ampm;

  //------------------------------------- Part 2
  // Accesam data curenta a lunii, stocam in variabila
  var dateToday = date.getDate();

  // Creeam un array cu lunile anului pt a le accesa ulterior
  var monthNames = [
    "JAN",
    "FEB",
    "MARCH",
    "APR",
    "MAY",
    "JUN",
    "JUL",
    "AUG",
    "SEP",
    "OCT",
    "NOV",
    "DEC",
  ];

  // Accesam luna curenta a anului
  var month = date.getMonth();

  // Accesam anul curent si stocam in variabila
  var year = date.getFullYear();

  // Targetam elementele necesare din pagina
  // Data
  document.querySelector("#date").textContent = dateToday;

  // Month
  document.querySelector("#month").textContent = monthNames[month];

  // Year
  document.querySelector("#year").textContent = year;

  // Element necesar - ne permite să actualizăm toate datele
  setTimeout(calculateTime, 200);
};
window.addEventListener("load", calculateTime);
