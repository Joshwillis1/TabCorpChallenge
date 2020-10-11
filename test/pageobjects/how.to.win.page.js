import page from "../pageobjects/page";

class HowToWinPage extends page {
  /**
   * Defining page elements
   */
  get howToWinModal()               { return $('//div[contains(@class, "how-to-win-info")]'); }
  get viewGameGuideButton()         { return $('//div[contains(@class, "game-guide classic")]'); }
  get skipIntroButton()             { return $('//div[contains(@class, "skip-intro classic")]'); }
  get rightArrowButton()            { return $('//div[@class="right-arrow"]'); }
  get leftArrowButton()             { return $('//div[@class="left-arrow"]'); }
  get closeModalButton()            { return $('//button[@data-id="how-to-win-close-btn"]'); }

  /**
   *  Page specific methods
   */

  waitForModal() {
    if (!this.howToWinModal.isDisplayed()) {
      this.navBarHeader.waitForDisplayed({timeout: 10000});
    }
  }

  waitForIntro() {
    if (this.skipIntroButton.isDisplayed()) {
      this.viewGameGuideButton.waitForDisplayed({timeout: 40000});
      browser.pause(500);
    }
  }

}


export default new HowToWinPage()