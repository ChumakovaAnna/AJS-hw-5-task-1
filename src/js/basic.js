export default function orderByProps(obj, arr) {
  const result = [];
  const sortArr = Object.keys(obj).sort();

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] in obj) {
      result.push({
        key: arr[i],
        value: obj[arr[i]],
      });
      sortArr.splice(sortArr.indexOf(arr[i]), 1);
    } else {
      console.log(`No ${arr[i]}`);
    }
  }

  for (let i = 0; i < sortArr.length; i += 1) {
    result.push({
      key: sortArr[i],
      value: obj[sortArr[i]],
    });
  }

  return result;
}
