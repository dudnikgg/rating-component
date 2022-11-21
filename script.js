const ratingComponent = document.querySelector("rating-component")
const rateBlock = ratingComponent.querySelector(".rate")
const submitBtn = ratingComponent.querySelector(".btn--submit")
let selectedRate = null

rateBlock.addEventListener("click", (e) => {
  if (e.target.dataset.rate) {
    selectedRate?.classList.remove("is-active")
    selectedRate = e.target
    selectedRate.classList.add("is-active")
    submitBtn.disabled = false
  }
})

submitBtn.addEventListener("click", (e) => {
  ratingComponent.querySelector("[data-result]").dataset.result =
    selectedRate.dataset.rate
  ratingComponent.querySelector("[data-result]").textContent =
    selectedRate.dataset.rate
  ratingComponent.querySelector("[data-state='init']").style.display = "none"
  ratingComponent.querySelector("[data-state='result']").style.display = "flex"
})
