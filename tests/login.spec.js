import { test, expect } from '@playwright/test';
import { USERS, MESSAGES } from './data/login';

test.beforeEach(async ({ page }) => {
    await page.goto('/login');
});

test('Login successful', async ({page}) => {
    await test.step('provide credential and click in Loggin button', async () => {
        await page.getByRole('textBox', {name: 'Type your username'}).fill(USERS.valid.username);
        await page.getByRole('textBox', {name: 'Type your password'}).fill(USERS.valid.password);
        await page.getByRole('button', {name: 'Login'}).click();
    });

    await test.step('validate error message', async () => {
        await expect(page.getByText(MESSAGES.success.success)).toBeVisible();
        await expect(page.getByText(MESSAGES.success.authenticated)).toBeVisible();
    });
})

test('Login blocked account should fail', async ({page}) => {
    await test.step('provide credential and click in Loggin button', async () => {
        await page.getByRole('textBox', {name: 'Type your username'}).fill(USERS.blockedAccount.username);
        await page.getByRole('textBox', {name: 'Type your password'}).fill(USERS.blockedAccount.password);
        await page.getByRole('button', {name: 'Login'}).click();
    });

    await test.step('validate error message', async () => {
        await expect(page.getByText(MESSAGES.error.userBlocked)).toBeVisible();
    });
})

test('Login with invalid user should fail', async ({page}) => {
    await test.step('provide credential and click in Loggin button', async () => {
        await page.getByRole('textBox', {name: 'Type your username'}).fill(USERS.invalidUser.username);
        await page.getByRole('textBox', {name: 'Type your password'}).fill(USERS.invalidUser.password);
        await page.getByRole('button', {name: 'Login'}).click();
    });
    
    await test.step('validate error message', async () => {
        await expect(page.getByText(MESSAGES.error.userNotFound)).toBeVisible();
    });
})

test('Login with wrong password should fail', async ({page}) => {
    await test.step('provide credential and click in Loggin button', async () => {
        await page.getByRole('textBox', {name: 'Type your username'}).fill(USERS.wrongPassword.username);
        await page.getByRole('textBox', {name: 'Type your password'}).fill(USERS.wrongPassword.password);
        await page.getByRole('button', {name: 'Login'}).click();
    });

    await test.step('validate error message', async () => {
        await expect(page.getByText(MESSAGES.error.incorrectPassword)).toBeVisible();
    });
})

test('Block account after 3 failed attempts', async ({page}) => {
    await test.step('provide credential and click in Loggin button 3 times', async () => {
        await page.getByRole('textBox', {name: 'Type your username'}).fill(USERS.wrongPassword.username);
        await page.getByRole('textBox', {name: 'Type your password'}).fill(USERS.wrongPassword.password);
        for(let i = 0; i < 3; i++){
            await page.getByRole('button', {name: 'Login'}).click();
        }
    });
    
    await test.step('validate error message', async () => {
        await expect(page.getByText(MESSAGES.error.TemporarilyBlocked)).toBeVisible();
    });
})