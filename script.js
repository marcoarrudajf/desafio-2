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

const inputObjeto1 = {
  campoDeTexto1: document.getElementById("input1"),
  listaDeItensHtml1: document.getElementById("primeiro"),
  listaDeItens1: [],
  botaoAdicionar1: document.getElementById("btn1"),
  botaoLimpar1: document.getElementById("btn_limpar1"),
};

inputObjeto1.botaoAdicionar1.addEventListener("click", () => {
  if (inputObjeto1.campoDeTexto1 !== "") {
    inputObjeto1.listaDeItens1.push(` ${inputObjeto1.campoDeTexto1.value}`);
    inputObjeto1.listaDeItensHtml1.innerText = inputObjeto1.listaDeItens1;
  }
  inputObjeto1.campoDeTexto1.value = "";
});

inputObjeto1.botaoLimpar1.addEventListener("click", () => {
  inputObjeto1.listaDeItens1 = [];
  inputObjeto1.listaDeItensHtml1.innerHTML = inputObjeto1.listaDeItens1;
});

const inputObjeto2 = {
  campoDeTexto2: document.getElementById("input2"),
  listaDeItensHtml2: document.getElementById("segundo"),
  listaDeItens2: [],
  botaoAdicionar2: document.getElementById("btn2"),
  botaoLimpar2: document.getElementById("btn_limpar2"),
};
inputObjeto2.botaoAdicionar2.addEventListener("click", () => {
  if (inputObjeto2.campoDeTexto2 !== "") {
    inputObjeto2.listaDeItens2.push(` ${inputObjeto2.campoDeTexto2.value}`);
    inputObjeto2.listaDeItensHtml2.innerText = inputObjeto2.listaDeItens2;
  }
  inputObjeto2.campoDeTexto2.value = "";
});

inputObjeto2.botaoLimpar2.addEventListener("click", () => {
  inputObjeto2.listaDeItens2 = [];
  inputObjeto2.listaDeItensHtml2.innerText = inputObjeto2.listaDeItens2;
});

const inputObjeto3 = {
  campoDeTexto: document.getElementById("input3"),
  listaDeItensHtml: document.getElementById("terceiro"),
  listaDeItens: [],
  botaoAdicionar: document.getElementById("btn3"),
  botaoLimpar: document.getElementById("btn_limpar3"),
};

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
