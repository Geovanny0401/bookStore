import { browser, by, element } from 'protractor';

export class BookstoreFrontPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('bs-root h1')).getText();
  }
}
