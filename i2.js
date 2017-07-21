hide: function() {
    TweenLite.killDelayedCallsTo(k);
    Player.pause();
    Control.hide();
    ScreenInfo.hide();
    var a, b = u.length;
    for (a = 0; a < b; a++) u[a].hide();
    Triangle.show(r, "#fff", 1, C, N, UI.GAP_Y, p)
},

//killDelayedCallsTo 는 요렇게~
