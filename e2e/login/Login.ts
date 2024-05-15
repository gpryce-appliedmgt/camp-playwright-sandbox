export async function Login(page) {
  await page.goto('https://beta.elogicgenesis.com/login');
  await page.getByLabel('Email').fill('brichmond@appliedmgt.com');
  await page.getByLabel('Password').click();

  await page.getByLabel('Password').fill('testing123');
  await page.getByRole('button', { name: 'Login' }).click();
  return page.waitForResponse('**/api/user/auth');
}