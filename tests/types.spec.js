import { test, expect } from '@playwright/test';
import {TYPES} from "./data/pokemonType.data"


for (const type of TYPES){
    const typeName = type.name;

    test('Pokemon type ' + typeName + 'double damage from', async ({ request }) => {
        const response = await request.get('https://pokeapi.co/api/v2/type/' + typeName);
        expect(response.status()).toBe(200);

        const body = await response.json();
        const typeDamageList = []; 
        for (const typeDamage of body.damage_relations.double_damage_from){
            typeDamageList.push(typeDamage.name);
        }
        expect(typeDamageList).toContain(type.doubleDamage);

    });
}
