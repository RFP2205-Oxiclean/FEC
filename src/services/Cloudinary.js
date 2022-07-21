import { Cloudinary } from "@cloudinary/url-gen";
import { Resize, fillPad, fill, thumbnail, pad } from "@cloudinary/url-gen/actions/resize";
import { color, blurred, predominantGradient } from "@cloudinary/url-gen/qualifiers/background";
import { adjust, improve } from "@cloudinary/url-gen/actions/adjust";

const Cloud = new Cloudinary({
  cloud: {
    cloudName: "drtqaxgfn",
  },
  url: {
    secure: false, // force https, set to false to force http
  },
});

const cachedThumbnail_urls = {};

const createCloudinaryThumbnailURL = function (thumbnail_url) {
  // in case fetch causes site usage?
  if (!cachedThumbnail_urls[thumbnail_url]) {
    let thumbnail = Cloud.image(thumbnail_url);
    thumbnail.setDeliveryType("fetch");
    thumbnail.resize(fill().height(60).width(60)).adjust(improve());
    // thumbnail.roundCorners(max());
    let new_url = thumbnail.toURL();
    cachedThumbnail_urls[thumbnail_url] = new_url;
  }
  return cachedThumbnail_urls[thumbnail_url];
};

const cached_urls = {};

const createCloudinaryDisplayURL = function (url) {
  if (!cached_urls[url]) {
    let image = Cloud.image(url);
    image.setDeliveryType("fetch");
    image
      .resize(
        pad()
          .height(733)
          .width(1100)
          // .gravity(autoGravity())
          .background(predominantGradient())
      )
      .adjust(improve());
    cached_urls[url] = image.toURL();
  }
  return cached_urls[url];
};

const cached_large_urls = {};

export { createCloudinaryThumbnailURL, createCloudinaryDisplayURL };
