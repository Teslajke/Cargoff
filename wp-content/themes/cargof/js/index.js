console.log("js running...")

// form 1
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form1")
  const messagePopup = document.getElementById("popup-correct")
  const errorPopup = document.getElementById("popup-wrong")
  form.addEventListener("submit", formSend)

  async function formSend(e) {
    e.preventDefault()

    let error = formValidate(form)

    let formData = new FormData(form)

    if (error === 0) {
      form.classList.add("_sending")

      let response = await fetch("/wp-content/themes/cargof/sendmail.php", {
        method: "POST",
        body: formData,
      })
      if (response.ok) {
        let result = await response.json()
        messagePopup.classList.add("open")
        form.reset()
        form.classList.remove("_sending")
      } else {
        errorPopup.classList.add("open")
        form.classList.remove("_sending")
      }
    } else {
      errorPopup.classList.add("open")
    }
  }
})

// form 2
document.addEventListener("DOMContentLoaded", function () {
  const form2 = document.getElementById("form2")
  const messagePopup = document.getElementById("popup-correct")
  const errorPopup = document.getElementById("popup-wrong")
  form2.addEventListener("submit", formSend)

  async function formSend(e) {
    e.preventDefault()

    let error = formValidate(form2)

    let formData = new FormData(form2)

    if (error === 0) {
      form2.classList.add("_sending")

      let response = await fetch("/wp-content/themes/cargof/sendmail.php", {
        method: "POST",
        body: formData,
      })
      if (response.ok) {
        let result = await response.json()
        messagePopup.classList.add("open")
        form2.reset()
        form2.classList.remove("_sending")
      } else {
        errorPopup.classList.add("open")
        form2.classList.remove("_sending")
      }
    } else {
      errorPopup.classList.add("open")
    }
  }
})

// form 3
document.addEventListener("DOMContentLoaded", function () {
  const form3 = document.getElementById("form3")
  const messagePopup = document.getElementById("popup-correct")
  const errorPopup = document.getElementById("popup-wrong")
  form3.addEventListener("submit", formSend)

  async function formSend(e) {
    e.preventDefault()

    let error = formValidate(form3)

    let formData = new FormData(form3)

    if (error === 0) {
      form3.classList.add("_sending")

      let response = await fetch("/wp-content/themes/cargof/sendmail.php", {
        method: "POST",
        body: formData,
      })
      if (response.ok) {
        let result = await response.json()
        messagePopup.classList.add("open")
        form3.reset()
        form3.classList.remove("_sending")
      } else {
        errorPopup.classList.add("open")
        form3.classList.remove("_sending")
      }
    } else {
      errorPopup.classList.add("open")
    }
  }
})

// form 4
document.addEventListener("DOMContentLoaded", function () {
  const form4 = document.getElementById("form4")
  const messagePopup = document.getElementById("popup-correct")
  const errorPopup = document.getElementById("popup-wrong")
  form4.addEventListener("submit", formSend)

  async function formSend(e) {
    e.preventDefault()

    let error = formValidate(form4)

    let formData = new FormData(form4)

    if (error === 0) {
      form4.classList.add("_sending")

      let response = await fetch("/wp-content/themes/cargof/sendmail.php", {
        method: "POST",
        body: formData,
      })
      if (response.ok) {
        let result = await response.json()
        messagePopup.classList.add("open")
        form4.reset()
        form4.classList.remove("_sending")
      } else {
        errorPopup.classList.add("open")
        form4.classList.remove("_sending")
      }
    } else {
      errorPopup.classList.add("open")
    }
  }
})

function formValidate(formProp) {
  let error = 0
  let formReq = formProp.querySelectorAll("._req")

  for (let index = 0; index < formReq.length; index++) {
    const input = formReq[index]
    formRemoveError(input)

    if (input.classList.contains("_email")) {
      if (emailTest(input)) {
        formAddError(input)
        error++
      }
    } else {
      if (input.value === "") {
        formAddError(input)
        error++
      }
    }

    if (input.classList.contains("_phone")) {
      if (isPhoneValid(input)) {
        formAddError(input)
        error++
      }
    }
  }
  return error
}

function formAddError(input) {
  input.parentElement.classList.add("_error")
  input.classList.add("_error")
}

function formRemoveError(input) {
  input.parentElement.classList.remove("_error")
  input.classList.remove("_error")
}

// Функция теста Email
function emailTest(input) {
  return !/^\w+([\.-]?\w+)*@\w+([\.-]?w+)*(\.\w{2,8})+$/.test(input.value)
}

// Функция теста телефона
function isPhoneValid(input) {
  return !/^\7\d{3}\d{3}\d{2}\d{2}$/g.test(input.value)
}

// Меню бургер
function burger() {
  const burgerBtn = document.querySelector(".menu__burger")
  const menu = document.querySelector(".header__nav-mob")
  const menuLinks = document.querySelectorAll(".menu__link")
  const overlay = document.querySelector(".overlay")

  burgerBtn.addEventListener("click", function () {
    document.body.classList.toggle("lock")
    burgerBtn.classList.toggle("active")
    menu.classList.toggle("active")
    overlay.classList.toggle("active")
  })

  menuLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      document.body.classList.remove("lock")
      burgerBtn.classList.remove("active")
      menu.classList.remove("active")
      overlay.classList.remove("active")
    })
  })

  document.addEventListener("click", function (event) {
    if (!menu.contains(event.target) && !burgerBtn.contains(event.target)) {
      document.body.classList.remove("lock")
      burgerBtn.classList.remove("active")
      menu.classList.remove("active")
      overlay.classList.remove("active")
    }
  })
}

burger()

//Попапы
function popups() {
  let popupLinks = document.querySelectorAll(".popup-link")
  const body = document.querySelector("body")
  const lockPadding = document.querySelectorAll(".lock-padding")

  let unlock = true

  const timeout = 500

  if (popupLinks.length > 0) {
    for (let index = 0; index < popupLinks.length; index++) {
      const popupLink = popupLinks[index]
      popupLink.addEventListener("click", function (e) {
        const popupName = popupLink.getAttribute("href").replace("#", "")
        const curentPopup = document.getElementById(popupName)
        popupOpen(curentPopup)
        e.preventDefault()
      })
    }
  }

  const popupCloseIcon = document.querySelectorAll(".close-popup")
  if (popupCloseIcon.length > 0) {
    for (let index = 0; index < popupCloseIcon.length; index++) {
      const el = popupCloseIcon[index]
      el.addEventListener("click", function (e) {
        popupClose(el.closest(".popup"))
        e.preventDefault()
      })
    }
  }

  function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
      const popupActive = document.querySelector(".popup.open")
      if (popupActive) {
        popupClose(popupActive, false)
      } else {
        bodyLock()
      }
      curentPopup.classList.add("open")
      curentPopup.addEventListener("click", function (e) {
        if (!e.target.closest(".popup__content")) {
          popupClose(e.target.closest(".popup"))
        }
      })
    }
  }

  function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
      popupActive.classList.remove("open")
      if (doUnlock) {
        bodyUnLock()
      }
    }
  }

  function bodyLock() {
    const lockPaddingValue =
      window.innerWidth -
      document.getElementsByTagName("body").offsetWidth +
      "px"
    if (lockPadding.length > 0) {
      for (let index = 0; index < lockPadding.length; index++) {
        const el = lockPadding[index]
        el.style.paddingRight = lockPaddingValue
      }
    }
    body.style.paddingRight = lockPaddingValue
    body.classList.add("locker")

    unlock = false
    setTimeout(function () {
      unlock = true
    }, timeout)
  }

  function bodyUnLock() {
    setTimeout(function () {
      if (lockPadding.length > 0) {
        for (let index = 0; index < lockPadding.length; index++) {
          const el = lockPadding[index]
          el.style.paddingRight = "0px"
        }
      }
      body.style.paddingRight = "0px"
      body.classList.remove("locker")
    }, timeout)

    unlock = false
    setTimeout(function () {
      unlock = true
    }, timeout)
  }
}

popups()

function changeTab(tabId, button) {
  // Скрыть все табы
  let tabs = document.querySelectorAll(".tab-content")
  tabs.forEach(function (tab) {
    tab.classList.remove("active-tab")
  })

  // Сделать выбранный таб активным
  let selectedTab = document.getElementById(tabId)
  selectedTab.classList.add("active-tab")

  // Убрать активное состояние у всех кнопок
  let buttons = document.querySelectorAll(".tab__btn")
  buttons.forEach(function (btn) {
    btn.classList.remove("tab-color")
  })

  // Добавить активное состояние только выбранной кнопке
  button.classList.add("tab-color")
}

// Инициализация: сделать первый таб активным

if (document.querySelector(".tab__btn")) {
  changeTab("tab1", document.querySelector(".tab__btn"))
}

function showAllText() {
  var dots = document.getElementById("dots-2")
  var moreText = document.getElementById("more-text")
  var btnText = document.getElementById("btnMoreText")

  if (dots.style.display === "none") {
    dots.style.display = "inline"
    btnText.innerHTML = "Читать далее"
    moreText.style.display = "none"
    btnText.style.position = "initial"
  } else {
    dots.style.display = "none"
    btnText.innerHTML = "Скрыть"
    moreText.style.display = "flex"
    btnText.style.position = "absolute"
    btnText.style.bottom = "-48px"
    btnText.style.left = "0"
  }
}

// Custom select

const typeArray = [
  "1.5 тонны",
  "2 тонны",
  "2.5 тонны",
  "3.5 тонны",
  "4.5 тонны",
  "свыше 5 тонн",
  "свыше 10 тонн",
]

const markArray = ["Безналичный расчет"]

const modelArray = ["Тентованный", "Тентованный 2", "Тентованный 3"]

const cityArray = [
  "Москва",
  "Санкт-Петербург",
  "Екатеринбург",
  "Ростов-На-Дону",
  "Казань",
  "Тюмень",
  "Новосибирск",
  "Краснодар",
]

const selected1 = document.getElementById("selected-1")
const inputType = document.getElementById("typeSel")

const selected2 = document.getElementById("selected-2")
const inputMark = document.getElementById("markSel")

const selected3 = document.getElementById("selected-3")
const inputModel = document.getElementById("modelSel")

const selected4 = document.getElementById("selected-4")
const inputCity = document.getElementById("typeCity")

const selected5 = document.getElementById("selected-5")
const inputCity2 = document.getElementById("typeCity2")

const optionsContainer1 = document.getElementById("oc-1")
const optionsContainer2 = document.getElementById("oc-2")
const optionsContainer3 = document.getElementById("oc-3")
const optionsContainer4 = document.getElementById("oc-4")
const optionsContainer5 = document.getElementById("oc-5")

for (let i = 0; i < typeArray.length; i += 1) {
  const listItem = document.createElement("div")
  listItem.classList.add("option")
  listItem.innerHTML = `
  <input type="radio" class="radio" id="type${[i]}" name="type" />
  <label for="type${[i]}">${typeArray[i]}</label>
  `
  optionsContainer1.appendChild(listItem)
}

for (let i = 0; i < markArray.length; i += 1) {
  const listItem = document.createElement("div")
  listItem.classList.add("option")
  listItem.innerHTML = `
  <input type="radio" class="radio" id="mark${[i]}" name="mark" />
  <label for="mark${[i]}">${markArray[i]}</label>
  `
  optionsContainer2.appendChild(listItem)
}

for (let i = 0; i < modelArray.length; i += 1) {
  const listItem = document.createElement("div")
  listItem.classList.add("option")
  listItem.innerHTML = `
  <input type="radio" class="radio" id="model${[i]}" name="model" />
  <label for="model${[i]}">${modelArray[i]}</label>
  `
  optionsContainer3.appendChild(listItem)
}

for (let i = 0; i < cityArray.length; i += 1) {
  const listItem = document.createElement("div")
  listItem.classList.add("option")
  listItem.innerHTML = `
  <input type="radio" class="radio" id="city${[i]}" name="city" />
  <label for="city${[i]}">${cityArray[i]}</label>
  `
  optionsContainer4.appendChild(listItem)
}

for (let i = 0; i < cityArray.length; i += 1) {
  const listItem = document.createElement("div")
  listItem.classList.add("option")
  listItem.innerHTML = `
  <input type="radio" class="radio" id="city${[i]}" name="city" />
  <label for="city${[i]}">${cityArray[i]}</label>
  `
  optionsContainer5.appendChild(listItem)
}

const optionsList1 = optionsContainer1.querySelectorAll(".option")
const optionsList2 = optionsContainer2.querySelectorAll(".option")
const optionsList3 = optionsContainer3.querySelectorAll(".option")
const optionsList4 = optionsContainer4.querySelectorAll(".option")
const optionsList5 = optionsContainer4.querySelectorAll(".option")

selected1.addEventListener("click", () => {
  optionsContainer1.classList.toggle("active")
  optionsContainer2.classList.remove("active")
  optionsContainer3.classList.remove("active")
  optionsContainer4.classList.remove("active")
})

selected2.addEventListener("click", () => {
  optionsContainer1.classList.remove("active")
  optionsContainer2.classList.toggle("active")
  optionsContainer3.classList.remove("active")
  optionsContainer4.classList.remove("active")
  optionsContainer5.classList.remove("active")
})

selected3.addEventListener("click", () => {
  optionsContainer1.classList.remove("active")
  optionsContainer2.classList.remove("active")
  optionsContainer3.classList.toggle("active")
  optionsContainer4.classList.remove("active")
  optionsContainer5.classList.remove("active")
})

selected4.addEventListener("click", () => {
  optionsContainer1.classList.remove("active")
  optionsContainer2.classList.remove("active")
  optionsContainer3.classList.remove("active")
  optionsContainer4.classList.toggle("active")
  optionsContainer5.classList.remove("active")
})

selected5.addEventListener("click", () => {
  optionsContainer1.classList.remove("active")
  optionsContainer2.classList.remove("active")
  optionsContainer3.classList.remove("active")
  optionsContainer4.classList.remove("active")
  optionsContainer5.classList.toggle("active")
})

optionsList1.forEach((o) => {
  o.addEventListener("click", () => {
    let selectedItem1 = (selected1.innerHTML =
      o.querySelector("label").innerHTML)
    inputType.value = selectedItem1
    optionsContainer1.classList.remove("active")
    searchType.value = ""
    optionsList1.forEach((el) => {
      el.classList.remove("hidden")
    })
  })
})

optionsList2.forEach((o) => {
  o.addEventListener("click", () => {
    let selectedItem2 = (selected2.innerHTML =
      o.querySelector("label").innerHTML)
    inputMark.value = selectedItem2
    optionsContainer2.classList.remove("active")
    searchMark.value = ""
    optionsList2.forEach((el) => {
      el.classList.remove("hidden")
    })
  })
})

optionsList3.forEach((o) => {
  o.addEventListener("click", () => {
    let selectedItem3 = (selected3.innerHTML =
      o.querySelector("label").innerHTML)
    inputModel.value = selectedItem3
    optionsContainer3.classList.remove("active")
    searchModel.value = ""
    optionsList3.forEach((el) => {
      el.classList.remove("hidden")
    })
  })
})

optionsList4.forEach((o) => {
  o.addEventListener("click", () => {
    let selectedItem4 = (selected4.innerHTML =
      o.querySelector("label").innerHTML)
    inputCity.value = selectedItem4
    optionsContainer4.classList.remove("active")
    searchModel.value = ""
    optionsList4.forEach((el) => {
      el.classList.remove("hidden")
    })
  })
})

optionsList5.forEach((o) => {
  o.addEventListener("click", () => {
    let selectedItem5 = (selected5.innerHTML =
      o.querySelector("label").innerHTML)
    inputCity2.value = selectedItem5
    optionsContainer5.classList.remove("active")
    searchModel.value = ""
    optionsList5.forEach((el) => {
      el.classList.remove("hidden")
    })
  })
})

function showForm() {
  const calcForm = document.querySelector(".calculation")
  const formButton = document.querySelector(".calculation-mob")
  formButton.addEventListener("click", () => {
    formButton.classList.add("form-hidden")
    calcForm.classList.add("form-show")
  })
}

// Mask phone

window.addEventListener("DOMContentLoaded", function () {
  ;[].forEach.call(document.querySelectorAll(".tel"), function (input) {
    var keyCode
    function mask(event) {
      event.keyCode && (keyCode = event.keyCode)
      var pos = this.selectionStart
      if (pos < 3) event.preventDefault()
      var matrix = "+7 (___) ___ __-__",
        i = 0,
        def = matrix.replace(/\D/g, ""),
        val = this.value.replace(/\D/g, ""),
        new_value = matrix.replace(/[_\d]/g, function (a) {
          return i < val.length ? val.charAt(i++) || def.charAt(i) : a
        })
      i = new_value.indexOf("_")
      if (i != -1) {
        i < 5 && (i = 3)
        new_value = new_value.slice(0, i)
      }
      var reg = matrix
        .substr(0, this.value.length)
        .replace(/_+/g, function (a) {
          return "\\d{1," + a.length + "}"
        })
        .replace(/[+()]/g, "\\$&")
      reg = new RegExp("^" + reg + "$")
      if (
        !reg.test(this.value) ||
        this.value.length < 5 ||
        (keyCode > 47 && keyCode < 58)
      )
        this.value = new_value
      if (event.type == "blur" && this.value.length < 5) this.value = ""
    }

    input.addEventListener("input", mask, false)
    input.addEventListener("focus", mask, false)
    input.addEventListener("blur", mask, false)
    input.addEventListener("keydown", mask, false)
  })
})

function openMenu() {
  let catalogs = document.querySelectorAll(".drop-menu__item")
  catalogs.forEach(function (element) {
    element.addEventListener("click", function () {
      let subMenu = element.querySelector(".sub-menu__list")
      subMenu.classList.toggle("active")
    })
  })
}

openMenu()

window.addEventListener("scroll", function () {
  let menu = document.getElementById("menu")
  let sticky = menu.offsetTop

  if (window.pageYOffset > sticky) {
    menu.classList.add("fixed")
  } else {
    menu.classList.remove("fixed")
  }
})

function addDateMask(input) {
  input.addEventListener("input", function (e) {
    let inputValue = e.target.value.replace(/\D/g, "") // Удаление всех символов, кроме цифр
    if (inputValue.length > 0) {
      if (inputValue.length > 2) {
        inputValue = inputValue.slice(0, 2) + "." + inputValue.slice(2)
      }
      if (inputValue.length > 5) {
        inputValue = inputValue.slice(0, 5) + "." + inputValue.slice(5, 9)
      }
    }
    e.target.value = inputValue
  })
}

const dateInput = document.getElementById("date")
addDateMask(dateInput)
