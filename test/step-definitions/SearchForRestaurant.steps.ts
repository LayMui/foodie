import { Given, When, Then } from '@cucumber/cucumber';

import HomePage from '../page-objects/home.page';

import { Actor, actorCalled, actorInTheSpotlight, engage, Log } from '@serenity-js/core';
import {
  Actors
} from '../screenplay';

import {
  SearchFor
} from '../screenplay/tasks';

// const pages = {
//     food: HomePage
// }


Given(/^(?:.*) is at the (\w+) app$/, async (page) => {
  //  await pages[page].open()
});


When(/^he wants to search for restaurant name (\w+)$/, async (name) => {
 // return actorCalled("Jan").attemptsTo(SearchFor(name));
    await HomePage.searchFor(name);
});


Then(/^he is able to see the result of his search$/, async () => {
   
});

function Before(arg0: () => void) {
  throw new Error('Function not implemented.');
}

