import { test, expect } from "../fixtures";
import * as metamask from "@synthetixio/synpress/commands/metamask";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("sign up", async ({ page }) => {
    page.bringToFront();
    await page.getByText("New to Voltran Funding? Sign Up Here").click();
    await page.getByLabel('Username').fill('Test');
    const password=  await page.$('#password')
    password?.fill('hallo1234');
    const confirmPassword=  await page.$('#confirmPassword')
    confirmPassword?.fill('hallo1234');
    const signUpButton = await page.$("#signUpButton");
    signUpButton?.click();
    await page.screenshot({ path: 'screenshot.png' });
  });

  test("log in",async({page})=> {
    page.bringToFront();
    await page.getByLabel('Username').fill('Test');
    const password=  await page.$('#password')
    password?.fill('hallo1234');  
    const signUpButton = await page.$("#logInButton");
    signUpButton?.click();
    await page.screenshot({ path: 'screenshot.png' });
  })

  test("login + connect wallet", async({page})=>{
    page.bringToFront();
    await page.getByLabel('Username').fill('Test');
    const password=  await page.$('#password')
    password?.fill('hallo1234');  
    const signUpButton = await page.$("#logInButton");
    signUpButton?.click();

    const button =  page.getByTitle("Connect Wallet")
    button.click();
    await metamask.acceptAccess();
  })

  test("connect wallet + login", async({page})=>{
    page.bringToFront();
    const button =  page.getByTitle("Connect Wallet")
    button.click();
    await metamask.acceptAccess();
    
    await page.getByLabel('Username').fill('Test');
    await page.getByPlaceholder("Password").fill("hallo1234");
    await page.getByRole('button', { name: 'Login' }).click();
  })