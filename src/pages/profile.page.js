export class ProfilePage {
    constructor(page){
        this.newArticleLink = page.getByRole('link', { name: 'New Article' });
        this.globalFeedButton = page.getByRole('button', { name: 'Global Feed' });
    }

    async gotoArticleLink(){
        this.newArticleLink.click();
    };
    async pushGlobalFeedButton(){
        this.globalFeedButton.click();
    };
    
}