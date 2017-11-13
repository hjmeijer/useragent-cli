# useragent-cli

A simple command-line tool for determining browser from user agent string. 

Essentially a tiny wrapper around single call to [`useragent.lookup()`](https://github.com/3rd-Eden/useragent#useragentlookupuseragent-string-js-useragent).

Output in this form:

```<browser name>[SPACE]<major version>[TAB]<operating system>```

## dependencies

* nodejs
* npm

## installation

```
git clone git@github.com:hjmeijer/useragent-cli.git
cd useragent-cli
npm install -g
```

## usage example

```$bash
$ echo "Mozilla/5.0 (iPad; CPU OS 9_3_5 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13G36 Safari/601.1" | useragent
Mobile Safari 9	iOS 9.3.5
```
