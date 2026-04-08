self.__BUILD_MANIFEST = {
  "__rewrites": {
    "afterFiles": [],
    "beforeFiles": [
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/f1/f2(?:/.*)?"
          }
        ],
        "source": "/f4",
        "destination": "/f1/f2/(..)(..)f4"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/f1/f2/inner\\-f2(?:/.*)?"
          }
        ],
        "source": "/f5",
        "destination": "/f1/f2/inner-f2/(...)f5"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/f1(?:/.*)?"
          }
        ],
        "source": "/f1/f2",
        "destination": "/f1/(.)f2"
      },
      {
        "has": [
          {
            "type": "header",
            "key": "next-url",
            "value": "/f1(?:/.*)?"
          }
        ],
        "source": "/f3",
        "destination": "/f1/(..)f3"
      }
    ],
    "fallback": []
  },
  "sortedPages": [
    "/_app",
    "/_error"
  ]
};self.__BUILD_MANIFEST_CB && self.__BUILD_MANIFEST_CB()