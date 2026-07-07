import test, { expect } from "@playwright/test";
import { AutomationPlaygroundPage } from "../pages/AutomationPlayground/AutomationPlaygroundPage";

test("Auto", async ({ page }) => {

  const automationPlaygroundPage = new AutomationPlaygroundPage(page);
  await automationPlaygroundPage.goToPage()
  
  const formsPage = await automationPlaygroundPage.goToFormsPage()
  await formsPage.typeInExperience('2')

});
