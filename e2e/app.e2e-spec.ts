import { RestrxPage } from './app.po';

describe('restrx App', () => {
  let page: RestrxPage;

  beforeEach(() => {
    page = new RestrxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
