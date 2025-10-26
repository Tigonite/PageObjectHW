export class ArticlePage{
    constructor(page){
        this.articleEditLink = page.getByRole('link', { name: 'Edit Article' }).nth(1);
        this.commentTextbox = page.getByRole('textbox', { name: 'Write a comment...' });
        this.postButton = page.getByRole('button', { name: 'Post Comment' });
        this.deleteButton = page.getByRole('button', { name: 'Delete Article' }).nth(1);
    };

    async startEditArticle(){
        await this.articleEditLink.click();
    };
    async writeComment(){
        await this.commentTextbox.click();
        await this.commentTextbox.fill();
        await this.postButton.click();
    };

    async pushDeleteButton(){
        await this.deleteButton.click();
    };
}