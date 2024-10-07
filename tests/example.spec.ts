import { test, expect } from '@playwright/test';

test.describe('Front-end tests', () => {
    test('Test case 01', async ({ page }) => {
      // perform login
      await page.goto(`${process.env.BASE_URL}`);
      await expect(page.getByRole('link', { name: 'Tester Hotel' })).toBeVisible(); //assertion
      await page.locator('input[type="text"]').fill(`${process.env.TEST_USERNAME}`);
      await page.locator('input[type="password"]').fill(`${process.env.TEST_PASSWORD}`);
      await page.getByRole('button', { name: 'Login' }).click();
      //await expect(page.getByRole('heading', { name: 'Tester Hotel Overview' })).toBeVisible();
  
  
      // perform logout
     await page.getByRole('button', { name: 'Logout' }).click();
     await expect(page.url()).toBe('http://localhost:3000/login'); //assertion
     await expect(page.getByRole('link', { name: 'Tester Hotel' })).toBeVisible(); //assertion
    });
  });

test.describe('Backend tests', () => {
  test('Create a client', async ({ request }) => {
    const response = await request.post('http://localhost:3000/api/login', {
      data:{
        "username": `${process.env.TEST_USERNAME}`,
        "password": `${process.env.TEST_PASSWORD}`
      }      
    });
    expect (response.ok()).toBeTruthy();    
    // Include the rest of the code...
  });  
});

