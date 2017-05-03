(function(config) {
	var aa = navigator.userAgent.toLowerCase(),
		ca = window,
		ea = document,
		fa = ea.documentElement;

	function f(b) {
		return -1 !== aa.indexOf(b)
	}
	var ja = /([a-z0-9]*\d+[a-z0-9]*)/;

	function ka() {
		var b = la;
		if(!b) return null;
		var b = b.toLowerCase(),
			c = null;
		if(c = b.match(/angle \((.*)\)/)) b = c[1], b = b.replace(/\s*direct3d.*$/, "");
		b = b.replace(/\s*\([^\)]*wddm[^\)]*\)/, "");
		if(0 <= b.indexOf("intel")) {
			c = ["Intel"];
			0 <= b.indexOf("mobile") && c.push("Mobile");
			(0 <= b.indexOf("gma") || 0 <= b.indexOf("graphics media accelerator")) && c.push("GMA");
			if(0 <= b.indexOf("haswell")) c.push("Haswell");
			else if(0 <= b.indexOf("ivy")) c.push("HD 4000");
			else if(0 <= b.indexOf("sandy")) c.push("HD 3000");
			else if(0 <= b.indexOf("ironlake")) c.push("HD");
			else {
				0 <= b.indexOf("hd") && c.push("HD");
				var d = b.match(ja);
				d && c.push(d[1].toUpperCase())
			}
			return c = c.join(" ")
		}
		return 0 <= b.indexOf("nvidia") || 0 <= b.indexOf("quadro") || 0 <= b.indexOf("geforce") || 0 <= b.indexOf("nvs") ? (c = ["nVidia"], 0 <= b.indexOf("geforce") && c.push("geForce"), 0 <= b.indexOf("quadro") && c.push("Quadro"), 0 <= b.indexOf("nvs") && c.push("NVS"), b.match(/\bion\b/) && c.push("ION"), b.match(/gtx\b/) ? c.push("GTX") : b.match(/gts\b/) ? c.push("GTS") : b.match(/gt\b/) ? c.push("GT") : b.match(/gs\b/) ? c.push("GS") : b.match(/ge\b/) ?
			c.push("GE") : b.match(/fx\b/) && c.push("FX"), (d = b.match(ja)) && c.push(d[1].toUpperCase().replace("GS", "")), 0 <= b.indexOf("titan") ? c.push("TITAN") : 0 <= b.indexOf("ti") && c.push("Ti"), c = c.join(" ")) : 0 <= b.indexOf("amd") || 0 <= b.indexOf("ati") || 0 <= b.indexOf("radeon") || 0 <= b.indexOf("firegl") || 0 <= b.indexOf("firepro") ? (c = ["AMD"], 0 <= b.indexOf("mobil") && c.push("Mobility"), d = b.indexOf("radeon"), 0 <= d && c.push("Radeon"), 0 <= b.indexOf("firepro") ? c.push("FirePro") : 0 <= b.indexOf("firegl") && c.push("FireGL"), 0 <= b.indexOf("hd") &&
			c.push("HD"), 0 <= d && (b = b.substring(d)), (d = b.match(ja)) && c.push(d[1].toUpperCase().replace("HD", "")), c = c.join(" ")) : b.substring(0, 100)
	}
	var ma = "microsoft basic render driver;vmware svga 3d;Intel 965GM;Intel B43;Intel G41;Intel G45;Intel G965;Intel GMA 3600;Intel Mobile 4;Intel Mobile 45;Intel Mobile 965".split(";"),
		oa = "ActiveXObject" in ca,
		pa = "devicePixelRatio" in ca && 1 < ca.devicePixelRatio || oa && "matchMedia" in ca && ca.matchMedia("(min-resolution:144dpi)") && ca.matchMedia("(min-resolution:144dpi)").matches,
		qa = f("windows nt"),
		sa = -1 !== aa.search(/windows nt [1-5]\./),
		ua = -1 !== aa.search(/windows nt 5\.[12]/),
		va = sa && !ua;
	f("windows nt 10");
	var wa = f("windows phone"),
		xa = f("macintosh"),
		ya = f("Mb2345Browser"),
		Aa = f("ipad;") || f("ipad "),
		Ba = Aa && pa,
		Ca = f("ipod touch;"),
		Da = f("iphone;") || f("iphone "),
		Fa = Da || Aa || Ca,
		Ga = Fa && -1 !== aa.search(/ os [456]_/);
	Fa && aa.search(/ os [4-8]_/);
	var Ha = Fa && -1 !== aa.search(/ os [78]_/);
	Fa && f("os 8_");
	var Ka = Fa && f("os 10_"),
		La = f("android"),
		Ma = -1 !== aa.search(/android [123]/),
		Na = f("android 4");
	La && -1 === aa.search(/android [1-4]/) || aa.search(/android 4.4/);
	var Oa = La ? "android" : Fa ? "ios" : qa ? "windows" : xa ? "mac" : "other",
		Pa = oa && !ca.XMLHttpRequest,
		Qa = oa && !ea.querySelector,
		Ra = oa && !ea.addEventListener,
		Sa = oa && f("ie 9"),
		Ta = oa && f("msie 10"),
		Ua = oa && f("rv:11"),
		Wa = f("alipay") || La && Va,
		Xa = f("edge"),
		Ya = f("qtweb"),
		Va = f("ucbrowser"),
		Za = f("miuibrowser"),
		$a = f("micromessenger"),
		ab = f("mqqbrowser"),
		bb = f("baidubrowser"),
		chrome = (f("chrome") || f("crios")) && !$a && !bb && !ab && !Xa && !Za,
		cb = chrome && f("chromium"),
		db = chrome && !cb && 30 <= parseInt(aa.split("chrome/")[1]),
		eb = f("firefox"),
		fb = (xa ||
			Fa) && f("safari") && f("version/"),
		gb = Fa && f("aliapp"),
		hb = Fa && (!ab && !Va && !$a && !chrome && !eb && !fb || gb),
		ib = La || Fa || wa || f("mobile"),
		jb = ca.navigator && ca.navigator.msPointerEnabled && !!ca.navigator.msMaxTouchPoints,
		kb = ca.navigator && ca.navigator.pointerEnabled && !!ca.navigator.maxTouchPoints,
		lb = kb || jb,
		mb = "ontouchstart" in ea || lb,
		nb = function() {
			if(!ib) return ca.devicePixelRatio || 1;
			var b = document.getElementsByTagName("meta");
			if(window.parent && window.parent !== window) try {
				if(window.parent.location.origin == window.location.origin) b =
					window.parent.document.getElementsByTagName("meta");
				else return 1
			} catch(c) {
				return 1
			}
			for(var d = b.length - 1; 0 <= d; d--)
				if("viewport" === b[d].name) {
					var d = b[d].content,
						e; - 1 !== d.indexOf("initial-scale") && (e = parseFloat(d.split("initial-scale=")[1]));
					b = -1 !== d.indexOf("minimum-scale") ? parseFloat(d.split("minimum-scale=")[1]) : 0;
					d = -1 !== d.indexOf("maximum-scale") ? parseFloat(d.split("maximum-scale=")[1]) : Infinity;
					if(e) {
						if(d >= b) return e > d ? d : e < b ? b : e
					} else if(d >= b) return 1 <= b ? 1 : Math.min(d, 1);
					console && console.log && console.log("viewport\u53c2\u6570\u4e0d\u5408\u6cd5");
					return null
				}
		}(),
		ob = oa && "transition" in fa.style,
		pb = !!ea.createElementNS && !!ea.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,
		qb = ea.createElement("canvas"),
		rb = !(!qb || !qb.getContext),
		ub = window.URL || window.webkitURL,
		vb = !oa && !(Va && La) && window.Worker && ub && ub.createObjectURL && window.Blob,
		wb = "",
		la = "",
		xb = {
			alpha: !0,
			antialias: !0,
			depth: !1,
			failIfMajorPerformanceCaveat: !0,
			preserveDrawingBuffer: !1,
			stencil: !1
		},
		yb = function() {
			if(!rb || !vb || hb) return !1;
			for(var b = ["webgl", "experimental-webgl", "moz-webgl"],
					c = null, d = 0; d < b.length; d += 1) {
				try {
					c = qb.getContext(b[d], xb)
				} catch(e) {}
				if(c) {
					if(c.drawingBufferWidth !== qb.width || c.drawingBufferHeight !== qb.height) break;
					if(!c.getShaderPrecisionFormat || !c.getParameter || !c.getExtension) break;
					if(23 > c.getShaderPrecisionFormat(35632, 36338).precision || 23 > c.getShaderPrecisionFormat(35633, 36338).precision) break;
					la = c.getExtension("WEBGL_debug_renderer_info") ? c.getParameter(37446) : null;
					if((c = ka()) && -1 !== ma.indexOf(c)) break;
					wb = b[d];
					return !0
				}
			}
			return !1
		}(),
		zb = yb && !ib && db && ("mac" ==
			Oa || "windows" == Oa),
		Ab = !rb || Ya || wa || ib && eb || Sa || Ga || Ba || Ca || Ma || f("gt-n710") || va,
		Bb = !Ab && !zb && (Na || Ha || Fa && $a || !ib),
		Cb = zb ? "vw" : Ab ? "d" : Bb ? "dv" : "v",
		Db = f("webkit"),
		Eb = "WebKitCSSMatrix" in ca && "m11" in new window.WebKitCSSMatrix,
		Fb = "MozPerspective" in fa.style,
		Gb = "OTransition" in fa.style,
		Hb = ob || Eb || Fb || Gb,
		Ib = void 0 !== config[8] ? config[8] : !0,
		Jb = void 0 !== config[9] ? config[9] : !0,
		Kb = void 0 !== config[10] ? config[10] : !0,
		Lb = !pb && ib && rb,
		Mb = !1;
	try {
		Mb = "undefined" !== typeof ca.localStorage
	} catch(Nb) {}
	config.j = {
		size: Da ? 100 : La ? 200 : 400,
		Kt: xa,
		j6: qa,
		vJ: Fa,
		yY: Ka,
		Lf: La,
		Y2: Ma,
		xI: Wa,
		uq: Oa,
		ky: bb,
		g5: ab,
		yL: fb,
		D1: $a,
		rn: oa,
		lg: Pa,
		dq: Qa,
		r4: Sa,
		jY: Ta,
		pd: Ra,
		lY: oa && !Ua,
		aZ: ya,
		Jt: Mb,
		geolocation: ib || oa && !Ra || Xa,
		EB: Va && !chrome,
		chrome: chrome,
		Ny: pa && chrome,
		tI: eb,
		U: ib,
		Q4: ib && Db,
		dZ: ib && Eb,
		P4: ib && ca.opera,
		Jc: pa,
		KB: nb,
		pa: pa && (!ib || !!nb && 1 <= nb),
		ed: mb,
		jZ: jb,
		SK: kb,
		TK: lb,
		IV: 57 <= parseInt(aa.split("chrome/")[1]),
		B1: Db,
		q4: ob,
		C1: Eb,
		K3: Fb,
		V4: Gb,
		QU: Hb,
		Ri: pb,
		hq: rb,
		IJ: vb,
		Mu: Kb,
		tV: yb,
		tn: zb,
		y1: wb,
		z1: xb,
		$I: la,
		R1: !1,
		ZW: Ib,
		eg: Ib && !Ab,
		bV: Ib ?
			Cb : "d",
		un: Jb && !!ca.WebSocket && !bb,
		T4: Lb,
		HZ: rb || Lb ? "c" : "d"
	};
	var ca = window,
		Ob = {
			overlay: ["style"],
			"AMap.IndoorMap": ["AMap.CustomLayer", "cvector"],
			"AMap.MarkerList": ["AMap.TplUtils"]
		},
		Pb = "http map anip layers overlay0 brender mrender".split(" ");
	config.sd = "main";
	config.j.ed && (Pb += ",touch", config.sd += "t");
	config.j.U || (Pb += ",mouse", config.sd += "m");
	config.sd += "c";
	config.j.eg && (config.sd += "v", Pb += ",vectorlayer,overlay", config.j.tn ? (config.sd += "w", Pb += ",wgl") : (config.sd += "cg", Pb += ",cmng,cgl"));
	if(config[7]) {
		for(var Qb = [], Rb = config[7].split(","), Sb = 0; Sb < Rb.length; Sb += 1) {
			var Tb = Rb[Sb];
			Ob[Tb] && Qb.push.apply(Qb, Ob[Tb]);
			Qb.push(Tb)
		}
		Pb += "," + Qb.join(",");
		config.sd += config[7].replace(",", "")
	}
	config.fn = Ob;
	Pb += ",sync";
	config.mM = Pb.split(",");
	window.AMap = window.AMap || {};
	window.AMap.ji = "1.3.26.1";
	var Ub = window.AMap.JB = {},
		Vb = config[2].split(",")[0],
		Wb = Vb + "/theme/v1.3/style1.3.26.1.css",
		Xb = document.head || document.getElementsByTagName("head")[0];
	if(Xb) {
		var Yb = document.createElement("link");
		Yb.setAttribute("rel", "stylesheet");
		Yb.setAttribute("type", "text/css");
		Yb.setAttribute("href", Wb);
		Xb.insertBefore(Yb, Xb.firstChild)
	} else document.write("<link rel='stylesheet' href='" + Wb + "'/>");

	function Zb(b) {
		var c = document,
			d = c.createElement("script");
		d.charset = "utf-8";
		d.src = b;
		(b = c.body || Xb) && b.appendChild(d)
	}

	function mc() {
		for(var b = Vb + "/js/main.js?v=" + config[4] + "&key=" + config[0] + "&m=" + config.mM.join(",") + "&vrs=1.3.26.1", c = document.getElementsByTagName("script"), d, e = 0; e < c.length; e += 1)
			if(0 === c[e].src.indexOf(Vb.split(":")[1] + "/maps?")) {
				d = c[e];
				break
			}
		config[5] || d && d.async ? Zb(b) : (document.write('<script id="amap_main_js" src=\'' + b + "' type='text/javascript'>\x3c/script>"), setTimeout(function() {
			document.getElementById("amap_main_js") || Zb(b)
		}, 1))
	}
	var nc = (new Date).getTime();
	Ub.__load__ = function(b) {
		b(config, nc);
		Ub.__load__ = null
	};
	try {
		if(window.localStorage) {
			var oc = window.localStorage["_AMap_" + config.sd],
				pc = !1;
			oc ? (oc = JSON.parse(oc), oc.version === window.AMap.ji ? (eval(oc.script), Ub.loaded = !0) : pc = !0) : pc = !0;
			if(pc)
				for(Sb in window.localStorage) window.localStorage.hasOwnProperty(Sb) && 0 === Sb.indexOf("_AMap_") && window.localStorage.removeItem(Sb)
		}
	} catch(qc) {}
	Ub.loaded || (mc(), config.mM = void 0);
})(["c0fa7cbef7939ee6e2ce2d940e623e0b", [115.423411, 39.442758, 117.514625, 41.060816, 116.405285, 39.904989], "http://127.0.0.1:8020/amap", 1, "1.3", null, "110000", "AMap.DistrictSearch", true, true, true])