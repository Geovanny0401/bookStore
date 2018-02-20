import { BookstoreFrontPage } from './app.po';

describe('bookstore-front App', () => {
  let page: BookstoreFrontPage;

  beforeEach(() => {
    page = new BookstoreFrontPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to bs!!'))
      .then(done, done.fail);
  });
});
