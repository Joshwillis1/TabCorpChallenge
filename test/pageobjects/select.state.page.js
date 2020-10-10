import page from "../pageobjects/page";

class SelectStatePage extends page {
  /**
   * Defining page elements
   */
  get stateDropDown()         { return $('/html/body/div[5]/div/div/div/jurisdiction-dropdown/div/button'); }
  get stateDropDownQLD()      { return $('/html/body/div[5]/div/div/div/jurisdiction-dropdown/div/ul/li[3]/a'); }
  get kenoLogo()              { return $('//img[@class="logo-keno-lets-play"]'); }

  /**
   *  Page specific methods
   */

  open() {
    super.open('keno.com.au')
  }

  waitForPageToLoad() {
    if (!this.stateDropDown.isClickable()) {
      this.stateDropDown.waitForClickable({timeout: 10000});
    }
  }
}


export default new SelectStatePage()