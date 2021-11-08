import { Task } from '@serenity-js/core';
import { Enter } from '@serenity-js/webdriverio';
import { SearchPage } from '../page-objects/SearchPage';


/**
 * This is called a "Task".
 * Use tasks to compose a sequence of one or more activities and give them domain meaning.
 */
 export const SearchForRestaurant = {
    
    called: (name: string) =>
        Task.where(`#actor search for restaurant called ${ name }`,
            Enter.theValue(name).into(SearchPage.inputSearch)
        ),
}