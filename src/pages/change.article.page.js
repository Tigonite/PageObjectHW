export class ChangeArticlePage{
    constructor(page){
        this.articleTextbox = page.getByRole('textbox', { name: 'Article Title' })
        this.announceTextbox = page.getByRole('textbox', { name: 'What\'s this article about?' });
        this.contentTextbox = page.getByRole('textbox', { name: 'Write your article (in' });
        this.changeArticleButton = page.getByRole('button', { name: 'Update Article' });
    }

    async editArticlePage(article){
        const {header, announce, content} = article
        await this.articleTextbox.click();
        await this.articleTextbox.fill(header);
        await this.announceTextbox.click();
        await this.announceTextbox.fill(announce);
        await this.contentTextbox.click();
        await this.contentTextbox.fill(content);
        await this.changeArticleButton.click();
    };
}