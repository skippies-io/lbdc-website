export type ConceptKey = 'A' | 'B' | 'C' | 'D';

export type ScreenKey = 'home' | 'service' | 'about' | 'contact';

export const screens: Array<{ key: ScreenKey; name: string; }> = [
  { key: 'home', name: 'Homepage' },
  { key: 'service', name: 'Service' },
  { key: 'about', name: 'About' },
  { key: 'contact', name: 'Contact' },
];

export const concepts: Array<{
  key: ConceptKey;
  name: string;
  intent: string;
  rationale: string;
  tokens: Record<string, string>;
  // small concept-level differences beyond palette
  typographyNote: string;
  motionNote: string;
}> = [
  {
    key: 'A',
    name: 'Trust + premium editorial',
    intent: 'Calm, premium, design-led. Neutral base with a subtle teal/steel accent.',
    rationale: 'Closest to the logo’s understated confidence. Accent reads modern without feeling “corporate blue”.',
    tokens: {
      Ink: '#1F2527',
      Canvas: '#FAFAF8',
      Surface: '#FFFFFF',
      Border: '#E6E7E8',
      Accent: '#2F6F73',
      'Accent hover': '#25585B',
    },
    typographyNote: 'Slightly editorial heading weight + tighter tracking (premium feel).',
    motionNote: 'Subtle hover/press states only; avoid scroll theatrics.',
  },
  {
    key: 'B',
    name: 'Modern finance / confident blue',
    intent: 'Crisp, high-trust, enterprise-clean. Blue accent for CTAs and links.',
    rationale: 'If you want the most explicit “trust” signal, blue does that immediately, especially on a white canvas.',
    tokens: {
      Ink: '#111827',
      Canvas: '#F8FAFC',
      Surface: '#FFFFFF',
      Border: '#E5E7EB',
      Accent: '#1D4ED8',
      'Accent hover': '#1E40AF',
      'Accent soft': '#DBEAFE',
    },
    typographyNote: 'More utilitarian typography (slightly larger body, less “editorial”).',
    motionNote: 'Minimal; focus on clarity and predictable interactions.',
  },
  {
    key: 'C',
    name: 'Warm premium (lighter)',
    intent: 'Soft warmth and understated luxury. Cream canvas + restrained bronze accent.',
    rationale: 'Adds warmth without turning the whole UI brown; feels boutique and personal.',
    tokens: {
      Ink: '#1E2426',
      Canvas: '#FBFAF7',
      Surface: '#FFFFFF',
      Border: '#E7E2D8',
      Accent: '#B8894A',
      'Accent hover': '#8F6B39',
      'Accent soft': '#F3E9DD',
    },
    typographyNote: 'Slightly softer type rhythm; generous line-height.',
    motionNote: 'Very subtle; warmth should come from colour + spacing, not animation.',
  },
  {
    key: 'D',
    name: 'Ultra-minimal monochrome + emerald',
    intent: 'Maximum whitespace and contrast, with a single “confidence” emerald accent.',
    rationale: 'A “fourth direction” that is unmistakably modern and premium; accent is rare and purposeful.',
    tokens: {
      Ink: '#0B0F12',
      Canvas: '#FFFFFF',
      Surface: '#FFFFFF',
      Border: '#E7EBEF',
      Accent: '#0F766E',
      'Accent hover': '#115E59',
      'Accent soft': '#CCFBF1',
    },
    typographyNote: 'Hard minimalist: bigger headings, very clean hierarchy.',
    motionNote: 'None beyond hover/focus; the “feel” is purely layout + type.',
  },
];

export function conceptByKey(key: string) {
  return concepts.find((c) => c.key === key) ?? concepts[0];
}
