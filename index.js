import { Consulta } from "./Consulta.js";
import { Pessoa } from "./Pessoa.js";

const inNome = document.getElementById("inNome");
const inAltura = document.getElementById("inAltura");
const inPeso = document.getElementById("inPeso");
const inDataNascimento = document.getElementById("inDataNascimento");
const inConvenio = document.getElementById("inConvenio");
const btCadastrarPessoas = document.getElementById("btCadastrarPessoas");
const inPaciente = document.getElementById("inPaciente");
const inDataConsulta = document.getElementById("inDataConsulta");
const inHoras = document.getElementById("inHoras");
const inMinutos = document.getElementById("inMinutos");
const inMedico = document.getElementById("inMedico");
const btCadastrarConsultas = document.getElementById("btCadastrarConsultas");
const outMsg = document.getElementById("outMsg");
const status = document.getElementById("status");
const footer = document.getElementById("footer");

const vetPessoas = [];
const vetConsultas = [];
let codigoPessoas = 1;
let codigoConsulta = 1;


btCadastrarPessoas.addEventListener("submit", function (event) {
  if (inNome.value === "") {
    alert("Por favor, insira o nome da pessoa.");
  } else if (inAltura.value === "" || 0) {
    alert("Por favor, insira uma altura válida.");
  } else if (inPeso.value === "" || inPeso.value <= 0) {
    alert("Por favor, insira um peso válido.");
  } else if (inDataNascimento.value === null) {
    alert("Por favor, insira a data de nascimento.");
  } else if (inConvenio.value === "") {
    alert("Por favor, insira o nome do convênio.");
  } else {
    
    const pessoa = new Pessoa(codigoPessoas++, inNome.value, inAltura.value, inPeso.value, inDataNascimento.value, inConvenio.value);

    vetPessoas.push(pessoa)
    footer.style.display = "flex";

    
    then(function(response) {
      inNome.value = "";
      inAltura.value = "";
      inPeso.value = "";
      inConvenio.value = ""; 
    })
    .catch(function(error) {
      console.log(error);
    });
  status.textContent = `${pessoa.codigo}º Pessoa cadastrada com sucesso`
    let saida = "Pessoas Cadastradas:\n\n"; 


    for (let i = 0; i < vetPessoas.length; i++){
        saida += vetPessoas[i].toString();
    }
    outMsg.textContent = saida;
  }
});

btCadastrarConsultas.addEventListener("click", function () {
  if (inPaciente.value === "") {
    alert("Por favor, insira o nome do paciente.");
  }else if (inDataConsulta.value === "") {
    alert("Por favor, insira a data da consulta.");
  }else if (
    inHoras.value === "" ||
    inMinutos.value === "" ||
    inHoras.value >= 24 ||
    inMinutos.value >= 60 ||
    inHoras.value < 0 ||
    inMinutos.value < 0
  ) {
    alert("Por favor, insira um horário válido.");
  }else if (inMedico.value === "" ) {
    alert("Por favor, insira um código de médico válido.");
  }else{
    let codigoPaciente = null;
    let codigoMedico = null;
    let nomeMedico = null;
    let nomePaciente = null;

    console.log(vetPessoas);
    for (let i = 0; i < vetPessoas.length; i++){
      if (inPaciente.value == vetPessoas[i].codigo){
        codigoPaciente = vetPessoas[i].codigo;
        nomePaciente = vetPessoas[i].nome;
      }
      if(inMedico.value == vetPessoas[i].codigo){
        codigoMedico = vetPessoas[i].codigo;
        nomeMedico = vetPessoas[i].nome;
      }
    }

    const consulta = new Consulta(codigoConsulta++, codigoPaciente, inDataConsulta.value, inHoras.value, inMinutos.value, codigoMedico, nomeMedico, nomePaciente);
    vetConsultas.push(consulta)
    footer.style.display = "flex";
    status.textContent = "Consulta cadastrada com sucesso";
    
    
    let saida = "Consultas Cadastradas:\n\n"; 
    for (let i = 0; i < vetConsultas.length; i++){
        saida += vetConsultas[i].toString();
    }
    outMsg.textContent = saida;


}});

