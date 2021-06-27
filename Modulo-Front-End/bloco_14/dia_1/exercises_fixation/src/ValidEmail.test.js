import React from 'react';
import { render } from '@testing-library/react';
import ValidEmail from './components/ValidEmail';

test('Testando um componente, caso o email seja valido', () => {
  const EMAIL_USER = 'email@email.com';
  const { getByText } = render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = getByText('Email valido');
  expect(isValid).toBeInTheDocument();    
})

test('Testando um componente, caso o email seja inválido', () => {
  const EMAIL_USER = 'emailerrado';
  const { getByText } = render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = getByText('Email inválido');
  expect(isValid).toBeInTheDocument();
})      