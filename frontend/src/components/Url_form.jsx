import React from "react";
import { useState } from "react";
import axios from "axios";
import { QueryClient, useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createShorturl } from "../api/shortUrl.api";

const Url_form = () => {

  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("")
  const [copied, setCopied] = useState(false)
  
  const handleSubmit = async(e)=> {
    e.preventDefault()
    const shortUrl = await createShorturl(url)
    setShortUrl(shortUrl)    
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shortUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div>
      <form>
        <input
          type="url"
          id="url"
          placeholder="Enter your URL..."
          value={url}
          onInput={(event)=>setUrl(event.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded mb-3 focus:outline-none focus:border-blue-500"
          required
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full py-2 bg-blue-500 text-white font-medium rounded hover:bg-blue-600 disabled:bg-blue-300"
        >
          Shorten Link
        </button>
      </form>

      {shortUrl && (
        <div className="mt-6 p-4 bg-gray-50 rounded">
          <p className="text-sm text-gray-500 mb-2">Shortened URL:</p>
          <div className="flex items-center gap-2">
            <a
              href={shortUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-blue-500 text-sm break-all hover:underline"
            >
              {shortUrl}
            </a>
            <button
              onClick={copyToClipboard}
              className={`px-4 py-2 rounded-r-md transition-colors duration-20 ${copied ? 'bg-green-500 text-white hover:bg-green-600': 'bg-gray-200 hover:bg-gray-300'}`}
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Url_form;
