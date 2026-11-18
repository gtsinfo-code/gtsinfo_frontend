/**
 * GTSInfo Universal Data & Text Formatters
 */

export function formatDate(dateString: string): string {
  if (!dateString) return '';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  });
}

export function formatLocation(city: string, country: string): string {
  return `${city}, ${country}`;
}
