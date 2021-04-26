function verify(password) {
    if (password == null) return false;
    else if (password.length <= 8) return false;
    else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password))
      return false;
    return true;
  }
  
  console.log(verify('G4nd4lfTh3Wh1t3'))

  module.exports = verify;