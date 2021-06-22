import { render} from '@testing-library/react';
import App from './App';

describe('Primeiros testes usando RTL', () => {
  it('Verifica se ha uma label chamada E-mail na tela', () => {
      const { getByLabelText } = render(<App />);
      const inputEmail = getByLabelText(/E-mail/i)
      expect(inputEmail).toBeInTheDocument()
      expect(inputEmail.type).toBe('email')
    });


    it('Verifica se tem uma frase learn react na pagina', () => {
      const meuApp = render(<App />);
      const LinkElement = meuApp.getByText(/learn react/i)
      expect(LinkElement).toBeInTheDocument()
    })

    it('Verifica se ha um botão na tela com o respectivo valor', () => {
      const { getByTestId } = render(<App />)
      const myButton = getByTestId('testinho')
      expect(myButton).toBeInTheDocument()
      expect(myButton).toHaveValue('btnEnviar')
    })

    it('Verifica se ha botões na tela', () => {
      const { getAllByRole } = render(<App />)
      const myButtons = getAllByRole('button')
      expect(myButtons.length).toBe(2)
    })
})