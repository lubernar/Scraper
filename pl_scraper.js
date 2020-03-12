const axios = require('axios');
const cheerio = require('cheerio');

const url = 'https://www.hauserwirth.com/artists';

axios(url)
	.then(response => {
		const html = response.data;
		const $ = cheerio.load(html);
		const artists = $('.hw-collection-index > ul > li > span > a');
		const artistsNames = [];
		artists.each(function () {
			const names = $(this).find('span').text();

			artistsNames.push({
				names,
			});
		});
		const artistsNamesJson = JSON.stringify(artistsNames);
		console.log(artistsNamesJson);
	})
	.catch(console.error);