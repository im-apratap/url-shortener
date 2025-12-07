import { ENV } from "../config/env.conifg.js";
import { ShortUrl } from "../models/shortUrl.model.js";
import { generateNanoId } from "../utils/helper.js";

const shortUrl = async (req, res) => {
  try {
    const { shortUrl } = req.params;
    const url = await ShortUrl.findOneAndUpdate(
      { short_url: shortUrl },
      { $inc: { clicks: 1 } },
      { new: true }
    );

    if (url) {
      res.redirect(url.full_url);
    } else {
      res.status(404).send("NOT Found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

const createUrl = async (req, res) => {
  try {
    const { url } = req.body;

    if (!url) {
      console.log("URL is required");
    }

    const chotuUrl = generateNanoId(7);

    if(!chotuUrl){
        res.status(500).send("Short Url not generated")
    }
    const newUrl = new ShortUrl({
      full_url: url,
      short_url: chotuUrl,
    });
    await newUrl.save();
    res.send(`http://localhost:${ENV.PORT}/${chotuUrl}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
};

export { shortUrl, createUrl };
