"use strict";

const amountInput = document.querySelector(".t-box");
const convertBtn = document.querySelector(".C-btn");
const resetBtn = document.querySelector(".R-btn");
const fromCur = document.getElementById("fromCur");
const toCur = document.getElementById("toCur");
const result = document.querySelector(".finalValue");
const title = document.querySelector(".t-head");

// Map some currencies to their locales
const currencyLocales = {
  USD: "en-US",
  EUR: "de-DE",
  INR: "en-IN",
  GBP: "en-GB",
  JPY: "ja-JP",
  CNY: "zh-CN",
  RUB: "ru-RU",
  AED: "ar-AE",
};

const convertResult = () => {
  // Format number into chosen currency
  const formatCurrency = (value, currency) => {
    const locale = currencyLocales[currency] || "en-US"; // fallback locale
    return value.toLocaleString(locale, {
      style: "currency",
      currency: currency,
    });
  };

  const value = Number(amountInput.value);
  const fromCurrency = fromCur.value;
  const toCurrency = toCur.value;

  if (!value || !toCurrency) {
    result.textContent = "⚠️ Please enter amount & select currencies";
    return;
  }

  // Just format into "To" currency (not real conversion)
  result.textContent = formatCurrency(value, toCurrency);

  // Change heading dynamically
  title.textContent = `Currency Formatter (${toCurrency})`;
};

// Handle Convert button
convertBtn.addEventListener("click", convertResult);
// Handle Reset button
resetBtn.addEventListener("click", () => {
  amountInput.value = "";
  fromCur.value = "";
  toCur.value = "";
  result.textContent = "";
});
