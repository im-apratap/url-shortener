import {Router} from "express"
import { ShortUrl } from "../models/shortUrl.model.js"
import { createUrl, shortUrl } from "../controllers/shortUrl.controller.js"
const router = Router()


router.route("/:shortUrl").get(shortUrl)
router.route("/create").post(createUrl)

export default router