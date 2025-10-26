export class ProfilePage {
    constructor(page){
        this.profileName = page.locator('div.nav-link.dropdown-toggle.cursor-pointer');
        this.newArticleLink = page.getByRole('link', { name: 'New Article' });
        this.globalFeedButton = page.getByRole('button', { name: 'Global Feed' });
        this.logoutLink = page.getByRole('link', { name: 'Logout' });
    }

    async gotoArticleLink(){
        await this.newArticleLink.click();
    };
    async pushGlobalFeedButton(){
        await this.globalFeedButton.click();
    };
    async clickProfileName(){
        await this.profileName.click();
    };
    async clickLogoutLink(){
        await this.logoutLink.click();
    };
}