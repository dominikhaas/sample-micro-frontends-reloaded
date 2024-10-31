import { test, expect } from '@playwright/test';

test('test profile flow', async ({ page }) => {
    await page.goto('http://localhost:5173/');
    await page.getByRole('link', { name: 'Your profile' }).click();

    await expect(page.locator('.name')).toBeVisible();
    await expect((await page.locator('.name').textContent()).length).toBeGreaterThan(0);

    await page.getByText('Show on map').click();

    await expect(page.locator('iframe')).toBeVisible();

    await page.getByRole('link', { name: 'Back' }).click();

    await expect(page.locator('.name')).toBeVisible();
    await expect((await page.locator('.name').textContent()).length).toBeGreaterThan(0);
});