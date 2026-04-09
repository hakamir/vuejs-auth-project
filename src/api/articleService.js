export default {
    getArticles: `/collections/articles/records?project_id=10153`,
    createArticle: `/collections/articles/records?project_id=10153`,
    updateArticle: (articleId) => `/collections/articles/records/${articleId}?project_id=10153`,
    getArticle: (articleId) => `/collections/articles/records/${articleId}?project_id=10153`,
    deleteArticle: (articleId) => `/users/${articleId}`,
};