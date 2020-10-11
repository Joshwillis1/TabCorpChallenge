import page from "../pageobjects/page";

class KenoHomePage extends page {
  /**
   * Defining page elements
   */
  get navBarKenoHeader()            { return $('//div[@class="navbar-header"]/div/a/img[contains(@alt, "Keno")]'); }
  get navBarRacingHeader()          { return $('//div[@class="navbar-header"]/div/a/img[contains(@alt, "Keno Racing")]'); }
  get navBarCheckResultsButton()    { return $('//ul[contains(@class, "nav navbar-nav navbar-left")]/li[2]'); }
  get navBarHowToWinButton()        { return $('//ul[contains(@class, "nav navbar-nav navbar-left")]/li[3]'); }
  get navBarFindVenueButton()       { return $('//ul[contains(@class, "nav navbar-nav navbar-left")]/li[4]'); }
  get swapKenoButton()              { return $('//ul[contains(@class, "nav navbar-nav navbar-right")]'); }

  /**
   *  Page specific methods
   */

  waitForPageToLoad() {
    if (!this.navBarKenoHeader.isClickable()) {
      this.navBarKenoHeader.waitForClickable({timeout: 10000});
    }
  }
}

export default new KenoHomePage()