import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://atsuat.bbsi.com/login');
  await page.getByRole('textbox', { name: 'Email Address' }).click();
  await page.getByRole('textbox', { name: 'Email Address' }).fill('shresti.singh@bbsihq.com');
  await page.locator('vaadin-button').click();
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).click();
  await page.getByRole('textbox', { name: 'Enter your email, phone, or' }).fill('shresti.singh@bbsihq.com');
  await page.getByRole('button', { name: 'Next' }).click();
  await page.getByRole('textbox', { name: 'Enter the password for' }).click();
  await page.getByRole('textbox', { name: 'Enter the password for' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter the password for' }).fill('N');
  await page.getByRole('textbox', { name: 'Enter the password for' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Enter the password for' }).fill('Neelamdeepak@456');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByRole('button', { name: 'No' }).click();
  //await page.goto('https://atsuat.bbsi.com/dashboard');
  await page.waitForLoadState("networkidle")
  await expect(page.getByRole('heading', { name: 'Welcome Shresti' })).toBeVisible();
  await page.locator('span').nth(1).click();
  await page.getByRole('link', { name: 'Top Menu Icon Applicant List' }).click();
  await page.getByRole('button', { name: 'Bright, Ella' }).click();
  await expect(page.getByRole('combobox')).toContainText('AppliedInterview ScheduledNot SelectedOffer ExtendedOffer AcceptedOffer DeclinedOnboardingHired');
  await page.getByRole('heading', { name: 'Interview Scheduled' }).click();
  await page.getByRole('button', { name: '×' }).click();
});