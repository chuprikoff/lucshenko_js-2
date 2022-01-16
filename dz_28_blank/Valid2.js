class Valid2 extends Valid {
  constructor(email, password, isValid, emailError = "", passwordError = "") {
    super(email, password, isValid);
    this.emailError = emailError;
    this.passwordError = passwordError;
  }
  validate() {
    if (this.password.length < 6) this.passwordError = "min length 6";
    if (this.email == "") this.emailError = "email empty";
    if (this.password.length >= 6 && this.email !== "") this.isValid = true;
  }
}
