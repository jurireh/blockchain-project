import { test, expect } from "../fixtures";
import * as metamask from "@synthetixio/synpress/commands/metamask";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("sign up + connect wallet + create campain", async ({ page }) => {
    page.bringToFront();
    await page.getByLabel('Username').fill('Test');
    const password=  await page.$('#password')
    password?.fill('hallo1234');  
    const signUpButton = await page.$("#logInButton");
    signUpButton?.click();

    const button =  page.getByTitle("Connect Wallet")
    button.click();
    await metamask.acceptAccess();

    await page.getByLabel('title').fill('Test Campain');
    await page.getByLabel('description').fill('Test description');
    await page.getByLabel('Goal').fill('0.8');
    await page.getByLabel('deadline').fill('2024-01-30');
    await page.getByRole('button', { name: 'Create Campaign' }).click();
    await page.screenshot({ path: 'screenshot.png' });
    await metamask.confirmTransaction();
  });

  test("sign up + connect wallet + donate", async ({ page }) => {
    page.bringToFront();
    await page.getByLabel('Username').fill('Test');
    const password=  await page.$('#password')
    password?.fill('hallo1234');  
    const signUpButton = await page.$("#logInButton");
    signUpButton?.click();

    const button =  page.getByTitle("Connect Wallet")
    button.click();
    await metamask.acceptAccess();

   const card =  await page.getByTitle("Test Campain").first().click();
  
    const amount = await page.$("#amount");
    amount?.fill("0.001");
    await page.getByRole('button', { name: 'Donate' }).click();
    await page.screenshot({ path: 'screenshot.png' });
    await metamask.confirmTransaction();
  });

  test("sign up + connect wallet + reject transaktion", async ({ page }) => {
    page.bringToFront();
    await page.getByLabel('Username').fill('Test');
    const password=  await page.$('#password')
    password?.fill('hallo1234');  
    const signUpButton = await page.$("#logInButton");
    signUpButton?.click();

    const button =  page.getByTitle("Connect Wallet")
    button.click();
    await metamask.acceptAccess();

   const card =  await page.getByTitle("Test Campain").first().click();
  
    const amount = await page.$("#amount");
    amount?.fill("0.001");
    await page.getByRole('button', { name: 'Donate' }).click();
    await page.screenshot({ path: 'screenshot.png' });
    await metamask.rejectTransaction();
  });

  test("sign up + connect wallet + create campain + reject transaktion", async ({ page }) => {
    page.bringToFront();
    await page.getByLabel('Username').fill('Test');
    const password=  await page.$('#password')
    password?.fill('hallo1234');  
    const signUpButton = await page.$("#logInButton");
    signUpButton?.click();

    const button =  page.getByTitle("Connect Wallet")
    button.click();
    await metamask.acceptAccess();

    await page.getByLabel('title').fill('Test Campain');
    await page.getByLabel('description').fill('Test description');
    await page.getByLabel('Goal').fill('0.8');
    await page.getByLabel('deadline').fill('2024-01-30');
    await page.getByRole('button', { name: 'Create Campaign' }).click();
    await page.screenshot({ path: 'screenshot.png' });
    await metamask.rejectTransaction();
  });

