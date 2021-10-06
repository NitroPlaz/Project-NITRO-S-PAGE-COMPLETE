const firebaseConfig = {
    apiKey: "AIzaSyABOo37a53WpF8jRRgCsr5Bsh2lOVhICbk",
    authDomain: "kwitter-6ac43.firebaseapp.com",
    databaseURL: "https://kwitter-6ac43-default-rtdb.firebaseio.com",
    projectId: "kwitter-6ac43",
    storageBucket: "kwitter-6ac43.appspot.com",
    messagingSenderId: "97581094312",
    appId: "1:97581094312:web:fc9e9a6cf44bc2339ff99d",
    measurementId: "G-J8QFXZ3MM3"
  };
  
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  document.getElementById("user_name").innerHTML = "welcome " + user_name + "!"

  function addRoom() {
        room_name = document.getElementById("room_name").value;

        firebase.database().ref("/").child(room_name).update({
              purpose : "adding room name"
        });

        localStorage.setItem("room_name", room_name);

        window.location = "kwitter_page.html";
  }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;
    console.log("Room Name - " + Room_names);
    row = "<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
    document.getElementById("output").innerHTML += row;
    });});}
getData();

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location = "kwitter.html"
}