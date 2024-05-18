import { useState } from "react";
import "./styles.css";
import { Navbar } from "../../components/Navbar";

export function Home() {
  const [placaVeiculo, setPlacaVeiculo] = useState("");
  const [nomeProprietario, setNomeProprietario] = useState("");
  const [nomeApartamento, setNomeApartamento] = useState("");
  const [blocoApartamento, setBlocoApartamento] = useState("");
  const [modeloVeiculo, setModeloVeiculo] = useState("");
  const [corVeiculo, setCorVeiculo] = useState("");
  const [vagaEstacionamento, setVagaEstacionamento] = useState("");

  function Cadastrar() {
    if (
      !placaVeiculo ||
      !nomeProprietario ||
      !nomeApartamento ||
      !blocoApartamento ||
      !modeloVeiculo ||
      !corVeiculo ||
      !vagaEstacionamento
    ) {
      return alert("Preencha todos os campos!");
    }

    console.log(
      "Placa do Veículo: " +
        placaVeiculo +
        "\nNome do Proprietário: " +
        nomeProprietario +
        "\nNúmero do Apartamento: " +
        nomeApartamento +
        "\nBloco do Apartamento: " +
        blocoApartamento +
        "\nModelo de Veículo: " +
        modeloVeiculo +
        "\nCor do Veículo: " +
        corVeiculo +
        "\nNº da vaga do estacionamento: " +
        vagaEstacionamento
    );

    alert("Cadastrado com sucesso!");
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <form className="cadastro-form">
          <h2>Cadastro de Reserva da Vaga</h2>
          <div className="input-group">
            <label htmlFor="placaVeiculo">Placa do Veículo:</label>
            <input
              type="text"
              placeholder="Placa do Veículo..."
              onChange={(e) => setPlacaVeiculo(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="nomeProprietario">Nome do Proprietário:</label>
            <input
              type="text"
              placeholder="Nome do Proprietário..."
              onChange={(e) => setNomeProprietario(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="numeroApartamento">Número do Apartamento:</label>
            <input
              type="number"
              placeholder="Número do Apartamento..."
              onChange={(e) => setNomeApartamento(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="blocoAPartamento">Bloco do Apartamento</label>
            <input
              type="text"
              placeholder="Bloco do Apartamento..."
              onChange={(e) => setBlocoApartamento(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="modeloVeiculo">Modelo de Veículo:</label>
            <input
              type="text"
              placeholder="Modelo do Veículo..."
              onChange={(e) => setModeloVeiculo(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="corVeiculo">Cor do Veículo:</label>
            <input
              type="text"
              placeholder="Cor do Veículo..."
              onChange={(e) => setCorVeiculo(e.target.value)}
            />
          </div>
          <div className="input-group">
            <label htmlFor="numeroVaga">Nº da vaga do estacionamento:</label>
            <input
              type="number"
              placeholder="Número da vaga do estacionamento..."
              onChange={(e) => setVagaEstacionamento(e.target.value)}
            />
          </div>
          <div className="button-div">
            <button title="Cadastrar" onClick={Cadastrar}>
              Cadastrar
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
