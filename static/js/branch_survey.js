(function(b,r,a,n,c,h,_,s,d,k){if(!b[n]||!b[n]._q){for(;s<_.length;)c(h,_[s++]);d=r.createElement(a);d.async=1;d.src="https://cdn.branch.io/branch-v1.6.1.min.js";k=r.getElementsByTagName(a)[0];k.parentNode.insertBefore(d,k);b[n]=h}})(window,document,"script","branch",function(b,r){b[r]=function(){b._q.push([r,arguments])}},{_q:[],_v:1},"init data addListener removeListener setIdentity logout track link sendSMS referrals credits creditHistory applyCode validateCode getCode redeem banner closeBanner".split(" "), 0);

branch.init('key_live_dloJWvct5xV5XW32AHWSphkeBBkusF9N');
branch.banner({
   icon: 'http://partywithalocal.com/static/images/logo-square-blue.png',
   title: 'Party With A Local',
   description: 'FREE -  on Google Play and the App Store!',
   openAppButtonText: 'Open',              // Text to show on button if the user has the app installed
   downloadAppButtonText: 'Download',      // Text to show on button if the user does not have the app installed
   sendLinkText: 'Send Link',              // Text to show on desktop button to allow users to text themselves the app
   showiOS: true,                          // Should the banner be shown on iOS devices?
   showAndroid: true,                      // Should the banner be shown on Android devices?
   showDesktop: true,                      // Should the banner be shown on desktop devices?
   iframe: true,                           // Show banner in an iframe, recomended to isolate Branch banner CSS
   disableHide: false,                     // Should the user have the ability to hide the banner? (show's X on left side)
   forgetHide: true,                      // Should we show the banner after the user closes it? Can be set to true, or an integer to show again after X days
   position: 'top',                        // Sets the position of the banner, options are: 'top' or 'bottom', and the default is 'top'
   mobileSticky: false,                    // Determines whether the mobile banner will be set `position: fixed;` (sticky) or `position: absolute;`, defaults to false *this property only applies when the banner position is 'top'
   desktopSticky: true,                    // Determines whether the desktop banner will be set `position: fixed;` (sticky) or `position: absolute;`, defaults to true *this property only applies when the banner position is 'top'
   customCSS: '.title { color: #30baed; } #branch-mobile-action, #branch-mobile-action:hover{ border-bottom: 3px solid #0082b2; background-color: #30baed; }',   // Add your own custom styles to the banner that load last, and are gauranteed to take precedence, even if you leave the banner in an iframe
   make_new_link: false                    // Should the banner create a new link, even if a link already exists?
}, {
   tags: ['version12', 'trial-2'],
   feature: 'smart_banner',
   stage: 'shoe_page',
   data: {
       deeplink: 'data',
       username: 'Alex'
   }
});
