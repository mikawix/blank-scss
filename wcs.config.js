module.exports = {
    newComponent: {
        componentsPath: 'src',
        templatesPath: 'src/wcs-component-templates',
    },
    componentsDiscovery: {
        include: ['src/**'],
        exclude: ['src/wcs-component-templates/**'],
    },
    boardGlobalSetup: './src/boards-global-setup.ts',
    scripts: {
        install: {
            title: 'Install',
            description: 'Run install',
            command: 'npm i',
            trigger: ['checkout', 'pull', 'setup'],
        },
    },
};
