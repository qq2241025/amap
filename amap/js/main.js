(function() {
	var V = V || {
			wa: {
				Dc: 0,
				qk: []
			}
		},
		rc = {};
	V.CLASS_NAME = "AMap";
	V.a = V.BuryPoint = {
		eK: {},
		hA: {},
		options: {},
		zA: {},
		aF: {},
		bF: {},
		MF: {},
		NF: {}
	};
	V.a.Pf = V.BuryPoint.dic = {
		"AMap.event": {
			c: "ev",
			m: {
				addDomListener: "a",
				addListener: "b",
				addListenerOnce: "c",
				removeListener: "d",
				trigger: "e"
			}
		},
		AMap: {
			c: "aa",
			m: {
				convertFrom: "a"
			}
		},
		"AMap.Map": {
			c: "m",
			o: {
				view: "a",
				layers: "b",
				level: "c",
				center: "d",
				zooms: "e",
				lang: "f",
				cursor: "g",
				crs: "h",
				animateEnable: "i",
				isHotspot: "j",
				defaultLayer: "k",
				rotateEnable: "l",
				resizeEnable: "m",
				dragEnable: "n",
				zoomEnable: "o",
				doubleClickZoom: "p",
				keyboardEnable: "q",
				jogEnable: "r",
				scrollWheel: "s",
				touchZoom: "t",
				mapStyle: "u",
				"features ": "v",
				zoom: "w"
			},
			m: {
				setMapStyle: "a",
				getMapStyle: "b",
				getFeatures: "c",
				setFeatures: "d",
				setLang: "e",
				getLang: "f",
				setCity: "g",
				getCity: "h",
				getAdcode: "i",
				setLimitBounds: "j",
				clearLimitBounds: "k",
				getLimitBounds: "l",
				setZoom: "m",
				getZoom: "n",
				getCenter: "o",
				setCenter: "p",
				setRotation: "q",
				getBounds: "r",
				getStatus: "s",
				setStatus: "t",
				getResolution: "u",
				getScale: "v",
				getDefaultCursor: "w",
				setDefaultCursor: "x",
				zoomIn: "y",
				zoomOut: "z",
				setZoomAndCenter: "0",
				setBounds: "1",
				clearMap: "2",
				destroy: "3",
				addControl: "4",
				removeControl: "5",
				clearControl: "6",
				clearInfoWindow: "7",
				remove: "8",
				add: "9",
				getAllOverlays: "a1",
				getSize: "a2",
				getContainer: "a3",
				panTo: "a4",
				panBy: "a5",
				setFitView: "a6",
				setLayers: "a7",
				getLayers: "a8",
				getDefaultLayer: "a9",
				setDefaultLayer: "a0",
				pixelToLngLat: "b0",
				lnglatToPixel: "b1",
				drawPolyline: "b2",
				drawPolygon: "b3",
				drawCircle: "b4"
			}
		},
		"AMap.View2D": {
			c: "v",
			o: {
				center: "a",
				rotation: "b",
				zoom: "c",
				crs: "d"
			}
		},
		"AMap.Buildings": {
			p: "AMap.Layer",
			c: "b"
		},
		"AMap.CustomLayer": {
			p: "AMap.Layer",
			c: "c",
			o: {
				map: "a",
				zIndex: "b",
				opacity: "c",
				zooms: "d"
			},
			m: {
				setOpacity: "2a",
				getContainer: "2b",
				show: "2c",
				hide: "2d",
				setzIndex: "2e"
			}
		},
		"AMap.ImageLayer": {
			p: "AMap.Layer",
			c: "i",
			o: {
				bounds: "a",
				url: "b",
				map: "c",
				opacity: "d",
				visible: "e",
				zIndex: "f",
				zooms: "g"
			},
			m: {
				getMap: "4a",
				show: "4b",
				getOpacity: "4c",
				setOpacity: "4d",
				getBounds: "4e",
				setBounds: "4f",
				getImageUrl: "4g",
				setImageUrl: "4h",
				hide: "4i",
				setOptions: "4j",
				getOptions: "4k"
			}
		},
		"AMap.Layer": {
			c: "l",
			m: {
				getZooms: "a",
				setOpacity: "b",
				show: "c",
				hide: "d",
				setMap: "e",
				getMap: "f",
				setzIndex: "g"
			}
		},
		"AMap.MassMarks": {
			p: "AMap.Layer",
			c: "ma",
			o: {
				zIndex: "a",
				opacity: "b",
				zooms: "c",
				anchor: "d",
				url: "e",
				size: "f",
				cursor: "g",
				alwaysRender: "h"
			},
			m: {
				setData: "0a",
				getData: "0b",
				getStyle: "0c",
				setStyle: "0d",
				setMap: "0e"
			}
		},
		"AMap.TileLayer": {
			p: "AMap.Layer",
			c: "tl",
			o: {
				map: "a",
				tileSize: "b",
				tileUrl: "c",
				errorUrl: "d",
				getTileUrl: "e",
				zIndex: "f",
				opacity: "g",
				zooms: "h",
				detectRetina: "i"
			},
			m: {
				setTextIndex: "3a",
				getTiles: "3b",
				reload: "3c",
				setTileUrl: "3d",
				getTileUrl: "3e",
				getZooms: "3f",
				stopRefresh: "3g",
				startRefresh: "3h",
				reload: "3i"
			}
		},
		"AMap.TileLayer.Satellite": {
			p: "AMap.TileLayer",
			c: "s",
			o: {
				map: "a",
				zIndex: "b",
				opacity: "c",
				zooms: "d",
				detectRetina: "e"
			}
		},
		"AMap.TileLayer.RoadNet": {
			p: "AMap.TileLayer",
			c: "r",
			o: {
				map: "a",
				zIndex: "b",
				opacity: "c",
				zooms: "d",
				detectRetina: "e"
			}
		},
		"AMap.TileLayer.Traffic": {
			p: "AMap.TileLayer",
			c: "t",
			o: {
				map: "a",
				zIndex: "b",
				opacity: "c",
				zooms: "d",
				detectRetina: "e",
				autoRefresh: "f",
				interval: "g"
			}
		},
		"AMap.Vector": {
			p: "AMap.Overlay",
			c: "v",
			m: {
				show: "4a",
				hide: "4b",
				getVisible: "4c",
				getOptions: "4d",
				setOptions: "4e",
				setDraggable: "4f"
			}
		},
		"AMap.VectorTile": {
			p: "AMap.Layer",
			c: "vt"
		},
		"AMap.Circle": {
			p: "AMap.Vector",
			c: "ci",
			o: {
				map: "a",
				zIndex: "b",
				center: "c",
				radius: "d",
				strokeColor: "e",
				strokeOpacity: "f",
				strokeWeight: "g",
				fillColor: "h",
				fillOpacity: "i",
				strokeStyle: "j",
				extData: "k",
				strokeDasharray: "l"
			},
			m: {
				setCenter: "8a",
				getCenter: "8b",
				setRadius: "8c",
				getRadius: "8d",
				contains: "8e"
			}
		},
		"AMap.ContextMenu": {
			p: "AMap.Overlay",
			c: "cm",
			o: {
				position: "a",
				content: "b",
				width: "c"
			},
			m: {
				addItem: "2a",
				removeItem: "2b",
				open: "2c",
				close: "2d"
			}
		},
		"AMap.GroundImage": {
			p: "AMap.ImageLayer",
			c: "g",
			o: {
				map: "a",
				clickable: "b",
				opacity: "c"
			},
			m: {
				setMap: "8a"
			}
		},
		"AMap.Icon": {
			c: "ic",
			o: {
				size: "a",
				imageOffset: "b",
				image: "c",
				imageSize: "c"
			},
			m: {
				setImageSize: "a",
				getImageSize: "b"
			}
		},
		"AMap.ImageMarker": {
			p: "AMap.Overlay",
			c: "im",
			m: {
				setPosition: "3a",
				getBounds: "3b",
				getPosition: "3c",
				hide: "3d",
				show: "3e",
				setCursor: "3f",
				setRotation: "3g",
				setzIndex: "3h"
			}
		},
		"AMap.InfoWindow": {
			p: "AMap.Overlay",
			c: "iw",
			o: {
				isCustom: "a",
				autoMove: "b",
				closeWhenClickMap: "c",
				content: "d",
				size: "e",
				offset: "f",
				position: "g",
				showShadow: "h"
			},
			m: {
				open: "1a",
				close: "1b",
				setContent: "1c",
				getContentU: "1d",
				getContent: "1e",
				setPosition: "1f",
				setOffset: "1g",
				getPosition: "1h",
				setSize: "1i",
				getSize: "1j",
				getIsOpen: "1k"
			}
		},
		"AMap.Marker": {
			p: "AMap.Overlay",
			c: "mk",
			o: {
				map: "a",
				position: "b",
				offset: "c",
				icon: "d",
				content: "e",
				topWhenClick: "f",
				topWhenMouseOver: "g",
				draggable: "h",
				raiseOnDrag: "j",
				cursor: "k",
				visible: "l",
				zIndex: "m",
				angle: "n",
				autoRotation: "o",
				animation: "p",
				shadow: "q",
				title: "r",
				clickable: "s",
				shape: "t",
				extData: "u"
			},
			m: {
				setRaiseOnDrag: "9a",
				setPosition: "9b",
				getPosition: "9c",
				setIcon: "9d",
				getIcon: "9e",
				setContent: "9f",
				getContent: "9g",
				hide: "9h",
				show: "9i",
				setCursor: "9j",
				setRotation: "9k",
				setAngle: "9l",
				getAngle: "9m",
				setOffset: "9n",
				getOffset: "9o",
				setzIndex: "9p",
				setOpacity: "9q",
				setDraggable: "9r",
				getDraggable: "9s",
				moveTo: "9t",
				moveAlong: "9u",
				stopMove: "9v",
				setShadow: "9w",
				getShadow: "9x",
				setClickable: "9y",
				getClickable: "9z",
				setTitle: "90",
				getTitle: "91",
				setLabel: "92",
				getLabel: "93",
				setTop: "94",
				getTop: "95",
				setShape: "96",
				getShape: "97",
				setAnimation: "98",
				getAnimation: "99",
				getMap: "9a1"
			}
		},
		"AMap.MarkerShape": {
			c: "ms",
			o: {
				coords: "a",
				type: "b"
			}
		},
		"AMap.Overlay": {
			c: "o",
			m: {
				show: "a",
				hide: "b",
				setMap: "c",
				getMap: "d",
				setExtData: "e",
				getExtData: "f"
			}
		},
		"AMap.Poly": {
			p: "AMap.Vector",
			c: "ly",
			m: {
				setPath: "5a",
				getPath: "5b"
			}
		},
		"AMap.Polygon": {
			p: "AMap.Poly",
			c: "gn",
			o: {
				map: "a",
				zIndex: "b",
				path: "c",
				strokeColor: "d",
				strokeOpacity: "e",
				strokeWeight: "f",
				fillColor: "g",
				fillOpacity: "h",
				extData: "i",
				strokeStyle: "j",
				strokeDasharray: "k"
			},
			m: {
				getArea: "6a",
				toString: "6b",
				contains: "6c"
			}
		},
		"AMap.Polyline": {
			p: "AMap.Poly",
			c: "le",
			o: {
				map: "a",
				zIndex: "b",
				geodesic: "c",
				isOutline: "d",
				outlineColor: "e",
				path: "f",
				strokeColor: "g",
				strokeOpacity: "h",
				strokeWeight: "i",
				strokeStyle: "j",
				strokeDasharray: "k",
				extData: "l"
			},
			m: {
				getLength: "7a"
			}
		},
		"AMap.Text": {
			p: "AMap.Overlay",
			c: "tt"
		},
		"AMap.Panorama": {
			c: "aa"
		},
		"AMap.PanoramaMarker": {
			c: "ar"
		},
		"AMap.PanoramaService": {
			c: "ae"
		},
		"AMap.AdvancedInfoWindow": {
			p: "AMap.InfoWindow",
			c: "pa",
			o: {
				autoMove: "a",
				closeWhenClickMap: "b",
				content: "c",
				offset: "d",
				position: "e",
				panel: "f",
				searchRadius: "g",
				placeSearch: "h",
				driving: "i",
				walking: "j",
				transit: "k",
				asOrigin: "l",
				asDestination: "m"
			},
			m: {
				clear: "aa",
				searchPoiByKeyWord: "ab"
			}
		},
		"AMap.AntiCrabFrame": {
			c: "pb",
			m: {
				setMapStyle: "a"
			}
		},
		"AMap.ArrivalRange": {
			c: "pc",
			m: {
				search: "a"
			}
		},
		"AMap.Autocomplete": {
			c: "pd",
			o: {
				type: "a",
				city: "b",
				input: "c"
			},
			m: {
				setType: "a",
				setCity: "b",
				search: "c"
			}
		},
		"AMap.AutoPanby": {
			c: "pe"
		},
		"AMap.CircleEditor": {
			c: "pf",
			m: {
				open: "a",
				close: "b"
			}
		},
		"AMap.CitySearch": {
			c: "pg",
			m: {
				getLocalCity: "a",
				getCityByIp: "b"
			}
		},
		"AMap.CloudDataLayer": {
			c: "ph",
			o: {
				map: "a",
				query: "b",
				clickable: "c"
			},
			m: {
				reload: "a",
				setMap: "b",
				getMap: "c",
				setOptions: "d",
				wrapUrl: "e"
			}
		},
		"AMap.CloudDataSearch": {
			c: "pi",
			o: {
				keywords: "a",
				filter: "b",
				orderBy: "c",
				pageSize: "d",
				pageIndex: "e"
			},
			m: {
				setOptions: "a",
				clear: "b",
				setPageIndex: "c",
				setPageSize: "d",
				searchNearBy: "e",
				searchById: "f",
				searchByDistrict: "g",
				searchInPolygon: "h"
			}
		},
		"AMap.CloudDataSearchRender": {
			c: "pj"
		},
		"AMap.DistrictSearch": {
			c: "pk",
			o: {
				level: "a",
				extensions: "b",
				subdistrict: "c"
			},
			m: {
				setLevel: "a",
				setExtensions: "b",
				setSubdistrict: "c",
				search: "d"
			}
		},
		"AMap.DragRoute": {
			c: "pl",
			o: {
				polyOptions: "a",
				startMarkerOptions: "b",
				midMarkerOptions: "c",
				endMarkerOptions: "d",
				showTraffic: "e"
			},
			m: {
				setAvoidPolygons: "a",
				clearAvoidPolygons: "b",
				getAvoidPolygons: "c",
				setAvoidRoad: "d",
				clearAvoidRoad: "e",
				getAvoidRoad: "f",
				search: "g",
				setPolicy: "h",
				showRoute: "i",
				close: "j",
				open: "k",
				getWays: "l",
				getRoute: "m",
				destroy: "n",
				getPolyline: "o",
				getStart: "p",
				getEnd: "q",
				getPoint: "r",
				getRoutes: "s"
			}
		},
		"AMap.Driving": {
			c: "pm",
			o: {
				policy: "a",
				extensions: "b",
				map: "c",
				panel: "d",
				hideMarkers: "e"
			},
			m: {
				clear: "a",
				search: "b",
				setAvoidPolygons: "c",
				clearAvoidPolygons: "d",
				getAvoidPolygons: "e",
				setAvoidRoad: "f",
				clearAvoidRoad: "g",
				getAvoidRoad: "h",
				setPolicy: "i",
				setLocation: "j",
				close: "k",
				open: "l"
			}
		},
		"AMap.DrivingRender": {
			c: "pp"
		},
		"AMap.Geocoder": {
			c: "pq",
			o: {
				city: "a",
				radius: "b",
				extensions: "c"
			},
			m: {
				getLocation: "a",
				setCity: "b",
				getAddress: "c"
			}
		},
		"AMap.Geolocation": {
			c: "pr",
			o: {
				enableHighAccuracy: "a",
				timeout: "b",
				maximumAge: "c",
				convert: "d",
				showButton: "e",
				buttonDom: "f",
				buttonPosition: "g",
				buttonOffset: "h",
				showMarker: "i",
				markerOptions: "j",
				showCircle: "k",
				circleOptions: "l",
				panToLocation: "m",
				zoomToAccuracy: "n",
				useNative: "o"
			},
			m: {
				isSupported: "a",
				getCurrentPosition: "b",
				watchPosition: "c",
				clearWatch: "d"
			}
		},
		"AMap.GetLL": {
			c: "ps"
		},
		"AMap.Heatmap": {
			c: "pt",
			o: {
				radius: "a",
				gradient: "b",
				opacity: "c",
				zooms: "d"
			},
			m: {
				setOptions: "a",
				getOptions: "b",
				setDataSet: "c",
				getDataSet: "d",
				addDataPoint: "e",
				setMap: "f",
				hide: "g",
				show: "h",
				getMap: "i",
				setzIndex: "j",
				getzIndex: "k"
			}
		},
		"AMap.HotSpot": {
			c: "pu",
			m: {
				setMap: "a"
			}
		},
		"AMap.LineSearch": {
			c: "pv",
			o: {
				pageIndex: "a",
				pageSize: "b",
				city: "c",
				extensions: "d"
			},
			m: {
				setPageIndex: "a",
				setPageSize: "b",
				setCity: "c",
				searchById: "d",
				search: "e"
			}
		},
		"AMap.MapType": {
			c: "pw",
			m: {
				hide: "a",
				show: "b"
			}
		},
		"AMap.Cluster": {
			c: "px"
		},
		"AMap.MarkerClusterer": {
			c: "py",
			o: {
				gridSize: "a",
				minClusterSize: "b",
				maxZoom: "c",
				averageCenter: "d",
				styles: "e",
				zoomOnClick: "f"
			},
			m: {
				disperse: "a",
				addMarker: "b",
				addMarkers: "c",
				removeMarker: "d",
				removeMarkers: "e",
				clearMarkers: "f",
				getClustersCount: "g",
				getMap: "h",
				setMap: "i",
				getMarkers: "j",
				setMarkers: "k",
				getGridSize: "l",
				setGridSize: "m",
				getMinClusterSize: "n",
				setMinClusterSize: "o",
				getMaxZoom: "p",
				setMaxZoom: "q",
				isAverageCenter: "r",
				setAverageCenter: "s",
				getStyles: "t",
				setStyles: "u"
			}
		},
		"AMap.MouseTool": {
			c: "pz",
			m: {
				marker: "a",
				polyline: "b",
				polygon: "c",
				rectangle: "d",
				circle: "e",
				rule: "f",
				measureArea: "g",
				rectZoomIn: "h",
				rectZoomOut: "i",
				close: "j"
			}
		},
		"AMap.OverView": {
			c: "p0",
			o: {
				tileLayer: "a",
				isOpen: "b",
				visible: "c"
			},
			m: {
				open: "a",
				close: "b",
				getTileLayer: "c",
				setTileLayer: "d",
				show: "e",
				hide: "f"
			}
		},
		"AMap.PlaceSearch": {
			c: "p1",
			o: {
				city: "a",
				type: "b",
				lang: "c",
				pageSize: "d",
				pageIndex: "e",
				extensions: "f",
				map: "g",
				panel: "h"
			},
			m: {
				clear: "a",
				setLang: "b",
				searchInBounds: "c",
				searchNearBy: "d",
				getDetails: "e",
				setType: "f",
				setPageIndex: "g",
				setPageSize: "h",
				setCity: "i",
				close: "j",
				open: "k"
			}
		},
		"AMap.PlaceSearchLayer": {
			c: "p2",
			o: {
				map: "a",
				keywords: "b"
			},
			m: {
				setMap: "a",
				setKeywords: "b"
			}
		},
		"AMap.PlaceSearchRender": {
			c: "p3"
		},
		"AMap.PolyEditor": {
			c: "p4",
			m: {
				open: "a",
				close: "b"
			}
		},
		"AMap.RangingTool": {
			c: "p5",
			o: {
				startMarkerOptions: "a",
				midMarkerOptions: "b",
				endMarkerOptions: "c",
				lineOptions: "d",
				tmpLineOptions: "e",
				startLabelText: "f",
				midLabelText: "g",
				endLabelText: "h",
				startLabelOffset: "i",
				midLabelOffset: "j",
				endLabelOffset: "k"
			},
			m: {
				turnOn: "a",
				turnOff: "b"
			}
		},
		"AMap.RoadInfoSearch": {
			c: "p6",
			o: {
				pageIndex: "a",
				pageSize: "b",
				city: "c"
			},
			m: {
				setPageIndex: "a",
				setPageSize: "b",
				setCity: "c",
				roadInfoSearchByRoadId: "d",
				roadInfoSearchByRoadName: "e",
				crossInfoSearchByCrossId: "f",
				crossInfoSearchByRoadName: "g"
			}
		},
		"AMap.Scale": {
			c: "p7",
			m: {
				show: "a",
				hide: "b"
			}
		},
		"AMap.StationSearch": {
			c: "p8",
			o: {
				pageIndex: "a",
				pageSize: "b",
				city: "c"
			},
			m: {
				setPageIndex: "a",
				setPageSize: "b",
				setCity: "c",
				searchById: "d",
				search: "e"
			}
		},
		"AMap.ToolBar": {
			c: "p9",
			o: {
				offset: "a",
				ruler: "b",
				direction: "c",
				autoPosition: "d",
				locationMarker: "e",
				useNative: "f"
			},
			m: {
				getOffset: "a",
				setOffset: "b",
				hideRuler: "c",
				showRuler: "d",
				hideDirection: "e",
				showDirection: "f",
				hideLocation: "g",
				showLocation: "h",
				hide: "i",
				show: "j",
				doLocation: "k",
				getLocation: "l"
			}
		},
		"AMap.Transfer": {
			c: "1",
			o: {
				city: "a",
				policy: "b",
				nightflag: "c",
				cityd: "d",
				extensions: "e",
				map: "f",
				panel: "g",
				hideMarkers: "h"
			},
			m: {
				clear: "a",
				search: "b",
				leaveAt: "c",
				setPolicy: "d",
				setCity: "e",
				setCityd: "f",
				close: "g",
				open: "h"
			}
		},
		"AMap.TransferRender": {
			c: "2"
		},
		"AMap.UTFGrid": {
			c: "3",
			m: {
				setMap: "a"
			}
		},
		"AMap.Walking": {
			c: "4",
			o: {
				map: "a",
				panel: "b",
				hideMarkers: "c"
			},
			m: {
				clear: "a",
				search: "b",
				close: "c",
				open: "d"
			}
		},
		"AMap.WalkingRender": {
			c: "5"
		},
		"AMap.Weather": {
			c: "6",
			m: {
				getLive: "a",
				getForecast: "b"
			}
		},
		"AMap.IndoorMap": {
			p: "AMap.CustomLayer",
			c: "7",
			o: {
				alwaysShow: "9a"
			},
			m: {
				showIndoorMap: "9a",
				showFloor: "9b",
				showFloorBar: "9c",
				hideFloorBar: "9d",
				hideLabels: "9e",
				showLabels: "9f",
				getSelectedBuildingId: "9g",
				getSelectedBuilding: "9h",
				setSelectedBuildingId: "9i",
				getVisibleBuildingIds: "9j"
			}
		},
		"AMap.Riding": {
			c: "prd",
			o: {
				map: "a",
				panel: "b",
				policy: "c"
			},
			m: {
				clear: "a",
				search: "b",
				close: "c",
				open: "d",
				setPolicy: "e"
			}
		},
		"AMap.RidingRender": {
			c: "prdr"
		}
	};
	V.a.PX = V.BuryPoint.getMethodName = function(b, c) {
		var d;
		for(d = this.Pf[b].m && this.Pf[b].m[c]; !d && this.Pf[b].p;) {
			var e = this.Pf[b].p;
			d = this.Pf[e].m && this.Pf[e].m[c];
			b = e
		}
		d || (d = c);
		return d
	};
	V.a.add = V.BuryPoint.add = function(b, c, d) {
		var e = this.Pf[b].c;
		if(e) {
			if(c) {
				b = this.PX(b, c);
				if(!b) return;
				e += "," + b
			}
			this.eK[e] = 1;
			d && (this.hA[e] = d)
		}
	};
	V.a.Sa = V.BuryPoint.addOptions = function(b, c) {
		var d = this.Pf[b].c,
			e, g;
		for(g in c)(e = this.Pf[b].o && this.Pf[b].o[g]) || (e = g), e = d + "," + e, this.options[e] = 1;
		"AMap.Map" == b && this.RN(b, c, ["mapStyle", "lang", "renderer", "zoom"])
	};
	V.a.RN = V.BuryPoint._addOptionsValue = function(b, c, d) {
		for(var e = 0, g, h; e < d.length; e++) g = d[e], c && c[g] && (h = {}, h[g] = c[g], this.MU(b, h))
	};
	V.a.MU = V.BuryPoint.addOptionsValue = function(b, c) {
		var d = this.Pf[b].c,
			e, g;
		for(g in c)(e = this.Pf[b].o && this.Pf[b].o[g]) || (e = g), e = d + "," + e, this.zA[e] = c[g]
	};
	V.a.send = V.BuryPoint.send = function() {
		var b = [],
			c = [],
			d = [],
			e = [],
			g = V.a,
			h;
		for(h in g.eK) 1 != g.aF[h] && b.push(h);
		for(h in g.hA) 1 != g.bF[h] && c.push(h + "=" + g.hA[h]);
		for(h in g.options) 1 != g.MF[h] && d.push(h);
		for(h in g.zA) 1 != g.NF[h] && e.push(h + "=" + g.zA[h]);
		if(0 < b.length || 0 < c.length || 0 < d.length || 0 < e.length) new V.na.za(V.k.nb + "/js/count.js?" + ["type=f", "k=" + V.k.key, "u=" + V.k.al, "m=" + (V.j.U ? 1 : 0), "pf=" + V.j.uq, "methods=" + b.join("@"), "methodsParams=" + c.join("@"), "options=" + d.join("@"), "optionsValue=" + e.join("@")].join("&")),
			g.clear(b, c, d, e);
		window.setTimeout(g.send, 1E4)
	};
	V.a.clear = V.BuryPoint.clear = function(b, c, d, e) {
		for(var g = 0; g < b.length; g++) this.aF[b[g]] = 1;
		for(g = 0; g < c.length; g++) this.bF[c[g].split("=")[0]] = 1;
		for(g = 0; g < d.length; g++) this.MF[d[g]] = 1;
		for(g = 0; g < e.length; g++) this.NF[e[g].split("=")[0]] = 1
	};
	window.setTimeout(V.a.send, 1E4);
	V.W = function() {};
	V.W.extend = V.W.extend = function(b) {
		function c() {}

		function d() {
			this.B && (this.B.apply(this, arguments), this.CLASS_NAME && V.a.add(this.CLASS_NAME))
		}
		c.prototype = this.prototype;
		var e = new c;
		e.constructor = d;
		d.prototype = e;
		for(var g in this) this.hasOwnProperty(g) && "prototype" !== g && (d[g] = this[g]);
		b.YL && (V.extend(d, b.YL), b.YL = null);
		b.oa && (V.extend.apply(null, [e].concat(b.oa)), b.oa = null);
		b.G && e.G && (b.G = V.extend({}, e.G, b.G));
		V.extend(e, b);
		b.toString && (e.toString = b.toString);
		d.qe = this.prototype;
		return d
	};
	V.W.Mc = V.W.include = function(b) {
		V.extend(this.prototype, b)
	};
	V.extend = function(b) {
		var c = Array.prototype.slice.call(arguments, 1),
			d, e, g, h;
		e = 0;
		for(g = c.length; e < g; e += 1)
			for(d in h = c[e] || {}, h) Object.prototype.hasOwnProperty.call(h, d) && ("function" === typeof h[d] && "function" === typeof b[d] && (h[d].Za = b[d]), b[d] = h[d]);
		return b
	};
	V.W.hn = function(b) {
		for(var c in b)
			if(b.hasOwnProperty(c)) {
				var d = b[c];
				this.prototype[c] && (this.prototype[d] = this.prototype[c])
			}
	};
	V.ca = {
		e: function(b, c, d, e, g) {
			if(this.Ze(b, c, d || this)) return this;
			var h = this.th = this.th || {};
			h[b] = h[b] || [];
			g ? h[b].unshift({
				Ha: c,
				xe: d || this,
				dk: e
			}) : h[b].push({
				Ha: c,
				xe: d || this,
				dk: e
			});
			"complete" === b && this.zb && this.l(b);
			return this
		},
		Ze: function(b, c, d) {
			var e = this.th;
			if(c && d) {
				if(e && b in e && e[b])
					for(var g = 0; g < e[b].length; g += 1)
						if(e[b][g].Ha === c && e[b][g].xe === d) return !0;
				return !1
			}
			return e && b in e && e[b] && 0 < e[b].length
		},
		C: function(b, c, d) {
			if(!this.Ze(b)) return this;
			var e = this.th;
			if(e && e[b])
				for(var g = 0; g < e[b].length; g +=
					1)
					if(!(e[b][g].Ha !== c && "mv" !== c || d && e[b][g].xe !== d)) {
						e[b].splice(g, 1);
						e[b].length || (e[b] = null);
						break
					}
			return this
		},
		l: function(b, c) {
			if(!this.Ze(b)) return this;
			var d = {
				type: b
			};
			c || "string" != typeof c && "number" != typeof c && "boolean" != typeof c ? V.g.Pz(c) ? d.value = c : d = V.extend(d, c) : d.value = c;
			for(var e = [].concat(this.th[b]), g = 0; g < e.length; g += 1) e[g].Ha && (e[g].Ha.call(e[g].xe || this, d), e[g].dk && this.th[b] && this.th[b].splice(g, 1));
			return this
		},
		Ji: function(b) {
			b ? this.th && this.th[b] && (this.th[b] = null) : this.th = null;
			return this
		}
	};
	V.ca.on || (V.ca.on = V.ca.e);
	V.ca.off || (V.ca.off = V.ca.C);
	V.ca.emit || (V.ca.emit = V.ca.l);
	V.gd = {
		set: function(b, c, d) {
			var e = this.Yf;
			if(e && e[b]) {
				var e = e[b],
					g = "set" + this.YI(b);
				e[g] ? (e[g](c, d), d || this.eu(b, c)) : e.set(b, c, d)
			} else(this.si = this.si || {})[b] = c, d || this.eu(b, c)
		},
		YI: function(b) {
			return b.charAt(0).toUpperCase() + b.substr(1)
		},
		get: function(b, c, d) {
			var e, g = this.Yf;
			e = "get" + this.YI(b);
			if(g && g[b]) return d = g[b], d[e] ? d[e](c) : d.get(b, c);
			if(this[e] && !d) return this[e](c);
			if(this.si && this.si.hasOwnProperty(b)) return this.si[b]
		},
		P: function(b, c, d) {
			this.Yf || (this.Yf = {});
			this.Yf[b] !== c && (c.e(b, function(c) {
				this.eu(b,
					c)
			}, this), this.Yf[b] = c, d || this.eu(b))
		},
		ld: function(b, c, d) {
			for(var e = 0; e < b.length; e += 1) this.P(b[e], c, !d)
		},
		ii: function(b) {
			this.Yf && this.Yf[b] && (this.Yf[b].C(b, "mv", this), this.Yf[b] = void 0)
		},
		am: function() {
			if(this.Yf)
				for(var b in this.Yf) this.Yf.hasOwnProperty(b) && this.ii(b)
		},
		eu: function(b, c) {
			if(this[b + "Changed"]) this[b + "Changed"](c);
			else this.CH && this.CH();
			this.l(b, c)
		},
		z4: function(b, c, d) {
			var e = new(V.W.extend({
				oa: [V.ca, V.gd]
			}));
			e.CH = function() {
				for(var c = !0, g = 0; g < b.length; g += 1) e.get(b[g]) || (c = !1);
				c &&
					(e.am(), d())
			};
			for(var g = 0; g < b.length; g += 1) e.P(b[g], c)
		},
		ke: function(b, c) {
			var d, e;
			for(d in b) b.hasOwnProperty(d) && (e = b[d], this.set(d, e, c))
		}
	};
	V || (V = {});
	V.vd = {};
	V.k = {
		localStorage: !0,
		Hs: 500,
		Hq: !0,
		ji: "1.3.26.1",
		xg: {
			dark: "#202020",
			blue_night: "#090d20",
			test: "#033447",
			mapv: "#000001",
			techblue: "#000b11",
			insight: "#19212a",
			"default": "#fcf9f2"
		},
		key: "",
		nc: "http",
		md: [115.423412, 39.442759, 117.514625, 41.060816, 116.405285, 39.904989],
		gc: "http://restapi.amap.com",
		nb: "http://webapi.amap.com",
		Wt: "http://gaode.com",
		bk: "http://m.amap.com",
		nq: "http://webrd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&scale=1&style=8&x=[x]&y=[y]&z=[z]",
		Mt: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x=[x]&y=[y]&z=[z]&scl=1&ltype=3",
		dB: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?style=6&x=[x]&y=[y]&z=[z]",
		mu: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scale=1&style=8",
		nu: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scl=1&style=8&ltype=11",
		Nq: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&style=7&x=[x]&y=[y]&z=[z]",
		Tq: "http://vector.amap.com",
		Sq: "vdata.amap.com",
		zM: "ws"
	};

	function sc(b) {
		V.W.fn = b.fn;
		V.j = b.j;
		V.sd = b.sd;
		b.j = null;
		V.k.nb = b[2].split(",")[0];
		var c = V.k.nc = V.k.nb.split(":")[0];
		"https" === c && (V.k.zM = "wss", V.k.gc = V.k.gc.replace("http", "https"), V.k.nq = V.k.nq.replace("http", "https"), V.k.Mt = V.k.Mt.replace("http", "https"), V.k.dB = V.k.dB.replace("http", "https"), V.k.mu = V.k.mu.replace("http", "https"), V.k.nu = V.k.nu.replace("http", "https"), V.k.Nq = V.k.Nq.replace("http", "https"), V.k.Tq = V.k.Tq.replace("http", "https"));
		var d = window.location.href;
		0 !== d.indexOf("http") && window.parent &&
			window.parent !== window && (d = window.parent.location.href);
		V.k.kX = d;
		d = encodeURIComponent(d);
		V.k.al = d;
		V.k.Ce = V.k.nb + "/theme/v1.3/markers/" + (V.j.Jc ? "b" : "n");
		var e = document.createElement("style");
		e.type = "text/css";
		V.k.mW = "url(" + V.k.nb + "/theme/v1.3/openhand.cur),default";
		var g = ".amap-container{cursor:" + V.k.mW + ";}.amap-drag{cursor:url(" + V.k.nb + "/theme/v1.3/closedhand.cur),default;}";
		e.styleSheet ? (c = function() {
			try {
				e.styleSheet.cssText = g
			} catch(b) {}
		}, e.styleSheet.disabled ? setTimeout(c,
			10) : c()) : e.appendChild(document.createTextNode(g));
		(document.head || document.getElementsByTagName("head")[0]).appendChild(e);
		V.k.mode = Number(b[3]);
		V.k.md = b[1];
		V.k.key = b[0];
		V.k.Yx = b[4];
		V.k.od = b[5];
		V.k.BU = b[6]
	}
	window.AMap && window.AMap.JB && window.AMap.JB.__load__ && window.AMap.JB.__load__(sc);
	V.ZB = {
		tW: Math.PI / 180,
		i_: 180 / Math.PI
	};
	(function() {
		function b(b) {
			return "undefined" == typeof b ? "" : b
		}
		V.me = {
			SX: function(c) {
				c.name = b(c.name);
				var d = [c.y, c.x, c.name];
				if(V.j.U) {
					var e = [V.k.bk + "/callAPP?", "src=jsapi_q"];
					e.push("&ios=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + c.name + "&lat=" + c.y + "&lon=" + c.x));
					e.push("&android=" + encodeURIComponent("androidamap?action=shorturl&q=" + d.join(",") + "&sourceApplication=jsapi_q"));
					e.push("&wp=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + c.name + "&lat=" +
						c.y + "&lon=" + c.x));
					e.push("&mo=" + encodeURIComponent(V.k.bk + "?q=" + d.join(",") + "&callapp=0&sourceApplication=jsapi_q"));
					return e.join("")
				}
				return V.k.Wt + "?q=" + d.join(",") + "&src=jsapi_q"
			},
			RI: function(c) {
				c.name = b(c.name);
				c.address = b(c.address);
				c.x = b(c.x);
				c.y = b(c.y);
				var d = [c.id, c.y, c.x, c.name, c.address];
				if(V.j.U) {
					var e = [V.k.bk + "/callAPP?", "src=jsapi_p"];
					e.push("&ios=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [c.y, c.x, c.name, c.address, c.id].join() + "&title=" + c.name));
					e.push("&android=" +
						encodeURIComponent("androidamap?action=shorturl&p=" + d.join(",") + "&sourceApplication=jsapi_p"));
					e.push("&wp=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [c.y, c.x, c.name, c.address, c.id].join() + "&title=" + c.name));
					e.push("&mo=" + encodeURIComponent(V.k.bk + "/?p=" + d.join(",") + "&callapp=0&sourceApplication=jsapi_p"));
					return e.join("")
				}
				return V.k.Wt + "?p=" + d.join(",") + "&src=jsapi_p"
			},
			OI: function(c) {
				if(V.j.U) {
					var d = [V.k.bk + "/callAPP?", "src=jsapi_detail"];
					d.push("&ios=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" +
						c.id));
					c.name = b(c.name);
					c.x = b(c.x);
					c.y = b(c.y);
					d.push("&android=" + encodeURIComponent("androidamap?action=openFeature&featureName=PoiDetail&poiid=" + c.id + "&poiname=" + c.name + "&x=" + c.x + "&y=" + c.y + "&sourceApplication=jsapi_detail"));
					d.push("&wp=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + c.id));
					d.push("&mo=" + encodeURIComponent(V.k.bk + "/detail/index/poiid=" + c.id + "&sourceApplication=jsapi_detail"));
					return d.join("")
				}
				return V.k.Wt + "/detail/" + c.id + "?src=jsapi_detail"
			},
			pz: function(c) {
				c.sname =
					b(c.sname);
				"" == c.sname && (c.sname = "\u8d77\u70b9");
				c.dname = b(c.dname);
				"" == c.dname && (c.dname = "\u7ec8\u70b9");
				c.mcount = b(c.mcount);
				c.my = b(c.my);
				c.mx = b(c.mx);
				c.mname = b(c.mname);
				var d = [c.sy, c.sx, c.sname, c.dy, c.dx, c.dname, c.m, c.t, c.mcount, c.my, c.mx, c.mname];
				if(V.j.U) {
					var e = [V.k.bk + "/callAPP?", "src=jsapi_r_" + c.t];
					e.push("&ios=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + c.t + "&dev=0&slat=" + c.sy + "&slon=" + c.sx + "&sname=" + c.sname + "&dlat=" + c.dy + "&dlon=" + c.dx + "&dname=" + c.dname + "&m=" + c.m + "&t=" + c.t + "&vian=0&vialons=&vialats=&vianames="));
					var g = c.t;
					0 === c.t ? g = 2 : 2 === c.t && (g = 4);
					e.push("&android=" + encodeURIComponent("androidamap://route?sourceApplication=jsapi_r_" + c.t + "&slat=" + c.sy + "&slon=" + c.sx + "&sname=" + c.sname + "&dlat=" + c.dy + "&dlon=" + c.dx + "&dname=" + c.dname + "&dev=0&" + c.m + "&t=" + g));
					e.push("&wp=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + c.t + "&dev=0&slat=" + c.sy + "&slon=" + c.sx + "&sname=" + c.sname + "&dlat=" + c.dy + "&dlon=" + c.dx + "&dname=" + c.dname + "&m=" + c.m + "&t=" + c.t + "&vian=0&vialons=&vialats=&vianames="));
					e.push("&mo=" + encodeURIComponent(V.k.bk +
						"/?r=" + d.join(",") + "&callapp=0&sourceApplication=jsapi_r_" + c.t));
					return e.join("")
				}
				return V.k.Wt + "?r=" + d.join(",") + "src=jsapi_r_" + c.t
			},
			lk: function(b) {
				V.j.U ? window.location.href = b : window.open(b)
			}
		}
	})();
	V.g = {
		Bu: [],
		Va: 4.007501668557849E7,
		zV: "ASDFGHJKLQWERTYUIO!sdfghjkl",
		Tb: function(b) {
			if("object" === typeof b) {
				var c = {},
					d;
				for(d in b) b.hasOwnProperty(d) && (c[d] = V.g.Tb(b[d]));
				return c
			}
			return b
		},
		Pz: function(b) {
			return "object" === typeof HTMLElement ? b instanceof HTMLElement : b && "object" === typeof b && 1 === b.nodeType && "string" === typeof b.nodeName
		},
		FB: function(b) {
			var c, d, e, g, h;
			d = [];
			e = NaN;
			g = 0;
			for(h = b.length; g < h; g += 1) c = b[g], c = this.zV.indexOf(c), isNaN(e) ? e = 27 * c : (d.push(e + c - 333), e = NaN);
			return d
		},
		b0: function(b, c) {
			for(var d =
					Math.ceil(c.length / 8), e = 0; e < d; e += 1) {
				var g = 8 * e,
					h = g + 8;
				h > c.length && (h = c.length);
				for(; g < h; g += 1) b(c[g])
			}
		},
		Ry: function(b, c, d) {
			var e, g;
			e = Math.floor(d / 2);
			g = d - e;
			e = (1 << e) - 1 << g;
			g = (1 << g) - 1;
			return [d, b & e | c & g, c & e | b & g]
		},
		kt: function(b) {
			return b ? encodeURIComponent(b) : ""
		},
		Cc: function(b, c, d, e) {
			d = b[c].i[d];
			if("undefined" === typeof d) return null;
			b = b[c].s;
			if("number" === typeof d) return b[d];
			for(;
				"undefined" === typeof d[e.toString()] && !(e -= 1, 3 > e););
			e = d[e.toString()];
			return "number" === typeof e ? b[e] : null
		},
		cy: function(b) {
			for(var c = [], d = 0, e = b.length; d < e; d += 2) c.push(parseInt(b.substr(d, 2), 16));
			c.push((c.shift() / 255).toFixed(2));
			return "rgba(" + c.join(",") + ")"
		},
		iq: function(b) {
			for(var c in b)
				if(b.hasOwnProperty(c)) return !1;
			return !0
		},
		Ni: function(b, c) {
			return 0 > c ? b : b.slice(0, c).concat(b.slice(c + 1, b.length))
		},
		vW: function(b, c) {
			var d = V.g.indexOf(b, c);
			return V.g.Ni(b, d)
		},
		indexOf: function(b, c) {
			if(b && !b.length) return -1;
			if(b.indexOf) return b.indexOf(c);
			for(var d = 0; d < b.length; d += 1)
				if(b[d] === c) return d;
			return -1
		},
		bind: function(b, c) {
			var d = 2 < arguments.length ?
				Array.prototype.slice.call(arguments, 2) : null;
			return function() {
				return b.apply(c, d || arguments)
			}
		},
		bb: function(b, c) {
			c = c || {};
			b.G = V.extend({}, b.G, c);
			return b.G
		},
		pI: function() {
			return !1
		},
		EI: function(b, c) {
			return(b || "") + Math.round(Math.random() * Math.pow(10, c || 6))
		},
		Ab: function() {
			var b = 0;
			return function(c) {
				c._amap_id || (b += 1, c._amap_id = b);
				return c._amap_id
			}
		}(),
		WW: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
		Pi: Date.now ? function() {
			return Date.now()
		} : function() {
			return(new Date).getTime()
		},
		E4: function(b,
			c, d, e) {
			var g;
			if(e) {
				var h = 0,
					k, l = this.Pi;
				g = function() {
					k = l();
					if(k - h < c) return !1;
					h = k;
					b.apply(d, arguments)
				}
			} else {
				var m, n, p;
				p = function() {
					m = !1;
					n && (g.apply(d, n), n = !1)
				};
				g = function() {
					m ? n = arguments : (m = !0, b.apply(d, arguments), setTimeout(p, c))
				}
			}
			return g
		},
		Zg: function(b, c) {
			return Number(Number(b).toFixed(c || 0))
		},
		isArray: function(b) {
			return Array.isArray ? Array.isArray(b) : "[object Array]" === Object.prototype.toString.call(b)
		},
		$L: function(b) {
			var c = 0;
			if(0 === b.length) return c;
			for(var d, e = 0, g = b.length; e < g; e += 1) d = b.charCodeAt(e),
				c = (c << 5) - c + d, c &= c;
			return c
		},
		y3: function(b, c) {
			c = c ? Math.ceil(parseInt(c.substr(6)) / 24) : 1;
			for(var d = "", e = 0, g = b.length; e < g; e++) d += String.fromCharCode((b.charCodeAt(e) - 256 - c + 65535) % 65535);
			return d
		},
		pW: function(b, c) {
			var d = (b + "").slice(-2),
				e = (c + "").slice(-2);
			b = b.slice(0, -2);
			c = c.slice(0, -2);
			var g = parseInt((e + d).slice(1)),
				e = parseInt("1" + e) / 3E3;
			b -= parseInt("1" + d) / 3E3 * (Math.ceil(g / 250) % 2 ? 1 : -1);
			c -= e * (1 < g / 500 ? 1 : -1);
			return new V.O(parseFloat(b).toFixed(5), parseFloat(c).toFixed(5))
		},
		oK: function(b) {
			return "undefined" !==
				typeof JSON && JSON.stringify ? V.g.$L(JSON.stringify(b)) : null
		},
		E5: function(b, c) {
			if(c || !b.hasOwnProperty("_amap_hash")) {
				var d = V.g.oK(b);
				d && (b._amap_hash = d)
			}
			return b._amap_hash
		},
		iepngFix: function(b) {
			function c() {
				for(var b; d.length;) b = d.shift(), window.DD_belatedPNG.fixPng(b);
				e.Rz = !0
			}
			this.RK || (this.RK = [], this.Rz = !1);
			var d = this.RK,
				e = this;
			if("img" === b.tagName.toLowerCase()) d.push(b);
			else {
				b = b.getElementsByTagName("*");
				for(var g = 0; g < b.length; g += 1) d.push(b[g])
			}
			window.DD_belatedPNG && this.Rz ? setTimeout(function() {
					c()
				},
				100) : this.Rz || V.Qa.load("AMap.FixPng", c)
		},
		ha: function(b) {
			if(V.g.isArray(b))
				if(V.g.isArray(b[0]))
					for(var c = 0; c < b.length; c += 1) b[c] = V.g.ha(b[c]);
				else if(c = typeof b[0], "string" === c || "number" === c) return new V.O(b[0], b[1]);
			return b
		},
		ek: function(b) {
			return V.g.isArray(b) ? new V.Yb(b[0], b[1]) : b
		}
	};
	(function() {
		function b(b) {
			window.clearTimeout(b)
		}

		function c(b) {
			var c, d, e = ["webkit", "moz", "o", "ms"];
			for(c = 0; c < e.length && !d; c += 1) d = window[e[c] + b];
			return d
		}

		function d(b) {
			var c = +new Date,
				d = Math.max(0, 100 - (c - e));
			e = c + d;
			return window.setTimeout(b, d)
		}
		var e = 0,
			g = window.requestAnimationFrame || c("RequestAnimationFrame") || d,
			h = window.cancelAnimationFrame || c("CancelAnimationFrame") || c("CancelRequestAnimationFrame") || b;
		V.g.Fe = function(b, c, d, e) {
			b = V.g.bind(b, c);
			if(d) b();
			else return g.call(window, b, e)
		};
		V.g.dl = function(b) {
			b &&
				h.call(window, b)
		}
	})();
	V.g.N_ = window.requestIdleCallback ? window.requestIdleCallback.bind(window) : function(b) {
		var c = Date.now();
		return setTimeout(function() {
			b({
				didTimeout: !1,
				timeRemaining: function() {
					return Math.max(0, 70 - (Date.now() - c))
				}
			})
		}, 0)
	};
	V.g.uV = window.cancelIdleCallback ? window.cancelIdleCallback.bind(window) : function(b) {
		clearTimeout(b)
	};
	(function(b) {
		var c = 1,
			d = {};
		b.g.l0 = function(b, c) {
			if(d[b]) {
				var h = d[b];
				h.Iq = 1;
				h.result = c;
				if(h.Sg) {
					for(var k = h.Sg, l = 0, m = k.length; l < m; l++) k[l].call(null, c);
					h.Sg = null
				}
			}
		};
		b.g.OV = function(b) {
			d[b] = null
		};
		b.g.w1 = function(b, c) {
			if(d[b]) {
				var h = d[b];
				0 < h.Iq ? c(null, h.result) : (h.Sg || (h.Sg = []), h.Sg.push(c))
			} else c(null, b)
		};
		b.g.lz = function(e, g) {
			var h = navigator.geolocation;
			if(!b.j.yY || "https:" === document.location.protocol) return e(null, h);
			var k;
			g && g.x1 && (k = "f" + c++, d[k] = {
				Iq: 0
			});
			var l = void 0,
				m = !1;
			g && g.timeout && (l = setTimeout(function() {
				l =
					void 0;
				e({
					code: 3,
					info: "TIME_OUT",
					message: "Get geolocation time out."
				});
				m = !0
			}, g.timeout));
			h.getCurrentPosition(function() {
				m || (clearTimeout(l), l = void 0, e(null, h))
			}, function(c) {
				m || (clearTimeout(l), l = void 0, 2 === c.code && 0 < c.message.indexOf("permission") ? b.Qa.load("AMap.GeoRemoteLoc", function() {
					e(null, b.QM, k)
				}) : e(null, h))
			});
			return k
		}
	})(V);
	(function(b) {
		var c = b.W.extend({
			oa: [b.ca],
			B: function() {}
		});
		b.hm = new c
	})(V);
	(function(b) {
		var c = b.W.extend({
			oa: [b.ca],
			B: function() {
				this.IQ()
			},
			IQ: function() {
				b.hm && b.hm.e("vecTileParsed.buildings", this.sQ, this)
			},
			CJ: function(b) {
				return b.map.EE
			},
			GI: function(b) {
				return this.CJ(b) ? b.map.xw : null
			},
			j0: function(b, c) {
				if(c) {
					var g = c.map;
					g && (g.xw ? g.xw.toString() : "") !== (b ? b.toString() : "") && (g.xw = b || [], g.set("display", 0))
				}
			},
			HL: function(b, c) {
				if(c) {
					var g = c.map;
					g && g.EE !== b && (g.EE = b, g.set("display", 0))
				}
			},
			s2: function() {},
			zE: function(b, c) {
				if(b)
					for(var g = 0, h = b.length; g < h; g++) b[g] && 0 > c.indexOf(b[g]) &&
						c.push(b[g])
			},
			sI: function(c) {
				if(!c) return null;
				c = c.map.Ba;
				for(var e = 0, g = c.length; e < g; e++)
					if(b.V.wg && c[e] instanceof b.V.wg && c[e].ra && c[e].ra.length && (-1 !== c[e].ra.indexOf("building") || -1 !== c[e].ra.indexOf("poilabel"))) return c[e];
				return null
			},
			mX: function(b) {
				if(b = this.sI(b)) {
					if(b = b.Ua.get("tiles", null, !0)) b = b[0];
					else return null;
					if(!b || !b.length) return null;
					for(var c = [], g = 0, h = b.length; g < h; g++) {
						var k = b[g];
						k.Ef && k.Ef.Hd && this.zE(k.Ef.Hd, c)
					}
					return c
				}
			},
			sQ: function(b) {
				if(b.Eu && b.Eu.Ef && (b = b.Eu.Ef.Hd)) {
					var c = [];
					this.zE(b, c);
					this.l("vecTileParsed.builds.found", {
						xH: c
					})
				}
			}
		});
		b.Ie = new c
	})(V);
	(function(b) {
		function c() {
			return {
				checkup: function() {
					var b = Array.prototype.slice.call(arguments, 0);
					b.pop()(null, b)
				}
			}
		}

		function d(b) {
			return {
				injectCode: function(c, d) {
					var e = null,
						g = null;
					try {
						e = (new Function("self", c))(b)
					} catch(h) {
						g = h.toString()
					}
					d(g, e)
				}
			}
		}

		function e(b) {
			function c(d, e) {
				function g(b, c, d) {
					b = {
						Vn: Date.now(),
						Rn: k,
						error: b,
						result: c
					};
					if(d)
						for(var h in d) d.hasOwnProperty(h) && (b[h] = d[h]);
					e(b)
				}
				var h = d.Bz,
					k = d.Rn,
					m = d.Dy,
					n = d.Dp,
					v = d.VU || [],
					s = b._wkHandlers[h];
				s ? s[m] ? n ? s[m].apply(s, v.concat(g)) : g(null, s[m].apply(s,
					v)) : g("Unknown cmd: " + m) : g("Can not find handler for: " + h)
			}
			var d = [];
			b.Gs = function(b) {
				d.push.apply(d, b)
			};
			b.addEventListener("message", function(e) {
				function g(c) {
					if(D) {
						D.push(c);
						var e = !!c.pZ;
						e || w++;
						if(w > k) console.error("Resp len wrong!!");
						else if(c = w === k, e || c) {
							e = 1 < D.length ? {
								O_: D
							} : D[0];
							e.Vn = Date.now();
							e.s5 = u;
							if(d.length) {
								try {
									b.postMessage(e, d)
								} catch(h) {
									b.postMessage(e), console.error(h)
								}
								d.length = 0
							} else b.postMessage(e);
							D.length = 0;
							c && (g = D = null)
						}
					} else console.error("Seemed callback already sent!!")
				}
				var h =
					e.data;
				e = h.L_ || [h];
				for(var k = e.length, w = 0, u = Date.now() - h.Vn, D = [], h = 0; h < k; h++) c(e[h], g)
			}, !1)
		}

		function g(e, k) {
			this.G = b.extend({
				batchSend: !0,
				lazy: !1,
				libPolyfills: null
			}, k);
			this.Qm = [];
			this.wo = this.G.clientId || "w" + h++;
			this.G.onReady && this.tA(this.G.onReady);
			this.Ar = this.IP();
			if("function" === typeof e) {
				var n = {};
				n[this.Ar] = e;
				e = n
			}
			e[g.tz] = d;
			e[this.TD()] = c;
			this.Mr = e;
			this.$F();
			this.G.lazy || this.Ym();
			b.ut || !1 === this.G.hostWorker || (b.ut = this)
		}
		var h = 1,
			k = 1;
		b.extend(g, {
			tz: "_g_",
			v0: function(b) {
				if(!b.NN) {
					var c = [];
					b.addEventListener("message",
						function(b) {
							b = b.data;
							b = b.O_ || [b];
							for(var d = 0, e = b.length; d < e; d++) {
								var g = b[d],
									h;
								a: {
									h = g.Rn;
									for(var k = !!g.pZ, l = 0, D = c.length; l < D; l++) {
										var v = c[l];
										if(h === v.Rn) {
											k || c.splice(l, 1);
											h = v;
											break a
										}
									}
									h = void 0
								}
								h ? h.Dp.call(null, g.error, g.result, !0) : console.warn("Receive worker msg: ", g)
							}
						}, !1);
					b.BN = c;
					b.NN = !0
				}
			}
		});
		b.extend(g.prototype, {
			IP: function() {
				return "_def_" + this.wo
			},
			TD: function() {
				return "_cln_" + this.wo
			},
			kT: function() {
				var b = Array.prototype.slice.call(arguments, 0);
				this.cG = b;
				if(this.Lm) {
					for(var c = 0, d = this.Lm.length; c <
						d; c++) this.Lm[c].apply(null, b);
					this.Lm.length = 0
				}
			},
			Gs: function(b) {
				this.fT && this.Qm.push.apply(this.Qm, b)
			},
			tA: function(b) {
				this.cG ? b.apply(null, this.cG) : (this.Lm || (this.Lm = []), this.Lm.push(b))
			},
			Ym: function(c) {
				var d = this;
				if(!d.$C) {
					d.$C = !0;
					var e = function(e, g) {
						e && b.j.IJ && console.warn(e);
						d.kT.call(d, e, g);
						c && c(e, g)
					};
					b.j.IJ ? this.eT(function(b, c) {
						c ? this.QQ(c, function(b, d) {
							b ? e(b) : (this.ds(d), this.$x = d, this.Qm.length = 0, this.Tr = null, e(null, {
								cV: c,
								H1: d
							}))
						}) : e("Worker start failed!")
					}) : e("Worker not supported!")
				}
			},
			tJ: function(b, c, d) {
				var e = this;
				b = b || e.Ar;
				var h = {};
				e.PC(b, c, h);
				e.ds(null, h);
				e.tA(function(k) {
					k ? d(k) : e.$x ? (k = e.ZD(c, e.lw(e.wo, b)), e.$x.sendMessage(g.tz + ":injectCode", k, function(b, c) {
						b || e.ds(e.$x, h);
						d(b, c)
					})) : d("Worker msger missing!!")
				})
			},
			lw: function(b, c) {
				if(!b || !c) throw Error("clientId or ns missing!!");
				return b + "_" + c
			},
			YP: function(b, c, d) {
				function e() {
					var c = Array.prototype.slice.call(arguments, 0);
					d.sendMessage.apply(d, [b].concat(c))
				}
				var g = this;
				if(!d) return function() {
					g.$C || "utilCall" === g.G.lazy && g.Ym();
					c.apply(this.Tr, arguments)
				};
				e._proxy2Worker = !0;
				return e
			},
			$F: function() {
				this.ds(null)
			},
			wO: function(b) {
				var c = {},
					d;
				for(d in b) b.hasOwnProperty(d) && this.PC(d, b[d], c);
				return c
			},
			PC: function(b, c, d) {
				c = c.call(null, !1);
				for(var e in c) c.hasOwnProperty(e) && (d[b + ":" + e] = c[e], b === this.Ar && (d[e] = c[e]))
			},
			ds: function(b, c) {
				c || (this.Tr || (this.Tr = this.wO(this.Mr)), c = this.Tr);
				for(var d in c)
					if(c.hasOwnProperty(d)) {
						var e = c[d];
						"function" === typeof e && (this[d] = this.YP(d, e, b))
					}
				this.fT = !!b
			},
			ZD: function(b, c) {
				var d = b.toString(),
					e, d = d.replace(/^function([^\(]*)\(/, function() {
						e = "_prep_h" + k++;
						return "function " + e + "("
					});
				return e ? d + ';if(self._wkHandlers["' + c + '"]){ console.log(self._wkHandlers["' + c + '"]); throw new Error("' + c + ' already exists!"); }self._wkHandlers["' + c + '"]=' + e + ".call(null,self)||{};" + e + "=null;" : (console.error("No function match!!"), !1)
			},
			eT: function(b) {
				var c = this.wo,
					d = [],
					e;
				for(e in this.Mr)
					if(this.Mr.hasOwnProperty(e)) {
						var h = this.ZD(this.Mr[e], this.lw(c, e));
						h && d.push(h)
					}
				c = this.G.libPolyfills || [];
				e = 0;
				for(h = c.length; e <
					h; e++) c[e] = "(" + c[e].toString() + ")(self);";
				var k = c.join(";\n") + ";\n" + d.join(";\n"),
					d = this.G.hostWorker,
					t = this;
				d && d !== t ? d.tA(function(c, d) {
					c ? b.call(t, c) : d.H1.sendMessage(g.tz + ":injectCode", k, function(c) {
						c ? b.call(t, c) : b.call(t, null, d.cV)
					})
				}) : setTimeout(function() {
					b.call(t, null, t.fU(k))
				}, 0)
			},
			fU: function(b) {
				var c = {
					type: "text/javascript; charset=utf-8"
				};
				b = "self._wkHandlers={};(" + e.toString() + ")(self);\n" + b;
				var d;
				try {
					var g = window.URL || window.webkitURL,
						h = g.createObjectURL(new Blob([b], c));
					d = new Worker(h);
					setTimeout(function() {
						g.revokeObjectURL(h);
						h = null
					}, 3E3)
				} catch(k) {
					console.error(k);
					return
				}
				return d
			},
			cP: function(c) {
				var d = 1,
					e = c.BN,
					g = this,
					h = !!g.G.batchSend;
				return function(k) {
					var t = Array.prototype.slice.call(arguments, 1),
						w = "function" === typeof t[t.length - 1] ? t.pop() : null,
						u = g.wo,
						D = k.split(":"),
						v = g.Ar;
					1 < D.length && (k = D[1], v = D[0]);
					t = {
						Vn: b.g.Pi(),
						Bz: g.lw(u, v),
						Dp: !!w,
						Rn: u + "_" + d++,
						Dy: k,
						VU: t
					};
					w && e.push({
						Dy: t.Dy,
						Bz: t.Bz,
						Vn: t.Vn,
						Rn: t.Rn,
						Dp: w
					});
					h ? g.eO(c, t) : g.Jm(c, t)
				}
			},
			Jm: function(b, c) {
				if(this.Qm.length) {
					try {
						b.postMessage(c,
							this.Qm)
					} catch(d) {
						b.postMessage(c), console.error(d)
					}
					this.Qm.length = 0
				} else b.postMessage(c)
			},
			eO: function(c, d) {
				c.Xw || (c.Xw = []);
				c.Xw.push(d);
				if(!c.YF) {
					var e = this;
					c.YF = setTimeout(function() {
						c.YF = null;
						var d = c.Xw;
						d.length && (e.Jm(c, 1 === d.length ? d[0] : {
							Vn: b.g.Pi(),
							L_: d
						}), d.length = 0)
					}, 0)
				}
			},
			YT: function(b) {
				var c = this;
				b.addEventListener("error", function(b) {
					console.error(b);
					c.$F(null)
				}, !1);
				g.v0(b)
			},
			QQ: function(b, c) {
				var d = this;
				d.YT(b);
				var e = this.cP(b);
				if(g.PO) c.call(d, null, {
					sendMessage: e
				});
				else {
					g.PO = !0;
					var h = [d.TD() +
						":checkup", Math.random().toFixed(5) + "", Math.round(1E3 * Math.random()), !1,
						function(b, g) {
							var k = !0;
							if(b || !g || g.length !== h.length - 2) k = !1;
							else
								for(var l = 0, D = g.length; l < D; l++)
									if(g[l] !== h[l + 1]) {
										k = !1;
										break
									}
							k ? c.call(d, null, {
								sendMessage: e
							}) : (console.error(b), c.call(d, "Self checkup failed!!"))
						}
					];
					e.apply(d, h)
				}
			}
		});
		b.hv = g
	})(V);
	V.f = {
		get: function(b) {
			return "string" === typeof b ? document.getElementById(b) : b
		},
		I4: function(b, c) {
			var d = document.head || document.getElementsByTagName("head")[0];
			if(d) {
				var e = document.createElement("link");
				e.setAttribute("rel", "stylesheet");
				e.setAttribute("type", "text/css");
				e.setAttribute("href", b);
				c ? d.appendChild(e) : d.insertBefore(e, d.firstChild)
			} else document.write("<link rel='stylesheet' href='" + b + "'/>")
		},
		Cc: function(b, c) {
			var d = b.style[c];
			!d && b.currentStyle && (d = b.currentStyle[c]);
			d && "auto" !== d || !document.defaultView ||
				(d = (d = document.defaultView.getComputedStyle(b, null)) ? d[c] : null);
			d && "auto" !== d || "height" !== c || (d = b.clientHeight + "px");
			d && "auto" !== d || "width" !== c || (d = b.clientWidth + "px");
			return "auto" === d ? null : d
		},
		Yp: function(b) {
			if(b) return new V.Yb(b.clientWidth || document.body.clientWidth, b.clientHeight || (V.j.rn ? "CSS1Compat" === document.compatMode ? document.documentElement.clientHeight : document.body.clientHeight : document.body.clientHeight), !0)
		},
		sX: function(b) {
			return new V.Yb(b.clientWidth, b.clientHeight)
		},
		sz: function(b) {
			var c =
				0,
				d = 0,
				e = b,
				g = document.body,
				h = document.documentElement,
				k, l = V.j.dq;
			do {
				c += e.offsetTop || 0;
				d += e.offsetLeft || 0;
				c += parseInt(V.f.Cc(e, "borderTopWidth"), 10) || 0;
				d += parseInt(V.f.Cc(e, "borderLeftWidth"), 10) || 0;
				k = V.f.Cc(e, "position");
				if(e.offsetParent === g && "absolute" === k) break;
				if("fixed" === k) {
					c += g.scrollTop || h.scrollTop || 0;
					d += g.scrollLeft || h.scrollLeft || 0;
					break
				}
				e = e.offsetParent
			} while (e);
			e = b;
			do {
				if(e === g) break;
				c -= e.scrollTop || 0;
				d -= e.scrollLeft || 0;
				V.f.FW() || !V.j.B1 && !l || (d += e.scrollWidth - e.clientWidth, l && "hidden" !==
					V.f.Cc(e, "overflow-y") && "hidden" !== V.f.Cc(e, "overflow") && (d += 17));
				e = e.parentNode
			} while (e);
			return new V.K(d, c)
		},
		FW: function() {
			V.f.mP || (V.f.mP = !0, V.f.lP = "ltr" === V.f.Cc(document.body, "direction"));
			return V.f.lP
		},
		create: function(b, c, d) {
			b = document.createElement(b);
			d && (b.className = d);
			c && c.appendChild(b);
			return b
		},
		ZH: function() {
			document.selection && document.selection.empty && document.selection.empty();
			this.vS || (this.vS = document.onselectstart, document.onselectstart = V.g.pI)
		},
		hI: function() {},
		pn: function(b, c) {
			if(b &&
				c) return 0 < b.className.length && RegExp("(^|\\s)" + c + "(\\s|$)").test(b.className)
		},
		pb: function(b, c) {
			b && c && !V.f.pn(b, c) && (b.className += (b.className ? " " : "") + c)
		},
		wb: function(b, c) {
			function d(b, d) {
				return d === c ? "" : b
			}
			b && c && (b.className = b.className.replace(/(\S+)\s*/g, d).replace(/(^\s+|\s+$)/, ""))
		},
		LI: function(b, c) {
			return 1 === c ? "" : "opacity" in b.style ? "opacity:" + c : 8 <= document.documentMode ? "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity=" + Math.ceil(100 * c) + ")'" : "filter:alpha(opacity=" + Math.ceil(100 *
				c) + ")"
		},
		jk: function(b, c) {
			if("opacity" in b.style) b.style.opacity = c;
			else if("filter" in b.style) {
				b = b.childNodes.length ? b.childNodes : [b];
				for(var d = Math.round(100 * c), e = 0; e < b.length; e += 1) b[e].childNodes && b[e].childNodes.length ? this.jk(b[e], c) : b[e].style && (b[e].style.filter = "", 100 !== d && (b[e].style.filter = " progid:DXImageTransform.Microsoft.Alpha(opacity=" + d + ")"))
			}
		},
		vB: function(b) {
			for(var c = document.documentElement.style, d = 0; d < b.length; d += 1)
				if(b[d] in c) return b[d];
			return !1
		},
		WI: function(b) {
			var c = V.j.C1;
			return "translate" +
				(c ? "3d" : "") + "(" + b.x + "px," + b.y + "px" + ((c ? ",0" : "") + ")")
		},
		f4: function(b, c) {
			return V.f.WI(c.add(c.tc(-1 * b))) + (" scale(" + b + ") ")
		},
		A5: function(b, c, d) {
			b.Ne = c;
			!d && V.j.QU ? (c = V.f.WI(c), d = b.style[V.f.Bd].split("rotate"), 1 < d.length ? (d[0] = c, b.style[V.f.Bd] = d.join("rotate")) : b.style[V.f.Bd] = c, V.j.dZ && (b.style.WebkitBackfaceVisibility = "hidden")) : (b.style.left = c.x + "px", b.style.top = c.y + "px")
		},
		Lc: function(b) {
			b.Ne || (b.Ne = b.style.left ? new V.K(parseInt(b.style.left), parseInt(b.style.top)) : new V.K(0, 0));
			return b.Ne
		},
		y5: function(b,
			c) {
			b = b instanceof Array ? b : [b];
			for(var d = 0; d < b.length; d += 1) b[d].style.cssText = c
		},
		EL: function(b, c) {
			";" !== c[c.length - 1] && (c += ";");
			return c.toLowerCase() !== b.style.cssText.replace(/ /g, "").toLowerCase() ? (b.style.cssText = c, !0) : !1
		},
		ja: function(b, c) {
			b = b instanceof Array ? b : [b];
			for(var d = 0; d < b.length; d += 1)
				for(var e in c) c.hasOwnProperty(e) && (b[d].style[e] = c[e]);
			return this
		},
		aL: function(b) {
			for(; b.childNodes.length;) b.removeChild(b.childNodes[0])
		},
		remove: function(b) {
			b && b.parentNode && b.parentNode.removeChild(b)
		},
		rotate: function(b, c, d) {
			var e = V.f.Bd;
			d = d || {
				x: b.clientWidth / 2,
				y: b.clientHeight / 2
			};
			e ? (b.style[e] = "" + (" rotate(" + c + "deg)"), b.style[V.f.nk[e] + "-origin"] = d.x + "px " + d.y + "px") : (e = Math.cos(c * Math.PI / 180), c = Math.sin(c * Math.PI / 180), b.style.filter = "progid:DXImageTransform.Microsoft.Matrix()", 0 < b.filters.length && (b = b.filters.item(0), b.T1 = -d.x * e + d.y * c + d.x, b.U1 = -d.x * c - d.y * e + d.y, b.M11 = b.M22 = e, b.M12 = -(b.M21 = c)))
		},
		WX: function(b, c, d) {
			var e = V.f.Bd;
			d = d || {
				x: b.clientWidth / 2,
				y: b.clientHeight / 2
			};
			return e ? V.f.nk[e] + ":" + ("" +
				(" rotate(" + c + "deg)")) + ";" + (V.f.nk[e] + "-origin:" + d.x + "px " + d.y + "px") : ""
		},
		gi: function(b, c, d) {
			b.width = c;
			b.height = d
		},
		getElementsByClassName: function(b, c, d) {
			c = c || "*";
			d = d || document;
			if(d.getElementsByClassName) return d.getElementsByClassName(b);
			c = d.getElementsByTagName(c);
			b = RegExp("(^|\\s)" + b + "(\\s|$)");
			d = [];
			for(var e = 0, g; e < c.length; e++) g = c[e], b.test(g.className) && d.push(g);
			return d
		},
		fillText: function(b, c) {
			if(b) return void 0 !== b.textContent ? b.textContent = c : void 0 !== b.innerText ? b.innerText = c : b.innerHTML =
				c, b
		}
	};
	(function() {
		var b = V.f.vB(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]),
			c;
		V.extend(V.f, {
			ZH: function() {
				V.w.e(window, "selectstart", V.w.preventDefault);
				if(b) {
					var d = document.documentElement.style;
					"none" !== d[b] && (c = d[b], d[b] = "none")
				}
			},
			hI: function() {
				V.w.C(window, "selectstart", V.w.preventDefault);
				b && "none" !== c && (document.documentElement.style[b] = c, c = "none")
			},
			yW: function() {
				V.w.e(window, "dragstart", V.w.preventDefault)
			},
			YW: function() {
				V.w.C(window, "dragstart", V.w.preventDefault)
			}
		})
	})();
	V.f.Bd = V.f.vB(["WebkitTransform", "OTransform", "MozTransform", "msTransform", "transform"]);
	V.f.nk = {
		transform: "transform",
		WebkitTransform: "-webkit-transform",
		OTransform: "-o-transform",
		MozTransform: "-moz-transform",
		msTransform: "-ms-transform"
	};
	V.f.fv = V.f.vB(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
	V.f.f2 = "webkitTransition" === V.f.fv || "OTransition" === V.f.fv ? V.f.fv + "End" : "transitionend";
	V.w = {
		e: function(b, c, d, e) {
			function g(c) {
				c = c || window.event;
				c.target = c.target || c.srcElement;
				return d.call(e || b, c, l)
			}
			var h = V.g.Ab(b) + "_" + V.g.Ab(d) + "_" + V.g.Ab(e || b),
				k = c + h;
			if(b[k]) return this;
			var l = c;
			V.j.tI && "mousewheel" === c && (c = "DOMMouseScroll");
			if(V.j.rn && ("mouseover" === c || "mouseout" === c)) {
				var m = g;
				c = "mouseover" === c ? "mouseenter" : "mouseleave";
				g = function(b) {
					m(b)
				}
			}
			if(V.j.TK && 0 === c.indexOf("touch")) return b[k] = g, this.IU(b, c, g, h);
			V.j.ed && "dblclick" === c && this.GU && this.GU(b, g, h);
			"addEventListener" in b ? b.addEventListener(c,
				g, !1) : "attachEvent" in b ? b.attachEvent("on" + c, g) : b["on" + c] = g;
			b[k] = g;
			return this
		},
		dk: function(b, c, d, e) {
			var g = this;
			this.e(b, c, function k(l) {
				g.C(b, c, k, e);
				return d.call(e || b, l || window.event, c)
			}, e)
		},
		C: function(b, c, d, e) {
			d = V.g.Ab(b) + "_" + V.g.Ab(d) + "_" + V.g.Ab(e || b);
			e = c + d;
			var g = b[e];
			V.j.tI && "mousewheel" === c && (c = "DOMMouseScroll");
			!V.j.rn || "mouseover" !== c && "mouseout" !== c || (c = "mouseover" === c ? "mouseenter" : "mouseleave");
			V.j.TK && -1 < c.indexOf("touch") ? this.r_(b, c, d) : V.j.ed && "dblclick" === c && this.o_ ? this.o_(b, d) : "removeEventListener" in
				b ? b.removeEventListener(c, g, !1) : "detachEvent" in b && -1 === c.indexOf("touch") ? g && b.detachEvent("on" + c, g) : b["on" + c] = null;
			b[e] = null;
			return this
		},
		C5: function(b, c) {
			var d = document.createEvent("MouseEvents");
			d.initMouseEvent(b, !0, !0, window, 1, c.screenX, c.screenY, c.clientX, c.clientY, !1, !1, !1, !1, 0, null);
			c.target.dispatchEvent(d)
		},
		stopPropagation: function(b) {
			b.stopPropagation ? b.stopPropagation() : b.cancelBubble = !0;
			return this
		},
		F0: function(b) {
			var c = V.w.stopPropagation;
			V.j.ed && (V.w.e(b, "touchstart", c, this), V.w.e(b,
				"touchmove", c, this), V.w.e(b, "touchend", c, this));
			V.j.U || (V.w.e(b, "mousedown", c, this), V.w.e(b, "mouseup", c, this), V.w.e(b, "mousemove", c, this));
			V.j.SK && (V.w.e(b, "pointerdown", c, this), V.w.e(b, "pointerup", c, this), V.w.e(b, "pointermove", c, this));
			V.j.jZ && (V.w.e(b, "MSPointerDown", c, this), V.w.e(b, "MSPointerUp", c, this), V.w.e(b, "MSPointerMove", c, this))
		},
		preventDefault: function(b) {
			b.preventDefault ? b.preventDefault() : b.returnValue = !1;
			return this
		},
		stop: function(b) {
			return V.w.preventDefault(b).stopPropagation(b)
		},
		d0: function(b) {
			return b && b.getBoundingClientRect ? (b.iv = b.getBoundingClientRect(), b.CC = [b.clientLeft, b.clientTop], !0) : !1
		},
		g1: function(b) {
			b.iv && (b.iv = null, b.CC = null)
		},
		bX: function(b, c) {
			var d = c.iv || c.getBoundingClientRect(),
				e = c.CC || [c.clientLeft, c.clientTop];
			return new V.K(b.clientX - d.left - e[0], b.clientY - d.top - e[1])
		},
		hg: function(b, c) {
			if(c && c.getBoundingClientRect) return this.bX(b, c);
			var d = document.body,
				e = document.documentElement,
				d = new V.K(V.j.ed ? b.pageX : b.clientX + (d.scrollLeft || e.scrollLeft), V.j.ed ? b.pageY :
					b.clientY + (d.scrollTop || e.scrollTop));
			return c ? d.Ja(V.f.sz(c)) : d
		},
		FJ: function(b) {
			return 1 === b.which || 0 === b.button || 1 === b.button
		}
	};
	V.extend(V.w, {
		Ww: [],
		eF: !1,
		IU: function(b, c, d, e) {
			switch(c) {
				case "touchstart":
					return this.LU(b, c, d, e);
				case "touchend":
					return this.JU(b, c, d, e);
				case "touchmove":
					return this.KU(b, c, d, e)
			}
		},
		Ph: function(b) {
			if(V.j.SK) return b;
			switch(b) {
				case "pointerdown":
					return "MSPointerDown";
				case "pointerup":
					return "MSPointerUp";
				case "pointercancel":
					return "MSPointerCancel";
				case "pointermove":
					return "MSPointerMove"
			}
		},
		LU: function(b, c, d, e) {
			function g(b) {
				for(var c = !1, e = 0; e < h.length; e += 1)
					if(h[e].pointerId === b.pointerId) {
						c = !0;
						break
					}
				c ||
					h.push(b);
				b.touches = h.slice();
				b.changedTouches = [b];
				d(b)
			}
			var h = this.Ww;
			b["_amap_touchstart" + e] = g;
			b.addEventListener(this.Ph("pointerdown"), g, !1);
			this.eF || (b = function(b) {
				for(var c = 0; c < h.length; c += 1)
					if(h[c].pointerId === b.pointerId) {
						h.splice(c, 1);
						break
					}
			}, document.documentElement.addEventListener(this.Ph("pointerup"), b, !1), document.documentElement.addEventListener(this.Ph("pointercancel"), b, !1), this.eF = !0);
			return this
		},
		KU: function(b, c, d, e) {
			function g(b) {
				if(b.pointerType !== b.MSPOINTER_TYPE_MOUSE || 0 !== b.buttons) {
					for(var c =
							0; c < h.length; c += 1)
						if(h[c].pointerId === b.pointerId) {
							h[c] = b;
							break
						}
					b.touches = h.slice();
					b.changedTouches = [b];
					d(b)
				}
			}
			var h = this.Ww;
			b["_amap_touchmove" + e] = g;
			b.addEventListener(this.Ph("pointermove"), g, !1);
			return this
		},
		JU: function(b, c, d, e) {
			function g(b) {
				for(var c = 0; c < h.length; c += 1)
					if(h[c].pointerId === b.pointerId) {
						h.splice(c, 1);
						break
					}
				b.touches = h.slice();
				b.changedTouches = [b];
				d(b)
			}
			var h = this.Ww;
			b["_amap_touchend" + e] = g;
			b.addEventListener(this.Ph("pointerup"), g, !1);
			b.addEventListener(this.Ph("pointercancel"),
				g, !1);
			return this
		},
		r_: function(b, c, d) {
			d = b["_amap_" + c + d];
			switch(c) {
				case "touchstart":
					b.removeEventListener(this.Ph("pointerdown"), d, !1);
					break;
				case "touchmove":
					b.removeEventListener(this.Ph("pointermove"), d, !1);
					break;
				case "touchend":
					b.removeEventListener(this.Ph("pointerup"), d, !1), b.removeEventListener(this.Ph("pointercancel"), d, !1)
			}
			return this
		}
	});
	(function() {
		function b(b) {
			var c = b.target || b.srcElement;
			c.KC && h(c.KC);
			c.KC = g(function() {
				var d = c.qi;
				if(d && d.pi)
					for(var e = 0; e < d.pi.length; e += 1) d.pi[e].call(d, b)
			})
		}

		function c() {
			var c = this.contentDocument.defaultView;
			c.qi = this.LN;
			c.addEventListener("resize", b);
			b.call(c, {
				target: c
			})
		}
		var d = document.attachEvent,
			e = navigator.userAgent.match(/(Trident|Edge)/),
			g = V.g.Fe,
			h = V.g.dl;
		V.extend(V.w, {
			NU: function(g, h) {
				if(!g.pi)
					if(g.pi = [], d) g.qi = g, g.attachEvent("onresize", b);
					else {
						"static" === window.getComputedStyle(g).position &&
							(g.style.position = "relative");
						var m = g.qi = document.createElement("object");
						m.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;");
						m.LN = g;
						m.onload = c;
						m.type = "text/html";
						e && g.appendChild(m);
						m.data = "about:blank";
						e || g.appendChild(m)
					}
				g.pi.push(h)
			},
			k5: function(c, e) {
				c.pi.splice(c.pi.indexOf(e), 1);
				c.pi.length || (d ? c.detachEvent("onresize", b) : (c.qi.contentDocument.defaultView.removeEventListener("resize", b),
					c.qi = !c.removeChild(c.qi)))
			},
			PV: function(b) {
				b.pi = null;
				if(b.qi) {
					var c = b.qi;
					c.parentNode === b && c.parentNode.removeChild(c);
					b.qi = null
				}
			}
		})
	})();
	V.Qa = {
		eZ: V.k.nb + "/maps",
		fn: V.W.fn,
		cA: 0,
		Fn: [],
		jl: {},
		bf: function(b, c) {
			function d() {
				e += 1;
				e === g.length && c && c()
			}
			b.length || c();
			for(var e = 0, g = [], h = 0; h < b.length; h += 1) {
				var k = this.fn[b[h]];
				if(k)
					for(var l = 0; l < k.length; l += 1) g.push(k[l]);
				g.push(b[h])
			}
			for(h = 0; h < g.length; h += 1) this.Vy(g[h], d)
		},
		GJ: function(b) {
			for(var c = 0; c < b.length; c += 1)
				if(1 !== this.dt(b[c]).status) return !1;
			return !0
		},
		Vy: function(b, c) {
			var d = this.dt(b);
			if(1 === d.status) c && c();
			else {
				c && d.Zm.push(c);
				try {
					if(V.j.Jt && window.localStorage) {
						var e = window.localStorage["_AMap_" +
							b];
						e && (e = JSON.parse(e), e.version === V.k.ji ? (window._jsload_(b, e.script, !0), e.css && window._cssload_(b, e.css, !0)) : window.localStorage.removeItem("_AMap_" + b))
					}
				} catch(g) {}
				if(0 === d.status) {
					this.g_(b);
					var h = this;
					h.cA || (h.cA = 1, window.setTimeout(function() {
						h.cA = 0;
						var b = V.k.nb + "/js/modules.js?v=" + V.k.Yx + "&key=" + V.k.key + "&m=" + h.Fn.join(",") + "&vrs=" + V.k.ji;
						V.Qa.YO(h.Fn.join(","));
						h.Fn = [];
						d.ru = h.QY(b)
					}, 1));
					d.status = -1
				}
			}
		},
		YO: function(b) {
			new V.na.za(V.k.nb + "/js/init.js?" + ["s=rsv3&product=JsModule&key=" + V.k.key, "m=" + b].join("&"), {
				callback: "callback"
			})
		},
		load: function(b, c) {
			var d = this.fn[b];
			if(d) {
				for(var e = [], g = 0; g < d.length; g += 1) e.push(d[g]);
				e.push(b);
				for(var h = 0, d = function() {
						h += 1;
						h === e.length && c && c()
					}, g = 0; g < e.length; g += 1) this.Vy(e[g], d)
			} else this.Vy(b, c)
		},
		g_: function(b) {
			for(var c = 0; c < this.Fn.length; c += 1)
				if(this.Fn[c] === b) return;
			this.Fn.push(b)
		},
		Sl: function(b, c) {
			var d = this.dt(b);
			try {
				eval(c)
			} catch(e) {
				return
			}
			d.status = 1;
			for(var g = 0, h = d.Zm.length; g < h; g += 1) d.Zm[g]();
			d.Zm = []
		},
		h3: function(b, c) {
			var d = this;
			d.timeout = setTimeout(function() {
				1 !==
					d.jl[b].status ? (d.remove(b), d.load(b, c)) : clearTimeout(d.timeout)
			}, 5E3)
		},
		dt: function(b) {
			this.jl[b] || (this.jl[b] = {}, this.jl[b].status = 0, this.jl[b].Zm = []);
			return this.jl[b]
		},
		remove: function(b) {
			this.jl[b] = null
		},
		QY: function(b) {
			V.k.mode && (b += "&mode=" + V.k.mode);
			var c = document.createElement("script");
			c.charset = "utf-8";
			c.src = b;
			document.body.appendChild(c);
			return c
		}
	};
	window._jsload_ = function(b, c, d) {
		var e = V.Qa.dt(b);
		e.ru && V.g.indexOf(document.body.childNodes, e.ru) && document.body.removeChild(e.ru);
		e.ru = null;
		try {
			if(!d && window.localStorage && c && "" !== c && V.j.Jt) {
				var g = window.localStorage["_AMap_" + b],
					g = g || "{}",
					g = JSON.parse(g);
				g.version !== V.k.ji || g.script ? window.localStorage.setItem("_AMap_" + b, JSON.stringify({
					script: c,
					version: V.k.ji
				})) : window.localStorage.setItem("_AMap_" + b, JSON.stringify({
					script: c,
					css: g.css,
					version: V.k.ji
				}))
			}
		} catch(h) {}
		V.Qa.Sl(b, c)
	};
	window._cssload_ = function(b, c, d) {
		try {
			!d && window.localStorage && c && "" !== c && V.j.Jt && window.localStorage.setItem("_AMap_" + b, JSON.stringify({
				css: c,
				version: V.k.ji
			}))
		} catch(e) {}
		var g = document.createElement("style");
		g.type = "text/css"; - 1 === V.k.nb.indexOf("webapi.amap.com") && (c = c.replace(eval("/webapi.amap.com/gi"), V.k.nb.split("://")[1]));
		"https" === V.k.nc && (c = c.replace(eval("/http:/gi"), "https:"));
		g.styleSheet ? (b = function() {
				try {
					g.styleSheet.cssText = c
				} catch(b) {}
			}, g.styleSheet.disabled ? setTimeout(b, 10) : b()) :
			g.appendChild(document.createTextNode(c));
		b = document.head || document.getElementsByTagName("head")[0];
		2 > b.childNodes.length ? b.appendChild(g) : b.insertBefore(g, b.childNodes[1])
	};
	V.O = V.W.extend({
		B: function(b, c, d) {
			var e = parseFloat(c),
				g = parseFloat(b);
			if(isNaN(b) || isNaN(c)) throw "Invalid Object: LngLat(" + g + ", " + e + ")";
			!0 !== d && (e = Math.max(Math.min(e, 90), -90), g = (g + 180) % 360 + (-180 > g || 180 === g ? 180 : -180));
			this.M = e;
			this.I = g
		},
		KI: function() {
			return V.g.Zg(this.I, 6)
		},
		II: function() {
			return V.g.Zg(this.M, 6)
		},
		add: function(b, c) {
			return new V.O(this.I + b.I, this.M + b.M, c)
		},
		Ja: function(b, c) {
			return new V.O(this.I - b.I, this.M - b.M, c)
		},
		Gb: function(b, c) {
			return new V.O(this.I / b, this.M / b, c)
		},
		tc: function(b, c) {
			return new V.O(this.I *
				b, this.M * b, c)
		},
		ye: function(b) {
			b = V.g.ha(b);
			if(b instanceof V.O) {
				var c = Math.PI / 180,
					d = Math.sin((b.M - this.M) * c / 2),
					e = Math.sin((b.I - this.I) * c / 2);
				b = d * d + e * e * Math.cos(this.M * c) * Math.cos(b.M * c);
				return 12756274 * Math.atan2(Math.sqrt(b), Math.sqrt(1 - b))
			}
			if(b instanceof Array) return this.zW(b)
		},
		zW: function(b) {
			b = V.g.ha(b);
			for(var c = Infinity, d = 0, e = 1, g = b.length; e < g; d = e, e += 1) d = V.dj.KH([this.I, this.M], [
				[b[d].I, b[d].M],
				[b[e].I, b[e].M]
			]), c = Math.min(c, this.ye(new V.O(d[0], d[1])));
			return c
		},
		offset: function(b, c) {
			if(isNaN(b) ||
				isNaN(c)) return !1;
			var d = 2 * Math.asin(Math.sin(Math.round(b) / 12756274) / Math.cos(this.M * Math.PI / 180)),
				d = this.I + 180 * d / Math.PI,
				e = 2 * Math.asin(Math.round(c) / 12756274);
			return new V.O(d, this.M + 180 * e / Math.PI)
		},
		Hb: function(b) {
			b = V.g.ha(b);
			return b instanceof V.O ? 1E-9 >= Math.max(Math.abs(this.M - b.M), Math.abs(this.I - b.I)) : !1
		},
		toString: function() {
			return V.g.Zg(this.I, 6) + "," + V.g.Zg(this.M, 6)
		},
		Tb: function() {
			return new V.O(this.I, this.M)
		}
	});
	V.O.LX = function(b, c, d) {
		d = d + 1 || Math.round(Math.abs(b.I - c.I));
		if(!d || 0.001 > Math.abs(b.I - c.I)) return [];
		var e = [],
			g = V.ZB.tW,
			h = V.ZB.i_,
			k = Math.asin,
			l = Math.sqrt,
			m = Math.sin,
			n = Math.pow,
			p = Math.cos,
			q = Math.atan2,
			r = b.M * g;
		b = b.I * g;
		var t = c.M * g;
		c = c.I * g;
		for(var k = 2 * k(l(n(m((r - t) / 2), 2) + p(r) * p(t) * n(m((b - c) / 2), 2))), w, u, D, v, g = 1; g < d; g += 1) w = 1 / d * g, u = m((1 - w) * k) / m(k), D = m(w * k) / m(k), w = u * p(r) * p(b) + D * p(t) * p(c), v = u * p(r) * m(b) + D * p(t) * m(c), u = u * m(r) + D * m(t), u = q(u, l(n(w, 2) + n(v, 2))), w = q(v, w), e.push(new V.O(w * h, u * h));
		return e
	};
	V.O.hn({
		KI: "getLng",
		II: "getLat",
		add: "add",
		Ja: "subtract",
		Gb: "divideBy",
		tc: "multiplyBy",
		ye: "distance",
		offset: "offset",
		Hb: "equals",
		toString: "toString"
	});
	V.Qc = V.W.extend({
		B: function() {
			if(2 === arguments.length) this.hb = V.g.ha(arguments[0]), this.ab = V.g.ha(arguments[1]);
			else if(4 === arguments.length) this.hb = new V.O(arguments[0], arguments[1]), this.ab = new V.O(arguments[2], arguments[3]);
			else throw "Invalid Object: Bounds(" + arguments.join(",") + ")";
		},
		Xp: function() {
			return this.hb
		},
		Vp: function() {
			return this.ab
		},
		bh: function() {
			return new V.O(this.hb.I, this.ab.M, !0)
		},
		Sj: function() {
			return new V.O(this.ab.I, this.hb.M, !0)
		},
		contains: function(b) {
			var c = this.hb,
				d = this.ab,
				e;
			b instanceof V.Qc ? (e = b.hb, b = b.ab) : e = b = V.g.ha(b);
			var g = e.I,
				h = c.I,
				k = b.I,
				l = d.I;
			h > l && (l += 360, 0 > g && (g += 360), 0 > k && (k += 360));
			return e.M >= c.M && b.M <= d.M && g >= h && k <= l
		},
		Ld: function(b) {
			var c = this.hb,
				d = this.ab,
				e = b.hb;
			b = b.ab;
			var g = b.I >= c.I && e.I <= d.I;
			return b.M >= c.M && e.M <= d.M && g
		},
		Ye: function() {
			return new V.O(this.hb.I > this.ab.I ? (this.hb.I + this.ab.I + 360) / 2 % 360 : (this.hb.I + this.ab.I) / 2, (this.hb.M + this.ab.M) / 2)
		},
		extend: function(b) {
			this.hb.I = Math.min(this.hb.I, b.I);
			this.hb.M = Math.min(this.hb.M, b.M);
			this.ab.I = Math.max(this.ab.I,
				b.I);
			this.ab.M = Math.max(this.ab.M, b.M);
			return this
		},
		f1: function(b) {
			return this.extend(b.hb).extend(b.ab)
		},
		toString: function() {
			return this.hb.toString() + ";" + this.ab.toString()
		},
		Tb: function() {
			return new V.Qc(this.hb.Tb(), this.ab.Tb())
		},
		Hb: function(b) {
			return b instanceof V.Qc ? this.hb.Hb(b.hb) && this.ab.Hb(b.ab) : !1
		},
		Be: function() {
			return Math.abs(this.ab.I - this.hb.I)
		},
		ze: function() {
			return Math.abs(this.hb.M - this.ab.M)
		}
	});
	V.Qc.hn({
		Xp: "getSouthWest",
		Vp: "getNorthEast",
		bh: "getNorthWest",
		Sj: "getSouthEast",
		contains: "contains",
		Ld: "intersects",
		Ye: "getCenter"
	});
	V.K = V.W.extend({
		B: function(b, c, d) {
			if(isNaN(b) || isNaN(c)) throw "Invalid Object: Pixel(" + b + ", " + c + ")";
			this.x = d ? Math.round(b) : Number(b);
			this.y = d ? Math.round(c) : Number(c)
		},
		Sc: function() {
			return this.x
		},
		xc: function() {
			return this.y
		},
		add: function(b, c) {
			return new V.K(this.x + b.x, this.y + b.y, c)
		},
		Ja: function(b, c) {
			return new V.K(this.x - b.x, this.y - b.y, c)
		},
		Gb: function(b, c) {
			return new V.K(this.x / b, this.y / b, c)
		},
		tc: function(b, c) {
			return new V.K(this.x * b, this.y * b, c)
		},
		ye: function(b) {
			var c = b.x - this.x;
			b = b.y - this.y;
			return Math.sqrt(c *
				c + b * b)
		},
		floor: function() {
			return new V.K(Math.floor(this.x), Math.floor(this.y))
		},
		round: function() {
			return new V.K(this.x, this.y, !0)
		},
		Hb: function(b) {
			return b instanceof V.K && this.x === b.x && this.y === b.y
		},
		Tb: function() {
			return new V.K(this.x, this.y)
		},
		toString: function() {
			return this.x + "," + this.y
		}
	});
	V.K.hn({
		Sc: "getX",
		xc: "getY",
		add: "add",
		Ja: "subtract",
		Gb: "divideBy",
		tc: "multiplyBy",
		ye: "distance",
		Hb: "equals",
		toString: "toString"
	});
	V.Yb = V.W.extend({
		B: function(b, c, d) {
			if(isNaN(b) || isNaN(c)) throw "Invalid Object: Size(" + b + ", " + c + ")";
			this.width = d ? Math.round(b) : Number(b);
			this.height = d ? Math.round(c) : Number(c)
		},
		Be: function() {
			return this.width
		},
		ze: function() {
			return this.height
		},
		Wn: function() {
			return new V.K(this.Be(), this.ze())
		},
		contains: function(b) {
			return Math.abs(b.x) <= Math.abs(this.width) && Math.abs(b.y) <= Math.abs(this.height)
		},
		Hb: function(b) {
			return b instanceof V.Yb && this.width === b.width && this.height === b.height
		},
		toString: function() {
			return this.Be() +
				"," + this.ze()
		}
	});
	V.Yb.hn({
		Be: "getWidth",
		ze: "getHeight",
		toString: "toString"
	});
	V.Td = V.W.extend({
		B: function() {
			if(2 === arguments.length) this.$a = arguments[0], this.Wb = arguments[1];
			else if(1 === arguments.length && arguments[0] instanceof Array || 4 === arguments.length) {
				var b = arguments[0] instanceof Array ? arguments[0] : arguments;
				this.$a = new V.K(b[0], b[1]);
				this.Wb = new V.K(b[2], b[3])
			} else throw "Invalid Object: PixelBounds(" + arguments.join(",") + ")";
		},
		Ye: function(b) {
			return new V.K((this.$a.x + this.Wb.x) / 2, (this.$a.y + this.Wb.y) / 2, b)
		},
		contains: function(b) {
			var c;
			b instanceof V.Td ? (c = b.$a, b = b.Wb) : c =
				b;
			return c.x > this.$a.x && b.x < this.Wb.x && c.y > this.$a.y && b.y < this.Wb.y
		},
		Be: function() {
			return this.Wb.x - this.$a.x
		},
		ze: function() {
			return this.Wb.y - this.$a.y
		},
		Ld: function(b, c) {
			c || 0 === c || (c = 20);
			var d = this.$a,
				e = this.Wb,
				g = b.$a,
				h = b.Wb,
				k = h.y >= d.y - c && g.y <= e.y + c;
			return h.x >= d.x - c && g.x <= e.x + c && k
		},
		toString: function() {
			return this.$a + ";" + this.Wb
		},
		Tb: function() {
			return new V.Td(this.$a.Tb(), this.Wb.Tb())
		}
	});
	V.r = {};
	V.r.pH = function(b) {
		for(var c = [Infinity, Infinity, -Infinity, -Infinity], d = 0, e = b.length; d < e; d += 1) V.r.mI(c, b[d]);
		return c
	};
	V.r.qH = function(b, c, d) {
		var e = Math.min.apply(null, b);
		b = Math.max.apply(null, b);
		var g = Math.min.apply(null, c);
		c = Math.max.apply(null, c);
		return V.r.iW(e, b, g, c, d)
	};
	V.r.buffer = function(b, c) {
		b[0] -= c;
		b[1] -= c;
		b[2] += c;
		b[3] += c
	};
	V.r.Tb = function(b) {
		return b.slice()
	};
	V.r.mf = function(b, c) {
		return b[0] <= c[0] && c[0] <= b[2] && b[1] <= c[1] && c[1] <= b[3]
	};
	V.r.NH = function(b, c) {
		return b[0] <= c[0] && c[2] <= b[2] && b[1] <= c[1] && c[3] <= b[3]
	};
	V.r.t3 = function() {
		return [Infinity, Infinity, -Infinity, -Infinity]
	};
	V.r.iW = function(b, c, d, e, g) {
		return "undefined" !== typeof g ? (g[0] = b, g[2] = c, g[1] = d, g[3] = e, g) : [b, d, c, e]
	};
	V.r.empty = function(b) {
		b[0] = b[1] = Infinity;
		b[2] = b[3] = -Infinity;
		return b
	};
	V.r.Hb = function(b, c) {
		return b[0] === c[0] && b[2] === c[2] && b[1] === c[1] && b[3] === c[3]
	};
	V.r.extend = function(b, c) {
		c[0] < b[0] && (b[0] = c[0]);
		c[2] > b[2] && (b[2] = c[2]);
		c[1] < b[1] && (b[1] = c[1]);
		c[3] > b[3] && (b[3] = c[3])
	};
	V.r.mI = function(b, c) {
		c[0] < b[0] && (b[0] = c[0]);
		c[0] > b[2] && (b[2] = c[0]);
		c[1] < b[1] && (b[1] = c[1]);
		c[1] > b[3] && (b[3] = c[1])
	};
	V.r.N3 = function(b) {
		return [b[0], b[1]]
	};
	V.r.O3 = function(b) {
		return [b[2], b[1]]
	};
	V.r.Ye = function(b) {
		return [(b[0] + b[2]) / 2, (b[1] + b[3]) / 2]
	};
	V.r.V3 = function(b, c, d, e, g) {
		var h = c * e[0] / 2;
		e = c * e[1] / 2;
		c = Math.cos(d);
		d = Math.sin(d);
		h = [-h, -h, h, h];
		e = [-e, e, -e, e];
		var k, l, m;
		for(k = 0; 4 > k; k += 1) l = h[k], m = e[k], h[k] = b[0] + l * c - m * d, e[k] = b[1] + l * d + m * c;
		return V.r.qH(h, e, g)
	};
	V.r.ze = function(b) {
		return b[3] - b[1]
	};
	V.r.g4 = function(b) {
		return [b[2] - b[0], b[3] - b[1]]
	};
	V.r.l4 = function(b) {
		return [b[0], b[3]]
	};
	V.r.m4 = function(b) {
		return [b[2], b[3]]
	};
	V.r.Be = function(b) {
		return b[2] - b[0]
	};
	V.r.Ld = function(b, c) {
		return b[0] <= c[2] && b[2] >= c[0] && b[1] <= c[3] && b[3] >= c[1]
	};
	V.r.iq = function(b) {
		return b[2] < b[0] || b[3] < b[1]
	};
	V.r.normalize = function(b, c) {
		return [(c[0] - b[0]) / (b[2] - b[0]), (c[1] - b[1]) / (b[3] - b[1])]
	};
	V.r.u5 = function(b, c) {
		var d = (b[2] - b[0]) / 2 * (c - 1),
			e = (b[3] - b[1]) / 2 * (c - 1);
		b[0] -= d;
		b[2] += d;
		b[1] -= e;
		b[3] += e
	};
	V.r.touches = function(b, c) {
		return V.r.Ld(b, c) && (b[0] === c[2] || b[2] === c[0] || b[1] === c[3] || b[3] === c[1])
	};
	V.r.transform = function(b, c, d) {
		b = [b[0], b[1], b[0], b[3], b[2], b[1], b[2], b[3]];
		c(b, b, 2);
		return V.r.qH([b[0], b[2], b[4], b[6]], [b[1], b[3], b[5], b[7]], d)
	};
	V.Qc.Mc({
		B: function() {
			var b = V.Qc.prototype.B;
			return function() {
				b.apply(this, arguments);
				this.southwest = this.hb;
				this.northeast = this.ab
			}
		}(),
		extend: function() {
			var b = V.Qc.prototype.extend;
			return function() {
				b.apply(this, arguments);
				this.hb.lng = this.hb.I;
				this.hb.lat = this.hb.M;
				this.ab.lng = this.ab.I;
				this.ab.lat = this.ab.M;
				return this
			}
		}()
	});
	V.O.Mc({
		B: function() {
			var b = V.O.prototype.B;
			return function() {
				b.apply(this, arguments);
				this.lng = parseFloat(this.I.toFixed(6));
				this.lat = parseFloat(this.M.toFixed(6))
			}
		}()
	});
	V.jr = V.W.extend({
		B: function(b, c, d, e) {
			this.MC = b;
			this.WC = c;
			this.bD = d;
			this.wD = e
		},
		transform: function(b, c) {
			return this.MG(b.Tb(), c)
		},
		MG: function(b, c) {
			c = c || 1;
			b.x = c * (this.MC * b.x + this.WC);
			b.y = c * (this.bD * b.y + this.wD);
			return b
		},
		h1: function(b, c) {
			c = c || 1;
			return new V.K((b.x / c - this.WC) / this.MC, (b.y / c - this.wD) / this.bD)
		}
	});
	V.oi = V.W.extend({
		B: function(b) {
			this.Wu = b.MAX_LATITUDE || 85.0511287798;
			b.project && b.unproject && (this.qb = b.project, this.yf = b.unproject)
		}
	});
	V.oi.oC = {
		qb: function(b) {
			return new V.K(b.I, b.M)
		},
		yf: function(b, c) {
			return new V.O(b.x, b.y, c)
		}
	};
	V.oi.nN = new V.oi({
		MAX_LATITUDE: 85.0511287798,
		project: function(b) {
			var c = Math.PI / 180,
				d = this.Wu,
				d = Math.max(Math.min(d, b.M), -d);
			b = b.I * c;
			c = Math.log(Math.tan(Math.PI / 4 + d * c / 2));
			return new V.K(b, c, !1)
		},
		unproject: function(b, c) {
			var d = 180 / Math.PI;
			return new V.O(b.x * d, (2 * Math.atan(Math.exp(b.y)) - Math.PI / 2) * d, c)
		}
	});
	V.oi.pC = {
		Wu: 85.0840591556,
		bv: 6356752.3142,
		av: 6378137,
		qb: function(b) {
			var c = Math.PI / 180,
				d = this.Wu,
				e = Math.max(Math.min(d, b.M), -d),
				g = this.av,
				d = this.bv;
			b = b.I * c * g;
			c *= e;
			g = d / g;
			g = Math.sqrt(1 - g * g);
			e = g * Math.sin(c);
			e = Math.pow((1 - e) / (1 + e), 0.5 * g);
			c = -d * Math.log(Math.tan(0.5 * (0.5 * Math.PI - c)) / e);
			return new V.K(b, c)
		},
		yf: function(b, c) {
			for(var d = 180 / Math.PI, e = this.av, g = this.bv, h = b.x * d / e, e = g / e, e = Math.sqrt(1 - e * e), g = Math.exp(-b.y / g), k = Math.PI / 2 - 2 * Math.atan(g), l = 15, m = 0.1; 1E-7 < Math.abs(m) && (l -= 1, 0 < l);) m = e * Math.sin(k), m = Math.PI /
				2 - 2 * Math.atan(g * Math.pow((1 - m) / (1 + m), 0.5 * e)) - k, k += m;
			return new V.O(h, k * d, c)
		}
	};
	V.Xf = {};
	V.Xf.Yq = {
		It: function(b, c) {
			var d = this.Qd.qb(b),
				e = this.scale(c);
			return this.Oq.MG(d, e)
		},
		MA: function(b, c, d) {
			c = this.scale(c);
			b = this.Oq.h1(b, c);
			return this.Qd.yf(b, d)
		},
		qb: function(b) {
			return this.Qd.qb(b)
		},
		scale: function(b) {
			return 256 * Math.pow(2, b)
		},
		Qh: function(b) {
			return 12756274 * Math.PI / (256 * Math.pow(2, b))
		}
	};
	V.Xf.MM = V.extend({}, V.Xf.Yq, {
		code: "EPSG:3857",
		Qd: V.oi.nN,
		Oq: new V.jr(0.5 / Math.PI, 0.5, -0.5 / Math.PI, 0.5),
		qb: function(b) {
			return this.Qd.qb(b).tc(6378137)
		}
	});
	V.Xf.LM = V.extend({}, V.Xf.Yq, {
		code: "EPSG:3395",
		Qd: V.oi.pC,
		Oq: function() {
			var b = V.oi.pC;
			return new V.jr(0.5 / (Math.PI * b.av), 0.5, -0.5 / (Math.PI * b.bv), 0.5)
		}()
	});
	V.Xf.NM = V.extend({}, V.Xf.Yq, {
		code: "EPSG:4326",
		Qd: V.oi.oC,
		Oq: new V.jr(1 / 360, 0.5, -1 / 360, 0.25)
	});
	V.Xf.d2 = V.extend({}, V.Xf.Yq, {
		Qd: V.oi.oC,
		Oq: new V.jr(1, 0, 1, 0)
	});
	V.$J = {
		qb: function(b, c) {
			b = V.g.ha(b);
			return(this.dn || this.get("crs")).It(b, c || this.get("zoom"))
		},
		yf: function(b, c, d) {
			return(this.dn || this.get("crs")).MA(b, c || this.get("zoom"), d)
		},
		G4: function(b, c) {
			return this.qb(b, c)
		},
		M3: function(b, c) {
			return this.yf(b, c)
		},
		Yz: function(b, c) {
			var d = this.Ub(b, c);
			return this.Li(d, c)
		},
		Jj: function(b, c) {
			var d = this.get("size").Wn().Gb(2);
			if(b.Hb(d)) return this.get("center");
			d = this.Zs(b, c);
			return this.Se(d, c)
		},
		Se: function(b, c) {
			return this.yf(b.Gb(this.get("resolution", c)), c)
		},
		Ub: function(b,
			c, d) {
			b = V.g.ha(b);
			return this.qb(b, c).tc(d || this.get("resolution", c))
		},
		R3: function(b) {
			return b ? this.qb(this.get("center"), b) : this.get("centerPixel")
		},
		L3: function(b, c) {
			return this.Li(b.tc(this.get("resolution", c)), c)
		},
		q3: function(b, c) {
			return this.Zs(b, c).Gb(this.get("resolution"))
		},
		Zs: function(b, c) {
			var d = this.get("size").Wn().Gb(2),
				e = b.Ja(d),
				g = (this.get("rotateEnable") ? this.get("rotation") : 0) * Math.PI / 180,
				d = e.x * Math.cos(g) + Math.sin(g) * e.y,
				e = -Math.sin(g) * e.x + Math.cos(g) * e.y,
				d = this.get("centerCoords").add((new V.K(d,
					e)).tc(this.get("resolution", c)));
			d.x = (d.x + 4.00750166855784E7) % 4.00750166855784E7;
			return d
		},
		Li: function(b, c) {
			b = b.Tb();
			var d = this.Se(b),
				e = this.get("center"); - 180 > e.I - d.I ? b.x -= V.g.Va : 180 < e.I - d.I && (b.x += V.g.Va);
			var d = this.get("centerCoords"),
				d = b.Ja(d).Gb(this.get("resolution", c)),
				e = this.get("size").Wn().Gb(2),
				g = (this.get("rotateEnable") ? this.get("rotation") : 0) * Math.PI / 180;
			return e.add(new V.K(d.x * Math.cos(g) - Math.sin(g) * d.y, Math.sin(g) * d.x + Math.cos(g) * d.y))
		}
	};
	var tc = V.W.extend({
		oa: [V.ca, V.gd],
		G: {
			center: new V.O(116.397128, 39.916527),
			zoom: 13,
			rotation: 0,
			crs: "EPSG3857"
		},
		B: function(b) {
			this.CLASS_NAME = "AMap.View2D";
			V.a.Sa("AMap.View2D", b);
			b = b || {};
			b.center && (b.center = V.g.ha(b.center));
			this.HK = b;
			b = this.SH(b.crs || "EPSG3857");
			this.set("crs", b)
		},
		qX: function(b) {
			var c = this.map.getSize(),
				d = new V.O(b[4], b[5]);
			if((b = new V.Qc(b[0], b[1], b[2], b[3])) && c && d) {
				for(var e = this.map.get("zooms"), g = e[1]; g > e[0]; g -= 1) {
					var h = this.map.qb(b.hb, g),
						k = this.map.qb(b.ab, g);
					if(Math.abs(k.x -
							h.x) < c.width && Math.abs(h.y - k.y) < c.height) break
				}
				return [d, g]
			}
			return null
		},
		ad: function() {
			var b = this.HK;
			if(!(b && b.center && b.zoom)) {
				var c = this.qX(V.k.md);
				b.center = b.center || c && c[0];
				"[object Number]" !== Object.prototype.toString.call(b.zoom) && (b.zoom = c && c[1])
			}
			b.zoom = Math.round(b.zoom);
			V.g.bb(this, b);
			V.j.pd && (this.G.rotation = 0);
			this.G.crs = this.SH(this.G.crs || "EPSG3857");
			this.ke(this.G);
			this.HK = null
		},
		getRotation: function() {
			return this.map && this.map.get("rotateEnable") ? this.get("rotation", null, !0) || 0 : 0
		},
		SH: function(b) {
			if(this.G.center instanceof V.O) {
				if("string" === typeof b) {
					switch(b) {
						case "EPSG3395":
							return V.Xf.LM;
						case "EPSG4326":
							return V.Xf.NM
					}
					return V.Xf.MM
				}
				if(b.pointToLngLat && b.lngLatToPoint) return {
					MA: b.pointToLngLat,
					It: b.lngLatToPoint,
					Qh: b.getResolution
				};
				throw "illegal projection";
			}
			var c = this.get("zoom");
			return {
				Qh: function(b) {
					return Math.pow(2, c - b)
				},
				It: function() {},
				MA: function() {}
			}
		},
		getCenterPixel: function() {
			return this.get("crs").It(this.get("center"), this.get("zoom"))
		},
		getCenterCoords: function() {
			return this.map.Ub(this.get("center"))
		},
		centerCoordsChanged: function() {
			var b = this.get("centerCoords");
			this.get("center") instanceof V.O ? this.set("center", this.map.Se(b), !0) : this.set("center", b, !0)
		},
		getResolution: function(b) {
			return this.get("crs").Qh(b || this.get("zoom"))
		}
	});
	var Bc = V.W.extend({
		oa: [V.ca, V.gd, V.$J],
		G: {
			features: "all",
			dragEnable: !0,
			showIndoorMap: V.j.U ? !1 : !0,
			lang: "zh_cn",
			keyboardEnable: !0,
			doubleClickZoom: !0,
			"3rdpartyDataEnable": !1,
			scrollWheel: !0,
			zoomEnable: !0,
			jogEnable: !0,
			continuousZoomEnable: !0,
			resizeEnable: !1,
			animateEnable: !0,
			rotateEnable: !1,
			labelzIndex: 99,
			touchZoom: !0,
			zooms: [3, V.j.U ? V.j.Jc ? 19 : 20 : 18],
			defaultCursor: "url(" + V.k.nb + "/theme/v1.3/openhand.cur),default",
			limitBounds: null,
			logoUrl: V.k.nb + "/theme/v1.3/autonavi.png",
			logoUrlRetina: V.k.nb + "/theme/v1.3/mapinfo_05.png",
			copyright: "\x3c!--v1.3.24--\x3e &copy " + (new Date).getFullYear() + " AutoNavi ",
			isHotspot: !V.j.U,
			baseRender: V.j.bV,
			overlayRender: V.j.HZ,
			mapStyle: "normal",
			showBuildingBlock: !V.j.U
		},
		poiOnAMAP: function(b) {
			V.a.add(this.CLASS_NAME, "poiOnAMAP");
			var c = {},
				d = V.g.ha(b.location);
			c.id = b.id;
			d && (c.y = d.M, c.x = d.I);
			c.name = b.name;
			c.address = b.address;
			V.me.lk(V.me.RI(c))
		},
		detailOnAMAP: function(b) {
			V.a.add(this.CLASS_NAME, "detailOnAMAP");
			var c = {},
				d = V.g.ha(b.location);
			c.id = b.id;
			d && (c.y = d.M, c.x = d.I);
			c.name = b.name;
			V.me.lk(V.me.OI(c))
		},
		setLabelzIndex: function(b) {
			return this.set("labelzIndex", b)
		},
		getLabelzIndex: function() {
			return this.get("labelzIndex", null, !0)
		},
		setMapStyle: function(b) {
			V.a.add(this.CLASS_NAME, "setMapStyle", b);
			this.set("mapStyle", b)
		},
		getMapStyle: function() {
			V.a.add(this.CLASS_NAME, "getMapStyle");
			return this.get("mapStyle", null, !0)
		},
		getFeatures: function() {
			V.a.add(this.CLASS_NAME, "getFeatures");
			return this.get("features", null, !0)
		},
		setFeatures: function(b) {
			V.a.add(this.CLASS_NAME, "setFeatures");
			this.set("features", b)
		},
		setLang: function(b) {
			V.a.add(this.CLASS_NAME, "setLang", b);
			"en" !== b && "zh_cn" !== b && "zh_en" !== b || b === this.getLang() || (this.set("lang", b), this.Th && this.Th.sL(this))
		},
		getLang: function() {
			V.a.add(this.CLASS_NAME, "getLang");
			return this.get("lang", null, !0)
		},
		setCity: function(b, c) {
			V.a.add(this.CLASS_NAME, "setCity");
			var d = this;
			(new V.na.za(V.k.gc + "/v3/config/district?subdistrict=0&extensions=all&key=" + V.k.key + "&s=rsv3&output=json&keywords=" + b, {
				callback: "callback"
			})).e("complete", function(b) {
				if((b = b.districts) &&
					b.length) try {
					var g = b[0].center.split(","),
						h;
					switch(b[0].level) {
						case "city":
							h = 10;
							break;
						case "province":
							h = 7;
							break;
						case "district":
							h = 12;
							break;
						case "country":
							h = 4;
							break;
						default:
							h = 12
					} - 1 !== b[0].name.indexOf("\u5e02") && (h = 10);
					d.setZoomAndCenter(h, new V.O(g[0], g[1]), !0)
				} catch(k) {}
				c && c.call(d, g, h)
			}, this)
		},
		getCity: function(b, c) {
			V.a.add(this.CLASS_NAME, "getCity");
			var d = V.k.gc + "/v3/geocode/regeo?&extensions=&&key=" + V.k.key + "&s=rsv3&output=json&location=" + (c || this.get("center"));
			(new V.na.za(d, {
				callback: "callback"
			})).e("complete",
				function(c) {
					c = c.regeocode.addressComponent;
					b({
						province: c.province,
						city: c.city instanceof Array ? "" : c.city,
						citycode: c.citycode instanceof Array ? "" : c.citycode,
						district: c.district instanceof Array ? "" : c.district
					})
				}, this)
		},
		B: function(b, c) {
			V.vd.xY = new Date;
			this.CLASS_NAME = "AMap.Map";
			V.a.Sa("AMap.Map", c);
			c = c || {};
			c.disableVector = true; 
			c.bgColor && V.extend(V.k.xg, c.bgColor);
			V.k.Os = c.buildingColor || null;
			c.center && (c.center = V.g.ha(c.center));
			c.view && c.view.get("center") && c.view.set("center", V.g.ha(c.view.get("center")));
			c.mobile &&
				(V.j.U = !0);
			c.noPoi && (V.k.oZ = !0);
			this.un = c.disableSocket ? !1 : V.j.un;
			c.server && (V.k.gc = c.server);
			c.vdataUrl && (V.k.Sq = c.vdataUrl);
			if("string" === typeof b) {
				if(b = this.D = document.getElementById(b), !b) return
			} else "DIV" === b.tagName && (this.D = b);
			this.D.vv && this.D.vv.destroy();
			this.D.vv = this;
			var d = this.G.zooms[1],
				e = this.G.zooms[0];
			c.zooms ? (c.zooms[0] = Math.max(e, c.zooms[0]), !0 === c.expandZoomRange && (d = V.j.U ? V.j.Jc ? 19 : 20 : 20), c.zooms[1] = Math.min(d, c.zooms[1])) : c.zooms = [e, d];
			c.forceZooms && (c.zooms = c.forceZooms);
			c = this.AV(c);
			d = c.lang;
			"en" !== d && "zh_cn" !== d && "zh_en" !== d && (c.lang = "zh_cn");
			V.j.pd && (this.G.rotateEnable = !1);
			d = c.view;
			d.map = this;
			this.ld("zoom crs resolution centerPixel center centerCoords rotation".split(" "), d);
			this.dn = d.get("crs");
			this.ke(this.G);
			this.ke(c);
			c.forceVector && (V.j.tn ? this.set("baseRender", "vw") : this.set("baseRender", "v"));
			c.disableVector && this.set("baseRender", "d");
			"dom" == c.renderer && (this.set("baseRender", "d"), this.set("overlayRender", "d"));
			c.baseRender && this.set("baseRender", c.baseRender);
			this.vy();
			V.j.hq && this.EU();
			d.ad();
			var e = d.get("zoom"), g = this.get("zooms");
			e > g[1] ? e = g[1] : e < g[0] && (e = g[0]);
			d.set("zoom", e);
			var h = this;
			this.ke({
				overlays: [],
				infos: {},
				controls: {}
			});
			d = [];
			c.forceVector && (d.push("vectorlayer"), d.push("overlay"));
			V.Qa.bf(d, function() {
				if(!h.get("destroy")) {
					var c = new V.zd(b, h);
					c.e("complete", function() {
						V.vd.eH || (V.vd.eH = new Date - V.vd.xY);
						this.bg();
						this.l("complete")
					}, h, !0);
					c.dn = h.dn;
					h.ld(["zoomSlow", "panTo", "targetLevel", "render"], c);
					c.ld(["size", "bounds"], h);
					h.loaded = !0;
					h.l("coreMapCreated")
				}
			})
		},
		featuresChanged: function() {
			this.vy()
		},
		mapStyleChanged: function() {
			this.vy();
			this.mB()
		},
		mB: function() {
			if(this.eh) {
				var b = !0;
				if(!1 == this.get("showIndoorMap") || "normal" !== this.get("mapStyle")) b = !1;
				var c = this.getLayers(),
					d;
				for(d in c) "AMap.IndoorMap" === c[d].CLASS_NAME && c[d] !== this.eh && (b = !1);
				this.eh.getMap() !== this && this.eh.setMap(this);
				this.eh.set("visible", b)
			}
		},
		vy: function() {
			var b = this.get("baseRender");
			if(!("dv" < b)) {
				var c = this.get("features", null, !0),
					d = this.get("mapStyle", null, !0);
				c && d && (!V.j.eg || "all" ===
					c && "normal" === d ? this.CA && (this.set("baseRender", this.CA), this.CA = null) : (this.set("baseRender", "v"), this.CA = b))
			}
		},
		EU: function() {
			var b = this;
			AMap.plugin(["AMap.IndoorMap"], function() {
				!b.eh && b.D && (b.indoorMap = b.eh = new AMap.IndoorMap({
					innerLayer: !0,
					map: b
				}), b.mB(), V.g.Fe(function() {
					b.l("indoor_create", {
						target: b
					});
					b.set("display")
				}))
			})
		},
		layersChanged: function() {
			var b = this.getLayers();
			this.Qt = !1;
			for(var c = 0; c < b.length; c += 1) b[c].getMap() !== this && b[c].setMap(this), b[c].Qt && (this.Qt = !0);
			this.mB()
		},
		getMapNumber: function() {
			if(this.map) return this.map.WA()
		},
		bg: function() {
			var b = V.j.U,
				c = V.j.uq,
				d = !!V.vd.uI,
				e = V.j.eg,
				g = V.k.nb + "/js/count.js?",
				h = this.getSize(),
				b = ["type=q", "resolution=" + h.width + "*" + h.height, "k=" + V.k.key, "u=" + V.k.al, "iw=" + V.j.tn, "cw=" + V.j.tV, "gc=" + V.j.$I, "m=" + (b ? 1 : 0), "cv=" + (e ? 1 : 0), "iv=" + (d ? 1 : 0), "pf=" + c, "ct=" + V.vd.eH, "dpr=" + window.devicePixelRatio, "screenwidth=" + screen.width, "scale=" + (V.j.KB || 0), "detect=" + V.j.pa];
			d && (b = b.concat(["ds=" + V.vd.gX, "lt=" + V.vd.uI, "pt=" + V.vd.fX]));
			new V.na.za(g + b.join("&"))
		},
		getAdcode: function() {
			V.a.add(this.CLASS_NAME,
				"getAdcode");
			return V.k.BU
		},
		AV: function(b) {
			b || (b = {});
			if(b.hasOwnProperty("defaultLayer")) {
				b.layers = [b.defaultLayer];
				var c = b.defaultLayer;
				c.fy = !0;
				this.set("defaultLayer", c, !0)
			}
			b.layers && 0 !== b.layers.length || (c = new Y, b.layers = [c], c.fy = !0, this.set("defaultLayer", c, !0));
			b.view || (b.view = new tc({
				center: b.center,
				zoom: b.zoom || b.level,
				crs: b.crs
			}));
			return b
		},
		setLimitBounds: function(b) {
			V.a.add(this.CLASS_NAME, "setLimitBounds");
			b instanceof V.Qc || (b = null);
			this.set("limitBounds", b)
		},
		clearLimitBounds: function() {
			V.a.add(this.CLASS_NAME,
				"clearLimitBounds");
			this.set("limitBounds", null)
		},
		getLimitBounds: function() {
			V.a.add(this.CLASS_NAME, "getLimitBounds");
			return this.get("limitBounds", null, !0)
		},
		aH: function(b) {
			var c = this.get("layers");
			0 <= V.g.indexOf(c, b) || (c.push(b), this.set("layers", c))
		},
		dH: function(b) {
			var c = this.get("overlays");
			0 <= V.g.indexOf(c, b) || (b instanceof uc ? (this.get("overlays").push(b), this.$s instanceof uc && this.$s.close(), this.$s = b, this.set("contextmenu", b, !0)) : (b instanceof vc && (this.Vh instanceof vc && this.hu(this.Vh),
				this.Vh = b), this.get("overlays").push(b)), this.l("overlays"))
		},
		Kn: function(b) {
			var c = this.get("layers");
			b = V.g.indexOf(c, b); - 1 !== b && this.set("layers", V.g.Ni(c, b))
		},
		hu: function(b) {
			var c = this.get("overlays");
			this.set("overlays", V.g.Ni(c, V.g.indexOf(c, b)))
		},
		setZoom: function(b, c) {
			V.a.add(this.CLASS_NAME, "setZoom");
			b = Math.round(b);
			var d = this.get("zooms");
			b > d[1] && (b = d[1]);
			b < d[0] && (b = d[0]);
			this.get("zoomEnable") && (c || !this.loaded ? (this.set("zoom", b), this.l("zoomstart"), this.l("zoomchange"), this.l("zoomend")) :
				this.set("zoomSlow", b))
		},
		getZoom: function() {
			V.a.add(this.CLASS_NAME, "getZoom");
			return Math.round(this.get("targetLevel") || this.get("zoom"))
		},
		getCenter: function() {
			V.a.add(this.CLASS_NAME, "getCenter");
			return this.get("center")
		},
		setCenter: function(b, c) {
			V.a.add(this.CLASS_NAME, "setCenter");
			b = V.g.ha(b);
			c || !this.loaded ? (this.l("movestart"), this.set("center", b), this.l("mapmove"), this.map ? this.map.l("moveend") : this.l("moveend")) : this.panTo(b)
		},
		getCoordsBound: function() {
			var b = this.get("size"),
				c = this.get("centerCoords"),
				d = this.get("rotation") % 360,
				e = this.get("resolution"),
				d = Math.PI * d / 180,
				b = new V.K((Math.abs(b.width * Math.cos(d)) + Math.abs(b.height * Math.sin(d))) / 2, (Math.abs(b.width * Math.sin(d)) + Math.abs(b.height * Math.cos(d))) / 2),
				e = new V.Td(c.Ja(b.tc(e)), c.add(b.tc(e))),
				d = this.get("zoom", null, !0),
				g = this.get("targetLevel");
			if(g > d - 1) {
				var h = this.get("resolution", g);
				e.BM = new V.Td(c.Ja(b.tc(h)), c.add(b.tc(h)))
			}
			e.M0 = g || d;
			e.cb = b;
			return e
		},
		setRotation: function(b) {
			V.a.add(this.CLASS_NAME, "setRotation");
			!V.j.pd && this.get("rotateEnable") &&
				this.set("rotation", b)
		},
		getRotation: function() {
			V.a.add(this.CLASS_NAME, "getRotation");
			return this.get("rotateEnable") && this.get("rotation") || 0
		},
		getBounds: function() {
			V.a.add(this.CLASS_NAME, "getBounds");
			this.get("crs");
			var b = this.getCoordsBound(),
				c = b.Wb.x,
				d = b.$a.y,
				b = new V.K(b.$a.x, b.Wb.y),
				c = new V.K(c, d);
			return new V.Qc(this.Se(b, this.get("zoom")), this.Se(c, this.get("zoom")))
		},
		getStatus: function() {
			V.a.add(this.CLASS_NAME, "getStatus");
			for(var b = "isHotspot dragEnable zoomEnable keyboardEnable jogEnable doubleClickZoom scrollWheel resizeEnable touchZoom rotateEnable animateEnable".split(" "),
					c = {}, d = 0; d < b.length; d += 1) c[b[d]] = this.get(b[d], null, !0);
			return c
		},
		setStatus: function(b) {
			V.a.add(this.CLASS_NAME, "setStatus");
			for(var c in b) b.hasOwnProperty(c) && -1 !== "isHotspot,dragEnable,keyboardEnable,doubleClickZoom,scrollWheel,zoomEnable,jogEnable,continuousZoomEnable,resizeEnable,animateEnable,rotateEnable,touchZoom".indexOf(c) && this.set(c, b[c])
		},
		getResolution: function(b) {
			V.a.add(this.CLASS_NAME, "getResolution");
			b = (b = V.g.ha(b)) ? b.M : this.get("center").M;
			return this.get("resolution") * Math.cos(b *
				Math.PI / 180)
		},
		getScale: function(b) {
			V.a.add(this.CLASS_NAME, "getScale");
			return this.getResolution() * (b || 96) / 0.0254
		},
		getDefaultCursor: function() {
			V.a.add(this.CLASS_NAME, "getDefaultCursor");
			return this.get("defaultCursor", null, !0)
		},
		setDefaultCursor: function(b) {
			V.a.add(this.CLASS_NAME, "setDefaultCursor");
			return this.set("defaultCursor", b, !0)
		},
		zoomIn: function(b) {
			V.a.add(this.CLASS_NAME, "zoomIn");
			this.setZoom(this.get("targetLevel") + 1, b)
		},
		zoomOut: function(b) {
			V.a.add(this.CLASS_NAME, "zoomOut");
			this.setZoom(this.get("targetLevel") -
				1, b)
		},
		setZoomAndCenter: function(b, c, d) {
			V.a.add(this.CLASS_NAME, "setZoomAndCenter");
			c = V.g.ha(c);
			b = Math.round(b);
			var e = this.get("zooms");
			b > e[1] && (b = e[1]);
			b < e[0] && (b = e[0]);
			this.loaded ? this.set("zoomAndCenter", [b, c, d]) : (this.setZoom(b, !0), this.setCenter(c, !0))
		},
		setBounds: function(b, c, d, e, g, h) {
			V.a.add(this.CLASS_NAME, "setBounds");
			c = c ? Number(c) : 0;
			var k = this.IK || this.get("zooms")[1];
			h = this.getSize().Wn();
			var l = 0,
				m = 0;
			if(g) {
				var m = g[0],
					n = g[1],
					l = g[2];
				g = g[3];
				h.x -= l + g;
				h.y -= m + n;
				l = (l - g) / 2;
				m = (m - n) / 2
			}
			g = this.get("zooms");
			for(d && (h = h.Ja(d)); k > g[0] && !(d = this.qb(b.hb, k), n = this.qb(b.ab, k), b.hb.I > b.ab.I && (n.x += this.qb(new V.O(180, 0), k).x), Math.abs(n.x - d.x) < h.x && Math.abs(d.y - n.y) < h.y); k -= 1);
			h = V.j.U ? 17 : 18;
			e = e || !this.getBounds().contains(b.Ye()) || V.j.U && 1 < Math.abs(k + c - this.get("zoom"));
			c = Math.min(g[1], h, Math.max(g[0], k + c));
			k = this.yf(this.qb(b.Ye(), c).Ja(new V.K(l, m)), c);
			this.setZoomAndCenter(c, k, e);
			return b
		},
		clearMap: function() {
			V.a.add(this.CLASS_NAME, "clearMap");
			for(var b = this.get("overlays"), c = 0; c < b.length; c += 1) b[c].set("map",
				null, !0);
			this.set("overlays", []);
			if(this.map && this.map.Ba)
				for(var b = this.map.Ba, d = b.length, c = 0; c < d; c += 1) b[c].Ua instanceof wc && b[c].Ua.setMap(null)
		},
		destroy: function() {
			V.a.add(this.CLASS_NAME, "destroy");
			this.eh && (this.eh.setMap(), this.indoorMap = this.eh = null);
			this.set("overlays", []);
			this.set("layers", []);
			var b = this.get("controls");
			b.remove = [];
			for(var c in b.sc) b.sc.hasOwnProperty(c) && b.remove.push(b.sc[c]);
			b.sc = [];
			b.add = [];
			this.set("controls", b);
			this.set("destroy", !0);
			this.zb = !1;
			V.vd = {};
			this.am();
			this.D = null
		},
		addControl: function(b) {
			V.a.add(this.CLASS_NAME, "addControl");
			var c = V.g.Ab(b),
				d = this.get("controls") || {};
			d.sc = d.sc || {};
			d.sc[c] || (d.sc[c] = b);
			d.add = d.add || [];
			d.add.push(b);
			this.set("controls", d)
		},
		removeControl: function(b) {
			V.a.add(this.CLASS_NAME, "removeControl");
			var c = V.g.Ab(b),
				d = this.get("controls") || {};
			d.sc = d.sc || {};
			d.sc[c] && delete d.sc[c];
			d.remove = d.remove || [];
			d.remove.push(b);
			this.set("controls", d)
		},
		clearControl: function() {
			V.a.add(this.CLASS_NAME, "clearControl");
			var b = this.get("controls") || {};
			b.remove = b.remove || [];
			b.sc = b.sc || {};
			for(var c in b.sc) b.sc.hasOwnProperty(c) && (b.remove.push(b.sc[c]), delete b.sc[c]);
			this.set("controls", b)
		},
		plugin: function(b, c) {
			"string" === typeof b && (b = [b]);
			for(var d = 0; d < b.length; d += 1) {
				var e = b[d].split(".");
				"function" === typeof window[e[0]][e[1]] && (b.splice(d, 1), d -= 1)
			}
			if(0 === b.length) return c(), this;
			for(var g = b.length, d = 0; d < b.length; d += 1) V.Qa.load(b[d], function() {
				g -= 1;
				0 === g && c()
			});
			return this
		},
		clearInfoWindow: function() {
			V.a.add(this.CLASS_NAME, "clearInfoWindow");
			var b = this.get("overlays");
			b && 0 !== b.length && this.Vh && this.Vh.close()
		},
		remove: function(b) {
			V.a.add(this.CLASS_NAME, "remove");
			b instanceof Array || (b = [b]);
			for(var c = 0; c < b.length; c += 1) {
				var d = b[c];
				d.getMap && d.getMap() === this && (d.close ? d.close() : d.setMap && d.setMap(null))
			}
		},
		add: function(b) {
			V.a.add(this.CLASS_NAME, "add");
			b instanceof Array || (b = [b]);
			for(var c = 0; c < b.length; c += 1) {
				var d = b[c];
				d.getMap && d.getMap() !== this && !d.open && d.setMap && d.setMap(this)
			}
		},
		getAllOverlays: function(b, c) {
			V.a.add(this.CLASS_NAME, "getAllOverlays");
			var d = this.get("overlays"),
				e;
			if(b) switch(b) {
				case "marker":
					e = Z;
					break;
				case "circle":
					e = xc;
					break;
				case "polyline":
					e = yc;
					break;
				case "polygon":
					e = zc
			}
			if(e) {
				for(var g = [], h = 0; h < d.length; h += 1) d[h] instanceof e && (c || !d[h].ea && !d[h].isOfficial) && g.push(d[h]);
				return g
			}
			if(!c) {
				g = [];
				for(h = 0; h < d.length; h += 1) d[h].ea || d[h].isOfficial || g.push(d[h]);
				d = g
			}
			e = this.get("layers");
			g = [];
			if(e)
				for(var h = 0, k = e.length; h < k; h += 1) e[h] instanceof wc && g.push(e[h]);
			return d.concat(g)
		},
		triggerResize: function() {
			this.map && this.map.wx()
		},
		refreshSize: function() {
			this.ur =
				this.tX()
		},
		tX: function() {
			return V.f.sX(this.D)
		},
		getSize: function() {
			V.a.add(this.CLASS_NAME, "getSize");
			(!this.ur || 10 > this.ur.width * this.ur.height) && this.refreshSize();
			return this.ur
		},
		getContainer: function() {
			V.a.add(this.CLASS_NAME, "getContainer");
			return this.D
		},
		panTo: function(b) {
			V.a.add(this.CLASS_NAME, "panTo");
			b = V.g.ha(b);
			this.loaded ? this.set("panTo", b) : this.setCenter(b)
		},
		panBy: function(b, c, d) {
			V.a.add(this.CLASS_NAME, "panBy");
			var e = this.get("rotation") * Math.PI / 180,
				g = b * Math.cos(e) + Math.sin(e) * c;
			b = -Math.sin(e) * b + Math.cos(e) * c;
			g = (this.loaded && this.map && this.map.Rb ? this.qb(this.map.Rb.fM) : this.get("centerPixel")).add(new V.K(-g, -b));
			g = this.yf(g);
			!this.loaded || d ? this.setCenter(g, d) : this.set("panTo", g)
		},
		setFitView: function(b, c, d, e) {
			V.a.add(this.CLASS_NAME, "setFitView");
			var g;
			if(b)
				if(b instanceof Ac) b = [b];
				else {
					if(!(b instanceof Array)) return null
				}
			else b = this.getAllOverlays();
			for(var h = 0; h < b.length; h += 1) {
				var k = b[h];
				!k.get("visible") || k instanceof vc || k instanceof uc || (k = k.getBounds()) && (g = g ? k.f1(g) :
					k)
			}
			g && this.setBounds(g, null, new V.K(50, 50), c, d, e);
			return g
		},
		setLayers: function(b) {
			V.a.add(this.CLASS_NAME, "setLayers");
			for(var c = 0; c < b.length; c += 1) b[c].set("map", this, !0);
			this.set("layers", b)
		},
		getLayers: function() {
			V.a.add(this.CLASS_NAME, "getLayers");
			return this.get("layers", null, !0)
		},
		getDefaultLayer: function() {
			V.a.add(this.CLASS_NAME, "getDefaultLayer");
			return this.get("defaultLayer", null, !0)
		},
		setDefaultLayer: function(b) {
			V.a.add(this.CLASS_NAME, "setDefaultLayer");
			b.fy = !0;
			var c = this.get("defaultLayer"),
				d = this.get("layers");
			if(c) {
				if(b === c) return;
				c.fy = !1;
				d = V.g.Ni(d, V.g.indexOf(d, c))
			}
			this.set("defaultLayer", b, !0);
			d.push(b);
			this.setLayers(d)
		},
		pixelToLngLat: function(b, c) {
			V.a.add(this.CLASS_NAME, "pixelToLngLat");
			return this.yf(b, c)
		},
		lnglatToPixel: function(b, c) {
			V.a.add(this.CLASS_NAME, "lnglatToPixel");
			return this.qb(b, c)
		},
		drawPolyline: function(b) {
			V.a.add(this.CLASS_NAME, "drawPolyline");
			this.set("draw", "polyline");
			this.set("drawStyle", b || {
				strokeColor: "#006600",
				xa: 0.9
			})
		},
		drawPolygon: function(b) {
			V.a.add(this.CLASS_NAME,
				"drawPolygon");
			this.set("draw", "polygon");
			this.set("drawStyle", b || {
				strokeColor: "#006600",
				xa: 0.9,
				fillColor: "#FFAA00",
				Bc: 0.9
			})
		},
		drawCircle: function(b) {
			V.a.add(this.CLASS_NAME, "drawCircle");
			this.set("draw", "circle");
			this.set("drawStyle", b || {
				strokeColor: "#006600",
				xa: 0.9,
				fillColor: "#006600",
				Bc: 0.9
			})
		},
		endDraw: function() {
			this.set("draw", null)
		},
		isGoogleTileVisible: function() {
			return this.map && this.map.Bw()
		}
	});
	Bc.hn({
		Yz: "lnglatTocontainer",
		lnglatTocontainer: "lngLatToContainer",
		Jj: "containTolnglat",
		containTolnglat: "containerToLngLat",
		qb: "project",
		yf: "unproject"
	});
	Bc.Mc({
		isHotspotChanged: function() {
			if("undefined" !== typeof this.aq && (this.SV(), this.get("isHotspot"))) {
				var b = this.get("layers", null, !0);
				b && b.length && !this.aq && this.Qt && this.FZ()
			}
		},
		FZ: function() {
			if(this.Th) this.nJ();
			else {
				var b = this;
				this.plugin("AMap.HotSpot", function() {
					if(!b.aq) {
						if(!b.Th) {
							var c = new V.ne;
							new vc;
							b.Th = c
						}
						b.nJ()
					}
				})
			}
		},
		SV: function() {
			this.Th && this.gY()
		},
		DK: function(b) {
			b.type = "hotspotover";
			b.isIndoorPOI = !1;
			this.l("hotspotover", b)
		},
		BK: function(b) {
			b.type = "hotspotclick";
			b.isIndoorPOI = !1;
			this.l("hotspotclick",
				b)
		},
		CK: function(b) {
			b.type = "hotspotout";
			b.isIndoorPOI = !1;
			this.l("hotspotout", b)
		},
		nJ: function() {
			var b = this.Th;
			this.Th.setMap(this);
			b.e("mouseover", this.DK, this);
			b.e("click", this.BK, this);
			b.e("mouseout", this.CK, this)
		},
		gY: function() {
			var b = this.Th;
			b.C("mouseover", this.DK, this);
			b.C("click", this.BK, this);
			b.C("mouseout", this.CK, this);
			this.Th.setMap(null);
			this.Th = null
		}
	});
	var $ = {
		T: function(b, c, d, e) {
			V.a.add("AMap.event", "addDomListener");
			V.w.e(b, c, d, e);
			return new V.ar(0, b, c, d, e)
		},
		FU: function() {},
		addListener: function(b, c, d, e) {
			V.a.add("AMap.event", "addListener");
			b.Ze || (b.Ze = V.ca.Ze);
			V.ca.e.call(b, c, d, e);
			return new V.ar(1, b, c, d, e)
		},
		bH: function(b, c, d, e) {
			V.a.add("AMap.event", "addListenerOnce");
			b.Ze || (b.Ze = V.ca.Ze);
			V.ca.e.call(b, c, d, e, !0);
			return new V.ar(1, b, c, d, e)
		},
		GH: function(b) {
			V.ca.Ji.call(b)
		},
		Ts: function(b, c) {
			V.ca.Ji.call(b, c)
		},
		removeListener: function(b) {
			V.a.add("AMap.event",
				"removeListener");
			!b instanceof V.ar || (0 === b.type ? V.w.C(b.Bl, b.kI, b.iJ, b.xe) : 1 === b.type && (b.Bl.Ze || (b.Bl.Ze = V.ca.Ze), V.ca.C.call(b.Bl, b.kI, b.iJ, b.xe)))
		},
		H: function(b, c) {
			V.a.add("AMap.event", "trigger");
			b.Ze || (b.Ze = V.ca.Ze);
			var d = Array.prototype.slice.call(arguments, 1);
			V.ca.l.apply(b, d)
		}
	};
	V.ar = V.W.extend({
		B: function(b, c, d, e, g) {
			this.type = b;
			this.Bl = c;
			this.kI = d;
			this.iJ = e;
			this.xe = g
		}
	});
	var Cc = {
			T: "addDomListener",
			FU: "addDomListenerOnce",
			addListener: "addListener",
			bH: "addListenerOnce",
			GH: "clearInstanceListeners",
			Ts: "clearListeners",
			removeListener: "removeListener",
			H: "trigger"
		},
		Dc;
	for(Dc in Cc) Cc.hasOwnProperty(Dc) && ($[Cc[Dc]] = $[Dc]);
	V.event = $;
	V.event.T(window, "beforeunload", V.a.send);
	var Ec = V.W.extend({
		oa: [V.ca, V.gd],
		B: function(b) {
			this.CLASS_NAME = "AMap.Layer";
			V.g.bb(this, b);
			this.ke(this.G)
		},
		getContainer: function() {
			if(this.V && this.V.J) return this.V.J.qf()
		},
		getZooms: function() {
			V.a.add(this.CLASS_NAME, "getZooms");
			return this.get("zooms", null, !0)
		},
		setOpacity: function(b) {
			V.a.add(this.CLASS_NAME, "setOpacity");
			b !== this.get("opacity", null, !0) && this.set("opacity", b)
		},
		getOpacity: function() {
			return this.get("opacity", null, !0)
		},
		show: function() {
			V.a.add(this.CLASS_NAME, "show");
			this.set("visible", !0);
			this.ck && this.V.A.layersChanged()
		},
		hide: function() {
			V.a.add(this.CLASS_NAME, "hide");
			this.set("visible", !1);
			this.ck && this.V.A.layersChanged()
		},
		setMap: function(b) {
			V.a.add(this.CLASS_NAME, "setMap");
			var c = this.get("map");
			b ? (c && b !== c && c.Kn(this), this.set("map", b)) : c && (c.Kn(this), this.set("map", null, !0), this.Rg = !1, this.Ee && this.Ee())
		},
		getMap: function() {
			V.a.add(this.CLASS_NAME, "getMap");
			return this.get("map", null, !0)
		},
		mapChanged: function() {
			this.get("map") && this.get("map").aH(this)
		},
		setzIndex: function(b) {
			V.a.add(this.CLASS_NAME,
				"setzIndex");
			this.set("zIndex", b)
		},
		getzIndex: function() {
			return this.get("zIndex", null, !0)
		}
	});
	var Y = Ec.extend({
		G: {
			tileSize: 256,
			visible: !0,
			opacity: 1,
			zIndex: 0,
			noLimg: 1,
			zooms: [3, 20],
			getTileUrl: V.j.U ? V.k.Nq : V.k.nq,
			errorUrl: V.g.WW,
			detectRetina: !0,
			className: "amap-layer",
			mapNumber: ""
		},
		B: function(b) {
			V.a.Sa("AMap.TileLayer", b);
			(b = b || {}) && b.tileUrl && (b.getTileUrl = b.tileUrl);
			this.GV(b);
			var c = b.zooms;
			c && c[1] >= this.Tf[0] ? (c[0] < this.Tf[0] && (c[0] = this.Tf[0]), c[1] > this.Tf[1] && (c[1] = this.Tf[1])) : b.zooms = [this.Tf[0], this.Tf[1]];
			arguments.callee.Za.call(this, b);
			this.CLASS_NAME = "AMap.TileLayer"
		},
		setTextIndex: function(b) {
			V.a.add(this.CLASS_NAME,
				"setTextIndex");
			this.set("textIndex", b)
		},
		Qz: function() {
			var b = this.get("getTileUrl");
			return b !== V.k.nq && b !== V.k.Nq ? !1 : !0
		},
		wy: function() {
			if(!this.Qz() || !V.j.eg) return !1;
			var b = this.get("map");
			return !b || "zh_cn" !== b.get("lang") || "d" === b.get("baseRender") || this.noVector ? !1 : !0
		},
		Nf: function(b) {
			var c = this.get("map");
			this.Qz() && (this.wy() ? this.set("mapNumber", "GS(2016)710") : this.set("mapNumber", "GS(2015)2681"));
			if(this.wy())
				if(this.ck = !0, V.V.wg) {
					if("dv" === c.get("baseRender") && !this.get("watermark")) {
						var d =
							V.k.Mt;
						V.j.pa && this.get("detectRetina") && (d = V.k.Mt.replace("scl=1", "scl=2"));
						var e = c.get("showBuildingBlock");
						e || (d = d.replace("ltype=3", "ltype=11"));
						d = new V.V.Cf(this, b, this.Ko(d), void 0, !0);
						e && (d.Vl = new V.V.pe(new Y({
							zooms: [16, 20],
							innerLayer: "true"
						}), b), d.Vl.ld(["visible", "opacity", "zIndex"], d, !0), d.Vl.ra = ["building"], d.Vl.Ns(c.get("mapStyle") || "normal"));
						return d
					}
					if("v" <= c.get("baseRender") || this.get("watermark")) return new V.V.pe(this, b)
				} else return ["vectorlayer", "overlay"];
			else return this.ck = !1, new V.V.Cf(this, b, null, this.G.maxDataZoom)
		},
		getTileUrlChanged: function() {
			var b = this.get("getTileUrl");
			if(b == V.k.nq || b == V.k.Nq || b == V.k.mu) this.Qt = !0;
			"string" === typeof b && (b = this.Ko(b));
			this.set("tileFun", b)
		},
		GV: function(b) {
			this.Tf || (this.Tf = [this.G.zooms[0], this.G.zooms[1]]);
			var c;
			b.hasOwnProperty("detectRetina") && !1 === b.detectRetina && (c = !0);
			V.j.U && V.j.pa && this.G.detectRetina && !c && (this.Tf[1] -= 1)
		},
		getTiles: function() {
			V.a.add(this.CLASS_NAME, "getTiles");
			var b = this.get("tiles", null, !0);
			if(b && b.length) b =
				b[0];
			else return [];
			for(var c = [], d, e = 0; e < b.length; e += 1) b[e].key && (d = b[e].key.split("/"), c.push("" + d[1] + "," + d[2]));
			return c
		},
		reload: function() {
			V.a.add(this.CLASS_NAME, "reload");
			this.set("reload", 1)
		},
		Hn: function() {
			var b = this.get("map", null, !0);
			this.setMap(null);
			this.Rg = !1;
			this.setMap(b)
		},
		setTileUrl: function(b) {
			V.a.add(this.CLASS_NAME, "setTileUrl");
			this.wy() ? (this.set("getTileUrl", b), this.Hn()) : this.set("getTileUrl", b)
		},
		Ko: function(b) {
			var c = this,
				d, e, g;
			return function(h, k, l) {
				h = (h + Math.pow(2, l)) % Math.pow(2,
					l);
				if("number" !== typeof(h + k + l)) return null;
				var m = c.get("map"),
					n = "zh_cn";
				m && (n = m.get("lang") || "zh_cn");
				l = b.replace("[x]", h).replace("[y]", k).replace("[z]", l).replace("[lang]", n);
				if(!d) {
					if(e = b.match(/\{.*\}/)) g = e.toString().replace("{", "").replace("}", ""), g = g.split(",");
					d = !0
				}
				g && g.length && (l = l.replace(e, g[Math.abs(h + k) % g.length]));
				return l
			}
		},
		getTileUrl: function(b, c, d) {
			V.a.add(this.CLASS_NAME, "getTileUrl");
			return this.get("tileFun", null, !0)(b, c, d)
		},
		getZooms: function() {
			V.a.add(this.CLASS_NAME, "getZooms");
			return this.get("zooms", null, !0)
		}
	});
	Y.Su = Y.extend({
		G: {
			getTileUrl: function(b, c, d) {
				if(this && this.get) {
					var e = this.get("map"),
						g = "zh_cn";
					e && (g = e.get("lang") || "zh_cn")
				}
				return "http://grid.amap.com/grid/" + d + "/" + b + "/" + c + "?src=jsapi&key=" + V.k.key + "&lang=" + g + "&dpiType=" + (V.j.Jc ? "wprd" : "webrd")
			},
			zooms: [10, 18],
			zIndex: 2
		},
		B: function(b) {
			arguments.callee.Za.apply(this, arguments)
		}
	});
	Y.uC = Y.extend({
		G: {
			getTileUrl: V.k.dB,
			zooms: [3, 20],
			zIndex: 2,
			maxDataZoom: 18,
			detectRetina: !1,
			mapNumber: "GS(2017)154",
			className: "amap-layer amap-satellite"
		},
		B: function(b) {
			this.Tf = [3, 20];
			arguments.callee.Za.apply(this, arguments);
			this.CLASS_NAME = "AMap.TileLayer.Satellite";
			V.a.Sa(this.CLASS_NAME, b)
		}
	});
	Y.sC = Y.extend({
		G: {
			getTileUrl: V.k.mu,
			zooms: [3, 20],
			zIndex: 3,
			type: "overlayer",
			maxDataZoom: 18,
			className: "amap-layer amap-roadnet"
		},
		B: function(b) {
			this.Tf = [3, 20];
			arguments.callee.Za.apply(this, arguments);
			this.CLASS_NAME = "AMap.TileLayer.RoadNet";
			V.a.Sa(this.CLASS_NAME, b)
		},
		Nf: function(b) {
			var c = this.get("map");
			V.j.eg && "d" !== c.get("baseRender") ? (this.ck = !0, c = V.k.nu, V.j.pa && this.get("detectRetina") && (c = V.k.nu.replace("scl=1", "scl=2")), b = new V.V.Cf(this, b, this.Ko(c), this.G.maxDataZoom)) : (this.ck = !1, b = new V.V.Cf(this,
				b));
			return b
		}
	});
	Y.wC = Y.extend({
		G: {
			getTileUrl: function(b, c, d) {
				return V.k.nc + "://tm.amap.com/trafficengine/mapabc/traffictile?v=1.0&t=1&zoom=" + (17 - d) + "&x=" + b + "&y=" + c
			},
			zooms: [6, 20],
			zIndex: 4,
			type: "overlayer",
			autoRefresh: !1,
			interval: 180,
			maxDataZoom: 17,
			alwaysRender: !V.j.Ny,
			className: "amap-layer amap-traffic"
		},
		B: function(b) {
			this.Tf = [6, 20];
			arguments.callee.Za.apply(this, arguments);
			this.startRefresh();
			this.CLASS_NAME = "AMap.TileLayer.Traffic";
			V.a.Sa(this.CLASS_NAME, b)
		},
		stopRefresh: function() {
			V.a.add(this.CLASS_NAME, "stopRefresh");
			this.fu && (clearInterval(this.fu), this.fu = null)
		},
		startRefresh: function() {
			V.a.add(this.CLASS_NAME, "startRefresh");
			if(this.get("autoRefresh") && !this.fu) {
				var b = this;
				this.fu = setInterval(function() {
					b.reload();
					b.l("refresh")
				}, Math.max(1E3 * (this.get("interval") || 180), 1E4))
			}
		},
		reload: function() {
			V.a.add(this.CLASS_NAME, "reload");
			V.g.Fe(function() {
				this.set("reload")
			}, this)
		},
		Ee: function() {
			this.stopRefresh();
			this.get("map") && this.get("map").C("zoomstart", this.reload, this)
		},
		Nf: function(b) {
			var c = this.get("map"),
				c = b.Ca;
			c.e("zoomstart", this.reload, this);
			return "d" !== c.get("baseRender") ? V.V.po ? b = new V.V.po(this, b) : ["vt"] : b = new V.V.Cf(this, b, null, this.G.maxDataZoom)
		}
	});
	var Fc = Ec.extend({
		G: {
			visible: !0,
			zooms: [3, 25],
			type: "overlay",
			zIndex: 5,
			alwaysRender: !0
		},
		B: function(b) {
			arguments.callee.Za.apply(this, arguments)
		},
		Nf: function(b) {
			return new V.V.kd(this, b)
		}
	});
	var Gc = Ec.extend({
		G: {
			zooms: [17, 20],
			zIndex: 8,
			url: V.k.Tq + "/vector/buildings",
			wallColor: [200, 190, 180],
			strokeColor: [145, 140, 135],
			CAM_Z: 400,
			lineCap: "round",
			lineJoin: "round",
			lineWidth: 1,
			fadeFactor: 1,
			visible: !0
		},
		B: function() {
			arguments.callee.Za.apply(this, arguments);
			this.CLASS_NAME = "AMap.Buildings"
		},
		Nf: function(b) {
			if(V.V.jo) return new V.V.jo(this, b);
			if(V.j.hq) return ["building", "overlay"]
		}
	});
	var Hc = Ec.extend({
		G: {
			visible: !0,
			zooms: [3, V.j.U ? 20 : 18],
			opacity: 1,
			type: "overlay",
			zIndex: 6
		},
		B: function(b) {
			arguments.callee.Za.apply(this, arguments);
			this.CLASS_NAME = "AMap.ImageLayer";
			V.a.Sa(this.CLASS_NAME, b)
		},
		Nf: function(b) {
			return V.V.eC ? new V.V.eC(this, b) : ["imagelayer"]
		},
		getMap: function() {
			V.a.add(this.CLASS_NAME, "getMap");
			return this.si.map
		},
		show: function() {
			V.a.add(this.CLASS_NAME, "show");
			this.set("visible", !0);
			this.l("options")
		},
		getOpacity: function() {
			V.a.add(this.CLASS_NAME, "getOpacity");
			return this.get("opacity",
				null, !0)
		},
		setOpacity: function(b) {
			V.a.add(this.CLASS_NAME, "setOpacity");
			this.set("opacity", b)
		},
		getBounds: function() {
			V.a.add(this.CLASS_NAME, "getBounds");
			return this.get("bounds", null, !0).Tb()
		},
		setBounds: function(b) {
			V.a.add(this.CLASS_NAME, "setBounds");
			this.setOptions({
				bounds: b
			})
		},
		getImageUrl: function() {
			V.a.add(this.CLASS_NAME, "getImageUrl");
			return this.get("url")
		},
		setImageUrl: function(b) {
			V.a.add(this.CLASS_NAME, "setImageUrl");
			return this.set("url", b)
		},
		hide: function() {
			V.a.add(this.CLASS_NAME, "hide");
			this.set("visible", !1);
			this.l("options")
		},
		setOptions: function(b) {
			V.a.add(this.CLASS_NAME ? this.CLASS_NAME : "AMap.ImageLayer", "setOptions");
			this.ke(b);
			this.l("options")
		},
		getOptions: function() {
			V.a.add(this.CLASS_NAME, "getOptions");
			var b = {},
				c;
			for(c in this.G) this.G.hasOwnProperty(c) && (b[c] = this.get(c));
			return b
		}
	});
	var Ic = Ec.extend({
		G: {
			visible: !0,
			zooms: [3, V.j.U ? 20 : 18],
			type: "overlay",
			zIndex: 5,
			cursor: "pointer",
			alwaysRender: !0,
			stable: !0,
			bubble: !0,
			className: "amap-mass"
		},
		B: function(b, c) {
			this.CLASS_NAME = "AMap.MassMarks";
			V.a.Sa(this.CLASS_NAME, c);
			V.j.hq && (this.Yh = !0, c.size && (c.size = V.g.ek(c.size)), this.setData(b), V.g.bb(this, c), this.setStyle(this.G))
		},
		setData: function(b) {
			V.a.add(this.CLASS_NAME, "setData");
			this.set("dataSources", b)
		},
		getData: function() {
			V.a.add(this.CLASS_NAME, "getData");
			return this.get("datas") || this.get("dataSources")
		},
		getStyle: function() {
			V.a.add(this.CLASS_NAME, "getStyle");
			return this.Au
		},
		setStyle: function(b) {
			V.a.add(this.CLASS_NAME, "setStyle");
			b.size && (b.size = V.g.ek(b.size));
			this.ke(b, !0);
			this.Au = {
				anchor: this.get("anchor"),
				url: this.get("url"),
				size: this.get("size"),
				cursor: this.get("cursor")
			};
			this.l("style")
		},
		setMap: function(b) {
			V.a.add(this.CLASS_NAME, "setMap");
			V.j.hq && (b ? (this.get("map") && this.get("map").Kn(this), this.set("map", b)) : this.get("map") && (this.get("map").Kn(this), this.set("map", null, !0), this.Rg = !1, this.Ee &&
				this.Ee()))
		},
		Nf: function(b) {
			return V.Qa.GJ(["cvector"]) ? (b = new V.V.kd(this, b), this.P("datas", b), b) : ["cvector"]
		}
	});
	var wc = Hc.extend({
		B: function(b, c, d) {
			V.a.Sa("AMap.GroundImage", d);
			d = d || {};
			this.Si = !0;
			var e = parseFloat(d.opacity);
			isNaN(e) && (e = 1);
			arguments.callee.Za.call(this, {
				url: b,
				bounds: c,
				clickable: d.clickable,
				opacity: e,
				map: d.map,
				zooms: d.zooms || [3, 20]
			});
			this.CLASS_NAME = "AMap.GroundImage"
		},
		xZ: function(b) {
			this.get("bounds").contains(b.lnglat) && (b.target = this, this.l("click", b))
		},
		yZ: function(b) {
			this.get("bounds").contains(b.lnglat) && (b.target = this, this.l("dblclick", b))
		},
		setMap: function(b) {
			V.a.add(this.CLASS_NAME, "setMap");
			b ? (this.get("map") && (this.get("map").Kn(this), this.JH && $.removeListener(this.JH), this.VH && $.removeListener(this.VH)), this.set("map", b)) : this.get("map") && (this.get("map").Kn(this), this.si.map = null)
		},
		mapChanged: function() {
			this.get("map") && (this.get("map").aH(this), this.get("clickable") && (this.JH = $.addListener(this.get("map"), "click", this.xZ, this), this.VH = $.addListener(this.get("map"), "dblclick", this.yZ, this)))
		}
	});
	var Ac = V.W.extend({
		oa: [V.ca, V.gd, {
			ha: V.g.ha
		}],
		G: {
			extData: {},
			bubble: !1,
			clickable: !0,
			draggable: !1
		},
		B: function() {
			this.Qr = V.g.Ab(this)
		},
		Y3: function() {
			return this.Qr
		},
		i3: function() {
			this.get("map", null, !0) && this.setMap(this.get("map"))
		},
		mapChanged: function() {
			this.get("map", null, !0) && this.get("map", null, !0).dH(this)
		},
		show: function() {
			V.a.add(this.CLASS_NAME, "show");
			this.set("visible", !0)
		},
		hide: function() {
			V.a.add(this.CLASS_NAME, "hide");
			this.set("visible", !1)
		},
		setMap: function(b) {
			V.a.add(this.CLASS_NAME, "setMap");
			b !== this.get("map", null, !0) && (b ? (this.get("map", null, !0) && this.get("map", null, !0).hu(this), this.set("map", b)) : this.get("map", null, !0) && (this.get("map", null, !0).hu(this), this.set("map", null, !0)))
		},
		getMap: function() {
			V.a.add(this.CLASS_NAME, "getMap");
			return this.get("map", null, !0)
		},
		setExtData: function(b) {
			V.a.add(this.CLASS_NAME, "setExtData");
			this.set("extData", b)
		},
		getExtData: function() {
			V.a.add(this.CLASS_NAME, "getExtData");
			return this.get("extData", null, !0)
		}
	});
	var Jc = Ac.extend({
		B: function(b) {
			Jc.qe.B.apply(this, arguments)
		},
		show: function() {
			this.set("visible", !0);
			this.l("show", {
				type: "show",
				target: this
			})
		},
		hide: function() {
			this.set("visible", !1);
			this.l("hide", {
				type: "hide",
				target: this
			})
		},
		getVisible: function() {
			return this.get("visible", null, !0)
		},
		getOptions: function() {
			var b = {},
				c = "map zIndex strokeColor strokeOpacity strokeWeight strokeStyle strokeDasharray extData bubble clickable".split(" "),
				d = "isOutline outlineColor geodesic path lineJoin lineCap borderWeight showDir".split(" "),
				e = ["fillColor", "fillOpacity", "path", "lineJoin"],
				g = ["center", "radius"],
				h = [];
			this instanceof yc && (h = c.concat(d));
			this instanceof zc && (h = c.concat(e));
			this instanceof xc && (h = c.concat(g).concat(e));
			for(c = 0; c < h.length; c += 1) b[h[c]] = this.get(h[c], null, !0);
			return b
		},
		setOptions: function(b) {
			b.hasOwnProperty("path") && (b.path && b.path.length || (b.path = []), b.path = V.g.ha(b.path));
			b.center && (b.center = V.g.ha(b.center));
			b.hasOwnProperty("map") && this.setMap(b.map);
			this.ke(b);
			this.l("options");
			this.l("change", {
				type: "change",
				target: this
			})
		},
		setDraggable: function(b) {
			this.set("draggable", b)
		}
	});
	var Kc = Jc.extend({
		G: {
			visible: !0,
			zIndex: 10,
			strokeColor: "#006600",
			strokeOpacity: 0.9,
			strokeWeight: 3,
			strokeStyle: "solid",
			strokeDasharray: [10, 5],
			lineJoin: "miter",
			path: []
		},
		B: function(b) {
			Kc.qe.B.apply(this, arguments)
		},
		setPath: function(b, c) {
			V.a.add(this.CLASS_NAME, "setPath");
			b && b.length || (b = []);
			b = this.ha(b);
			this.set("path", b);
			this.l("change", {
				type: "change",
				target: this
			});
			c || this.l("setPath")
		},
		getPath: function() {
			V.a.add(this.CLASS_NAME, "getPath");
			return this.get("path", null, !0)
		},
		dc: function() {
			var b = this.get("path");
			if(!b || !b.length) return null;
			b[0] instanceof V.O && (b = [b]);
			for(var c = new V.Qc(180, 90, -180, -90), d = 0; d < b.length; d += 1)
				for(var e = b[d], g = e.length - 1; 0 <= g; g -= 1) c.extend(e[g]);
			return c
		}
	});
	Kc.hn({
		dc: "getBounds"
	});
	var Lc = V.W.extend({
		oa: [V.ca, V.gd],
		G: {
			size: new V.Yb(36, 36),
			imageOffset: new V.K(0, 0),
			image: V.k.nb + "/theme/v1.3/markers/0.png",
			imageSize: null
		},
		B: function(b) {
			this.CLASS_NAME = "AMap.Icon";
			V.a.Sa(this.CLASS_NAME, b);
			b = b || {};
			b.size && (b.size = V.g.ek(b.size));
			b.imageSize && (b.imageSize = V.g.ek(b.imageSize));
			V.g.bb(this, b);
			this.ke(this.G)
		},
		setImageSize: function(b) {
			V.a.add(this.CLASS_NAME, "setImageSize");
			b = V.g.ek(b);
			this.set("imageSize", b)
		},
		getImageSize: function() {
			V.a.add(this.CLASS_NAME, "getImageSize");
			return this.get("imageSize",
				null, !0)
		}
	});
	var Mc = V.W.extend({
		oa: [V.ca, V.gd],
		G: {
			coords: [],
			type: ""
		},
		B: function(b) {
			this.CLASS_NAME = "AMap.MarkerShape";
			V.a.Sa(this.CLASS_NAME, b);
			V.g.bb(this, b);
			this.ke(this.G)
		}
	});
	var Z = Ac.extend({
		G: {
			cursor: "pointer",
			visible: !0,
			zIndex: 100,
			angle: 0,
			autoRotation: !1,
			opacity: 1,
			offset: new V.K(-9, -31),
			size: new V.K(19, 33),
			raiseOnDrag: !1,
			topWhenClick: !1,
			topWhenMouseOver: !1,
			animation: "AMAP_ANIMATION_NONE"
		},
		B: function(b) {
			this.CLASS_NAME = "AMap.Marker";
			V.a.Sa(this.CLASS_NAME, b);
			b = b || {};
			this.Si = !0;
			b && b.position && (b.position = this.ha(b.position));
			V.g.bb(this, b);
			V.j.pd && (this.G.angle = 0);
			this.ke(this.G);
			V.Lk.UO(b)
		},
		setRaiseOnDrag: function(b) {
			V.a.add(this.CLASS_NAME, "setRaiseOnDrag");
			this.set("raiseOnDrag",
				b)
		},
		setPosition: function(b) {
			V.a.add(this.CLASS_NAME, "setPosition");
			b = this.ha(b);
			this.set("position", b)
		},
		getBounds: function() {
			var b = this.getPosition().Tb();
			return new V.Qc(b, b.Tb())
		},
		mapChanged: function() {
			this.get("map", null, !0) && (this.get("position", null, !0) || this.set("position", this.get("map").get("center")), this.get("map", null, !0).dH(this))
		},
		getPosition: function() {
			V.a.add(this.CLASS_NAME, "getPosition");
			return this.get("position", null, !0)
		},
		setIcon: function(b) {
			V.a.add(this.CLASS_NAME, "setIcon");
			this.set("icon",
				b)
		},
		getIcon: function() {
			V.a.add(this.CLASS_NAME, "getIcon");
			return this.get("icon", null, !0)
		},
		setContent: function(b) {
			V.a.add(this.CLASS_NAME, "setContent");
			this.set("content", b)
		},
		getContent: function() {
			V.a.add(this.CLASS_NAME, "getContent");
			return this.get("content", null, !0)
		},
		getContentDom: function() {
			return this.get("contentDom", null, !0)
		},
		hide: function() {
			V.a.add(this.CLASS_NAME, "hide");
			this.set("visible", !1)
		},
		show: function() {
			V.a.add(this.CLASS_NAME, "show");
			this.set("visible", !0)
		},
		setCursor: function(b) {
			V.a.add(this.CLASS_NAME,
				"setCursor");
			this.set("cursor", b)
		},
		setRotation: function(b) {
			V.a.add(this.CLASS_NAME, "setRotation");
			V.j.pd || this.set("angle", b)
		},
		setAngle: function(b) {
			V.a.add(this.CLASS_NAME, "setAngle");
			V.j.pd || "number" !== typeof b || this.set("angle", b)
		},
		getAngle: function() {
			V.a.add(this.CLASS_NAME, "getAngle");
			return this.get("angle", null, !0)
		},
		setOffset: function(b) {
			V.a.add(this.CLASS_NAME, "setOffset");
			this.set("offset", b)
		},
		getOffset: function() {
			V.a.add(this.CLASS_NAME, "getOffset");
			return this.get("offset", null, !0)
		},
		setzIndex: function(b) {
			V.a.add(this.CLASS_NAME,
				"setzIndex");
			this.set("zIndex", b)
		},
		getzIndex: function() {
			V.a.add(this.CLASS_NAME, "getzIndex");
			return this.get("zIndex", null, !0)
		},
		setOpacity: function(b) {
			V.a.add(this.CLASS_NAME, "setOpacity");
			this.set("opacity", b)
		},
		setDraggable: function(b) {
			V.a.add(this.CLASS_NAME, "setDraggable");
			this.set("draggable", b)
		},
		getDraggable: function() {
			V.a.add(this.CLASS_NAME, "getDraggable");
			return this.get("draggable", null, !0)
		},
		moveTo: function(b, c, d) {
			V.a.add(this.CLASS_NAME, "moveTo");
			b = this.ha(b);
			this.set("move", {
				af: b,
				speed: c,
				Ha: d
			})
		},
		moveAlong: function(b, c, d, e) {
			V.a.add(this.CLASS_NAME, "moveAlong");
			this.set("move", {
				af: b,
				speed: c,
				Ha: d,
				JV: e
			})
		},
		stopMove: function() {
			V.a.add(this.CLASS_NAME, "stopMove");
			this.set("move", !1)
		},
		pauseMove: function() {
			V.a.add(this.CLASS_NAME, "pauseMove");
			var b = this.get("move");
			if(!b) return !1;
			b.action = "pause";
			this.set("move", b);
			return !0
		},
		resumeMove: function() {
			V.a.add(this.CLASS_NAME, "resumeMove");
			var b = this.get("move");
			if(!b) return !1;
			b.action = "resume";
			this.set("move", b);
			return !0
		},
		setShadow: function(b) {
			V.a.add(this.CLASS_NAME,
				"setShadow");
			this.set("shadow", b)
		},
		getShadow: function() {
			V.a.add(this.CLASS_NAME, "getShadow");
			return this.get("shadow", null, !0)
		},
		setClickable: function(b) {
			V.a.add(this.CLASS_NAME, "setClickable");
			b !== this.getClickable() && this.set("clickable", b)
		},
		getClickable: function() {
			V.a.add(this.CLASS_NAME, "getClickable");
			return this.get("clickable", null, !0)
		},
		setTitle: function(b, c) {
			V.a.add(this.CLASS_NAME, "setTitle");
			"string" === typeof b && this.set("title", b, c)
		},
		getTitle: function() {
			V.a.add(this.CLASS_NAME, "getTitle");
			return this.get("title", null, !0)
		},
		setLabel: function(b) {
			V.a.add(this.CLASS_NAME, "setLabel");
			b && (b.hasOwnProperty("content") || b.hasOwnProperty("offSet")) || (b = {
				content: ""
			});
			b = V.extend({}, this.get("label"), b);
			this.set("label", b)
		},
		getLabel: function() {
			V.a.add(this.CLASS_NAME, "getLabel");
			return this.get("label", null, !0)
		},
		setTop: function(b, c) {
			V.a.add(this.CLASS_NAME, "setTop");
			this.set("isTop", b, c)
		},
		getTop: function() {
			V.a.add(this.CLASS_NAME, "getTop");
			return this.get("isTop", null, !0)
		},
		setShape: function(b, c) {
			V.a.add(this.CLASS_NAME,
				"setShape");
			this.set("shape", b, c)
		},
		getShape: function() {
			V.a.add(this.CLASS_NAME, "getShape");
			return this.get("shape", null, !0)
		},
		setAnimation: function(b, c) {
			V.a.add(this.CLASS_NAME, "setAnimation");
			this.set("animation", b, c)
		},
		getAnimation: function() {
			V.a.add(this.CLASS_NAME, "getAnimation");
			return this.get("animation", null, !0)
		},
		getMap: function() {
			V.a.add(this.CLASS_NAME, "getMap");
			return this.get("map", null, !0)
		},
		markOnAMAP: function(b) {
			V.a.add(this.CLASS_NAME, "markOnAMAP");
			b = b || {};
			var c = {};
			c.name = b.name || this.get("name",
				null, !0) || "";
			b = this.ha(b.position) || this.get("position", null, !0);
			c.y = b.M;
			c.x = b.I;
			V.me.lk(V.me.SX(c))
		}
	});
	V.Lk = {
		VA: 12,
		UO: function(b) {
			if(V.j.eg && !V.j.U && b.position && (new Date).getHours() === V.Lk.VA && (V.Na || (V.Na = []), b.title || b.content)) {
				var c = {
					p: [b.position.I, b.position.M]
				};
				b.title && (c.t = b.title);
				b.content && (c.c = b.content.outerHTML || b.content);
				b.name && (c.n = b.name);
				V.Na.push(c)
			}
		},
		XF: function() {
			if(V.Na && V.Na.length) {
				var b = V.Lk.Qp(JSON.stringify({
					mks: V.Na,
					from: V.k.kX,
					key: V.k.key
				}));
				new V.na.XMLHttpRequest(V.k.nb + "/count", {
					cW: "data=" + b,
					xd: "POST"
				});
				V.Na = []
			}
		},
		Qp: function(b) {
			for(var c = "", d = 0, e = b.length; d < e; d++) c +=
				String.fromCharCode((b.charCodeAt(d) + 256) % 65535);
			return c
		},
		nf: function(b) {
			for(var c = "", d = 0, e = b.length; d < e; d++) c += String.fromCharCode((b.charCodeAt(d) - 256 + 65535) % 65535);
			return c
		}
	};
	if(V.j.eg && !V.j.U && (new Date).getHours() === V.Lk.VA) {
		var Nc = setInterval(function() {
			(new Date).getHours() !== V.Lk.VA ? clearInterval(Nc) : V.Lk.XF()
		}, 6E3);
		V.event.T(window, "beforeunload", V.Lk.XF)
	};
	var uc = Ac.extend({
		G: {
			visible: !1,
			items: []
		},
		B: function(b) {
			this.CLASS_NAME = "AMap.ContextMenu";
			V.a.Sa(this.CLASS_NAME, b);
			this.Si = !0;
			V.g.bb(this, b);
			this.G.items = [];
			this.ke(this.G)
		},
		addItem: function(b, c, d) {
			V.a.add(this.CLASS_NAME, "addItem");
			this.get("items").push({
				tM: b,
				Ha: c,
				Ut: d
			});
			this.l("items")
		},
		removeItem: function(b, c) {
			V.a.add(this.CLASS_NAME, "removeItem");
			var d = this.get("items"),
				e, g;
			for(g = 0; g < d.length; g += 1)
				if(e = d[g], e.tM === b && e.Ha === c) {
					d.splice(g, 1);
					break
				}
			this.l("items")
		},
		open: function(b, c) {
			V.a.add(this.CLASS_NAME,
				"open");
			c = V.g.ha(c);
			this.set("position", c);
			this.map ? this.map && this.map !== b && (this.map.hu(this), this.map = b, this.setMap(b)) : (this.map = b, this.setMap(b));
			this.l("open", {
				type: "open",
				target: this
			})
		},
		close: function() {
			V.a.add(this.CLASS_NAME, "close");
			this.setMap(null);
			this.map && (this.map = this.map.$s = null, this.l("close", {
				type: "close",
				target: this
			}))
		}
	});
	var vc = Ac.extend({
		G: {
			visible: !0,
			offset: new V.K(0, 0),
			showShadow: !1,
			closeWhenClickMap: !1,
			retainWhenClose: !0,
			autoMove: !0
		},
		B: function(b) {
			this.CLASS_NAME = "AMap.InfoWindow";
			V.a.Sa(this.CLASS_NAME, b);
			b = b || {};
			this.Si = !0;
			b && b.size && (b.size = V.g.ek(b.size));
			V.g.bb(this, b);
			this.ke(this.G);
			b.position && this.set("position", V.g.ha(b.position), !0)
		},
		open: function(b, c) {
			V.a.add(this.CLASS_NAME, "open");
			c = V.g.ha(c);
			if(b)
				if(this.get("toBeClose")) this.set("toBeClose", !1);
				else if(c = c || this.get("position", null, !0)) {
				this.l("change", {
					type: "change",
					target: this
				});
				var d = this.get("map", null, !0);
				d && d === b ? this.set("position", c) : (this.map = b, b.Vh && b.Vh.close(), this.set("position", c, !0), this.setMap(b));
				this.l("open", {
					type: "open",
					target: this
				})
			}
		},
		close: function() {
			V.a.add(this.CLASS_NAME, "close");
			this.setMap(null);
			this.map = null;
			this.l("change", {
				type: "change",
				target: this
			})
		},
		setContent: function(b) {
			V.a.add(this.CLASS_NAME, "setContent");
			this.set("content", b);
			this.l("change", {
				type: "change",
				target: this
			})
		},
		getContentU: function() {
			V.a.add(this.CLASS_NAME,
				"getContentU");
			return this.get("content", null, !0)
		},
		getContentDom: function() {
			return this.get("contentDom", null, !0)
		},
		getContent: function() {
			V.a.add(this.CLASS_NAME, "getContent");
			return this.get("content", null, !0)
		},
		setPosition: function(b) {
			V.a.add(this.CLASS_NAME, "setPosition");
			b = V.g.ha(b);
			this.set("position", b);
			this.l("change", {
				type: "change",
				target: this
			})
		},
		setOffset: function(b) {
			V.a.add(this.CLASS_NAME, "setOffset");
			this.set("offset", b);
			this.l("change", {
				type: "change",
				target: this
			})
		},
		getPosition: function() {
			V.a.add(this.CLASS_NAME,
				"getPosition");
			return this.get("position", null, !0)
		},
		setSize: function(b) {
			V.a.add(this.CLASS_NAME, "setSize");
			b = V.g.ek(b);
			this.set("size", b);
			this.l("change", {
				type: "change",
				target: this
			})
		},
		getSize: function(b) {
			V.a.add(this.CLASS_NAME, "getSize");
			var c = this.get("size", null, !0);
			if(c) return c;
			if(this.Ea && !b) return new V.Yb(this.Ea.we.offsetWidth, this.Ea.we.offsetHeight)
		},
		getIsOpen: function() {
			V.a.add(this.CLASS_NAME, "getIsOpen");
			return !!this.get("map")
		}
	});
	var yc = Kc.extend({
		G: {
			isOutline: !1,
			outlineColor: "#000000",
			geodesic: !1,
			borderWeight: 1
		},
		B: function(b) {
			yc.qe.B.apply(this, arguments);
			this.CLASS_NAME = "AMap.Polyline";
			V.a.Sa(this.CLASS_NAME, b);
			this.Si = !0;
			b = b || {};
			b.zIndex = "number" === typeof b.zIndex ? b.zIndex : 50;
			b.path && (b.path = this.ha(b.path));
			V.g.bb(this, b);
			this.setOptions(this.G)
		},
		getLength: function() {
			V.a.add(this.CLASS_NAME, "getLength");
			for(var b = this.get("path"), c = 0, d = 0; d < b.length - 1; d += 1) c += b[d].ye(b[d + 1]);
			return parseFloat(c.toFixed(2))
		}
	});
	var zc = Kc.extend({
		B: function(b) {
			zc.qe.B.apply(this, arguments);
			this.CLASS_NAME = "AMap.Polygon";
			V.a.Sa(this.CLASS_NAME, b);
			this.Si = !0;
			b = b || {};
			b.zIndex = "number" === typeof b.zIndex ? b.zIndex : 10;
			b.path && (b.path = this.ha(b.path));
			V.g.bb(this, V.extend({
				fillColor: "#FFAA00",
				fillOpacity: 0.9
			}, b));
			this.setOptions(this.G)
		},
		oz: function(b) {
			var c = 6378137 * Math.PI / 180,
				d = 0,
				e = b.length;
			if(3 > e) return 0;
			for(var g = 0; g < e - 1; g += 1) var h = b[g],
				k = b[g + 1],
				d = d + (h.I * c * Math.cos(h.M * Math.PI / 180) * k.M * c - k.I * c * Math.cos(k.M * Math.PI / 180) * h.M *
					c);
			e = b[g];
			b = b[0];
			d += e.I * c * Math.cos(e.M * Math.PI / 180) * b.M * c - b.I * c * Math.cos(b.M * Math.PI / 180) * e.M * c;
			return 0.5 * Math.abs(d)
		},
		getArea: function() {
			V.a.add(this.CLASS_NAME, "getArea");
			var b = this.get("path", null, !0),
				c;
			if(!b.length || b[0] instanceof V.O) c = this.oz(b);
			else {
				c = this.oz(b[0]);
				for(var d = 1; d < b.length; d += 1) c -= this.oz(b[d])
			}
			return Number(c.toFixed(2))
		},
		toString: function() {
			V.a.add(this.CLASS_NAME, "toString");
			return this.get("path").join(";")
		},
		contains: function(b) {
			V.a.add(this.CLASS_NAME, "contains");
			b = V.g.ha(b);
			var c = this.get("path");
			c.length && c[0] instanceof V.O && (c = [c]);
			b = [b.I, b.M];
			for(var d, e = 0, g = c.length; e < g && (d = this.yV(c[e]), V.dj.Cl(d) || d.reverse(), d = V.dj.mf(b, d, 0 === e ? !0 : !1), 0 < e && (d = !d), d); e += 1);
			return d
		},
		yV: function(b) {
			for(var c = [], d = 0; d < b.length; d += 1) c.push([b[d].I, b[d].M]);
			return c
		}
	});
	var xc = Jc.extend({
		G: {
			visible: !0,
			zIndex: 10,
			strokeColor: "#006600",
			strokeOpacity: 0.9,
			strokeWeight: 3,
			strokeStyle: "solid",
			strokeDasharray: [10, 5],
			radius: 1E3,
			fillColor: "#006600",
			fillOpacity: 0.9
		},
		B: function(b) {
			xc.qe.B.apply(this, arguments);
			this.CLASS_NAME = "AMap.Circle";
			V.a.Sa(this.CLASS_NAME, b);
			b = b || {};
			b.center && (b.center = V.g.ha(b.center));
			b.zIndex = "number" === typeof b.zIndex ? b.zIndex : 10;
			V.g.bb(this, b);
			this.Si = this.G.center ? !0 : !1;
			this.setOptions(this.G)
		},
		setCenter: function(b, c) {
			V.a.add(this.CLASS_NAME, "setCenter");
			(b = V.g.ha(b)) && b instanceof V.O && (this.set("center", b), this.l("change", {
				type: "change",
				target: this
			}), this.Si || (this.Si = !0, this.get("map") && this.get("map").l("overlays")), c || this.l("setCenter"))
		},
		getCenter: function() {
			V.a.add(this.CLASS_NAME, "getCenter");
			return this.get("center", null, !0)
		},
		setRadius: function(b, c) {
			V.a.add(this.CLASS_NAME, "setRadius");
			this.set("radius", b);
			this.l("change", {
				type: "change",
				target: this
			});
			c || this.l("setRadius")
		},
		getRadius: function() {
			V.a.add(this.CLASS_NAME, "getRadius");
			return this.get("radius",
				null, !0)
		},
		getBounds: function() {
			var b = this.get("center"),
				c = this.get("radius");
			if(!b) return null;
			var d = b.offset(-c, -c),
				b = b.offset(c, c);
			return new V.Qc(d, b)
		},
		contains: function(b) {
			V.a.add(this.CLASS_NAME, "contains");
			return this.get("center").ye(b) <= this.get("radius") ? !0 : !1
		}
	});
	V.dN = Bc.extend({
		B: function(b, c) {
			c && (c.center = c.position, c.zoom = 11);
			arguments.callee.Za.apply(this, arguments);
			window.console && window.console.log && window.console.log("\u9ad8\u5fb7\u5730\u56feJSAPI\u8857\u666f\u5df2\u4e0b\u7ebf\uff0c\u611f\u8c22\u60a8\u7684\u652f\u6301\u3002")
		}
	});
	V.eN = Z.extend({
		B: function(b) {
			arguments.callee.Za.apply(this, arguments)
		}
	});
	V.dj = {
		B0: function(b, c) {
			return this.A0(b, this.KH(b, c))
		},
		A0: function(b, c) {
			var d = b[0] - c[0],
				e = b[1] - c[1];
			return d * d + e * e
		},
		KH: function(b, c) {
			var d = b[0],
				e = b[1],
				g = c[0],
				h = c[1],
				k = g[0],
				g = g[1],
				l = h[0],
				h = h[1],
				m = l - k,
				n = h - g,
				d = 0 === m && 0 === n ? 0 : (m * (d - k) + n * (e - g)) / (m * m + n * n || 0);
			0 >= d || (1 <= d ? (k = l, g = h) : (k += d * m, g += d * n));
			return [k, g]
		},
		Cl: function(b) {
			for(var c = b.length, d = 0, e = b[c - 1], g = e[0], e = e[1], h, k, l = 0; l < c; l += 1) k = b[l], h = k[0], k = k[1], d += (h - g) * (k + e), g = h, e = k;
			return 0 < d
		},
		mf: function(b, c, d) {
			var e = b[0];
			b = b[1];
			var g = !1,
				h, k, l, m, n = c.length,
				p = 0;
			for(m = n - 1; p < n; m = p, p += 1) {
				var q = !1;
				h = c[p][0];
				k = c[p][1];
				l = c[m][0];
				m = c[m][1];
				if(h === e && k === b || l === e && m === b) return d ? !0 : !1;
				if(k < b === m >= b) {
					h = (l - h) * (b - k) / (m - k) + h;
					if(e === h) return d ? !0 : !1;
					q = e < h
				}
				q && (g = !g)
			}
			return g
		}
	};
	var Oc = {
		Pixel: V.K,
		LngLat: V.O,
		Size: V.Yb,
		Bounds: V.Qc,
		PixelBounds: V.Td,
		event: $,
		Panorama: V.dN,
		PanoramaMarker: V.eN,
		Map: Bc,
		View2D: tc,
		GroundImage: wc,
		Marker: Z,
		ImageMarker: rc.W1,
		Text: rc.g2,
		Icon: Lc,
		MarkerShape: Mc,
		Polyline: yc,
		Polygon: zc,
		Circle: xc,
		ContextMenu: uc,
		InfoWindow: vc,
		Buildings: Gc,
		TileLayer: Y,
		ImageLayer: Hc,
		VectorLayer: Fc,
		MassMarks: Ic,
		CANVAS: "canvas",
		DOM: "dom"
	};
	Oc.plugin = Oc.service = Bc.prototype.plugin;
	Oc.TileLayer.Satellite = Y.uC;
	Oc.TileLayer.RoadNet = Y.sC;
	Oc.TileLayer.Traffic = Y.wC;
	Oc.Panorama.Events = $;
	Oc.TileLayer.PanoramaLayer = Y.Y1;
	Oc.UA = {
		ie: V.j.rn,
		ielt9: V.j.pd,
		ielt11: V.j.lY,
		mobile: V.j.U,
		android: V.j.Lf,
		ios: V.j.vJ
	};
	Oc.User = {
		key: V.k.key
	};
	window.AMap = Oc;
	window.AMap.BuryPoint = V.BuryPoint;
	window.AMap.Class = V.W;
	if("undefined" !== typeof arguments && arguments.callee) try {
		var oc = window.localStorage["_AMap_" + V.sd];
		V.j.Jt && window.localStorage && ((oc) && JSON.parse(oc).version === V.k.ji || window.localStorage.setItem("_AMap_" + V.sd, JSON.stringify({
			script: "(" + arguments.callee + ")()",
			version: V.k.ji
		})))
	} catch(Pc) {};
	window.AMap.convertFrom = function(b, c, d) {
		V.a.add("AMap", "convertFrom", c);
		var e = V.k.gc + "/v3/assistant/coordinate/convert";
		b = V.g.ha(b);
		var g = [];
		if(b instanceof Array) {
			for(var h = 0, k = b.length; h < k; h += 1) g.push(b[h] + "");
			g = g.join(";")
		} else g = b + "";
		c = ["key=" + V.k.key, "s=rsv3", "locations=" + g, "coordsys=" + (c || "gps")];
		e += 0 < c.length ? "?" + c.join("&") : "";
		e = new V.na.za(e, {
			callback: "callback"
		});
		e.e("complete", function(b) {
			if("1" === b.status) {
				b = b.locations.split(";");
				for(var c = 0; c < b.length; c += 1) {
					var e = b[c].split(",");
					b[c] =
						new AMap.LngLat(e[0], e[1])
				}
				d && "function" === typeof d && d("complete", {
					info: "ok",
					locations: b
				})
			} else d && "function" === typeof d && d("error", b.info)
		}, this);
		e.e("error", function(b) {
			d && "function" === typeof d && d("error", b.info)
		}, this)
	};
	_jsload_('http', 'V.na=V.na||{}; V.na.cv=V.W.extend({oa:[V.ca],B:function(b,c){this.G={callback:"cbk",type:"json",charset:"utf-8"};c=c||{};V.g.bb(this,c);this.url=b;this.send(b,c.xd,c.cW)},send:function(b){var c=V.f.create("script");c.type="text/javascript";c.charset=this.G.charset;var d=this;V.j.pd?c.onreadystatechange=function(){"loaded"!==this.readyState&&"complete"!==this.readyState||d.l("complete")}:(c.onload=function(){d.l("complete")},c.onerror=function(){d.l("error",{status:0,info:"service error",url:b})});c.src=b;document.getElementsByTagName("head")[0].appendChild(c)}});V.na.za=V.na.cv.extend({BV:function(){if(V.g.CL)return V.g.Bu.push(this),!0},P_:function(){this.l("error",{info:"TIME_OUT_A"})},send:function(b,c,d,e){function g(){window[h]=null;try{window[h]=null}catch(b){}k.onerror=null;k.parentNode&&k.parentNode.removeChild(k)}if(!this.G.Ap||!this.BV()){b=encodeURI(b);var h=this.G.fun;if(!h||window[h])h=V.g.EI("jsonp_",6)+"_";var k=document.createElement("script");k.type="text/javascript";k.charset="utf-8";k.async=!0;var l=this;V.j.pd||(k.onerror=function(){g(); l.l("error",{info:"REQUEST_FAILED",url:b})});window[h]=function(b){g();if(l.G.callbackFunction)l.G.callbackFunction.call(l.G.context,b);else if(3E4===b.errcode&&b.data)V.g.CL=!0,V.Qa.load("AMap.AntiCrabFrame",function(){V.g.Ap||(V.g.Ap=new V.EM);V.g.Bu.push(l);V.g.Ap.open(l.G.xd,b.data.host,l.IA||"",l.url)});else{if(b instanceof Array||"string"===typeof b)b={data:b};b.J3=h;l.l("complete",b)}};c="?";-1!==b.indexOf("?")&&(c="&");c=b+c+this.G.callback+"="+h;if(-1!==b.indexOf(V.k.gc+"/v3")||-1!==b.indexOf("yuntuapi.amap.com/datasearch"))c+= "&platform=JS&logversion=2.0&sdkversion="+V.k.Yx,c+="&appname="+V.k.al;c+="&csid="+this.p1();if(d=this.G.kt){var m=[],n;for(n in d)d.hasOwnProperty(n)&&(m.push(n+"="+d[n]),c+="&"+n+"="+encodeURIComponent(d[n]));l.IA=m.join("&")}k.src=e?c+"&rereq=true":c;V.na.za.BD||(V.na.za.BD=document.getElementsByTagName("head")[0]);V.na.za.BD.appendChild(k)}},p1:function(){var b="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");return function(c,d){var e=[],g;d=d||b.length;if(c)for(g=0;g< c;g++)e[g]=b[0|Math.random()*d];else{var h;e[8]=e[13]=e[18]=e[23]="-";e[14]="4";for(g=0;36>g;g++)e[g]||(h=0|16*Math.random(),e[g]=b[19==g?h&3|8:h])}return e.join("")}}()});window.AMap.Http={};window.AMap.Http.JSONP=V.na.za;V.na.XMLHttpRequest=V.na.cv.extend({send:function(b,c,d){var e=this.K1=new XMLHttpRequest,g=this;e.onreadystatechange=function(){4===e.readyState&&200===e.status?g.l("complete",{url:b,data:e.responseText}):404===e.status&&(e.abort(),g.l("error",{url:b,data:"404"}))};e.open(c||"GET",b);"POST"===c&&e.setRequestHeader("Content-type","application/x-www-form-urlencoded");e.send(d||void 0)},abort:function(){this.K1.abort()}}); ', true),
	_jsload_('map', 'V.ki=V.W.extend({B:function(b,c,d,e){this.start=b;this.end=c;this.transition=d;this.precision=e||0;this.ik=!1;return this},Sl:function(b){this.Fg=+new Date;this.frames=0;this.xe=b;this.startTime=+new Date;this.ik=!0;this.hH=V.g.Fe(this.update,this,!1)},update:function(){this.hH=V.g.Fe(this.update,this,!1);this.frames+=1;var b=+new Date,c=b-this.startTime,c=this.transition?this.transition(this.start,this.end,c,this.frames,b-this.Fg):null;"number"===typeof c&&Math.abs(c-this.end)<this.precision&&(this.stop(), c=this.end);this.Fg=b;this.qq.call(this.xe||this,c)},stop:function(b){V.g.dl(this.hH);b&&this.update();this.ik=!1}});V.ki.Easing={Linear:{None:function(b){return b}},Bounce:{In:function(b){return 1-(b<1/2.75?7.5625*b*b:b<2/2.75?7.5625*(b-=1.5/2.75)*b+0.75:b<2.5/2.75?7.5625*(b-=2.25/2.75)*b+0.9375:7.5625*(b-=2.625/2.75)*b+0.984375)},Out:function(b){return V.ki.Easing.Bounce.In(1-b)}},Cubic:{In:function(b){return 1-b*b*b},Out:function(b){b=1-b;return 1-b*b*b}}};V.zd=V.W.extend({oa:[V.ca,V.gd,V.$J],B:function(b,c){this.Ca=c;this.Ag=this.Hg=this.dg=!1;this.D=b;this.gR();this.uY();this.Lt=new V.J.canvas.zd(this);this.P("size",c);this.P("zooms",c);this.P("limitBounds",c);this.P("view",c);this.P("nolimg",c,!0);this.P("mapNumber",c,!0);this.P("lang",c,!0);this.P("features",c,!0);this.P("styleID",c,!0);this.P("iconsID",c,!0);this.P("businessIconsID",c,!0);this.P("forceBig",c,!0);this.P("mode",c,!0);this.P("showBuildingBlock",c,!0);this.P("mapStyle",c);this.P("labelzIndex", c,!0);V.j.eg&&(this.Tc=new V.V.vg(new Y({zIndex:c.get("labelzIndex"),visible:!1}),this),c.labelsLayer=this.Tc.Ua,this.Tc.Ua.e("complete",this.To,this,!0),this.Tc.Qo=this.Tc.Ft=!0);this.P("isHotspot",c,!0);this.P("layers",c);this.P("overlays",c);this.P("infos",c,!0);this.P("contextmenus",c,!0);this.P("coordsBound",c);this.P("controls",c);this.P("bounds",c);this.P("draw",c);this.ld("zoomAndCenter destroy defaultCursor jogEnable animateEnable baseRender overlayRender 3rdpartyDataEnable".split(" "),c); this.ld("rotateEnable dragEnable keyboardEnable doubleClickZoom scrollWheel zoomEnable touchZoom".split(" "),c,!0);this.get("jogEnable")?this.gq=!0:this.gq=!1;this.HQ();this.NQ();this.JQ();this.P("resizeEnable",c);this.Ca.map=this;var d=this.get("size"),d=d.width*d.height/65536;V.j.Jc&&3<d&&(this.nH=!0);this.qL()},labelzIndexChanged:function(){this.Tc&&this.Tc.set("zIndex",this.get("labelzIndex"))},mapStyleChanged:function(){if(V.j.eg){var b=this.get("mapStyle");this.DL(V.k.xg[b]||V.k.xg["default"])}}, DL:function(b){this.D.style.background=b},getTargetLevel:function(){var b=this.get("targetLevel",null,!0);b||(b=this.get("zoom"));return b},resizeEnableChanged:function(){},XV:function(){var b;if(this.get("center")instanceof V.O){b=new V.Qc(-180,-85,180,85);var c=this.Ub(b.bh());b=this.Ub(b.Sj());this.ov={fe:c.x,Vc:c.y,Od:b.x,bd:b.y}}else b=this.get("limitBounds"),this.ov={fe:b[0],Vc:b[1],Od:b[2],bd:b[3]}},DV:function(){var b=this.get("limitBounds"),c=this.get("bounds");c.hb.I>c.ab.I&&(c.ab.I+=360); if(!b.contains(c)){var d=this.get("center").Tb();b.Be()<c.Be()?d.I=b.Ye().I:(b.hb.I>c.hb.I&&(d.I+=b.hb.I-c.hb.I),b.ab.I<c.ab.I&&(d.I+=b.ab.I-c.ab.I));b.ze()<c.ze()?d.M=b.Ye().M:(b.hb.M>c.hb.M&&(d.M+=b.hb.M-c.hb.M),b.ab.M<c.ab.M&&(d.M+=b.ab.M-c.ab.M));return d}},HC:function(){this.ov||this.XV();return this.ov},wx:function(){var b=this.nB;this.Ca.refreshSize();var c=this.get("size");c&&b&&!c.Hb(b)&&(this.nB=c,this.xu=!0,this.set("display"),this.rL(c),this.get("resizeEnable")&&this.ua("resize",{rZ:b, nK:c}))},SF:function(){var b=this;b.wx();b.tx=setTimeout(function(){b.SF()},200)},NO:function(){this.tx&&(clearTimeout(this.tx),this.tx=null)},gR:function(){this.nB=this.Ca.getSize();if(V.j.pd||V.j.D1&&V.j.vJ||V.j.aZ)this.SF();else{var b=this;V.w.NU(this.D,function(c){b.wx(c)})}},viewChanged:function(b){if(b=this.get("view"))this.view=new V.yN(b,this)},uY:function(){var b=this.D;V.f.pb(b,"amap-container");var c={};c.qd=V.f.create("div",b,"amap-maps");this.Ek=V.f.create("div",b);this.Ek.style.display= "none";c.Ej=V.f.create("div",c.qd,"amap-drags");c.V=V.f.create("div",c.Ej,"amap-layers");c.Ea=V.f.create("div",c.Ej,"amap-overlays");c.controls=V.f.create("div",b,"amap-controls");c.dA=V.f.create("a",b,"amap-logo");var d=window.location.host;-1===d.indexOf("amap.com")&&-1===d.indexOf("gaode.com")&&(c.dA.href=V.j.U?"http://m.amap.com":"http://gaode.com",c.dA.target="_blank");V.f.create("img",c.dA).src=V.j.Jc?this.Ca.G.logoUrlRetina:this.Ca.G.logoUrl;c.Hh=V.f.create("div",b,"amap-copyright");c.Hh.style.display= "none";350<V.f.Yp(this.D).width&&(c.Hh.innerHTML=this.Ca.G.copyright,c.Hh.ZJ=V.f.create("span",c.Hh,"amap-mcode"),this.WA());this.Xa=c},WA:function(){var b=this.get("layers");if(b){for(var c=-1,d="",e=0;e<b.length;e+=1){var g=b[e].get("mapNumber"),h=b[e].getzIndex();g&&h>c&&b[e].get("visible")&&(d=g,c=h)}this.set("mapNumber",d);d&&this.Xa.Hh.ZJ&&(this.Xa.Hh.ZJ.innerHTML="- "+d+"\\u53f7");return d}},To:function(){if(!this.Iy&&!this.Ca.zb){for(var b=this.get("layers"),c=this.get("zoom"),d=0;d<b.length;d+= 1){var e=b[d].get("zooms");if(!(!e||c>e[1]||c<e[0]||!b[d].get("visible")||b[d].V&&b[d].V.ra&&0==b[d].V.ra.length||b[d].V&&b[d].V.zb))return}this.Ca.zb=!0;this.set("display");V.vd.Rp&&(V.vd.fX=new Date-V.vd.Rp);V.g.Fe(function(){this.l("complete");this.Ca&&this.Ca.eh&&this.Ca.eh.ux()},this)}},layersChanged:function(){this.Ba=this.Ba||[];for(var b=this.get("layers"),c=this.Ba.length-1;0<=c;c-=1)this.Ba[c]===this.Vb||this.Ba[c]===this.gk||this.Ba[c].Qo||this.Ba[c].Ua.Qo||-1!==V.g.indexOf(b,this.Ba[c].Ua)|| (this.Ba[c].Ee(),this.Ba[c].Vl&&this.Ba[c].Vl.Ee(),this.Ba[c].Ua.C("complete",this.To,this),this.Ba=V.g.Ni(this.Ba,c));for(var d=!1,e=!0,g=this.get("labelzIndex"),c=0;c<b.length;c+=1){if(b[c].Rg)-1===V.g.indexOf(this.Ba,b[c].V)&&this.Ba.push(b[c].V);else{var h=this.Nf(b[c]);h&&(this.Ba.push(h),b[c].Rg=!0,b[c].V=h);b[c].e("complete",this.To,this,!0)}b[c].ck&&b[c].get("visible")&&!b[c].ss&&(d=!0,!1==b[c].get("detectRetina")&&(e=!1),g=b[c].get("textIndex")||g)}b=V.g.indexOf(this.Ba,this.Tc);d?(-1=== b&&this.Ba.push(this.Tc),this.Tc.pa=e&&V.j.pa,this.Tc.Ns(this.get("mapStyle")||"normal"),this.Tc.set("zIndex",g),this.Tc.set("visible",!0),this.Ca.aq=!0,this.Ca.get("isHotspot")?this.Tc.DZ():this.Tc.By()):(this.Tc&&(this.Tc.set("visible",!1),this.Ca.aq=!1,this.Tc.By()),this.Ca.aq=!1);this.Ca.isHotspotChanged();this.set("display",0);this.WA()},isHotspotChanged:function(){this.layersChanged()},controlsChanged:function(){var b=this.get("controls"),c,d;if(b.add&&0<b.add.length)for(;0<b.add.length;)c= b.add.shift(),(d=c.Wm||c.addTo)&&d.call(c,this.Ca,this.Xa.controls);else if(b.remove&&b.remove.length)for(;0<b.remove.length;)c=b.remove.shift(),(d=c.Jn||c.removeFrom)&&d.call(c,this.Ca,this.Xa.controls)},SG:function(){if(!this.Iy){var b=this;this.VG=!1;b.Vb||(b.Vb=new V.V.kd(new Fc,b),b.Vb.ei=36,b.Vb.fi=36,b.Vb.set("zIndex",120),b.Ba.push(b.Vb),b.Vb.it=!0);for(var c=b.get("overlays"),d=[],e=0;e<b.Db.length;e+=1)-1===V.g.indexOf(c,b.Db[e].Zb)&&(b.Db[e].Zb instanceof vc||b.Db[e].Zb instanceof uc?b.Db[e].Ee(): (b.Vb&&b.Db[e]instanceof V.Ea.Sd?(b.Vb.kh=V.g.vW(b.Vb.kh,b.Db[e].F),b.Vb.bL([b.Db[e].F])):b.gk&&b.gk.bL([b.Db[e].F]),b.Db[e].F.S?(V.f.remove(b.Db[e].F.S),b.Db[e].F.S=null):b.Db[e].F.ga&&(V.f.remove(b.Db[e].F.ga.Hc),V.f.remove(b.Db[e].F.ga.fb),b.Db[e].F.ga=null),b.Db[e].hh&&b.Db[e].hh.stop(),b.Db[e].Zb.Rg=!1,b.Db[e].Zb.si.map=null,b.Db[e].Zb.Ea=null,b.Db[e].Zb=null,b.Db[e].F.AW(),b.Db[e].F=null,b.Db[e].am(),b.Db[e].si=null,b.Db[e].Ji(),b.Db[e].map=null),d.push(b.Db[e]));for(e=0;e<d.length;e+=1)b.Db= V.g.Ni(b.Db,V.g.indexOf(b.Db,d[e]));var g=[],h=[];V.g.b0(function(c){if(!c.Rg&&c.Si){var d=c.Ea||b.mV(c);d&&(b.Db.push(d),d instanceof V.Ea.sh||d instanceof V.Ea.Ru?d.rK(b):d instanceof V.Ea.Sd?g.push(d.F):h.push(d.F),c.Rg=!0)}},c);g.length&&b.Vb.Zk(g);h.length&&(b.gk||(b.gk=new V.V.kd(new Fc,b),b.gk.set("zIndex",110),b.Ba.push(b.gk)),b.gk.Zk(h));b.set("display",0)}},overlaysChanged:function(){this.Db=this.Db||[];this.get("overlays")&&0===this.get("overlays").length?this.SG():this.VG||(V.g.Fe(this.SG, this),this.VG=!0)},contextmenusChanged:function(){var b=this.get("contextmenu");if(b){var c=this;V.Qa.load("overlay",function(){c.$s=new V.Ea.Ru(b,c);c.set("display",0)})}},infosChanged:function(){var b=this.get("infos");if(b){this.Vh=this.Vh||{};var c,d=this;V.Qa.load("overlay",function(){for(var e in b)b.hasOwnProperty(e)&&(c=b[e],d.Vh[e]=d.Vh[e]||new V.Ea.sh(c,d))})}},mV:function(b){var c=null;if(b instanceof Z)c=new V.Ea.Sd(b,this);else if(b instanceof uc)c=new V.Ea.Ru(b,this);else if(b instanceof vc)c=new V.Ea.sh(b,this);else{var d=["overlay"];"d"===this.get("overlayRender")?(d.push("dvector"),V.j.Ri?d.push("svg"):d.push("vml")):d.push("cvector");if(!this.s1&&!V.Qa.GJ(d)){var e=this;V.Qa.bf(d,function(){this.s1=!0;e.overlaysChanged()});return}b instanceof zc?c=new V.Ea.Xc(b,this):b instanceof yc?c=new V.Ea.hd(b,this):b instanceof xc&&(c=new V.Ea.li(b,this))}return c},X2:function(){function b(){}var c=new V.V.kd,d=[],e=new V.O(116.405467,39.907761);new V.style.jd.cr;for(var g=0;100>g;g+=1)for(var h= 0;100>h;h+=1){var k=new V.O(e.I+0.02*h,e.M+0.02*g),k=new V.Rd({name:"point"+(100*g+h),map:this,va:new V.ba.oe(this.Ub(k))});d[100*g+h]=k;k.e("hover",b,k)}c.Zk(d);this.Ba.push(c)},Wa:function(){},W2:function(b){var c=new V.V.kd,d=[],d=(new V.RM({map:this})).du(b);c.Zk(d);this.Ba.push(c);this.set("display",0)},Nf:function(b){b=b.Nf(this);if(!b)return null;if(b.length){var c=this;V.Qa.bf(b,function(){c.layersChanged()})}else return b;return null},c4:function(){return this.Xa},l5:function(){this.set("display", 0)},displayChanged:function(b){this.qL(b)},qL:function(b){if(b)if(V.g.dl(this.ju),V.j.Lf){var c=this;setTimeout(function(){c.he()},0)}else this.he();else this.co||(this.ju=V.g.Fe(this.he,this),this.co=!0)},he:function(){if(!this.Iy){this.l("render");this.co=!1;var b={};if(this.Ba){for(var c=[],d=0,e=this.Ba.length;d<e;d+=1)c.push(this.Ba[d]),this.Ba[d].Vl&&c.push(this.Ba[d].Vl);c.sort(function(b,c){return b.get("zIndex")>c.get("zIndex")?1:b.get("zIndex")===c.get("zIndex")?b.nv>c.nv?1:-1:-1});b.Ba= c;b.size=this.get("size");b.ee=this.get("mapStyle");c=V.j.pa?Math.min(window.devicePixelRatio||1,2):1;b.eV=15E5<b.size.width*b.size.height*c*c;b.U=V.j.U;b.la=this.view.bY();b.ee=this.get("mapStyle");b.qc=this.Ag;b.yd=this.dg;b.Sf=this.Hg;b.AB=this.Hg&&V.j.U;b.oM=V.j.U&&this.dg;b.Hu=V.j.U&&this.Ag;this.Hu=b.Hu;b.io=b.la.zoom>this.get("targetLevel");b.kZ=!0;b.ma=this.get("coordsBound");b.nH=this.nH;for(var c=!1,g,d=!1,e=0;e<this.Ba.length;e+=1)this.Ba[e].Zh&&this.Ba[e].get("visible")&&b.la.zoom<=this.Ba[e].get("zooms")[1]&& (b.ZA=!0),this.Ba[e].Tj().Jc&&(c=!0);for(e=0;e<this.Ba.length;e+=1)this.Ba[e].Ua.mH&&b.ZA&&(!this.dg&&this.Ba[e].Ua.get("visible")&&(g=this.Ba[e].Ua.mH(),g.w4=1,g.zoom=b.la.zoom),d=!0);d?g&&this.Cb!==g&&(this.Cb=g):this.Cb=[];b.Cb=this.Cb;b.Jc=c;b.scale=Math.pow(2,b.la.zoom-b.la.yc);this.Sp=b;this.Lt.he(b)}}},a4:function(){return this.Lt},uX:function(){var b=[],c=this.get("controls").sc,d;for(d in c)c[d].mn&&c[d].mn()&&b.push(c[d].mn());return b},destroyChanged:function(){this.Iy=1;this.Q={};this.Tc&& (this.Tc.Ua.C("complete",this.To,this,!0),this.Tc.Ee(),this.Ba=V.g.Ni(this.Ba,V.g.indexOf(this.Ba,this.Tc)));this.JT&&clearTimeout(this.JT);this.rT();this.BR();this.bx&&this.bx();this.rU();this.am();this.Ca=this.Ca.map=null;this.D=this.D.vv=null;this.Kd&&(this.Kd.stop(),this.Kd=null);this.Oc&&(this.Oc.stop(),this.Oc=null);this.Rb&&(this.Rb.stop(),this.Rb=null)},rU:function(){var b=this.D;this.NO();V.w.PV(b);V.f.aL(b);this.Ek=null;V.f.wb(b,"amap-container");this.Xa=null},jogEnableChanged:function(){this.get("jogEnable")? this.gq=!0:this.gq=!1},drawChanged:function(){var b=this,c,d,e=this.get("draw");if(e){this.Qi||(this.Qi=[]);c=0;for(d=this.Qi.length;c<d;c+=1)this.Qi[c].p_();V.Qa.load("interaction",function(){var c=new V.X1({type:e,V:b.gk},b);b.Qi.push(c);b.loaded=!0})}else if(this.Qi)for(c=0,d=this.Qi.length;c<d;c+=1)this.Qi[c].p_(),this.Qi[c].l3(),this.C("click",this.Qi[c].o4,this)}});V.zd.Mc({HQ:function(){this.Vo=!1;V.j.ed&&this.lO();V.j.U||this.iO()},rT:function(){V.j.ed&&this.GR();V.j.U||this.CR()},rotateEnableChanged:function(){this.pu=this.get("rotateEnable");V.j.ed&&(this.pu?this.fV():this.qZ())},zoomEnableChanged:function(){this.get("zoomEnable")?(V.j.ed&&this.oH(),V.j.U||this.kO()):(V.j.ed&&this.pK(),V.j.U||this.FR())},mousewheelChanged:function(){},XJ:function(b){b&&this.XY(b.Vk)},XY:function(b){this.Vo=b},vM:function(){this.Vo=!1},pg:function(b,c){var d,e={};b||(b=window.event); var g=V.w.hg(b,this.Xa.qd);V.j.ed&&("touchend"!==b.type?this.Q.RE=g:g=this.Q.RE);e.Pb=g;e.rg=this.Zs(g);e.af=this.Jj(g);(g=!1!==this.Vo?this.Vo?[this.Vo]:null:this.LP(e.rg))&&0<g.length&&g[0].wj&&(d=g[0].wj,e.Vk=g[0]);d||(d=this);e.Yd=d;e.o2=b.altKey;e.ctrlKey=b.ctrlKey;e.button=void 0==b.button?0:b.button;!c&&b.preventDefault&&b.preventDefault();return e},GE:function(b){return b&&b!==this&&b!==document},WF:function(){if((!this.Wg||this.Wg.ik)&&this.Q.Mp&&this.Q&&this.Q.sf){var b=this.Q.Mp.Pb.Ja(this.Q.sf); b.x||b.y?(this.Q.Hg=!0,this.Q.Dk||(this.Q.Np.l("dragstart",this.Q.$H),this.Q.Dk=!0),this.Q.Np.l("dragging",this.Q.Mp),this.Q.sf=this.Q.Mp.Pb):this.Q.Hg=!1}},z0:function(b){for(var c=[],d=0;d<b.length;d+=1)b[d]&&(c=c.concat(b[d]));return c},tq:function(b,c){return b&&c&&(b.x-c.x)*(b.x-c.x)+(b.y-c.y)*(b.y-c.y)<(V.j.U?18:10)},LP:function(b){var c,d=this;this.Ba.sort(function(b,c){return b.get("zIndex")>c.get("zIndex")?-1:1});this.Lt.fz(b,this.Ba,function(b){c=b;c=d.z0(c)},function(){c=[]});return c}});V.zd.Mc({NQ:function(){this.e("moveend",this.yK,this);V.j.Lf&&(V.j.EB||V.j.ky)&&this.e("zoomend",this.OB,this);this.e("movestart",this.zK,this);this.e("zoomstart",this.FK,this);this.e("zoomend",this.EK,this);this.Bv()},FK:function(){this.dg=!0},EK:function(){this.dg=!1;this.set("display")},BR:function(){this.C("moveend",this.yK,this);V.j.Lf&&(V.j.EB||V.j.ky)&&this.C("zoomend",this.OB,this);this.C("movestart",this.zK,this);this.C("zoomstart",this.FK,this);this.C("zoomend",this.EK,this);this.DR()}, yK:function(b){this.Hg=!1;this.rL();!b.HJ&&this.get("limitBounds")?(b=this.DV())&&!b.Hb(this.get("center"))?this.vu(this.get("zoom"),b,!1,!0):this.ua("moveend"):this.ua("moveend");this.set("display")},zK:function(){this.Hg=!0},dragEnableChanged:function(){(this.jt=this.get("dragEnable"))?this.Av():this.ax()},ua:function(b,c){var d;c&&(d=c.nK?{type:b,newsize:c.nK,oldsize:c.rZ}:{type:b,pixel:c.Pb,target:this.Ca,lnglat:c.af});this.Ca.l(b,d)},Bv:function(){this.e("click",this.nF);this.e("dblclick",this.pF); V.j.ed&&this.nO();V.j.U||this.jO()},DR:function(){this.C("click",this.nF);this.C("dblclick",this.pF);V.j.ed&&this.HR();V.j.U||this.ER()},bs:function(b,c){var d=this.getTargetLevel(),d=0<c?Math.floor(d)+1:Math.ceil(d)-1,d=Math.min(Math.max(d,this.get("zooms")[0]),this.get("zooms")[1]);d===this.get("zoom")||this.Oc&&this.Oc.ik&&d===this.Oc.end||this.Qu(d,!1,b)},nF:function(b){this.ua("click",b)},pF:function(b){this.get("doubleClickZoom")&&this.get("zoomEnable")&&this.bs(b.rg,1);this.ua("dblclick",b)}, I2:function(b){this.bs(b.L5,b.M5);this.ua("touchend",b)},Av:function(){this.jt&&(this.e("dragstart",this.sF),this.e("dragging",this.qF),this.e("dragend",this.rF))},ax:function(){this.jt||(this.C("dragstart",this.sF),this.C("dragging",this.qF),this.C("dragend",this.rF))},sF:function(b){this.XJ(b);this.Ag=!0;this.Q.aI=b.Pb.x;this.Q.bI=b.Pb.y;this.Kd&&(this.Kd.stop(),this.lt(!0));this.ua("dragstart");this.ua("movestart");this.l("movestart",b)},qF:function(b){var c=this.Q,d=b.Pb.x-c.aI,e=b.Pb.y-c.bI; if(e||d){this.Q.Hg=!0;c.aI=b.Pb.x;c.bI=b.Pb.y;b=d;var c=e,g=this.pu?this.rotation:0;g&&(g*=Math.PI/180,b=d*Math.cos(g)+Math.sin(g)*e,c=-Math.sin(g)*d+Math.cos(g)*e);b=this.get("centerCoords").Ja((new V.K(b,c)).tc(this.N));(c=this.DH(b))&&(e=Math.round(this.Li(c).Ja(this.Li(b)).y));V.j.Lf&&this.Wi(this.Xa.Ej,d,e);b.x=(b.x+V.g.Va)%V.g.Va;this.set("centerCoords",b,!0);this.set("center",this.Se(b),!0);this.gq&&(this.Fg?(b=new Date,this.Gk=100<b-this.Fg?new V.K(0,0):new V.K(d,e),this.Pr=b-this.Fg,this.Fg= b):this.Fg=new Date);this.ua("dragging");this.ua("mapmove");V.j.Lf||this.set("display",0)}else this.Q.Hg=!1,this.Gk=null},Wi:function(b,c,d){if(b&&!(1>Math.abs(c)&&1>Math.abs(d))){var e=parseFloat(b.style.top)||0,g=parseFloat(b.style.left)||0,h="";this.get("rotation")&&(h=V.f.nk[V.f.Bd]+":rotate("+this.rotation+"deg);overflow:visible;");b.style.cssText="position:absolute;top:"+(e+d)+"px;left:"+(g+c)+"px;"+h}},DH:function(b){var c=this.HC(),d=this.nB.height*this.N/2;return b.y<c.Vc+d?(b.y=c.Vc+d,b): b.y>c.bd-d?(b.y=c.bd-d,b):null},rF:function(){this.vM();100<new Date-this.Fg&&(this.Gk=null);this.Q.sf=null;this.Ag=!1;this.ua("dragend");if(this.gq&&this.Gk)if(this.Q.Hg){var b=this.Gk,c=new V.K(0,0),d=b.ye(c);12<d/this.Pr&&(b.x*=12/d,b.y*=12/d);this.Kd=new V.ki(b,c,function(b,c,d){return 400<=d?c:b.tc(1-d/400).floor()},1);this.Kd.qq=function(b){if(2>Math.abs(b.x)&&2>Math.abs(b.y))this.Kd.stop(),this.l("moveend"),this.lt(),this.Pr=this.Gk=this.Fg=null;else{var c=b.x,d=b.y,k=this.pu?this.rotation: 0;k&&(k*=Math.PI/180,c=b.x*Math.cos(k)+Math.sin(k)*b.y,d=-Math.sin(k)*b.x+Math.cos(k)*b.y);c=this.get("centerCoords").Ja((new V.K(c,d)).tc(this.N));d=this.DH(c);k=b.y;d&&(k=Math.round(this.Li(d).Ja(this.Li(c)).y));this.Wi(this.Xa.Ej,b.x,k);c.x=(c.x+V.g.Va)%V.g.Va;this.set("centerCoords",c,!0);this.set("center",this.Se(c),!0);this.ua("mapmove")}};this.Kd.Sl(this)}else this.l("moveend"),this.lt(),this.Pr=this.Gk=this.Fg=null;else this.l("moveend"),this.lt(),this.Pr=this.Gk=this.Fg=null},F5:function(){if(!this.Q.refresh){var b= this;this.Q.refresh=setInterval(function(){b.set("display",1)},V.j.U?400:50)}},OB:function(){if(V.j.Lf&&(V.j.EB||V.j.ky)){for(var b=this.Xa.V.childNodes,c=0;c<b.length;c+=1){var d=b[c];d instanceof HTMLCanvasElement&&(d.width=0);"amap-e"===d.className&&(d.style.height="0")}for(c=0;c<this.Ba.length;c+=1)d=this.Ba[c],"undefined"!==typeof AMap.IndoorMap&&d instanceof AMap.IndoorMap&&(d.Wk&&(d.Wk.width=0),d.Sm&&(d.Sm.width=0))}},lt:function(b){this.Q.refresh&&(clearInterval(this.Q.refresh),this.Q.refresh= null);b||(this.OB(),this.set("display",0))},rL:function(b){this.set("refresh",b)}});V.zd.Mc({setZoomSlow:function(b){this.vu(b,null,!this.get("animateEnable"))},setPanTo:function(b){this.vu(null,b,!this.get("animateEnable"))},zoomAndCenterChanged:function(b){var c=b[0];c<this.get("zooms")[0]&&(c=this.get("zooms")[0]);c>this.get("zooms")[1]&&(c=this.get("zooms")[1]);this.vu(c,b[1],b[2]||!this.get("animateEnable"))},zoomChanged:function(){this.N=this.get("resolution");this.l("closeOverlays");this.set("display",0)},rotationChanged:function(){this.rotation=this.get("rotation");this.set("display", 0)},centerCoordsChanged:function(){this.l("closeOverlays");this.set("display",0)}});V.zd.Su=V.W.extend({B:function(b){this.pc=b;this.Uk=["zooms","visible","opacity","zIndex"];this.Uo=!1;this.QO=this.pO();this.pc.e("zoomend",this.Fx,this);this.pc.e("moveend",this.Fx,this);this.Fx()},pO:function(){for(var b=[[69,2],[72,14],[89,4],[96,4],[193,2],[196,14],[213,4],[220,4],[317,2],[320,14],[337,4],[344,4],[441,1],[444,14],[461,4],[468,4],[565,1],[568,14],[585,4],[592,4],[689,1],[692,14],[709,4],[716,4],[813,1],[816,14],[833,4],[840,4],[940,14],[957,4],[964,4],[1064,15],[1081,4],[1088, 4],[1188,16],[1205,4],[1212,4],[1312,21],[1336,4],[1436,21],[1460,4],[1560,21],[1584,4],[1684,21],[1708,4],[1808,21],[1832,4],[1932,21],[1956,4],[2056,21],[2080,4],[2180,21],[2204,4],[2304,21],[2328,4],[2428,21],[2452,4],[2552,22],[2576,4],[2676,22],[2700,4],[2800,22],[2824,4],[2924,22],[2948,4],[3048,22],[3072,4],[3172,22],[3196,4],[3295,23],[3320,4],[3418,24],[3444,4],[3541,26],[3568,4],[3664,27],[3692,4],[3788,27],[3816,4],[3912,32],[4036,32],[4160,32],[4285,31],[4394,4],[4409,31],[4517,5],[4531, 33],[4640,9],[4655,33],[4764,12],[4777,35],[4887,50],[5009,1],[5011,50],[5133,53],[5257,53],[5381,60],[5506,59],[5631,58],[5742,4],[5755,58],[5859,2],[5865,6],[5879,58],[5977,8],[5987,10],[5999,2],[6002,59],[6100,78],[6222,80],[6344,82],[6464,1],[6466,84],[6586,88],[6708,90],[6831,91],[6955,91],[7078,92],[7202,92],[7327,91],[7451,91],[7575,91],[7698,92],[7820,94],[7942,96],[8065,97],[8187,99],[8310,100],[8435,99],[8558,100],[8681,101],[8805,101],[8929,102],[9053,104],[9179,3],[9183,100],[9307,104], [9435,101],[9561,48],[9613,49],[9663,1],[9686,44],[9745,44],[9810,33],[9871,42],[9934,32],[9997,40],[10058,32],[10120,41],[10181,30],[10244,42],[10306,27],[10369,3],[10374,39],[10434,18],[10501,37],[10558,19],[10626,36],[10683,18],[10752,35],[10807,17],[10880,32],[10937,10],[10997,39],[11061,9],[11121,31],[11155,5],[11186,5],[11245,31],[11311,3],[11370,29],[11494,26],[11624,18],[11748,17],[11873,16],[11997,15],[12123,13],[12246,13],[12370,12],[12498,1],[12500,2]],c=[],d=0,e=b.length;d<e;d++)for(var g= b[d][0],h=g+b[d][1];g<h;g++)c[g]=1;return c},jR:function(b,c){var d=parseInt((b-73)/0.5),e=parseInt((c-3.5)/0.5);return 0>e||101<=e||0>d||124<=d?!1:1===this.QO[124*e+d]},ZN:function(){var b=this.pc.Ca.getBounds();if(b){for(var b=[b.Ye(),b.Xp(),b.Vp(),b.bh(),b.Sj()],c=0,d=b.length;c<d;c++)if(this.jR(b[c].KI(),b[c].II()))return!0;return!1}},Fx:function(){if(!this.lG){var b=this;b.lG=setTimeout(function(){b.lG=null;b.iP()},0)}},iP:function(){var b=this.RP();0<b.length&&10<=this.pc.get("zoom")&&!1=== this.ZN()?this.$T(b):this.uQ(b)},SO:function(b){if(b.ss)for(var c=0,d=this.Uk.length;c<d;c++)b.C(this.Uk[c],b.ss.Uw)},XT:function(b,c){this.SO(b);if(b.ss=c)for(var d=0,e=this.Uk.length;d<e;d++)b.e(this.Uk[d],c.Uw)},wG:function(b,c){c&&(c.rR=b);for(var d=0,e=b.length;d<e;d++)this.XT(b[d],c)},RP:function(){for(var b=this.pc.Ba,c=[],d=0,e=b.length;d<e;d++)b[d]!==this.Le&&b[d].Ua instanceof Y&&b[d].Ua.Qz()&&c.push(b[d]);return c},WT:function(b){var c=this;b.Uw=function(){b.dF||(b.dF=setTimeout(function(){b.dF= null;c.sR(b)},0))}},XO:function(b,c){for(var d=0,e=this.Uk.length;d<e;d++)b.set(this.Uk[d],c.get(this.Uk[d]))},sR:function(b){var c=b.rR;if(c&&c.length)for(var d=0,e=c.length;d<e;d++){if(!(c[d]instanceof V.V.vg)){this.XO(b,c[d]);break}}else console.warn("No moni layers")},$T:function(b){if(!this.Uo){this.Uo=!0;this.Le||(this.Le=new V.V.Cf(new Y.Su,this.pc),this.Le.ck=!1,this.Le.Qo=!0,this.WT(this.Le));var c=this.pc.Ba;0>c.indexOf(this.Le)&&c.push(this.Le);this.wG(b,this.Le);this.Le.Uw();this.ZT(); this.pc.layersChanged();this.pc.Ca.l("googleTileVisibleChanged",{display:!0})}},Bw:function(){return this.Uo},uQ:function(b){this.Uo&&(this.Uo=!1,this.wG(b,null),this.Le&&(this.Le.set("visible",!1),b=this.pc.Ba,V.g.Ni(b,b.indexOf(this.Le)),this.Le.Ee(),this.Le.Ua.C("complete",this.pc.To,this.pc),this.Le=null),this.tQ(),this.pc.layersChanged(),this.pc.Ca.l("googleTileVisibleChanged",{display:!1}))},XD:function(b,c,d){if(!b)return null;b=V.f.getElementsByClassName(c,d,b);return b.length?b[0]:null}, QP:function(b){var c=this.pc.Xa;if(c&&c.Hh){var d=this.XD(c.Hh,"google-copyright","span");!d&&b&&(d=V.f.create("span",c.Hh,"google-copyright"),d.innerHTML=" - Data &copy; Google");return d}},KG:function(b){var c=this.QP(b);c&&(c.style.display=b?"":"none");this.pc.Xa&&(c=this.XD(this.pc.Xa.Hh,"amap-mcode","span"))&&(c.style.display=b?"none":"")},ZT:function(){this.KG(!0)},tQ:function(){this.KG(!1)}});V.zd.Mc({JQ:function(){this.get("3rdpartyDataEnable")&&(this.lE=new V.zd.Su(this))},Bw:function(){return this.lE&&this.lE.Bw()}});V.yN=V.W.extend({oa:[V.ca,V.gd],B:function(b,c){this.view=b;this.map=c;this.P("zoom",b);this.P("rotation",b);this.P("size",c);this.P("resolution",b);this.P("crs",b);this.P("rotateEnable",c);b.P("centerCoords",this,!0);c.P("resolution",this);c.P("zoom",this);c.P("crs",this);c.P("resolution",this);c.P("centerCoords",this);c.P("rotation",this);c.P("center",this);this.P("center",b)},centerChanged:function(){this.set("centerCoords",this.map.Ub(this.get("center")))},centerCoordsChanged:function(){var b= this.map.HC(),c=this.get("centerCoords"),d=this.get("size").height*this.getResolution()/2;this.get("size");this.getResolution();this.get("center")instanceof V.O?c.x=(c.x+4.00750166855784E7)%4.00750166855784E7:0>c.x?c.x=0:c.x>b.Od&&(c.x=b.Od);c.y<b.Vc+d?c.y=b.Vc+d:c.y>b.bd-d&&(c.y=b.bd-d)},zoomChanged:function(){},rotationChanged:function(){},getResolution:function(b){return this.get("crs").Qh(b||this.get("zoom"))},bY:function(){return{zoom:this.get("zoom"),Gh:this.get("center"),Aa:this.get("centerCoords"), rotation:this.get("rotateEnable")&&parseInt(this.get("rotation"))||0,Qd:this.get("crs"),N:this.getResolution(),yc:Math.round(this.get("zoom")),zc:this.getResolution(Math.round(this.get("zoom")))}}}); ', true),
	_jsload_('anip', 'V.zd.Mc({Qu:function(b,c,d,e){function g(c){var e=this.Li(d);this.set("zoom",c);var g=this.Li(d).Ja(e),l=(this.pu?this.rotation:0)*Math.PI/180,e=g.x*Math.cos(l)+Math.sin(l)*g.y,g=-Math.sin(l)*g.x+Math.cos(l)*g.y;this.set("centerCoords",this.get("centerCoords").add((new V.K(e,g)).tc(this.N)));e&&g&&this.ua("mapmove");c===b&&Math.floor(b)===b&&(this.set("targetLevel",null),h&&(this.ua("zoomchange"),this.ua("zoomend")),k&&this.l("moveend"),this.l("zoomend"),this.Oc=null)}V.j.U&&(c=!0);b=b||this.get("zoom"); b=Math.min(Math.max(b,this.get("zooms")[0]),this.get("zooms")[1]);var h=b!==this.get("zoom"),k=!!d;this.Kd&&(this.Kd.stop(),this.Kd=null);d=d||this.get("centerCoords");var l;this.Rb&&this.Rb.ik&&(this.Rb.stop(),this.Rb.Az&&(e=!0),this.Rb.$p&&(l=!0),this.Rb=null,this.set("targetLevel",null));this.Oc&&this.Oc.ik&&(this.Oc.stop(),e=!0,this.Oc.$p&&(l=!0),this.Oc=null,this.set("targetLevel",null));h&&!e&&this.ua("zoomstart");k&&!l&&this.ua("movestart");this.l("zoomstart");c?g.call(this,b):(this.set("targetLevel", b),this.Oc=new V.ki(this.get("zoom"),b,null,0.02),this.Oc.Az=h,this.Oc.$p=k,this.Oc.transition=function(b,c,d){return d>=V.k.Hs?c:(c-b)*(1-Math.pow(1-d/V.k.Hs,4))+b},this.Oc.qq=g,this.Oc.Sl(this))},vu:function(b,c,d,e){b||(b=this.Rb?this.Rb.L0:this.get("targetLevel")||this.get("zoom"));c||(c=this.Rb?this.Rb.fM:this.get("center"));var g=b!==this.get("zoom"),h=!c.Hb(this.get("center")),k=!1,l=!1;this.Oc&&this.Oc.ik&&(this.Oc.stop(),k=!0,this.Oc.$p&&(l=!0),this.Oc=null,this.set("targetLevel",null)); this.Rb&&this.Rb.ik&&(this.Rb.stop(),this.Rb.Az&&(k=!0),this.Rb.$p&&(l=!0),this.Rb=null,this.set("targetLevel",null));this.Kd&&(this.Kd.stop(),this.Kd=null);if(g||h){if(!this.get("bounds").contains(c)||g&&V.j.U)d=!0;if(d)g&&(k||(this.l("zoomstart"),this.ua("zoomstart")),this.set("zoom",b),this.ua("zoomchange"),this.ua("zoomend"),this.l("zoomend")),h&&(l||e||(this.ua("movestart"),this.l("movestart")),this.set("center",c),this.ua("mapmove"),this.l("moveend",{HJ:e})),this.set("targetLevel",null);else{this.set("targetLevel", b);var m=b-this.get("zoom"),n=c.Ja(this.get("center"));this.Rb=new V.ki(1,0,null,0.001);this.Rb.Az=g;this.Rb.$p=h;this.Rb.fM=c;this.Rb.L0=b;this.Rb.transition=function(b,c,d){return Math.pow(1-Math.min(V.k.Hs,d)/V.k.Hs,2)};this.Rb.qq=function(d){if(0.02>d)this.Rb&&(this.Rb.stop(),this.Rb=null),g&&(this.set("zoom",b),this.ua("zoomchange"),this.ua("zoomend"),g=!1,this.l("zoomend")),h&&(d=c,this.set("center",d),this.l("mapmove"),this.l("moveend",{HJ:e})),this.set("targetLevel",null);else if(g&&this.set("zoom", b-m*d),h){d=c.Ja(n.tc(d));if(V.j.U){var k=this.qb(this.get("center")),l=this.qb(d);this.Wi(this.Xa.Ej,k.x-l.x,k.y-l.y);this.set("center",d,!0);this.set("centerCoords",this.Ub(d),!0)}else this.set("center",d);this.ua("mapmove")}this.set("display",1)};this.Rb.Sl(this);g&&!k&&(this.l("zoomstart"),this.ua("zoomstart"));!h||l||e||(this.l("movestart"),this.ua("movestart"))}}}}); ', true),
	_jsload_('layers', 'V.V={}; V.V.Af=V.W.extend({oa:[V.ca,V.gd],B:function(b,c){this.Ua=b;this.Pc=[3,18];this.nv=V.g.Ab(this);b&&this.ld(["opacity","visible","zIndex","zooms"],b);this.A=c;this.P("display",c)},Ee:function(){this.Zh&&this.By();if(V.wa&&V.wa.qk&&V.wa.qk.length){var b=V.g.indexOf(V.wa.qk,this);-1!==b&&(V.wa.qk=V.g.Ni(V.wa.qk,b))}if(b=this.lb){if(b.length)for(var c=0;c<b.length;c+=1)b[c].parentNode&&b[c].parentNode.removeChild(b[c]);else b.parentNode&&b.parentNode.removeChild(b);this.lb=null}this.Ua.Ee&&this.Ua.Ee();this.Ua.Rg= !1;this.Ua.V=null;this.am();this.J&&(this.J.XH(),this.J=null)},ua:function(b,c){this.Ua.l(b,c)},visibleChanged:function(){this.set("display",0)},zIndexChanged:function(){this.set("display",0)},jB:function(b){V.f.jk(b,this.opacity)},opacityChanged:function(){var b=this.get("opacity");this.opacity=Math.min(Math.max(0,b),1);if(b=this.lb)if(b.length)for(var c=0;c<b.length;c+=1)this.jB(b[c]);else this.jB(b)},rt:function(){var b=this.get("bounds");if(b){if(b instanceof V.Qc){var c=b.bh(),d=b.Sj(),e=this.A.Ub(new V.O(180, 0)).x,g=this.A.Ub(c),h=this.A.Ub(d),k=this.A.get("center");c.I>d.I?0<k.I?h.x+=e:g.x-=e:0<k.I?(0>c.I&&(g.x+=e),0>d.I&&(h.x+=e)):(0<c.I&&(g.x-=e),0<d.I&&(h.x-=e));this.r=[g.x,g.y,h.x,h.y]}b instanceof V.Td&&(this.r=[b.$a.x,b.$a.y,b.Wb.x,b.Wb.y]);return this.r}return null}});function Qc(b,c,d){this.z=b;this.x=c;this.y=d}Qc.prototype.Tb=function(){return new Qc(this.z,this.x,this.y)};Qc.prototype.toString=function(){return[this.z,this.x,this.y].join("/")};V.Cf=function(b,c){this.Ya=b;this.key=b.toString();this.url=c};V.rh=Qc;V.V.Cf=V.V.Af.extend({B:function(b,c,d,e,g){arguments.callee.Za.apply(this,arguments);this.P("tileSize",b);this.P("tiles",b);this.ld(["zooms","type","detectRetina","tileFun","errorUrl"],b);this.P("lang",c,!0);this.P("mapStyle",c,!0);this.P("features",c,!0);var h="overlayer"===b.get("type");this.yg=!h&&!V.j.U;if(V.j.pd||V.j.k6)this.yg=!1;var k=c.get("size"),k=k.width*k.height/65536;this.pa=V.j.U&&V.j.pa&&this.get("detectRetina");V.j.Jc&&V.j.U&&9<k&&(this.yg=!1);this.wh=!h;this.xh=!h;this.P("reload", b);this.O0=d;this.uf=e;this.mY=g},langChanged:function(){this.set("reload");this.Ua.Hn()},mapStyleChanged:function(){this.set("reload");this.Ua.Hn()},featuresChanged:function(){this.set("reload");this.Ua.Hn()},reloadChanged:function(){this.set("display",0)},tileFunChanged:function(){this.set("reload")},Tj:function(){return{Wc:this.get("tileSize"),visible:this.get("visible"),r:this.rt(),Pc:this.get("zooms"),Ks:this.yg,wh:this.wh,xh:this.xh,opacity:this.get("opacity"),Rh:this.O0||this.get("tileFun"), Jc:this.Ua.ck?!1:this.get("detectRetina")&&V.j.pa&&V.j.U}},Ih:function(b){if(V.J.mc.ug)return new V.J.mc.ug(this,b)}});V.V.kd=V.V.Af.extend({B:function(b,c){this.rb=Math.min(2,window.devicePixelRatio||1);this.Jc=V.j.pa&&!b.Yh;this.map=c;this.mk=0;this.dh=!1;this.fi=this.ei=0;this.kh=[];arguments.callee.Za.apply(this,arguments);this.Jl=[];this.pf=new V.V.$B;b&&(this.P("style",b),this.C0=b.get("stable")||!1,this.P("dataSources",b),this.P("bubble",b));this.P("display",c);this.fO()},Tj:function(){return{visible:this.get("visible"),Pc:this.get("zooms"),opacity:this.get("opacity"),zIndex:this.get("zIndex"),zp:this.Ua.get("alwaysRender")|| !1}},dataSourcesChanged:function(){var b=this.get("dataSources");b&&("string"===typeof b?(new V.na.za(b)).e("complete",function(b){this.LK(b.data);this.ll=b.data;this.dh=!0;this.set("display");this.zb=!0;this.Ua.l("complete")},this):b.length&&(this.LK(b),this.ll=b,this.dh=!0,this.set("display"),this.zb=!0,this.Ua.l("complete")))},getDatas:function(){return this.ll},j1:function(){if(this.Ua.Yh){var b=this.Au;this.ei=b.size.width+b.anchor.x;this.fi=b.size.height+b.anchor.y}},ua:function(b,c){var d= {type:b,data:"mouseout"===b?this.cR||null:c.Vk.Ma,target:this.Ua};this.cR="mouseout"===b?null:c.Vk.Ma;this.Ua.l(b,d)},J2:function(){},ub:function(b){this.ua(b.type,b)},fO:function(){this.e("click",this.ub);this.e("dblclick",this.ub);this.e("mousedown",this.ub);this.e("mouseup",this.ub);this.e("mouseover",this.ub);this.e("mouseout",this.ub);this.e("touchstart",this.ub);this.e("touchend",this.ub)},R2:function(){this.C("click",this.ub);this.C("dblclick",this.ub);this.C("mousedown",this.ub);this.C("mouseup", this.ub);this.C("mouseover",this.ub);this.C("mouseout",this.ub);this.C("touchstart",this.ub);this.C("touchend",this.ub)},styleChanged:function(){this.Au=this.get("style");this.j1();this.set("display",0)},LK:function(b){if(b){this.clear();for(var c=this.map.get("resolution",18),d=0;d<b.length;d+=1){var e=b[d].lnglat;b[d].lnglat=V.g.ha(e);e=this.map.Ub(e,18,c);e=new V.Rd({name:"point-"+V.g.Ab(this),va:new V.ba.oe([e.x,e.y],!0)});e.wj=this;e.Ma=b[d];this.Fs(e)}}},NI:function(b){if("geojson"===b)return new V.RM({map:this.map}); if("topjson"===b)return new V.h2({map:this.map});if("subway"===b)return new V.e2({map:this.map})},XZ:function(b){if(b){var c=[],c=[],d={};if(b.rules){for(var c=b.rules,e=0,g=c.length;e<g;e+=1){for(var h=[],k=c[e].symbolizers,l=0,m=k.length;l<m;l+=1)k[l].fill&&(h[l]=new V.style.jd.aC(k[l].fill)),k[l].stroke&&(h[l]=new V.style.jd.vC(k[l].stroke));k=h;c[e].Cu=k;c[e]=new V.style.jN(c[e])}d.rules=c}if(b.symbolizers){c=b.symbolizers;b=0;for(e=c.length;b<e;b+=1)c[b].fill&&(c[b]=new V.style.jd.aC(c[b].fill)), c[b].stroke&&(c[b]=new V.style.jd.vC(c[b].stroke));d.Cu=c}b=new V.ev(d)}else b=new V.ev({});this.set("style",b);return b},Q2:function(b,c){if(-1===V.g.indexOf(b,V.k.nb)){var d=new V.na.za(b);d.e("complete",function(d){d=this.ra[b]=this.NI(c).du(d);this.Zk(d);this.ua("complete")},this);d.e("error",this.Wa,this)}else(new V.na.XMLHttpRequest(b)).e("complete",function(d){d=eval("("+d.data+")");d=this.ra[b]=this.NI(c).du(d);this.Zk(d)},this)},j_:function(b){b.$i>this.Ui&&(this.Ui=b.$i)},Fs:function(b){this.pf.add(b); if(!this.it&&!this.Ua.Yh){0===b.name.indexOf("circle")&&(b.e("rad",this.j_,this),this.Ui||(this.Ui=b.get("radius")),b.$i>this.Ui&&(this.Ui=b.get("radius")));var c=b.get("strokeWeight")||0;if(!this.An||c>this.An)this.An=c}this.C0||b.P("feature",this,!0)},Zk:function(b){this.dh=!0;for(var c=0,d=b.length;c<d;c+=1)this.Fs(b[c])},clear:function(){this.dh=!0;this.pf.clear()},ah:function(b){var c;return 0>b[0]?(c=[b[0]+V.g.Va,b[1],V.g.Va,b[3]],b=[0,b[1],b[2],b[3]],c=this.pf.ah(c),b=this.pf.ah(b),V.extend(c, b)):b[2]>V.g.Va?(c=[b[0],b[1],V.g.Va,b[3]],b=[0,b[1],b[2]-V.g.Va,b[3]],c=this.pf.ah(c),b=this.pf.ah(b),V.extend(c,b)):this.pf.ah(b)},Z3:function(b){var c,d=this.get("style"),e=b.Wf;d instanceof V.ev||(d=this.XZ(d));if(e&&0<e.length)c=d.QH(e,b);else{if(d.xL.length||d.Wf.length)c=d.hW(b);c||(c=b.BX())}return c},aJ:function(b){function c(b,c){return b.nt-c.nt}var d=[],e,g,h,k,l,m={};for(e in b)if(b.hasOwnProperty(e)){h=b[e];k=h.get("zIndex");for(g in m)if(m.hasOwnProperty(g)&&(l=d[m[g]][2],l===k))break; "undefined"===typeof m[k]&&(d.push([[],[],k]),m[k]=d.length-1);k=d[m[k]];k[0].push(h)}d.sort(this.y0);b=0;for(e=d.length;b<e;b+=1)d[b][0].sort(c);return d},featureChanged:function(b){this.dh=!0;var c=b.target,d=c.va;0!==this.pf.GX([V.g.Ab(c)]).length&&(this.pf.remove(c,b.Kl),d&&!b.uW&&this.pf.add(c))},bL:function(b){this.dh=!0;for(var c,d=0,e=b.length;d<e;d+=1)c=b[d],c.va.Kl=null,c.Oj(!0),c.ii("feature")},D5:function(b,c){return b[1].zIndex===c[1].zIndex?V.g.Ab(b[1])-V.g.Ab(c[1]):b[1].zIndex-c[1].zIndex}, y0:function(b,c){return b[2]-c[2]},v5:function(b){return b.d4()===V.V.m2.c2},Ih:function(b){return this.it?new V.J.Uc.xk(this,b):"c"==this.map.get("overlayRender")&&V.J.canvas.xk?new V.J.canvas.xk(this,b):V.J.mc.xk&&"d"==this.map.get("overlayRender")?new V.J.mc.xk(this,b):null}});V.V.$B=V.W.extend({B:function(){this.clear()},clear:function(){this.yl=[];this.RA=new V.Bf},add:function(b){var c=V.g.Ab(b),d=b.va;this.yl[c]||(this.count+=1,this.yl[c]=b,d&&!V.r.Hb(d.dc(),[Infinity,Infinity,-Infinity,-Infinity])&&this.RA.zt(d.dc(),b))},U3:function(){return this.yl},ah:function(b){return this.RA.X_(b)},GX:function(b){var c=b.length,d=[],e;for(e=0;e<c;e+=1)this.yl[b[e]]&&d.push(this.yl[b[e]]);return d},remove:function(b,c){var d=V.g.Ab(b).toString(),e=b.va;this.yl[d]&&(this.yl[d]= null,e&&(d="undefined"!==typeof c?c:e.dc(),this.RA.remove(d,b)))}});function Rc(b,c,d){this.url=b;this.od=c;this.wI=d;this.Ii=this.bB=!1}function Sc(b,c,d){var e=Tc;return function(){return e.call(this,b,c,d)}}function Tc(b,c,d){b.G3=+new Date;b.loaded=c;clearTimeout(b.Q0);var e=b.TY;e.Xi.remove(b.url)&&e.dR();e=b.DY?b.ra:b.sa;b.ra=null;(d||c||b.wI)&&b.od(c?e:null,b);b.KJ?(b.KJ.Ji(),b.KJ=null):e&&(e.onload=null,e.onerror=null,e.onabort=null,b.sa=null)} V.gC=V.W.extend({q2:"assets/image/blank.gif",B:function(b,c,d){this.timeout=c||15E3;this.Pl=new V.fd(1024);this.Xi=new V.fd(1024);this.MH=b;this.jI=d},fD:function(b){b&&this.Xi.count>=this.MH&&(b=this.Xi.xb.Ia.value,b.Ii&&(this.Xi.remove(b.url),this.NC(b)));for(;this.Pl.count&&!(this.Xi.count>=this.MH);)this.jP(this.Pl.shift())},dR:function(){if(!this.hD){this.hD=!0;var b=this;setTimeout(function(){b.hD=!1;b.fD()},0)}},jP:function(b){var c=document.createElement("img");c.src=b.url;b.sa=c;b.TY=this; b.startTime=+new Date;b.bB=!0;c.complete?Tc(b,!0):(this.Xi.set(b.url,b),c.onload=Sc(b,!0),c.onerror=Sc(b,!1,!0),c.onabort=Sc(b,!1),b.Q0=setTimeout(Sc(b,!1,!0),this.timeout))},NC:function(b){b.bB&&(Tc(b,!1),b.Ii=!0,b.V2=!0)},H4:function(b,c,d){return this.TJ(b.url,c,d,!0,b.Ya.z+"_"+b.Ya.x+"_"+b.Ya.y)},TJ:function(b,c,d,e,g){var h=this.Xi.get(b);if(h&&h.Ii)h.Ii=!1,h.od=c,h.wI=d;else{h=new Rc(b,c,d);h.DY=e;h.key=g;if(this.Pl.get(V.g.Ab(h)))return;this.Pl.set(V.g.Ab(h),h);this.fD(!0)}return h},vV:function(b){b.Ii|| (b.Ii=!0,this.Pl.remove(V.g.Ab(b)))},clear:function(b){this.Pl.forEach(function(b){b.Ii=!0});this.Pl.clear();if(b)for(;b=this.Xi.pop();)this.NC(b);else this.Xi.forEach(function(b){b.Ii=!0})}});var Uc=function(){function b(b){this.jv[V.g.Ab(b)]=b;return this}function c(b){this.jv[V.g.Ab(b)]=null;return this}return function(){function d(){var b=d.jv,c,h=[],k;for(k in b)Object.prototype.hasOwnProperty.call(b,k)&&h.push(b[k]);for(b=h.length-1;0<=b;b-=1)k=h[b].apply(this,arguments),void 0!==k&&(c=k);return c}d.jv={};d.CU=b;d.j5=c;return d}}(); V.fd=V.W.extend({oa:[V.ca],B:function(b,c){this.nj=b|0;this.mr=!!c;this.count=0;this.uK=Uc();this.clear();this.Ur=[]},iq:function(){return!this.count},v4:function(){return this.count>=this.nj},z5:function(b){this.nj!==b&&(this.nj=b|0)&&this.OG(this.nj)},sc:function(b){return!!this.A[b]},get:function(b,c){var d=this.LD(b);return d?d.value:c},set:function(b,c){var d=this.LD(b);d?d.value=c:(d=new V.fd.vk(b,c),this.A[b]=d,this.yE(d),this.count+=1)},cm:function(b){this.remove(b)},remove:function(b){return Object.prototype.hasOwnProperty.call(this.A, b)?(this.gp(this.A[b]),!0):!1},forEach:function(b,c){for(var d=this.xb.next;d!==this.xb;d=d.next)b.call(c,d.value,d.key,this)},En:function(b,c){return Object.prototype.hasOwnProperty.call(this.A,b)?this.A[b].value:c},c5:function(){return this.xb.next.value},d5:function(){return this.xb.Ia.value},shift:function(){return this.TF(this.xb.next)},NV:function(){this.Ur.length=0},WY:function(b){this.Ur.push(b)},push:function(b){b=new V.fd.vk("",b);0===this.count?(this.xb.Ia=null,b.Ia=this.xb,this.xb.next= b):(this.pp.next=b,b.Ia=this.pp);this.count+=1;this.pp=b},Lu:function(b){b=new V.fd.vk("",b);0===this.count?(this.xb.Ia=null,b.Ia=this.xb,this.pp=this.xb.next=b):(this.xb.next.Ia=b,b.next=this.xb.next,b.Ia=this.xb,this.xb.next=b);this.count+=1},nZ:function(){if(this.count){this.count-=1;var b=this.xb.next;b.next?(b.next.Ia=this.xb,this.xb.next=b.next):(this.xb.next=null,this.pp=this.xb.Ia=null);b.next=null;b.Ia=null;return b.value}return null},pop:function(){return this.TF(this.xb.Ia)},LD:function(b){if(Object.prototype.hasOwnProperty.call(this.A, b))return b=this.A[b],this.mr&&(b.remove(),this.yE(b)),b},yE:function(b){this.mr?(b.next=this.xb.next,b.Ia=this.xb,this.xb.next=b,b.next.Ia=b):(b.Ia=this.xb.Ia,b.next=this.xb,this.xb.Ia=b,b.Ia.next=b);this.nj&&this.OT(this.nj)},OT:function(){var b=this;b.qp||(b.qp=setTimeout(function(){b.qp=null;b.OG(b.nj)},0))},OG:function(b){this.qp&&(clearTimeout(this.qp),this.qp=null);for(var c=this.mr?this.xb.Ia:this.xb.next,d={},e=0,g=this.Ur.length;e<g;e++)d[this.Ur[e]]=!0;for(;c&&this.count>b&&(e=this.mr? c.Ia:c.next,c.key&&!d[c.key]&&(this.gp(c),this.uK(c.value)),c=e,c!==this.xb&&c!==this.pp););},gp:function(b){b.remove();delete this.A[b.key];this.count-=1},TF:function(b){this.xb!==b&&this.gp(b);return b.value},clear:function(){this.A={};this.xb=new V.fd.vk("",null);this.xb.Ia=this.xb.next=this.xb;this.count=0}});V.fd.vk=function(b,c){this.key=b;this.value=c};V.fd.vk.prototype.Ia=null;V.fd.vk.prototype.next=null; V.fd.vk.prototype.remove=function(){this.Ia.next=this.next;this.next.Ia=this.Ia;this.next=this.Ia=null};V.Bf=V.W.extend({B:function(b){this.cK="undefined"!==typeof b?b:6;this.Ot=Math.floor(this.cK/2);this.ou={r:[Infinity,Infinity,-Infinity,-Infinity],Da:[]};this.count=0},HV:function(b,c){var d=-1,e=[],g;e.push(c);var h=c.Da;do{-1!==d&&(e.push(h[d]),h=h[d].Da,d=-1);for(var k=h.length-1;0<=k;k-=1){var l=h[k];if("undefined"!==typeof l.El){d=-1;break}var m=V.Bf.Tn(l.r[2]-l.r[0],l.r[3]-l.r[1],l.Da.length+1),l=V.Bf.Tn((l.r[2]>b.r[2]?l.r[2]:b.r[2])-(l.r[0]<b.r[0]?l.r[0]:b.r[0]),(l.r[3]>b.r[3]?l.r[3]:b.r[3])- (l.r[1]<b.r[1]?l.r[1]:b.r[1]),l.Da.length+2);if(0>d||Math.abs(l-m)<g)g=Math.abs(l-m),d=k}}while(-1!==d);return e},zt:function(b,c,d){b={r:b,El:c};"undefined"!==typeof d&&(b.type=d);this.uJ(b,this.ou);this.count+=1},uJ:function(b,c){var d;if(0===c.Da.length)c.r=V.r.Tb(b.r),c.Da.push(b);else{var e=this.HV(b,c),g=b;do{if(d&&"undefined"!==typeof d.Da&&0===d.Da.length){var h=d;d=e.pop();for(var k=0,l=d.Da.length;k<l;k+=1)if(d.Da[k]===h||0===d.Da[k].Da.length){d.Da.splice(k,1);break}}else d=e.pop();h=g instanceof Array;if("undefined"!==typeof g.El||"undefined"!==typeof g.Da||h){if(h){h=0;for(k=g.length;h<k;h+=1)V.r.extend(d.r,g[h].r);d.Da=d.Da.concat(g)}else V.r.extend(d.r,g.r),d.Da.push(g);d.Da.length<=this.cK?g={r:V.r.Tb(d.r)}:(g=h=this.NY(d.Da),1>e.length&&(d.Da.push(h[0]),e.push(d),g=h[1]))}else V.r.extend(d.r,g.r),g={r:V.r.Tb(d.r)}}while(0<e.length)}},NY:function(b){for(var c=this.$Z(b);0<b.length;)this.a_(b,c[0],c[1]);return c},$Z:function(b){for(var c=b.length-1,d=0,e=b.length-1,g=0,h=b.length-2;0<= h;h-=1){var k=b[h];k.r[0]>b[d].r[0]?d=h:k.r[2]<b[c].r[1]&&(c=h);k.r[1]>b[g].r[1]?g=h:k.r[3]<b[e].r[3]&&(e=h)}Math.abs(b[c].r[2]-b[d].r[0])>Math.abs(b[e].r[3]-b[g].r[1])?c>d?(c=b.splice(c,1)[0],d=b.splice(d,1)[0]):(d=b.splice(d,1)[0],c=b.splice(c,1)[0]):e>g?(c=b.splice(e,1)[0],d=b.splice(g,1)[0]):(d=b.splice(g,1)[0],c=b.splice(e,1)[0]);return[{r:V.r.Tb(c.r),Da:[c]},{r:V.r.Tb(d.r),Da:[d]}]},a_:function(b,c,d){for(var e=V.Bf.Tn(c.r[2]-c.r[0],c.r[3]-c.r[1],c.Da.length+1),g=V.Bf.Tn(d.r[2]-d.r[0],d.r[3]- d.r[1],d.Da.length+1),h,k,l,m=b.length-1;0<=m;m-=1){var n=b[m],p=[c.r[0]<n.r[0]?c.r[0]:n.r[0],c.r[2]>n.r[2]?c.r[2]:n.r[2],c.r[1]<n.r[1]?c.r[1]:n.r[1],c.r[3]>n.r[3]?c.r[3]:n.r[3]],p=Math.abs(V.Bf.Tn(p[1]-p[0],p[3]-p[2],c.Da.length+2)-e),n=[d.r[0]<n.r[0]?d.r[0]:n.r[0],d.r[2]>n.r[2]?d.r[2]:n.r[2],d.r[1]<n.r[1]?d.r[1]:n.r[1],d.r[3]>n.r[3]?d.r[3]:n.r[3]],n=Math.abs(V.Bf.Tn(n[1]-n[0],n[3]-n[2],d.Da.length+2)-g),q=Math.abs(n-p);if(!k||!h||q<h)k=m,h=q,l=n<p?d:c}e=b.splice(k,1)[0];c.Da.length+b.length+1<= this.Ot?(c.Da.push(e),V.r.extend(c.r,e.r)):d.Da.length+b.length+1<=this.Ot?(d.Da.push(e),V.r.extend(d.r,e.r)):(l.Da.push(e),V.r.extend(l.r,e.r))},remove:function(b,c){var d=[];d[0]={r:b};(d[1]=c)||(d[1]=!1);d[2]=this.ou;this.count-=1;if(!1===d[1]){var e=0,g=[];do e=g.length,g=g.concat(this.eL.apply(this,d));while(e!==g.length);return g}return this.eL.apply(this,d)},eL:function(b,c,d){var e=[],g=[],h=[];if(!b||!V.r.Ld(b.r,d.r))return h;b=V.r.Tb(b.r);var k;g.push(d.Da.length);e.push(d);do{d=e.pop(); var l=g.pop()-1;if("undefined"!==typeof c)for(;0<=l;){var m=d.Da[l];if(V.r.Ld(b,m.r))if(c&&"undefined"!==typeof m.El&&m.El===c||!c&&("undefined"!==typeof m.El||V.r.NH(b,m.r))){"undefined"!==typeof m.Da?(h=this.Qn(m,!0,[],m),d.Da.splice(l,1)):h=d.Da.splice(l,1);V.Bf.TA(d);c=void 0;d.Da.length<this.Ot&&(k=this.Qn(d,!0,[],d));break}else"undefined"!==typeof m.Da&&(g.push(l),e.push(d),d=m,l=m.Da.length);l-=1}else if("undefined"!==typeof k){d.Da.splice(l+1,1);0<d.Da.length&&V.Bf.TA(d);l=0;for(m=k.length;l< m;l+=1)this.uJ(k[l],d);k.length=0;0===e.length&&1>=d.Da.length?(k=this.Qn(d,!0,k,d),d.Da.length=0,e.push(d),g.push(1)):0<e.length&&d.Da.length<this.Ot?(k=this.Qn(d,!0,k,d),d.Da.length=0):k=void 0}else V.Bf.TA(d)}while(0<e.length);return h},search:function(b,c){return this.Qn({r:b},!1,[],this.ou,c)},X_:function(b,c){return this.Qn({r:b},!1,[],this.ou,c,!0)},Qn:function(b,c,d,e,g,h){var k={},l=[];if(!V.r.Ld(b.r,e.r))return d;l.push(e.Da);do{e=l.pop();for(var m=e.length-1;0<=m;m-=1){var n=e[m];if(V.r.Ld(b.r, n.r))if("undefined"!==typeof n.Da)l.push(n.Da);else if("undefined"!==typeof n.El)if(c)d.push(n);else if("undefined"===typeof g||n.type===g)n=n.El,"undefined"!==typeof h?k[V.g.Ab(n)]=n:d.push(n)}}while(0<l.length);return"undefined"!==typeof h?k:d}});V.Bf.TA=function(b){var c=b.Da.length,d=b.r;if(0===c)V.r.empty(d);else{var e=b.Da[0].r;d[0]=e[0];d[2]=e[2];d[1]=e[1];d[3]=e[3];for(e=1;e<c;e+=1)V.r.extend(d,b.Da[e].r)}};V.Bf.Tn=function(b,c,d){var e=(b+c)/2;b*=c;return b*d/(b/(e*e))}; ', true),
	_jsload_('overlay0', 'V.Ea=V.Ea||{}; V.Ea.fj=V.W.extend({oa:[V.ca,V.gd],MZ:["position","visible","clickable","bubble"],B:function(b,c){this.map=c;this.ld(this.MZ,b);this.P("zIndex",b);this.P("draggable",b);V.j.ed&&this.mO();V.j.U||this.Bv();this.Zb=b;this.Zb.Ea=this},draggableChanged:function(){this.get("draggable")?this.Av():this.ax()},ua:function(b,c){var d;d=c?{type:b,pixel:c.Pb,target:this.Zb,lnglat:c.af}:{type:b};this.Zb&&this.Zb.l(b,d)},ub:function(b){("click"!==b.type&&"rightclick"!==b.type&&"dblclick"!==b.type||this.get("clickable"))&& this.ua(b.type,b)},zv:function(){this.e("click",this.ub);this.e("rightclick",this.ub);this.e("dblclick",this.ub)},QG:function(){this.C("click",this.ub);this.C("rightclick",this.ub);this.C("dblclick",this.ub)},Bv:function(){this.get("clickable")&&this.zv();this.e("mousemove",this.ub);this.e("mouseout",this.ub);this.e("mouseover",this.ub);this.e("mousedown",this.ub);this.e("mouseup",this.ub)},T2:function(){this.QG();this.C("mousemove",this.ub);this.C("mouseout",this.ub);this.C("mouseover",this.ub); this.C("mousedown",this.ub);this.C("mouseup",this.ub)},clickableChanged:function(){this.get("clickable")?this.zv():this.QG()},mO:function(){this.get("clickable")&&this.zv();this.e("touchstart",this.ub,this);this.e("touchmove",this.ub,this);this.e("touchend",this.ub,this)},Av:function(){this.e("dragstart",this.Ok);this.e("dragging",this.Mk);this.e("dragend",this.Nk)},Ok:function(b){this.map.XJ(b);this.sf=b.Pb;this.ua("dragstart",b)},Mk:function(b){var c=b.Pb.Ja(this.sf),d=c.x,c=c.y;this.sf=b.Pb;var e= this.map.get("rotation")*Math.PI/180;this.Wi(new V.K(d*Math.cos(e)+Math.sin(e)*c,-Math.sin(e)*d+Math.cos(e)*c));this.ua("dragging",b)},Nk:function(b){this.map.vM();this.ua("dragend",b)},ax:function(){this.C("dragstart",this.Ok);this.C("dragging",this.Mk);this.C("dragend",this.Nk)},VD:function(b){var c,d,e=[];c=0;for(d=b.length;c<d;c+=1)e.push(this.iw(b[c]));return e},iw:function(b){b=this.map.Ub(b);return[b.x,b.y]},Ib:function(b){var c=this.F.Pa||this.map.get("centerCoords"),d=this.map.get("crs").Qh(Math.floor(this.map.get("zoom"))); return[(b[0]-c.x)/d,(b[1]-c.y)/d]}});V.Ea.Sd=V.Ea.fj.extend({IA:"content contentDom icon opacity angle autoRotation offset shadow title label isTop shape topWhenClick topWhenMouseOver noSelect".split(" "),B:function(b,c){arguments.callee.Za.apply(this,arguments);this.ld(this.IA,b);this.P("move",b);this.nV();this.cl();this.set("AnimationOffset",new V.K(0,0));this.P("raiseOnDrag",b);this.PU={AMAP_ANIMATION_NONE:!1,AMAP_ANIMATION_DROP:V.ki.Easing.Bounce,AMAP_ANIMATION_BOUNCE:V.ki.Easing.Cubic};this.P("animation",b)},yw:function(b,c,d){if(this.get("animation")&& "AMAP_ANIMATION_NONE"!==this.get("animation")){var e=this;this.hh=new V.ki;this.hh.transition=function(d,h,k){if(b&&600<=k)return e.hh.stop(),0;d=0===Math.floor(k/600)%2?"Out":"In";"out"===c?d="Out":"in"===c&&(d="In");return e.PU[e.get("animation")][d](k%600/600)};d=d||40;this.hh.qq=function(b){e.set("AnimationOffset",e.cx.add(new V.K(0,-1*d*b)))};this.cx=new V.K(0,0);this.hh.Sl()}},AnimationOffsetChanged:function(){this.positionChanged()},bG:function(){this.hh&&(this.hh.stop(),this.set("AnimationOffset", this.cx));this.set("AnimationOffset",new V.K(0,-40));if(this.fo)this.fo.set("position",this.get("position"));else{var b=new Z({zIndex:this.get("zIndex")-1,icon:new Lc({image:V.k.nb+"/theme/v1.3/dragCross.png",size:new V.Yb(14,11)}),offset:new V.K(-4,-5),position:this.get("position")});b.ea=!0;this.fo=b}this.fo.setMap(this.map.Ca)},CD:function(){this.set("animation","AMAP_ANIMATION_DROP",!0);this.yw(!0,"in");this.fo.setMap(null)},animationChanged:function(){this.hh&&(this.hh.stop(),this.set("AnimationOffset", this.cx),this.hh=null);var b=this.get("animation");b&&"AMAP_ANIMATION_NONE"!==b&&("AMAP_ANIMATION_DROP"===b?this.yw(!0,"in",100):this.yw())},Ag:function(){this.fo&&this.fo.set("position",this.get("position"))},raiseOnDragChanged:function(){this.get("raiseOnDrag")?(this.e("dragstart",this.bG,this),this.e("dragging",this.Ag,this),this.e("dragend",this.CD,this)):(this.C("dragstart",this.bG,this),this.C("dragging",this.Ag,this),this.C("dragend",this.CD,this))},Wi:function(b){var c=this.get("position"); b=this.map.Ub(c).add(b.tc(this.map.get("resolution")));c instanceof V.O?this.set("position",this.map.Se(b)):this.set("position",b)},nV:function(){var b=this.get("content"),c=this.get("shadow"),d=this.get("offset"),e=this.get("label"),b=b?this.sH(b,d):this.ry(this.get("icon"),d);this.set("contentDom",b);c&&(c=this.vH(c,d),this.set("shadowDom",c));e&&e.content&&this.set("labelDom",this.uH(e.content))},uH:function(b){var c=document.createElement("div");c.className="amap-marker-label";c.innerHTML=b;return c}, cl:function(){if(this.map&&this.get("position")&&!this.F){var b=this.map,c=this.map.Ub(this.get("position")),b=this.F=new V.Rd({name:"marker-"+V.g.Ab(this),map:b,va:new V.ba.oe([c.x,c.y])});b.wj=this;this.P("coords",b,!0);b.P("offset",this,!0);b.P("isTop",this,!0);b.P("zIndex",this,!0);b.P("params",this,!0);b.P("noSelect",this,!0)}},getParams:function(){return{zIndex:this.get("zIndex"),fH:this.get("angle"),Kj:this.get("contentDom"),HY:this.get("labelDom"),w0:this.get("shadowDom"),opacity:this.get("opacity"), title:this.get("title"),label:this.get("label"),TB:this.get("AnimationOffset"),offset:this.get("offset"),GY:this.get("isTop"),shape:this.get("shape"),visible:this.get("visible")}},offsetChanged:function(){if(this.F&&this.F.S){var b=this.map.Ub(this.get("position")).Ja(this.F.ia).Gb(this.map.get("resolution"));this.F.S&&(this.F.S.style.left=Math.floor(b.x)+this.get("offset").x+this.get("AnimationOffset").x+"px",this.F.S.style.top=Math.floor(b.y)+this.get("offset").y+this.get("AnimationOffset").y+"px")}}, positionChanged:function(){if(this.F){var b=this.map.Ub(this.get("position"));this.set("coords",[b.x,b.y]);this.F.S&&this.F.S.hx&&(b=b.Ja(this.F.OJ.ia).Gb(this.map.get("resolution")),this.F.S.style.left=Math.floor(b.x)+this.get("offset").x+this.get("AnimationOffset").x+"px",this.F.S.style.top=Math.floor(b.y)+this.get("offset").y+this.get("AnimationOffset").y+"px",this.F.S.parentNode!==this.F.S.hx&&this.F.S.hx.appendChild(this.F.S))}},contentChanged:function(){if(this.F){this.map.Vb.Zp=!0;-1===V.g.indexOf(this.map.Vb.kh, this.F)&&this.map.Vb.kh.push(this.F);this.F.S&&this.F.S.removeChild(this.get("contentDom"));var b=this.get("content"),c=this.get("offset"),b=this.sH(b,c);this.set("contentDom",b);this.F.S?(V.j.lg&&V.g.iepngFix(b),this.F.S.appendChild(b),this.F.Kj=b):this.map&&this.map.set("display")}},iconChanged:function(){if(this.F&&this.F.S&&!this.get("content")){this.map.Vb.Zp=!0;-1===V.g.indexOf(this.map.Vb.kh,this.F)&&this.map.Vb.kh.push(this.F);this.F.S&&this.get("contentDom")&&this.F.S.removeChild(this.get("contentDom")); var b=this.get("icon"),c=this.get("offset"),b=this.ry(b,c);this.set("contentDom",b);this.F.S?(V.j.lg&&V.g.iepngFix(b),this.F.S.appendChild(b),this.F.Kj=b):this.map&&this.map.set("display")}},shadowChanged:function(){if(this.F&&this.F.S){var b=this.get("shadowDom");this.F.S&&b&&b.parentNode===this.F.S&&this.F.S.removeChild(b);if(b=this.get("shadow")){var c=this.get("offset"),b=this.vH(b,c);this.set("shadowDom",b);this.F.S&&this.F.S.appendChild(b)}}},titleChanged:function(){this.F&&this.F.Kj&&"string"=== typeof this.get("title")&&this.F.Kj&&this.get("title")&&(this.F.Kj.title=this.get("title"))},labelChanged:function(){if(this.F&&this.F.S){var b=this.get("label"),c=this.F.S;if(c&&b&&b.hasOwnProperty("content")){this.get("labelDom")&&c.removeChild(this.get("labelDom"));var d="";if(b.content){var d=this.uH(b.content),e=0,g=0;b.offset&&(e=b.offset.y+"px",g=b.offset.x+"px");d.style.top=e;d.style.left=g;c.appendChild(d)}this.set("labelDom",d)}}},isTopChanged:function(){var b=this.map.Vb.Gu,c=this.get("isTop"), d=this.get("zIndex");b?b===this?this.F&&this.F.S&&(this.F.S.style.zIndex=c?this.map.Vb.mk+10:d,this.map.Vb.Gu=c?this:null):(b.F&&b.F.S&&(b.F.S.style.zIndex=c?b.get("zIndex"):this.map.Vb.mk+10),this.F&&this.F.S&&(this.F.S.style.zIndex=c?this.map.Vb.mk+10:d),this.map.Vb.Gu=c?this:b):(this.map.Vb.Gu=this,this.F&&this.F.S&&(this.F.S.style.zIndex=c?this.map.Vb.mk+10:d))},visibleChanged:function(){this.F&&this.F.S&&(this.get("visible")?this.F.S.style.display="block":this.F.S.style.display="none")},angleChanged:function(){if(this.F&& this.F.S){var b={x:-1*this.get("offset").x,y:-1*this.get("offset").y};V.f.rotate(this.F.S,this.get("angle")||0,b)}},zIndexChanged:function(){var b=this.get("zIndex");if(b>this.map.Vb.mk){this.map.Vb.mk=b;var c=this.map.Vb.Gu;c&&c.F&&c.F.S&&(c.F.S.style.zIndex=b+10)}this.F&&this.F.S&&(this.F.S.style.zIndex=this.get("isTop")?this.map.Vb.mk+10:this.get("zIndex"))},opacityChanged:function(){var b=this.get("contentDom"),c=this.get("shadowDom");b&&V.f.jk(b,this.get("opacity"));c&&V.f.jk(c,this.get("opacity"))}, sH:function(b){var c;c=document.createElement("div");c.className="amap-marker-content";"string"!==typeof b?c.appendChild(b):(c.innerHTML=b,c.childNodes[0]&&!c.childNodes[0].style&&(c.style["white-space"]="pre"));V.f.jk(c,this.get("opacity"));return c},ry:function(b){var c,d=0,e=0,g,h,k,l;b?("string"===typeof b?(c=b,l=!0):(c=b.get("image"),e=b.get("size"),g=b.get("imageSize"),d=e.width,e=e.height,g&&(h=g.width,k=g.height)),d||(d=0),e||(e=0),b="string"!==typeof b?b.get("imageOffset"):{x:0,y:0}):(c= V.k.Ce+"/mark_bs.png",b={x:0,y:0},d=19,e=33,h=19,k=33);g=document.createElement("div");g.className="amap-icon";g.style.position="absolute";l&&!V.j.pd&&(g.style.overflow="inherit");d&&(g.style.width=d+"px");e&&(g.style.height=e+"px");d=document.createElement("img");d.src=c;h&&k&&(d.style.width=h+"px",d.style.height=k+"px");d.style.top=b.y+"px";d.style.left=b.x+"px";V.j.pd&&l||g.appendChild(d);V.f.jk(V.j.pd&&l?d:g,this.get("opacity"));return V.j.pd&&l?d:g},vH:function(b,c){var d=this.ry(b,c);d.style.zIndex= -1;return d},moveChanged:function(){var b=this.get("move");if(!1===b)return this.G0();void 0!==b&&("pause"===b.action?this.ZZ():"[object Array]"===Object.prototype.toString.call(b.af)?b.af&&("resume"===b.action&&this.Rr?this.moveTo(b.af[b.af.zi||0],b.speed,b.Ha):(this.Rr&&this.l("movestop"),b.af.zi=0,this.set("position",b.af[0]),this.hZ(b.af,b.speed,b.Ha,b.JV))):this.moveTo(b.af,b.speed,b.Ha,!0))},moveTo:function(b,c,d,e){var g=this.get("position");b.Ja(g);var h=Math.round(b.ye(g)/1E3/c*36E5);if(0=== h)return this.l("moveend");this.De&&(this.De.stop(),this.De=null);this.De=new V.ki(g,b);d=d||function(b){return b};this.De.transition=function(b,c,e){if(e>=h)return c;var g=(c.I-b.I)*d(e/h)+b.I;b=(c.M-b.M)*d(e/h)+b.M;return new V.O(g,b)};this.De.qq=function(c){this.set("position",c);c.Hb(b)?(this.De&&(this.De.stop(),this.De=null),this.Zb.l("moveend"),this.l("moveend")):(e&&this.Zb.l("moving",{passedPath:[this.De.start,this.get("position")]}),this.l("moving"))};this.get("autoRotation")&&!V.j.pd&&(c= this.KP(g,b),this.set("angle",c));this.De.Sl(this)},G0:function(){this.De&&(this.De.stop(),this.De=null,this.l("movestop"))},ZZ:function(){this.De&&(this.De.stop(),this.De=null,this.l("movepause"))},hZ:function(b,c,d,e){function g(){var c=b.slice(0,b.zi||0);c.push(this.get("position"));this.Zb.l("moving",{passedPath:c})}function h(){b.zi<b.length-1?(b.zi+=1,this.moveTo(b[b.zi],c,d)):(this.ua("movealong"),e?(b.zi=0,this.set("position",b[0]),this.moveTo(b[b.zi],c,d)):this.l("movestop"))}var k=Math.min(b.zi|| 0,b.length-1);this.Rr||(this.Rr=!0,this.e("moving",g,this),this.e("moveend",h,this),this.e("movestop",function m(){this.Rr=!1;this.C("moveend",h,this);this.C("moving",g,this);this.C("movestop",m,this)},this));this.moveTo(b[k],c,d)},KP:function(b,c){var d=this.map,e=d.Ub(b),d=d.Ub(c),g=0;d.ye(e);var h=d.y-e.y,k=d.x-e.x;0!==d.x-e.x?(g=Math.atan((d.y-e.y)/(d.x-e.x)),0<=h&&0>k?g=Math.PI+g:0>h&&0>=k?g=Math.PI+g:0>h&&0<=k&&(g=2*Math.PI+g)):g=d.y>e.y?Math.PI/2:3*Math.PI/2;return V.g.Zg(180*g/Math.PI,1)}});V.Ea.Ru=V.Ea.fj.extend({B:function(b,c){arguments.callee.Za.apply(this,arguments);this.P("items",b,!0);this.P("content",b,!0);this.P("resolution",c);this.P("centerCoords",c);this.Bp=b},rK:function(){this.ce();this.Yn();this.pk();this.map.e("movestart",this.Ig,this);this.map.e("mapmove",this.Ig,this);this.map.e("zoomstart",this.Ig,this);this.map.e("click",this.Ig,this);this.map.e("closeOverlays",this.Ig,this);this.map.e("rotate",this.Ig,this)},Ig:function(){this.Bp.map&&this.Bp.close()},mapChanged:function(){}, positionChanged:function(){this.pk()},ce:function(){this.D&&(this.D.parentNode&&this.D.parentNode.removeChild(this.D),this.D=null);var b=V.f.create("div",null,"amap-menu");V.w.e(b,"mousedown",function(b){V.w.stopPropagation(b)},this);this.D=b;this.map.Xa.Ea.appendChild(this.D)},Yn:function(){var b=this,c=this.D;c.innerHTML="";var d=this.get("content");if("object"===typeof d)c.appendChild(d);else if("string"===typeof d)c.innerHTML=d;else if((d=this.get("items"))&&d.length){var e=V.f.create("ul",c, "amap-menu-outer");d.sort(function(b,c){return isNaN(b.Ut)||isNaN(c.Ut)?0:b.Ut-c.Ut});for(c=0;c<d.length;c+=1)(function(c){var d=c.tM,k=c.Ha,l=V.f.create("li",e);l.innerHTML=d;V.w.e(l,"click",function(){k.call(l);b.Bp.close()},l)})(d[c])}else this.D.innerHTML=""},pk:function(){var b=this.map,c=this.D;if(b&&c){var d=b.Ub(this.get("position")),e=this.get("centerCoords"),c=(d.x-e.x)/this.get("resolution"),d=(d.y-e.y)/this.get("resolution"),b=b.get("size"),d=d+b.height/2,c=c+b.width/2,e=V.f.Yp(this.D); c>b.width-e.width-5&&(c-=e.width);d>b.height-e.height-5&&(d-=e.height);this.D.style.right="";this.D.style.bottom="";this.D.style.left=c+"px";this.D.style.top=d+"px"}},Ee:function(){this.D&&(this.map.C("click",this.lD,this),this.map.Xa.Ea.removeChild(this.D),this.Bp.Rg=!1,this.D=this.Bp.si.map=null,this.map.C("movestart",this.Ig,this),this.map.C("zoomstart",this.Ig,this),this.map.C("click",this.Ig,this),this.map.C("closeOverlays",this.Ig,this),this.map.C("rotate",this.Ig,this))},visibleChanged:function(){this.D&& (this.get("visible")?this.D.style.display="block":this.D.style.display="none")},itemsChanged:function(){this.D&&this.Yn()}});V.Ea.sh=V.Ea.fj.extend({B:function(b,c){arguments.callee.Za.apply(this,arguments);this.ld("content contentDom position contentU isCustom autoMove showShadow closeWhenClickMap size offset".split(" "),b);this.P("retainWhenClose",b,!0);b.P("toBeClose",this);this.$k=b},rK:function(b){this.aW||(this.ce(),this.Yn(),this.TV());this.ii("resolution");this.ii("centerCoords");this.ii("render");this.P("resolution",b);this.P("centerCoords",b);this.P("render",b);this.map=b;b.Xa.Ea.appendChild(this.fb);this.HB(); this.pk();this.RC();this.aW=!0;this.Zb.l("onAdd",{type:"onAdd",target:this.Zb})},ce:function(){var b=V.f.create("div");b.className="amap-info";var c=V.f.create("div",b),d=V.f.create("div",b),e=V.f.create("div",d);b.style.position="absolute";d.style.position="absolute";d.style.bottom=-1*(this.get("offset").y||0)+"px";d.style.left=(this.get("offset").x||0)+"px";c.style.position="absolute";c.style.bottom=-1*(this.get("offset").y||0)+"px";c.style.left=(this.get("offset").x||0)+"px";this.fb=b;this.Hc= d;this.Gq=c;this.we=e;this.set("contentDom",this.we,!0)},Yn:function(){var b=this.get("contentU");if(b){var c=this.get("isCustom"),d=this.we,e=this.Gq;d.innerHTML="";var g=null;if(c){if("string"===typeof b)d.innerHTML=b;else if(b instanceof Array)for(g=0;g<b.length;g+=1)d.appendChild(b[g]);else d.appendChild(b);g=d;e.parentNode&&e.parentNode.removeChild(e)}else{g=e=V.f.create("div",d,"amap-info-content amap-info-outer");"string"===typeof b?e.innerHTML=b:e.appendChild(b);this.bW=e;b=V.f.create("a", this.we,"amap-info-close");b.innerHTML="\\u00d7";this.Ay=b;b.href="javascript: void(0)";V.j.ed&&(V.w.e(b,"touchstart",function(b){V.w.stop(b)},this),V.w.e(b,"touchend",function(b){V.w.stop(b);this.$k.close()},this),V.w.e(b,"click",function(b){V.w.stop(b);this.$k.close()},this));V.j.U||(V.w.e(b,"mousedown",function(b){V.w.stop(b)},this),V.w.e(b,"click",function(b){V.w.stop(b);this.$k.close()},this));if(b=this.get("size",!0))0!==b.width&&(e.style.width=b.width+"px"),0!==b.height&&(e.style.height=b.height+ "px");b=V.f.create("div",d,"amap-info-sharp");b.style.height="23px";if(V.j.lg||V.j.dq)b.style.marginLeft=d.childNodes[0].offsetWidth/2-5;this.Gq.style.display="block"}V.w.F0(g)}},HB:function(){var b=this.get("isCustom"),c=this.get("showShadow");if(!b&&c){var b=this.Gq,c=V.f.Yp(this.we),d=c.height-23,e=c.width;if(V.j.lg||V.j.dq)d=this.we.childNodes[0].offsetHeight,e=this.we.childNodes[0].offsetWidth+26;c="background-image:url("+V.k.nb+(V.j.lg?"/theme/v1.3/iws.gif);":"/theme/v1.3/iws.png);");b.innerHTML= "";var g=[],h;h=g[1]={};h.height=0.5*d+4;h.width=e;h.offsetX=400;h.offsetY=16;h.top=-h.height-10-15;h.left=23;h=g[2]={};h.height=g[1].height;h.width=g[1].height;h.offsetX=1075-h.width;h.offsetY=g[1].offsetY;h.top=g[1].top;h.left=23+g[1].width;h=g[3]={};h.height=10;h.width=22;h.offsetX=30;h.offsetY=445;h.top=-25;h.left=23+(V.j.dq||V.j.lg?5:0);h=g[4]={};h.height=10;h.width=e/2-15-g[3].left-g[3].width;h.offsetX=132;h.offsetY=445;h.top=-25;h.left=g[3].left+g[3].width;h=g[5]={};h.height=10;h.width=70; h.offsetX=80;h.offsetY=445;h.top=-25;h.left=g[4].left+g[4].width;h=g[6]={};h.height=10;h.width=e-g[5].left-g[5].width;h.offsetX=132;h.offsetY=445;h.top=-25;h.left=g[5].left+g[5].width;h=g[7]={};h.height=10;h.width=30;h.offsetX=621;h.offsetY=445;h.top=-25;h.left=e;h=g[8]={};h.height=15;h.width=70;h.offsetX=47;h.offsetY=470;h.top=-15;h.left=e/2-15;for(d=1;8>=d;d+=1)e=V.f.create("div",b),h=[],h.push("position:absolute;"),h.push(c),h.push("top:"+g[d].top+"px;"),h.push("left:"+g[d].left+"px;"),h.push("width:"+ g[d].width+"px;"),h.push("height:"+g[d].height+"px;"),h.push("background-position:"+-g[d].offsetX+"px "+-g[d].offsetY+"px;"),e.style.cssText=h.join("")}},U5:function(){},pk:function(){var b=this.map,c=this.fb,d=this.get("position"),e=this.get("resolution");if(b&&c&&d){var d=b.Ub(this.get("position")),g=this.get("centerCoords"),c=(d.x-g.x)/e,e=(d.y-g.y)/e,b=b.get("size"),d=V.f.Yp(this.we);if(V.j.lg||V.j.dq)d.width=this.we.childNodes[0].offsetWidth+14;d=this.get("isCustom")?d.width/2:(d.width-30)/2; this.fb.style.left=Math.round(c+b.width/2-d)+"px";this.fb.style.top=Math.round(e+b.height/2)+"px";c=this.bW;if(this.Ay&&c.childNodes[0]){for(e=b=0;e<c.childNodes.length;e+=1)b+=c.childNodes[0].clientHeight||0;b>(this.get("size").height||c.clientHeight)?this.Ay.style.right="20px":this.Ay.style.right="5px"}}},VO:function(){var b=new V.K(2-this.we.offsetWidth/2,2-this.we.offsetHeight),c=this.get("offset")||new V.K(0,0);this.get("isCustom")||(b=b.add(new V.K(0,-23)));return b.add(c)},RC:function(){if(this.get("position")&& this.get("autoMove")&&this.we){var b=this.map,c=new V.Yb(this.we.offsetWidth,this.we.offsetHeight);b.Yz(this.get("position"));for(var d=b.Yz(this.get("position")).add(this.VO()),e=d.add(c.Wn()),g=b.get("size"),h=b.uX(),k=0,l=0,m=0;m<h.length;m+=1){var n=h[m],p=0,q=0;0===n[1]&&0===n[2]?(p=n[3]-(d.x+k),q=n[0]-(d.y+l),0<p&&0<q&&(Math.abs(p)<Math.abs(q)?k+=p:l+=q)):0===n[2]&&0===n[3]?(p=g.Be()-n[1]-(e.x+k),q=n[0]-(d.y+l),0>p&&0<q&&(Math.abs(p)<Math.abs(q)?k+=p:l+=q)):0===n[0]&&0===n[3]?(p=g.Be()-n[1]- (e.x+k),q=g.ze()-n[2]-(e.y+l),0>p&&0>q&&(Math.abs(p)<Math.abs(q)?k+=p:l+=q)):0===n[0]&&0===n[1]&&(p=n[3]-(d.x+k),q=g.ze()-n[2]-(e.y+l),0<p&&0>q&&(Math.abs(p)<Math.abs(q)?k+=p:l+=q))}d=d.add(new V.K(k,l));e=e.add(new V.K(k,l));m=h=0;0>d.x||c.Be()>g.Be()?h=20-d.x:g.Be()<e.x&&(h=g.Be()-e.x-25);0>d.y||c.ze()>g.ze()?m=5-d.y:g.ze()<e.y&&(m=g.ze()-e.y-15);h+=k;m+=l;(h||m)&&b.Ca.panBy(h,m)}},TV:function(){this.get("closeWhenClickMap")&&this.map.e("closeInfo",this.lD,this,!1)},lD:function(){this.$k.Rg&&this.$k.close()}, Ee:function(){this.fb&&(this.get("retainWhenClose")?this.map.Ek.appendChild(this.fb):(this.fb.parentNode===this.map.Xa.Ea&&this.map.Xa.Ea.removeChild(this.fb),this.$k.Ea=null),this.map=null,this.$k.Rg=!1,this.Zb.l("close",{type:"close",target:this.Zb}))},z2:function(){if(!this.get("isCustom"))return this.we.offsetWidth;for(var b=this.re,c=b.firstChild,d=b.lastChild;c&&d&&c.style&&d.style&&c===d;)b=c,c=b.firstChild,d=b.lastChild;b=V.f.Cc(b,"width");return b=parseInt(b.replace("px",""),10)},renderChanged:function(){this.pk()}, positionChanged:function(){this.map&&this.fb&&(this.pk(),this.RC())},offsetChanged:function(){var b=this.get("offset");this.Hc.style.bottom=-1*(b.y||0)+"px";this.Hc.style.left=(b.x||0)+"px";this.Gq.style.bottom=-1*(b.y||0)+"px";this.Gq.style.left=(b.x||0)+"px"},contentChanged:function(){this.Yn();this.HB();this.pk()},sizeChanged:function(){this.Yn();this.HB();this.pk()}});V.ba={};V.ba.tk=V.W.extend({oa:[V.ca,V.gd],B:function(){},Tb:function(){return new this.B(this.Ga)},bz:function(){return this.Ga},setCoords:function(b){this.f0(b)},f0:function(b){this.Kl=this.dc();this.nd=null;if(V.ba.Xc&&this instanceof V.ba.Xc){var c=b.length;this.df=Array(c);for(var d,e,g=0;g<c;g+=1)if(d=b[g],e=new V.ba.nC(d),this.df[g]=e,0===g){if(0===d.length)break;e.Cl(d)||d.reverse()}else 0!==d.length&&e.Cl(d)&&d.reverse()}else this.Ga=b}}); V.ba.uc=V.extend({},{jm:"point",Vu:"linestring",lC:"linearring",gr:"polygon",Yu:"multipoint",Xu:"multilinestring",er:"multipolygon",V1:"geometrycollection"});V.Rd=V.W.extend({oa:[V.ca,V.gd],B:function(b){b=b||{};this.Or=b.Or;this.map=b.map;this.nt=b.ew||V.g.Ab(this);this.name=b.name||"";this.gg=!1;this.set("visible",!0,!0);this.hB(b.va);this.Wf=b.Cu;this.style=b.style},AW:function(){this.style=this.Wf=this.wj=this.OJ=this.va=this.name=this.map=null;this.am();this.Ji()},ZX:function(){return this.Wf},q0:function(b){this.Wf=b;this.zIndex=this.Wf[0].zf||this.zIndex},W3:function(){return this.va},hB:function(b){b&&(this.va=b,this.P("coords",b,!0),this.Or&& (b.P("radius",this),b.P("center",this),b.P("resolution",this),b.P("strokeWeight",this)))},setStyle:function(b){this.q0(b);this.Oj()},coordsChanged:function(){this.Oj()},radiusChanged:function(){this.va.Kl=this.va.dc();this.va.nd=null;this.Oj()},Oj:function(b){this.set("feature",{target:this,uW:b,Kl:this.va.Kl||this.va.dc(),lZ:this.va.dc()});this.va.Kl=this.va.dc()},visibleChanged:function(){this.Oj()},i4:function(b){for(var c=0;c<this.Wf.length;c+=1){var d=this.Wf[c];if(b.Hb(d.bn(this)))return d}}, BX:function(){var b=this.va,c=[];b.Ae()===V.ba.uc.gr||b.Ae()===V.ba.uc.er?c.push(new V.style.oc.Xc({fillColor:"#78cdd1",Bc:0.2,strokeColor:"#122e29",xa:0.5,ib:1})):b.Ae()===V.ba.uc.Vu||b.Ae()===V.ba.uc.lC||b.Ae()===V.ba.uc.Xu?c.push(new V.style.oc.mC({color:"#888888",width:1,zIndex:10})):b.Ae()!==V.ba.uc.jm&&b.Ae()!==V.ba.uc.Yu||c.push(new V.style.oc.cr({url:V.k.nb+"/theme/v1.3/markers/0.png",width:36,height:36,rotation:0,l6:-12,m6:-36,zIndex:100}));return c}});V.Rd.Q1="geometry";V.ba.oe=V.ba.tk.extend({B:function(b,c){this.Ga=b;this.Yh=c;this.nd=null},dc:function(){if(!this.nd){var b=this.Ga[0],c=this.Ga[1];if(this.Yh)this.nd=[b,c,b,c];else{var d=this.get("radius"),d=d?d/Math.cos(Math.PI*this.get("center").M/180):0,e=this.get("resolution")*this.get("strokeWeight")||0;this.nd=[b-d-e,c-d-e,b+d+e,c+d+e]}}return this.nd},Ae:function(){return V.ba.uc.jm}}); ', true),
	_jsload_('brender', 'V.J={canvas:{},mc:{},cj:{},Uc:{}};V.J.Af=V.W.extend({oa:[V.ca,V.gd],B:function(b,c){this.q=b;this.Yh=b.Ua.Yh;this.Kk=c;this.A=c.A;this.P("display",c)},XH:function(){this.xK&&this.xK();this.am();this.A=this.Kk=this.q=null},fz:function(b,c){var d=this.zoom,e=[],g=this.q;if(Math.floor(d)!==d)c(e,g);else{d=[b.x,b.y];if(g.Zp){for(var h=g.kh,k=!0,l=[],m=0;m<h.length;m+=1){var n=h[m].Kj;if(n)if(n.parentNode&&n.parentNode.parentNode&&this.Kk&&n.parentNode.parentNode!==this.Kk.Ek&&"none"!==n.parentNode.style.display){var p=n.clientWidth,q= n.clientHeight;n.childNodes[0]&&(p=p||n.childNodes[0].clientWidth,q=q||n.childNodes[0].clientHeight);window.opera&&(p=Math.max(p,n.childNodes[0].scrollWidth),q=Math.max(q,n.childNodes[0].scrollHeight));n=Math.max(Math.abs(h[m].get("offset").x),Math.abs(h[m].get("offset").y))+Math.max(p,q);g.ei=Math.max(g.ei,n);g.fi=Math.max(g.fi,n);h[m].width=p;h[m].height=q}else k=!1,l.push(h[m])}k?(g.Zp=!1,g.kh=[]):g.kh=l}h=Math.max(g.ei,g.An||0)*this.N;k=Math.max(g.fi,g.An||0)*this.N;k=Math.max(k,g.Ui||0);h=Math.max(h, g.Ui||0);if(h=g.ah([d[0]-h,d[1]-k,d[0]+h,d[1]+k])){for(var r in h)if(h.hasOwnProperty(r)&&(k=h[r],k.get("visible")&&!k.get("noSelect")))if(m=k.va,m instanceof V.ba.oe)if(this.Yh){var l=this.q.Au,q=l.size.width*this.N,n=l.size.height*this.N,t=l.anchor.x*this.N,w=l.anchor.y*this.N,q=V.r.pH([[d[0]-q+t,d[1]-n+w],[d[0]+t,d[1]+w]]);V.r.mf(q,m.Ga)&&e.push(k)}else if("undefined"!==typeof m.get("radius"))l=m.Ga,l=new V.K(l[0],l[1]),(new V.K(d[0],d[1])).ye(l)*Math.cos(k.get("center").M*Math.PI/180)<=m.get("radius")&& e.push(k);else{if(l=k.get("params"),l.visible){m=m.Ga;t=l.fH%360;p=[d[0],d[1]];if(t){var q=(d[0]-m[0])/this.N,n=(d[1]-m[1])/this.N,w=Math.PI*t/180,t=Math.cos(-w),w=Math.sin(-w),u=q*w+n*t;p[0]=m[0]+(q*t-n*w)*this.N;p[1]=m[1]+u*this.N}q=k.width*this.N;n=k.height*this.N;t=l.offset.x*this.N;w=l.offset.y*this.N;q=V.r.pH([[p[0]-q-t,p[1]-n-w],[p[0]-t,p[1]-w]]);m[0]instanceof Array||(m=[m]);for(n=m.length-1;0<=n;n-=1)if(V.r.mf(q,m[n])){l.shape?this.BY(k,p,m)&&e.push(k):e.push(k);break}}}else m.mf?m.mf(d)&& e.push(k):m.ht&&1.8*m.ht(d)<=k.get("strokeWeight")*this.N&&e.push(k);this.Yh||e.sort(function(b,c){return b.get("isTop")?-1:c.get("isTop")?1:b.get("zIndex")>c.get("zIndex")||b.get("zIndex")===c.get("zIndex")&&b.nt>c.nt?-1:1});c(e,g)}else c([],g)}},BY:function(b,c,d){var e=(c[0]-d[0][0])/this.N;c=(c[1]-d[0][1])/this.N;b=b.get("params");d=b.offset;var e=[e-d.x,c-d.y],g;b=b.shape;if("circle"===b.G.type){if(c=b.G.coords[0],d=b.G.coords[1],Math.sqrt((e[0]-c)*(e[0]-c)+(e[1]-d)*(e[1]-d))<=b.G.coords[2])return!0}else{if("poly"=== b.G.type)return g=b.G.coords,g=this.xV(g),V.dj.mf(e,g);if("rect"===b.G.type)return g=b.G.coords,b=g[0],c=g[1],d=g[2],g=g[3],g=[[b,c],[d,c],[d,g],[b,g]],V.dj.mf(e,g)}return!1},xV:function(b){for(var c=[],d=0;d/2<b.length/2;d+=2)c.push([b[d],b[d+1]]);return c},FI:function(b,c,d,e,g,h,k){var l=["position:absolute;"];l.push("top:"+Math.round(d)+"px;");l.push("left:"+Math.round(c)+"px;");l.push("width:"+Math.round(e)+"px;");l.push("height:"+Math.round(g)+"px;");1>h&&("opacity"in b.style?(l.push("opacity"), l.push(":"),l.push(h),l.push(";")):8<=document.documentMode?(l.push("-ms-filter:\'progid:DXImageTransform.Microsoft.Alpha(opacity="),l.push(Math.ceil(100*h)),l.push(")\';")):(l.push("filter:alpha(opacity="),l.push(Math.ceil(100*h)),l.push(");")));l.push("z-index:"+k+";");V.f.EL(b,l.join(""))}});V.J.zd=V.W.extend({oa:[V.ca,V.gd],B:function(b){this.A=b;this.Ek=b.Ek;this.D=b.Xa.V;this.P("display",b);this.P("rotateEnable",b)},fz:function(b,c,d,e){function g(b,e){b.length&&(k[V.g.indexOf(c,e)]=b);l-=1;0>=l&&(d(k),l=0)}for(var h=c.length,k=[],l=0,m,n=[],p=0;p<h;p+=1)m=c[p],m instanceof V.V.kd&&m.get("visible")&&(n.push(this.hz(m)),l+=1);for(h=0;h<n.length;h+=1)n[h].fz(b,g,e)}});V.J.canvas.zd=V.J.zd.extend({B:function(b){arguments.callee.Za.apply(this,arguments)},hz:function(b){if(!b.J){var c=b.Ih(this);c&&!c.u3&&(b.J=c)}return b.J},he:function(b){this.A.Xa.Ej.style.cssText="";for(var c=b.Ba,d=b.la,e=b.size.width,g=b.size.height,h=0;h<c.length;h+=1){var k=c[h],l=this.hz(k),m=c[h].Tj();if(l&&l.q)if(!m.visible||m.Pc[0]>d.zoom||m.Pc[1]<d.zoom||k.ss||k.ra&&0==k.ra.length){if(l=l.qf())if(l.length)for(m=0;m<l.length;m+=1)l[m].parentNode===this.D&&this.D.removeChild(l[m]);else l.parentNode=== this.D&&this.D.removeChild(l)}else{l.he(b,m);var k=l.qf(),n,p,q=l.transform;if(q&&k){c[h].lb=k;k.length||(k=[k],q=[q]);for(var r=0;r<k.length;r+=1){n=k[r];p=q[r];var t=p.translate.x,w=p.translate.y;c[h].Bt||(t=V.g.Zg(t,2),w=V.g.Zg(w,2));var u=p.scale;1E-5>Math.abs(t)&&(t=0);1E-5>Math.abs(w)&&(w=0);var D=[];D.push("position:absolute");D.push("z-index:"+(p.zf||c[h].get("zIndex")));c[h].it?(D.push("top:"+Math.floor(g/2+w)+"px"),D.push("left:"+Math.floor(e/2+t)+"px")):n.EJ?(D.push("height:"+n.height* u+"px"),D.push("width:"+n.width*u+"px"),D.push("top:"+(g/2-w*u)+"px"),D.push("left:"+(e/2-t*u)+"px")):(1!==u&&(D.push(V.f.nk[V.f.Bd]+"-origin:"+t+"px "+w+"px"),D.push(V.f.nk[V.f.Bd]+":scale3d("+u+","+u+",1)")),D.push("top:"+Math.floor(g/2-w)+"px"),D.push("left:"+Math.floor(e/2-t)+"px"),l.Wj&&(D.push("height:"+n.height+"px"),D.push("width:"+n.width+"px")));l.Bt||1===m.opacity||"number"!==typeof m.opacity||D.push(V.f.LI(n,m.opacity));(n.parentNode!==this.D||V.j.Lf)&&this.D.appendChild(n);V.f.EL(n,D.join(";"))}}else c[h].Xh&& (k.parentNode!==this.D||V.j.Lf)&&(this.D.appendChild(k),c[h].lb=k)}}b=this.A.Xa.Ej;k=this.A.Xa.V;c=this.A.Xa.Ea;V.f.Bd&&"number"===typeof d.rotation&&0!==d.rotation?(b.style[V.f.Bd+"Origin"]=e/2+"px "+g/2+"px",b.style[V.f.Bd]="rotate("+d.rotation+"deg)",b.style.overflow="visible",k.style.overflow="visible",c.style.overflow="visible"):(b.style.cssText="",k.style.cssText="-webkit-transform: translateZ(0);",c.style.cssText="");this.A.xu=!1}});V.J.ug=V.J.Af.extend({B:function(b,c){arguments.callee.Za.apply(this,arguments);this.P("reload",b,!0);var d=V.j.size;if(this.A&&this.A.Ca){var e=this.A.Ca.get("tileCacheSize");e&&0<e&&(d=e)}this.Ka=new V.fd(d);var g=this;this.Ka.uK.CU(function(b){g.Zv(b)});this.bc=1;this.nm=50;this.WN=!0;this.q.Ka=this.Ka;this.Iz=new V.gC(6,null,b.jI);new V.gC(5,null,b.jI)},xK:function(){this.clear();this.Ka.clear();this.sb&&(this.sb.C("tiles",this.wK,this),this.sb.C("ack",this.vK,this),this.sb.C("disable",this.tK, this),this.sb=null);this.Wj&&V.w.C(this.ta,"webglcontextlost",this.oA,this);this.A.C("zoomend",this.Yg,this);this.A.C("moveend",this.Yg,this)},reloadChanged:function(){this.q&&(this.q.zb=!1);this.Ka.clear();this.reload=!0;this.set("display")},VJ:function(b,c){if(!b.vn||b.vn.Ii){var d=this;b.loaded=!1;b.vn=c.TJ(b.url,function(c){b.vn=null;b.loaded=!0;d.Ka.set(b.key,b);d.q&&(b.sa=!0,b.$b=c,b.vn=null,d.set("display",0))},!1)}},S0:function(b,c,d,e){var g=[];d=d||18;c=Math.pow(2,c-d);for(var h=0;h<b.length;h+= 1){var k=b[h].Ya,l=Math.floor(k.x/c),k=Math.floor(k.y/c);e?(l=d+"/"+l+"/"+k,k=this.Ka.get(l)):(k=new V.rh(d,l,k),l=k+"",k=new V.Cf(k));!g[l]&&k&&(g.push(k),g[l]=1)}return g},WJ:function(b){for(var c=b.length-1;0<=c;c-=1){var d=b[c];if(d.length)if(this.Zh){var e=d[0].Ya.z;18<e&&(d=this.S0(d,e));this.UL(d,this.Wj?1:0);for(var g=0,h=0;g<d.length;)this.SY(d.slice(50*h,50*h+50),e),g+=50,h+=1}else for(this.UL(d),this.bA+=d.length,e=d.length-1;0<=e;e-=1)this.VJ(d[e],this.Iz)}},st:function(b,c){var d=b+""; return(c?this.Ka.En(d):this.Ka.get(d))||new V.Cf(b.Tb(),this.Rh&&this.Rh(b.x,b.y,b.z))},yu:function(b,c){return this.Wc*Math.pow(2,b-c)},Zv:function(b){b.vn&&this.Iz.vV(b.vn);b.bB=!1;b.loaded=!1},Ws:function(b,c){var d=this.Ed,e=this.N,g=b.Wb.x,h=b.Wb.y,k=b.$a.x,l=b.$a.y;new V.K(0,0);e*=this.yu(this.zoom,d);c&&(k=Math.max(c[0],k)-c[0],l=Math.max(c[1],l)-c[1],g=Math.min(c[2],g)-c[0],h=Math.min(c[3],h)-c[1],new V.K(Math.floor(c[0]/e),Math.floor(c[1]/e)));g/=e;h/=e;g={Od:0===g%1?g-1:Math.floor(g),bd:0=== h%1?h-1:Math.floor(h),fe:Math.floor(k/e),Vc:Math.floor(l/e)};g.cu=g.Od-g.fe+1;g.ZK=g.bd-g.Vc+1;g.z=d;g.N=this.N*Math.pow(2,this.zoom-d);return g},Kz:function(b,c,d){return c<b.fe||c>b.Od||d<b.Vc||d>b.bd?!1:!0},UL:function(b,c){if(b.length){var d=this.Aa.Gb(this.Wc*Math.pow(2,this.yc-b[0].Ya.z)*this.zc),e=Math.floor(d.x),g=Math.floor(d.y);b.sort(function(b,d){var l=b.Ya,m=d.Ya,n=l.x-e,l=l.y-g,p=m.x-e,m=m.y-g;return(c?-1:1)*(p*p+m*m-(n*n+l*l))})}},clear:function(){this.Iz.clear()},$t:function(b,c){this.yp= !1;c.Rh!==this.Rh&&(this.Rh=c.Rh,this.Ka.clear());this.clear();this.xh=c.xh;this.wh=c.wh;this.Wc=c.Wc;var d=b.la;this.Qd=c.Qd||b.la.Qd;this.Gh=d.Gh;this.size=b.size;this.rotation=d.rotation;this.Aa=d.Aa;this.ma=b.ma;this.zoom&&(this.vA=d.zoom>this.zoom?"in":d.zoom<this.zoom?"out":!1);this.yd=b.yd;this.Sf=b.Sf;this.zoom=d.zoom;this.yc=d.yc;this.Ed=!1==this.Zh&&!this.q.mY&&this.q.pa?this.yc+1:this.yc;this.uf&&this.Ed>this.uf&&(this.Ed=this.uf);this.N=d.N;this.zc=d.zc;d=b.ma;this.Uf=this.Ws(d,c.r);this.Wq= d.BM?this.Ws(d.BM,c.r):null;var e=this.Uf,g=this.ma.M0,h=null,h=g<this.zoom&&this.Wq?this.Wq:e,k=[],l=[],m,n=[],p=[],q=[],r=new V.rh(0,0,0),t,w=this.zoom,p=this.Cr||"",u={},D={},v,s,O,J,E,C;this.wd=1E6*Math.random()<<0;for(t=p.length-1;0<=t;t-=1)if(m=p[t],!(m.lr<c.opacity))if(r.z=m.Ya.z,r.x=m.Ya.x,r.y=m.Ya.y,r.z===this.Ed)u[r+""]|=16;else if(r.z<this.Ed){if(u[r+""]|=64,this.xh)for(C=this.Ed-r.z,v=Math.max(e.fe,r.x<<C),w=Math.min(e.Od,(r.x+1<<C)-1),s=Math.max(e.Vc,r.y<<C),O=Math.min(e.bd,(r.y+1<<C)- 1),r.z=this.Ed,J=v;J<=w;J+=1)for(r.x=J,E=s;E<=O;E+=1)r.y=E,C=r+"",u[C]|=32,D[C]=D[C]?Math.max(m.Ya.z,D[C]):m.Ya.z}else if(this.wh)for(C=1;r.z>=this.Ed;){u[r+""]|=C;v=r.x>>1;s=r.y>>1;w=v<<1;O=s<<1;m=0;for(J=2;0<J;J-=1)for(r.x=w+J,E=2;0<E;E-=1)r.y=O+E,u[r+""]&5&&(m+=1);r.z-=1;r.x=v;r.y=s;C=4===m?4:2}p=[];r.z=this.Ed;t=!0;this.Ka.NV();for(J=h.fe;J<=h.Od;J+=1)for(r.x=J,E=h.Vc;E<=h.bd;E+=1)r.y=E,this.Ka.WY(""+r),m=this.st(r),v=!1,m.sa?(m.wd=this.wd,this.Kz(e,J,E)&&(p.push(m),this.yg&&(m.bc!==this.bc|| 1>m.lr)&&(v=!0))):(t=!1,this.Kz(e,J,E)&&(v=!0),m.status||this.yc!=g||this.Wq&&!this.Kz(this.Wq,J,E)||n.push(m)),v&&q.push(m);t&&!this.q.zb&&(this.q.zb=!0,this.q.ua("complete"));this.yp=t;p.length&&(this.q.zb||t)&&(k.push(p),p.yp=t);l.push(n);n=!1;if(this.wh){q=q.slice(0);h=[];for(t=q.length-1;0<=t;t-=1)m=q[t],u[m.key]&4||h.push(m);m=c.Pc[1];for(w=this.Ed+1;q.length&&w<=m;w+=1){p=[];g=q;q=[];r.z=w;for(t=g.length-1;0<=t;t-=1)if(J=g[t],C=u[J.key],C&7)for(v=J.Ya.x<<1,s=J.Ya.y<<1,J=1;0<=J;J-=1)for(r.x= v+J,E=1;0<=E;E-=1)r.y=s+E,C=r+"",O=this.Ka.En(C),u[C]&5&&O&&O.sa?(O.Zw=!0,O.wd=this.wd,p.push(O)):q.push(new V.Cf(r.Tb(),""));p.length&&(n=!0,k.push(p))}q=h}if(!n&&this.xh)for(J=!k.length||this.Wj?c.Pc[0]:Math.max(c.Pc[0],this.Ed-2),E=Math.max(J,this.Ed-this.F2),w=this.Ed-1;q.length&&w>=J;w-=1){s=w>=E;n=[];p=[];h={};g=q;q=[];for(t=g.length-1;0<=t;t-=1)m=g[t],r.z=w,r.x=m.Ya.x>>1,r.y=m.Ya.y>>1,m=this.st(r,!s),h[m.key]||(h[m.key]=1,v=!1,m.sa&&(!this.K2||u[m.key]&64)?(r.x=Math.min(e.Od,Math.max(e.fe, r.x<<this.Ed-w)),r.y=Math.min(e.bd,Math.max(e.Vc,r.y<<this.Ed-w)),r.z=this.Ed,C=r+"","number"===typeof D[C]&&m.Ya.z>D[C]?v=!0:m.Zw=!0,m.wd=this.wd,p.push(m)):v=!0,v&&q.push(m));p.length&&k.push(p);s&&n.length&&l.push(n)}this.aA=this.bA=0;this.WJ(l,d);this.Lq=k;this.q.set("tiles",k)},f5:function(){if(!this.Zh){for(var b=this.Uf.Od+1,c=this.Uf.bd+1,d=this.Uf.fe-1,e=this.Uf.Vc-1,g,h=[],k=d;k<=b;k+=1)for(var l=e;l<=c;l+=1)if(k==d||k==b||l==e||l==c)g=new V.rh(this.yc,k,l),this.Ka.En(void 0)||(g=this.st(g), h.push(g));this.WJ([h])}}});V.J.mc.ug=V.J.ug.extend({B:function(b,c){arguments.callee.Za.apply(this,arguments);this.nm=400;this.Zh=!1;this.ce();this.uf=b.uf},qf:function(){return this.lb},ce:function(){this.lb=document.createElement("div");this.lb.className=this.q.Ua.get("className")||"amap-layer";this.rl=document.createDocumentFragment()},Rl:function(b){var c=Math.pow(2,b.la.zoom-this.cd),d=b.la.Aa.Ja(this.Xj).Gb(this.vf);this.transform={translate:this.transform.translate.add(d),scale:c,rotate:0};this.Aa=b.la.Aa},ny:function(b, c){if(!this.ia||3E4<Math.abs(this.Aa.x-this.ia.x)/this.N||3E4<Math.abs(this.Aa.y-this.ia.y)/this.N)this.ia=this.Aa;this.cd=this.yc;this.vf=this.zc;this.aj=!1;this.currentTime=+new Date;this.IB=c.IB;var d=this.Uf;this.ac=[256*d.fe*this.zc,256*d.Vc*this.zc];this.yg=this.nm&&c.Ks;var e=this.Lq,g=256*d.cu,d=256*d.ZK;this.yd=this.zoom<<0!==this.zoom;var h=this.Aa.Ja(this.ia);h.x<-V.g.Va/2&&(h.x+=V.g.Va);h.x>V.g.Va/2&&(h.x-=V.g.Va);this.uy=h.Gb(this.zc);return[e,g,d,c]},Nn:function(b,c){var d=this.ny(b, c);this.ku.apply(this,d);this.Kc(b)},he:function(b,c){this.ee=b.ee;this.io=b.io;this.Sf=b.Sf;this.$t(b,c);this.Xj&&V.j.Lf&&(b.yd||b.Sf)?this.Rl(b,c):this.Nn(b,c);this.Xj=this.Aa;this.aj&&this.set("display",0)},yq:function(){for(var b=this.lb.childNodes,c=b.length-1;0<=c;c-=1)b[c]&&b[c].bc!==this.bc&&this.lb.removeChild(b[c])},SA:function(b,c){return b.Vc===c.Vc&&b.fe===c.fe&&b.bd===c.bd&&b.Od===c.Od},ku:function(b){var c=this.bc;this.bc+=1;var d=!1,e,g,h;g=!1;var k=[];this.ia.x-this.Aa.x<-V.g.Va/ 2?this.ia=new V.K(this.ia.x+V.g.Va,this.ia.y):this.ia.x-this.Aa.x>V.g.Va/2&&(this.ia=new V.K(this.ia.x-V.g.Va,this.ia.y));for(e=b.length-1;0<=e;e-=1)if(h=b[e],h.length){g=h[0].Ya.z;for(var l,m=this.yu(this.yc,g),n=h.length-1;0<=n;n-=1){l=h[n];if(!l.hc&&this.ia===l.ia&&l.cd===this.cd){var p=l.$b;if(p&&p.parentNode===this.lb&&1===l.lr){k.push(l);p.bc=this.bc;l.bc=this.bc;continue}}l.ia=this.ia;l.cd=this.cd;g=l.Ya;var d=!0,q=new V.K(g.x*m*this.zc,g.y*m*this.zc);q.Ja(this.Aa);q=q.Ja(this.ia);q=q.Gb(this.zc); q.x=Math.floor(q.x);q.y=Math.floor(q.y);var r=1;if(!l.DD||this.WN&&l.bc!==c)l.DD=this.currentTime;this.yg&&!l.Zw?(p=Math.max(0,Math.abs(g.z-this.zoom)-1),r=Math.min(1,(this.currentTime-l.DD)/(1/Math.pow(1.32,p)*this.nm)),1!==r&&(this.aj=!0)):l.Zw=!1;l.bc=this.bc;l.lr=r;l.sa?(p=l.$b,!p&&l.hc&&l.hc.$b&&(p=l.hc.$b),0!==r&&p&&(this.FI(p,q.x,q.y,m,m,r,g.z),p.parentNode!==this.lb&&(V.j.lg&&"overlayer"===this.q.get("type")&&(p.style.display="none"),this.rl.appendChild(p)),p.bc=this.bc,l.yc=this.yc,k.push(l))): l.wd=null}g=!0}1<b.length&&(this.aj=!0);this.Cr=k;this.yq();this.lb.appendChild(this.rl);return d||!g},Kc:function(){this.transform={translate:this.uy,scale:Math.pow(2,this.zoom-this.yc),rotate:0}}});window.CanvasRenderingContext2D&&(window.CanvasRenderingContext2D.prototype.Hy=function(b,c,d,e,g){"undefined"===typeof g&&(g=[10,10]);this.moveTo(b,c);var h=d-b,k=e-c,l=Math.floor(Math.sqrt(h*h+k*k));e=h/l;d=k/l;g.Vz=0;for(var m=[],h=this.et,n=0,p=0,q=!1,r=k=0;r<g.length;r+=1)g.Vz+=g[r],m[r]={Oy:g[r]*e,Py:g[r]*d,$e:k+=g[r]},h-=g[r],0>h&&!q&&(n=r,p=-h,q=!0);for(q=0;p+q<=l;)p<g[n]?(h=p*e,k=p*d):(h=m[n].Oy,k=m[n].Py),b+=h,c+=k,this.Jq?this.moveTo(b,c):this.lineTo(b,c),q+=p,this.Jq=!this.Jq,p=g[(n+1)% g.length],n=(n+1)%g.length;l-=q;b+=l*e;c+=l*d;this.Jq?this.moveTo(b,c):this.lineTo(b,c);this.et=(this.et+q+l)%g.Vz},window.CanvasRenderingContext2D.prototype.kW=function(b,c,d,e){"undefined"===typeof e&&(e=[10,10]);var g=2*Math.PI*d,h=0>=e?g:Math.round(g/(e[0]+e[1])),k=(e[0]+e[1])/g*2*Math.PI;e=e[0]/g*2*Math.PI;for(g=0;g<h;g+=1)this.beginPath(),this.arc(b,c,d,g*k,g*k+e),this.stroke()}); ', true),
	_jsload_('mrender', 'V.J.Uc.xk=V.J.ug.extend({B:function(b,c){arguments.callee.Za.apply(this,arguments);this.ce()},UI:function(){return this.mb.cM},qf:function(){return this.lb},ce:function(){this.lb=document.createElement("div");this.lb.className="amap-markers";this.mb=new V.J.Uc.kd(this.lb);this.mb.q=this.q;this.Kk.D.appendChild(this.lb)},Qq:function(b,c){this.rl=c.rl;this.mq=c;this.Qd=b.la.Qd;this.N=b.la.N;this.zoom=b.la.zoom;this.size=b.size;this.ma=b.ma;this.Pa=b.la.Aa;this.Gh=b.la.Gh;var d=!1;if(!this.ia||3E4<Math.abs(this.Pa.x- this.ia.x)/this.N||3E4<Math.abs(this.Pa.y-this.ia.y)/this.N)d=!0;if(d||this.zoom<<0!==this.zoom||this.cd!==this.zoom)this.ia=this.Pa,this.cd=this.zoom},rz:function(b){var c=b.ma.cb.y*this.N;b=b.ma.cb.x*this.N;return[this.Pa.x-b,this.Pa.y-c,this.Pa.x+b,this.Pa.y+c]},yq:function(){if(this.lh&&this.lh)for(var b in this.lh)if(this.lh.hasOwnProperty(b)){var c=this.lh[b];c.wd!==this.wd&&c.S&&this.Kk.Ek.appendChild(c.S)}},he:function(b,c){this.wd=1E6*Math.random()<<0;this.Qq(b,c);this.la=b.la;this.size= b.size;var d=this.q;this.Wc=256;var e,g;g=this.rz(b);var h=0;d.Zp&&(h=50*this.N);g[0]-=this.q.ei*this.N+h;g[1]-=this.q.fi*this.N+h;g[2]+=this.q.ei*this.N+h;g[3]+=this.q.fi*this.N+h;d=d.ah(g);for(e in d)d.hasOwnProperty(e)&&(d[e].wd=this.wd,d[e].OJ=this);this.yq(d);this.Qq.call(this.mb,b,c);this.mb.C_(d);this.lh=d;this.Kc(b)},Kc:function(){var b=Math.pow(2,this.zoom-this.yc);this.transform={translate:this.ia.Ja(this.Pa).Gb(this.N),scale:b,rotate:0}}});V.J.Uc.kd=V.W.extend({B:function(b){this.Nl=b},C_:function(b){var c=document.createDocumentFragment(),d;for(d in b)if(b.hasOwnProperty(d)){var e=b[d],g,h=e.get("params");if(e.S)g=e.S;else{g=V.f.create("div");g.className="amap-marker";var k=h.Kj,l=h.w0;k&&g.appendChild(k);l&&g.appendChild(l);e.S=g;e.Kj=k;if(l=h.title)k.title=l;this.q.Zp=!0;-1===V.g.indexOf(this.q.kh,e)&&this.q.kh.push(e);e.gg=!0}var k=h.offset,l=k.x,m=k.y,n,p;if(e.gg){var q=[];n=this.Ib(e.va.Ga);e.ia=this.ia;p=h.TB;k=Math.round(n[1]+ m+p.y);n=Math.round(n[0]+l+p.x);q.push("top:"+k+"px");q.push("left:"+n+"px");q.push("z-index:"+(h.GY?this.q.mk+10:h.zIndex));V.j.pd||q.push(V.f.WX(g,h.fH,{x:-l,y:-m}));q.push("display:"+(h.visible?"block":"none")+";");g.style.cssText=q.join(";");(l=h.label)&&l.content&&(h=h.HY,n=k=0,l.offset&&(k=l.offset.y+"px",n=l.offset.x+"px"),h.style.top=k,h.style.left=n,g.appendChild(h))}else if(this.zoom<<0!==this.zoom||e.zoom!==this.zoom||g.parentNode!==this.Nl||e.ia!==this.ia)n=this.Ib(e.va.Ga),e.ia=this.ia, p=h.TB,k=Math.round(n[1]+m+p.y),n=Math.round(n[0]+l+p.x),g.style.top=k+"px",g.style.left=n+"px";e.zoom=this.zoom;g.parentNode!==this.Nl&&(V.j.lg&&V.g.iepngFix(g),c.appendChild(g),e.gg=!1);g.hx=this.Nl}this.Nl.appendChild(c)},Ib:function(b){return[(b[0]-this.ia.x)/this.N,(b[1]-this.ia.y)/this.N]}}); ', true),
	_jsload_('mouse', 'V.zd.Mc({$v:"_docMsMov",iO:function(){var b=this.Xa.qd;V.w.e(b,"mousedown",this.cJ,this);this.vz||(this.vz=function(){this.Aw=!1},this.TL=function(b){var d=this.pg(b,!0);this.l(this.$v,{event:b,YJ:d})});V.w.e(document,"mousedown",this.vz,this);V.w.e(document,"mousemove",this.TL,this);V.w.e(b,"mousemove",this.dJ,this);V.w.e(b,"mouseup",this.eJ,this);V.w.e(b,"contextmenu",this.ir,this);V.w.e(b,"rightclick",this.ir,this);this.e(this.$v,this.hK,this)},CR:function(){var b=this.Xa.qd;V.w.C(b,"mousedown", this.cJ,this);V.w.C(document,"mousedown",this.vz,this);this.C(this.$v,this.hK,this);V.w.C(document,"mousemove",this.TL,this);V.w.C(b,"mousemove",this.dJ,this);V.w.C(b,"mouseup",this.eJ,this);V.w.C(b,"contextmenu",this.ir,this);V.w.C(b,"rightclick",this.ir,this)},kO:function(){V.w.e(this.Xa.qd,"mousewheel",this.bJ,this)},FR:function(){V.w.C(this.Xa.qd,"mousewheel",this.bJ,this)},jO:function(){this.e("mousemove",this.uF);this.e("mouseout",this.vF);this.e("mouseover",this.wF);this.e("mouseup",this.xF); this.e("mousedown",this.tF);this.e("rightclick",this.zF);this.e("contextmenu",this.oF);this.e("rdblclick",this.AF)},ER:function(){this.C("mousemove",this.uF);this.C("mouseout",this.vF);this.C("mouseover",this.wF);this.C("mouseup",this.xF);this.C("mousedown",this.tF);this.C("rightclick",this.zF);this.C("contextmenu",this.oF);this.C("rdblclick",this.AF)},keyboardEnableChanged:function(){this.get("keyboardEnable")?this.gO():this.bx()},scrollWheelChanged:function(){this.get("scrollWheel")?this.e("mousewheel", this.yF):this.C("mousewheel",this.yF)},ir:function(b){V.w.preventDefault(b)},tR:function(b){var c=this.pg(b),d=0;b.wheelDelta?(d=b.wheelDelta/120,window.opera&&9.5>parseFloat(window.opera.version())&&(d=-d)):b.detail&&(d=-b.detail);this.Q.Lp=(this.Q.Lp||0)+d;this.l("mousewheel",c)},bJ:function(b){if(this.get("scrollWheel"))if(this.tR(b),b.preventDefault)b.preventDefault();else return!1},wz:function(b,c){V.w.preventDefault(b);c=this.pg(b);var d=this.Q;if(!this.tq(c.Pb,d.Ik)){d.Ik=c.Pb;if(d.lj){if(!d.qc&& (c.Pb.x!==this.Q.wi.x||c.Pb.y!==this.Q.wi.y)){var e;this.GE(d.Hk)&&d.Hk.get("draggable")&&(e=d.Hk);!e&&this.get("dragEnable")&&(e=this);e&&(d.qc=!0,d.Np=e,d.sf=d.wi,d.$H=d.NA)}d.qc&&(d.Mp=c,this.WF())}if(b.preventDefault)b.preventDefault();else return!1}},wt:function(b){V.f.wb(this.D,"amap-drag");b=this.pg(b);V.f.YW();V.f.hI();this.Q&&(this.Q.qc=!1);this.Wg&&(this.Wg.stop(),this.Q.qc=!1,this.set("display"));this.Q.Dk&&(this.Q.Dk=!1,this.Q.qc=!1,this.Q.Np.l("dragend",b));this.Q.lj=!1;this.Q.Ik=null; this.Q.sf=null;V.w.C(document,"mousemove",this.wz,this);V.w.C(document,"mouseup",this.wt,this);try{V.w.C(window.parent.document,"mouseup",this.wt,this)}catch(c){}V.w.g1(this.Xa.qd)},cY:function(b,c){c=c||this.pg(b);var d=this.get("size"),e;0<=c.Pb.x&&c.Pb.x<=d.width&&0<=c.Pb.y&&c.Pb.y<=d.height&&(e=!0);this.BJ&&!e?this.l("mouseout",c):!this.BJ&&e&&this.l("mouseover",c);this.BJ=e},dJ:function(b){V.w.preventDefault(b);V.j.rn&&(b=window.event);if(b){b=this.pg(b);var c=this.Q,d=b.Yd,e;this.Q.lj||(d instanceof V.Ea.fj?e=d.Zb.get("cursor"):d instanceof V.V.Af?e=d.get("style").cursor:d===this&&(e=d.get("defaultCursor")),e=this.Ca.get("optimalCursor")||e,this.D.style.cursor=e||"");e=c.bR;var g=b.Vk;e!==g&&(e&&c.QE&&c.QE.l("mouseout",b),g&&d&&(d.l("mouseover",b),d.get("topWhenMouseOver")&&d.Zb.setTop(!0)));b.Yd.l("mousemove",b);b.Yd!==this&&this.l("mousemove",b);c.bR=b.Vk||null;c.QE=b.Yd||null}},Q:{qc:!1},cJ:function(b){this.Aw=!0;V.f.yW();V.f.ZH();this.Wg&&(this.Wg.stop(),this.Q.qc=!1);this.Q.Ik=null;this.Q.sf= null;var c=this.pg(b,!0);this.Q.HW=new Date;this.Q.Hk=c.Yd;this.Q.wi=c.Pb;this.Q.$Q=c.button;this.Q.lj=!0;this.Q.aR=c;this.Q.qc||(this.Q.NA=c);this.Kd&&this.Kd.stop();var d=c.Yd;!d.Zb&&d.get("dragEnable")&&(this.Q.lj=!0);V.f.pb(this.D,"amap-drag");c.Yd.l("mousedown",c);c.Yd!==this&&this.l("mousedown",c);V.w.d0(this.Xa.qd);V.w.e(document,"mousemove",this.wz,this);V.w.e(document,"mouseup",this.wt,this);try{window.parent.document&&V.j.rn&&V.w.e(window.parent.document,"mouseup",this.wt,this)}catch(e){}V.w.stopPropagation(b)}, hK:function(b){this.cY(b.event,b.YJ)},A3:function(b){this.wz(b.event,b.YJ)},eJ:function(b){b=this.pg(b);var c=b.Yd,d=this.Ca.get("allBubble")||c.get("bubble");c!==document&&(c.l("mouseup",b),b.Yd!==this&&d&&this.l("mouseup",b));this.tq(b.Pb,this.Q.wi)&&(this.Kf&&this.tq(this.Q.Ew,b.Pb)&&b.button===this.Q.$Q?(clearTimeout(this.Kf),this.Kf=null,V.w.FJ(b)?d?(c.l("dblclick",b),c!==this&&this.l("dblclick",b)):c.l("dblclick",b):c.l("rdblclick",b),this.Q.Ew=null):(V.w.FJ(b)?(d?(c.l("click",b),c!==this&& this.l("click",b)):(c.l("click",b),this.l("closeOverlays",b)),this.l("closeInfo",b),c.get("topWhenClick")&&c.Zb.setTop(!0)):d?(c.l("rightclick",b),c!==this&&this.l("rightclick",b),this.l("contextmenu",b)):(c.l("rightclick",b),c.l("contextmenu",b)),this.Q.Ew=b.Pb,this.Kf&&clearTimeout(this.Kf),this.Kf=setTimeout(V.g.bind(function(){clearTimeout(this.Kf);this.Kf=null;this.Q.Ew=null},this),260)))}});V.zd.Mc({yF:function(b){this.ua("mousewheel",b);var c=this;if(1<=Math.abs(this.Q.Lp)&&!this.AM){var d=this.Q.Lp;if(1<=d)d=1;else if(-1>=d)d=-1;else return;c.bs(b.rg,d);this.Q.Lp=0;this.AM=!0;setTimeout(function(){c.AM=!1;c.Q.Lp=0},V.j.Kt?50:40)}},uF:function(b){this.ua("mousemove",b)},vF:function(b){this.ua("mouseout",b)},wF:function(b){this.ua("mouseover",b)},xF:function(b){this.ua("mouseup",b)},tF:function(b){this.ua("mousedown",b)},zF:function(b){this.ua("rightclick",b)},oF:function(b){this.ua("contextmenu", b)},AF:function(b){this.get("doubleClickZoom")&&this.get("zoomEnable")&&this.bs(b.rg,-1);this.ua("rdblclick",b)}});V.zd.Mc({MQ:function(){this.Ro={left:[37],right:[39],GW:[40],GB:[38],L1:[187,107,61],M1:[189,109,173]};this.KO={left:this.Um(this.$r(100,0)),right:this.Um(this.$r(-100,0)),GW:this.Um(this.$r(0,-100)),GB:this.Um(this.$r(0,100)),L1:this.Um(this.YG(1)),M1:this.Um(this.YG(-1))}},gO:function(){this.get("keyboardEnable")&&(this.Ro||this.MQ(),V.w.e(document,"keydown",this.Yr,this),V.w.e(document,"keyup",this.mF,this))},bx:function(){V.w.C(document,"keydown",this.Yr,this);V.w.C(document,"keyup",this.mF,this)}, mF:function(b){var c=b.keyCode;!b.ctrlKey||37!==c&&39!==c||this.set("refresh",1)},Yr:function(b){var c=b.keyCode,d;for(d in this.Ro)if(this.Ro.hasOwnProperty(d))for(var e=0;e<this.Ro[d].length;e+=1)if(c===this.Ro[d][e]){if(!this.Aw)return;if(!b.ctrlKey){this.KO[d]();V.w.preventDefault(b);return}37===c?(this.eR(),V.w.preventDefault(b)):39===c&&(this.NT(),V.w.preventDefault(b))}},Um:function(b){return function(){b()}},eR:function(){this.get("rotateEnable")&&(this.l("rotate"),this.set("rotation",-15+ parseFloat(this.get("rotation"))%360))},NT:function(){this.get("rotateEnable")&&(this.l("rotate"),this.set("rotation",(15+parseFloat(this.get("rotation")))%360))},YG:function(b){var c=this.Ca;return function(){1===b?c.zoomIn():c.zoomOut()}},$r:function(b,c){var d=this.Ca;return function(){d.panBy(b,c)}}}); ', true),
	_jsload_('vectorlayer', '(function(b){b.j.un&&(b.Il=new b.hv(function(){function b(c,d,e){for(var g=0,h=e.length;g<h;g++){var k=e.charCodeAt(g);if(128>k)c.setUint8(d++,k>>>0&127|0);else if(2048>k)c.setUint8(d++,k>>>6&31|192),c.setUint8(d++,k>>>0&63|128);else if(65536>k)c.setUint8(d++,k>>>12&15|224),c.setUint8(d++,k>>>6&63|128),c.setUint8(d++,k>>>0&63|128);else if(1114112>k)c.setUint8(d++,k>>>18&7|240),c.setUint8(d++,k>>>12&63|128),c.setUint8(d++,k>>>6&63|128),c.setUint8(d++,k>>>0&63|128);else throw Error("bad codepoint "+ k);}}function d(b,c,d){var e="",g=c;for(c+=d;g<c;g++)if(d=b.getUint8(g),0===(d&128))e+=String.fromCharCode(d);else if(192===(d&224))e+=String.fromCharCode((d&15)<<6|b.getUint8(++g)&63);else if(224===(d&240))e+=String.fromCharCode((d&15)<<12|(b.getUint8(++g)&63)<<6|(b.getUint8(++g)&63)<<0);else if(240===(d&248))e+=String.fromCharCode((d&7)<<18|(b.getUint8(++g)&63)<<12|(b.getUint8(++g)&63)<<6|(b.getUint8(++g)&63)<<0);else throw Error("Invalid byte "+d.toString(16));return e}function e(b){for(var c= 0,d=0,e=b.length;d<e;d++){var g=b.charCodeAt(d);if(128>g)c+=1;else if(2048>g)c+=2;else if(65536>g)c+=3;else if(1114112>g)c+=4;else throw Error("bad codepoint "+g);}return c}function g(b,c){this.offset=c||0;this.view=b}function h(d,g,k){var l=typeof d;if("string"===l){var r=e(d);if(32>r)return g.setUint8(k,r|160),b(g,k+1,d),1+r;if(256>r)return g.setUint8(k,217),g.setUint8(k+1,r),b(g,k+2,d),2+r;if(65536>r)return g.setUint8(k,218),g.setUint16(k+1,r),b(g,k+3,d),3+r;if(4294967296>r)return g.setUint8(k, 219),g.setUint32(k+1,r),b(g,k+5,d),5+r}if(d instanceof ArrayBuffer){r=d.byteLength;if(256>r)return g.setUint8(k,196),g.setUint8(k+1,r),(new Uint8Array(g.buffer)).set(new Uint8Array(d),k+2),2+r;if(65536>r)return g.setUint8(k,197),g.setUint16(k+1,r),(new Uint8Array(g.buffer)).set(new Uint8Array(d),k+3),3+r;if(4294967296>r)return g.setUint8(k,198),g.setUint32(k+1,r),(new Uint8Array(g.buffer)).set(new Uint8Array(d),k+5),5+r}if("number"===l){if(d<<0!==d)return g.setUint8(k,203),g.setFloat64(k+1,d),9;if(0<= d){if(128>d)return g.setUint8(k,d),1;if(256>d)return g.setUint8(k,204),g.setUint8(k+1,d),2;if(65536>d)return g.setUint8(k,205),g.setUint16(k+1,d),3;if(4294967296>d)return g.setUint8(k,206),g.setUint32(k+1,d),5;throw Error("Number too big 0x"+d.toString(16));}if(-32<=d)return g.setInt8(k,d),1;if(-128<=d)return g.setUint8(k,208),g.setInt8(k+1,d),2;if(-32768<=d)return g.setUint8(k,209),g.setInt16(k+1,d),3;if(-2147483648<=d)return g.setUint8(k,210),g.setInt32(k+1,d),5;throw Error("Number too small -0x"+ (-d).toString(16).substr(1));}if("undefined"===l)return g.setUint8(k,212),g.setUint8(k+1,0),g.setUint8(k+2,0),3;if(null===d)return g.setUint8(k,192),1;if("boolean"===l)return g.setUint8(k,d?195:194),1;if("object"===l){var l=0,t=Array.isArray(d);if(t)r=d.length;else var w=Object.keys(d),r=w.length;16>r?(g.setUint8(k,r|(t?144:128)),l=1):65536>r?(g.setUint8(k,t?220:222),g.setUint16(k+1,r),l=3):4294967296>r&&(g.setUint8(k,t?221:223),g.setUint32(k+1,r),l=5);if(t)for(t=0;t<r;t++)l+=h(d[t],g,k+l);else for(t= 0;t<r;t++)var u=w[t],l=l+h(u,g,k+l),l=l+h(d[u],g,k+l);return l}throw Error("Unknown type "+l);}function k(b){var c=typeof b;if("string"===c){var d=e(b);if(32>d)return 1+d;if(256>d)return 2+d;if(65536>d)return 3+d;if(4294967296>d)return 5+d}if(b instanceof ArrayBuffer){d=b.byteLength;if(256>d)return 2+d;if(65536>d)return 3+d;if(4294967296>d)return 5+d}if("number"===c){if(b<<0!==b)return 9;if(0<=b){if(128>b)return 1;if(256>b)return 2;if(65536>b)return 3;if(4294967296>b)return 5;if(1.8446744073709552E19> b)return 9;throw Error("Number too big 0x"+b.toString(16));}if(-32<=b)return 1;if(-128<=b)return 2;if(-32768<=b)return 3;if(-2147483648<=b)return 5;if(-9223372036854775E3<=b)return 9;throw Error("Number too small -0x"+b.toString(16).substr(1));}if("undefined"===c)return 3;if("boolean"===c||null===b)return 1;if("object"===c){c=0;if(Array.isArray(b))for(var d=b.length,g=0;g<d;g++)c+=k(b[g]);else for(var h=Object.keys(b),d=h.length,g=0;g<d;g++)var l=h[g],c=c+(k(l)+k(b[l]));if(16>d)return 1+c;if(65536> d)return 3+c;if(4294967296>d)return 5+c;throw Error("Array or object too long 0x"+d.toString(16));}throw Error("Unknown type "+c);}var l={t4:function(b){if(void 0===b)return"undefined";var c,d;b instanceof ArrayBuffer?(d="ArrayBuffer",c=new DataView(b)):b instanceof DataView&&(d="DataView",c=b);if(!c)return JSON.stringify(b);for(var e=[],g=0;g<b.byteLength;g++){if(20<g){e.push("...");break}var h=c.getUint8(g).toString(16);1===h.length&&(h="0"+h);e.push(h)}return"<"+d+" "+e.join(" ")+">"}};l.Y5=b; l.X5=d;l.W5=e;l.Qp=function(b){var c=new ArrayBuffer(k(b)),d=new DataView(c);h(b,d,0);return c};l.nf=function(b){var c=new DataView(b),c=new g(c),d=c.parse();if(c.offset!==b.byteLength)throw Error(b.byteLength-c.offset+" trailing bytes");return d};g.prototype.map=function(b){for(var c={},d=0;d<b;d++){var e=this.parse();c[e]=this.parse()}return c};g.prototype.oy=function(b){var c=new ArrayBuffer(b);(new Uint8Array(c)).set(new Uint8Array(this.view.buffer,this.offset,b),0);this.offset+=b;return c};g.prototype.zu= function(b){var c=d(this.view,this.offset,b);this.offset+=b;return c};g.prototype.ey=function(b){for(var c=Array(b),d=0;d<b;d++)c[d]=this.parse();return c};g.prototype.parse=function(){var b=this.view.getUint8(this.offset);if(160===(b&224))return this.offset++,this.zu(b&31);if(128===(b&240))return this.offset++,this.map(b&15);if(144===(b&240))return this.offset++,this.ey(b&15);if(0===(b&128))return this.offset++,b;if(224===(b&224))return b=this.view.getInt8(this.offset),this.offset++,b;if(212===b&& 0===this.view.getUint8(this.offset+1))this.offset+=3;else{switch(b){case 217:return b=this.view.getUint8(this.offset+1),this.offset+=2,this.zu(b);case 218:return b=this.view.getUint16(this.offset+1),this.offset+=3,this.zu(b);case 219:return b=this.view.getUint32(this.offset+1),this.offset+=5,this.zu(b);case 196:return b=this.view.getUint8(this.offset+1),this.offset+=2,this.oy(b);case 197:return b=this.view.getUint16(this.offset+1),this.offset+=3,this.oy(b);case 198:return b=this.view.getUint32(this.offset+ 1),this.offset+=5,this.oy(b);case 192:return this.offset++,null;case 194:return this.offset++,!1;case 195:return this.offset++,!0;case 204:return b=this.view.getUint8(this.offset+1),this.offset+=2,b;case 205:return b=this.view.getUint16(this.offset+1),this.offset+=3,b;case 206:return b=this.view.getUint32(this.offset+1),this.offset+=5,b;case 207:var b=this.view.getUint32(this.offset+1),c=this.view.getUint32(this.offset+5);this.offset+=9;return 4294967296*b+c;case 208:return b=this.view.getInt8(this.offset+ 1),this.offset+=2,b;case 209:return b=this.view.getInt16(this.offset+1),this.offset+=3,b;case 210:return b=this.view.getInt32(this.offset+1),this.offset+=5,b;case 211:return b=this.view.getInt32(this.offset+1),c=this.view.getUint32(this.offset+5),this.offset+=9,4294967296*b+c;case 222:return b=this.view.getUint16(this.offset+1),this.offset+=3,this.map(b);case 223:return b=this.view.getUint32(this.offset+1),this.offset+=5,this.map(b);case 220:return b=this.view.getUint16(this.offset+1),this.offset+= 3,this.ey(b);case 221:return b=this.view.getUint32(this.offset+1),this.offset+=5,this.ey(b);case 202:return b=this.view.getFloat32(this.offset+1),this.offset+=5,b;case 203:return b=this.view.getFloat64(this.offset+1),this.offset+=9,b}throw Error("Unknown type 0x"+b.toString(16));}};return{Qp:function(b,c){c(null,{qn:b.qn,xd:b.xd,Jb:l.Qp(b.Jb)})},nf:function(b,c){c(null,{qn:b.qn,xd:b.xd,Jb:l.nf(b.Jb)})}}},{hostWorker:b.ut,clientId:"msg",lazy:!0}))})(V);V.mN=V.W.extend({oa:[V.ca],B:function(){this.dU=V.k.zM+"://"+V.k.Sq;this.Gi=[];this.yh=V.g.Ab(this);this.cO=1;this.Nb="closed";this.count=0;this.aB=[];V.event.T(window,"beforeunload",this.YY,this);V.Il&&V.Il.Ym()},YY:function(){this.aB.length&&new V.na.za(V.k.nb+"/js/count.js?"+["type=v","k="+V.k.key,"u="+V.k.al,"m="+(V.j.U?1:0),"pf="+V.j.uq,"frq="+this.aB.join(",")].join("&"))},close:function(){this.sb&&(this.Nb="closed",this.Gi=[],this.dw())},YV:function(){var b=this;if("closed"===b.Nb){var c= new WebSocket(this.dU);c.binaryType="arraybuffer";b.Nb="connecting";c.onopen=V.g.bind(this.hS,this);c.onclose=V.g.bind(this.OR,this);c.onerror=V.g.bind(this.Wa,this);c.ontimeout=V.g.bind(this.Wa,this);c.onmessage=V.g.bind(this.qS,this);this.sb=c;c.$V=setTimeout(function(){c.readyState!==WebSocket.OPEN&&b.pq()},1200)}},xJ:function(){return"connected"===this.Nb},pq:function(){this.Nb="unsupport";this.Gi=[];this.dw();this.l("disable")},Wa:function(){this.pq()},hS:function(){this.ZV=!0;this.flush();this.l("open")}, OR:function(){this.ZV?(this.Nb="closed",this.dw()):this.pq()},lF:function(b,c){if("unsupport"===this.Nb)return!1;"connected"===this.Nb?this.rG(b):("closed"===this.Nb&&this.YV(),this.Gi.push({data:b,Eq:c}));this.count+=1},WR:function(b){if("ack"===b.type)switch(b.command){case "tiles":this.l("ack",b);break;case "retain":this.Nb="connected";this.flush();break;case "close":this.pq()}else 0===b.content.errcode&&("tiles"===b.type?this.l("tiles",b):"traffic"===b.type&&this.l("traffic",b))},BZ:function(b){"encode"=== b.xd?this.lF(b.Jb):"decode"===b.xd&&this.WR(b.Jb)},send:function(b){var c=this.cO++,d=this;V.Il.Qp({xd:"encode",Jb:b,qn:this.yh},function(b,g){b||d.lF(g.Jb,c)});return c},rG:function(b){var c=this,d=c.sb;d.readyState==WebSocket.OPEN&&(d.send(b),c.bo&&clearTimeout(c.bo),c.bo=setTimeout(function(){c.pq();c.bo=null},5E3),c.MB&&clearTimeout(c.MB),c.MB=setTimeout(function(){c.close();c.MB=null},1E4))},dw:function(){var b=this.sb;b&&(clearTimeout(b.$V),b.onopen=b.onmessage=b.onerror=null,b.close(),this.sb= null)},flush:function(){if("connected"===this.Nb){for(var b=0;b<this.Gi.length;b+=1)this.rG(this.Gi[b].data);this.Gi=[]}},SW:function(b){for(var c=0;c<this.Gi.length;c+=1)if(this.Gi[c].Eq===b)return this.Gi.splice(c,1),!0;return!1},qS:function(b){this.bo&&(clearTimeout(this.bo),this.bo=null);var c=this;V.Il.Gs([b.data]);V.Il.nf({qn:c.yh,xd:"decode",Jb:b.data},function(b,e){b||c.BZ(e)})}});V.Uh={sM:function(){0===V.wa.Dc&&V.Uh.hJ()},V5:function(b,c){if(!b)return!1;for(var d=0,e=b.length;d<e;d++)if(b[d]&&b[d].Zn===c)return!0},MV:function(b,c){var d="limg-"+b.key+"-"+c.q.yh;V.wa[d]&&delete V.wa[d]},pX:function(b){return V.wa[b.Zn?b.Zn:b]},Fl:function(b){var c=null,d=null,e=!1;b.Zn?(c=b,d=c.Zn,(b=c.url)&&(e=!0)):d=b;var g=V.wa[d];e&&g&&g.src!==b&&(g=V.wa[d]=null);if(!g&&b){e="data:"===b.substr(0,5);g=document.createElement("img");e||(g.crossOrigin="Anonymous");V.wa[d]=g;g.loaded=!1;V.wa.Dc+= 1;V.w.e(g,"load",this.xt,this);V.w.e(g,"error",this.gJ,this);var h=this;g.Un=setTimeout(function(){g.loaded||h.hJ()},300);g.src=b;c&&(g.U2=d,c.url=null)}},hJ:function(){for(var b=0;b<V.wa.qk.length;b+=1)V.wa.qk[b].set("display")},FH:function(b){V.w.C(b,"load",this.xt,this);V.w.C(b,"error",this.gJ,this)},xt:function(b){b=b.target;b.loaded=!0;V.wa.Dc-=1;this.FH(b);this.sM();b.Un&&(clearTimeout(b.Un),b.Un=null)},gJ:function(b){b=b.target;b.loaded=!1;V.wa.Dc-=1;this.FH(b);this.sM();b.Un&&(clearTimeout(b.Un), b.Un=null)}};V.V.wg=V.V.Af.extend({B:function(b,c){V.wa.qk.push(this);this.yh=V.g.EI("layer");this.rb=2;b.get("textRatio");this.bC=25;this.P("tiles",b);this.q1=b.get("vdataUrl")||c.Ca.get("vdataUrl")||V.k.Sq;this.Zh=!0;this.Ua=b;this.yg=V.j.U?!1:!0;this.A=c;this.xh=this.wh=!0;this.ld("zoom center crs centerCoords resolution coordsBound styleID iconsID businessIconsID forceBig mode display".split(" "),c);this.ld("zooms detectRetina visible zIndex textIndex watermark opacity".split(" "),b);this.P("lang",c,!0);this.get("watermark")&& (this.eo=new Image,this.eo.src=this.get("watermark"));this.Ka={};this.pf={};this.Wc=256;this.Jl=[];this.ei=this.fi=0;this.pa=V.j.pa&&this.get("detectRetina");this.Wc=256*(this.pa?2:1);this.P("mapStyle",c);this.Mi=0;this.P("features",c);this.dn=this.get("crs");this.uf=18;this.P("reload",b)},mapStyleChanged:function(){var b=this.get("mapStyle");this.xg=V.k.xg[b]||V.k.xg["default"];this.Hq=!1;"normal"==b&&(this.Hq=!!this.A.get("showBuildingBlock"));this.featuresChanged()},featuresChanged:function(){this.set("reload")}, langChanged:function(){this.set("reload");this.Ua.Hn()},pU:function(){var b=!1,c=this.gE();if(c){if(this.Je){var d="active"===this.Je.Lo;c.Iv(this.Je);d&&(c.xm(this.Je,"active"),b=!0)}V.j.IV&&!b&&c.Px()}},uv:function(){this.pU()},Pq:function(b,c){var d=!0;if("hotspotout"===b)this.A.Ca.set("optimalCursor",null);else if("hotspotover"===b)this.A.Ca.set("optimalCursor","pointer");else if("mouseup"===b||"mousedown"===b)d=!1;var e=this.gE();if(e)switch(b){case "hotspotout":e.Xx(c);break;case "hotspotover":e.xm(c, "hover");break;case "mouseup":e.xm(c,"hoverup");break;case "mousedown":e.xm(c,"active")}d&&(d=c.Ga,d=new V.K(d[0],d[1]),d=this.A.Se(d,3),this.A.Ca.l(b,{name:c.name,lnglat:d,id:c.sq,isIndoorPOI:c.DJ}))},gE:function(){if(!V.j.jY){if(!this.J)return null;var b=this.A?this.A.Ca.get("hotspotOptions"):{},b=V.extend({},b);if(b.disableHighlight)return null;this.lp||(this.lp=new V.V.wg.oN(this.J));return this.lp}},qj:function(b){(b=this.MI(b))&&this.Pq("hotspotclick",b)},Em:function(b){if(!this.A.Ag||"mousemove"!== b.type){var c=this.MI(b);switch(b.type){case "mousemove":c&&this.Je!==c&&(this.Je&&this.Pq("hotspotout",this.Je),this.Pq("hotspotover",c));!c&&this.Je&&this.Pq("hotspotout",this.Je);break;case "mouseup":case "mousedown":c&&this.Pq(b.type,c)}this.Je=c}},textIndexChanged:function(){this.set("display")},DZ:function(){this.A.e("click",this.qj,this);this.A.e("mousemove",this.Em,this);this.A.e("mousedown",this.Em,this);this.A.e("mouseup",this.Em,this)},By:function(){this.A.C("click",this.qj,this);this.A.C("mousemove", this.Em,this);this.A.C("mousedown",this.Em,this);this.A.C("mouseup",this.Em,this)},MI:function(b){var c=this.A.Lt.hz(this);if(c)return c.DX(b)},Rh:function(){return null},Tj:function(){return{Zh:!0,Wc:256,visible:this.get("visible"),r:this.rt(),Pc:this.get("zooms"),Ks:this.yg&&this.zb,wh:!this.A.Hu,xh:!this.A.Hu,opacity:this.get("opacity"),Jc:!1}},Ih:function(b){if(V.J.canvas.wg)return new V.J.canvas.wg(this,b)},Ns:function(b){var c=this.get("forceBig")||V.j.U&&!this.pa?"6":"5";this.url=V.k.nc+"://"+ this.q1+"/tiles?mapType="+b+"&v=2&style="+c;this.url+=this.pa?"&rd=2":"&rd=1";this.url+="&flds="+this.ra;this.url+="&t="}}); V.V.pe=V.V.wg.extend({Ih:function(b){var c=this;if(!c.eo&&V.j.tn&&"vw"===c.A.get("baseRender")){if(V.J.cj.pe)return new V.J.cj.pe(c,b);V.Qa.load("wgl",function(){c.set("display")})}else{if(V.J.canvas.pe)return new V.J.canvas.pe(c,b);V.Qa.bf(["cmng","cgl"],function(){c.set("display")})}},featuresChanged:function(){var b=this.get("features"),c=[];"all"===b?c=["region","building","road"]:b&&(-1!==V.g.indexOf(b,"bg")&&c.push("region"),-1!==V.g.indexOf(b,"building")&&c.push("building"),-1!==V.g.indexOf(b, "road")&&c.push("road"));this.ra=c;this.Ns(this.get("mapStyle")||"normal");this.set("reload")}}); V.V.vg=V.V.wg.extend({Ih:function(b){var c=this;if(this.oJ()){if(this.Mu=!0,V.J.canvas.zC)return this.lV(),b=new V.J.canvas.zC(this,b),b.e("afterLabelRender",this.uv,this),b}else{c.Mu=!1;if(V.J.canvas.yC)return b=new V.J.canvas.yC(this,b),b.e("afterLabelRender",this.uv,this),b;b=["cmng","labelcanvas"];V.j.Ny&&b.push("labelDir");V.Qa.bf(b,function(){c.set("display")})}},oJ:function(){return"normal"!==this.get("mapStyle")||this.A.get("nolimg")?!1:V.j.Mu?!0:!1},pY:function(){return"normal"!==this.get("mapStyle")|| this.A.get("nolimg")||V.j.Jc||V.j.U?!1:!0},featuresChanged:function(){var b=this.get("features"),c=this.get("mapStyle"),d=[];"all"===b?d=["roadlabel","poilabel"]:b&&(-1!==V.g.indexOf(b,"road")&&d.push("roadlabel"),-1!==V.g.indexOf(b,"point")&&d.push("poilabel"));b=this.oJ();d.length&&(b||this.pY())&&d.unshift("limg");this.ra=d;this.Ns(c);this.set("reload");this.J&&b^this.Mu&&(this.lp&&(this.lp=this.lp.J=null),this.J.C("afterLabelRender",this.uv,this),this.J.XH(),this.J=null)},lV:function(){this.Dl= V.k.nb+"/js/limg.js?";var b=this.pa?2:1;this.Dl+="&font="+(V.j.U&&!this.pa?"big":"small");this.Dl+="&scl="+b;this.Dl+="&t="}});V.V.wg.oN=V.W.extend({B:function(b){this.UT(b)},UT:function(b){this.J=b},Xx:function(b){if(b.Lo){b.Lo=!1;var c=this.J;c&&c.Xx.apply(c,arguments)}},Iv:function(b){b.Lo=!1;var c=this.J;c&&c.Iv.apply(c,arguments)},xm:function(b,c){c||(console.warn("hlStyle is required, e.g. hover, active.."),c="hover");if(b.Lo!==c){b.Lo=c;var d=this.J;d&&d.xm.apply(d,arguments)}},Px:function(){var b=this.J;b&&b.Px()}});V.gv={Cv:function(b,c){this.Dd={};this.Dd.qn=V.g.Ab(this.Dd);c.sb||(c.sb=new V.mN);this.sb=c.sb;this.sb.e("tiles",this.wK,this);this.sb.e("ack",this.vK,this);this.sb.e("disable",this.tK,this);this.P("mapStyle",b,!0)},AK:function(b){if(this.q&&b.PJ===this.q.yh){var c=this.q.ra,c=c[c.length],d=null,d="poilabel"==c||"roadlabel"==c?"labels":"allbase";this.yd||this.Sf?this.PA([this.q,"groupcomplete",null,null,d]):(this.Yg(),this.Gm.at(this.q,"groupcomplete",null,null,d));c=0;for(d=b.mg.length;c<d;c+=1)this.sA(b.mg[c], b.Ht,b.Cq,b.U)}},sA:function(b,c){var d=b.xd,e=this.Ka.get(b.xB);if(e){var g=this.q.ra;e.ra||(e.Xb={});e.ra||(e.ra=[]);var h="";"poilabel"===d||"roadlabel"===d?(b.ai||(h=b.Jb,b.ai=null),e.ra.push.apply(e.ra,b.Jb),d===this.q.ra[this.q.ra.length-1]&&(e.ai=null)):e.Xb[d]=b.Jb;"building"!==d&&"poilabel"!==d||!b.Al||e.Ef||(e.Ef={},e.Ef.Hd=b.Al,V.hm&&V.hm.l("vecTileParsed.buildings",{Eu:e}));if("roadlabel"!==d&&"poilabel"!==d||!V.j.Ny)this.yd||this.Sf?this.PA([this.q,h,e,c,d]):(this.Yg(),this.Gm.at(this.q, h,e,c,d));d===g[g.length-1]&&(d="roadlabel"===d||"poilabel"===d?"labels":"allbase",this.yd||this.Sf?this.PA([this.q,"tileComplete",e,c,d]):(this.Yg(),this.Gm.at(this.q,"tileComplete",e,c,d)))}},BH:function(){if(this.sb&&"unsupport"!==this.sb.Nb){var b={command:"status",payload:{mapType:this.get("mapStyle"),style:V.j.U&&!this.q.pa?"6":"5",rd:this.q.pa?2:1}};this.sb.send(b)}},mapStyleChanged:function(){this.BH()},tK:function(){for(var b in this.Dd)this.Dd.hasOwnProperty(b)&&this.Dd[b].Fu&&(this.Bo(this.Dd[b].Fu, this.Dd[b].Zj),delete this.Dd[b]);this.sb=null;this.ii("mapStyle");this.set("display",1)},vK:function(b){var c=b.reqId;this.Dd[c]&&(!b.content.status&&this.Dd[c]&&this.Bo(this.Dd[c].Fu,this.Dd[c].Zj),delete this.Dd[c])},wK:function(b){if(this.Dd[b.reqId]){var c=b.content.opt;c===this.Ed?this.rA(b.content.data,c):this.Bo(this.Dd[b.reqId].Fu,this.Dd[b.reqId].Zj)}},SY:function(b,c){if(b.length){var d=1,e=[];18<c&&(d=Math.pow(2,c-18));for(var g=this.q.dn.Qh(b[0].Ya.z),h=0;h<b.length;h+=1){var k=b[h], l=k.Ya;k.Zj=c;l.N=g;if(18<c&&!this.Wj){for(var m=0;m<d;m+=1)for(var n=0;n<d;n+=1){var p=new V.Cf(new V.rh(c,d*l.x+m,d*l.y+n));this.Ka.sc(p.key)||(this.Ka.set(p.key,p),p.status="loading")}this.Ka.set(k.key+"/"+c,k)}else{this.Ka.set(k.key,k);if(this.Wj&&10>l.z&&this.lX(k)){this.set("display",0);continue}k.status="loading"}k=l.x;m=l.y;l=l.z;10>l&&(n=Math.pow(2,l),k>=n||0>k)&&(k=(k+n)%n);e.push(V.g.Ry(k,m,l).join(","))}e.length&&(!this.Ft&&this.sb&&"unsupport"!==this.sb.Nb?(1>this.sb.count||3<this.Kx? this.$z(b,c,e):(2!==this.sb.count&&"connected"===this.sb.Nb||this.BH(),this.RY(b,c,e)),this.sb.count+=1,this.sb.NJ&&this.sb.aB.push(Math.ceil((new Date-this.sb.NJ)/1E3)),this.sb.NJ=new Date):this.$z(b,c,e))}},RY:function(b,c,d){var e=(new Date).getTime()+"-"+(this.sb.count+1&65535),g={command:"tiles",reqId:e,payload:{t:d,opt:c,cs:{level:c,flds:this.q.ra.join(",")}}},h;if(!this.sb.xJ()){var k=this;setTimeout(function(){k.sb&&!k.sb.xJ()&&(k.Kx?k.Kx++:k.Kx=1,k.sb.SW(h)&&(delete k.Dd[e],k.$z(b,c,d)))}, 300)}h=this.sb.send(g);this.Dd[e]={Fu:b,Zj:c}},uA:function(b){b.zb||(b.status="",b.zb=void 0,b.sa=null,b.$b=null,b.hc&&(b.hc.$b=null,b.hc.hc=null,b.hc=null),this.Ka.cm(b.key))},nW:function(b){b=b.split(";");for(var c=0,d=b.length;c<d;c+=1){b[c]=b[c].split(",");for(var e=0,g=b[c].length;e<g;e+=1)b[c][e]=parseInt(b[c][e],36)}return b},rA:function(b,c,d){if(this.q){for(var e=[],g=0,h=b.length;g<h;g+=1){var k=b[g];k&&(d&&(k=JSON.parse(k)),k["x-vd-v"]?(this.Kp=k["x-vd-v"],this.Fz=k.tv,k.bgc&&(k="#"+k.bgc.substring(2), this.q.xg!==k&&(this.q.xg=k,this.q.A.DL(k)))):this.qA(k,c,e))}if(e.length){var l=this;b=null;var m;this.Wj?(b=V.A1,m=b.JA):(b=V.ut,m=this.Ft?b["label:parseLabel"]:b["base:parseData"]);var n=l.q.get("iconsID"),p=l.q.get("businessIconsID"),q=l.q.get("mode");(function(){m({PJ:l.q.yh,Ht:c,mode:q,iY:n,sV:p,Cq:l.q.get("forceBig")?!1:l.q.pa,tL:l.q.get("forceBig")?1:l.q.rb,U:l.q.get("forceBig")||V.j.U,Os:V.k.Os||null,mg:e,f_:V.k.nc,oV:l.q.Hq,Kp:l.Kp,Fz:l.Fz},function(b,c){if(l.q)if(b)console.log(b);else{var d= c.icons;if(d)for(var e=0;e<d.length;e+=1)V.Uh.Fl(d[e]);c.data&&l.AK(c.data)}})})()}}},qA:function(b,c,d){function e(e,g,h){g=[h,e,g].join("/");18<c&&!m.Wj&&(g+="/"+c);if((e=m.Ka.get(g))&&"loaded"!==e.status)if(m.jM(e,q)){if(-1!==p.indexOf(n))if("limg"===n){if(g=b[1],e.ai=g,"string"===typeof g.b&&(g.b=m.nW(g.b)),h="",h="object"===typeof g.u?g.u.url:g.u)e={url:h,Zn:"limg-"+e.key+"-"+m.q.yh},g.u=e,V.Uh.Fl(e,!0)}else{g={Wl:e.Ya,xB:g,Jb:b,xd:n,dV:m.q.xg,zY:"building"===n,sn:"poilabel"===n||"roadlabel"=== n||"building"===n&&m.q.Hq};if("poilabel"===n||"roadlabel"===n)g.ai=e.ai;n===p[p.length-1]&&(e.status="loaded");d.push(g)}}else m.kB(c,e,q,V.g.bind(m.uA,m)),18<c&&m.Ka.cm(g)}var g=b[0].split("-"),h=parseInt(g[1]),k=parseInt(g[2]),l=parseInt(g[0]),m=this,n=g[3],p=this.q.ra,q=18<c?Math.pow(2,c-18):1,g=Math.ceil(m.Uf.cu/2),r=Math.pow(2,l);10>l&&(h<=g&&e(h+r,k,l),h>=r-g&&e(h-r,k,l));e(h,k,l)},PA:function(b){this.Xk||(this.Xk=[]);this.Xk.push(b)},Yg:function(){if(this.Xk&&this.Xk.length){for(var b=0,c= this.Xk.length;b<c;b+=1)this.Gm.at.apply(this.Gm,this.Xk[b]);this.Xk=[]}},Bo:function(b,c,d){d||(d=18<c?Math.pow(2,c-18):1);for(var e=0;e<b.length;e+=1){var g=b[e];this.kB(c,g,d,V.g.bind(this.uA,this));18<c&&this.Ka.cm(g.key+"/"+c)}},zI:function(b,c){return this.q.url+c.join(";")+"&lv="+b},$z:function(b,c,d){function e(d,e){if(c!==k.Ed)k.Bo(b,c,l),g.ED=!0,g.startTime||(g.onreadystatechange="");else{var h=d.split("|");h[0]=e+h[0];var q=h,r="";h[h.length-1]&&(r=h[h.length-1],q=h.splice(0,h.length-1)); k.rA(q,c,!0);return r}}var g=new XMLHttpRequest;d=this.zI(c,d,b);var h=0,k=this;g.au="";var l=18<c?Math.pow(2,c-18):1;g.onreadystatechange=function(){if(k.q)if(3===g.readyState){if(!g.ED){var d=g.responseText.substring(h);this.au=e(d,this.au);h=g.responseText.length;g.pD=!0}}else 4===g.readyState&&(g.ED||(d=g.responseText.substring(h),k.Ft&&(d+="|"),e(d,this.au),this.au="",g.pD=!0),g.startTime&&(V.vd.uI=new Date-g.startTime,V.vd.gX=g.responseText.length/2),g.pD||k.Bo(b,c,l))};g.onerror=function(){}; this.dY||(this.dY=1,V.vd.Rp=g.startTime=new Date);g.open("GET",d,!0);g.send()},jM:function(b,c){var d=this.Wq||this.Uf,e=b.Ya.x,g=b.Ya.y;return e>Math.floor(d.Od/c)||e<Math.floor(d.fe/c)||g>Math.floor(d.bd/c)||g<Math.floor(d.Vc/c)?!1:!0},kB:function(b,c,d,e){if(18<b){c=c.Ya;for(var g=0;g<d;g+=1)for(var h=0;h<d;h+=1){var k=new V.rh(b,d*c.x+g,d*c.y+h)+"";(k=this.Ka.get(k))&&e(k)}}else e(c),c.hc&&e(c.hc)}};V.J.canvas.vg=V.J.ug.extend({oa:[V.gv],B:function(b,c){arguments.callee.Za.apply(this,arguments);this.yh=V.g.Ab(this);this.nm=300;this.uf=b.uf;this.Ft=this.Zh=!0;this.Om=1;var d=this;this.sE=function(){d.mZ=!0;d.set("display",0)};this.ce()},Zv:function(b){V.Uh.MV(b,this);var c=V.J.canvas.vg.qe.Zv;c&&c.apply(this,arguments)},ce:function(){this.Eg=document.createElement("canvas");this.Eg.className="amap-labels";this.Eg.draggable=!1;this.Eg.EJ=!0;this.mj=this.Eg.getContext("2d");this.bq=[];this.lq=[]; this.jg=this.q.pa?16:8},Rl:function(b){var c=Math.pow(2,b.la.zoom-this.yc),d=this.q.pa?this.q.rb:1,e=b.la.Aa.Ja(this.Xj).Gb(this.zc);this.transform={translate:this.transform.translate.add(e.tc(d)),scale:c/d,rotate:0};this.Aa=b.la.Aa},Nn:function(b,c){if(!this.ia||3E4<Math.abs(this.Aa.x-this.ia.x)/this.N||3E4<Math.abs(this.Aa.y-this.ia.y)/this.N)this.ia=this.Aa;this.cd=this.yc;this.vf=this.zc;this.aj=!1;this.currentTime=+new Date;this.IB=c.IB;this.ac=[this.ma.$a.x,this.ma.$a.y];this.yg=c.Ks;var d= this.Lq;this.yd=this.zoom<<0!==this.zoom;var e=this.Aa.Ja(this.ia);e.x<-V.g.Va/2&&(e.x+=V.g.Va);e.x>V.g.Va/2&&(e.x-=V.g.Va);this.uy=e.Gb(this.zc);for(j=d.length-1;0<=j;j-=1)if(e=d[j],e.length){var g=e[0].Ya.z,h=!1;!1===b.ZU||!e.yp||V.wa.Dc||!(g<=this.zoom&&"in"==this.vA||g>=this.zoom&&"out"==this.vA)&&this.vA||this.labels&&this.labels.ee===this.ee&&this.SA(this.labels.yB,this.Uf)||(h=!0,this.labels&&this.labels.gh?(this.Yj=this.labels.gh,this.Yj.zoom=this.labels.zoom):(this.Yj=[],this.Yj.zoom=null), this.labels=[],this.labels.zoom=g,this.labels.ee=this.ee,this.labels.yB=this.Uf);if(h){for(g=e.length-1;0<=g;g-=1){var k=e[g],h=!1,l=k.ra;!l&&k.hc&&k.hc.ra&&(l=k.hc.ra,h=!0);if(l){for(var k=0,m=l.length;k<m;k+=1)l[k].reverse=h;Array.prototype.push.apply(this.labels,l)}}this.labels.sort(function(b,c){return b.hk>c.hk?-1:b.ae>=c.ae?-1:1})}}this.CV(b)&&this.y_(b);this.mZ=!1;this.Kc(b)},he:function(b,c){this.ee=b.ee;this.io=b.io;this.$t(b,c);this.yd||this.Yg();this.Xj&&(b.oM||b.AB&&V.j.Lf||b.Sf&&!b.yd&& b.eV)?this.Rl(b,c):this.Nn(b,c);this.Xj=this.Aa;this.Nh=this.labels;this.aj&&this.set("display",0)},Kc:function(b){var c=this.Aa.Ja(this.ia);c.x<-V.g.Va/2&&(c.x+=V.g.Va);c.x>V.g.Va/2&&(c.x-=V.g.Va);this.transform={translate:new V.K(b.ma.cb.x*(this.q.pa?this.q.rb:1),b.ma.cb.y*(this.q.pa?this.q.rb:1)),scale:1/(this.q.pa?this.q.rb:1),rotate:0}},SA:function(b,c){return b.Vc===c.Vc&&b.fe===c.fe&&b.bd===c.bd&&b.Od===c.Od},DX:function(b){var c;this.labels&&(c=this.FX(b))&&(c.DJ=!1);!c&&this.Cb&&(c=this.EX(b))&& (c.DJ=!0);return c||null},FX:function(b){var c=b.rg.x/this.N;b=b.rg.y/this.N;for(var d=this.labels.gh||this.labels,e=d.length-1;0<=e;e-=1){var g=d[e],h=g.Ga[0]/this.N,k=g.Ga[1]/this.N;if(g.sq&&this.zJ(g,c,b,h,k))return g}},EX:function(b){var c=b.rg.x/this.N;b=b.rg.y/this.N;for(var d=this.Cb.length-1;0<=d;d-=1){var e=this.Cb[d],g=e.Ga[0]/this.N,h=e.Ga[1]/this.N;if(e.sq&&this.zJ(e,c,b,g,h))return e}},zJ:function(b,c,d,e,g){for(var h=0;h<b.kb.length;h+=1){var k=b.kb[h][2],l=b.kb[h][3],m=b.kb[h][0],n= b.kb[h][1];this.q.pa&&(k/=this.q.rb,l/=this.q.rb,m/=this.q.rb,n/=this.q.rb);if(c>=e+m-1&&c<=e+m+k+1&&d>=g+n-1&&d<=g+n+l+1)return!0}return!1},reloadChanged:function(){this.q&&(this.q.zb=!1,V.vd.Rp=null);this.Ka.clear();this.labels=[];this.bq=[];this.lq=[];this.lb&&this.lb.parentNode&&this.lb.parentNode.removeChild(this.lb);this.Eg&&this.Eg.parentNode&&this.Eg.parentNode.removeChild(this.Eg);this.set("display")},qf:function(){return this.Eg}});V.J.canvas.zC=V.J.canvas.vg.extend({zI:function(b,c){return this.q.Dl+c.join(";")+"&lv="+b},rA:function(b,c){if(this.q){for(var d=[],e=0,g=b.length;e<g;e+=1){var h=b[e];h&&(h=JSON.parse(h),h["x-vd-v"]?this.Kp=h["x-vd-v"]:this.qA(h,c,d,this.Kp||"v4"))}this.set("display")}},UK:function(b,c){var d=0,e=0,g=1,d=256*c.x,e=256*c.y,g=c.N;return[(d+b[0])*g,(e+b[1])*g]},qA:function(b,c,d,e){function g(d,g,l){if(d=p.Ka.get([l,d,g].join("/"))){g=d.Ya;var m=V.k.nc+"://vdata.amap.com/icons/"+(h||k?"b":"n")+(10> g.z?"39":"18")+"/1/";if(d&&"loaded"!==d.status)if(p.jM(d,t)){if(-1!==r.indexOf(q))if("limg"===q)b[1]&&(d.ai={url:"data:image/png;base64,"+b[1],Zn:"limg-"+d.key+"-"+p.q.yh},V.Uh.Fl(d.ai,!0));else{if("roadlabel"===q)for(var n=1;n<b.length;n+=1){var u=b[n];u.Du=u[0];var C=V.g.FB(u[1]);if(!(0>C[0]||256<=C[0]||0>C[1]||256<=C[1])){var T=p.UK(C,g),C={Ga:T,name:u[0],Et:!0,rg:C,wa:[],kb:[]},P=C.name;C.Dq=5>u[2]?0:u[2];var T=u[3],R=T[2];l=T[3];var G=-Math.floor(l/2);if(u[4])if("v5"==e){var x=u[5].split(":"), z=x[1],z=parseInt(z)-1,x=V.k.nc+"://vdata.amap.com/style_icon/icon-normal-"+(h||k?"big":"small")+".png";V.Uh.Fl(x);C.wa.push(x);var x=Math.floor(z/10),I=z%10,F=gridSize=0,A=0;k?(F=48,A=gridSize=40):h?(F=gridSize=40,A=36):(F=gridSize=24,A=20);var B=F*Math.max(R+2,A)/A,x=[-B/2,-F/2,B,F,gridSize*I,gridSize*x,gridSize,gridSize];C.ae=7;C.kb.push(x)}else{G=!1;z=parseInt(u[5]);153==z&&(0===P.indexOf("G")?(z="153g",G=!0):0===P.indexOf("S")&&(z="153s",G=!0));if(151==z||150==z)G=!1,0===P.indexOf("G")&&(z=150, G=!0),0===P.indexOf("S")&&(z=151,G=!0);152===z&&(z=151);!0===G&&(m=V.k.nb+"/theme/v1.3/icons/"+(h||k?"b/":"n/"));x=m+z+".png";V.Uh.Fl(x);C.wa.push(x);B=u[4][0]*w;u=u[4][1]*w;x=[-B/2,-u/2,B,u];C.kb.push(x);R=Math.min(B-3,R);l=Math.min(u,l);G=-Math.floor(l/2)+(k?3:1)}C.wa.push(d.ai);C.ae=11;C.kb.push([-Math.floor(R/2),G,R,l,T[0],T[1],T[2],T[3]]);d.ra||(d.ra=[]);d.ra.push(C)}}else if("poilabel"===q){P=[];for(n=1;n<b.length;n+=1)if(u=b[n],u.Du=u[0],C=V.g.FB(u[1]),!(0>C[0]||256<=C[0]|| 0>C[1]||256<=C[1])){T=p.UK(C,g);C={Ga:T,name:u[0].replace("^",""),Dt:!0,rg:C,wa:[],kb:[]};z=0;C.hk=u[8];u[6]&&("v5"==e?(x=u[6].split(":"),z=x[1],G=Math.floor((parseInt(x[0].split("_")[1])-28)/2)):z=u[6]);if(z&&u[3]){if("v5"==e){x=V.k.nc+"://vdata.amap.com/style_icon/icon-"+("1"==G?"biz-":"normal-")+(h||k?"big":"small")+".png";V.Uh.Fl(x);C.wa.push(x);z=parseInt(z)-1;x=Math.floor(z/10);I=z%10;gridSize=0;k?(F=48,gridSize=40,A=28):h?(F=gridSize=40,A=28):(F=gridSize=24,A=20);B=F;if(151==z||152==z||153== z)A-=4,R=u[7][0][2],B=F*Math.max(R+2,A)/A;x=[-B/2,-F/2,B,F,gridSize*I,gridSize*x,gridSize,gridSize]}else x=m+z+".png",V.Uh.Fl(x),C.wa.push(x),x=[-Math.round(u[3][0]/2),-Math.round(u[3][1]/2),u[3][0],u[3][1]],k&&(x[0]*=w,x[1]*=w,x[2]*=w,x[3]*=w);C.kb.push(x)}if(u[2]&&u[7])for(R=u[2],x=0;x<u[2].length;x+=1){C.wa.push(d.ai);T=u[7][x];k&&(R[x][0]=Math.round(R[x][0]*w),R[x][1]=Math.round(R[x][1]*w),R[x][2]=Math.round(R[x][2]*w),R[x][3]=Math.round(R[x][3]*w));B=R[x][0];I=R[x][1]-(k?4:2);F=T[3];A=T[2];B< -A&&z&&u[3]&&(B=-A+C.kb[0][0]);if("v5"!==e){if("375"===z||"3751"===z)A=Math.min(R[x][2],k?24:14),B=-Math.floor(A/2),I=-Math.floor(F/2)}else B-=2;C.ae=F-4;4==l&&"\\u5317\\u4eac"==C.name&&(I=k?-50:-26);C.kb.push([B,I,A,T[3],T[0],T[1],T[2],T[3]])}C.zl=u[5];C.zl&&P.push(C.zl);C.sq=u[4];C.Hl=u[9];C.N4=u[10];d.ra||(d.ra=[]);d.ra.push(C)}d.Ef||(d.Ef={},d.Ef.Hd=P)}q===r[r.length-1]&&(d.status="loaded",d.zb=d.sa=!0,d.hc&&(d.hc.zb=d.hc.sa=!0))}}else p.kB(c,d,t,V.g.bind(p.uA,p))}}var h=V.j.U,k=this.q.pa,l=b[0].split("-"); 1==l.length&&(l=b[0].split("_"));d=parseInt(l[1]);var m=parseInt(l[2]),n=parseInt(l[0]),p=this,q=l[3],r=this.q.ra,t=18<c?Math.pow(2,c-18):1,l=Math.ceil(p.Uf.cu/2),w=this.q.pa?this.q.rb:1,u=Math.pow(2,n);10>n&&(d<=l&&g(d+u,m,n),d>=u-l&&g(d-u,m,n));g(d,m,n)}});V.J.canvas.vg.Mc({y_:function(b){this.Om++;var c=this.Eg,d=this.mj;this.Uj={};var e=b.ma.$a.Gb(this.N);this.Uj.G5=e.x%this.jg-this.jg;this.Uj.H5=e.x%this.jg-this.jg;var g=this.q.pa?this.q.rb:1;0!==b.la.rotation?(e=2*Math.floor(b.ma.cb.x)*g,g*=2*Math.floor(b.ma.cb.y)):(e=b.size.width*g,g*=b.size.height);V.f.gi(c,e,g,!0);d.textBaseline="bottom";this.jJ=0;b.Cb&&(this.VK(b.Cb,1,b.Cb),0===b.Cb.length&&this.labels&&this.labels.gh&&this.labels.zoom===this.zoom&&this.labels.gh.length!==this.labels.length&& (this.labels.gh=null));this.labels&&this.VK(this.labels,0,b.Cb);!V.j.U&&this.Yj&&this.Yj.length&&this.CX(b);this.bq=this.bq&&this.gL(d,this.bq,480);this.lq=this.lq&&this.gL(d,this.lq,200);b.Cb&&this.jL(b.Cb,d,V.Ie.GI(this.A.Ca),this.bc,e,g);this.labels&&this.jL(this.labels,d,V.Ie.GI(this.A.Ca),this.bc,e,g);this.Yj=[];this.labels&&(this.labels.On=this.zoom,this.labels.Ln=this.Aa,this.labels.Bq=this.rotation,this.labels.lL=this.q.pa,this.labels.size=b.size);b.Cb&&(this.Cb=b.Cb);this.Cb&&(this.Cb.On= this.zoom,this.Cb.Ln=this.Aa,this.Cb.Bq=this.rotation,this.Cb.size=b.size);this.l("afterLabelRender")},hL:function(b,c){for(var d=0,e=c.wa.length;d<e;d+=1)this.LW(b,c.wa[d],c.kb[d],c.Dq);c.ff&&this.cI&&this.cI(b,c)},LW:function(b,c,d,e){var g=this.mj;c=this.Up(c);if(!c)return 1;var h=d[2],k=d[3],l=d[0],m=d[1];e=(e||0)%360*-Math.PI/180;if(0!==e){var n=Math.cos(e),p=Math.sin(e),q=b[0],r=b[1];g.transform(n,p,-p,n,(1-n)*q+p*r,(1-n)*r-p*q)}l=b[0]+l;b=b[1]+m;4===d.length?c.loaded&&g.drawImage(c,l,b,h,k): g.drawImage(c,d[4],d[5],d[6],d[7],l,b,h,k);0!==e&&g.setTransform(1,0,0,1,0,0)},Up:function(b){if("IMG"===b.tagName||"CANVAS"===b.tagName||(b=V.Uh.pX(b))&&b.loaded)return b},tt:function(b){var c=b.Ga,d=c[0];b.reverse&&(d>V.g.Va/2?d-=V.g.Va:d<-V.g.Va/2&&(d+=V.g.Va));return this.Ib(d,c[1])},Ib:function(b,c){var d=this.q.pa?this.q.rb:1,e=this.N,g=y=0,g=(b-this.ac[0])/e;y=(c-this.ac[1])/e;return[Math.round(g*d),Math.round(y*d)]},KX:function(b){var c=b.Ga,d=c[0];b.reverse&&(d>V.g.Va/2?d-=V.g.Va:d<V.g.Va/ 2&&(d+=V.g.Va));return[d/this.N,c[1]/this.N]},IY:function(b,c){var d=b.Ga;return d[0]>c.Wb.x||d[1]>c.Wb.y||d[0]<c.$a.x||d[1]<c.$a.y?!1:!0},CX:function(b){var c=this.Yj;if(this.Yj.zoom!==this.labels.zoom)for(var d=0,e=c.length;d<e;d+=1){var g=c[d];g.Dt&&this.IY(g,b.ma)&&(this.lq.push(g),g.zoom=c.zoom,g.Cz=new Date)}},VK:function(b,c,d){var e=!(!d||!d.length),g=b.zoom-this.zoom,h=b.gh||b;if(0<g||e){b.gh=[];for(var k=0,l=h.length;k<l;k+=1){var m=h[k],n=this.KX(m);m.Dt||c?m.zl&&e&&d.lK&&-1!==V.g.indexOf(d.lK, m.zl)||(5>g&&this.nY(n,m,0<g,c,e)?b.gh.push(m):V.j.U||0==g&&!c||(this.bq.push(m),m.zoom=this.labels?this.labels.zoom:this.yc,m.Cz=new Date)):m.Et&&b.gh.push(m)}}else b.gh=b;return!1},gL:function(b,c,d,e,g){for(var h=new Date,k=[],l=0,m=c.length;l<m;l+=1){var n=c[l],p=Math.max(0,Math.abs(n.zoom-this.zoom)),p=Math.max(0,1-(h-n.Cz)/(1/Math.pow(1.3,p)*d));0<p?(k.push(n),b.globalAlpha=p,p=this.tt(n),-20>p[0]||p[0]>e+20||-20>p[1]||p[1]>g+20||this.hL(p,n)):n.Cz=void 0}k.length&&(this.jJ=this.aj=1);return k}, jL:function(b,c,d,e,g,h){e=b.zoom!==this.zoom;18==b.zoom&&18<this.zoom&&(e=!1);c.globalAlpha=1;b=b.gh;c=0;for(var k=b.length;c<k;c+=1){var l=b[c];if(!(e&&l.Et||l.ti&&d&&0<=d.indexOf(l.ti))){var m=this.tt(l);-20>m[0]||m[0]>g+20||-20>m[1]||m[1]>h+20||this.hL(m,l)}}},CV:function(b){this.Nh&&this.Nh.lL!==this.q.pa&&this.q.set("reload");if(this.jJ)return!0;if(b.Cb&&b.Cb.length)if(this.Cb&&this.Cb.length){if(this.Cb!==b.Cb||this.Cb.On!==this.zoom||this.Cb.Ln!==this.Aa||this.Cb.Bq!==this.rotation||!this.Cb.size.Hb(b.size))return!0}else return!0; else if(this.Cb&&this.Cb.length)return!0;return!this.labels||this.labels===this.Nh&&this.Nh&&this.Nh.On===this.zoom&&this.Nh.Ln===this.Aa&&this.Nh.ee===b.ee&&this.Nh.Bq===this.rotation&&this.Nh.lL===this.q.pa&&this.Nh.size.Hb(b.size)?!1:!0},nY:function(b,c,d,e,g){if(!g&&!d&&!e)return!0;var h;g=c.wa.length;if(c.Hl>this.zoom)h=!0;else if(!d&&e)h=!1;else for(var k=0;k<g;k+=1){var l=c.kb[k],m=l[2],n=l[3],p=l[0],l=l[1],p=b[0]+p,l=b[1]+l;this.oY(p,l,m,n)||(h=!0)}if(!h&&(d||e))for(k=0;k<g;k+=1)for(l=c.kb[k], m=l[2],n=l[3],p=l[0],l=l[1],p=b[0]+p,l=b[1]+l,d=Math.ceil((p+m)/this.jg),e=Math.ceil((l+n)/this.jg),p=Math.floor(p/this.jg),l=Math.floor(l/this.jg),Sb=0,il=d-p;Sb<=il;Sb+=1)for(k=0,jl=e-l;k<=jl;k+=1)this.Uj[p+Sb]||(this.Uj[p+Sb]={}),this.Uj[p+Sb][l+k]=1;return!h},oY:function(b,c,d,e){d=Math.ceil((b+d)/this.jg);e=Math.ceil((c+e)/this.jg);b=Math.floor(b/this.jg);c=Math.floor(c/this.jg);Sb=0;for(il=d-b;Sb<=il;Sb+=1)if(this.Uj[b+Sb])for(j=0,jl=e-c;j<=jl;j+=1){if(1===this.Uj[b+Sb][c+j])return!1}else this.Uj[b+ Sb]={};return!0}});V.J.canvas.vg.TM=V.W.extend({B:function(b){this.J=b},TT:function(b){this.ee=b;return this.Dx([0,0,0])?!0:this.ee=!1},HE:function(){return this.J.yd?!1:!0},xQ:function(b){if(b){var c=Array.prototype.slice.call(arguments,0);switch(b.type){case "icon":return this.AQ.apply(this,c);case "label":return this.BQ.apply(this,c);default:console.error("Unknown type",b)}}},bE:function(b,c,d){b=null;try{b=c.getImageData.apply(c,d)}catch(e){console.error(e),b=null}return b},oU:function(b){return 0>b?0:255<b?255: Math.round(b)},PG:function(b,c){for(var d=0;4>d;d++)b[c+d]=this.oU(b[c+d]);return b},Cx:function(b,c){var d=259*(c+255)/(255*(259-c));return[d*(b[0]-128)+128,d*(b[1]-128)+128,d*(b[2]-128)+128]},LT:function(b){return[255-b[0],255-b[1],255-b[2]]},Dx:function(b,c){isNaN(c)&&(c=20);var d=Math.max(0,0.299*b[0]+0.587*b[1]+0.114*b[2]-c);switch(this.ee){case "normal":return[1*d,1.2*d,255];case "light":return[1*d,1*d,255];case "fresh":return[1*d,1*d,220];case "dark":return[1.5*b[0],1.5*b[1],1*b[2]];case "blue_night":case "mapv":return[2* b[0],1.5*b[1],1*b[2]]}return!1},CQ:function(b,c){var d=20,e=10;switch(c.xl){case "active":d+=20,e+=20}return this.Cx(this.Dx(b,d),e)},qE:function(b,c){var d=-110;switch(c.xl){case "active":d+=30}return this.Cx(this.Dx(this.LT(b),d),50)},zQ:function(b){return this.Cx(b,20)},pE:function(b,c,d,e,g,h){var k=b[c],l=b[c+1],m=b[c+2];b=b[c+3];0<b?(g=g.call(this,[k,l,m,b],h),d[e]=g[0],d[e+1]=g[1],d[e+2]=g[2]):(d[e]=k,d[e+1]=l,d[e+2]=m);d[e+3]=b;this.PG(d,e)},TP:function(b){var c=b.data,d=b.width;b=b.height; for(var e=0,g=0,h=[Infinity,Infinity],k=[-Infinity,-Infinity],l=0;l<d;l++)for(var m=0;m<b;m++){var n=4*this.mw(l,m,d,b);if(!(76.5>c[n+3])){g++;l<h[0]&&(h[0]=l);m<h[1]&&(h[1]=m);l>k[0]&&(k[0]=l);m>k[1]&&(k[1]=m);for(var p=!0,q=0;4>q;q++)if(220>c[n+q]){p=!1;break}p&&e++}}return{F1:0<g?e/g:0,UV:[h[0],h[1],k[0]-h[0]+1,k[1]-h[1]+1]}},mw:function(b,c,d){return c*d+b},us:function(b,c,d,e,g,h,k){var l=this.mw(c,d,e,g);e=b[4*l+0];g=b[4*l+1];var m=b[4*l+2];b=b[4*l+3];if(b/255<k.fK||k.hM&&!k.hM.call(this,e, g,m,b))return!1;h.push([c,d]);return!0},bT:function(b,c){var d=Math.abs(b[0]-c[0]),e=Math.abs(b[1]-c[1]);return Math.sqrt(d*d+e*e)},Hm:function(b,c){return 0.1>Math.abs(b[0]-c[0])&&0.1>Math.abs(b[1]-c[1])},cU:function(b,c){for(var d=[b[0]],e=1,g=b.length;e<g;e++){var h=b[e];this.bT(h,d[d.length-1])<=c&&d.push(h)}return this.Hm(d[d.length-1],b[b.length-1])?d:null},O2:function(){},JO:function(b,c,d,e){e=V.extend({fK:0.2,bK:4},e);var g,h,k=[],l=[],m=[],n=[];for(g=0;g<d;g++){for(h=0;h<c&&!this.us(b,h, g,c,d,k,e);h++);for(h=c-1;0<=h&&!this.us(b,h,g,c,d,l,e);h--);}if(!k.length||!l.length)return null;for(h=0;h<c;h++){var p;g=k[0][0];p=l[0][0];if(h>=g&&h<=p)for(g=0;g<d&&!this.us(b,h,g,c,d,m,e);g++);g=k[k.length-1][0];p=l[l.length-1][0];if(h>=g&&h<=p)for(g=d-1;0<=g&&!this.us(b,h,g,c,d,n,e);g--);}if(!m.length||!n.length)return null;n.reverse();k.reverse();if(this.Hm(m[m.length-1],l[0])&&this.Hm(l[l.length-1],n[0])&&this.Hm(n[n.length-1],k[0])&&this.Hm(k[k.length-1],m[0])){c=[n,k,m,l];g=0;for(b=c.length;g< b;g++)if(!(2>c[g].length||(c[g]=this.cU(c[g],e.bK),c[g])))return null;return[].concat(c[0]).concat(c[1].slice(1)).concat(c[2].slice(1)).concat(c[3].slice(1))}return null},EP:function(b){for(var c=[Infinity,Infinity],d=[-Infinity,-Infinity],e=0,g=b.length;e<g;e++){var h=b[e][0],k=b[e][1];c[0]>h&&(c[0]=h);c[1]>k&&(c[1]=k);d[0]<h&&(d[0]=h);d[1]<k&&(d[1]=k)}return c.concat([d[0]-c[0]+1,d[1]-c[1]+1])},hE:function(b,c){this.HG||(this.HG=document.createElement("canvas"));var d=this.HG;d.width=b;d.height= c;return d},XP:function(b){switch(b.length){case 2:return"lineTo";case 4:return"quadraticCurveTo"}return null},JD:function(b){switch(b.length){case 2:return[b[0]+0.5,b[1]+0.5];case 4:return[b[0]+0.5,b[1]+0.5,b[2]+0.5,b[3]+0.5]}return b},XC:function(b,c){b.beginPath();for(var d=0,e=c.length;d<e;d++){var g=c[d];0===d?(2<g.length&&(4===g.length?g=g.slice(-2):console.error("Unknown start point: ",c)),b.moveTo.apply(b,this.JD(g))):b[this.XP(g)].apply(b,this.JD(g))}},HP:function(b){b=this.qE([255,255,255], {xl:b.xl});this.PG(b,0);return"rgba("+b.slice(0,3).join(",")+", 0.8)"},yQ:function(b,c,d){function e(b){return[Math.round((b[0]-p)*r+p-n[0]),Math.round((b[1]-q)*t+q-n[1])]}d=V.extend({xl:"hover",gH:!0,padding:[1.5,1.5]},d);var g=b.width,h=b.height,k=this.hE(2*g+10,h),l=k.getContext("2d"),m=this.EP(c),n=d.padding;V.j.Jc&&(n[0]+=2.5,n[1]+=2.5);for(var p=m[0],q=m[1],r=(m[2]+2*n[0])/m[2],t=(m[3]+2*n[1])/m[3],m=0,w=c.length;m<w;m++)switch(c[m].length){case 2:c[m]=e(c[m]);break;case 4:c[m]=e(c[m]).concat(e(c[m].slice(2))); break;default:console.error("Unknown point: ",c[m])}l.save();this.XC(l,c);l.closePath();l.fillStyle=d.fillStyle||"rgba(255,255,255,0.85)";l.fill();l.putImageData(b,g+6,0);l.drawImage(k,g+6,0,g,h,0,0,g,h);b=d.gH&&10<c.length;var u=d.strokeStyle||this.HP(d);l.strokeStyle=b?"#fff":u;l.lineCap="butt";l.lineJoin="round";l.lineWidth=V.j.Jc?2:1.2;l.stroke();l.restore();return{sa:k,Zd:[0,0,g,h],by:b?function(b,d){this.eU(b,d,c,u)}:null}},eU:function(b,c,d,e){this.MO();var g=this.J.Om;this.SC(b,d,{duration:200, LA:0,startTime:Date.now(),e0:function(b){b.strokeStyle=e;b.lineCap="butt";b.lineJoin="round";b.lineWidth=V.j.Jc?2:1;b.translate(c[0],c[1])},G1:function(){return this.J.Om!==g}})},MO:function(){this.wv&&V.g.dl(this.wv)},SC:function(b,c,d,e){this.HE()?this.wv=V.g.Fe(function(){this.wv=null;if(d.G1.call(this))e&&e.call(this);else{var g=(Date.now()-d.startTime)/d.duration;1<g&&(g=1);var h=Math.round(c.length*g);if(d.LA<h){var k=1===g?c:c.slice(d.LA,h+1);k.length&&(b.save(),d.e0.call(this,b,g),this.XC(b, k),b.stroke(),b.restore());d.LA=h}1>g?this.SC(b,c,d,e):e&&e.call(this)}},this):e&&e.call(this)},TO:function(b,c,d){b=b.createImageData(c.width,c.height);var e=b.data,g=b.width,h=b.height,k=d[0]+d[2],l=d[1],m=d[1]+d[3];for(d=d[0];d<k;d++)for(var n=l;n<m;n++)for(var p=4*this.mw(d,n,g,h),q=0;4>q;q++)e[p+q]=c.data[p+q];return b},fR:function(b,c,d){var e=b[1]+(c[1]-b[1])*d;return[Math.round(b[0]+(c[0]-b[0])*d),Math.round(e)]},SQ:function(b,c,d){for(var e=1/d,g=[],h=1;h<d;h++){var k=this.fR(b,c,e*h);g.length&& this.Hm(k,g[g.length-1])||g.push(k)}return g},TQ:function(b,c){for(var d=1,e=b.length;d<e;d++){var g=b[d-1],h=b[d];2===h.length&&(4===g.length&&(g=g.slice(2)),2===g.length&&(g=this.SQ(g,h,c),b.splice.apply(b,[d,0].concat(g)),d+=g.length,e+=g.length))}},ZP:function(b,c,d,e,g){g=Math.round(Math.min(d,e)*g);d--;e--;g?b=[[b+d,c+e-g],[b+d,c+e,b+d-g,c+e],[b+g,c+e],[b,c+e,b,c+e-g],[b,c+g],[b,c,b+g,c],[b+d-g,c],[b+d,c,b+d,c+g],[b+d,c+e-g]]:(g=[b+d,c+e],b=[g,[b,c+e],[b,c],[b+d,c],g]);this.TQ(b,5);return b}, AQ:function(b,c,d,e,g,h){c=b.Zd;var k=d?d.Hz:this.bE(e,g,c);if(k){var l=d?d.lJ:null,m=k,n=b.padding,p=n?n[0]:0,q=n?n[1]:0;(n=0<p*q)&&(m=this.TO(g,m,[p,q,m.width-2*p,m.height-2*q]));e=m.data;c=m.width;var r=m.height;if(c&&r){d=(d=this.J.A)&&d.Ca?d.Ca.get("hotspotOptions"):{};d=V.extend({borderAnimation:!0},d);m=this.TP(m);b=!b.CY&&0.46<=m.F1;var t=g.createImageData(c,r);g=t.data;for(var w=b?this.qE:this.zQ,u=0,D=e.length;u<D;u+=4)this.pE(e,u,g,u,w,{xl:h});if(n&&(g=b&&!V.j.Jc?this.JO(e,c,r,{hM:b?function(b, c,d){return!(220<b&&220<c&&220<d)}:null,fK:0.2,bK:4}):null,g||(g=m.UV,g=this.ZP(g[0],g[1],g[2],g[3],0.2)),g)){var v=this.yQ(t,g,{xl:h,fillStyle:"active"!==h?null:"#ddd",St:k,gH:d.borderAnimation&&"hover"===h&&!l,padding:b?[1.5,1.5]:[2.5,2.5]}),t=null;return{St:k,Mn:function(b,c){l&&k&&b.putImageData(k,c[0],c[1]);b.drawImage(v.sa,v.Zd[0],v.Zd[1],v.Zd[2],v.Zd[3],c[0],c[1],c[2],c[3]);v.by&&(v.by.call(this,b,c),v.by=null)}}}return{St:k,Mn:function(b,c){if(n){var d=this.hE(t.width,t.height);d.getContext("2d").putImageData(t, 0,0);b.clearRect(c[0]+p,c[1]+q,c[2]-2*p,c[3]-2*q);b.drawImage(d,0,0,d.width,d.height,c[0],c[1],c[2],c[3])}else b.putImageData(t,c[0],c[1]);t=null}}}}},BQ:function(b,c,d,e,g,h){b=b.Zd;if(d=d?d.Hz:this.bE(e,g,b))if(e=d.data,b=d.width,c=d.height,b&&c){var k=g.createImageData(b,c);g=k.data;b=0;for(c=e.length;b<c;b+=4)this.pE(e,b,g,b,this.CQ,{xl:h});return{St:d,Mn:function(b,c){b.putImageData(k,c[0],c[1]);k=null}}}},jE:function(b,c,d){var e=d[2],g=d[3],h=b[0]+d[0];b=b[1]+d[1];if(4===d.length||d.DE){if((c= this.J.Up(c))&&c.loaded)return d=[4,4],V.j.Jc&&(d[0]*=2,d[1]*=2),{type:"icon",CY:c.src&&c.src.indexOf&&0<=c.src.indexOf("/indoor_icon/"),padding:d,Zd:[h-d[0],b-d[1],e+2*d[0],g+2*d[1]]}}else return{type:"label",Zd:[h,b,e,g]}}}); V.J.canvas.vg.Mc({$D:function(){this.uw||(this.uw=new V.J.canvas.vg.TM(this));return!1===this.uw.TT(this.ee)?null:this.uw},xm:function(b,c){var d=this.$D();if(d&&d.HE()&&b&&b.wa&&b.kb&&0===this.rotation){var e=this.Om,g=this.tt(b),h=[],k;b.tj||(b.tj=[]);var l=b.tj;for(k=b.kb.length-1;0<=k;k--){if(l[k]){if(l[k].rev!==e)continue;if(l[k].lJ===c)continue}var m=d.jE(g,b.wa[k],b.kb[k]);if(m){var n=d.xQ(m,b,l[k],this.Eg,this.mj,c);n&&(l[k]={lJ:c,rev:e,Hz:n.St},h.push({Mn:n.Mn,Zd:m.Zd,wq:"icon"===m.type? 2:1}))}}h.sort(function(b,c){return b.wq-c.wq});k=0;for(e=h.length;k<e;k++)h[k].Mn.call(d,this.mj,h[k].Zd),h[k].Mn=null}},Iv:function(b){b.tj&&(b.tj.length=0,b.tj=null)},Px:function(){var b=this.mj;b&&b.putImageData&&b.putImageData(b.getImageData(0,0,1,1),0,0)},Xx:function(b){if(b&&b.wa&&b.kb&&b.tj){var c=this.mj,d=this.$D();if(d){for(var e=this.Om,g=this.tt(b),h=b.tj,k=0,l=b.kb.length;k<l;k++){var m=h[k];if(m&&(h[k]=null,e===m.rev)){var n=d.jE(g,b.wa[k],b.kb[k]);n&&n.Zd&&c.putImageData(m.Hz,n.Zd[0], n.Zd[1])}}b.tj=null;this.Om++}}}}); ', true),
	_jsload_('overlay', 'V.ba.Xc=V.ba.tk.extend({B:function(b,c){var d=b.length;this.df=Array(d);for(var e,g,h=0;h<d;h+=1)if(e=b[h],g=new V.ba.nC(e),this.df[h]=g,!c)if(0===h){if(0===e.length)break;g.Cl(e)||e.reverse()}else 0!==e.length&&g.Cl(e)&&e.reverse()},dc:function(){if(0===this.df.length)return[Infinity,Infinity,-Infinity,-Infinity];if(!this.nd){for(var b=this.df[0].dc(),c=1;c<this.df.length;c+=1){var d=this.df[c].dc();V.r.NH(b,d)||V.r.extend(b,d)}this.nd=b}return this.nd},TI:function(){return this.df},Ae:function(){return V.ba.uc.gr}, mf:function(b){for(var c=this.df,d,e=0,g=c.length;e<g&&(d=c[e].mf(b),0<e&&(d=!d),d);e+=1);return d}});V.ba.oo=V.ba.tk.extend({B:function(b){var c=b.length;this.Id=Array(c);for(var d=0;d<c;d+=1){var e=new V.ba.Xc(b[d]);this.Id[d]=e}},dc:function(){if(!this.nd){for(var b=[Infinity,Infinity,-Infinity,-Infinity],c=this.Id,d=0,e=c.length;d<e;d+=1)V.r.extend(b,c[d].dc());this.nd=b}return this.nd},bz:function(){return this.Ga},Ae:function(){return V.ba.uc.er},CI:function(){return this.Id},mf:function(b){for(var c=!1,d=0,e=this.Id.length;d<e;d+=1)if(this.Id[d].mf(b)){c=!0;break}return c}});V.ba.uk=V.ba.tk.extend({B:function(b){this.Ga=b},dc:function(){if(!this.nd){for(var b=[Infinity,Infinity,-Infinity,-Infinity],c=0,d=this.Ga.length;c<d;c+=1)V.r.mI(b,this.Ga[c]);this.nd=b}return this.nd},bz:function(){return this.Ga},Ae:function(){return V.ba.uc.Vu},vX:function(){return this.Ga.length},ht:function(b){for(var c=this.Ga,d=Infinity,e=0,g=1,h=c.length;g<h;e=g,g+=1)d=Math.min(d,V.dj.B0(b,[c[e],c[g]]));return Math.sqrt(d)}});V.ba.nC=V.ba.uk.extend({Ae:function(){return V.ba.uc.lC},Cl:V.dj.Cl,mf:function(b){return V.dj.mf(b,this.Ga)}});V.ba.fr=V.ba.tk.extend({B:function(b){var c=b.length;this.Id=Array(c);for(var d=0;d<c;d+=1){var e=new V.ba.uk(b[d]);this.Id[d]=e}},CI:function(){return this.Id},dc:function(){if(!this.nd){for(var b=[Infinity,Infinity,-Infinity,-Infinity],c=this.Id,d=0,e=c.length;d<e;d+=1)V.r.extend(b,c[d].dc());this.nd=b}return this.nd},bz:function(){return this.Ga},Ae:function(){return V.ba.uc.Xu},vX:function(){return this.Ga.length},ht:function(b){for(var c=Infinity,d=0,e=this.Id.length;d<e;d+=1)c=Math.min(c,this.Id[d].ht(b)); return c}});V.Ea.hd=V.Ea.fj.extend({B:function(b,c){arguments.callee.Za.apply(this,arguments);this.TU=b;this.P("options",b);this.P("geodesic",b);this.P("path",b);this.P("noSelect",b);this.cl();this.P("display",c);c.e("zoomend",this.sj,this)},geodesicChanged:function(){this.pathChanged()},Wi:function(b){var c=this.get("path"),d=b.tc(this.map.get("resolution")),e=[],g,h,k;g=0;for(h=c.length;g<h;g+=1)k=this.map.Ub(c[g]).add(d),e.push(this.map.Se(k));0<e.length&&this.set("path",e);if(this.rx&&0<this.rx.length)for(g= 0,c=this.rx.length;g<c;g+=1)this.rx[g].Wi(b);this.TU.l("movepoly",{PK:d})},Io:function(b){this.get("options");return this.BE()?this.PP(b):this.VD(b)},BE:function(){var b=this.get("options");return b&&!!b.geodesic},getStrokeWeight:function(){return this.get("options").strokeWeight},PP:function(b){if(!b||!b.length)return[];var c,d=[],e,g,h=[],k,l=this.map.get("resolution"),m=this.get("options").geodesicInterpolatePixelWidth||17;d.push(b[0]);h.push(this.iw(b[0]));e=1;for(g=b.length;e<g;e+=1)k=this.iw(b[e]), c=Math.round(Math.abs(k[0]-h[h.length-1][0])/l),c=Math.min(31,Math.round(c/m),Math.round(Math.abs(b[e-1].I-b[e].I))),c=V.O.LX(b[e-1],b[e],c),d.push.apply(d,c),h.push.apply(h,this.VD(c)),d.push(b[e]),h.push(k);return h},Ls:function(b){var c=[],d=[],e,g,h,k,l,m,n=b.va;n instanceof V.ba.uk?m=[n]:n instanceof V.ba.fr&&(m=n.Id);n=[];b=b.ga.rotation;c=this.map.get("size");e=Math.PI*b/180;b=(Math.abs(c.width*Math.cos(e))+Math.abs(c.height*Math.sin(e)))/2;var p=(Math.abs(c.width*Math.sin(e))+Math.abs(c.height* Math.cos(e)))/2;e=0;for(g=m.length;e<g;e+=1)if(h=m[e].Ga,h.length)for(k=0,l=h.length;k<l;k+=1)if(c=h[k],c=this.Ib(c),c[0]=Math.round(c[0]+b),c[1]=Math.round(c[1]+p),0===k)d[0]=NaN,d[1]=NaN,n.push("M"+c[0]+" "+c[1]);else if(c[0]!==d[0]||c[1]!==d[1])n.push("L"+c[0]+" "+c[1]),d[0]=c[0],d[1]=c[1];return n},cl:function(){if(this.map&&!this.F){var b=this.map,c=this.get("path"),c=this.F=new V.Rd({ew:this.Zb.Qr,name:"polyline-"+V.g.Ab(this),zIndex:this.get("options").zIndex||1,map:b,va:new V.ba.uk(this.Io(c)), style:this.get("options")});c.wj=this;this.P("resolution",b);this.P("center",b);this.P("coords",c);this.P("style",c);c.ld(["noSelect","visible","zIndex","strokeWeight","isOutline"],this)}},pathChanged:function(){var b=this.F,c=this.get("path");b&&(this.set("coords",this.Io(c)),b.gg=!0,"c"!==this.map.get("overlayRender")&&b.ga?(c=this.Ls(b),V.j.Ri||c.push("e"),c=c.join(" "),0===c.length&&b.ga?(b.ga.Hc.parentNode.removeChild(b.ga.Hc),b.ga.fb.parentNode&&b.ga.fb.parentNode.removeChild(b.ga.fb),b.ga= null):V.j.Ri?(b.ga.Hc.setAttribute("d",c),b.ga.fb&&b.ga.fb.setAttribute("d",c)):(b.ga.Hc.path=c,b.ga.fb&&(b.ga.fb.path=c))):this.set("display"))},sj:function(){this.BE()&&this.pathChanged()},visibleChanged:function(){this.F&&(this.F.ga?this.get("visible")?(this.F.ga.Hc.style.display="block",this.F.ga.fb&&(this.F.ga.fb.style.display="block")):(this.F.ga.Hc.style.display="none",this.F.ga.fb&&(this.F.ga.fb.style.display="none")):this.set("display"))},optionsChanged:function(){this.F&&(this.F.style=this.get("options"), this.F.zIndex=this.get("options").zIndex,this.F.Oj(),this.F.ga&&(this.F.ga.Hc.parentNode&&this.F.ga.Hc.parentNode.removeChild(this.F.ga.Hc),this.F.ga.fb&&this.F.ga.fb.parentNode&&this.F.ga.fb.parentNode.removeChild(this.F.ga.fb)));this.set("display")}});V.Ea.Xc=V.Ea.fj.extend({B:function(b,c){arguments.callee.Za.apply(this,arguments);this.SU=b;this.P("options",b);this.P("path",b);this.cl();this.P("display",c)},Wi:function(b){var c=this.get("path");b=b.tc(this.map.get("resolution"));var d=[],e,g;c.length&&c[0]instanceof V.O&&(c=[c],g=!0);for(var h=0,k=c.length;h<k;h+=1){for(var l=c[h],m=[],n=0,p=l.length;n<p;n+=1)e=this.map.Ub(l[n]).add(b),m.push(this.map.Se(e));d.push(m)}0<d.length&&this.set("path",g?d[0]:d);this.SU.l("movepoly",{PK:b})},Io:function(b){b.length&& b[0]instanceof V.O&&(b=[b]);for(var c,d,e=[],g,h=this.map,k=0;k<b.length;k+=1){var l=b[k];g=[];c=0;for(d=l.length;c<d;c+=1){var m=h.Ub(l[c]);g.push([m.x,m.y])}e.push(g)}return e},cl:function(){if(this.map&&!this.F){var b=this.map,c=this.get("path"),c=this.F=new V.Rd({ew:this.Zb.Qr,name:"polygon-"+V.g.Ab(this),zIndex:this.get("options").zIndex||1,map:b,va:new V.ba.Xc(this.Io(c)),style:this.get("options")});c.wj=this;this.P("resolution",b);this.P("center",b);this.P("coords",c);this.P("style",c);c.ld(["visible", "zIndex","strokeWeight"],this)}},pathChanged:function(){var b=this.F,c=this.get("path");b&&(this.set("coords",this.Io(c)),b.gg=!0,"c"!==this.map.get("overlayRender")&&b.S?(c=this.Ms(b),0===c.length?(b.S.parentNode.removeChild(b.S),b.S=null):V.j.Ri?b.S.setAttribute("d",c.join(" ")):(c.push("e"),b.S.path=c.join(" "))):this.set("display"))},getStrokeWeight:function(){return this.get("options").strokeWeight},visibleChanged:function(){this.F&&(this.F.S?this.get("visible")?this.F.S.style.display="block": this.F.S.style.display="none":this.set("display"))},optionsChanged:function(){this.F&&(this.F.style=this.get("options"),this.F.zIndex=this.get("options").zIndex,this.F.Oj());this.set("display")},Ms:function(b){var c=[NaN,NaN,0],d=[NaN,NaN],e,g,h,k,l,m,n,p=b.S.rotation,q=this.map.get("size");g=Math.PI*p/180;p=(Math.abs(q.width*Math.cos(g))+Math.abs(q.height*Math.sin(g)))/2;q=(Math.abs(q.width*Math.sin(g))+Math.abs(q.height*Math.cos(g)))/2;b=b.va;b instanceof V.ba.Xc?e=[b]:b instanceof V.ba.oo&&(e= b.Id);var r=[];b=0;for(g=e.length;b<g;b+=1)if(c=e[b],h=c.df,k=h.length,0<k)for(var t=0;t<k;t+=1){var w;l=h[t].Ga;m=0;for(n=l.length;m<n;m+=1)if(c=l[m],c=this.Ib(c),c[0]=Math.ceil(c[0]+p),c[1]=Math.ceil(c[1]+q),0===m)d[0]=NaN,d[1]=NaN,w=c,r.push("M"+c[0]+" "+c[1]);else if(c[0]!==d[0]||c[1]!==d[1])r.push("L"+c[0]+" "+c[1]),d=c;w&&r.push("L"+w[0]+" "+w[1])}return r}});V.Ea.li=V.Ea.fj.extend({B:function(b,c){arguments.callee.Za.apply(this,arguments);this.RU=b;this.P("center",b);this.P("draggable",b);this.P("radius",b);this.P("options",b);this.cl();this.P("display",c)},Wi:function(b){var c=this.get("center");b=b.tc(this.map.get("resolution"));var d=this.map.Ub(c).add(b);c instanceof V.O?this.set("center",this.map.Se(d)):this.set("center",d);this.RU.l("movepoly",{PK:b})},cl:function(){if(this.map&&!this.F){var b=this.map,c=b.Ub(this.get("center")),c=this.F=new V.Rd({Or:!0, ew:this.Zb.Qr,name:"circle-"+V.g.Ab(this),zIndex:this.get("options").zIndex||1,map:b,va:new V.ba.oe([c.x,c.y]),style:this.get("options")});c.wj=this;this.P("resolution",b);this.P("coords",c);this.P("style",c);c.P("visible",this,!0);c.ld(["radius","center","resolution","zIndex","strokeWeight"],this)}},getStrokeWeight:function(){return this.get("options").strokeWeight},centerChanged:function(){var b=this.F,c=this.map.Ub(this.get("center"));b&&(b.va.Ga=[c.x,c.y],this.set("coords",[c.x,c.y]),this.gg= !0,b.S?this.$K():this.set("display"))},visibleChanged:function(){this.F&&(this.F.S?this.get("visible")?this.F.S.style.display="block":this.F.S.style.display="none":this.set("display"))},optionsChanged:function(){this.F&&(this.F.style=this.get("options"),this.F.zIndex=this.get("options").zIndex,this.F.Oj(),this.F.gg=!0,this.set("display"))},qy:function(b){var c=[],d=[],e,d=b.va;d instanceof V.ba.oe&&(e=[d]);var d=this.map.get("crs").Qh(Math.floor(this.map.get("zoom"))),g=b.S.rotation,c=this.map.get("size"), h=Math.PI*g/180,g=(Math.abs(c.width*Math.cos(h))+Math.abs(c.height*Math.sin(h)))/2,h=(Math.abs(c.width*Math.sin(h))+Math.abs(c.height*Math.cos(h)))/2,c=this.Ib(e[0].Ga);c[0]=Math.round(c[0]+g);c[1]=Math.round(c[1]+h);b=b.get("remain")?5.23:this.get("radius")/(d*Math.cos(Math.PI*this.get("center").M/180));return d=["M",c[0],c[1]-b,"A",b,b,0,1,1,c[0]-0.01,c[1]-b,"Z"].join(" ")},$K:function(){var b=this.F,c=this.get("radius");if("c"!==this.map.get("overlayRender")&&b.S)if(V.j.Ri)c=this.qy(b),b.S.setAttribute("d", c);else{c=this.map.get("crs").Qh(Math.floor(this.map.get("zoom")));c=this.get("radius")/(c*Math.cos(Math.PI*this.get("center").M/180));b.S.style.width=Math.round(2*c);b.S.style.height=Math.round(2*c);var d=this.map.get("size").width/2,e=this.map.get("size").height/2,g=this.Ib(b.va.Ga);g[0]=Math.round(g[0]+d);g[1]=Math.round(g[1]+e);b.S.style.top=Math.round(g[1]-c);b.S.style.left=Math.round(g[0]-c)}else this.set("display")},radiusChanged:function(){var b=this.F,c=this.get("radius");b&&(b.gg=!0,b.l("rad", {$i:c}),this.$K())}}); ', true), 
	_jsload_('cmng', 'V.V.kr=V.W.extend({B:function(){this.rb=2;this.bC=V.j.Lf?16:12;this.W_={road:0,region:0,building:1,poilabel:1,roadlabel:1};this.Kq=[new V.fd,new V.fd,new V.fd,new V.fd,new V.fd,new V.fd,new V.fd];this.r1=[{type:"roadlabel",show:!0,sn:1},{type:"poilabel",show:!0,sn:1},null,{type:"region",show:!0,sn:0},{type:"road",show:!0,sn:0},{type:"building",show:!0,sn:0},null];this.Mi=0},at:function(b,c,d,e,g){if("first"!==c)if(d&&d.zb&&d.hc)d.hc.zb||(d.hc.$b=d.$b,d.hc.sa=d.hc.Is=d.hc.zb=!0);else{d&&(d.Zj=e);var h; switch(g){case "roadlabel":h=0;break;case "poilabel":h=1;break;case "labels":h=2;break;case "region":h=3;break;case "road":h=4;break;case "building":h=5;break;case "allbase":h=6}"groupcomplete"==c?this.Kq[h].Lu(["groupcomplete",h,d,b]):"tileComplete"==c?this.Kq[h].Lu(["co",7,d,b]):(this.Kq[h].Lu(["co",h,d,b]),""!==c&&this.Kq[h].Lu([c,h,d,b]));this.Mi>h&&(this.Mi=h);this.D0()}},MK:function(){var b=new Date,c=!1;do if(c=this.parse(),new Date-b>=this.bC)break;while(!c);this.KK=c?null:V.g.Fe(this.MK, this)},D0:function(){this.KK||(this.KK=V.g.Fe(this.MK,this))},PH:function(){return document.createElement("canvas")},parse:function(){var b,c=!1,d=this.Mi,e=this.Kq[this.Mi];if(e.iq())6===d&&(c=!0),this.Mi=(this.Mi+1)%7;else{b=e.nZ();var g=b[3],h=g.pa?512:256;if("groupcomplete"==b[0])g.set("display",0);else{var k=b[2],l=k.Zj,m,n=k.key+(18<l?"/"+l:"");if(g.Ka.sc(n))if("co"===b[0])if(3===b[1])this.OA(k,h),l=this.mb.ta.getContext("2d"),l.fillStyle=g.xg,l.fillRect(0,0,k.$b.width,k.$b.height),k.Xb.region&& (this.mb.kL(k.Xb.region,0,k.Ya.z),k.Xb.region=null);else if(4===b[1])this.OA(k,h),k.Xb.road&&(this.mb.J_(k.Xb.road,k.Ya.z),k.Xb.road=null);else if(5===b[1]&&k.Xb&&k.Xb.building){b=V.Ie&&V.Ie.CJ(g.A.Ca);if(g.Hq){if(k.Hd=k.Xb.building,18<l)for(b=k.Ya,m=Math.pow(2,l-18),h=0;h<m;h+=1)for(n=0;n<m;n+=1){var p=g.Ka.get(l+"/"+(m*b.x+h)+"/"+(m*b.y+n));p&&(p.Hd=k.Hd)}}else this.OA(k,h),this.mb.kL(k.Xb.building,1,k.Ya.z,void 0,b);k.Xb.building=null}else{if(7===b[1])if(k.Xb=null,18<l){b=k.Ya;m=Math.pow(2,l-18); for(p=0;p<m;p+=1)for(var q=0;q<m;q+=1){var r=g.Ka.get(l+"/"+(m*b.x+p)+"/"+(m*b.y+q));if(r&&(r.zb=r.sa=!0,k.$b)){r.$b=this.PH();r.$b.width=r.$b.height=h;r.$b.getContext("2d").drawImage(k.$b,-p*h,-q*h);g.eo&&0===(r.Ya.x+r.Ya.y)%2&&r.$b.getContext("2d").drawImage(g.eo,0,0);r.status="loaded";if(!V.j.U){var t=document.createElement("img");t.src=r.$b.toDataURL();r.$b=t}r.Is=!0}}g.Ka.cm(n)}else k.$b&&(g.eo&&0===(k.Ya.x+k.Ya.y)%2&&k.$b.getContext("2d").drawImage(g.eo,0,0),k.Is=!0,k.hc&&(k.hc.Is=k.hc.sa=!0), V.j.U||(t=document.createElement("img"),t.src=k.$b.toDataURL(),k.$b=t)),k.Gt&&(k.Gt.xe=null,k.Gt=null),k.zb=k.sa=!0,k.hc&&(k.hc.zb=k.hc.sa=!0)}else V.YM.JA(k,b[0],this.r1[b[1]].type,g)}e.iq()&&(6===d&&(c=!0),this.Mi=(this.Mi+1)%7)}return c},OA:function(b,c){this.mb||(this.mb=new V.J.canvas.pe.kd);var d=18<b.Zj?Math.pow(2,18-b.Zj):1;b.$b||(b.$b=this.PH(),b.$b.width=b.$b.height=c/d,b.Is=!1);b.$b&&(this.mb.ta=b.$b,this.mb.zc=d)}});V.V.kr.Bl=new V.V.kr; ', true),
	_jsload_('cgl', '(function(){V.j.eg&&V.Il.tJ("base",function(){function b(b,c){if(b&&!b.length)return-1;if(b.indexOf)return b.indexOf(c);for(var d=0;d<b.length;d+=1)if(b[d]===c)return d;return-1}function c(b,c,d,g){c=c.split("&");var p="",q=0,r=0,t="butt",w="",u=0,D=0,v="butt",u=e(c[1]),D=parseInt(c[0])*d*(g?2:1);d=c[2];d===h[1]?v="round":d===h[2]?v="square":0!==d.indexOf(h[5])&&(0===d.indexOf(h[3])?w=eval("["+d.substring(5).split(")")+"]"):0===d.indexOf(h[4])&&(q=u,u="white",w=eval("["+d.substring(8).split(")")+ "]"),r=D+1+(g?1:0),D=D-1-(g?1:0)));parseInt(c[3])&&(q=e(c[4]),r=parseInt(c[3])*(g?2:1)+D,c=c[5],c===h[1]?t="round":c===h[2]?t="square":0!==c.indexOf(h[5])&&0===c.indexOf(h[3])&&(p=eval("["+c.substring(5).split(")")+"]")));b.vL=u;b.cB=D;b.S_=v;b.T_=w;b.kH=q;b.ly=r;"app"==mode&&(b.cB/=4,b.ly/=4);b.$U=t;b.aV=p}function d(b,c,d,e,g,h){b=d-b;d=g-d;if(0===b||0===d)return b===d?!0:!1;if((h-e)/d===(e-c)/b)return!0}function e(b){for(var c=[],d=0,e=b.length;d<e;d+=2)c.push(parseInt(b.substr(d,2),16));c.push((c.shift()/ 255).toFixed(2));return"rgba("+c.join(",")+")"}var g=null,h="solid solid_roundcap solid_squarecap dash railway dash_crewel".split(" ");return{parseData:function(h,l){mode=h.mode;var m=h.Ht,n=h.Cq;g=h.Os;for(var p=0,q=h.mg.length;p<q;p+=1){for(var r=h.mg[p],t=m,w=n,u=r.xd,D=r.Jb.slice(1),v=r.zY,s=r.Wl,O=r.sn,J={},E=void 0,C=void 0,E=void 0,T=[],P=0,R=D.length;P<R;P+=1){var E=D[P],C=E[1],G;G=E[0];for(var x=s,z=t,I=O,F=v,A=w,B=[],H=0,N=G.length;H<N;H+=1){for(var K=G[H],M=void 0,L=void 0,S=void 0,X=void 0, Q=void 0,L=[],S=NaN,X=0,Q=K.length;X<Q;X+=1)M=K[X],M="ASDFGHJKLQWERTYUIO!sdfghjkl".indexOf(M),isNaN(S)?S=27*M:(L.push(S+M-333),S=NaN);var K=L,U=z,M=F,W=A,L=[],X=S=void 0,ga=Q=0,ba=void 0;if(I)for(Q=256*x.x,ga=256*x.y,ba=x.N,U=0,W=K.length;U<W;U+=2)S=(Q+K[U])*ba,X=(ga+K[U+1])*ba,L.push([S,X]);else for(ba=(18<U?Math.pow(2,18-U):1)/(W?2:1),U=0,W=K.length;U<W;U+=2){for(;!M&&0!==U&&U<W-2&&d(K[U-2],K[U-1],K[U],K[U+1],K[U+2],K[U+3]);)U+=2;1===ba?L.push([K[U],K[U+1]]):L.push([K[U]/ba,K[U+1]/ba])}K=L;K.length&& (B.push(K),B.Qs=B.Qs?B.Qs+K.Qs:K.Qs)}G=B;if(v){G.r2=P;if((z=E[4])&&z.length)for(I=0,F=z.length;I<F;I+=1)for(A=z[I].split("-"),B=G[parseInt(A[0])],H=1,x=A.length;H<x;H+=1)B[parseInt(A[H])].Tt=!0;z=E[5];I=0;for(x=G.length;I<x;I+=1)G[I].Vj=E[3]*(w?2:1);if(z&&z.length)for(x=0,I=z.length;x<I;x+=1)for(A=z[x].split("-"),F=A[1].split("^"),G[parseInt(A[0])].xH=F,A=0,B=F.length;A<B;A+=1)-1==b(T,F[A])&&T.push(F[A])}E=E[2];E=J[E]?J[E]:J[E]={};E[C]?E[C].push.apply(E[C],G):("road"==u?(x=1,18<t&&(x=Math.pow(2,t- 18)),x=c(G,C,x,w)):(x=G,z=C,I=w,F=v,z=z.split("&"),x.face=e(F&&g?g:z[0]),z[2]?(x.border=e(z[2]),x.width=(I?2:1)*(parseInt(z[1])||1)):x.border=null,x=void 0),"err"!==x&&(E[C]=G))}r.Jb=J;T.length&&(r.Al=T)}h.mg[0].xB.split("/");l(null,{data:h})}}},function(){})})(V);V.J.canvas.wN=V.W.extend({B:function(b,c){this.ta=b;this.La=b.getContext("2d");this.q=c;this.NB="rgba(227,219,210,0.7)";this.V_="rgba(252,249,244,0.7)"},h4:function(b,c){var d=b.la.Gh,e=d.M,d=d.I,g=new Date,h=new Date;h.setMonth(0);h.setDate(0);h.setHours(0);h.setMinutes(0);h=(g-h)/864E5+8;c[0]=120-15*(g.getHours()-12)-d;c[1]=e-(-23.5+(182.62>h?h:365.25-h)/182.62*47)},dp:function(b,c,d,e){return{x:b.x-c*d,y:b.y-c*e}},XA:function(b,c){var d=Math.pow(2,c.la.zoom-18);this.N=c.la.N;this.ma=c.ma;for(var e= [],g=[],h=[],k=b.length-1;0<=k;k-=1){var l=b[k];if(l&&!l.oL){l.oL=1;var m=b[k].Ya,n;for(n in l)if(l.hasOwnProperty(n)){var p=l[n],q;for(q in p)if(p.hasOwnProperty(q))for(var r=p[q],t=0,w=r.length;t<w;t+=1){for(var u=r[t],D=u.Vj,v=[],s=[],O=[],J=0,E=u.length-1;J<E;J+=1){var C=this.Ib(u[J],m),T=this.Ib(u[J+1],m),P=this.dp(C,D,0,0.3*d),R=this.dp(T,D,0,0.3*d);(T.x-C.x)*(P.y-C.y)<(P.x-C.x)*(T.y-C.y)&&(v.unshift(C.x,C.y),v.push(P.x,P.y),v.unshift(T.x,T.y),v.push(R.x,R.y));u[J].Tt||e.push(v);v=[];s.push(P.x, P.y);u[J].Tt||O.push(P.x,P.y,R.x,R.y)}v.length&&e.push(v);s.length&&g.push(s);O.length&&h.push(O)}}}}this.La.shadowBlur=0;this.La.lineWidth=1.4;this.pP(h,this.NB);this.Ao(e,this.NB);this.Ao(g,this.V_,this.NB);for(k=b.length-1;0<=k;k-=1)if(l=b[k])l.oL=0},pP:function(b,c){var d=this.La;d.beginPath();for(var e=b.length-1;0<=e;e-=1){var g=b[e];if(!(4>g.length)){d.moveTo(g[0],g[1]);for(var h=0,k=g.length;h<k;h+=4)d.moveTo(g[h],g[h+1]),d.lineTo(g[h+2],g[h+3])}}d.strokeStyle=c;d.stroke()},Ao:function(b, c){var d=this.La;d.beginPath();for(var e=b.length-1;0<=e;e-=1){var g=b[e];if(!(2>g.length)){d.moveTo(g[0],g[1]);for(var h=2,k=g.length;h<k;h+=2)d.lineTo(g[h],g[h+1])}}d.closePath();d.fillStyle=c;d.fill()},Ib:function(b){return{x:(b[0]-this.ma.$a.x)/this.N*(this.q.pa?this.q.rb:1),y:(b[1]-this.ma.$a.y)/this.N*(this.q.pa?this.q.rb:1)}}});V.J.canvas.pe=V.J.mc.ug.extend({oa:[V.gv],B:function(b,c){arguments.callee.Za.apply(this,arguments);this.nm=150;this.Zh=!0;this.uf=null;b.A.Ca.un&&this.Cv(b,c);this.Gm=V.V.kr.Bl;b.A.e("zoomend",this.Yg,this);b.A.e("moveend",this.Yg,this)},reloadChanged:function(){this.q&&(this.q.zb=!1,V.vd.Rp=null);this.Ka.clear();this.lb&&this.lb.parentNode&&this.lb.parentNode.removeChild(this.lb);this.set("display")},qf:function(){return[this.lb,this.nr]},ce:function(){this.lb=document.createElement("div");this.lb.className= "amap-layer";this.nr=document.createElement("canvas");this.nr.EJ=!0;this.aD=new V.J.canvas.wN(this.nr,this.q);this.rl=document.createDocumentFragment()},Rl:function(b){var c=Math.pow(2,b.la.zoom-this.cd),d=this.q.pa?this.q.rb:1,e=b.la.Aa.Ja(this.Xj).Gb(this.vf);this.transform=[{translate:this.transform[0].translate.add(e),scale:c,rotate:0},{translate:this.transform[1].translate.add(e),scale:c/d,rotate:0,zf:this.q.get("zIndex")+1}];this.Aa=b.la.Aa},Nn:function(b,c){this.yd||this.Yg();var d=this.ny(b, c);this.ku.apply(this,d);this.Kc(b);if(b.Sf||b.yd){if(this.We){var d=Math.pow(2,b.la.zoom-this.We.On),e=this.q.pa?this.q.rb:1,g=b.la.Aa.Ja(this.We.Ln).Gb(this.We.vf/(this.q.pa?this.q.rb:1));this.transform[1]={translate:this.transform[1].translate.add(g),scale:d/e,rotate:0,zf:this.q.get("zIndex")+1}}}else this.XA(b,d[1],d[2])},EV:function(b){if(this.Hd!==this.We||!this.We||this.We.On!==this.zoom||this.We.Ln!==this.Aa||this.We.Bq!==this.rotation||!this.We.size.Hb(b.size))return!0},XA:function(b){var c= !1,d=this.Lq;if(0===this.Lq.length)this.Hd=null;else for(j=d.length-1;0<=j;j-=1){var e=d[j];if(e.length&&(c=!1,!e.yp||this.Hd&&this.SA(this.Hd.yB,this.Uf)||(c=!0,this.Hd=[],this.Hd.yB=this.Uf),c))for(c=e.length-1;0<=c;c-=1){var g=e[c].Hd;g&&this.Hd.push(g)}}this.EV(b)&&(d=this.nr,e=this.aD,e.yd=this.yd,c=this.q.pa?this.q.rb:1,0!==b.la.rotation?V.f.gi(d,2*Math.floor(b.ma.cb.x)*c,2*Math.floor(b.ma.cb.y)*c,!0):V.f.gi(d,b.size.width*c,b.size.height*c,!0),e.ac=[b.ma.$a.x,b.ma.$a.y],!(g=this.Hd)||!g.length|| 15>this.zoom||(this.aD.XA(g,b),this.We=this.Hd,this.We.On=this.zoom,this.We.Ln=this.Aa,this.We.vf=this.N,this.We.Bq=this.rotation,this.We.size=b.size))},Kc:function(b){var c=Math.pow(2,this.zoom-this.yc),d=this.Aa.Ja(this.ia);d.x<-V.g.Va/2&&(d.x+=V.g.Va);d.x>V.g.Va/2&&(d.x-=V.g.Va);d.Gb(this.zc);b=new V.K(b.ma.cb.x*(this.q.pa?this.q.rb:1),b.ma.cb.y*(this.q.pa?this.q.rb:1));this.transform=[{translate:this.uy,scale:c,rotate:0},{translate:b,scale:1/(this.q.pa?this.q.rb:1),rotate:0,zf:this.q.get("zIndex")+ 1}]}});V.J.canvas.pe.kd=V.W.extend({B:function(b,c){this.ta=b;this.wa={};this.Fk=c},kL:function(b,c,d,e,g){d=[];for(var h in b)b.hasOwnProperty(h)&&(b[h].em=parseInt(h),d.push(b[h]));d.sort(function(b,c){return b.em>c.em?1:b.em<c.em?-1:0});for(h in d)if(d.hasOwnProperty(h)){b=d[h];for(var k in b)b.hasOwnProperty(k)&&(e=b[k],this.$A(e,e.face,e.border,e.width,c,g))}},$A:function(b,c,d,e,g){var h=this.ta.getContext("2d"),k,l,m,n,p=[NaN,NaN,0],q=[NaN,NaN];h.save();d&&e&&(h.strokeStyle=d,h.lineWidth=e);c&&(h.fillStyle= c);this.ao={};h.beginPath();k=b.length;if(0<k)for(var r=0;r<k;r+=1)for(l=b[r],m=0,n=l.length;m<n;m+=1)if(p=l[m],0===m)q=p,h.moveTo(p[0],p[1]);else if(p[0]!==q[0]||p[1]!==q[1])h.lineTo(p[0],p[1]),q=p;c&&h.fill();if(g&&(h.beginPath(),k=b.length,0<k))for(r=0;r<k;r+=1)for(l=b[r],m=0,n=l.length;m<n;m+=1)if(p=l[m],0===m)q=p,h.moveTo(p[0],p[1]);else if(p[0]!==q[0]||p[1]!==q[1])q.Tt?(h.moveTo(p[0],p[1]),p.Tt&&h.lineTo(p[0],p[1])):h.lineTo(p[0],p[1]),q=p;d&&e&&h.stroke();h.restore();return!0},J_:function(b){var c= [],d;for(d in b)b.hasOwnProperty(d)&&(b[d].em=parseInt(d),c.push(b[d]));c.sort(function(b,c){return b.em>c.em?1:-1});for(d in c)if(c.hasOwnProperty(d)){b=c[d];var e,g;for(e in b)b.hasOwnProperty(e)&&(g=b[e],g.kH&&this.mL(g,g.kH,g.ly,g.$U,g.aV));for(e in b)b.hasOwnProperty(e)&&(g=b[e],g.vL&&this.mL(g,g.vL,g.cB,g.S_,g.T_))}},mL:function(b,c,d,e,g){var h=this.ta.getContext("2d");h.save();if(!(0>=d)&&c)return h.lineWidth=d,h.strokeStyle=c,h.lineCap=e,h.lineJoin="bevel",h.setLineDash?(this.rH(h,b),g&& (h.setLineDash(g),h.lineDashOffset=g[0])):g&&1<g.length?this.jV(h,b,g):this.rH(h,b),h.stroke(),h.restore(),!0},rH:function(b,c){b.beginPath();var d,e,g,h,k,l,m;d=0;for(h=c.length;d<h;d+=1)for(l=c[d],e=0,k=l.length;e<k;e+=1)if(g=l[e],0===e)b.moveTo(g[0],g[1]),m=g;else if(g[0]!==m[0]||g[1]!==m[1])b.lineTo(g[0],g[1]),m=g},jV:function(b,c,d){b.beginPath();var e,g,h,k,l,m,n;b.et=d[0]+d[1];b.Jq=!1;e=0;for(k=c.length;e<k;e+=1)for(m=c[e],g=0,l=m.length;g<l;g+=1)if(h=m[g],0===g)b.moveTo(h[0],h[1]),n=h;else if(h[0]!== n[0]||h[1]!==n[1])b.Hy(n[0],n[1],h[0],h[1],d),n=h;b.closePath()}}); ', true),
	_jsload_('AMap.DistrictSearch', 'V.KM=V.W.extend({oa:[V.ca],B:function(b){this.CLASS_NAME="AMap.DistrictSearch";V.a.Sa(this.CLASS_NAME,b);this.url=V.k.gc+"/v3/config/district";this.Zf(b)},Zf:function(b){b||(b={});this.G=V.extend(b,{extensions:b.extensions||"base",key:V.k.key,s:"rsv3",output:"json"})},setLevel:function(b){V.a.add(this.CLASS_NAME,"setLevel");this.G.level=b},setExtensions:function(b){V.a.add(this.CLASS_NAME,"setExtensions");this.G.extensions=b},setSubdistrict:function(b){V.a.add(this.CLASS_NAME,"setSubdistrict");this.G.subdistrict= b},search:function(b,c){V.a.add(this.CLASS_NAME,"search");var d=[],e=this.G,g;for(g in e)e.hasOwnProperty(g)&&d.push(g+"="+e[g]);d.push("keywords="+this.R(b));d=new V.na.za(this.url+(0<d.length?"?"+d.join("&"):""),{callback:"callback"});d.e("complete",function(b){this.ob(b,c)},this);d.e("error",function(b){this.Wa(b,c)},this)},ob:function(b,c){var d="1"===b.status&&this.Ac(b.districts)&&0<b.districts.length,e="ok"===b.info.toLowerCase()&&this.Ac(b.districts)&&0===b.districts.length;d?(d={info:b.info, districtList:this.PF(b.districts)},$.H(this,"complete",d),c&&"function"===typeof c&&c("complete",d)):(e?$.H(this,"error",{info:"NO_DATA",districtList:[]}):$.H(this,"error",{info:b.info,districtList:[]}),c&&"function"===typeof c&&c("no_data",{}))},Wa:function(b,c){$.H(this,"error",b);c&&"function"===typeof c&&c("error",b.info)},PF:function(b){var c,d,e,g,h,k=[];for(c=0;c<b.length;c+=1){if("all"===this.G.extensions){d=b[c].polyline;if("string"===typeof d&&0<d.length){b[c].boundaries=[];h=this.R(d).split("|"); for(var l=0,m=h.length;l<m;l+=1){e=this.R(h[l]).split(";");k=[];for(d=0;d<e.length;d+=1)g=e[d].split(","),k.push(new V.O(parseFloat(g[0]),parseFloat(g[1])));b[c].boundaries.push(k)}}else b[c].boundaries=[];delete b[c].polyline}"string"===typeof b[c].center&&0<b[c].center.length&&(d=b[c].center.split(","),b[c].center=new V.O(d[0],d[1]));d=b[c].districts;this.Ac(d)&&0<d.length&&(b[c].districtList=this.PF(d));delete b[c].districts}return b},Ac:function(b){return"[object Array]"===Object.prototype.toString.call(b)}, R:function(b){return"string"===typeof b?b:""},vc:function(b,c){for(var d in b)b.hasOwnProperty(d)&&(c[d]=b[d]);return c}});window.AMap.DistrictSearch=V.KM; ', true),
	_jsload_('sync', '(function(){if(V.k.od){var b=function(){var b=V.k.od.split("."),c=window;do if(c=c[b.shift()],!c)return null;while(b.length);return c||null},c=function(c){var d=b();if(d){if("function"!==typeof d)throw Error(V.k.od+" is not a function!");d()}else if(c)throw Error("Can not find callback: "+V.k.od+", try define it before load JsApi!");};document.body&&b()?c():setTimeout(function(){c(!0)},300)}var d=["s=rsv3&product=JsInit&key="+V.k.key,"t="+(new Date).getTime()];d.push("resolution="+window.innerWidth+ "*"+window.innerHeight);d.push("mob="+(V.j.U?1:0));d.push("vt="+(V.j.eg?1:0));d.push("dpr="+window.devicePixelRatio);d.push("scale="+V.j.KB||0);d.push("detect="+V.j.pa);new V.na.za(V.k.nb+"/js/init.js?"+d.join("&"),{callback:"callback"})})(); ', true)
})()