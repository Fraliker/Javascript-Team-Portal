# SE Stars Portal

# Table of Contents
1. [Summary](#summary)
2. [Author](#author)
3. [Setup](#setup)
4. [Goals](#goals)
5. [Features](#features)
6. [Issues](#issues)
7. [Wishlist](#wishlist)
8. [IP](#ip)

## Summary

A portal for players families and coaches of the se stars little league team to develop community and manage their team.  Members will be able to see their team roster and view details of players.

## Author

David Quisenberry

## Setup

1. `npm install`
2. `bower install`
3. Create a [firebase account](https:firebase.google.com)
4. In project root, create file: `src/app/api-keys.ts` and edit the file to contain:
`export const masterApiKeys = {
apiKey: your-firebase-api-key,
authDomain: 'your-auth-domain.firebaseapp.com',
databaseURL: 'your-database-url.firebaseio.com',
projectId: 'your-project-id',
storageBucket: 'your-storage-bucket.appspot.com',
messagingSenderId: 'your-messaging-senderID'
};
`
5. `npm serve`


## Goals

- Build a web application for managing a team experience

## Features

- Parent View - contact information for each player and team pictures
- Coaches View - Ability to see and add notes on each player
- Ability to sort by skills needing development.

## Issues

## Wishlist
- Create a batting order
- Create fielding positions for each inning.

## IP

MIT Commons
David Quisenberry 2017
