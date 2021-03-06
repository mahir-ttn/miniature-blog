/* eslint-disable import/no-anonymous-default-export */

import Category from '../../../models/Category';
import slugify from '../../../utils/slugify';

// dbConnect();

export default async (req, res) => {
  if (req.method === 'GET')
    try {
      const doc = await Category.find({});

      return res.status(200).json({ success: true, message: '', data: doc });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: 'Error while fetching from database',
      });
    }

  if (req.method === 'POST')
    try {
      const { title } = req.body;

      const slug = slugify(title);

      await new Category({
        title,
        slug,
      }).save();

      return res.status(200).json({ success: true, message: 'Added' });
    } catch (error) {
      return res
        .status(400)
        .json({ success: false, message: 'slug already in use' });
    }
};
