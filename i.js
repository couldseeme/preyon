// call like this
// Triangle.show(r, "#fff", 0, C, N, UI.GAP_Y, m)


var Triangle = Triangle || function() {
    function a(a) {
        n = 1;
        d();
        a && a()
    }

    function d() {
        b && (window.cancelAnimationFrame(b), b = null);
        s = null;
        CMUtiles.removeDom(k)
    }

    function m(a) {
        n || (b = window.requestAnimationFrame(m),
					s || (s = a),
						20 < a - s &&
							(s = a,
								p.clearRect(0, 0, w, t),
								p.beginPath(),
								p.moveTo(r[0].x, r[0].y),
								p.lineTo(r[1].x, r[1].y),
								p.lineTo(r[2].x, r[2].y),
								p.lineTo(r[3].x, r[3].y),
								p.moveTo(r[0].x, r[0].y),
								p.quadraticCurveTo(r[0].x + (r[1].x - r[0].x >> 1), r[1].y - r[0].v, r[1].x, r[1].y),
								p.quadraticCurveTo(r[1].x + r[1].v, r[1].y + (r[2].y - r[1].y >>1), r[2].x, r[2].y),
								p.quadraticCurveTo(r[2].x - (r[2].x - r[3].x >> 1), r[2].y + r[2].v, r[3].x, r[3].y),
								p.quadraticCurveTo(r[3].x - r[3].v, r[3].y - (r[3].y - r[0].y >> 1), r[0].x, r[0].y),
								p.closePath(),
								p.fill(),
								p.globalCompositeOperation = "xor",
								p.beginPath(),
								p.fillRect(0, 0, w, t),
								p.closePath(),
								p.fill()
							)
						)
    }
    var k, p, h, n = 0,
        g = [],
        r = [],
        s = null,
        z, w, t, v, y, b;
    return {
        setting: function() {
            k = document.createElement("canvas");
            k.className = "triangle-canvas"
        },
        show: function(d, s, J, C, N, G, I) {
					  //r, "#fff", 1, C, N, UI.GAP_Y, p
            h = s;
            z = J;
            w = C;
            t = N;
            v = C >> 1;
            y = N >> 1;
            k.style.width = w + "px";
            k.style.height = t + "px";
            k.style[CMDetect.TRANSFORM] = "translate3d(0px, " + G + "px, 0px)";
            k.width = w;
            k.height = t;
            p = k.getContext("2d");
            p.fillStyle = h;
            z || p.fillRect(0, 0, w, t);
            d.appendChild(k);
            n = 0;
            b = window.requestAnimationFrame(m);
            z ?
						(d = 1, J = 0, C = d + 4 * J, s = Expo.easeInOut, G = y, N = 0,

						// if it is opened
						g = [{
                x: 0,
                y: y
            }, {
                x: w,
                y: y
            }, {
                x: w,
                y: y
            }, {
                x: 0,
                y: y
            }],

						r = [{
                x: 0,
                y: 0,
                v: G
            }, {
                x: w,
                y: 0,
                v: G
            }, {
                x: w,
                y: t,
                v: G
            }, {
                x: 0,
                y: t,
                v: G
            }])

						:

						(d = 1.6, J = 0.05, C = d + 4 * J, s = Bounce.easeOut, G = 0, N = 100,
						// if it is close
						g = [{
                x: 0,
                y: 0
            }, {
                x: w,
                y: 0
            }, {
                x: w,
                y: t
            }, {
                x: 0,
                y: t
            }],

						r = [{
                x: v,
                y: y,
                v: G
            }, {
                x: v,
                y: y,
                v: G
            }, {
                x: v,
                y: y,
                v: G
            }, {
                x: v,
                y: y,
                v: G
            }]);
            for (G = 0; 4 > G; G++) TweenLite.to(r[G], d, {
                delay: J * G,
                x: g[G].x,
                y: g[G].y,
                v: N,
                ease: s
            });
            TweenLite.delayedCall(C, a, [I])
        },
        dispose: d
    }
}();
