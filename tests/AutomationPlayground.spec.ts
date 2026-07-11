import { AutomationPlaygroundPage } from "../pages/AutomationPlayground/AutomationPlaygroundPage";
import { test } from "../fixtures/fixtures";

// test("Auto", async ({ page }) => {
//   const automationPlaygroundPage = new AutomationPlaygroundPage(page);
//   await automationPlaygroundPage.goToPage();

//   const formsPage = await automationPlaygroundPage.goToFormsPage();
//   await formsPage.typeInExperience("2");
//   await expect(formsPage.getExpVal()).toBeVisible()
//   await expect(formsPage.getExpVal()).toContainText("2");

//   await formsPage.chooseInSkill("Cypress");
//   await expect(page.locator('[id="select_tool_validate"]')).toContainText(
//     "cyp",
//   );

//   await formsPage.chooseLanguage("typescript");
//   await expect(page.locator('[id="select_lang_validate"]')).toContainText(
//     "typescript",
//   );

//   const word: string = "These are my notes";
//   await formsPage.typeInNotes(word);
//   await expect(page.locator('[id="area_notes_validate"]')).toContainText(word);

//   await expect(formsPage.getReadOnly()).toHaveAttribute('readonly', '')

//   await formsPage.chooseInCheckbox('java')
//   await formsPage.chooseInCheckbox('python')
// });

// test("Mouse Actions", async ({ homePage }) => {
//   homePage.goToFormsPage()
  
//   // await page.locator('#click_area').dblclick()

// });
