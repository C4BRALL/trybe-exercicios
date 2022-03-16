import { render, screen } from '@testing-library/react';
import App from './App';

test('verifica se existe input de name', () => {
  // acessar elementos da tela.
  render(<App />);
  
  // interagir com os elementos da tela (se nescessario).
  const inputName = screen.getByLabelText("Name:");
  
  // fazer testes.
  expect(inputName).toBeInTheDocument();
  expect(inputName.type).toBe("text");
});