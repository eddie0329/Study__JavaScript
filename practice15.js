function f() {
  try {
    console.log(0);
    throw "bogus";
  } catch (e) {
    console.log(1);
    return true;
  } finally {
    console.log(3);
    return true;
  }
  console.log(5);
}

f();
