Mobile app tools (mobileapp-tools)
==================================

**Show me the tools, I&#39;ll build the world**

What is it?
-----------

This repository introduces new developers to the fantastic world of Phonegap (http://phonegap.com/about) that Turpial team will use to build the Turpial mobile app. In these tutorials we will try to build a simil-twitter application and find the best tools to develop with Phonegap, for example iScroll to scroll pages or Lawnchair to save data. Enjoy :)

What do I need?
---------------

Just Eclipse, Android SDK and Phonegap! Before start please read the Phonegap Get Started Guide http://phonegap.com/start

Uhm there are a lot of bugs
---------------------------

Yeah, that's true, we just want to show you all the tools that we are going to use in Turpial-mobile as fast as possible! :) bug are fixed there, anyway when we have time we will fix them in the tutorial, but really is not required for our purpose.. Anyway you can contribute with patches here or show us better tools if any, would be awesome :)

Index
-----

- Tutorial 1 (Our first Phonegap application and iScroll):
In this tutorial we are going to implement a simple interface to show a runtime created timeline, using the scroll and playing a sound on start. The amazing thing we want to show is that we are using the same css and media resources of Turpial for desktop.

- Tutorial 2 (A simple template system compatible with Turpial templates):
In this tutorial we are going to implement a simple template system that is able to read a template file and create some html code representing a tweet just passing a hash table like this {username : "myusername", message : "My first tweet" } etc.. You can find the implementation in js/templates.js

- Tutorial 3 (Moving between pages):
We don't want to show only the timeline. We need now to create a cool menu that allows us to switch between stream tweets, mentions, directs and shows our profile. We don't need to define pages for the moment, just make a better header, the menu and the engine, that is the main part of this tutorial.

- Tutorial 4 (Menu and toasts): here we go! first time we import external plugins written in native code (Java in this case)!! These plugin are usually ported on every other platform and this allows us to write the code only in javascript whitout concerning about how the native code works. In this case we imported the "simplemenu" and the "toast plugin" ( ok, I imported someone more but nevermind, we don't need them now ). It's nice to see how it's easy to make them working. I imported the source in my Java code, modified the xml file ( see phonegap documentation first ) and finally I defined my menu using only html and javascript and launching toasts into javascriptcallbacks. Following the code will explain you better :)

- Tutorial 5 (Save data with Lawnchair): coming soon :)

- Tutorial 6 (Globalization and translators contribution): coming soon :)
