// 10.1 Map

const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Olive' };
const u4 = { name: 'James' };

// const userRoles = new Map();
// userRoles.set(u1, 'User').set(u2, 'User').set(u3, 'Admin');
const userRoles = new Map([[u1, 'User'], [u2, 'User'], [u3, 'Admin']]);
// console.log(userRoles.get(u1));
userRoles.set(u1, 'Admin');
// console.log(userRoles.get(u1));

console.log(userRoles.size);

// for (const u of userRoles.keys()) {
//   console.log(u.name);
// }

// 밑에 둘다 안됨, 이게 map이라서 그런건가... 아 key()로 돌리면 안되고 그냥 돌려야 되네..
userRoles.forEach((u) => { console.log(u.name); });
// Array.prototype.forEach.call(userRoles, (u) => {
//   console.log(u);
// });

// 아래 모두 iterator 자체를  forEach로 돌리면 될듯
for (const r of userRoles.values()) {
//   console.log(r);
}

for (const ur of userRoles.entries()) {
//   console.log(`${ur[0].name}: ${ur[1]}`);
}
// 위와 동일한 결과, map객체 자체가 iterable 객체
for (const [u, r] of userRoles) {
  console.log(`${u.name}: ${r}`);
}

userRoles.delete(u2);
const users = [...userRoles.values()];
// console.log(users);
userRoles.clear();
// console.log(userRoles.size);

// 10.2 WeakMap
const SecretHolder = (function () {
  const secrets = new WeakMap();
  return class {
    setSecret(secret) {
      secrets.set(this, secret);
    }
    getSecret() {
      return secrets.get(this);
    }
  };
}()); // 뒤에 () 안넣었다고 실행이 안되네... setSecret이 함수가 아니란다.

const a = new SecretHolder();
const b = new SecretHolder();
a.setSecret('secret A');
b.setSecret('secret B');

// console.log(a.getSecret(), b.getSecret());

// 10.3 Set
const roles = new Set();
roles.add('User');
roles.add('Admin');
// roles.size; // 2
roles.add('User');
// roles.size; //2
roles.delete('User');

// 10.4 WeakSet
const naughty = new WeakSet();
const children = [
  { name: 'Suzy' },
  { name: 'Derek' },
];

naughty.add(children[1]);

// for (const child of children) {
//   if (naughty.has(child)) {
//     console.log(`Coal for ${child.name}`);
//   } else {
//     console.log(`Presents for ${child.name}`);
//   }
// }

// 왜 이건 되지?
children.forEach((child) => {
  if (naughty.has(child)) {
    console.log(`Coal for ${child.name}`);
  } else {
    console.log(`Presents for ${child.name}`);
  }
});

