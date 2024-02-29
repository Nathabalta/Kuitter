

var  firebaseConfig = {
      apiKey: "AIzaSyC3HJJjvLTasbp0hDza8lCxaIk3OWB4B7Q",
      authDomain: "kuitter-40fb4.firebaseapp.com",
      databaseURL: "https://kuitter-40fb4-default-rtdb.firebaseio.com",
      projectId: "kuitter-40fb4",
      storageBucket: "kuitter-40fb4.appspot.com",
      messagingSenderId: "693291313792",
      appId: "1:693291313792:web:cbbf6a6c6e1280b6f09465"
    };
    
    // Initialize Firebase

   firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Inicio del código

      //Final del código
      });});}
getData();

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}