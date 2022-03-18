import { render, screen } from '@testing-library/react';
import App from "./App";
import userEvent from "@testing-library/user-event";

describe('teste a aplicaçao do Pokemon', () => {
  it('deve exibir a logo e o titulo na pagina', () => {
    render(<App />);
    const img = screen.getByRole('img');
    expect(img).toBeInTheDocument();

    const title = screen.getByRole('heading', { level: 3 });
    expect(title).toBeInTheDocument();
  })

  it('deve exibir o butao de busca e o input, e conseguir por value no input', () => {
    render(<App />);

    const button = screen.getByRole('button', { name: /Pesquisar/i })
    expect(button).toBeInTheDocument();

    const inputText = screen.getByRole('textbox');
    expect(inputText).toBeInTheDocument();

    userEvent.type(inputText, 'pikachu');
    expect(inputText).toHaveValue('pikachu');
  })

  // it('deve exibir o pokemon pesquisado', async () => {
  //   render(<App />);

  //   const inputText = screen.getByRole('textbox');
  //   expect(inputText).toBeInTheDocument();

  //   userEvent.type(inputText, 'charmander');
  //   expect(inputText).toHaveValue('charmander');

  //   const button = screen.getByRole('button', { name: /Pesquisar/i })
  //   expect(button).toBeInTheDocument();

  //   userEvent.click(button);

  //   const titleCard = await screen.findByRole('heading', { name: /Charmander/i })
  //   return expect(titleCard).toBeInTheDocument();
  // })

  it('deve exibir o pokemon pesquisado', async () => {
    render(<App />);

    const PokeMock = {
      cards: [
        {
          "id": "det1-4",
          "name": "Charmander",
          "nationalPokedexNumber": 4,
          "imageUrl": "https://images.pokemontcg.io/det1/4.png",
          "imageUrlHiRes": "https://images.pokemontcg.io/det1/4_hires.png",
          "types": [
            "Fire"
          ],
          "supertype": "Pokémon",
          "subtype": "Basic",
          "hp": "60",
          "retreatCost": [
            "Colorless"
          ],
          "convertedRetreatCost": 1,
          "number": "4",
          "artist": "MPC Film",
          "rarity": "Common",
          "series": "Sun & Moon",
          "set": "Detective Pikachu",
          "setCode": "det1",
          "attacks": [
            {
              "cost": [
                "Colorless"
              ],
              "name": "Reckless Charge",
              "text": "This Pokémon does 10 damage to itself.",
              "damage": "20",
              "convertedEnergyCost": 1
            }
          ],
          "weaknesses": [
            {
              "type": "Water",
              "value": "×2"
            }
          ]
        }
      ]
    }

    // global.fetch = jest.fn( () => {
    //   return Promise.resolve({
    //     json: () => Promise.resolve(PokeMock),
    //   });
    // });

    jest.spyOn(global, 'fetch');
    global.fetch.mockResolvedValue({
      // json: () => Promise.resolve(PokeMock)
      json: jest.fn().mockResolvedValue(PokeMock)

    })

    const inputText = screen.getByRole('textbox');
    expect(inputText).toBeInTheDocument();

    userEvent.type(inputText, 'charmander');
    expect(inputText).toHaveValue('charmander');

    const button = screen.getByRole('button', { name: /Pesquisar/i })
    expect(button).toBeInTheDocument();

    userEvent.click(button);

    expect(global.fetch).toHaveBeenCalled();

    const titleCard = await screen.findByRole('heading', { name: /Charmander/i }, { timeout: 3000 })
    return expect(titleCard).toBeInTheDocument();
  })
})