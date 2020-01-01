(this['webpackJsonpfalcon-react'] = this['webpackJsonpfalcon-react'] || []).push([
  [14],
  {
    2040: function(e, a, t) {
      'use strict';
      t.r(a);
      var r = t(22),
        l = t(0),
        n = t.n(l),
        c = t(18),
        o = t(936),
        s = t(466),
        m = t(938),
        i = t(939),
        h = t(940),
        u = t(941),
        E = t(933),
        d = t(478),
        p = t(479),
        b = t(383),
        v = t(934),
        g = t(191),
        y = t(79),
        f = t.n(y),
        w = t(26),
        N = t.n(w),
        x = (t(1093), t(194)),
        k = t(7),
        L = {
          tooltip: {
            show: !0,
            trigger: 'item',
            backgroundColor: k.h[100],
            textStyle: { color: k.h[1100] },
            formatter: function(e) {
              var a = e.name,
                t = e.value;
              return '<strong>'.concat(a, '</strong><br/>Active user: ').concat(t ? ''.concat(Math.round(t / 1e4)) : 0);
            }
          },
          visualMap: {
            min: 0,
            max: 1e5,
            text: ['High', 'Low'],
            realtime: !1,
            calculable: !0,
            inRange: { color: [Object(k.k)(k.m.primary, '0.5'), k.m.primary] },
            textStyle: { color: k.h[700] }
          },
          series: [
            {
              type: 'map',
              mapType: 'world',
              roam: !0,
              zoom: 1.25,
              scaleLimit: { min: 0.9, max: 17 },
              itemStyle: {
                normal: { borderColor: k.h[200], borderWidth: 0.5, areaStyle: { color: k.h[300] } },
                emphasis: { areaColor: '#0443a2', borderColor: k.h[300], label: { show: !1 } }
              },
              data: x.a
            }
          ]
        };
      a.default = function() {
        var e = Object(l.useState)('week'),
          a = Object(r.a)(e, 2),
          t = a[0],
          y = a[1];
        return n.a.createElement(
          o.a,
          { className: 'h-100 mt-3 mt-lg-0' },
          n.a.createElement(
            s.a,
            { className: 'bg-light d-flex justify-content-between' },
            n.a.createElement('h5', { className: 'mb-0' }, 'Active users'),
            n.a.createElement(
              m.a,
              { className: 'text-sans-serif' },
              n.a.createElement(
                i.a,
                { color: 'link', size: 'sm', className: 'text-600 dropdown-caret-none', boundary: 'viewport' },
                n.a.createElement(c.a, { icon: 'ellipsis-h', className: 'fs--1' })
              ),
              n.a.createElement(
                h.a,
                { className: 'border py-0', right: !0 },
                n.a.createElement(
                  'div',
                  { className: 'bg-white py-2' },
                  n.a.createElement(u.a, null, 'Edit'),
                  n.a.createElement(u.a, null, 'Move'),
                  n.a.createElement(u.a, null, 'Resize'),
                  n.a.createElement(u.a, { divider: !0 }),
                  n.a.createElement(u.a, { className: 'text-warning' }, 'Archive'),
                  n.a.createElement(u.a, { className: 'text-danger' }, 'Delete')
                )
              )
            )
          ),
          n.a.createElement(
            E.a,
            { className: 'p-3 overflow-hidden' },
            n.a.createElement(f.a, { echarts: N.a, option: L, style: { width: '100%', height: 420 } })
          ),
          n.a.createElement(
            d.a,
            { className: 'bg-light' },
            n.a.createElement(
              p.a,
              { className: 'justify-content-between' },
              n.a.createElement(
                b.a,
                { xs: 'auto' },
                n.a.createElement(
                  v.a,
                  {
                    type: 'select',
                    bsSize: 'sm',
                    id: 'selectDuration',
                    value: t,
                    onChange: function(e) {
                      var a = e.target;
                      return y(a.value);
                    }
                  },
                  n.a.createElement('option', { value: 'week' }, 'Last 7 days'),
                  n.a.createElement('option', { value: 'month' }, 'Last month'),
                  n.a.createElement('option', { value: 'year' }, 'Last year')
                )
              ),
              n.a.createElement(
                b.a,
                { xs: 'auto' },
                n.a.createElement(
                  g.a,
                  { color: 'falcon-default', size: 'sm' },
                  n.a.createElement('span', { className: 'd-none d-sm-inline-block mr-1' }, 'Location'),
                  'Overview',
                  n.a.createElement(c.a, { icon: 'chevron-right', className: 'ml-1 fs--1' })
                )
              )
            )
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=14.a0b6b3e0.chunk.js.map
