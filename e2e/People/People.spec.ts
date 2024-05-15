import { test, expect } from '@playwright/test';
import { Login } from '../login/Login';


test.describe("People", () => {

test('View Person', async ({ page }) => {
  var loginResponse = Login(page);
  await loginResponse
  await page.locator('footer').filter({ hasText: 'ViewClient1078' }).getByRole('link').click();
  const getPeopleResponse = page.waitForResponse('**/api/person/getPeople', { timeout: 40000});
  await expect(page.getByRole('article')).toContainText('Carmen Morales');
  
  await getPeopleResponse;

});



});