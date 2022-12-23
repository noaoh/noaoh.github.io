// Adapted from https://github.com/rasshofer/and
export const and = (data: Array<string>, separator = '&', oxfordComma = false) => {
  const items = data.length;
  const lastItem = data.pop();
  if (data.length) {
    return `${data.join(', ')}${oxfordComma && items > 2 ? ',' : ''} ${separator} ${lastItem}`.trim();
  } else {
    return lastItem;
  }
};
