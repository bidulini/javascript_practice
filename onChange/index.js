
const Div = (ceoElement) => {
    const dye = ceoElement.value;
    const div = `<div style="background-color: ${dye}; height:250px;"></div>`;
    return div;
}
const createDiv = (sve) => {

    const div = Div(sve);
    document.getElementsByTagName('body')[0].innerHTML += div;

}