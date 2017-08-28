/* exported header, cachePingBody, images, mixedMedia, folderImage, bucketImage, imagesAndFolders, noFolder, emptyFolder, apiError, xhr, requests */

/* eslint-disable indent */

var header = { "Content-Type": "application/json" },
  cachePingBody = {
    "name": "rise-cache-v2",
    "version": "1.7.2"
  },
  images = {
    "result": true,
    "code": 200,
    "files": [ {
      "name": "images/",
      "contentType": "text/plain",
      "updated": "2015-02-04T17:44:00.549Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2F",
      "etag": "CIjxrtzryMMCEAE=",
      "isThrottled": false
    },
      {
        "name": "images/home.jpg",
        "contentType": "image/jpeg",
        "updated": "2015-02-04T17:45:25.945Z",
        "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fhome.jpg",
        "etag": "COjLvarr/cQCEAE=",
        "isThrottled": false
      },
      {
        "name": "images/circle.png",
        "contentType": "image/png",
        "updated": "2015-02-06T14:25:11.312Z",
        "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fcircle.png",
        "etag": "CMiEudSn2MMCEAs=",
        "isThrottled": false
      },
      {
        "name": "images/my-image.bmp",
        "contentType": "image/bmp",
        "updated": "2015-02-06T11:24:13.313Z",
        "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fmy-image.bmp",
        "etag": "CJi3zten2MMCEA0=",
        "isThrottled": false
      } ]
  },
  mixedMedia = {
    "result": true,
    "code": 200,
    "files": [ {
      "name": "images/",
      "contentType": "text/plain",
      "updated": "2015-02-04T17:44:00.549Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2F",
      "etag": "CIjxrtzryMMCEAE=",
      "isThrottled": false
    },
      {
        "name": "images/home.jpg",
        "contentType": "image/jpeg",
        "updated": "2015-02-04T17:45:25.945Z",
        "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fhome.jpg",
        "etag": "COjLvarr/cQCEAE=",
        "isThrottled": false
      },
      {
        "name": "images/circle.png",
        "contentType": "image/png",
        "updated": "2015-02-06T14:25:11.312Z",
        "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fcircle.png",
        "etag": "CMiEudSn2MMCEAs=",
        "isThrottled": false
      },
      {
        "name": "images/my-image.bmp",
        "contentType": "image/bmp",
        "updated": "2015-02-06T11:24:13.313Z",
        "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fmy-image.bmp",
        "etag": "CJi3zten2MMCEA0=",
        "isThrottled": false
      },
      {
        "name": "images/golf.svg",
        "contentType": "image/svg+xml",
        "updated": "2015-01-30T08:19:09.263Z",
        "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fgolf.svg",
        "etag": "CPjC1qHc7MQCEAE=",
        "isThrottled": false
      },
      {
        "name": "images/turtle.gif",
        "contentType": "image/gif",
        "updated": "2015-02-04T17:46:31.263Z",
        "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fturtle.gif",
        "etag": "CLCKypbW/cQCEAE=",
        "isThrottled": false
      },
      {
        "name": "images/car-ad.mp4",
        "contentType": "video/mp4",
        "updated": "2015-02-02T10:03:11.263Z",
        "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fcar-ad.mp4",
        "etag": "CKCa+Y2nq8MCEAM=",
        "isThrottled": false
      },
      {
        "name": "images/walking-dead.ogv",
        "contentType": "video/ogg",
        "updated": "2015-02-01T09:08:15.263Z",
        "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fwalking-dead.ogv",
        "etag": "CJC2jJrFqsMCEAE=",
        "isThrottled": false
      },
      {
        "name": "images/south-park.webm",
        "contentType": "video/webm",
        "updated": "2015-02-03T19:13:45.263Z",
        "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fsouth-park.webm",
        "etag": "CLDO+JDspcMCEAE=",
        "isThrottled": false
      } ]
  },
  folderImage = {
    "result": true,
    "code": 200,
    "files": [ {
      "name": "images/home.jpg",
      "contentType": "image/jpeg",
      "updated": "2015-02-04T17:45:25.945Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fhome.jpg",
      "etag": "COjLvarr/cQCEAE=",
      "isThrottled": false
    } ]
  },
  bucketImage = {
    "result": true,
    "code": 200,
    "files": [ {
      "contentType": "image/jpeg",
      "etag": "COjLvarr/cQCEAE=",
      "name": "home.jpg",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/home.jpg",
      "updated": {
        "value": "1431455000152",
        "dateOnly": false,
        "timeZoneShift": 0
      },
      "isThrottled": false
    } ],
    "bucketExists": true,
    "kind": "storage#filesItem",
    "etag": "\"-xn2BkoYzbrr0EhwVLI1-3fTi7c/1Ev8FzsCppGm6uDNrJyFySGIKrI\""
  },
  imagesAndFolders = {
    "files": [ {
      "name": "images/",
      "contentType": "text/plain",
      "updated": "2015-02-04T17:44:00.549Z",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2F",
      "etag": "CIjxrtzryMMCEAE=",
      "isThrottled": false
    },
      {
        "name": "images/home.jpg",
        "contentType": "image/jpeg",
        "updated": "2015-02-04T17:45:25.945Z",
        "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fhome.jpg",
        "etag": "COjLvarr/cQCEAE=",
        "isThrottled": false
      },
      {
        "name": "images/subfolder1/",
        "contentType": "text/plain",
        "updated": "2015-02-04T17:44:00.549Z",
        "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fsubfolder1%2F",
        "etag": "CIjxrtzryMMCEAE=",
        "isThrottled": false
      },
      {
        "name": "images/circle.png",
        "contentType": "image/png",
        "updated": "2015-02-06T14:25:11.312Z",
        "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fcircle.png",
        "etag": "CMiEudSn2MMCEAs=",
        "isThrottled": false
      },
      {
        "name": "images/subfolder2/",
        "contentType": "text/plain",
        "updated": "2015-02-04T17:44:00.549Z",
        "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2Fsubfolder2%2F",
        "etag": "CIjxrtzryMMCEAE=",
        "isThrottled": false
      } ]
  },
  noFolder = {
    "result": true,
    "code": 200,
    "bucketExists": true,
    "kind": "storage#filesItem",
    "etag": "\"-xn2BkoYzbrr0EhwVLI1-3fTi7c/nRo7jDSle-_CoystXctokYbq8Pc\""
  },
  emptyFolder = {
    "result": true,
    "code": 200,
    "files": [ {
      "contentType": "text/plain",
      "etag": "CODYtNjV+ccCEAE=",
      "name": "Donna/",
      "selfLink": "https://www.googleapis.com/storage/v1/b/risemedialibrary-abc123/o/images%2F",
      "updated": {
        "value": "1442341739897",
        "dateOnly": false,
        "timeZoneShift": 0
      },
      "isThrottled": false
    } ],
    "bucketExists": true,
    "kind": "storage#filesItem",
    "etag": "\"-xn2BkoYzbrr0EhwVLI1-3fTi7c/1Ev8FzsCppGm6uDNrJyFySGIKrI\""
  },
  apiError = {
    "result": false,
    "code": 500,
    "message": "Could not retrieve Bucket Items"
  },
  xhr,
  requests;

/* eslint-enable indent */
