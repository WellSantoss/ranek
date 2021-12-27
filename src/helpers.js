export function serialize(obj) {
  let querystring = "";
  for (let parameter in obj) {
    querystring += `&${parameter}=${obj[parameter]}`;
  }

  return querystring;
}
