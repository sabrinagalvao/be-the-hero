import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import api from '../../services/api';
import './styles.css';
import logoImg from '../../assets/logo.svg';

export default function Register(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    async function handleRegister(e){
        e.preventDeafult();

        const data = {
            name,
            email,
            city,
            uf,
            whatsapp,
        };

        try{
            const response = await api.post('ongs', data);
            alert(`Seu ID para acesso �: ${response.data.id}`);
        }
        catch(err){
            alert('Ocorreu um erro. Tente novamente!');
        }
    }

    return(
        <div className="register-container">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be The Hero" />

                    <h1>Cadastro</h1>
                    <p>Fa�a seu cadastro, entre na plataforma e ajude as pessoas a encontrarem casos na sua ONG</p>
                    <Link className="back-link" to="/">
                        <FiArrowLeft size={16} color="#E02041"/>
                        J� tenho cadastro
                    </Link>
                </section>

                <form onSubmit={handleRegister}>
                    <input
                        placeholder="Nome da ONG"
                        value={name}
                        onChange ={e => setName(e.target.value)}
                    />

                    <input
                        type="email" placeholder="E-mail"
                        value={email}
                        onChange ={e => setEmail(e.target.value)}
                    />

                    <input 
                        placeholder="Whatsapp"
                        value={whatsapp}
                        onChange ={e => setWhatsapp(e.target.value)}
                    />
 
                    <div className="input-group">
                        <input
                            placeholder="Cidade"
                            value={city}
                            onChange ={e => setCity(e.target.value)}    
                        />

                        <input 
                            placeholder="UF" style={{ width: 80 }}
                            value={uf}
                            onChange ={e => setUf(e.target.value)}    
                        />
                    </div>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    );
}