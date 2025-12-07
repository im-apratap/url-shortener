import { ShortUrl } from "../models/shortUrl.model.js";
import { generateNanoId } from "../utils/helper.js";

const shortUrl = async(req,res)=>{
    const { shortUrl } = req.params;
    const url = await ShortUrl.findOne({ short_url: shortUrl });

    if (url) {
      res.redirect(url.full_url);
    } else {
      res.status(404).send("NOT Found");
    }
}

const createUrl = async(req,res)=>{
    const { url } = req.body;
    const chotuUrl = generateNanoId(7);
    const newUrl = new ShortUrl({
      full_url: url,
      short_url: chotuUrl,
    })
    await newUrl.save()
    res.send(`Short Url created successfully: ${chotuUrl}`)
}

export {shortUrl, createUrl}