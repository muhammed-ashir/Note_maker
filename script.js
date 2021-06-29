let notes = document.getElementById('notes');
let title = document.getElementById("title");
let content = document.getElementById("content");
let addNote = document.getElementById('addNote');
let count = 0;

addNote.addEventListener('submit',function(event){
    event.preventDefault();
    count++;

    let note = document.createElement('div');
    note.className = 'note';
    note.id = 'note' + count;

    let noteTitle = document.createElement('h2');
    noteTitle.className = 'note-title';
    noteTitle.innerHTML=title.value;
    note.appendChild(noteTitle);

    let noteContent = document.createElement('p');
    noteContent.className = 'note-content';
    noteContent.innerHTML=content.value;
    note.appendChild(noteContent);

    let options = document.createElement('button');
    options.className = 'option-button';
    options.innerHTML = '<i class="fas fa-align-left"></i>';
    options.onclick = noteOption;
    note.appendChild(options);

    notes.appendChild(note);

    // location.reload();
    addNote.reset();

})


function noteOption() {

    // let x = document.getElementById('note-m');
    // let x1 = document.getElementById('b1');
    // if (x.style.display === "none") {
    //     x.style.display = "inline-block";
    //     b1.innerHTML='<i class="fas fa-times"></i>';
    //   } else {
    //     x.style.display = "none";
    //     b1.innerHTML='<i class="fas fa-align-left"></i>';
    //   }

    let menus = document.getElementsByClassName('note-menu');
    for (let i = 0; i < menus.length; i++) {
        menus[i].remove();
    }

    let noteMenu = document.createElement('div'); 
    noteMenu.className = "note-menu";
    
    let colors = [
        '#C2F9BB',
        '#87F5FB',
        '#FAF0CA'
    ];

    colors.forEach(color => {
        let colorOption = document.createElement('button');
        colorOption.className = "color-option";
        colorOption.style.backgroundColor = color;
        colorOption.onclick = setColor;
        noteMenu.appendChild(colorOption);
    });

    let deleteButton = document.createElement('div');
    deleteButton.className = 'delete-note';
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    noteMenu.appendChild(deleteButton);

    this.parentNode.appendChild(noteMenu); 

}

function setColor() {

    let note = this.parentNode.parentNode;
    let newColor = this.style.backgroundColor;
    note.style.backgroundColor = newColor;
}
