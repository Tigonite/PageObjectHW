export class GlobalFeedPage{
    constructor(page){
        this.myArticleLink = page.getByRole('link', { name: 'Тестовая статья 161025' });
        this.feed = page.getByRole('main');
    };

    async gotoMyArticleLink(){
        await this.myArticleLink.click();
    };
}