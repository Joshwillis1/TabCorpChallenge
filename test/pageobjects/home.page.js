import page from "../pageobjects/page";

class HomePage extends page {
  /**
   * Defining page elements
   */
  get navBarHeader()          { return $('//div[@class="navbar-header"]'); }

  /**
   *  Page specific methods
   */

  waitForPageToLoad() {
    if (!this.navBarHeader.isClickable()) {
      this.navBarHeader.waitForClickable({timeout: 10000});
    }
  }
}


export default new HomePage()