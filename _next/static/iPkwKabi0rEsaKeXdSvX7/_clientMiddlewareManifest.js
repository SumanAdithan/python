self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/python(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!api|llms.txt|llms-full.txt|llms.mdx|og|_next\\/static|_next\\/image|favicon.ico).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!api|llms.txt|llms-full.txt|llms.mdx|og|_next/static|_next/image|favicon.ico).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()