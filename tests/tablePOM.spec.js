import { test, expect } from "@playwright/test";
import { TablePage } from "./pages/table.page";
import hpCharacters from './data/json/hp.characters.json'

test.beforeEach(async ({ page }) => {
    const form = new TablePage(page);

    await form.navigateToTable();
});

for (const hpChar of hpCharacters){
    test(hpChar.name, async ({page}) => {
        const table = new TablePage(page);
        const nameWithoutSpace = hpChar.name.replace(' ', '');
        const birth = hpChar.dateOfBirth ? hpChar.dateOfBirth : 'Unknown';

        await test.step('insert values to form fields', async () => {
            await table.checkCharacterImage(hpChar.name);
            await table.checkCharacterName(nameWithoutSpace, hpChar.name);
            await table.checkCharacterHouse(nameWithoutSpace, hpChar.house);
            await table.checkCharacterDOB(nameWithoutSpace, birth);
            await table.checkCharacterActor(nameWithoutSpace, hpChar.actor);
        });
    })
}