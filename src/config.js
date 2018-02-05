const siteConfig = {
  siteName: 'New York Time',
  footerText: '',
	imageRootPath: 'http://www.nytimes.com/'
};

const apiConfig = {
  url: `https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=${process.env.API_KEY}`
};

const masonryOptions = {
	columns: 3,
	gutter: 10,
	transitionDuration: 200,
	percentPosition: true,
	fitWidth: true
};

export {
  apiConfig,
  siteConfig,
	masonryOptions
};
