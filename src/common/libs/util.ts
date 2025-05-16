type ResponsiveValue<T> = {
  pc: T;
  tablet: T;
  mobile: T;
};

export type ResponsiveType<T> = T | ResponsiveValue<T>;

const wrappingNumberToPx = (value: number | string) =>
  typeof value === "number" ? `${value}px` : value;

export const getResponsiveValue = <T extends number | string>(
  value: ResponsiveType<T> | undefined,
  device: "pc" | "tablet" | "mobile",
  defaultValue: number | string,
): string => {
  if (typeof value === "object" && value?.[device])
    return wrappingNumberToPx(value[device]);
  if (typeof value === "number" || typeof value === "string")
    return wrappingNumberToPx(value);
  return wrappingNumberToPx(defaultValue);
};

export const getTranslatedValue = (
  ko: string | number,
  en: string | number,
) => {
  return (locale: "ko" | "en") => {
    if (locale === "ko") {
      return wrappingNumberToPx(ko);
    }
    return wrappingNumberToPx(en);
  };
};
