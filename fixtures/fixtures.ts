import { test as base } from '@playwright/test'
import { PracticeAutomationPage } from '../pages/PracticeAutomation/PracticeAutomationPage';
import { LoginPage } from '../pages/SwagLabs/LoginPage';
import { LandingPage } from '../pages/OrangeHRM/LandingPage';

type MyFixtures = {
    PracticeAutomation : PracticeAutomationPage;
    SwagLabs : LoginPage;
    OrangeHRM : LandingPage;
}

export const test = base.extend<MyFixtures>({
    PracticeAutomation: async ({page}, use) => {
        await use(new PracticeAutomationPage(page));
    },
    SwagLabs: async ({page}, use) => {
        await use(new LoginPage(page));
    },
    OrangeHRM: async ({page}, use) => {
        const orangeHRM = new LandingPage(page);
        orangeHRM.goToSite()

        await use(orangeHRM)
    }
})

export { expect } from '@playwright/test'