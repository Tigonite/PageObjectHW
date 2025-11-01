export class ArticlePage {
    constructor(page) {
        this.articleTitle = page.getByRole('textbox', { name: 'Article Title' });
        this.articleAbout = page.getByRole('textbox', { name: 'What\'s this article about?' });
        this.articleContent = page.getByRole('textbox', { name: 'Write your article (in markdown)' });
        this.publishButton = page.getByRole('button', { name: 'Publish Article' });
        this.articleHeading = page.getByRole('main');
    }

    async fillArticleForm(article) {
        const {title, about, content} = article;
        await this.articleTitle.click();
        await this.articleTitle.fill(title);
        await this.articleAbout.click();
        await this.articleAbout.fill(about);
        await this.articleContent.click();
        await this.articleContent.fill(content);
        await this.publishButton.click();
    }

    async clickPublishButton() {
        await this.publishButton.click();
    }
}