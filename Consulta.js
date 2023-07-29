export class Consulta {
    constructor(_codigo,_codPaciente, _dataConsulta, _horas, _minutos, _codMedico, _nomeMedico, _nomePaciente) {
      this.codigo = _codigo;
      this.dataConsulta = _dataConsulta;
      this.horas = _horas;
      this.minutos = _minutos;
      this.paciente = _codPaciente;
      this.medico = _codMedico;
      this.nomeMedico = _nomeMedico;
      this.nomePaciente = _nomePaciente;
    }
  
    toString() {
      return "Código: " + this.codigo + "\nData da Consulta: " + this.dataConsulta + "\nHora da Consulta: " + this.horas + ":" + this.minutos + "\nPaciente: " +this.nomePaciente + "\nCodigo Paciente: "+ this.paciente + "\nMédico: " + this.nomeMedico + "\nCodigo Medico: "+ this.medico + "\n\n";
    }
  }