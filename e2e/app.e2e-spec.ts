import { SestarspdxPage } from './app.po';

describe('sestarspdx App', function() {
  let page: SestarspdxPage;

  beforeEach(() => {
    page = new SestarspdxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
