// tslint:disable
(function() {
  var fd = prompt(
    unescape(
      '%4F%6E%6C%79%20%74%68%65%20%74%72%75%6C%79%20%65%6E%6C%69%67%68%74%65%6E%65%64%20%63%61%6E%20%70%61%73%73%20%62%79%20%74%68%65%20%53%70%68%69%6E%78'
    )
  );
  var uij = new Array(100); // Stack
  var ivi = new Array(100);
  var vii = 0,
    dd = 0;
  var jui = [
    11,
    17,
    19,
    43,
    43,
    47,
    13,
    89,
    11,
    103,
    19,
    109,
    37,
    131,
    61,
    137,
    43,
    139,
    41,
    149,
    11,
    179,
    43,
    191,
    47,
    199,
    181,
    283,
    191,
    347,
    199,
    373,
    409,
    419,
    271,
    431,
    37,
    479,
    479,
    491,
    419,
    499
  ];
  var dp = 0;
  function iii_ivi(n) {
    ivi[dd++] = n;
  }
  function ii_ivi() {
    return ivi[--dd];
  }
  function iv() {
    var a = 'p' + jui[dp++] + 'p' + jui[dp++];
    xii(a);
  }
  function ii() {
    // pop Stack
    return uij[--vii];
  }
  function iii(n) {
    // push Stack
    uij[vii++] = n;
  }
  function xm() {
    var a = ii();
    xii('p' + ++a);
  }
  function df() {
    var a = ii();
    var b = ii();
    xii('p' + a * b);
  }
  function ff() {
    var a = ii();
    var b = ii();
    xii('p' + (a & b));
  }
  function ixi() {
    var a = ii();
    var b = ii();
    xii('p' + b % a);
  }
  function dxi() {
    var a = ii();
    var b = ii();
    xii('p' + (a + b));
  }
  function gf() {
    var a = ii();
    var b = ii();
    xii('p' + b + 'p' + a + 'p' + b);
  }
  function gf2() {
    var a = ii();
    var b = ii();
    var c = ii();
    xii('p' + c + 'p' + b + 'p' + a + 'p' + c);
  }
  function vix() {
    var a = ii();
    var b = ii();
    if (a == b) xii('p1');
    else xii('p0');
  }
  function fek() {
    var a = ii();
    var b = ii();
    var c = ii();
    if (c == 1) iii(b);
    else iii(a);
  }
  function rdr() {
    var a = ii();
    alert(unescape(a));
  }
  function xoi() {
    var a = ii();
    xii('p' + fd.charCodeAt(a));
  }
  function mx() {
    var a = ii();
    var b = ii();
    xii('p' + a + 'p' + b);
  }
  function xx() {
    xii('p' + fd.length);
  }
  function fr(s) {
    if (s == 'a')
      iii(
        '%43%6F%6E%67%72%61%74%75%6C%61%74%69%6F%6E%73%2C%20%79%6F%75%20%68%61%76%65%20%74%68%65%20%70%61%73%73%70%68%72%61%73%65%21'
      );
    else if (s == 'b')
      iii(
        '%54%6F%6F%20%62%61%64%2C%20%6D%79%20%66%72%69%65%6E%64%2C%20%62%65%74%74%65%72%20%6C%75%63%6B%20%6E%65%78%74%20%74%69%6D%65%21'
      );
  }
  function gff(t, i, i0) {
    xii('ooe');
    var a = ii();
    if (a == 1) {
      xii('ff');
      return i + t;
    }
    xii('j');
    iii_ivi(i0);
    a = ii();
    iii_ivi(a);
    a = ii();
    iii_ivi(a);
    return i;
  }
  function txd() {
    var a = ii_ivi();
    var b = ii_ivi();
    iii_ivi(b);
    iii_ivi(a);
    xii('p' + --b);
  }
  function mi() {
    var a = ii_ivi();
    iii(a);
    a = ii_ivi();
    iii(a);
    return ii_ivi();
  }
  function xii(xiv) {
    var i = 0;
    var rrr = 0;
    while (i < xiv.length) {
      i0 = i;
      switch (xiv.charAt(i)) {
        case 'p':
          i++;
          var t = 0;
          while (xiv.charAt(i) >= '0' && xiv.charAt(i) <= '9') {
            t = t * 10 + (xiv.charAt(i) - '0');
            i++;
            if (i == xiv.length) break;
          }
          iii(t);
          break;
        case 'w':
          i++;
          var t = 0;
          while (xiv.charAt(i) >= '0' && xiv.charAt(i) <= '9') {
            t = t * 10 + (xiv.charAt(i) - '0');
            i++;
          }
          i = gff(t, i, i0);
          break;
        case 'x':
          i++;
          i = mi();
          if (i > i0) xii('ff');
          break;
        case 'c':
          i++;
          xii('qp0zp0w11p128dvyaobxgfe');
          break;
        case 'r':
          i++;
          xii('p20p0w2hx');
          break;
        case 'e':
          i++;
          vix();
          break;
        case 'm':
          i++;
          rdr();
          break;
        case 'i':
          i++;
          fek();
          break;
        case 's':
          i++;
          fr(xiv.charAt(i));
          i++;
          break;
        case 'q':
          i++;
          iv();
          break;
        case 'o':
          i++;
          gf();
          break;
        case 'j':
          i++;
          xm();
          break;
        case 'z':
          i++;
          xx();
          break;
        case 'v':
          i++;
          txd();
          break;
        case 'y':
          i++;
          xoi();
          break;
        case 'a':
          i++;
          dxi();
          break;
        case 'O':
          i++;
          gf2();
          break;
        case 'b':
          i++;
          ixi();
          break;
        case 'd':
          i++;
          df();
          break;
        case 'f':
          i++;
          ii();
          break;
        case 'g':
          i++;
          mx();
          break;
        case 'h':
          i++;
          ff();
          break;
      }
    }
  }
  xii('p21p0w2cxrp1esasbim');
})();
