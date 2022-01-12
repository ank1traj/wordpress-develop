import {
	loginUser,
	visitAdminPage,
	pressKeyTimes
} from '@wordpress/e2e-test-utils';

const id = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);

const uname = "uname" + id(new Date()) + Math.random() * 10;

describe('user', () => {
	it('edit user', async() => {
		await loginUser();
		await visitAdminPage('users.php');
		await page.waitForSelector('#user-3', {timeout: 50000})
		await page.click('#user-1');
		await page.click('.edit');
		await page.waitForSelector('#first_name', {timeout: 50000})
		await page.click('#first_name');
		await page.type('#first_name', 'ankit');
		await page.click('#submit');
	})
	it.only('change user role', async() => {
		await loginUser();
		await visitAdminPage('users.php');
		await page.waitForSelector('#user-1', {timeout: 50000});
		await page.click('#user-1');
		await page.click('.edit');
		await page.waitForSelector('#role', {timeout: 50000});
		await page.click('#role');
		await pressKeyTimes('ArrowDown', 2);
		await pressKeyTimes('Enter', 1);
		await page.click('#submit');
	})
})
