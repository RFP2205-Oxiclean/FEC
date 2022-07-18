import React, { useState, useEffect } from "react";
import { createCloudinaryDisplayURL, createCloudinaryThumbnailURL } from "/src/services/Cloudinary.jsx";
import axios from "axios";

const resolutionHook = function (url) {
  let [available, setAvailable] = useState(url);
  let hq_url = createCloudinaryDisplayURL(url);

  useEffect(() => {
    axios.get(hq_url).then(() => {
      setAvailable(hq_url);
    });
  }, []);

  return available;
};

export default resolutionHook;
