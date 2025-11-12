import { test, expect } from '@playwright/test';
import hpCharacters from './data/json/hp.characters.json'

for(const hpCharacter of hpCharacters){
    test.skip('Characte '+ hpCharacter.name, async ({ page }) => {
        await page.goto('/table');

        const nameWithoutSpace = hpCharacter.name.replace(' ', '');

        await expect(page.locator('#tableCharacterName' + nameWithoutSpace))
            .toBeVisible();
        await expect(page.getByRole('img', {name:  hpCharacter.name}))
            .toBeVisible();
        await expect(page.locator('#tableCharacterHouse' + nameWithoutSpace))
            .toBeVisible();

        const birth = hpCharacter.dateOfBirth ? hpCharacter.dateOfBirth : 'Unknown';
        await expect(page.getByRole('cell', {name: birth}))
            .toBeVisible();
        await expect(page.locator('#tableCharacterActor' + nameWithoutSpace))
            .toBeVisible();

        console.log(hpCharacters);
    });
}


