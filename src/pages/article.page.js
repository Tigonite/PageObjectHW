export class ArticlePage{
    constructor(page){
        this.articleEditLink = page.getByRole('link', { name: 'Edit Article' }).nth(1);
        this.commentTextbox = page.getByRole('textbox', { name: 'Write a comment...' });
        this.postButton = page.getByRole('button', { name: 'Post Comment' });
        this.deleteButton = page.getByRole('button', { name: 'Delete Article' }).nth(1);
    };

async editArticle(){
        this.articleEditLink.click();
    };
async activateCommentTextbox(){
        this.commentTextbox.click();
    };
async writeComment(){
        this.commentTextbox.fill();
    };
async pushPostButton(){
        this.postButton.click();
};
async pushDeleteButton(){
        this.deleteButton.click();
};
}