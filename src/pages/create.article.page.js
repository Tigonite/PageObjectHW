export class CreateArticlePage{
    constructor(page){
        this.articleTextbox = page.getByRole('textbox', { name: 'Article Title' });
        this.announceTextbox = page.getByRole('textbox', { name: 'What\'s this article about?' });
        this.contentTextbox = page.getByRole('textbox', { name: 'Write your article (in' });
        this.publishButton = page.getByRole('button', { name: 'Publish Article' });
    }
}