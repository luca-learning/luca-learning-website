import React, { useState } from 'react';
import Select from 'react-select';

import { Container } from './styles';

const level = [
  { value: 'pre-escolar', label: 'Preescolar' },
  { value: 'primaria', label: 'Primaria' },
  { value: 'secundaria', label: 'Secundaria' }
]

const classes = {
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
  const [classe, setClasse] = useState<'pre-escolar' | 'primaria' | 'secundaria'>('pre-escolar');

  const handleSelectLevel = (option: Option) => {
    setClasse(option.value);
  }

  return (
    <Container>
      <section id="register">
        <div className="title">
          <h1>Regístrese ahora y reciba una de nuestras clases exclusivas</h1>

          <form>
            <input type="text" name="name" placeholder="Su nombre" />
            <input type="email" name="email" placeholder="Su e-mail" />
            <Select 
              options={level} 
              placeholder="Su nivel educativo" 
              onChange={(option) => handleSelectLevel((option as Option))} 
              value={level.filter(item => item.value === classe)}
            />
            <Select options={classes[classe]} placeholder="Su grado escolar" />
            
            <button>
              Obtener clase
            </button>
          </form>
        </div>
      </section>
    </Container>
  )
}

export default Register