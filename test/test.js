const expect = require('chai').expect;
const jsonFileInclude = require('../json-file-import.js');

it('JSON with import directives', function (done) {
  expect(jsonFileInclude.load('./test/test-noimport.json')).eql({
      n: 1,
      b: true,
      s: "abc",
      a: [
        1,
        2,
        3
      ],
      o: {
        n1: 1,
        n2: 2,
        n3: {
          n4: "n4"
        }
      }
    }
  );
  done();
});

it('JSON with no import directives', function (done) {
  expect(jsonFileInclude.load('./test/test-import.json')).eql({
    n: 1,
    b: true,
    s: "abc",
    s2: "password",
    s3: {
      "os-username": "user",
      "os-password": "password",
      keypair: "xxx",
      o: {
        a: {
          c: 3
        },
        b: 2
      }
    },
    a: [
      1,
      2,
      "password",
      4
    ],
    o: {
      n1: 1,
      n2: 2,
      n3: {
        "os-username": "user",
        "os-password": "password",
        keypair: "xxx",
        o: {
          a: {
            c: 3
          },
          b: 2
        }
      },
      n4: {
        "os-username": "user"
      }
    }
  });
  done();
});

it('JSON with nested import directives', function (done) {
  expect(jsonFileInclude.load('./test/test-nested.json')).eql({
      c: 3
    }
  );
  done();
});


