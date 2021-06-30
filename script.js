showNotes();
let title = document.getElementById("title");
let content = document.getElementById("content");
let addNote = document.getElementById('addNote');

addNote.addEventListener('submit',function(event){
    event.preventDefault();

    let n_Obj;
    let n_item = localStorage.getItem("notes");
    if(n_item == null){
        n_Obj = [];
    }
    else{
        n_Obj = JSON.parse(n_item);
    }
    n_Obj.push({title:title.value, content:content.value,color:'#C2F9BB'});
    localStorage.setItem("notes", JSON.stringify(n_Obj));

    location.reload();
    addNote.reset();

})

function showNotes(){

    let n_Obj;
    let n_item = localStorage.getItem("notes");
    if(n_item == null){
        n_Obj = [];
    }
    else{
        n_Obj = JSON.parse(n_item);
    }

    let html = '';
    let notes = document.getElementById('notes');
    let n_Obj1 = n_Obj.reverse();

    n_Obj1.forEach((item, index) => {

        html += `<div class="note" style="background-color: ${item.color};">
                    <h2 class="note-title">${item.title}</h2>
                    <p class="note-content">
                        ${item.content}
                    </p>
                    <button class="option-button" id="menuButton" onclick="menuAction(${index})"><i class="fas fa-align-left"></i></button>
                    <div class="note-menu" id="${index}">
                        <button class="color-option" style="background-color: #C2F9BB;" onclick="setColor('#C2F9BB',${index})"></button>
                        <button class="color-option" style="background-color: #87F5FB;" onclick="setColor('#87F5FB',${index})"></button>
                        <button class="color-option" style="background-color: #FAF0CA;" onclick="setColor('#FAF0CA',${index})"></button>
                        <div class="delete-note">
                            <a href="" class="btn" onclick="deleteitem(${index})"><i class="fa fa-trash" style="color:#d11a2a;"></i></a>
                        </div>
                    </div>
                </div>`;
    });

    notes.innerHTML = html;

}

function deleteitem(index){
    if(confirm('Do you want to Delete')){
        let n_item = localStorage.getItem("notes");
        let n_Obj = JSON.parse(n_item);
        n_Obj.splice(index, 1);
        localStorage.setItem("notes", JSON.stringify(n_Obj));
        showNotes();
    }
}

function menuAction(index){
    
    let i = String(index);
    let x = document.getElementById(i);
    if (x.style.display === "none") {
        x.style.display = "inline-block";
        $("#"+i).siblings("button").html('<i class="fas fa-times"></i>');
      } else {
        x.style.display = "none";
        $("#"+i).siblings("button").html('<i class="fas fa-align-left"></i>');
      }
      let menus = document.getElementsByClassName('note-menu');
      for (let i = 0; i < menus.length; i++) {
          if(menus[i].id != index){
            menus[i].style.display="none";
            $(menus[i]).siblings("button").html('<i class="fas fa-align-left"></i>');
          }
        
    }

}


function setColor(color,index) {

    let n_item = localStorage.getItem("notes");
    let n_Obj = JSON.parse(n_item);
    n_Obj[index].color = color;
    localStorage.setItem("notes", JSON.stringify(n_Obj));
    location.reload();

}