export class MainPage{
    constructor(page) {
        this.signupLink = page.getByRole('link', { name: 'Sign up' });
        this.profileNameDropdown = page.locator('div.nav-link.dropdown-toggle.cursor-pointer');
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
        this.newArticleLink = page.getByRole('link', { name: 'New Article' });
        this.globalFeedLink = page.getByRole('button', { name: 'Global Feed' });
        this.likeIcon = page.getByRole('button', { name: '( 1 )' }).first();
        this.likePlusOne = page.getByRole('button', { name: '( 2 )' }).first();
    }

    async gotoRegisterForm() {
        await this.signupLink.click();
    }

    async gotoNewArticleForm() {
        await this.newArticleLink.click();
    }

    async gotoGlobalFeed() {
        await this.globalFeedLink.click();
    }

    async clickLikeIcon() {
        await this.likeIcon.click();
    }

    async logout() {
        await this.profileNameDropdown.click();
        await this.logoutLink.click();
    }
}