export const renderMarkDown = (text) => {
  const html = marked.parse(text);
  return html;
};
