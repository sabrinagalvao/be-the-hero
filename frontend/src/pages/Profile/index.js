import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2, FiTrash } from 'react-icons/fi';

import './styles.css';

import logoImg from '../../assets/logo.svg';
import api from '../../services/api';

export default function Profile(){

    const [incidents, setIncidents] = useState([]);

    const ongID = localStorage.getItem('ongID');
    const ongName = localStorage.getItem('ongName');

    useEffect(() => {
        api.get('profile', {
            headers: {
                Authorization: ongID,
            }
        }).then(response => {
            setIncidents(response.data);
        })
    }, [ongID]);

    return (
        <div className="profile-container">
            <header>
                <img src={logoImg} alt="Be The Hero"/>
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incidents/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#E02041"/>
                </button>
            </header>

            <h1>Casos Cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRI��O:</strong>
                        <p>{incident.description}</p>

                        <strong>VALOR:</strong>
                        <p>{incident.value}</p>

                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}