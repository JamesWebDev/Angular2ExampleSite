import { AngularCliWebsitePage } from './app.po';

describe('angular-cli-website App', function() {
  let page: AngularCliWebsitePage;

  beforeEach(() => {
    page = new AngularCliWebsitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
