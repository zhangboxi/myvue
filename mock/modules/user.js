const userinfo = {
  url: "/BasicMaven/user/info",
  type: "get",
  response: option => {
    let obj = param2Obj(option.url);
    console.log(obj.token);
    return {
      code: 20000,
      data: {
        roles: "admin",
        introduction: "I am a super administrator",
        avatar:
          "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
        name: "Super Admin"
      }
    };
  }
};
const userList = {
  url: "/user/list",
  type: "get",
  response: () => {
    return {
      code: 20000,
      data: [
        {
          id: 1,
          username: "zhoujielun",
          password: "123456"
        },
        {
          id: 2,
          username: "guojingming",
          password: "666666"
        }
      ]
    };
  }
};

const userList1 = {
  url: "/user/list1",
  type: "get",
  response: () => {
    return {
      code: 20000,
      data: [
        {
          id: 1,
          username: "zhoujielun",
          password: "123456"
        },
        {
          id: 2,
          username: "guojingming",
          password: "666666"
        }
      ]
    };
  }
};

function param2Obj(url) {
  const search = decodeURIComponent(url.split("?")[1]).replace(/\+/g, " ");
  if (!search) {
    return {};
  }
  const obj = {};
  const searchArr = search.split("&");
  searchArr.forEach(v => {
    const index = v.indexOf("=");
    if (index !== -1) {
      const name = v.substring(0, index);
      const val = v.substring(index + 1, v.length);
      obj[name] = val;
    }
  });
  return obj;
}

module.exports = [userList, userList1, userinfo];
