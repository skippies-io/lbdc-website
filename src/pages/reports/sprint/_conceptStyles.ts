import type { ConceptKey } from './_data';

export function conceptCssVars(concept: ConceptKey) {
  switch (concept) {
    case 'A':
      return {
        '--c-ink': '#1F2527',
        '--c-canvas': '#FAFAF8',
        '--c-surface': '#FFFFFF',
        '--c-border': '#E6E7E8',
        '--c-accent': '#2F6F73',
        '--c-accentHover': '#25585B',
        '--c-accentSoft': '#E6F1F1',
      };
    case 'B':
      return {
        '--c-ink': '#111827',
        '--c-canvas': '#F8FAFC',
        '--c-surface': '#FFFFFF',
        '--c-border': '#E5E7EB',
        '--c-accent': '#1D4ED8',
        '--c-accentHover': '#1E40AF',
        '--c-accentSoft': '#DBEAFE',
      };
    case 'C':
      return {
        '--c-ink': '#1E2426',
        '--c-canvas': '#FBFAF7',
        '--c-surface': '#FFFFFF',
        '--c-border': '#E7E2D8',
        '--c-accent': '#B8894A',
        '--c-accentHover': '#8F6B39',
        '--c-accentSoft': '#F3E9DD',
      };
    case 'D':
      return {
        '--c-ink': '#0B0F12',
        '--c-canvas': '#FFFFFF',
        '--c-surface': '#FFFFFF',
        '--c-border': '#E7EBEF',
        '--c-accent': '#0F766E',
        '--c-accentHover': '#115E59',
        '--c-accentSoft': '#CCFBF1',
      };
  }
}
