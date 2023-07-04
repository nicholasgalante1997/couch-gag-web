import React, { createContext, useContext, ReactNode, useState, useEffect, memo } from 'react';
import { Locale } from '@/types';
import { AppStrings } from '@/locales';
import { logger } from '@/utils';
import { withProfiler } from '@/hocs';

async function updateAppStrings(locale: string, update: (blob: typeof AppStrings) => void) {
    try {
        const filepath = `../locales/${locale}/app.json`;
        const resolvedModule = await import(filepath).then(mod => mod.default);
        update(resolvedModule);
    } catch (e: any) {
        logger.error('I18NException');
        logger.error(e);
    }
}

const I18NContext = createContext<typeof AppStrings>(AppStrings);

export const useTranslation = () => {
    const i18nPool = useContext(I18NContext);
    const { assets, resources } = i18nPool;
    function t(key: string): string | undefined {
        return resources[key as keyof typeof AppStrings['resources']];
    }
    function media(key: string): string | undefined {
        return assets[key as keyof typeof AppStrings['assets']];
    }
    return { t, media, raw: i18nPool };
}

function I18NProviderComponent({ children, locale = "en" }: { children: ReactNode; locale?: Locale }) {
    const [langStrings, setLangStrings] = useState(AppStrings);
    useEffect(() => {
        if (locale !== "en") {
            updateAppStrings(locale, (updatedStrings) => setLangStrings(updatedStrings));
        }
    }, [locale]);
    return (
        <I18NContext.Provider value={langStrings}>
            {children}
        </I18NContext.Provider>
    );
}

export const I18NProvider = withProfiler(
    'I18NProvider',
    memo(I18NProviderComponent)
);
