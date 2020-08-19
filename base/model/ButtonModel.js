class ButtonModel{
  text;
  themeType;
  actionType;

  constructor(text, themeType, actionType) {
    this.text = text;
    this.themeType = themeType;
    this.actionType = actionType;
  }
}

module.exports = ButtonModel;