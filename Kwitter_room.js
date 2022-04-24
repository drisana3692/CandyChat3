var firebaseConfig = {

    apiKey: "AIzaSyB_9kD6smjtlBPX4CyTTtHTIy4LrvBGIh0",
  
    authDomain: "my-awesome-project-d29ed.firebaseapp.com",
  
    databaseURL: "https://my-awesome-project-d29ed-default-rtdb.firebaseio.com",
  
    projectId: "my-awesome-project-d29ed",
  
    storageBucket: "my-awesome-project-d29ed.appspot.com",
  
    messagingSenderId: "638375718561",
  
    appId: "1:638375718561:web:7145d885cdd4977dee0ae0"
  
  };
  
  
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);


  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome, " + user_name + "!";
getData();

function addRoom() {
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
      purpose: "adding room name"
});
localStorage.setItem("room_name", room_name);
window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
row = "<div class = 'room_name' id = "+Room_names+"onclick = 'redirectToRoomname(this.id)' >#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;
//End code
});});}
getData(); 
function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}