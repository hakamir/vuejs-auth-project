export default {
    getArticles: `/collections/articles/records?project_id=10153`,
    createArticle: `/collections/articles/records?project_id=10153`,
    updateArticle: (articleId) => `/users/${articleId}`,
    showArticle: (articleId) => `/users/${articleId}`,
    deleteArticle: (articleId) => `/users/${articleId}`,
};