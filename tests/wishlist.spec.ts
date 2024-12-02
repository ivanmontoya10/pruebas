import { test, expect } from '@playwright/test';
const fs = require('fs');

//LISTA DE DESEOS
test('wishlist-empty', async ({ page }) => {
    const cookies = JSON.parse(await fs.promises.readFile('cookies.json'));
    await page.context().addCookies(cookies);
    await page.goto('https://mx.puma.com/');
    await expect(page).toHaveTitle(/PUMA México/);
    const goToWish = page.getByRole('navigation').getByLabel("Go to wishlist page by")
    await goToWish.waitFor({ state: 'visible' });
    await goToWish.click();
    await expect(page.locator("span.WishlistPage-Heading").first()).toContainText("mi lista de deseos");
    await page.pause();
});

test('wishlist-with-product', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
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
    const passwordInput = page.locator('input[id="password"]');
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill("ivanmacias12342!");
    const loginAccess = page.locator('button[class="Button-Primary Button-Primary_withArrow"]');
    await expect(loginAccess).toBeVisible();
    await loginAccess.click();
    const cookies = await page.context().cookies();
    await fs.promises.writeFile('cookies.json', JSON.stringify(cookies));
    const goToWishList = page.getByRole('navigation').getByLabel("Go to wishlist page by")
    await goToWishList.waitFor({ state: 'visible' });
    await goToWishList.click();
    await expect(page.locator("span.WishlistPage-Heading").first()).toContainText("mi lista de deseos");
    //Buscar producto
    const clickSearch = page.locator("#search-field");
    await clickSearch.waitFor({ state: 'visible' });
    await clickSearch.click();
    await expect(clickSearch).toBeVisible();
    await page.waitForTimeout(1000);
    await clickSearch.fill("Harry Potter");
    await clickSearch.press('Enter');
    await expect(page.getByText("BUSCA POR Harry Potter").first()).toBeVisible();
    //Seleccionar primer producto
    const selectProduct = page.getByRole('link', { name: 'Draggable area Camiseta para' }).first();
    await selectProduct.waitFor({ state: 'visible' });
    await selectProduct.click();
    await page.waitForTimeout(1000);
    //Seleccionar Talla
    await page.getByText('TallaEligeXSSXL').click();
    await page.waitForTimeout(1000);
    await page.locator('ul.FieldSelect-Options li:has-text("S")').nth(1).click();
    //Seleccionar Cantidad
    await page.getByText('CANTIDAD1212').click();
    await page.locator('li#o2').click();
    await page.waitForTimeout(2000);
    //Agregar a lista de deseos
    const addWishList = page.getByRole('button', { name: 'Añadir a la lista de deseos' }).first();
    await addWishList.waitFor({ state: 'visible' });
    await addWishList.click();
    await page.waitForTimeout(2000);
    //Verificar producto en lista de deseos
    await goToWishList.click();
    await goToWishList.click();
    await page.pause();
});

test('wishlist-add-cart', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
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
    const passwordInput = page.locator('input[id="password"]');
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill("ivanmacias12342!");
    const loginAccess = page.locator('button[class="Button-Primary Button-Primary_withArrow"]');
    await expect(loginAccess).toBeVisible();
    await loginAccess.click();
    const cookies = await page.context().cookies();
    await fs.promises.writeFile('cookies.json', JSON.stringify(cookies));
    const goToWishList = page.getByRole('navigation').getByLabel("Go to wishlist page by")
    await goToWishList.waitFor({ state: 'visible' });
    await goToWishList.click();
    const addWishList = page.getByRole('button', { name: 'Añadir al carrito' }).first();
    await addWishList.waitFor({ state: 'visible' });
    await addWishList.click();
    await page.waitForTimeout(2000);
    const clicCart = page.getByRole('button', { name: 'Items in cart' }).first();
    await clicCart.waitFor({ state: 'visible' });
    await clicCart.click();
    await page.pause();
});

test('wishlist-remove-product', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
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
    const passwordInput = page.locator('input[id="password"]');
    await expect(passwordInput).toBeVisible();
    await passwordInput.fill("ivanmacias12342!");
    const loginAccess = page.locator('button[class="Button-Primary Button-Primary_withArrow"]');
    await expect(loginAccess).toBeVisible();
    await loginAccess.click();
    const cookies = await page.context().cookies();
    await fs.promises.writeFile('cookies.json', JSON.stringify(cookies));
    const goToWishList = page.getByRole('navigation').getByLabel("Go to wishlist page by")
    await goToWishList.waitFor({ state: 'visible' });
    await goToWishList.click();
    const addWishList = page.getByRole('button', { name: 'Remover' }).first();
    await addWishList.waitFor({ state: 'visible' });
    await addWishList.click();
    await page.waitForTimeout(2000);
    await page.pause();
});