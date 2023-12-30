export function initTiledesk(user_id, firstname, lastname, email) {

    window.tiledeskSettings =
    {
        projectid: "658f10bd2ac76b0013aadc34",
        welcomeTitle: 'Doctor Anonymous',
        welcomeMsg: 'Chat with a health specialist',
        widgetTitle: 'Chat Widget',
        calloutTitle: 'Callout title',
        calloutMsg: 'callout msg',
        themeColor: 'rgb(194, 65, 12)',
        mobileMarginX: '',
        mobileMarginY: '',
        // logoChat: 'https://',
        persistence: 'local',
        showWaitTime: false,
        showAvailableAgents: false,
        singleConverstion: true,
        hideSettings: true,
        // fullscreenMode: true,
        // open: true,
        startFromHome: false,
        // onPageChangeVisibilityDesktop: 'open',
        // onPageChangeVisibilityMobile: 'open',
        isShown: false,
        startHidden: true,
        userFullname: `${firstname} ${lastname} - ${user_id}`,
        userEmail: email
    };

    (function (d, s, id) {
        var w = window; var d = document; var i = function () { i.c(arguments); };
        i.q = []; i.c = function (args) { i.q.push(args); }; w.Tiledesk = i;
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s);
        js.id = id; js.async = true; js.src = "https://widget.tiledesk.com/v6/launch.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'tiledesk-jssdk'));
}
