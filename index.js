const form = document.getElementById('form');
let linhas = '';

form.addEventListener('submit', (e)=>{
    e.preventDefault();

    const name = document.getElementById('name');
    const number = document.getElementById('number'); 

    let linha =`<tr>`;
    linha += `<td>${name.value}</td>`;
    linha += `<td>${number.value}</td>`;
    linha += `</tr>`;

    linhas += linha;

    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
})