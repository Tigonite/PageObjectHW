export class ChangeArticlePage{
    constructor(page){
        this.articleTextbox = page.getByRole('textbox', { name: 'Article Title' })
        this.announceTextbox = page.getByRole('textbox', { name: 'What\'s this article about?' });
        this.contentTextbox = page.getByRole('textbox', { name: 'Write your article (in' });
        this.changeArticleButton = page.getByRole('button', { name: 'Update Article' });
    }

    async activateArticleTextbox(){
        this.articleTextbox.click();
    };
    async fillArticleTextbox(){
        this.articleTextbox.fill();
    };
    async activateAnnounceTextbox(){
        this.announceTextbox.click();
    };
    async fillAnnounceTextbox(){
        this.announceTextbox.fill();
    };
    async activateContentTextbox(){
        this.contentTextbox.click();
    };
    async fillContentTextbox(){
        this.contentTextbox.fill();
    };
    async pushChangeArticleButton(){
        this.changeArticleButton.click();
    };
}