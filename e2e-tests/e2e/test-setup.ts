import {Page, test as base, expect} from "@playwright/test";

export class WelcomePage {
    constructor(private readonly page: Page) {
    }

    public async goto(): Promise<void> {
        await this.page.goto('http://localhost:5173/');
    }

    public async openProfile(): Promise<void> {
        await this.page.getByRole('link', { name: 'Your profile' }).click();
    }
}

export class ProfilePage {
    constructor(private readonly page: Page) {
    }

    public async checkIsDisplayed(): Promise<void> {
        await expect(this.page.locator('.name')).toBeVisible();
        await expect((await this.page.locator('.name').textContent()).length).toBeGreaterThan(0);

    }

    public async showOnMap(): Promise<void> {
        await this.page.getByText('Show on map').click();
    }
}

export class MapPage {
    constructor(private readonly page: Page) {
    }

    public async checkIsDisplayed(): Promise<void> {
        await expect(this.page.locator('iframe')).toBeVisible();
    }

    public async goBack(): Promise<void> {
        await this.page.getByRole('link', { name: 'Back' }).click();
    }
}





type MyFixtures = {
    welcomePage: WelcomePage,
    profilePage: ProfilePage,
    mapPage: MapPage,
}

export const test = base.extend<MyFixtures>({
    welcomePage: async({page}, use) => {
        const listPage = new WelcomePage(page);
        use(listPage)
    },
    profilePage: async({page}, use) => {
        const detailPage = new ProfilePage(page);
        use(detailPage)
    },
    mapPage: async({page}, use) => {
        const mapPage = new MapPage(page);
        use(mapPage);
    }
})
