import { By, Builder, Browser, Key } from "selenium-webdriver";
import { expect } from "chai";

const productName = "Nike react infinity run flyknit";

async function testRun() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().window().maximize();

    try {
        await driver.get("https://demo.evershop.io/");
        await driver.findElement(By.className("search-icon")).click();
        await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(productName, Key.ENTER);
        //await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(productName, Key.ENTER);
        //const actualValue = await driver.findElement(By.xpath("(//a[contains(@href,'/nike-react-infinity-run-flyknit')])[2]")).getText();
        console.log("Actual Value:", actualValue);

        expect(productName).to.contain(actualValue);
    } catch (error) {
        console.error("Test failed:", error.message);
        
        // ✅ Quit the browser first
        await driver.quit();

        // ✅ Forcefully exit the script immediately
        process.exit(1);
    }

    // ✅ If no failure, ensure the browser is closed properly
    await driver.quit();
}

testRun();
