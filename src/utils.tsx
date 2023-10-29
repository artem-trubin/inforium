export const makeDateReadable = (date: number): string => {
  const dateObj = new Date(date);
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  };
  return dateObj.toLocaleDateString(undefined, options);
}

class ContextError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ContextError';
  }
}

export const throwContextError = (componentName: string): void => {
  throw new ContextError(
    `Context wasn't provided correctly. ${
      componentName ? "(" + componentName + ")" : ""
    }`
  );
}

export const routerPaths = {
  home: "/inforium",
  editor: "/inforium/editor",
  settings: "/inforium/settings",
  search: "/inforium/search",
  calendar: "/inforium/calendar",
}
