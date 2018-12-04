const getNewsHTML = (title, publishedAt, description, urlToImage, url) => `
    <div class="news">
        <h1 class="news_title">${title}</h1>
        <div class="news_publishedAt">${publishedAt}</div>
        <h3 class="news_description">${description}</h3>
        <img class="news_urlToImage" src="${urlToImage}">
        <a class="news_url" target="_blank" rel="noopener" href="${url}">Read more</a>
    </div>
`;

export {getNewsHTML};
