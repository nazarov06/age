let users = [
     {name: "Alex"},
     {name: "Lisa"},
     {name: "Tom"},
     {name: "Diyor"},
     {name: "Akbar"},
     {name: "John"},
     {name: "Azamat"},
     {name: "Aziz"},
     {name: "Bilol"},
     {name: "Begzod"}
 ]

 function userName (){
     for(let i = 0; i < users.length; i++){
         if(users[i].name.length < 5){
             console.log("Bu ism 5 dan kichik");
         }
         else{
             console.log("Bu ism 5 dan katta");
         }
     }
 }
 userName()