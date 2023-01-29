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

export const gatsbyLinkCreator = (NODE_ENV: string) => {
  return NODE_ENV && NODE_ENV === 'development' ? 'http://localhost:8000' : '/blog';
}