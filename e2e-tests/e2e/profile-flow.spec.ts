import { expect } from '@playwright/test';

import { test } from "./test-setup";

test('test profile flow', async ({ welcomePage, profilePage, mapPage }) => {
    await welcomePage.goto();

    await welcomePage.openProfile();

    await profilePage.checkIsDisplayed();

    await profilePage.showOnMap();


    await mapPage.checkIsDisplayed();

    await mapPage.goBack();

    await profilePage.checkIsDisplayed();
});