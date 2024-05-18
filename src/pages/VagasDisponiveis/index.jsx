import "./styles.css";
import {
  BsCarFrontFill,
  BsFillBuildingFill,
  BsHouseFill,
} from "react-icons/bs";
import { Navbar } from "../../components/Navbar";

export function VagasDisponiveis() {
  
  return (
    <>
      <Navbar />
      <div className="titulo">
        <h1>Vagas Disponíveis</h1>
      </div>
      <div className="container">
{/* Primeira Vaga */} 
        <div className="vagas-box">
              <div className="elements-group">
                <BsCarFrontFill className="icons" />
                <p>Vaga 02</p>
              </div>
              <div className="elements-group">
                <BsFillBuildingFill className="icons" />
                <p>Bloco B</p>
              </div>
              <div className="elements-group">
                <BsHouseFill className="icons" />
                <p>Apartamento 25</p>
              </div>
        </div>
{/* Segunda Vaga */}
        <div className="vagas-box">
              <div className="elements-group">
                <BsCarFrontFill className="icons" />
                <p>Vaga 03</p>
              </div>
              <div className="elements-group">
                <BsFillBuildingFill className="icons" />
                <p>Bloco A</p>
              </div>
              <div className="elements-group">
                <BsHouseFill className="icons" />
                <p>Apartamento 04</p>
              </div>
        </div>
{/* Terceira Vaga */}
        <div className="vagas-box">
              <div className="elements-group">
                <BsCarFrontFill className="icons" />
                <p>Vaga 04</p>
              </div>
              <div className="elements-group">
                <BsFillBuildingFill className="icons" />
                <p>Bloco C</p>
              </div>
              <div className="elements-group">
                <BsHouseFill className="icons" />
                <p>Apartamento 24</p>
              </div>
        </div>
{/* Quarta Vaga */}
        <div className="vagas-box">
              <div className="elements-group">
                <BsCarFrontFill className="icons" />
                <p>Vaga 05</p>
              </div>
              <div className="elements-group">
                <BsFillBuildingFill className="icons" />
                <p>Bloco B</p>
              </div>
              <div className="elements-group">
                <BsHouseFill className="icons" />
                <p>Apartamento 20</p>
              </div>
        </div>
{/* Quinta Vaga */}
<div className="vagas-box">
              <div className="elements-group">
                <BsCarFrontFill className="icons" />
                <p>Vaga 41</p>
              </div>
              <div className="elements-group">
                <BsFillBuildingFill className="icons" />
                <p>Bloco D</p>
              </div>
              <div className="elements-group">
                <BsHouseFill className="icons" />
                <p>Apartamento 51</p>
              </div>
        </div>
{/* Sexta Vaga */}
        <div className="vagas-box">
              <div className="elements-group">
                <BsCarFrontFill className="icons" />
                <p>Vaga 44</p>
              </div>
              <div className="elements-group">
                <BsFillBuildingFill className="icons" />
                <p>Bloco C</p>
              </div>
              <div className="elements-group">
                <BsHouseFill className="icons" />
                <p>Apartamento 10</p>
              </div>
        </div>
{/* Sétima Vaga */}
        <div className="vagas-box">
              <div className="elements-group">
                <BsCarFrontFill className="icons" />
                <p>Vaga 55</p>
              </div>
              <div className="elements-group">
                <BsFillBuildingFill className="icons" />
                <p>Bloco B</p>
              </div>
              <div className="elements-group">
                <BsHouseFill className="icons" />
                <p>Apartamento 16</p>
              </div>
        </div>
{/* Oitava Vaga */}
        <div className="vagas-box">
              <div className="elements-group">
                <BsCarFrontFill className="icons" />
                <p>Vaga 58</p>
              </div>
              <div className="elements-group">
                <BsFillBuildingFill className="icons" />
                <p>Bloco C</p>
              </div>
              <div className="elements-group">
                <BsHouseFill className="icons" />
                <p>Apartamento 30</p>
              </div>
        </div>
      </div>
    </>
  );
}
