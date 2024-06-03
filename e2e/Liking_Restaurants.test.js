/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('#query');
  I.see('Tidak ada restaurant untuk ditampilkan', '.post-item__not__found');
});

Scenario('liking one restaurant', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.post-item__not__found');

  I.amOnPage('/');
  I.waitForElement('.post-item');

  I.seeElement('.post-item_name a');
  const firstRestaurant = locate('.post-item_name a').first();
  const firstRestaurantTitle = (await I.grabTextFrom(firstRestaurant)).trim();
  I.click(firstRestaurant);

  I.waitForElement('#likeButton');
  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.waitForElement('.post-item'); // Ensure that the element is present before grabbing text
  const likedRestaurantTitle = (await I.grabTextFrom('.post-item_name a')).trim();

  assert.strictEqual(firstRestaurantTitle, likedRestaurantTitle);
});

Scenario('searching restaurants', async ({ I }) => {
  I.see('Tidak ada restaurant untuk ditampilkan', '.post-item__not__found');

  I.amOnPage('/');
  I.waitForElement('.post-item');

  I.seeElement('.post-item_name a');

  const titles = [];

  for (let i = 1; i <= 3; i++) {
    I.click(locate('.post-item_name a').at(i));

    I.waitForElement('#likeButton');
    I.seeElement('#likeButton');
    I.click('#likeButton');

    titles.push((await I.grabTextFrom('.resto-info_name')).trim());

    I.amOnPage('/');
    I.waitForElement('.post-item'); // Ensure that the element is present before continuing
  }

  I.amOnPage('/#/like');
  I.waitForElement('#query');

  const visibleLikedRestaurants = await I.grabNumberOfVisibleElements('.post-item');
  assert.strictEqual(titles.length, visibleLikedRestaurants);

  const searchQuery = titles[1].substring(1, 3);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  const matchingRestaurants = titles.filter((name) => name.indexOf(searchQuery) !== -1);
  const visibleSearchedLikedRestaurants = await I.grabNumberOfVisibleElements('.post-item');

  assert.strictEqual(matchingRestaurants.length, visibleSearchedLikedRestaurants);

  for (let i = 0; i < matchingRestaurants.length; i++) {
    const visibleTitle = (await I.grabTextFrom(locate('.post-item_name').at(i + 1))).trim();

    assert.strictEqual(matchingRestaurants[i], visibleTitle);
  }
});
