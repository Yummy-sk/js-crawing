import axios from 'axios';
import * as cheerio from 'cheerio';
import express from 'express';

const app = express();
const port = 3000;

app.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://velog.io');
    const $ = cheerio.load(response.data);
    const $posts = $('.sc-jgrJph');

    const posts = [];
    $posts.each((_, el) => {
      const $el = $(el);
      const $title = $el.find('.sc-hUpaCq h4');
      const $description = $el.find('.sc-hUpaCq p');
      const $link = $el.find('.sc-hUpaCq');
      const $image = $el.find('.sc-hUpaCq img');

      posts.push({
        title: $title.text(),
        description: $description.text(),
        link: `https://velog.io${$link.attr('href')}`,
        image: $image.attr('src'),
      });
    });

    res.send(posts);
  } catch (e) {
    console.log(e);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
