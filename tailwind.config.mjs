/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            '--tw-prose-body': theme('colors.zinc[300]'),
            '--tw-prose-headings': theme('colors.zinc[50]'),
            '--tw-prose-links': theme('colors.amber[400]'),
            '--tw-prose-bold': theme('colors.zinc[200]'),
            '--tw-prose-counters': theme('colors.zinc[400]'),
            '--tw-prose-bullets': theme('colors.zinc[500]'),
            '--tw-prose-hr': theme('colors.zinc[700]'),
            '--tw-prose-quotes': theme('colors.zinc[300]'),
            '--tw-prose-quote-borders': theme('colors.amber[500]'),
            '--tw-prose-code': theme('colors.amber[400]'),
            '--tw-prose-pre-bg': theme('colors.zinc[900]'),
            '--tw-prose-th-borders': theme('colors.zinc[700]'),
            '--tw-prose-td-borders': theme('colors.zinc[800]'),
            'a': {
              textDecoration: 'none',
              '&:hover': { textDecoration: 'underline' },
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
