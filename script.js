/*
 ** 1. Criar uma aplicação que contenha EXATAMENTE as instruções abaixo.
 **
 ** 2. Criar 3 inputs do tipo texto  <input type="text" />
 **     a. cada input tera um ID diferente
 **
 ** 3. Criar 3 divs abaixo desses inputs <div></div>
 **
 ** 4. Tudo que você escrever no primeiro input irá pra primeira div,
 **     no segundo input irá pra segunda div, e o mesmo pro terceiro input
 */
const inp = document.getElementById("inp");
const primeiro = document.getElementById("primeiro");
const btn = document.getElementById("btn");
const inp1 = document.getElementById("inp1");
const segundo = document.getElementById("segundo");
const btn1 = document.getElementById("btn1");


const inputObjeto3 = {
  campoDeTexto: document.getElementById("inp2"),
  listaDeItensHtml: document.getElementById("terceiro"),
  listaDeItens: [],
  botaoAdicionar: document.getElementById("btn2"),
  botaoLimpar: document.getElementById("btn_limpar")
}

let ar = [];
btn.addEventListener("click", () => {
  if (inp.value) {
    ar.push(`  ${inp.value}`);
    primeiro.textContent = ar;
  }
  inp.value = "";
});

let ar1 = [];
btn1.addEventListener("click", () => {
  if (inp1.value) {
    ar1.push(`  ${inp1.value}`);
    segundo.textContent = ar1;
  }
  inp1.value = "";
});


inputObjeto3.botaoAdicionar.addEventListener("click", () => {
  if (inputObjeto3.campoDeTexto !== "") {
    inputObjeto3.listaDeItens.push(`  ${inputObjeto3.campoDeTexto.value}`);
    inputObjeto3.listaDeItensHtml.innerText = inputObjeto3.listaDeItens;
  }
  inputObjeto3.campoDeTexto.value = "";
});

inputObjeto3.botaoLimpar.addEventListener("click", () => {
  inputObjeto3.listaDeItens = [];
  inputObjeto3.listaDeItensHtml.innerText = inputObjeto3.listaDeItens;
});
