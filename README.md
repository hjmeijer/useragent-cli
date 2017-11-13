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
$ echo "Mozilla/5.0 (Windows NT 6.1; Win64; x64; rv:47.0) Gecko/20100101 Firefox/47.0" | useragent
Firefox 47	Windows 7 0.0.0
```
