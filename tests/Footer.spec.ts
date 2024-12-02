import { test, expect, chromium } from '@playwright/test';
import exp from 'constants';

test('FooterVerMas', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const buttonVerMas = page.locator('button:text("Ver más")');
    await expect(buttonVerMas).toBeVisible();
    await buttonVerMas.click();

    await page.pause();
});

test('FooterVerMenos', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const buttonVerMas = page.locator('button:text("Ver más")');
    await expect(buttonVerMas).toBeVisible();
    await buttonVerMas.click();

    const buttonVerMenos = page.locator('button:text("Ver menos")');
    await expect(buttonVerMenos).toBeVisible();
    await buttonVerMenos.click();

    await page.pause();
});

test('AyudaContactanos', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const contactUsLink = page.locator('a:has-text("Contáctanos")');
    await expect(contactUsLink).toBeVisible();
    await contactUsLink.click();
    await expect(page).toHaveURL('/contactanos.html');

    await page.pause();
});

test('AyudaMetodosPagoEnvios', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const footerLink = page.locator('a:has-text("Métodos de pago y envíos")');
    await expect(footerLink).toBeVisible();
    await footerLink.click();

    await page.pause();
});

test('AyudaDevoluciones', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const footerLink = page.locator('a:has-text("Devoluciones")');
    await expect(footerLink).toBeVisible();
    await footerLink.click();
    await expect(page).toHaveURL('https://mx.puma.com/cambios-y-devoluciones.html');

    await page.pause();
});

test('AyudaPromociones', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const footerLink = page.locator('a:has-text("Promociones")');
    await expect(footerLink).toBeVisible();
    await footerLink.click();
    await expect(page).toHaveURL('https://mx.puma.com/promos-puma-mexico');

    await page.pause();
});
test('AyudaFacturacion', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const footerLink = page.locator('a:has-text("Facturación")');
    await expect(footerLink).toBeVisible();
    await footerLink.click();
    await expect(page).toHaveURL('https://mx.puma.com/facturacion');

    const facturaLink = page.locator('a[href="https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.masfacturaweb.com.mx%3A73%2Fpuma%2FmfwCreaCFDI.aspx&data=04%7C01%7Ccarolina.galeana%40puma.com%7Ca31a6e980c284323282a08d88cd19bbd%7Ccf404960c50f46d28bf3a3c957283b86%7C0%7C0%7C637414179173141001%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=mXJWaqR2mhSVLS%2FUc7jBFM4j04VrfONGkuKAfggXIUE%3D&reserved=0"]');
    await expect(facturaLink).toBeVisible();
    await facturaLink.click();

    await page.pause();
});
test('AyudaPreguntas', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const footerLink = page.locator('a:has-text("Preguntas frecuentes")');
    await expect(footerLink).toBeVisible();
    await footerLink.click();
    await expect(page).toHaveURL('https://mx.puma.com/faq.html');

    const preguntaLink = page.locator('span:has-text("¿Cómo verifico el estado de mi pedido?")');
    await expect(preguntaLink).toBeVisible();
    await preguntaLink.click();

    await page.pause();
});
test('AyudaDescuentoEstudiantes', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const footerLink = page.locator('a:has-text("Descuento para estudiantes")');
    await expect(footerLink).toBeVisible();
    await footerLink.click();

    await page.pause();
});

test('AyudaPolitica', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const footerLink = page.locator('a:has-text("Política de privacidad")');
    await expect(footerLink).toBeVisible();
    await footerLink.click();
    await expect(page).toHaveURL('https://mx.puma.com/politica-de-privacidad.html');

    await page.pause();
});

test('AyudaTyC', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const footerLink = page.locator('a:has-text("Términos y condiciones")').first();
    await expect(footerLink).toBeVisible();
    await footerLink.click();

    await page.pause();
});


test('AyudaCuidadoProductos', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const footerLink = page.locator('a:has-text("Cuidado de los productos")');
    await expect(footerLink).toBeVisible();
    await footerLink.click();
    await expect(page).toHaveURL('https://mx.puma.com/cuidado-de-los-productos.html');

    await page.pause();
});

test('AyudaGuiaTallas', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const footerLink = page.locator('a:has-text("Guía de tallas")');
    await expect(footerLink).toBeVisible();
    await footerLink.click();
    await expect(page).toHaveURL('https://mx.puma.com/guia-de-tallas.html');

    await page.pause();
});

test('AyudaMapa', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const footerLink = page.locator('a:has-text("Mapa del sitio")');
    await expect(footerLink).toBeVisible();
    await footerLink.click();
    await expect(page).toHaveURL('https://mx.puma.com/sitemap.html');

    const mapaLink = page.locator('a[href="https://eur03.safelinks.protection.outlook.com/?url=https%3A%2F%2Fwww.masfacturaweb.com.mx%3A73%2Fpuma%2FmfwCreaCFDI.aspx&data=04%7C01%7Ccarolina.galeana%40puma.com%7Ca31a6e980c284323282a08d88cd19bbd%7Ccf404960c50f46d28bf3a3c957283b86%7C0%7C0%7C637414179173141001%7CUnknown%7CTWFpbGZsb3d8eyJWIjoiMC4wLjAwMDAiLCJQIjoiV2luMzIiLCJBTiI6Ik1haWwiLCJXVCI6Mn0%3D%7C1000&sdata=mXJWaqR2mhSVLS%2FUc7jBFM4j04VrfONGkuKAfggXIUE%3D&reserved=0"]');
    await expect(mapaLink).toBeVisible();
    await mapaLink.click();

    await page.pause();
});

test('AyudaAfiliados', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const footerLink = page.locator('a:has-text("Programa de afiliados")');
    await expect(footerLink).toBeVisible();
    await footerLink.click();
    await expect(page).toHaveURL('https://mx.puma.com/programa-de-afiliados');

    await page.pause();
});

test('AyudaBlackFriday', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const footerLink = page.locator('a:has-text("BLACK FRIDAY 2024")');
    await expect(footerLink).toBeVisible();
    await footerLink.click();
    await expect(page).toHaveURL('https://mx.puma.com/black-friday.html?page=1');

    await page.pause();
});

test('AcercaDeCompania', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const footerLink = page.locator('a:has-text("Compañía")');
    await expect(footerLink).toBeVisible();
    await footerLink.click();
    await expect(page).toHaveURL('https://about.puma.com/en/this-is-puma');

    await page.pause();
});

test('AcercaDeNoticias', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const footerLink = page.locator('a:has-text("Noticias corporativas")');
    await expect(footerLink).toBeVisible();
    await footerLink.click();
    await expect(page).toHaveURL('https://about.puma.com/en/en/newsroom/corporate-news');

    await page.pause();
});

test('AcercaDeInversionistas', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const footerLink = page.locator('a:has-text("Inversionistas")');
    await expect(footerLink).toBeVisible();
    await footerLink.click();
    await expect(page).toHaveURL("https://about.puma.com/en/investor-relations");

    await page.pause();
});

test('AcercaDeSostenibilidad', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const footerLink = page.locator('a:has-text("Sostenibilidad")');
    await expect(footerLink).toBeVisible();
    await footerLink.click();
    await expect(page).toHaveURL('https://about.puma.com/en/sustainability');

    await page.pause();
});

test('AcercaDeEmpleos', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const footerLink = page.locator('a:has-text("Empleos")');
    await expect(footerLink).toBeVisible();
    await footerLink.click();
    await expect(page).toHaveURL('https://about.puma.com/en/careers');

    await page.pause();
});

test('RedesSocialesFacebook', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const footerFacebook = page.locator('a[class="Footer-SocialMedium Footer-SocialMedium_name_facebook"]');
    await expect(footerFacebook).toBeVisible();
    await footerFacebook.click();
    await expect(page).toHaveURL('https://www.facebook.com/PUMAMexico/?locale=es_LA');

    await page.pause();
});

test('RedesSocialesTwitter', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const footerFacebook = page.locator('a[class="Footer-SocialMedium Footer-SocialMedium_name_twitter"]');
    await expect(footerFacebook).toBeVisible();
    await footerFacebook.click();
    await expect(page).toHaveURL('https://x.com/pumamexico/');

    await page.pause();
});

test('RedesSocialesInstagram', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const footerFacebook = page.locator('a[class="Footer-SocialMedium Footer-SocialMedium_name_instagram"]');
    await expect(footerFacebook).toBeVisible();
    await footerFacebook.click();
    await expect(page).toHaveURL('https://www.instagram.com/pumamexico/');

    await page.pause();
});

test('RedesSocialesYoutube', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const footerFacebook = page.locator('a[class="Footer-SocialMedium Footer-SocialMedium_name_youtube"]');
    await expect(footerFacebook).toBeVisible();
    await footerFacebook.click();
    await expect(page).toHaveURL('https://www.youtube.com/puma');

    await page.pause();
});

test('AcercaDeEntrenaConLosMasVeloces', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const footerLink = page.locator('span:has-text("Entrena con los más veloces")');
    await expect(footerLink).toBeVisible();
    await footerLink.click();

    await page.pause();
});

test('Suscribirse', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const emailInput = page.locator('input[type="email"]');
    await expect(emailInput).toBeVisible();
    await emailInput.click();

    await emailInput.fill('rebecaraygozaromo@outlook.com');

    const buttonContinue = page.locator('button[class="Subscription-Submit"]');
    await expect(buttonContinue).toBeVisible();
    await buttonContinue.click();

    const ConfirmemailInput = page.locator('input[type="text"]');
    await expect(ConfirmemailInput).toBeVisible();
    await ConfirmemailInput.click();

    await ConfirmemailInput.fill('rebecaraygozaromo@outlook.com');

    const checkbox = page.locator('input[type="checkbox"]#subscriptionConditions');
    await expect(checkbox).toBeVisible();
    await checkbox.check();

    const suscribirButton = page.locator('button.Button-Primary', { hasText: 'Suscribir' });
    await expect(suscribirButton).toBeVisible();
    await suscribirButton.click();

    await page.pause();
});


test('CambiarIdiomanglés', async ({ page }) => {
    await page.goto('https://mx.puma.com/');
    await page.locator('footer').scrollIntoViewIfNeeded(); 

    const languageButton = page.locator('button[class="ChooseLangBlock-PopupBtn"]');
    
    await expect(languageButton).toBeVisible();
    await languageButton.click();

    const changeLanguagePopup = page.locator('div.regions-content__popup-inner');
    await expect(changeLanguagePopup).toBeVisible();

    const englishButton = page.locator('button.Link-LanguageSwitcher', { hasText: 'Inglés' });

    await expect(englishButton).toBeVisible();
    await englishButton.click();

    await page.pause();
});

