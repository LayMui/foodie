import { Task } from '@serenity-js/core';
import { Enter } from '@serenity-js/webdriverio';
import { Task } from '@serenity-js/core';
import { HomePage } from '../pageobjects';

export const SearchFor = {
    of: (name: string) => 
    Task.where(`#actor search for restaurant name ${name}`,
        Enter.theValue(name).into(HomePage.inputSearch))
}
