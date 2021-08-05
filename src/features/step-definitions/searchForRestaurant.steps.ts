import { Before, Given, When, Then } from '@cucumber/cucumber';
import { engage } from '@serenity-js/core';
import { Actors } from '../support/screenplay/Actors';

import HomePage from '../support/screenplay/pageobjects/home.page';


const pages = {
    food: HomePage
}

Before(() => engage(new Actors()));

Given(/^(?:.*) is at the (\w+) app$/, async (page) => {
  //  await pages[page].open()
});


When(/^he wants to search for restaurant name (\w+)$/, async (name) => {
//  return actorCalled("Jan").attemptsTo()
    await HomePage.searchFor(name);
});


Then(/^he is able to see the result of his search$/, async () => {
   
});

