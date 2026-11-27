import { test, expect } from '@playwright/test';

test('Перевірка змін сторінки за скриншотом', async ({ page }) => {
    await page.goto('http://localhost:3000');
    expect(await page.screenshot()).toMatchSnapshot('screenshots/local-page/index-page.png');
});

test('Порівняння скриншота елемента', async ({ page }) => {
    await page.goto('http://localhost:3000');
    const element = page.locator('h1');
    expect(await element.screenshot()).toMatchSnapshot('screenshots/local-page/index-page-element-h1.png');
});

test('Перевірка скриншота сторінки about.html', async ({ page }) => {
    await page.goto('http://localhost:3000/about.html');
    expect(await page.screenshot()).toMatchSnapshot('screenshots/local-page/about-page.png');
});