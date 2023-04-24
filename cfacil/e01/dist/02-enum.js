// you know, you need a set of numerical constants with names
// for make code more readable
var UserType;
(function (UserType) {
    UserType[UserType["NORMAL"] = 0] = "NORMAL"; // = 0
    UserType[UserType["PAYED"] = 1] = "PAYED"; // = 1
    UserType[UserType["ADMIN"] = 2] = "ADMIN"; // = 2
    UserType[UserType["MEGA"] = 3] = "MEGA"; // = 3
})(UserType || (UserType = {}));
// let is the same as var
var myUser = {
    type: UserType.ADMIN
};
console.log('myUser.type:' + myUser.type);
// if we need to set the value
var MsgType;
(function (MsgType) {
    MsgType[MsgType["DEBUG"] = 1] = "DEBUG";
    MsgType[MsgType["INFO"] = 2] = "INFO";
    MsgType[MsgType["WARNING"] = 4] = "WARNING";
    MsgType[MsgType["ERROR"] = 8] = "ERROR";
})(MsgType || (MsgType = {}));
// you can also use strings
var Level;
(function (Level) {
    Level["HIGH"] = "high";
    Level["MEDIUM"] = "medium";
    Level["LOW"] = "low";
})(Level || (Level = {}));
