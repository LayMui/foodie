import { Task } from '@serenity-js/core';
import { Enter } from '@serenity-js/webdriverio';


/**
 * This is called a "Task".
 * Use tasks to compose a sequence of one or more activities and give them domain meaning.
 */
 export const SearchFor = {
    
    called: (name: string) =>
        Task.where(`#actor search for restuarant called ${ name }`,
          
        ),
}