if(!self.define){let e,s={};const a=(a,i)=>(a=new URL(a+".js",i).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(i,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const o=e=>a(e,c),r={module:{uri:c},exports:t,require:o};s[c]=Promise.all(i.map((e=>r[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-c06b064f"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/126-2fd3eaff212afe88.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/138-960f4513ac5b8135.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/160b575a-999721e0e2ee774e.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/330-579f01c5ee89b353.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/353-4f8f80a0c7d71b85.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/468-00a90b96dfd3925f.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/608-427c972ce55f5501.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/829-dcaf91a1418fbf9a.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/app/_not-found-d89d7806323f0f1c.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/app/categories/art/page-d6805fbdc76a6658.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/app/categories/dance/page-195b9bdb6a12dfbe.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/app/categories/music/page-b516eac9099959de.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/app/categories/theatre/page-8934ef731a7a54d3.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/app/categories/writing/page-9fc03faebe44f544.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/app/contactus/page-92952b559a9e254c.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/app/discover/page-3bda3550911512f7.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/app/feedback/page-ce83f09717184fda.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/app/forgot/page-493bbf4ba8ed301a.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/app/home/page-e2637a1d6513ae23.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/app/layout-e34c65446933b48a.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/app/login/page-7f51fb53aba5087f.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/app/page-66ab359542e343f1.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/app/profile/page-8f2b49f456ef7089.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/app/upload/page-dca0b5b12dd42d12.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/app/uploaded/page-5ddaf12acd5f934a.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/app/username/page-362a7323b0c25924.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/fd9d1056-187a0f18ebe22e2d.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/framework-aec844d2ccbe7592.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/main-app-ea8b33fdfadc5d29.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/main-e93249e2a6848da5.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/pages/_app-75f6107b0260711c.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/pages/_error-9a890acb1e81c3fc.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-51e078889058e686.js",revision:"ukpuopNBzoQ7vME3e0fkY"},{url:"/_next/static/css/51294cb0c502c005.css",revision:"51294cb0c502c005"},{url:"/_next/static/media/05a31a2ca4975f99-s.woff2",revision:"f1b44860c66554b91f3b1c81556f73ca"},{url:"/_next/static/media/513657b02c5c193f-s.woff2",revision:"c4eb7f37bc4206c901ab08601f21f0f2"},{url:"/_next/static/media/51ed15f9841b9f9d-s.woff2",revision:"bb9d99fb9bbc695be80777ca2c1c2bee"},{url:"/_next/static/media/c9a5bc6a7c948fb0-s.p.woff2",revision:"74c3556b9dad12fb76f84af53ba69410"},{url:"/_next/static/media/d6b16ce4a6175f26-s.woff2",revision:"dd930bafc6297347be3213f22cc53d3e"},{url:"/_next/static/media/ec159349637c90ad-s.woff2",revision:"0e89df9522084290e01e4127495fae99"},{url:"/_next/static/media/fd4db3eb5472fc27-s.woff2",revision:"71f3fcaf22131c3368d9ec28ef839831"},{url:"/_next/static/ukpuopNBzoQ7vME3e0fkY/_buildManifest.js",revision:"e0a21c7d7f93d89dce16df0231dc76f2"},{url:"/_next/static/ukpuopNBzoQ7vME3e0fkY/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/icons/icons.png",revision:"f9aa10adb0abae612a634ef340852476"},{url:"/images/SocMed.png",revision:"c043780e97d81fd7a09af37da0853361"},{url:"/images/account.svg",revision:"7248e6a281d5d0e8dfb395cd8ce6c5be"},{url:"/images/art_large.png",revision:"d09716eb58255a7d25cdef81cd31e605"},{url:"/images/contact.png",revision:"b6fc57801ec9d2a9238d1fc22fca0f1d"},{url:"/images/contactus.svg",revision:"7dc2d66b7f390462e071c39f33e102f5"},{url:"/images/dancing.png",revision:"155b6de4ca26209c3430c6f8ca24e624"},{url:"/images/dancing_large.png",revision:"3b1e04c42edb433e45d3f8da9e7b343f"},{url:"/images/discover.svg",revision:"6368b215285ce1c2a04af258f5290662"},{url:"/images/drawing.png",revision:"9441b15f71c108ba5287669720b4f9e9"},{url:"/images/home.svg",revision:"f13591b5fcf2af663cff4b9b7a298cf2"},{url:"/images/logo.png",revision:"ad7c7ad70dc72890ef971ec9b0fd445b"},{url:"/images/music.png",revision:"3d612755495bd4fa6e413008ce65c741"},{url:"/images/music_large.png",revision:"e32e710feacf429d246595727b422ecd"},{url:"/images/posts.svg",revision:"a72c6ab5546c49e86b3b5cfb92ce8321"},{url:"/images/profile.svg",revision:"460b315cce9a66df87e0062742f74b56"},{url:"/images/rectangle-alt.png",revision:"36360985b0f7e945ea13fda21a65ff27"},{url:"/images/rectangle-design-alt.png",revision:"374d5e54ef2016786462107db2f0a7c2"},{url:"/images/rectangle-design.png",revision:"6a4bf70c611c5850d91cfad9fb5038e0"},{url:"/images/rectangle.svg",revision:"f89489f02688765e10bdb0a4601e63b8"},{url:"/images/rectangle1.png",revision:"cc2a756d4f199b043ef48106013c64e9"},{url:"/images/support.svg",revision:"a61d61489b785de8feb7a6b1f8c0a3c3"},{url:"/images/theatre.png",revision:"058a438e2245d1475517aa14aa3e68a9"},{url:"/images/theatre_large.png",revision:"33fd66371a408e7478145a6541c0d3c7"},{url:"/images/upload-bg.png",revision:"4b614d3c46f04c3672001f87589e0d66"},{url:"/images/upload.svg",revision:"4b19eb60dc1d8861fca6f86685e29f45"},{url:"/images/writing.png",revision:"a41fc23ce9c449b3b1f2c2edca6ca56b"},{url:"/images/writing_large.png",revision:"c090981c72730897f9be7903709b5002"},{url:"/manifest.json",revision:"97d131c33bd3e1398bc08f102de1f118"},{url:"/next.svg",revision:"8e061864f388b47f33a1c3780831193e"},{url:"/vercel.svg",revision:"61c6b19abff40ea7acd577be818f3976"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:a})=>"1"===e.headers.get("RSC")&&a&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
