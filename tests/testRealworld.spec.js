import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { MainPage,
         LoginPage,
         ProfilePage,
         CreateArticlePage,
         GlobalFeedPage,
         ArticlePage,
         ChangeArticlePage,
         RegisterPage 
} from '../src/pages/index';

const URL = 'https://realworld.qa.guru/';
  const user = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };

const article = {
    header: faker.book.title(),
    announce: faker.commerce.product(),
    content: faker.commerce.productDescription(),
    changedHeader: faker.book.title(),
    changedAnnounce: faker.commerce.product(),
    changedContent: faker.commerce.productDescription(),
  };

test.describe('Тесты для сайта realworld', () => {
  
  test.beforeEach(async ({ page }) => {
    await page.goto(URL);
  });

/*test('Регистрация', async ({ page }) => {
  const user = {
    name: faker.person.fullName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };

  const profilePage = new ProfilePage(page);
  const mainPage = new MainPage(page);
  const registerPage = new RegisterPage(page);
  await mainPage.gotoSignUp();
  await registerPage.register(user);
  await expect(profilePage.profileName).toContainText(user.name);
});*/

/*test('Разлогин из учетной записи', async ({ page }) => {
  const mainPage = new MainPage(page);
  const profilePage = new ProfilePage(page);
  const registerPage = new RegisterPage(page);
  await mainPage.gotoSignUp();
  await registerPage.register(user);
  await profilePage.clickProfileName();
  await profilePage.clickLogoutLink();
  await expect(mainPage.heading).toContainText('conduit');
  await expect(mainPage.loginLink).toBeVisible();
});*/

/*test('Логин пользователя на сайт', async({page}) => {
  const mainPage = new MainPage(page);
  const loginPage = new LoginPage(page);
  const profilePage = new ProfilePage(page);
  await mainPage.gotoLogin();
  await loginPage.login(user)
  await expect(profilePage.profileName).toContainText(user.name);
});*/

test('Создание новой статьи', async ({ page }) => {
  const profilePage = new ProfilePage(page);
  const createArticlePage = new CreateArticlePage(page);
  const mainPage = new MainPage(page);
  const registerPage = new RegisterPage(page);
  await mainPage.gotoSignUp();
  await registerPage.register(user);
  await profilePage.gotoArticleLink();
  await createArticlePage.createArticle(article);
  await expect(createArticlePage.articleHeading).toBeVisible();
});

/*test('Изменение созданной статьи', async ({ page }) => {
  //const article = {header: faker.book.title(), announce: faker.commerce.product(), content: faker.commerce.productDescription()};
  const profilePage = new ProfilePage();
  const globalFeedPage = new GlobalFeedPage();
  const articlePage = new ArticlePage();
  const changeArticlePage = new ChangeArticlePage();
  await profilePage.pushGlobalFeedButton();
  await globalFeedPage.gotoMyArticleLink();
  await articlePage.startEditArticle();
  await changeArticlePage.editArticlePage(article);
  await expect(createArticlePage.articleHeading).toContainText(article.changedHeader);
  await expect(createArticlePage.articleContent).toContainText(article.changedContent);
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
  const profilePage = new ProfilePage();
  const globalFeedPage = new GlobalFeedPage();
  await articlePage.pushDeleteButton();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await profilePage.pushGlobalFeedButton();
  await expect(globalFeedPage).not.toContainText(article.changedHeader);
  });*/

})
