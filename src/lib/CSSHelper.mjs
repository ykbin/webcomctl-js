import { createHash } from 'node:crypto';

function base64ToCssClassName(classname) {
  const name = classname.replace(/\+/g, '-')
                 .replace(/\//g, '_')
                 .replace(/=+$/, ''); // Remove padding character `=`
  const firstChar = name.charCodeAt(0);
  if (firstChar < 0x30 || 0x39 < firstChar) {
    return name;
  }

  return String.fromCharCode(0x41 + firstChar) + name.substr(1);
}

export function representClassNames(params) {
  if (typeof params === 'string') {
    if (process.env.WEBMAKE_BUILD_TYPE === 'Debug')
      return params;
    const hash = createHash('sha1', params, 'buffer');
    hash.update(params);
    const buffer = hash.digest();
    const cname = buffer.subarray(0, 12).toString('base64');
    return base64ToCssClassName(cname);
  }

  if (Array.isArray(params)) {
    const result = [];
    for (var i = 0; i < params.length; i++) {
      result.push(representClassNames(params[i]));
    }
    return result;
  }

  const result = {};
  for (const name in params) {
    result[name] = representClassNames(params[name]);
  }

  return result;
}
