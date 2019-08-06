import { DefaultParser, TRANSLOCO_PARSER } from '../transloco.parser';
import { TRANSLOCO_LOADER } from '../transloco.loader';
import { defaultConfig, TRANSLOCO_CONFIG } from '../transloco.config';
import { timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { DefaultHandler, TRANSLOCO_MISSING_HANDLER } from '../transloco-missing-handler';
import en from '../../../../../src/assets/i18n/en.json';
import es from '../../../../../src/assets/i18n/es.json';
import enLazy from '../../../../../src/assets/i18n/lazy-page/en.json';
import esLazy from '../../../../../src/assets/i18n/lazy-page/es.json';
import { tick } from '@angular/core/testing';
import { TranslocoService } from '../transloco.service';
import { TRANSLOCO_LOADING_TEMPLATE } from '../transloco-loading-template';

export const mockLangs = {
  en,
  es,
  'lazy-page/en': enLazy,
  'lazy-page/es': esLazy
};

export const loader = {
  getTranslation(lang: string) {
    return timer(1000).pipe(map(() => mockLangs[lang])) as any;
  }
};

export const configProviderMock = (config = {}) => ({
  provide: TRANSLOCO_CONFIG,
  useValue: { ...defaultConfig, ...config }
});

export const loaderProviderMock = {
  provide: TRANSLOCO_LOADER,
  useValue: loader
};

export const parserProviderMock = {
  provide: TRANSLOCO_PARSER,
  useClass: DefaultParser
};

export const missingHandlerProviderMock = {
  provide: TRANSLOCO_MISSING_HANDLER,
  useClass: DefaultHandler
};

export const providersMock = [configProviderMock(), loaderProviderMock, parserProviderMock, missingHandlerProviderMock];

export function runLoader(times = 1) {
  tick(times * 1001);
}

export function setRuntime(service: TranslocoService, runtime = true) {
  (service as any).mergedConfig.runtime = runtime;
}

export const loadingTemplateMock = { provide: TRANSLOCO_LOADING_TEMPLATE, useValue: 'loading template...' };
