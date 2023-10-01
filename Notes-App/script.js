const BtnEl= document.getElementById("btn");

const appEl = document.getElementById("app");


getNotes().forEach((note)=>{
    const savedNote = creatNoteEl(note.id, note.content)
    appEl.insertBefore(savedNote,BtnEl)
})


function creatNoteEl(id,content){
    const newEl = document.createElement("textarea")
    newEl.classList.add("note")
    newEl.placeholder = "Add note here"
    newEl.value = content
    newEl.autofocus= true
    newEl.addEventListener("dblclick",()=>{
        const warning = confirm("do you want to delet this note?")
        if (warning){
            deletNote(id,newEl)
        }
    })
    newEl.addEventListener("input",()=>{
        updateNote(id,newEl.value)
    })
    return newEl
}

function deletNote(id,newEl){
    const notes = getNotes().filter((notes)=>notes.id==id)
    saveNote(notes)
    appEl.removeChild(newEl)

}

function updateNote(id,content){
    const allnotes = getNotes()
    const target = allnotes.filter((allnotes)=>allnotes.id == id)[0];
    target.content=content
    saveNote(allnotes)
}



function creatNote(){
    const notes=getNotes();
    const noteObj = {
        id: Math.round(Math.random()*1000000),
        content: ""
    };
    const noteEl = creatNoteEl(noteObj.id, noteObj.content)

    appEl.insertBefore(noteEl, BtnEl)

    notes.push(noteObj);

    saveNote(notes);
}

function saveNote(notes){
    localStorage.setItem("note-app", JSON.stringify(notes))
}

function getNotes(){
    return JSON.parse(localStorage.getItem("note-app") || "[]");
}

BtnEl.addEventListener("click",creatNote);