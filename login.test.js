const preventDefault = require("./login");
test("Valid Email Format",()=> {
expect(login("faithkoduen@gmail.com")).toBe(true);});
test("Valid Password",()=>{
    expect(login("titi123")).toBe(true);});