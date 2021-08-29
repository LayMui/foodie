import 'expect-webdriverio';

import { Given, Then, When } from '@cucumber/cucumber';
import { Actor, actorInTheSpotlight } from '@serenity-js/core';
import { Navigate } from '@serenity-js/webdriverio';
import HomePage from '../page-objects/home.page';

const pages = {
    food: HomePage
}

Given(/^(.*) is at the (\w+) app$/, async (actor: Actor, page) => {
  //  await pages[page].open()
});


When(/^he wants to search for restaurant name (\w+)$/, async (name) => {
    await HomePage.searchFor(name);
});


Then(/^he is able to see the result of his search$/, async () => {
   
});

