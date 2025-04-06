import {By, Builder, Browser, Key} from "selenium-webdriver";
import { expect } from "chai";

const productName = "Nike react infinity run flyknit";



async function testRun() {

    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().window().maximize();
    await driver.get("https://demo.evershop.io/");
    await driver.findElement(By.className('search-icon')).click();
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(productName, Key.ENTER);
   // await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(Key.ENTER);
    const actualValue= await driver.findElement(By.xpath ("(// a[@href='/nike-react-infinity-run-flyknit-171'])[2]")).getText();
    expect(productName).to.eql(actualValue); 
    await driver.sleep(5000);
    await driver.quit();
    
}

testRun();