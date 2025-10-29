import { test, expect } from "@playwright/test";
import {USERS, MESSAGES} from "./data/login"

test.beforeEach(async ({ page }) => {
    await page.goto('/login');
});

test('Login successful', async ({page}) => {
    await test.step('provide credential and click in Loggin button', async () => {
        await page.getByRole('textBox', {name: 'Type your username'}).fill('test');
        await page.getByRole('textBox', {name: 'Type your password'}).fill('password123');
        await page.getByRole('button', {name: 'Login'}).click();
    });

    await test.step('validate error message', async () => {
        await expect(page.getByText('User successfully logged in!')).toBeVisible();
        await expect(page.getByText('authenticated')).toBeVisible();
    });
})

test('Login blocked account should fail', async ({page}) => {
    await test.step('provide credential and click in Loggin button', async () => {
        await page.getByRole('textBox', {name: 'Type your username'}).fill('testblock');
        await page.getByRole('textBox', {name: 'Type your password'}).fill('password123');
        await page.getByRole('button', {name: 'Login'}).click();
    });

    await test.step('validate error message', async () => {
        await expect(page.getByText('User blocked!')).toBeVisible();
    });
})

test('Login with invalid user should fail', async ({page}) => {
    await test.step('provide credential and click in Loggin button', async () => {
        await page.getByRole('textBox', {name: 'Type your username'}).fill('invalidUSer');
        await page.getByRole('textBox', {name: 'Type your password'}).fill('password123');
        await page.getByRole('button', {name: 'Login'}).click();
    });
    
    await test.step('validate error message', async () => {
        await expect(page.getByText('User not found!')).toBeVisible();
    });
})

test('Login with wrong password should fail', async ({page}) => {
    await test.step('provide credential and click in Loggin button', async () => {
        await page.getByRole('textBox', {name: 'Type your username'}).fill('test');
        await page.getByRole('textBox', {name: 'Type your password'}).fill('invalid');
        await page.getByRole('button', {name: 'Login'}).click();
    });

    await test.step('validate error message', async () => {
        await expect(page.getByText('Incorrect username or password!')).toBeVisible();
    });
})

test('Block account after 3 failed attempts', async ({page}) => {
    await test.step('provide credential and click in Loggin button 3 times', async () => {
        for(let i = 0; i < 3; i++){
            await page.getByRole('textBox', {name: 'Type your username'}).fill('test');
            await page.getByRole('textBox', {name: 'Type your password'}).fill('invalid');
            await page.getByRole('button', {name: 'Login'}).click();
        }
    });
    
    await test.step('validate error message', async () => {
        await expect(page.getByText('User temporarily blocked!')).toBeVisible();
    });
})