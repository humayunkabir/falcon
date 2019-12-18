(this['webpackJsonpfalcon-react'] = this['webpackJsonpfalcon-react'] || []).push([
  [12],
  {
    1005: function(e, a, t) {
      'use strict';
      var n = t(0),
        c = t.n(n),
        l = t(479),
        r = t(382),
        m = t(12),
        s = t(971);
      a.a = function() {
        return c.a.createElement(
          n.Fragment,
          null,
          c.a.createElement(
            l.a,
            { className: 'text-left justify-content-between' },
            c.a.createElement(r.a, { xs: 'auto' }, c.a.createElement('h5', null, 'Log in')),
            c.a.createElement(
              r.a,
              { xs: 'auto' },
              c.a.createElement(
                'p',
                { className: 'fs--1 text-600' },
                'or ',
                c.a.createElement(m.b, { to: '/authentication/basic/register' }, 'create an account')
              )
            )
          ),
          c.a.createElement(s.a, null)
        );
      };
    },
    1008: function(e, a, t) {
      'use strict';
      var n = t(0),
        c = t.n(n),
        l = t(479),
        r = t(382),
        m = t(12),
        s = t(974);
      a.a = function() {
        return c.a.createElement(
          n.Fragment,
          null,
          c.a.createElement(
            l.a,
            { className: 'text-left' },
            c.a.createElement(r.a, null, c.a.createElement('h5', { id: 'modalLabel' }, 'Register')),
            c.a.createElement(
              r.a,
              { xs: 'auto' },
              c.a.createElement(
                'p',
                { className: 'fs--1 text-600' },
                'Have an account? ',
                c.a.createElement(m.b, { to: '/authentication/basic/login' }, 'Login')
              )
            )
          ),
          c.a.createElement(s.a, null)
        );
      };
    },
    2044: function(e, a, t) {
      'use strict';
      t.r(a);
      var n = t(0),
        c = t.n(n),
        l = t(479),
        r = t(382),
        m = t(936),
        s = t(933),
        o = t(121),
        u = t(263),
        E = t(98),
        i = t(1005),
        p = t(1007),
        x = function() {
          return c.a.createElement('div', { className: 'text-center' }, c.a.createElement(p.a, null));
        },
        f = t(1008),
        h = t(1009),
        b = function() {
          return c.a.createElement(
            'div',
            { className: 'text-center' },
            c.a.createElement('h5', { className: 'mb-0' }, ' Forgot your password?'),
            c.a.createElement('small', null, "Enter your email and we'll send you a reset link."),
            c.a.createElement(h.a, null)
          );
        },
        d = t(1010),
        N = function() {
          return c.a.createElement(
            'div',
            { className: 'text-center' },
            c.a.createElement('h5', null, 'Reset new password'),
            c.a.createElement(d.a, null)
          );
        },
        g = t(1011),
        v = function() {
          return c.a.createElement(
            'div',
            { className: 'text-center' },
            c.a.createElement(g.a, { email: 'xyz@abc.com' })
          );
        },
        w = t(108),
        y = t(1012),
        k = t(125),
        F = t.n(k),
        L = function() {
          return c.a.createElement(
            'div',
            { className: 'text-center' },
            c.a.createElement(w.a, { src: F.a, size: '4xl' }),
            c.a.createElement('h5', { className: 'mt-3 mb-0' }, 'Hi! Emma Watson'),
            c.a.createElement('small', null, 'Enter your password to access the admin.'),
            c.a.createElement(y.a, { className: 'mt-4 mx-sm-4' })
          );
        },
        j = Object(E.g)(function(e) {
          var a = e.match.url;
          return c.a.createElement(
            E.d,
            null,
            c.a.createElement(E.b, { path: ''.concat(a, '/login'), exact: !0, component: i.a }),
            c.a.createElement(E.b, { path: ''.concat(a, '/logout'), exact: !0, component: x }),
            c.a.createElement(E.b, { path: ''.concat(a, '/register'), exact: !0, component: f.a }),
            c.a.createElement(E.b, { path: ''.concat(a, '/forget-password'), exact: !0, component: b }),
            c.a.createElement(E.b, { path: ''.concat(a, '/confirm-mail'), exact: !0, component: v }),
            c.a.createElement(E.b, { path: ''.concat(a, '/password-reset'), exact: !0, component: N }),
            c.a.createElement(E.b, { path: ''.concat(a, '/lock-screen'), exact: !0, component: L }),
            c.a.createElement(E.a, { to: '/errors/404' })
          );
        });
      a.default = function() {
        return c.a.createElement(
          u.a,
          { className: 'py-0' },
          c.a.createElement(
            l.a,
            { className: 'flex-center min-vh-100 py-6' },
            c.a.createElement(
              r.a,
              { sm: 10, md: 8, lg: 6, xl: 5, className: 'col-xxl-4' },
              c.a.createElement(o.a, null),
              c.a.createElement(
                m.a,
                null,
                c.a.createElement(s.a, { className: 'fs--1 font-weight-normal p-5' }, c.a.createElement(j, null))
              )
            )
          )
        );
      };
    }
  }
]);
//# sourceMappingURL=12.8f036fc5.chunk.js.map
