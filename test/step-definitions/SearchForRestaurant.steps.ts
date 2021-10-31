import 'expect-webdriverio';

import { Given, Then, When } from '@cucumber/cucumber';
import { Actor, actorCalled, actorInTheSpotlight } from '@serenity-js/core';
import { SearchForRestaurant } from '../tasks';

import HomePage from '../page-objects/home.page';


const pages = {
    food: HomePage
}

Given(/^(.*) is at the (\w+) app$/, async (actor: Actor, page) => {

});


When(/^(?:.*) wants to search for restaurant name (\w+)$/, async (name) => {
 // actor.attemptsTo(SearchForRestaurant.called(name));
//return  actorCalled("Jan").attemptsTo(SearchFor.called(name));
    await HomePage.searchFor(name);
     
});


Then(/^he is able to see the result of his search$/, async () => {
   
});

