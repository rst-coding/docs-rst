import mdItCustomAttrs from "markdown-it-custom-attrs"; // 引入 markdown-it 的自定义属性插件
import {defineConfig} from "vitepress"; // 引入 VitePress 的配置方法
import {set_sidebar} from "../guide/set_sidebar.mjs"; // 引入自定义侧边栏生成函数

export default defineConfig({
    base: "/docs-rst", // 部署到 GitHub Pages 时的仓库名（用于资源路径前缀）
    title: "rst-blog", // 站点标题
    lang: "zh-CN", // 语言设置
    description: "个人博客", // 站点描述
    head: [
        ["meta", {name: "author", content: "rst"}], // 设置作者 meta 标签
        ["meta", {name: "keywords", content: "blog,"}], // 设置关键词 meta 标签
        ["link", {rel: "icon", href: "/favicon.ico"}], // 设置网站图标
        ["link", {rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css"}], // 引入 fancybox 的样式
        ["script", {src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js"}], // 引入 fancybox 的 JS
    ],
    markdown: { // Markdown 配置
        config: (md) => md.use(mdItCustomAttrs, "image", {"data-fancybox": "gallery"}) // 给图片添加 data-fancybox 属性
    },
    lastUpdated: true, // 显示文档最后更新时间
    themeConfig: { // 主题相关配置
        logo: "/icon.png", // 站点 logo
        //搜索
        search: {
            provider: "local" // 使用本地搜索
        },
        outline: {
            level: [2, 4], // 显示 2-4 级标题作为大纲
            // level: 'deep', // 显示 2-6 级标题（已注释）
            label: '当前页大纲' // 大纲标题文字
        },
        editLink: {
            text: "为此页提供修改建议", // 编辑链接显示文字
            pattern: "https://github.com/rst-coding", // 编辑链接跳转地址
        },
        socialLinks: [{icon: "github", link: "https://github.com/rst-coding"}], // 社交链接（GitHub）
        footer: {
            message: "MIT License.", // 页脚许可证信息
            copyright: "Copyright © 2025 啦啦啦", // 页脚版权信息
        },
        nav: [ // 顶部导航栏配置
            {text: "指引", link: "/guide/introduce/introduce/introduce", activeMatch: "/guide/introduce/"}, // 指引页面
            {text: "文档", link: "/guide/docs/doc", activeMatch: "/guide/docs/"}, // 文档页面
            {
                text: "相关链接", // 下拉菜单
                items: [
                    {
                        text: "Github 仓库", // GitHub 仓库链接
                        link: "https://github.com/rst-coding"
                    },
                    {
                        text: "Gitee 仓库", // Gitee 仓库链接
                        link: "https://gitee.com/rensongtaogitee"
                    },
                ]
            }
            // ,
            // {text: "🍵 赞助", link: "/sponsor/index"}, // 赞助页面（已注释）
        ],

        sidebar: { // 侧边栏配置
            "/guide/introduce/": set_sidebar('/guide/introduce',false), // 指引相关侧边栏
            "/guide/docs/": set_sidebar('/guide/docs'), // 文档相关侧边栏
        },
    },
    vite: { // Vite 相关配置
        plugins: [], // Vite 插件列表（目前为空）
    },
});
