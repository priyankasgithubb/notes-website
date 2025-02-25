const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".note-btn");

window.addEventListener("load", () => {
    let savedNotes = JSON.parse(localStorage.getItem("notes")) || [];
    savedNotes.forEach(noteText => createNote(noteText));
});

function createNote(text = "") {
    let noteDiv = document.createElement("div");
    noteDiv.className = "note";

    let inputBox = document.createElement("textarea");
    inputBox.className = "input-box";
    inputBox.placeholder = "Type your note...";
    inputBox.value = text;

    let saveBtn = document.createElement("button");
    saveBtn.className = "save-btn";
    saveBtn.innerText = "Save";

    let deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.innerText = "Delete";

    noteDiv.appendChild(inputBox);
    noteDiv.appendChild(saveBtn);
    noteDiv.appendChild(deleteBtn);
    notesContainer.appendChild(noteDiv);

    saveBtn.addEventListener("click", () => {
        saveNotes();
        alert("Note saved!");
    });


    deleteBtn.addEventListener("click", () => {
        noteDiv.remove();
        saveNotes(); 
    });

    inputBox.addEventListener("input", saveNotes); 
}

function saveNotes() {
    let notes = Array.from(document.querySelectorAll(".input-box")).map(note => note.value);
    localStorage.setItem("notes", JSON.stringify(notes));
}
createBtn.addEventListener("click", () => createNote());



