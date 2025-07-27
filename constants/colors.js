// constants/theme.js
export const COLORS = {
  primary: '#fa681a',
  secondary: '#64748B',
  background: '#F8FAFC',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#9CA3AF',
  error: '#EF4444',
  link: '#2563EB',
};

export const SIZES = {
  base: 8,
  font: 14,
  radius: 10,
  padding: 16,
};

export const FONTS = {
  regular: {
    fontFamily: 'System',
    fontSize: SIZES.font,
    color: COLORS.black,
  },
  header: {
    fontFamily: 'System',
    fontSize: 24,
    fontWeight: 'bold',
    color: COLORS.black,
  },
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  medium: {
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
};
