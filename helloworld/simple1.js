function LinkeButton() {
  const [liked, setLiked] = React.useState(false);
  const text = liked ? "좋아요 취소" : "좋아요";
  return React.createElement(
    "button",
    { onClick: () => setLiked(liked) },
    text
  );
}
console.log("111");
const domContainer = document.getElementById("root1");
console.log("222");

ReactDOM.render(React.createElement(LinkeButton), domContainer);
