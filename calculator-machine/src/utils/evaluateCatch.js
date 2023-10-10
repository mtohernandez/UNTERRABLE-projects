export default function(func, vari) {
  let result = vari;
  result = result.replaceAll("x", "*");
  result = result.replaceAll("%", "/");
  try {
    result = func(result);
  } catch {
    return {status: false, value: 0};
  }
  return {status: true, value: result};
}