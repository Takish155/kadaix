import React from "react";

const date = new Date();
const year = date.getFullYear();

const Birthday = () => {
  const years = Array.from(
    { length: year - 1923 + 1 },
    (_, i) => 1923 + i
  ).sort((a, b) => a + b);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  const selectStyle: React.CSSProperties = {
    width: "70%",
    minWidth: "150px",
    WebkitAppearance: "none",
  };

  const containerStyle: React.CSSProperties = {
    width: "50%",
    minWidth: "200px",
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
      }}
    >
      <div style={containerStyle}>
        <label htmlFor="birthday" className="formLabel">
          生年月日
        </label>
        <br />
        <select className="input" style={selectStyle}>
          <option>年</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}年
            </option>
          ))}
        </select>
        <select className="input" style={selectStyle}>
          <option>月</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}月
            </option>
          ))}
        </select>
        <select className="input" style={selectStyle}>
          <option>日</option>
          {days.map((day) => (
            <option key={day} value={day}>
              {day}日
            </option>
          ))}
        </select>
      </div>
      <div style={containerStyle}>
        <label htmlFor="gender" className="formLabel">
          性別
        </label>
        <select className="input" style={selectStyle}>
          <option>男性</option>
          <option>女性</option>
        </select>
      </div>
    </div>
  );
};

export default Birthday;
