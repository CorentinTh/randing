<p align="center">
    <img src=".github/logo.png" alt="logo" width="400">
</p>

-------


<p align="center">
    <a href="https://travis-ci.com/CorentinTh/randing">
        <img src="https://travis-ci.com/CorentinTh/randing.svg?token=9AFtbFzoBgurrPixVEqi&branch=master" alt="travis-badge">
    </a>
    <a href="https://travis-ci.com/CorentinTh/randing">
        <img src="https://img.shields.io/github/languages/top/CorentinTh/randing.svg?style=flat" alt="language-badge">
    </a>
    <a href="LICENCE">
        <img src="https://img.shields.io/github/license/CorentinTh/randing.svg?style=flat" alt="licence-badge">
    </a>
    <a href="https://github.com/facebook/jest">
        <img src="https://img.shields.io/badge/tested_with-jest-99424f.svg" alt="jest-badge">
    </a>
</p>


Random + String = RandingEasily generate configurable random string and token 

## Installation 

Easy installation using `yarn` or `npm`:

```bash
yarn add randing
  # or
npm install randing --save
```


## Usage

```javascript
const randing = require('randing');

console.log(randing()); 	// UIVfjWVjN1UjyhMepVXPtcnVO9yi7uENJULhhbQMxpot2o2rP6
console.log(randing(10));	// ejcWWx3coe
console.log(randing(60, {
    special:true,
    uppercase:false,		// n-*sh[]b@q?le<p>||p<kh}ua}:d+r|eq?t}!.}.gl@hkgfad|t{.@:z=ujq
    figures:false,
}));
console.log(randing(60, {
    alphabet:'azerty',		// teeerrrtezezytyytarz
}))
```

## API

<!-- doc begin -->

<a name="randing"></a>

### randing(length, [config]) ⇒ <code>string</code>
Generate a random string (token)

**Kind**: global function  
**Returns**: <code>string</code> - - A random string of size length  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| length | <code>number</code> | <code>50</code> | Length (in character) of the returned string |
| [config] | <code>object</code> |  | Configuration for the token generation |
| [config.lowercase] | <code>boolean</code> | <code>true</code> | Allow lowercase letters in the token |
| [config.uppercase] | <code>boolean</code> | <code>true</code> | Allow uppercase letters in the token |
| [config.figures] | <code>boolean</code> | <code>true</code> | Allow figures in the token |
| [config.special] | <code>boolean</code> | <code>false</code> | Allow special characters in the token |
| [config.alphabet] | <code>string</code> |  | A string of characters to generate the random token from |



<!-- doc end -->

## Credit

Created by [Corentin Thomasset](corentin-thomasset.fr). 
