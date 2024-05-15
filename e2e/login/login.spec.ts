import { test, expect } from '@playwright/test';
import { Login } from './Login';


test.describe("Login", () => {

  test('Login Successful', async ({ page }) => {

    const loginResponse =  Login(page);

    await expect(page.getByRole('link', { name: 'Dashboard' })).toBeVisible();
    await loginResponse;
  });

  test('Login Failed', async ({ page }) => {
    await page.goto('https://beta.elogicgenesis.com/login');
    await page.getByLabel('Email').fill('BAdLoging@mail.com');
    await page.getByLabel('Email').press('Tab');
    await page.getByLabel('Password').fill('Thisisnotapassword');
    await page.getByRole('button', { name: 'Login' }).click();
    const loginResponse = page.waitForResponse('**/api/user/auth');
    await expect(page.getByRole('paragraph')).toContainText('Username or password not recognized.');
    await loginResponse;
  });

});




