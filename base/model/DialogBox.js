class DialogBox {
  title;
  description;
  isCancelable;
  buttonList;

  constructor(title, description, isCancelable, buttonList) {
    this.title = title;
    this.description = description;
    this.isCancelable = isCancelable;
    this.buttonList = buttonList;
  }

  getNamedJsonObject() {
    return {dialogBox: this};
  }
}

module.exports = DialogBox;