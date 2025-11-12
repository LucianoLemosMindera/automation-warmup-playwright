import { test, expect } from "@playwright/test";
import { FormPage } from "./pages/form.page";
import {USERS} from "./data/form"

test.beforeEach(async ({ page }) => {
    const form = new FormPage(page);

    await form.navigateToForm();
});

for (const user of USERS){
    test('FORM FILLING |' + user.scenario, async ({page}) => {
        const form = new FormPage(page);

        await test.step('insert values to form fields', async () => {
            await form.fillName(user.name);
            await form.fillEmail(user.email);
            await form.fillPassword(user.password);
            await form.selectCountry(user.country);
            await form.selectGender(user.gender);
            await form.selectHobbies(user.hobbies);
            await form.clickSendButton();
        });

        await test.step('validate user creation', async () => {
            form.validateSuccessMessage
        });
    })
}