import { by, Target } from '@serenity-js/webdriverio';

export class HomePage {
    static inputSearch = Target.the('search bar input').located(by.id('search_bar'));
}
