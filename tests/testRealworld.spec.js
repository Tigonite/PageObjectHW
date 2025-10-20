import { test, expect } from '@playwright/test';
import {MainPage, LoginPage, ProfilePage, CreateArticlePage, GlobalFeedPage, ArticlePage, ChangeArticlePage} from '../src/pages/index';

const URL = 'https://realworld.qa.guru/'

test.describe('Тесты для сайта realworld', () => {

  test.beforeEach(async ({ page }) => {
  await page.goto(URL);
  const mainPage = new MainPage(page);
  const loginPage = new LoginPage(page);
  await mainPage.gotoLogin();
  await loginPage.activateEmail();
  await loginPage.fillEmail();
  await loginPage.activatePassword();
  await loginPage.fillPassword();
  await loginPage.pushLoginButton()
  await expect(page.getByRole('navigation')).toContainText('Pupka Vasin');//profile.page
});

test('Создание новой статьи', async ({ page }) => {
  const profilePage = new ProfilePage();
  const createArticlePage = new CreateArticlePage();
  await profilePage.newArticleLink();
  await createArticlePage.activateArticleTextbox();
  await createArticlePage.fillArticleTextbox();
  await createArticlePage.activateAnnounceTextbox();
  await createArticlePage.fillAnnounceTextbox();
  await createArticlePage.activateContentTextbox();
  await createArticlePage.fillContentTextbox();
  await createArticlePage.pushPublishButton();
  await expect(page.getByRole('heading')).toContainText('Тестовая статья 161025');
  await expect(page.getByRole('paragraph')).toContainText('Содержание тестовой статьи 161025');
});

test('Изменение созданной статьи', async ({ page }) => {
  const profilePage = new ProfilePage();
  const globalFeedPage = new GlobalFeedPage();
  const articlePage = new ArticlePage();
  const changeArticlePage = new ChangeArticlePage();
  await profilePage.pushGlobalFeedButton();
  await globalFeedPage.gotoMyArticleLink();
  await articlePage.gotoMyArticleLink();
  await changeArticlePage.activateArticleTextbox();
  await changeArticlePage.fillArticleTextbox();
  await changeArticlePage.activateAnnounceTextbox();
  await changeArticlePage.fillAnnounceTextbox();
  await changeArticlePage.activateContentTextbox();
  await changeArticlePage.fillContentTextbox();
  await changeArticlePage.pushChangeArticleButton();
  await expect(page.getByRole('heading')).toContainText('Тестовая статья 161025(изм)');
  await expect(page.getByRole('paragraph')).toContainText('Содержание тестовой статьи 161025(изм)');
});

test('Комментирование созданной статьи', async ({ page }) => {
  const profilePage = new ProfilePage();
  const globalFeedPage = new GlobalFeedPage();
  const articlePage = new ArticlePage();
  await profilePage.pushGlobalFeedButton();
  await globalFeedPage.gotoMyArticleLink();
  await articlePage.activateCommentTextbox();
  await articlePage.writeComment();
  await articlePage.pushPostButton();
});

test('Удаление измененной статьи', async ({ page }) => {
  const articlePage = new ArticlePage();
  await articlePage.pushDeleteButton();
  await page.getByRole('button', { name: 'Delete Article' }).nth(1).click();//article.page
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.getByRole('button', { name: ' Delete Article' }).nth(1).click();//article.page
  await page.getByRole('button', { name: 'Global Feed' }).click();//profile.page
  await expect(page.getByRole('main')).not.toContainText('Тестовая статья 161025(изм)');
  });

test('Разлогин из учетной записи', async ({ page }) => {
  await page.getByText('Pupka Vasin').click();//profile.page
  await page.getByRole('link', { name: ' Logout' }).click();
  await expect(page.getByRole('heading', { name: 'conduit' })).toContainText('conduit');
  await expect(page.locator('nav')).toContainText('Login');
});
})