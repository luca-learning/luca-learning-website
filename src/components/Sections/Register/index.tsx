import React, { useState } from 'react';
import Select from 'react-select';

import { Container } from './styles';

const levelOptions = [
  { value: 'pre-escolar', label: 'Preescolar' },
  { value: 'primaria', label: 'Primaria' },
  { value: 'secundaria', label: 'Secundaria' }
]

const classesOptions = {
  'pre-escolar': [
    { value: '1th', label: 'Grado 1' },
    { value: '2th', label: 'Grado 2' },
    { value: '3th', label: 'Grado 3' }
  ],
  'primaria': [
    { value: '4th', label: 'Grado 1' },
    { value: '5th', label: 'Grado 2' },
    { value: '6th', label: 'Grado 3' },
    { value: '7th', label: 'Grado 4' },
    { value: '8th', label: 'Grado 5' },
    { value: '9th', label: 'Grado 6' }
  ],
  'secundaria': [
    { value: '10th', label: 'Grado 1' },
    { value: '11th', label: 'Grado 2' },
    { value: '12th', label: 'Grado 3' }
  ]
}

interface Option {
  value: 'pre-escolar' | 'primaria' | 'secundaria';
  label: string;
}

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [level, setLevel] = useState<'pre-escolar' | 'primaria' | 'secundaria'>('pre-escolar');
  const [classe, setClasse] = useState('');

  const handleSelectLevel = (option: Option) => {
    setLevel(option.value);
    setClasse('');
  }

  const handleSelectClasse = (option: Option) => {
    setClasse(option.value);
  }

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  }

  const handleSubmit = () => {
    console.log(name);
    console.log(email);
    console.log(level);
    console.log(classe);
  }

  return (
    <Container>
      <section id="register">
        <div className="title">
          <h1>Regístrese ahora y reciba una de nuestras clases exclusivas</h1>

          <form>
            <input type="text" name="name" placeholder="Su nombre" onChange={handleNameChange} />
            <input type="email" name="email" placeholder="Su e-mail" onChange={handleEmailChange} />
            <Select 
              options={levelOptions} 
              placeholder="Su nivel educativo" 
              onChange={(option) => handleSelectLevel((option as Option))} 
              value={levelOptions.filter(item => item.value === level)}
            />
            <Select 
              options={classesOptions[level]} 
              placeholder="Su grado escolar"
              onChange={(option) => handleSelectClasse((option as Option))} 
              value={classesOptions[level].filter(item => item.value === classe)}
            />
            
            <button 
              type="button"
              disabled={!name || !email || !level || !classe}
              onClick={handleSubmit}
            >
              Obtener clase
            </button>
          </form>
        </div>
      </section>
    </Container>
  )
}

export default Register