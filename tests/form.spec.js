import { test, expect } from "@playwright/test"
import {USERS} from "./data/form"

test.beforeEach(async ({ page }) => {
    await page.goto('/form');
});

for (const user of USERS){
    test(user.scenario, async ({page}) => {
        await test.step('insert values to form fields', async () => {
            await page.getByRole('textBox', {name: 'Name *'}).fill(user.name);
            await page.getByRole('textBox', {name: 'Email *'}).fill(user.email);
            await page.getByRole('textBox', {name: 'Password *'}).fill(user.password);
            await page.getByRole('combobox', {name: 'Country *'}).selectOption(user.country);
            await page.getByRole('radio', {name: user.gender, exact: true}).check();
            for (const hobby of user.hobbies){
                await page.getByRole('checkbox', {name: hobby}).check();
            }
            await page.getByRole('button', {name: 'Send'}).click();
        });

        await test.step('validate user creation', async () => {
            await expect(page.getByText('Success!')).toBeVisible();
            await expect(page.getByText('The form has been submitted successfully.')).toBeVisible();
        });
    })
}