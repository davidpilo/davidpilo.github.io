// Plain-text preview of a Markdown body: strips emphasis, headings,
// links and code markers so previews don't show raw Markdown.
export function excerpt(body, length) {
  const text = body
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/^#+\s*/gm, '')
    .replace(/^>\s?/gm, '')
    .replace(/[*_`]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
  return `${text.substring(0, length).trim()}...`;
}
