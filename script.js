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
    // options.onclick = noteOption;
    note.appendChild(options);

    notes.appendChild(note);

})

