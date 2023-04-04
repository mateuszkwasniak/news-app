const currentTime = (stamp) => {
  return (
    (stamp.getHours() / 10 < 1 ? "0" + stamp.getHours() : stamp.getHours()) +
    ":" +
    (stamp.getMinutes() / 10 < 1
      ? "0" + stamp.getMinutes()
      : stamp.getMinutes()) +
    ":" +
    (stamp.getSeconds() / 10 < 1
      ? "0" + stamp.getSeconds()
      : stamp.getSeconds())
  );
};

export default currentTime;
