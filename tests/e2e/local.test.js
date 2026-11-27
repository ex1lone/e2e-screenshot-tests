import { test, expect } from '@playwright/test';

test('Перевірка форми входу', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.fill('#username', 'test_user');
    await page.fill('#password', 'password123');
    await page.click('#loginButton');
    await expect(page.locator('#successMessage')).toBeVisible();
});

test('Перевірка заголовка сторінки', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await expect(page).toHaveTitle(/Локальна сторінка/);
});

test('Валідація обов’язкових полів форми', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.click('#loginButton');
    const error = await page.evaluate(() => document.querySelector(':invalid'));
    expect(error).not.toBeNull();
});

test('Перехід на додаткову сторінку about.html', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.click('#aboutLink');
    await expect(page).toHaveURL(/\/about\.html$/);
    await expect(page.locator('h1')).toHaveText('Сторінка опису проєкту');
});