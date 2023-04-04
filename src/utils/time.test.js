import currentTime from "./time.js";

describe("Time converting function", () => {
  const testTimeStamp = [
    { stamp: new Date(1680170400000), time: "12:00:00" },

    { stamp: new Date(1680174000000), time: "13:00:00" },

    { stamp: new Date(1680186640000), time: "16:30:40" },

    { stamp: new Date(1680130923000), time: "01:02:03" },

    { stamp: new Date(1680136500000), time: "02:35:00" },

    { stamp: new Date(1680186903000), time: "16:35:03" },
  ];

  it.each(testTimeStamp)(
    "should correctly extract time (HH:MM:SS) from the timestamp",
    (data) => {
      const time = currentTime(data.stamp);
      expect(data.time).toEqual(time);
    }
  );
});
