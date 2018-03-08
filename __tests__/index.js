const messages = require("..").messages;
const ruleName = require("..").ruleName;

const rule = require("..");

testRule(rule, {
  ruleName,
  config: {
    min: 10
  },
  skipBasicChecks: true,

  accept: [
    {
      code: "a { z-index:10; }",
      description: "z-index value that is the same as min limit"
    },
    {
      code: "a { z-index:-10; }",
      description: "z-index value that is negative and the same as min limit"
    },
    {
      code: "a { z-index:auto; }",
      description: "z-index: auto"
    }
  ],
  reject: [
    {
      code: "a { z-index:9 }",
      description: "z-index value that is smaller than the min limit",
      message: messages.smallerThanMin(10)
    },
    {
      code: "a { z-index:-9 }",
      description:
        "z-index value that is negative and smaller than the min limit",
      message: messages.smallerThanMin(-10)
    }
  ]
});

testRule(rule, {
  ruleName,
  config: {
    max: 9999
  },
  skipBasicChecks: true,

  accept: [
    {
      code: "a { z-index:9999; }",
      description: "z-index value that is the same as max limit"
    },
    {
      code: "a { z-index:-9999; }",
      description: "z-index value that is negative and the same as max limit"
    },
    {
      code: "a { z-index:auto; }",
      description: "z-index: auto"
    }
  ],
  reject: [
    {
      code: "a { z-index:10000 }",
      message: messages.largerThanMax(9999),
      description: "z-index value that is larger than max limit"
    },
    {
      code: "a { z-index:-10000 }",
      message: messages.largerThanMax(-9999),
      description: "z-index value that is negative and larger than max limit"
    }
  ]
});

testRule(rule, {
  ruleName,
  config: {
    min: 2,
    max: 10
  },
  skipBasicChecks: true,

  accept: [
    {
      code: "a { z-index:10; }",
      description: "z-index value that is the same as max limit"
    },
    {
      code: "a { z-index:-10; }",
      description: "z-index value that is negative and the same as max limit"
    },
    {
      code: "a { z-index:5; }",
      description: "z-index value that is bigger than min limit"
    },
    {
      code: "a { z-index:2; }",
      description: "z-index value that is the same as min limit"
    },
    {
      code: "a { z-index:auto; }",
      description: "z-index: auto"
    }
  ],
  reject: [
    {
      code: "a { z-index:11 }",
      message: messages.largerThanMax(10),
      description: "z-index value that is larger than max limit"
    },
    {
      code: "a { z-index:-11 }",
      message: messages.largerThanMax(-10),
      description: "z-index value that is negative and larger than max limit"
    },
    {
      code: "a { z-index: 1 }",
      message: messages.smallerThanMin(2),
      description: "z-index value that is smaller than min limit"
    }
  ]
});

testRule(rule, {
  ruleName,
  config: [
    {
      min: 3,
      max: 10
    },
    { ignoreValues: [1, -1, 444] }
  ],
  skipBasicChecks: true,

  accept: [
    {
      code: "a { z-index:10; }",
      description: "z-index value that is the same as max limit"
    },
    {
      code: "a { z-index:-10; }",
      description: "z-index value that is negative and the same as max limit"
    },
    {
      code: "a { z-index:5; }",
      description: "z-index value that is bigger than min limit"
    },
    {
      code: "a { z-index:3; }",
      description: "z-index value that is the same as min limit"
    },
    {
      code: "a { z-index:auto; }",
      description: "z-index: auto"
    },
    {
      code: "a { z-index: 1 }",
      description: "z-index value that is ignored and smaller than min limit"
    },
    {
      code: "a { z-index: -1 }",
      description: "z-index value that is ignored and smaller than min limit"
    },
    {
      code: "a { z-index: 444; }",
      description: "z-index value that is ignored"
    }
  ],
  reject: [
    {
      code: "a { z-index:2 }",
      message: messages.smallerThanMin(3),
      description: "z-index value that is smaller than min limit"
    },
    {
      code: "a { z-index:11 }",
      message: messages.largerThanMax(10),
      description: "z-index value that is larger than max limit"
    },
    {
      code: "a { z-index:-11 }",
      message: messages.largerThanMax(-10),
      description: "z-index value that is negative and larger than max limit"
    }
  ]
});
