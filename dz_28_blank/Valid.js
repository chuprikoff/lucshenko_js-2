class Valid {
  constructor(email, password, isValid = false) {
    this.email = email;
    this.isValid = isValid;
    this.password = password;
  }
  validate() {
    if (this.password.length >= 6) this.isValid = true;
  }
}
