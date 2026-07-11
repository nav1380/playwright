import { expect, test } from "../fixtures/fixtures";

test("Login To Orange HRM", async ({ page, OrangeHRM }) => {
  await OrangeHRM.loginToSite();

  await expect(page.getByText("Time at Work", { exact: true })).toBeVisible();
  await page.getByRole('link', { name: "Time", exact:true }).click()

  await expect(page.getByText('Punch In')).toBeVisible()
});
