(this['webpackJsonpfalcon-react'] = this['webpackJsonpfalcon-react'] || []).push([
  [14],
  {
    2174: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t(16),
        o = t(0),
        r = t.n(o),
        l = t(15),
        c = t(1054),
        s = t(526),
        m = t(1056),
        i = t(1057),
        u = t(1058),
        p = t(1059),
        f = t(1051),
        d = t(538),
        E = t(539),
        h = t(421),
        v = t(1052),
        b = t(214),
        g = t(33),
        y = t(313),
        O = t(314),
        k = t(325),
        w = t(315),
        N = t(326),
        z = t(1076),
        j = t.n(z),
        Z = (t(2155), t(1286)),
        x = t(2156),
        L = t.n(x),
        R = function(e) {
          var a = e.onZoomIn,
            t = e.onZoomOut,
            n = e.onReset;
          return r.a.createElement(
            L.a,
            { position: 'topleft' },
            r.a.createElement(
              'div',
              { className: 'd-flex flex-column' },
              r.a.createElement(
                b.a,
                { size: 'sm', color: 'falcon-default', onClick: a, title: 'Zoom in' },
                r.a.createElement(l.a, { icon: 'plus' })
              ),
              r.a.createElement(
                b.a,
                { size: 'sm', color: 'falcon-default', onClick: n, title: 'Reset map', className: 'my-1' },
                r.a.createElement(l.a, { icon: 'globe' })
              ),
              r.a.createElement(
                b.a,
                { size: 'sm', color: 'falcon-default', onClick: t, title: 'Zoom out' },
                r.a.createElement(l.a, { icon: 'minus' })
              )
            )
          );
        },
        C = t(1),
        I = t.n(C),
        D = (t(2158), t(2159), t(2160), t(1078)),
        A = new j.a.Icon({
          iconUrl: 'https://unpkg.com/leaflet@1.5.1/dist/images/marker-icon.png',
          iconSize: [25, 41],
          iconAnchor: [10, 41],
          popupAnchor: [2, -40]
        }),
        M = j.a.markerClusterGroup({ chunkedLoading: !1, spiderfyOnMaxZoom: !1 }),
        U = function(e) {
          var a = e.markers,
            t = Object(D.c)().map;
          return (
            Object(o.useEffect)(
              function() {
                M.clearLayers(),
                  a.map(function(e) {
                    var a = e.lat,
                      t = e.long,
                      n = e.name,
                      o = e.street,
                      r = e.location,
                      l = '\n        <h6 class="mb-1">'
                        .concat(n, '</h6>\n        <p class="m-0 text-500">')
                        .concat(o, ', ')
                        .concat(r, '</p>\n      ');
                    j.a
                      .marker(new j.a.LatLng(a, t), { icon: A })
                      .addTo(M)
                      .bindPopup(l);
                  }),
                  t.addLayer(M);
              },
              [a, t]
            ),
            null
          );
        };
      U.propTypes = {
        markers: I.a.arrayOf(
          I.a.shape({ position: I.a.objectOf(I.a.number).isRequired, text: I.a.string.isRequired }).isRequired
        ).isRequired
      };
      var q = U,
        S = t(217);
      delete j.a.Icon.Default.prototype._getIconUrl,
        j.a.Icon.Default.mergeOptions({ iconRetinaUrl: t(2161), iconUrl: t(2162), shadowUrl: t(2163) });
      var P = (function(e) {
        function a() {
          var e, t;
          Object(y.a)(this, a);
          for (var n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l];
          return (
            ((t = Object(k.a)(this, (e = Object(w.a)(a)).call.apply(e, [this].concat(r)))).map = Object(o.createRef)()),
            (t.zoomIn = function() {
              t.map.current.leafletElement.setZoom(t.map.current.leafletElement.getZoom() + 1);
            }),
            (t.zoomOut = function() {
              t.map.current.leafletElement.setZoom(t.map.current.leafletElement.getZoom() - 1);
            }),
            (t.resetMap = function() {
              t.map.current.leafletElement.setView(t.props.center, t.props.zoom);
            }),
            t
          );
        }
        return (
          Object(N.a)(a, e),
          Object(O.a)(a, [
            {
              key: 'componentDidMount',
              value: function() {
                j.a.tileLayer.provider('CartoDB.Positron').addTo(this.map.current.leafletElement);
              }
            },
            {
              key: 'render',
              value: function() {
                var e = this.props,
                  a = (e.children, Object(g.a)(e, ['children']));
                return r.a.createElement(
                  Z.a,
                  Object.assign({ ref: this.map, zoomControl: !1 }, a, { style: { height: 500 } }),
                  r.a.createElement(R, { onZoomIn: this.zoomIn, onZoomOut: this.zoomOut, onReset: this.resetMap }),
                  r.a.createElement(q, { markers: S.b })
                );
              }
            }
          ]),
          a
        );
      })(o.Component);
      P.defaultProps = { center: [10.737, 10], zoom: 1.55, minZoom: 1, zoomSnap: 0.5, scrollWheelZoom: !0 };
      var T = P;
      t(2164),
        (a.default = function() {
          var e = Object(o.useState)('week'),
            a = Object(n.a)(e, 2),
            t = a[0],
            g = a[1];
          return r.a.createElement(
            c.a,
            { className: 'h-100 mt-3 mt-lg-0' },
            r.a.createElement(
              s.a,
              { className: 'bg-light d-flex justify-content-between' },
              r.a.createElement('h5', { className: 'mb-0' }, 'Active users'),
              r.a.createElement(
                m.a,
                { className: 'text-sans-serif' },
                r.a.createElement(
                  i.a,
                  { color: 'link', size: 'sm', className: 'text-600 dropdown-caret-none', boundary: 'viewport' },
                  r.a.createElement(l.a, { icon: 'ellipsis-h', className: 'fs--1' })
                ),
                r.a.createElement(
                  u.a,
                  { className: 'border py-0', right: !0 },
                  r.a.createElement(
                    'div',
                    { className: 'bg-white py-2' },
                    r.a.createElement(p.a, null, 'Edit'),
                    r.a.createElement(p.a, null, 'Move'),
                    r.a.createElement(p.a, null, 'Resize'),
                    r.a.createElement(p.a, { divider: !0 }),
                    r.a.createElement(p.a, { className: 'text-warning' }, 'Archive'),
                    r.a.createElement(p.a, { className: 'text-danger' }, 'Delete')
                  )
                )
              )
            ),
            r.a.createElement(f.a, { className: 'p-0 overflow-hidden' }, r.a.createElement(T, null)),
            r.a.createElement(
              d.a,
              { className: 'bg-light' },
              r.a.createElement(
                E.a,
                { className: 'justify-content-between' },
                r.a.createElement(
                  h.a,
                  { xs: 'auto' },
                  r.a.createElement(
                    v.a,
                    {
                      type: 'select',
                      bsSize: 'sm',
                      id: 'selectDuration',
                      value: t,
                      onChange: function(e) {
                        var a = e.target;
                        return g(a.value);
                      }
                    },
                    r.a.createElement('option', { value: 'week' }, 'Last 7 days'),
                    r.a.createElement('option', { value: 'month' }, 'Last month'),
                    r.a.createElement('option', { value: 'year' }, 'Last year')
                  )
                ),
                r.a.createElement(
                  h.a,
                  { xs: 'auto' },
                  r.a.createElement(
                    b.a,
                    { color: 'falcon-default', size: 'sm' },
                    r.a.createElement('span', { className: 'd-none d-sm-inline-block mr-1' }, 'Location'),
                    'Overview',
                    r.a.createElement(l.a, { icon: 'chevron-right', className: 'ml-1 fs--1' })
                  )
                )
              )
            )
          );
        });
    }
  }
]);
//# sourceMappingURL=14.4cbdb6cc.chunk.js.map
