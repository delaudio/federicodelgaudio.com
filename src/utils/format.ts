export function formatProjectYear(start_year?: string, end_year?: string) {
  if (!start_year || !end_year) {
    return "-";
  }

  if (start_year === end_year) {
    return `${end_year}`;
  }

  if (start_year && end_year) {
    return `${start_year} - ${end_year}`;
  }
}
