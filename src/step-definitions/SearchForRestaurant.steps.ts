import 'expect-webdriverio';

import { Given, Then, When } from '@cucumber/cucumber';
import { Actor, actorCalled, actorInTheSpotlight } from '@serenity-js/core';
import { SearchForRestaurant } from '../tasks';

import HomePage from '../page-objects/home.page';


const pages = {
    food: HomePage
}

Given('{actor} is at the food app', async (actor: Actor) => {

});


When('{pronoun} wants to search for restaurant name {string}', async (actor: Actor, name:string) => {
 await actor.attemptsTo(SearchForRestaurant.called(name));
//return  actorCalled("Jan").attemptsTo(SearchFor.called(name));
   // await HomePage.searchFor(name);
     
});


Then(/^he is able to see the result of his search$/, async () => {
   
});

