import { test, expect } from '@playwright/test';

test.describe('Тесты для сайта realworld', () => {

  test.beforeEach(async ({ page }) => {
  await page.goto('https://realworld.qa.guru/');
  await page.getByRole('link', { name: ' Login' }).click();
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('PupkaV@mail.ru');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('1234567');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.getByRole('navigation')).toContainText('Pupka Vasin');
});

test('Создание новой статьи', async ({ page }) => {
  await page.getByRole('link', { name: 'New Article' }).click();
  await page.getByRole('textbox', { name: 'Article Title' }).click();
  await page.getByRole('textbox', { name: 'Article Title' }).fill('Тестовая статья 161025');
  await page.getByRole('textbox', { name: 'What\'s this article about?' }).click();
  await page.getByRole('textbox', { name: 'What\'s this article about?' }).fill('Просто тестовая статья 161025');
  await page.getByRole('textbox', { name: 'Write your article (in' }).click();
  await page.getByRole('textbox', { name: 'Write your article (in' }).fill('Содержание тестовой статьи 161025');
  await page.getByRole('button', { name: 'Publish Article' }).click();
  await expect(page.getByRole('heading')).toContainText('Тестовая статья 161025');
  await expect(page.getByRole('paragraph')).toContainText('Содержание тестовой статьи 161025');
});

test('Изменение созданной статьи', async ({ page }) => {
  await page.getByRole('button', { name: 'Global Feed' }).click();
  await page.getByRole('link', { name: 'Тестовая статья 161025' }).click();
  await page.getByRole('link', { name: 'Edit Article' }).nth(1).click();
  await page.getByRole('textbox', { name: 'Article Title' }).click();
  await page.getByRole('textbox', { name: 'Article Title' }).fill('Тестовая статья 161025(изм)');
  await page.getByRole('textbox', { name: 'What\'s this article about?' }).click();
  await page.getByRole('textbox', { name: 'What\'s this article about?' }).fill('Просто тестовая статья 161025(изм)');
  await page.getByRole('textbox', { name: 'Write your article (in' }).click();
  await page.getByRole('textbox', { name: 'Write your article (in' }).fill('Содержание тестовой статьи 161025(изм)');
  await page.getByRole('button', { name: 'Update Article' }).click();
  await expect(page.getByRole('heading')).toContainText('Тестовая статья 161025(изм)');
  await expect(page.getByRole('paragraph')).toContainText('Содержание тестовой статьи 161025(изм)');
});

test('Комментирование созданной статьи', async ({ page }) => {
  await page.getByRole('button', { name: 'Global Feed' }).click();
  await page.getByRole('link', { name: 'Тестовая статья 161025(изм)' }).click();
  await page.getByRole('textbox', { name: 'Write a comment...' }).click();
  await page.getByRole('textbox', { name: 'Write a comment...' }).fill('Ну и что, что это моя статья. Имею право комментить ');
  await page.getByRole('button', { name: 'Post Comment' }).click();
});

test('Удаление измененной статьи', async ({ page }) => {
  await page.getByRole('button', { name: ' Delete Article' }).nth(1).click();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: ' Delete Article' }).nth(1).click();
  await page.getByRole('button', { name: 'Global Feed' }).click();
  await expect(page.getByRole('main')).not.toContainText('Тестовая статья 161025(изм)');
  });

test('Разлогин из учетной записи', async ({ page }) => {
  await page.getByText('Pupka Vasin').click();
  await page.getByRole('link', { name: ' Logout' }).click();
  await expect(page.getByRole('heading', { name: 'conduit' })).toContainText('conduit');
  await expect(page.locator('nav')).toContainText('Login');
});
})