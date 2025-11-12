import { test, expect } from '@playwright/test';

test('Pokemon list', async ({ request }) => {

  const response = await request.get('https://pokeapi.co/api/v2/pokemon/');
  expect(response.status()).toBe(200);

  const body = await response.json();
  expect(body.count).toBe(1328);
  expect(body.results[0].name).toBe("bulbasaur");

  const pokeResponse = await request.get(body.results[0].url);
  const pokeBody = await pokeResponse.json();
  expect(pokeBody.types[0].type.name).toBe("grass");
  expect(pokeBody.types[1].type.name).toBe("poison");
});