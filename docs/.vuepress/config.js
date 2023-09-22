module.exports = {
    title: 'BaoYuan',
    description: 'Thematic study',
    themeConfig: {
        logo: '/tx.png',
        nav: [
            //{ text: 'Home', link: '/' },
            //{ text: 'Guide', link: '/guide/' },
            { text: '联系', link: 'https://t.me/BaoYuanY' },
        ],
        //search: true,
        //searchMaxSuggestions: 10,
        algolia: {
            apiKey: '4819e020eca64964cfb4072be1e0f284',
            indexName: 'yangbaoyuan',
            // 如果 Algolia 没有为你提供 `appId` ，使用 `BH4D9OD16A` 或者移除该配置项
            appId: 'ZBA042F24F',
            insights: true, // Optional, automatically send insights when user interacts with search results
            container: '### REPLACE ME WITH A CONTAINER (e.g. div) ###',
            debug: false // Set debug to true if you want to inspect the modal
        }
    }
}