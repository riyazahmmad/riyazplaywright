import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://hrms.indianrail.gov.in/HRMS');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('RIYAz');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('tasmiya@1234');
  await page.getByRole('textbox', { name: 'captcha' }).click();
  await page.getByRole('textbox', { name: 'captcha' }).fill('n3e36');
  await page.getByRole('button', { name: 'Login' }).click();
});