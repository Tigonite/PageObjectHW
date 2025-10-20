export class GlobalFeedPage{
    constructor(page){
        this.myArticleLink = page.getByRole('link', { name: 'Тестовая статья 161025' });
    };

    async gotoMyArticleLink(){
        this.myArticleLink.click();
    };
}