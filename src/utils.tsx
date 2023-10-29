const makeDateReadable = (date: number): string => {
  const dateObj = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return dateObj.toLocaleDateString(undefined, options);
}

export {
  makeDateReadable,
}
