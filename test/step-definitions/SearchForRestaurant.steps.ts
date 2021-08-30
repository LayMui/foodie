import 'expect-webdriverio';

import { Given, Then, When } from '@cucumber/cucumber';
import { Actor, actorCalled, actorInTheSpotlight } from '@serenity-js/core';
import { SearchFor } from '../tasks';


Given(/^(.*) is at the (\w+) app$/, async (actor: Actor, page) => {

});


When(/^(.*) wants to search for restaurant name (\w+)$/, async (actor: Actor, name) => {
  actor.attemptsTo(SearchFor.called(name));
//return  actorCalled("Jan").attemptsTo(SearchFor.called(name));
 //    await HomePage.searchFor(name);
     
});


Then(/^he is able to see the result of his search$/, async () => {
   
});

