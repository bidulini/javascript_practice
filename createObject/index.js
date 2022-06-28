const adToObject = () => {

    const person = {
        name: document.getElementById("name").value,
        surname: document.getElementById("surname").value,
        party: document.getElementById("party").value,
    }

    console.log(person);
    console.table(person);
}