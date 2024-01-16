import { test, expect } from "../fixtures";
import * as metamask from "@synthetixio/synpress/commands/metamask";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
});

test("connect wallet", async ({ page }) => {
  page.bringToFront();
  const button =  page.getByTitle("Connect Wallet")
  button.click();
  await metamask.acceptAccess();
});

