function Counter() {
  const [count, setCount] = useState(0);
  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <div className="simple-counter">
      <button className="dec" onClick={decrease}>
        -
      </button>
      <span className="value">{count}</span>
      <button className="inc" onClick={increase}>
        +
      </button>
    </div>
  );
}

it("생성시 버튼과 초기값을 랜더링 한다.", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Counter />, div);

  expect(diffableHTML(div.innerHTML)).toBe(
    diffableHTML(`
    <div className="simple-counter">
      <button className="dec">-</button>
      <span className="value">0</span>
      <button className="inc">+</button>
    </div>
    `)
  );
});

it("생성시 버튼과 초기값을 랜더링 한다.", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Counter />, div);
  expect(diffableHTML(div.innerHTML)).toMatchSnapShot();
});

it("초기값은 0이다", () => {
  const value = container.querySelector(".value");
  expect(value.innerHTML).toBe("0");
});

it("+ 버튼 클릭 시 1 증가한다.", () => {
  const btnInc = container.querySelector("button.inc");
  const value = container.querySelector(".value");

  btnInc.click();

  expect(value.innerHTML).toBe("1");
});
