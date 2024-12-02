import { test, expect } from '@playwright/test';

test('buy-product', async ({ page }) => {
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
    const mainMenu = page.getByLabel('Vaya a la página de inicio');
    await mainMenu.waitFor({ state: 'visible' });
    await mainMenu.click();
    //Ir al carrito
    const clicCart = page.getByRole('button', { name: 'Items in cart' }).first();
    await clicCart.waitFor({ state: 'visible' });
    await clicCart.click();
    await page.waitForTimeout(2000);
    //Cookies
    const cookie = page.getByRole('button', { name: 'Acepto' });
    await cookie.waitFor({ state: 'visible' });
    await cookie.click();
    //Aceptar terminos
    const buyProduct = page.getByLabel('He leído y estoy de acuerdo');
    await buyProduct.waitFor({ state: 'visible' });
    await buyProduct.click();
    //Ir a pagar
    const clicPayment = page.getByRole('button', { name: 'Pagar' });
    await clicPayment.waitFor({ state: 'visible' });
    await clicPayment.click();
    await expect(page).toHaveTitle(/Pagar/);
    //Agregar nueva dirección
    const newAddress = page.getByRole('button', { name: '+ nueva direccion' });
    await newAddress.waitFor({ state: 'visible' });
    await newAddress.click();
    //Ingresar nombre
    const firstname = page.locator('input[name="firstname"]');
    await expect(firstname).toBeVisible();
    await firstname.fill("Emmanuel");
    //Ingresar apellidos
    const lastname = page.locator('input[name="lastname"]');
    await expect(lastname).toBeVisible();
    await lastname.fill("Romo Macías");
    //Ingresar número
    const phone = page.getByLabel('Número de teléfono *');
    await expect(phone).toBeVisible();
    await phone.fill("4495675434");
    //Ingresar dirección
    const address = page.getByPlaceholder('Calle, Colonia y Número');
    await expect(address).toBeVisible();
    await address.fill("Sixto Verduzco 545 Morelos II Aguascalientes, Ags");
    //Ingresar ciudad
    const city = page.locator('input[name="city"]');
    await expect(city).toBeVisible();
    await city.fill("Aguascalientes");
    //Codigo postal
    const postal = page.locator('#postcode')
    await expect(postal).toBeVisible();
    await postal.fill("20298");
    //Guardar datos
    const saveAddress = page.getByRole('button', { name: 'enviar aquí' });
    await saveAddress.waitFor({ state: 'visible' });
    await saveAddress.click();
    //Continuar con el pago
    const continuePaymant = page.getByRole('button', { name: 'Proceder con el pago' });
    await continuePaymant.waitFor({ state: 'visible' });
    await continuePaymant.click();
    //Pago con tarjeta
    const card = page.getByRole('button', { name: 'Pagos con tarjetas de débito/' });
    await card.waitFor({ state: 'visible' });
    await card.click();
    //Número de tarjeta
    const number = page.locator('iframe[title="Utilice Iframe para el número de tarjeta"]').contentFrame().getByPlaceholder('5678 9012 3456');
    await expect(number).toBeVisible();
    await number.fill("2029845667546543");
    //Fecha de expiración
    const expiration = page.locator('iframe[title="Utilice iframe para la fecha de caducidad"]').contentFrame().getByPlaceholder('MM/AA')
    await expect(expiration).toBeVisible();
    await expiration.fill("0434");
    //Número de seguridad
    const cvv = page.locator('iframe[title="Utilice iframe para el código de seguridad"]').contentFrame().getByPlaceholder('dígitos')
    await expect(cvv).toBeVisible();
    await cvv.fill("043");
    //Nombre del dueño de la tarjeta
    const nameCard = page.getByPlaceholder('Juan Pérez');
    await expect(nameCard).toBeVisible();
    await nameCard.fill("Juan Pérez");
    //Terminos
    const agree = page.getByRole('checkbox', { name: 'He leído y estoy de acuerdo' })
    await agree.waitFor({ state: 'visible' });
    await agree.click();
    await page.pause();
});

//SEGUIR ORDEN
test('follow-order-with-fedex', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await expect(page).toHaveTitle(/PUMA México/);
    const goToFollow = page.getByRole('navigation').getByLabel("Ir a una página haciendo clic")
    await goToFollow.waitFor({ state: 'visible' });
    await goToFollow.click();
    await expect(page).toHaveTitle(/Sigue tu orden PUMA MX/);
    await expect(page.locator("h1.CmsPage-Heading").first()).toContainText("ESTADO DE TU PEDIDO");
    const linkFedex = page.getByRole('link', { name: 'SEGUIR EN FEDEX' });
    await linkFedex.waitFor({ state: 'visible' });
    await linkFedex.click();
    await expect(page.getByRole('heading', { name: 'Rastrea de la manera que más te guste' })).toBeVisible();
    await page.pause();
});

test('follow-order-with-dhl', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await expect(page).toHaveTitle(/PUMA México/);
    const goToFollow = page.getByRole('navigation').getByLabel("Ir a una página haciendo clic")
    await goToFollow.waitFor({ state: 'visible' });
    await goToFollow.click();
    await expect(page).toHaveTitle(/Sigue tu orden PUMA MX/);
    await expect(page.locator("h1.CmsPage-Heading").first()).toContainText("ESTADO DE TU PEDIDO");
    const linkDHL = page.getByRole('link', { name: 'SEGUIR EN DHL' });
    await linkDHL.waitFor({ state: 'visible' });
    await linkDHL.click();
    await page.pause();
});