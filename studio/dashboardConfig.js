export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '633c6232890c574db9575609',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-zixf5f5t',
                  apiId: 'd35af8ec-756e-42b7-9852-78568ecca38d'
                },
                {
                  buildHookId: '633c62325c3f404c56a5e7ee',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-dswd865v',
                  apiId: 'd18172ad-a5ba-46d7-98bd-dbf857932dd5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/iareebhussein/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-dswd865v.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
