import { expect } from "@playwright/test";

export class TablePage{

    constructor(page) {
        this.page = page;
        this.characterImage = (name) => page.getByRole('img', {name: name});
        this.characterName = (character) => page.locator('#tableCharacterName' + character);
        this.characterHouse = (character) => page.locator('#tableCharacterHouse' + character);
        this.characterDOB = (character) => page.locator('#tableCharacterDateOfBirth' + character);
        this.characterActor = (character) => page.locator('#tableCharacterActor' + character);
    }

    async navigateToTable(){
        await this.page.goto('/table');
    }

    async checkCharacterImage(name){
        await expect(this.characterImage(name)).toBeVisible();
    }

    async checkCharacterName(character, name){
        await expect(this.characterName(character)).toContainText(name);
    }

    async checkCharacterHouse(character, house){
        await expect(this.characterHouse(character)).toContainText(house);
    }

    async checkCharacterDOB(character, dateOfBirth){
        await expect(this.characterDOB(character)).toContainText(dateOfBirth);
    }
    
    async checkCharacterActor(character, actor){
        await expect(this.characterActor(character)).toContainText(actor);
    }
}