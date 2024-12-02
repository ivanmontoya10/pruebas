import { test, expect, chromium } from '@playwright/test';
import { log } from 'console';
import exp from 'constants';

// test('has title', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/Playwright/);
// });

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
// //npx playwright


// test('search click', async ({ page }) => {
//   await page.goto('https://www.youtube.com/');

//   // Expect a title "to contain" a substring.
//   await expect(page).toHaveTitle(/YouTube/);
//   // await page.waitForLoadState('networkidle')
//   // const emailLink= page.locator('a[href*="https://login.microsoftonline.com/?whr=tecnm.mx"][title="Correo Institucional"]')
//   // await expect(emailLink).toBeVisible();
//   // const [newPage]= await Promise.all([
//   //   page.waitForEvent('popup'),
//   //   emailLink.click()
//   // ])  
//   // await expect(newPage).toHaveURL(/.*login\.microsoftonline\.com/);
//   await page.pause()
// });

  // //create new account
  // const createAccount = page.locator('a[id="createAccountSubmit"]');
  // await expect(createAccount).toBeVisible();
  // await createAccount.click();

  // //input name, last name
  // const nameInput = page.locator('input[id="ap_customer_name"]');
  // await expect(nameInput).toBeVisible();
  // await nameInput.fill("Elizabeth Romo");

  // //input email
  // const emailInput = page.locator('input[id="ap_email"]');
  // await expect(emailInput).toBeVisible();
  // await emailInput.fill("romoelizabetharagon@gmail.com");

  

  // //confirm password
  // const confirmPass = page.locator('input[id="ap_password_check"]');
  // await expect(confirmPass).toBeVisible();
  // await confirmPass.fill("MegustalamusicaRock#");

  // //create
  // const createButton = page.locator('input[id="continue"]');
  // await expect(createButton).toBeVisible();
  // await createButton.click();


  
  // await expect(page).toHaveTitle(/Amazon.com.mx: Precios bajos - Envío rápido - Millones de productos/);
  // const searchInput = page.locator("input[id='twotabsearchtextbox']");
  // await expect(searchInput).toBeVisible();
  // await searchInput.fill("xbox");
  // await page.keyboard.press('Enter');
  // await expect(page).toHaveTitle(/Amazon.com.mx : xbox/);
  // await expect(page.locator("span[class='a-color-state a-text-bold']")).toContainText("xbox");
  // await expect(page.locator("h2[class='a-size-medium-plus a-spacing-none a-color-base a-text-bold']")).toContainText("Resultados");
  // await expect(page.locator("div[class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1']")).toBeVisible();
  // const first = page.locator("div[class='s-widget-container s-spacing-small s-widget-container-height-small celwidget slot=MAIN template=SEARCH_RESULTS widgetId=search-results_1']");
  // await expect(first).toBeVisible();
  // await first.waitFor({ state: 'visible' });
  // await expect(first.locator("span[class='a-size-base-plus a-color-base a-text-normal']")).toHaveText("Xbox Consola Series S digital de 512 GB - Robot White - Nacional Edition");
  // await first.locator("span[class='a-size-base-plus a-color-base a-text-normal']").click();
  // const button = page.locator("input[id='add-to-cart-button']");
  // await button.click();
  // await page.pause();

const fs = require('fs');

test('InicioSesion', async({ page })=>{
  //Go to page
  await page.goto('https://mx.puma.com/');

  //loggin
  const loginButton = page.locator('button[id="myAccount"]');
  await expect(loginButton).toBeVisible();
  await loginButton.click();

  const login = page.locator('a[class=" Button-Primary Button-Primary_color_brown Link-Login"]');
  await expect(login).toBeVisible();
  await login.click();

  const inputloginEmail = page.locator('input[id="sign-email"]');
  await expect(inputloginEmail).toBeVisible();
  await inputloginEmail.fill("rijaca3623@kimasoft.com");

  const confirmloginEmail = page.locator('input[id="sign-confirm-email"]');
  await expect(confirmloginEmail).toBeVisible();
  await confirmloginEmail.fill("rijaca3623@kimasoft.com");
  
  //input password
  const passwordInput = page.locator('input[id="password"]');
  await expect(passwordInput).toBeVisible();
  await passwordInput.fill("ivanmacias12342!");

  const loginAccess = page.locator('button[class="Button-Primary Button-Primary_withArrow"]');
  await expect(loginAccess).toBeVisible();
  await loginAccess.click();

  //save cookies
  const cookies = await page.context().cookies();
  await fs.promises.writeFile('cookies.json', JSON.stringify(cookies));

  await page.pause();
  
});

test('InicioSesionIncorrecto', async({ page })=>{
  //Go to page
  await page.goto('https://mx.puma.com/');

  //loggin
  const loginButton = page.locator('button[id="myAccount"]');
  await expect(loginButton).toBeVisible();
  await loginButton.click();

  const login = page.locator('a[class=" Button-Primary Button-Primary_color_brown Link-Login"]');
  await expect(login).toBeVisible();
  await login.click();

  const inputloginEmail = page.locator('input[id="sign-email"]');
  await expect(inputloginEmail).toBeVisible();
  await inputloginEmail.fill("rebecaraygoza@kimasoft.com");

  const confirmloginEmail = page.locator('input[id="sign-confirm-email"]');
  await expect(confirmloginEmail).toBeVisible();
  await confirmloginEmail.fill("rebecaraygoza@kimasoft.com");
  
  //input password
  const passwordInput = page.locator('input[id="password"]');
  await expect(passwordInput).toBeVisible();
  await passwordInput.fill("ivanmacias12342!");

  const loginAccess = page.locator('button[class="Button-Primary Button-Primary_withArrow"]');
  await expect(loginAccess).toBeVisible();
  await loginAccess.click();
  await page.waitForTimeout(3000);


  const notificationError = page.locator('.Notification_type_error.Notification_is_opening');
  await expect(notificationError).toBeVisible({ timeout: 5000 }); 
  await expect(notificationError).toContainText('The account sign-in was incorrect or your account is disabled temporarily.');

  await page.pause();
});

//MUJERES

test('Categoria-Mujeres', async ({ page }) => {

  await page.goto('https://mx.puma.com/');

  const clickCredits = page.getByRole('link', { name: 'Niños' });
  await clickCredits.waitFor({ state: 'visible' });
  await clickCredits.click();

  await expect(page).toHaveURL('https://mx.puma.com/mujeres.html');

  await page.pause();
});

test('select-product-carrousell-mujeres', async ({ page }) => {

  await page.goto('https://mx.puma.com/mujeres.html');
  
  const clickCredits = page.getByRole('link', { name: 'Mujeres' });
  await clickCredits.waitFor({ state: 'visible' });
  await clickCredits.click();
  await page.waitForTimeout(1000);
  await clickCredits.click();

  const firstProduct = page.locator('.RenderWhenVisible a').first();
  await firstProduct.click(); 

});

test('carrousell-back-next', async ({ page }) => {

  await page.goto('https://mx.puma.com/mujeres.html');

  const back = page.locator('button[class="SwatchSlider-Arrow SwatchSlider-Arrow_btnType_left SwatchSlider-Arrow_isDesktop ProductCarousel-Arrow ProductCarousel-Arrow_btnType_left ProductCarousel-Arrow_isDesktop slick-arrow"]');
  await expect(back).toBeVisible();
  await back.click();
  
  await page.waitForTimeout(2000);

  const next = page.locator('button[class="SwatchSlider-Arrow SwatchSlider-Arrow_btnType_right ProductCarousel-Arrow ProductCarousel-Arrow_btnType_right ProductCarousel-Arrow_hasNextImage slick-arrow"]');
  await expect(next).toBeVisible();
  await next.click();

  await page.pause();
});

test('select-product-allProducts-mujeres', async ({ page }) => {

  await page.goto('https://mx.puma.com/mujeres.html');
  
  const firstAllProducts = page.locator('.ProductList .ProductListPage .ProductCard a').first();
  await expect(firstAllProducts).toBeVisible();
  await firstAllProducts.click();

  await page.pause();
});

test('select-colorLink', async ({ page }) => {

  await page.goto('https://mx.puma.com/mujeres.html');

  const selectLinkColor = page.locator('button[class="ProductAttributeValue "]').first();
  await expect(selectLinkColor).toBeVisible();
  await selectLinkColor.click();
  await page.pause();

});

test('moreProducts-button', async ({ page }) => {

  await page.goto('https://mx.puma.com/mujeres.html');

  const buttonMoreProd = page.locator('[class="ProductList-LoadProductsButton ProductList-LoadProductsButton_type_loadMore"]')
  await expect(buttonMoreProd).toBeVisible();
  await buttonMoreProd.click();
  await page.pause();
});

test('showAll-button', async ({ page }) => {

  await page.goto('https://mx.puma.com/mujeres.html');
  
  const buttonShowAll = page.locator('button[class="ProductList-LoadProductsButton ProductList-LoadProductsButton_type_loadAll Button-AddToCart"]')
  await expect(buttonShowAll).toBeVisible();
  await buttonShowAll.click();
  await page.pause();
});

