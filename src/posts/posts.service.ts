import { Request, Response } from 'express';
import axios from 'axios';
import { nanoid } from 'nanoid';
import * as cheerio from 'cheerio';
import { PostsType } from './posts.model';

const _axios = async ({ url }: { url: string }) => {
  try {
    const response = await axios.get(url);
    return cheerio.load(response.data);
  } catch (e) {
    console.error(e);
  }
};

export const getVelogPosts = async (req: Request, res: Response) => {
  try {
    const $ = (await _axios({ url: 'https://velog.io' })) as cheerio.CheerioAPI;
    const $posts = $('.sc-jgrJph');
    const posts: Array<PostsType> = [];

    $posts.each((_, el) => {
      const $el = $(el);
      const $title = $el.find('.sc-hUpaCq h4');
      const $description = $el.find('.sc-hUpaCq p');
      const $link = $el.find('.sc-hUpaCq');
      const $image = $el.find('.sc-hUpaCq img');

      posts.push({
        id: nanoid(),
        title: $title.text(),
        description: $description.text(),
        link: `https://velog.io${$link.attr('href')}`,
        image: $image.attr('src') as string,
      });
    });

    res.send(posts);
  } catch (e) {
    console.log(e);
  }
};

export const getYozmPosts = async (req: Request, res: Response) => {
  try {
    const $ = (await _axios({ url: 'https://yozm.wishket.com/magazine' })) as cheerio.CheerioAPI;
    const $posts = $('.list-item');
    const posts: Array<PostsType> = [];

    $posts.each((_, el) => {
      const $el = $(el);
      const $title = $el.find('.item-title');
      const $description = $el.find('.item-main p');
      const $link = $el.find('.list-item-thumbnail a');
      const $image = $el.find('.thumbnail-image');

      posts.push({
        id: nanoid(),
        title: $title.text(),
        description: $description.text(),
        link: `https://yozm.wishket.com${$link.attr('href')}`,
        image: `https://yozm.wishket.com${$image.attr('src')}` as string,
      });
    });
    res.send(posts);
  } catch (e) {
    console.log(e);
  }
};
