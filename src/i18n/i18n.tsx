import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import i18nConfig from "./translations.json";

type JsonMap = Record<string, unknown>;

interface I18nContextValue {
  language: string;
  defaultLanguage: string;
  supportedLanguages: string[];
  languageLabels: Record<string, string>;
  setLanguage: (language: string) => void;
  t: (key: string) => string;
}

const STORAGE_KEY = "wotori-language";

const rawSupportedLanguages = Array.isArray(i18nConfig.supportedLanguages)
  ? i18nConfig.supportedLanguages.filter(
      (item): item is string => typeof item === "string"
    )
  : [];

const defaultLanguage =
  typeof i18nConfig.defaultLanguage === "string"
    ? i18nConfig.defaultLanguage
    : "en";

const supportedLanguages =
  rawSupportedLanguages.length > 0
    ? rawSupportedLanguages
    : [defaultLanguage];

const languageLabels: Record<string, string> =
  typeof i18nConfig.languageLabels === "object" &&
  i18nConfig.languageLabels !== null
    ? (i18nConfig.languageLabels as Record<string, string>)
    : {};

const translations =
  typeof i18nConfig.translations === "object" && i18nConfig.translations !== null
    ? (i18nConfig.translations as JsonMap)
    : {};

function isSupportedLanguage(language: string): boolean {
  return supportedLanguages.includes(language);
}

function resolveKey(source: unknown, key: string): string | undefined {
  if (!source || typeof source !== "object") {
    return undefined;
  }

  const value = key
    .split(".")
    .reduce<unknown>((acc, part) => {
      if (acc && typeof acc === "object" && part in (acc as JsonMap)) {
        return (acc as JsonMap)[part];
      }

      return undefined;
    }, source);

  return typeof value === "string" ? value : undefined;
}

function getInitialLanguage(): string {
  if (typeof window === "undefined") {
    return defaultLanguage;
  }

  const savedLanguage = localStorage.getItem(STORAGE_KEY);
  if (savedLanguage && isSupportedLanguage(savedLanguage)) {
    return savedLanguage;
  }

  return defaultLanguage;
}

function getTranslation(language: string, key: string): string {
  const languageTable = translations[language];
  const fallbackTable = translations[defaultLanguage];

  const currentValue = resolveKey(languageTable, key);
  if (currentValue) {
    return currentValue;
  }

  const fallbackValue = resolveKey(fallbackTable, key);
  if (fallbackValue) {
    return fallbackValue;
  }

  return key;
}

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<string>(getInitialLanguage);

  const setLanguage = useCallback((nextLanguage: string) => {
    if (!isSupportedLanguage(nextLanguage)) {
      return;
    }

    setLanguageState(nextLanguage);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, language);
      document.documentElement.lang = language;
    }
  }, [language]);

  const t = useCallback(
    (key: string): string => getTranslation(language, key),
    [language]
  );

  const value = useMemo<I18nContextValue>(
    () => ({
      language,
      defaultLanguage,
      supportedLanguages,
      languageLabels,
      setLanguage,
      t,
    }),
    [language, setLanguage, t]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const context = useContext(I18nContext);

  if (!context) {
    throw new Error("useI18n must be used within I18nProvider");
  }

  return context;
}
