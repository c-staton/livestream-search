# Livestream Search

An application used to search for livestreams from both Twitch and YouTube, built with React, Redux, JavaScript, and CSS.

## Live link:

Access the live site at [livestreamsearch.com](https://www.livestreamsearch.com)

## Screenshots

<p float="left">
  <img width="300" alt="homepage" src="https://user-images.githubusercontent.com/105070147/200083937-bc3696f7-eac1-43a1-af47-fbf8623dd8c0.png">
  
  <img width="300" alt="stream-categories" src="https://user-images.githubusercontent.com/105070147/200083933-7a9e41ae-3949-42fc-8711-9be19278eabe.png">
 
</p>

<p float="left">
  <img width="300" alt="stream-search" src="https://user-images.githubusercontent.com/105070147/200083932-92eb21ac-aa8c-4e36-a665-276ac1119e4c.png">

<img width="300" alt="live-top-streamers" src="https://user-images.githubusercontent.com/105070147/200083929-57f02085-03e6-4905-8be5-42da665b8e45.png">
</p>

## About the App

Livestream Search is an app that will search across Twitch and Youtube for relevant livestreams based on a given category. Having streams from both major streaming platforms eliminates the need to search for streamers exclusive to a particular site. As a streamer this also alleviates the worry of discoverability for the specific platform you chose to stream on. Instead streamers can focus on the content rather than the site they are on, and viewers can browse all streams from either platform all in one place.

Livestream Search also features a top streamers page, that consolidates some of the biggest and most-watched streamers all on one page. Many top streamers change the platform they stream on when their contract ends and they seek for the best deal they can sign. This causes the streamers fanbase to slightly change as many viewers won't move platforms with the streamer and end up missing their new streams. Now users are able to see all the top streamers in one place without the platform being a factor in their choice of who to watch.

## Set Up

To run Livestream Search locally follow these steps:

- download or clone the repository
- run `npm install`
- follow the [Twitch API docs](https://dev.twitch.tv/docs/api/get-started) to get your Twitch Client ID and OAuth token
- follow the [YouTube API docs](https://developers.google.com/youtube/v3/getting-started) to get your YouTube API key
- create .env variables:
  - `REACT_APP_TWITCH_CLIENT_ID = {your_twitch_client_id}`
  - `REACT_APP_TWITCH_AUTH = {your_twitch_oauth_token}`
  - `REACT_APP_YT_API = {your_yt_api_key}`
- run `npm start`
