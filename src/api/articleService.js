export default {
    getArticles: `/users`,
    createArticle: `/users`,
    updateArticle: (articleId) => `/users/${articleId}`,
    showArticle: (articleId) => `/users/${articleId}`,
    deleteArticle: (articleId) => `/users/${articleId}`,
};
