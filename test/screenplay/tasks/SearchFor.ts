import { Task } from '@serenity-js/core';
import { Enter } from '@serenity-js/webdriverio';
import { HomePage } from 'test/page-objects';
//import { HomePage } from '../../page-objects';

export const SearchFor = {
    of: (name: string) => 
    Task.where(`#actor search for restaurant name ${name}`,
        Enter.theValue(name).into(HomePage.inputSearch))
}
