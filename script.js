! function(t) {
    var e = XMLHttpRequest.prototype,
        o = e.send,
        s = e.open;
    e.open = function() {
        this._method = arguments[0], this._url = arguments[1], s.apply(this, arguments)
    }, e.send = function() {
        "put" === this._method.toLowerCase() && "https://api.spotify.com/v1/me/player/pause" === this._url && this.abort(), console.log("Spotify pause bypassed"), o.apply(this, arguments)
    }
}();
