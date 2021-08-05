import { Given, When, Then } from '@cucumber/cucumber';

import HomePage from '../pageobjects/home.page';


const pages = {
    food: HomePage
}


Given(/^(?:.*) is at the (\w+) app$/, async (page) => {
  //  await pages[page].open()
});


When(/^he wants to search for restaurant name (\w+)$/, async (name) => {
    await HomePage.searchFor(name);
});


Then(/^he is able to see the result of his search$/, async () => {
   
});

