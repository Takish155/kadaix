import React from "react";
import useRegistrationForm from "./useRegistrationForm";

const date = new Date();
const year = date.getFullYear();

const Birthday = () => {
  const { register, errors } = useRegistrationForm();

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
        <div>
          <br />
          <select
            className="input"
            style={selectStyle}
            {...register("birthYear")}
          >
            <option value="a">年</option>
            {years.map((year) => (
              <option key={year} value={year}>
                {year}年
              </option>
            ))}
          </select>
          {errors.birthYear?.message && (
            <p className="inputError">{errors.birthYear.message}</p>
          )}
        </div>
        <div>
          <select
            className="input"
            style={selectStyle}
            {...register("birthMonth")}
          >
            <option value="">月</option>
            {months.map((month) => (
              <option key={month} value={month}>
                {month}月
              </option>
            ))}
          </select>
          {errors.birthMonth?.message && (
            <p className="inputError">{errors.birthMonth.message}</p>
          )}
        </div>
        <div>
          <select
            className="input"
            style={selectStyle}
            {...register("birthDay")}
          >
            <option value="">日</option>
            {days.map((day) => (
              <option key={day} value={day}>
                {day}日
              </option>
            ))}
          </select>
          {errors.birthDay?.message && (
            <p className="inputError">{errors.birthDay.message}</p>
          )}
        </div>
      </div>
      <div style={containerStyle}>
        <label htmlFor="gender" className="formLabel">
          性別
        </label>
        <select className="input" style={selectStyle} {...register("gender")}>
          <option value={"male"}>男性</option>
          <option value={"female"}>女性</option>
        </select>
        {errors.gender?.message && (
          <p className="inputError">{errors.gender.message}</p>
        )}
      </div>
    </div>
  );
};

export default Birthday;
