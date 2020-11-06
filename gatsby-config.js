module.exports = {
    siteMetadata: {
        siteUrl: `https://www.coralibre.de`,
        title: `CoraLibre`,
        description: `Eine transparente OpenSource-Lösung und Alternative zur Corona-Warn-App ohne Google Services.`,
    },
    plugins: [
        'gatsby-plugin-resolve-src',
        'gatsby-plugin-sass',
        'gatsby-plugin-react-helmet',
        'gatsby-plugin-sitemap',
        {
            resolve: `gatsby-plugin-react-i18next`,
            options: {
                path: `${__dirname}/locales`,
                languages: [`en`, `de`],
                defaultLanguage: `de`,

                i18nextOptions: {
                    interpolation: {
                        escapeValue: false // not needed for react as it escapes by default
                    },
                    keySeparator: false,
                    nsSeparator: false
                }
            }
        },
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/assets/images`,
            },
        },
        {
            resolve: `gatsby-plugin-favicon`,
            options: {
                logo: "./src/assets/images/favicon.png",

                icons: {
                    android: true,
                    appleIcon: true,
                    appleStartup: true,
                    coast: false,
                    favicons: true,
                    firefox: true,
                    yandex: false,
                    windows: false
                }
            }
        }
    ],
}
