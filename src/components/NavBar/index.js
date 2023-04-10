import "./Navbar.css";
import { DropdownButton, Dropdown } from "react-bootstrap";
import React, { useState } from "react";

const NavBar = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <header className="navbar">
      <img src="/logo192.png" alt="logo" />

      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#noticias">Noticias</a></li>
        <li><a href="#projetos">Projetos em andamento</a></li>
        <li><a href="#equipe">Equipe</a></li>
        <li>
          <select value={selectedOption} onChange={handleChange}>
            <option className="option" value="">Links Uteis</option>
            <option className="option" value="opcao1"><a href="#">Aplicativo de digitalização</a></option>
            <option className="option" value="opcao2"><a href="#">Aplicativo de digitalização</a></option>
            <option className="option" value="opcao3"><a href="#">Aplicativo de digitalização</a></option>
          </select>
        </li>
      </ul>
    </header>
  );
};

export default NavBar;
