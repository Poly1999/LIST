const { test, expect } = require('@playwright/test');

test.describe('TODO App', () => {
  test('user can create a new task', async ({ page }) => {
    await page.goto('/');

    await page.click('[aria-label="add-task"]');
    await page.fill('#input-field-name', 'Test task from Playwright');
    await page.selectOption('#modal-category', 'Personal');
    await page.selectOption('#modal-priority', '5');
    await page.click('button:has-text("Submit")');

    await expect(page.locator('text=Test task from Playwright')).toBeVisible();
  });

  test('user can mark a task as done', async ({ page }) => {
    await page.goto('/');

    await page.click('[aria-label="add-task"]');
    await page.fill('#input-field-name', 'Task to complete');
    await page.selectOption('#modal-category', 'Personal');
    await page.selectOption('#modal-priority', '3');
    await page.click('button:has-text("Submit")');

    const row = page.locator('tr', { hasText: 'Task to complete' });
    await row.locator('button').last().click();
    await page.click('text=Complete');

    await page.click('text=In Progress');
    await expect(page.locator('text=Task to complete')).not.toBeVisible();
  });

  test('user can filter tasks by category', async ({ page }) => {
    await page.goto('/');

    await page.click('[aria-label="add-task"]');
    await page.fill('#input-field-name', 'Shopping task');
    await page.selectOption('#modal-category', 'Shopping');
    await page.selectOption('#modal-priority', '7');
    await page.click('button:has-text("Submit")');

    await page.selectOption('#filter-category', 'Personal');
    await expect(page.locator('text=Shopping task')).not.toBeVisible();

    await page.selectOption('#filter-category', 'Shopping');
    await expect(page.locator('text=Shopping task')).toBeVisible();
  });
});
