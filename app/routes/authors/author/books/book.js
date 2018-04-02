import Route from '@ember/routing/route';


export default Route.extend({
    /*model({ id }) {
        const books = this.modelFor('books').books;
        const book = books.findBy('id', id);


        if (!book) {
            this.transitionTo('books');
        } else {
            return {
                datePublished: book.date_published,
                title: book.title,
                author: book.author,
                chapters:book.chapter,
            };
        }
    }*/
});
