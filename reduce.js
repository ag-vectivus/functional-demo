const orders = [31.54, 19.99, 4.55];

// const add = orders.reduce((total, amount) => total + amount);
// console.log(add);

const average = orders.reduce((total, amount, index, array) => {
  total += amount;
  if (index === array.length - 1) return total / array.length

  return total;
});
console.log(average);

const members = [1, 2, 3, 3, 4];
const uniqueMembers = members.reduce((total, member) => {
  console.log(member);
  console.log(total);
  console.log(total.indexOf(member));
  if (total.indexOf(member) === -1) total.push(member);
  return total;
}, [])
console.log(uniqueMembers);
console.log(members.length !== uniqueMembers.length);

const unique = (new Set(members)).size !== members.length;
console.log(unique);


const data = [[1, 2, 3], [4, 5, 6]];
const flat = data.reduce((total, arr) => total.concat(arr));
console.log(flat);
console.log(data.flat(Infinity))


const tree = {
  id: 1,
  children: [
    { id: 2 },
    { id: 3 ,
      children: [ {id: 4 }, { id: 5 } ]
    }
  ]
}

const flatten = (obj) => {
  const arr = Array.isArray(obj) ? obj : [obj];
   return arr.reduce((result, value) => {
    result.push(value);
    if (value.children) {
      result = result.concat(flatten(value.children));
      delete value.children
    }
    return result;
  }, [])
};

const flattenExample = flatten(tree);
console.log(flattenExample);

const formData = {
  name: 'Adam',
  billing_address_city: 'Warsaw',
  billing_address_street: 'ul. Pomorska',
  shipping_address_city: 'Krakow',
  shipping_address_street: 'ul. Karmelicka',
}

const transformation = Object.keys(formData).reduce((result, key) => {
  if (!key.match('_')) {
    result[key] = formData[key];
    console.log(result[key] = formData[key]);
  } else {
    const newKey = key.split(/_([^_]*)$/);
    console.log(newKey);
    console.log(result[newKey[0]])
    console.log(result[newKey[1]])
    if (!result[newKey[0]]) result[newKey[0]] = {}
    result[newKey[0]][newKey[1]] = formData[key];
  }

  return result;
}, {})

console.log(transformation);

// // const result = {
// //   name: 'Adam',
// //   billing_address: { city: 'Warsaw', street: 'ul. Pomorska' },
// //   shipping_address: { city: 'Krakow', street: 'ul. Karmelicka'}
// // };

const add = (value) => value + 1;
const subtract = (value) => value - 2;
const double = (value) => value * 2;

const pipe = [add, subtract, double];
console.log(
  pipe.reduce((total, fn) => {
    console.log(total, fn(total))
    return fn(total)
  }, 10) //?
)
