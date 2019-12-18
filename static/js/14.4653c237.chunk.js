(this['webpackJsonpfalcon-react'] = this['webpackJsonpfalcon-react'] || []).push([
  [14],
  {
    2039: function(e, a, t) {
      'use strict';
      t.r(a);
      var l = t(23),
        r = t(0),
        n = t.n(r),
        c = t(18),
        o = t(936),
        s = t(465),
        m = t(938),
        i = t(939),
        d = t(940),
        u = t(941),
        E = t(933),
        f = t(478),
        h = t(479),
        p = t(382),
        b = t(934),
        v = t(190),
        g = t(94),
        w = t.n(g),
        y = t(27),
        N = t.n(y),
        x = (t(1093),
        {
          tooltip: {
            show: !0,
            trigger: 'item',
            backgroundColor: '#f9fafd',
            textStyle: { color: '#000' },
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
            inRange: { color: ['#d8e2ef', '#2d7bcd'] }
          },
          series: [
            {
              type: 'map',
              mapType: 'world',
              roam: !0,
              zoom: 1.25,
              scaleLimit: { min: 0.9, max: 17 },
              itemStyle: {
                normal: { borderColor: '#d8e2ef', borderWidth: 0.5, areaStyle: { color: '#d8e2ef' } },
                emphasis: { areaColor: '#0443a2', borderColor: '#d8e2ef', label: { show: !1, color: '#fff' } }
              },
              data: t(193).a
            }
          ]
        });
      a.default = function() {
        var e = Object(r.useState)('week'),
          a = Object(l.a)(e, 2),
          t = a[0],
          g = a[1];
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
                d.a,
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
            n.a.createElement(w.a, { echarts: N.a, option: x, style: { width: '100%', height: 420 } })
          ),
          n.a.createElement(
            f.a,
            { className: 'bg-light' },
            n.a.createElement(
              h.a,
              { className: 'justify-content-between' },
              n.a.createElement(
                p.a,
                { xs: 'auto' },
                n.a.createElement(
                  b.a,
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
                  n.a.createElement('option', { value: 'week' }, 'Last 7 days'),
                  n.a.createElement('option', { value: 'month' }, 'Last month'),
                  n.a.createElement('option', { value: 'year' }, 'Last year')
                )
              ),
              n.a.createElement(
                p.a,
                { xs: 'auto' },
                n.a.createElement(
                  v.a,
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
//# sourceMappingURL=14.4653c237.chunk.js.map
