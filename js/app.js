const inputElement = document.getElementById("input1");
const btnAdd = document.getElementById("btnAddNotes");
const listNotes = document.getElementById("notes");

const inputNotes = [
    {
    title: 'Hekko', completed: false,
    },
    {
    title: 'ohh yesss', completed: true,
    }
]


function renderNotes() {

    for (let i = 0; i < inputNotes.length; i++) {
        listNotes.insertAdjacentHTML('beforeend', getTemplateNotes(inputNotes[i],i));
    }


}

btnAdd.onclick = function () {
    if (inputElement.value.length === 0) {
        return undefined;
    }
    const newNote = {
        title: inputElement.value, completed: false,
    }

    listNotes.insertAdjacentHTML('beforeend', getTemplateNotes(newNote));

    inputElement.value = "";
}


renderNotes();

function getTemplateNotes(note , index) {
    return `<li>
        <span >${note.title}</span>
        <span>
                <button class="btnSuccess">&check;</button>
                <button class="btnDanger">&times;</button>
            </span>
    </li>`

}