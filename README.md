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
</p>





<!-- doc begin -->

<a name="randing"></a>

## randing(length, [config]) ⇒ <code>string</code>
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
