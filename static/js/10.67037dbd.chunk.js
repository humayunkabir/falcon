(this['webpackJsonpfalcon-react'] = this['webpackJsonpfalcon-react'] || []).push([
  [10],
  {
    1209: function(e, t, a) {
      e.exports = a.p + 'static/media/14.2e238fd1.jpg';
    },
    1210: function(e, t, a) {
      e.exports = a.p + 'static/media/19.3c467e00.jpg';
    },
    1211: function(e, t, a) {
      e.exports = a.p + 'static/media/15.fe45522f.jpg';
    },
    1212: function(e, t, a) {
      e.exports = a.p + 'static/media/17.5145db24.jpg';
    },
    1213: function(e, t, a) {
      e.exports = a.p + 'static/media/20.c906bddb.jpg';
    },
    1214: function(e, t, a) {
      e.exports = a.p + 'static/media/16.321fd6d4.jpg';
    },
    1215: function(e, t, a) {
      e.exports = a.p + 'static/media/18.80c92e6e.jpg';
    },
    2044: function(e, t, a) {
      'use strict';
      a.r(t);
      var n = a(0),
        c = a.n(n),
        r = a(98),
        l = a(12),
        s = a(35),
        o = a(971),
        m = a(22),
        i = a(472),
        u = a(112),
        p = a(933),
        E = a(466),
        f = a(479),
        g = a(383),
        b = a(936),
        d = function(e) {
          return function(t) {
            var a = Object(n.useState)(null),
              r = Object(m.a)(a, 2),
              s = r[0],
              o = r[1];
            return c.a.createElement(
              i.a,
              { fluid: !0 },
              c.a.createElement(
                f.a,
                { className: 'min-vh-100 bg-100' },
                c.a.createElement(g.a, { xs: 6, className: 'd-none d-lg-block' }, s && c.a.createElement(u.a, s)),
                c.a.createElement(
                  g.a,
                  { sm: 10, md: 6, className: 'px-sm-0 align-self-center mx-auto py-5' },
                  c.a.createElement(
                    f.a,
                    { noGutters: !0, className: 'justify-content-center' },
                    c.a.createElement(
                      g.a,
                      { lg: 9, xl: 8, className: 'col-xxl-6' },
                      c.a.createElement(
                        b.a,
                        null,
                        c.a.createElement(
                          E.a,
                          { className: 'bg-split-card-header bg-circle-shape text-center p-2' },
                          c.a.createElement(
                            l.b,
                            {
                              className:
                                'text-white text-sans-serif font-weight-extra-bold fs-4 z-index-1 position-relative',
                              to: '/'
                            },
                            'falcon'
                          )
                        ),
                        c.a.createElement(
                          p.a,
                          { className: 'p-4' },
                          c.a.createElement(e, Object.assign({ setBgProps: o }, t))
                        )
                      )
                    )
                  )
                )
              )
            );
          };
        },
        x = a(1209),
        h = a.n(x),
        N = d(function(e) {
          var t = e.setBgProps;
          return (
            Object(n.useEffect)(
              function() {
                return t({ image: h.a, position: '50% 20%' });
              },
              [t]
            ),
            c.a.createElement(
              n.Fragment,
              null,
              c.a.createElement(
                s.a,
                { align: 'center', justify: 'between' },
                c.a.createElement('h3', null, 'Login'),
                c.a.createElement(
                  'p',
                  { className: 'mb-0 fs--1' },
                  c.a.createElement('span', { className: 'font-weight-semi-bold' }, 'New User? '),
                  c.a.createElement(l.b, { to: '/authentication/split/register' }, 'Create account')
                )
              ),
              c.a.createElement(o.a, { layout: 'split', hasLabel: !0 })
            )
          );
        }),
        j = a(1007),
        y = a(1210),
        v = a.n(y),
        w = d(function(e) {
          var t = e.setBgProps;
          return (
            Object(n.useEffect)(
              function() {
                return t({ image: v.a });
              },
              [t]
            ),
            c.a.createElement(
              'div',
              { className: 'text-center' },
              c.a.createElement(j.a, { layout: 'split', titleTag: 'h3' })
            )
          );
        }),
        O = a(974),
        B = a(1211),
        P = a.n(B),
        k = d(function(e) {
          var t = e.setBgProps;
          return (
            Object(n.useEffect)(
              function() {
                return t({ image: P.a });
              },
              [t]
            ),
            c.a.createElement(
              n.Fragment,
              null,
              c.a.createElement(
                s.a,
                { align: 'center', justify: 'between' },
                c.a.createElement('h3', null, 'Register'),
                c.a.createElement(
                  'p',
                  { className: 'mb-0 fs--1' },
                  c.a.createElement('span', { className: 'font-weight-semi-bold' }, 'Already User? '),
                  c.a.createElement(l.b, { to: '/authentication/split/login' }, 'Login')
                )
              ),
              c.a.createElement(O.a, { layout: 'split', hasLabel: !0 })
            )
          );
        }),
        L = a(1009),
        z = a(1212),
        F = a.n(z),
        J = d(function(e) {
          var t = e.setBgProps;
          return (
            Object(n.useEffect)(
              function() {
                return t({ image: F.a, position: '50% 76%', overlay: !0 });
              },
              [t]
            ),
            c.a.createElement(
              'div',
              { className: 'text-center' },
              c.a.createElement('h4', { className: 'mb-0' }, ' Forgot your password?'),
              c.a.createElement('small', null, "Enter your email and we'll send you a reset link."),
              c.a.createElement(L.a, { layout: 'split' })
            )
          );
        }),
        R = a(1010),
        T = a(1213),
        U = a.n(T),
        A = d(function(e) {
          var t = e.setBgProps;
          return (
            Object(n.useEffect)(
              function() {
                return t({ image: U.a });
              },
              [t]
            ),
            c.a.createElement(
              'div',
              { className: 'text-center' },
              c.a.createElement('h3', null, 'Reset password'),
              c.a.createElement(R.a, { layout: 'split', hasLabel: !0 })
            )
          );
        }),
        C = a(1011),
        G = a(1214),
        H = a.n(G),
        S = d(function(e) {
          var t = e.setBgProps;
          return (
            Object(n.useEffect)(
              function() {
                return t({ image: H.a, position: '50% 30%' });
              },
              [t]
            ),
            c.a.createElement(
              'div',
              { className: 'text-center' },
              c.a.createElement(C.a, { email: 'xyz@abc.com', layout: 'split', titleTag: 'h3' })
            )
          );
        }),
        q = a(108),
        D = a(1012),
        I = a(254),
        K = a(125),
        M = a.n(K),
        Q = a(1215),
        V = a.n(Q),
        W = d(function(e) {
          var t = e.setBgProps;
          return (
            Object(n.useEffect)(
              function() {
                return t({ image: V.a });
              },
              [t]
            ),
            c.a.createElement(
              f.a,
              { className: 'justify-content-center' },
              c.a.createElement(
                g.a,
                { xs: 'auto' },
                c.a.createElement(
                  I.a,
                  { className: 'align-items-center' },
                  c.a.createElement(q.a, { src: M.a, size: '4xl', className: 'mr-4' }),
                  c.a.createElement(
                    I.a,
                    { body: !0 },
                    c.a.createElement('h4', null, 'Hi! Emma'),
                    c.a.createElement(
                      'p',
                      { className: 'mb-0' },
                      'Enter your password ',
                      c.a.createElement('br', null),
                      'to access the admin.'
                    )
                  )
                ),
                c.a.createElement(D.a, { className: 'mt-4' })
              )
            )
          );
        });
      t.default = function(e) {
        var t = e.match.url;
        return c.a.createElement(
          r.d,
          null,
          c.a.createElement(r.b, { path: ''.concat(t, '/login'), exact: !0, component: N }),
          c.a.createElement(r.b, { path: ''.concat(t, '/logout'), exact: !0, component: w }),
          c.a.createElement(r.b, { path: ''.concat(t, '/register'), exact: !0, component: k }),
          c.a.createElement(r.b, { path: ''.concat(t, '/forget-password'), exact: !0, component: J }),
          c.a.createElement(r.b, { path: ''.concat(t, '/confirm-mail'), exact: !0, component: S }),
          c.a.createElement(r.b, { path: ''.concat(t, '/password-reset'), exact: !0, component: A }),
          c.a.createElement(r.b, { path: ''.concat(t, '/lock-screen'), exact: !0, component: W }),
          c.a.createElement(r.a, { to: '/errors/404' })
        );
      };
    }
  }
]);
//# sourceMappingURL=10.67037dbd.chunk.js.map
