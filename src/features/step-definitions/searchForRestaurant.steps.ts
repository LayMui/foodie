import { Before, Given, When, Then } from '@cucumber/cucumber';

import { Actor, actorCalled, actorInTheSpotlight, engage, Log } from '@serenity-js/core';
import {
  Actors, SearchFor
} from '../support/screenplay';


Before(() => engage(new Actors()));

Given(/^(?:.*) is at the (\w+) app$/, async (page) => {
});


When(/^he wants to search for restaurant name (\w+)$/, async (name) => {
  return actorCalled("Jan").attemptsTo(SearchFor(name));
   // await HomePage.searchFor(name);
});


Then(/^he is able to see the result of his search$/, async () => {
   
});

