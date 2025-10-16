export class ProfilePage {
    constructor(page){
        this.newArticleLink = page.getByRole('link', { name: 'New Article' });

    }
}