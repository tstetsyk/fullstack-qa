const { test, expect } = require('@playwright/test');
const fsPromises = require('fs/promises');

test('Buttons', async ({ page }) => {
  await page.goto('/add_remove_elements/');
  await page.getByRole('button', { name: 'Add Element' }).click();
  await page.getByRole('button', { name: 'Delete' }).click();
});

test('Checkboxes', async ({ page }) => {
  await page.goto('/checkboxes');
  await page.getByRole('checkbox').first().check();
  await page.getByRole('checkbox').last().uncheck();
});

test('Dropdown', async ({ page }) => {
  await page.goto('/dropdown');
  await page.locator('#dropdown').selectOption('2');
  await expect(page.getByRole('option', { name: 'Option 2' })).toHaveAttribute("selected", "selected");
});

test('Input', async ({ page }) => {
  await page.goto('/inputs');
  await page.locator('input[type=number]').fill('50');
  await expect(page.locator('input[type=number]')).toHaveValue('50');
});

test('Login Form', async ({ page }) => {
  await page.goto('/login');
  await page.locator('#username').fill('tomsmith');
  await page.locator('#password').fill('SuperSecretPassword!');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('#flash')).toContainText('You logged into a secure area!');
});

test('Upload/Download file', async ({ page }) => {
  await page.goto('/upload');
  await page.locator('#file-upload').setInputFiles('tests/upload-files/testfile.txt');
  await page.locator('#file-submit').click();
  await expect(page.locator('h3')).toHaveText('File Uploaded!');

  await page.goto('/download');
  const downloadPromise = page.waitForEvent('download');
  await page.getByText("testfile.txt").click();
  const download = await downloadPromise;
  await download.saveAs('tests/download-files/' + download.suggestedFilename());
  expect(await fsPromises.readdir("tests/download-files")).toContain('testfile.txt');
  await fsPromises.rm('tests/download-files/testfile.txt'); 
});