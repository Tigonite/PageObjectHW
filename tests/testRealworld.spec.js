import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { 
  ArticlePage,
    MainPage,
    RegisterPage
} from '../src/pages/index';

const URL = 'https://realworld.qa.guru/';

test.describe('Тесты для сайта realworld.qa', () => {
    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });

    test('Разлогин из профиля пользователя', async({page}) => {
        const user = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        };
        const mainPage = new MainPage(page);
        const registerPage = new RegisterPage(page);
        await mainPage.gotoRegisterForm();
        await registerPage.fillRegisterForm(user);
        await mainPage.logout();
        await expect(mainPage.signupLink).toBeVisible();
  });
    
    test('Создание новой статьи', async({page}) => {
        const user = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        };
        const article = {
            title: faker.book.title(),
            about: faker.company.catchPhrase(),
            content: faker.commerce.productDescription(),
        };
        const mainPage = new MainPage(page);
        const registerPage = new RegisterPage(page);
        const articlePage = new ArticlePage(page);
        await mainPage.gotoRegisterForm();
        await registerPage.fillRegisterForm(user);
        await mainPage.gotoNewArticleForm();
        await articlePage.fillArticleForm(article);
        await expect(articlePage.articleHeading).toContainText(article.title);
    });

    test('Лайк статьи из списка', async({page}) => {
        const user = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        };
        const mainPage = new MainPage(page);
        const registerPage = new RegisterPage(page);
        await mainPage.gotoRegisterForm();
        await registerPage.fillRegisterForm(user);
        await mainPage.gotoGlobalFeed();
        await mainPage.clickLikeIcon();
        await expect(mainPage.likePlusOne).toBeVisible();
    });

    test('Отзыв лайка статьи из списка', async({page}) => {
        const user = {
            name: faker.person.fullName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
        };
        const mainPage = new MainPage(page);
        const registerPage = new RegisterPage(page);
        await mainPage.gotoRegisterForm();
        await registerPage.fillRegisterForm(user);
        await mainPage.gotoGlobalFeed();
        await mainPage.clickLikeIcon();
        await mainPage.clickLikeIcon();
        await expect(mainPage.likePlusOne).not.toBeVisible();
    });
});