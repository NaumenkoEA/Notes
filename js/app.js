const inputElement = document.getElementById("input1");
const btnAdd = document.getElementById("btnAddNotes");
const listNotes = document.getElementById("notes");

const inputNotes = [{
    title: '', completed: false,
}]


function renderNotes() {
    listNotes.innerHTML = "";

    for (let i = 0; i < inputNotes.length; i++) {
        listNotes.insertAdjacentHTML('beforeend', getTemplateNotes(inputNotes[i], i));
    }
}

btnAdd.onclick = function () {
    if (inputElement.value.length === 0) {
        return undefined;
    }
    const newNote = {
        title: inputElement.value, completed: false,
    }

    inputNotes.push(newNote);
    renderNotes();

    inputElement.value = "";
}


renderNotes();

function getTemplateNotes(note, index) {
    return `<li >
      <span class="note-title ${note.completed ? 'completed' : ''}">${note.title}</span>
        <div class="note-actions">
            <button class="btn-toggle ${note.completed ? 'btn-warning' : 'btn-success'}" 
            data-index="${index}" 
            data-type="toggle">&check;</button>
    <button class="btn-remove" 
            data-index="${index}" 
            data-type="remove">&times;</button>
        </div>
    </li>`

}

listNotes.onclick = function (e) {
    if (e.target.dataset.index) {
        const index = Number(e.target.dataset.index);
        const type = e.target.dataset.type;

        if (type === "toggle") {
            inputNotes[index].completed = !inputNotes[index].completed;
        } else if (type === "remove") {
            inputNotes.splice(index, 1);
        }
    }
    renderNotes();
}