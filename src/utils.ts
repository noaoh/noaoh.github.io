// Adapted from https://github.com/rasshofer/and
export const and = (data: Array<string>, separator = '&', oxfordComma = false): string => {
  const length = data.length;
  if (length === 1) {
    return data[0];
  } else {
    const allButLast = data.slice(0, -1);
    return `${allButLast.join(', ')}${oxfordComma && length - 1 > 2 ? ',' : ''} ${separator} ${
      data[length - 1]
    }`.trim();
  }
};

export const gatsbyLinkCreator = (NODE_ENV: string) => {
  return NODE_ENV && NODE_ENV === 'development' ? 'http://localhost:8000' : '/blog';
};
