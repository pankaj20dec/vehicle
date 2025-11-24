import "server-only";

export const getDictionary = async (locale: string) => {
  try {
    const dict = await import(`../locales/${locale}.json`);
    return dict;
  } catch {
    const dict = await import("../locales/en.json"); // fallback to English
    return dict;
  }
};
