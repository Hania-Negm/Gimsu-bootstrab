const monthlyBtn = document.getElementById("monthlyBtn");
const annuallyBtn = document.getElementById("annuallyBtn");

// عناصر الأسعار
const priceBasic = document.getElementById("priceBasic");
const pricePremium = document.getElementById("pricePremium");
const priceVip = document.getElementById("priceVip");

// الأسعار الشهرية
const monthlyPrices = {
  basic: "23.99",
  premium: "49.99",
  vip: "89.99"
};

// الأسعار السنوية
const annualPrices = {
  basic: "199.99",
  premium: "399.99",
  vip: "699.99"
};

// دالة تحديث الأسعار
function updatePrices(type) {
  if (type === "monthly") {
    priceBasic.textContent = monthlyPrices.basic;
    pricePremium.textContent = monthlyPrices.premium;
    priceVip.textContent = monthlyPrices.vip;
  } else {
    priceBasic.textContent = annualPrices.basic;
    pricePremium.textContent = annualPrices.premium;
    priceVip.textContent = annualPrices.vip;
  }
}

// Events
monthlyBtn.addEventListener("click", () => {
  monthlyBtn.classList.add("active");
  annuallyBtn.classList.remove("active");
  updatePrices("monthly");
});

annuallyBtn.addEventListener("click", () => {
  annuallyBtn.classList.add("active");
  monthlyBtn.classList.remove("active");
  updatePrices("annually");
});

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("click", () => {
    cards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");
  });
});
