// const err = new Error('invalid email');

function validateEmail(email) {
  return email.match(/@/) ?
    email :
    new Error(`invalid email: ${email}`);
}

const email = 'jane@doe.com'; // 형식 잘못되면 에러 발생
let validatingEmail = validateEmail(email);
if (validatingEmail instanceof Error) {
  console.error(`Eror: ${validatingEmail.message}`);
} else {
  console.log(`Valid email: ${validatingEmail}`);
}

const email2 = 'janedoe.com'; // 형식 잘못되면 에러 발생
try {
  validatingEmail = validateEmail(email2);
  if (validatingEmail instanceof Error) {
    console.error(`Eror: ${validatingEmail.message}`);
  } else {
    console.log(`Valid email: ${validatingEmail}`);
  }
} catch (err) {
  console.log(`Error: ${err.message}`);
}

function billPay(amount, payee, account) {
  if (amount > account.balance) {
    throw new Error('insufficient funds');
  }
  account.transfer(payee, amount);
}

