/**
 * Master Smile Studio - Central Design System Tokens
 * 
 * Provides unified theme colors, shadows, and transitions across all UI components.
 */

export const THEME = {
  colors: {
    // Primary Luxury Palette
    primary: '#FFA552',
    primaryHover: '#ff9838',
    primaryLight: '#FFF5EA',
    primaryBorder: '#ffedd5',
    primaryDark: '#D58936',
    amberDark: '#92400E',
    
    // Backgrounds & Surfaces
    bgLight: '#fcfcfd',
    bgWhite: '#ffffff',
    bgDark: '#09090b',
    bgCardDark: '#121214',
    bgInputDark: '#18181b',
    borderDark: '#27272a',
    
    // Typography & Text
    textHeadingDark: '#0f172a',
    textMuted: '#64748b',
    textSubtle: '#475569',
    textLight: '#ffffff',
    textLightMuted: '#a1a1aa',
    
    // Accent Badges
    badgeGold: '#d97706',
    badgeGreen: '#16a34a',
  },
  
  shadows: {
    soft: '0 4px 20px rgba(0, 0, 0, 0.04)',
    medium: '0 10px 30px rgba(0, 0, 0, 0.08)',
    glow: '0 12px 30px rgba(217, 119, 6, 0.25)',
    darkGlow: '0 20px 40px rgba(0, 0, 0, 0.6)',
  },
  
  transitions: {
    smooth: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
    fast: 'all 0.15s ease',
  },
  
  radii: {
    sm: '6px',
    md: '10px',
    lg: '16px',
    xl: '24px',
    full: '9999px',
  },
} as const;

export type ThemeType = typeof THEME;
