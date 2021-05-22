var users = [
  {
    name: "Catalina",
    gender: "F",
    hobby: "Perros",
    avatar: "avatar1.jfif",
  },
  {
    name: "Carlos",
    gender: "M",
    hobby: "Gatos",
    avatar: "avatar2.png",
  },
  {
    name: "Jose",
    gender: "M",
    hobby: "Osos",
    avatar: "avatar3.png",
  },
  {
    name: "Antonia",
    gender: "F",
    hobby: "Perros",
    avatar: "avatar4.png",
  },
];

function search() {
  var hobbyField = document.getElementById("hobby");

  console.log(hobbyField.value);

  var genderField = document.getElementById("gender");
  var selected = genderField.selectedIndex;
  var gender = genderField.options[selected].value;
  // console.log(gender)

  var resultsHTML = "";
  var numUsers = users.length;

  for (var i = 0; i < numUsers; i++) {
    if (gender == "A" || gender == users[i].gender) {
      if (hobbyField.value == "" || hobbyField.value == users[i].hobby) {
        resultsHTML +=
          '<div class="person-row">\
         <img src="./img/' +
          users[i].avatar +
          '" />\
         <div class="person-info">\
         <div class="nombres">' +
          users[i].name +
          "</div>\
         <div> " +
          users[i].hobby +
          ' </div>\
         <button class="btnAdd">Agregar a amigos</button></div>';
      }
    }
  }

  results.innerHTML = resultsHTML;
}
var searchBtn = document.getElementById("searchBtn");
var results = document.getElementById("results");
searchBtn.addEventListener("click", search);
