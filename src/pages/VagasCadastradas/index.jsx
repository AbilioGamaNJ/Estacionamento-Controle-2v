import "./styles.css";
import {
  BsPersonStanding,
  BsCarFrontFill,
  BsFillBuildingFill,
  BsHouseFill,
} from "react-icons/bs";
import { Navbar } from "../../components/Navbar";

export function VagasCadastradas() {
  
  return (
    <>
      <Navbar />
      <div className="titulo">
        <h1>Vagas Cadastradas</h1>
      </div>
      <div className="container">
{/* Primeira Vaga */} 
        <div className="vagas-box">
              <div className="elements-group">
               <BsPersonStanding className="icons"/> 
                <p>Gustavo</p>
              </div>
              <div className="elements-group">
                <BsCarFrontFill className="icons" />
                <p>Vaga 26</p>
              </div>
              <div className="elements-group">
                <BsFillBuildingFill className="icons" />
                <p>Bloco B</p>
              </div>
              <div className="elements-group">
                <BsHouseFill className="icons" />
                <p>Apartamento 26</p>
              </div>
        </div>
{/* Segunda Vaga */}
        <div className="vagas-box">
              <div className="elements-group">
               <BsPersonStanding className="icons"/> 
                <p>Maurício</p>
              </div>
              <div className="elements-group">
                <BsCarFrontFill className="icons" />
                <p>Vaga 01</p>
              </div>
              <div className="elements-group">
                <BsFillBuildingFill className="icons" />
                <p>Bloco A</p>
              </div>
              <div className="elements-group">
                <BsHouseFill className="icons" />
                <p>Apartamento 59</p>
              </div>
        </div>
{/* Terceira Vaga */}
        <div className="vagas-box">
              <div className="elements-group">
               <BsPersonStanding className="icons"/> 
                <p>Rorys</p>
              </div>
              <div className="elements-group">
                <BsCarFrontFill className="icons" />
                <p>Vaga 07</p>
              </div>
              <div className="elements-group">
                <BsFillBuildingFill className="icons" />
                <p>Bloco C</p>
              </div>
              <div className="elements-group">
                <BsHouseFill className="icons" />
                <p>Apartamento 19</p>
              </div>
        </div>
{/* Quarta Vaga */}
        <div className="vagas-box">
              <div className="elements-group">
               <BsPersonStanding className="icons"/> 
                <p>João</p>
              </div>
              <div className="elements-group">
                <BsCarFrontFill className="icons" />
                <p>Vaga 15</p>
              </div>
              <div className="elements-group">
                <BsFillBuildingFill className="icons" />
                <p>Bloco B</p>
              </div>
              <div className="elements-group">
                <BsHouseFill className="icons" />
                <p>Apartamento 18</p>
              </div>
        </div>
{/* Quinta Vaga */}
<div className="vagas-box">
              <div className="elements-group">
               <BsPersonStanding className="icons"/> 
                <p>Pedro</p>
              </div>
              <div className="elements-group">
                <BsCarFrontFill className="icons" />
                <p>Vaga 40</p>
              </div>
              <div className="elements-group">
                <BsFillBuildingFill className="icons" />
                <p>Bloco D</p>
              </div>
              <div className="elements-group">
                <BsHouseFill className="icons" />
                <p>Apartamento 60</p>
              </div>
        </div>
{/* Sexta Vaga */}
        <div className="vagas-box">
              <div className="elements-group">
               <BsPersonStanding className="icons"/> 
                <p>Cássia</p>
              </div>
              <div className="elements-group">
                <BsCarFrontFill className="icons" />
                <p>Vaga 16</p>
              </div>
              <div className="elements-group">
                <BsFillBuildingFill className="icons" />
                <p>Bloco C</p>
              </div>
              <div className="elements-group">
                <BsHouseFill className="icons" />
                <p>Apartamento 02</p>
              </div>
        </div>
{/* Sétima Vaga */}
        <div className="vagas-box">
              <div className="elements-group">
               <BsPersonStanding className="icons"/> 
                <p>Davi</p>
              </div>
              <div className="elements-group">
                <BsCarFrontFill className="icons" />
                <p>Vaga 30</p>
              </div>
              <div className="elements-group">
                <BsFillBuildingFill className="icons" />
                <p>Bloco B</p>
              </div>
              <div className="elements-group">
                <BsHouseFill className="icons" />
                <p>Apartamento 09</p>
              </div>
        </div>
{/* Oitava Vaga */}
        <div className="vagas-box">
              <div className="elements-group">
               <BsPersonStanding className="icons"/> 
                <p>Matheus</p>
              </div>
              <div className="elements-group">
                <BsCarFrontFill className="icons" />
                <p>Vaga 19</p>
              </div>
              <div className="elements-group">
                <BsFillBuildingFill className="icons" />
                <p>Bloco C</p>
              </div>
              <div className="elements-group">
                <BsHouseFill className="icons" />
                <p>Apartamento 55</p>
              </div>
        </div>
      </div>
    </>
  );
}
