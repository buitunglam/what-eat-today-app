import { Roboto, Permanent_Marker, Fredoka } from 'next/font/google';

const roboto_init = Roboto({
    subsets: ['latin'],
    weight: ['100', '300', '700', '900'],
    variable: '--font-roboto',
});

const fredoka_init = Fredoka({
    subsets: ['latin'],
    weight: ['400', '500'],
    variable: '--font-fredoka',
});

export const roboto = roboto_init.variable;
export const fredoka = fredoka_init.variable;