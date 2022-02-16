var browser = {
    versions: function () {
        var u = navigator.userAgent,
            app = navigator.appVersion;
        return { //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            ios: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/) || !!u.match(/AppleWebKit/), //是否为移动终端
            MSIE: u.indexOf('MSIE') > -1 || u.indexOf('Trident') > -1, //是否IE
            android: u.indexOf('Android') > -1 && u.indexOf('Linux') > -1, //android 4.2版本以下终端或者uc浏览器
            iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            Chrome: u.indexOf('Chrome') > -1 //是否Chrome
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
};