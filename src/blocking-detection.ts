import { CheerioAPI } from 'cheerio';

const CAPTCHA_SELECTOR = '[action="/errors/validateCaptcha"]';

/**
 * Handles the captcha blocking. Throws an error if a captcha is displayed.
 * - Crawlee automatically retries any requests that throw an error.
 * - Status code blocking (e.g. Amazon's 503) is handled automatically by Crawlee.
 */
export const handleCaptchaBlocking = ($: CheerioAPI) => {
    const isCaptchaDisplayed = $(CAPTCHA_SELECTOR).length > 0;
    if (isCaptchaDisplayed) throw new Error('Captcha is displayed! Retrying...');
};
