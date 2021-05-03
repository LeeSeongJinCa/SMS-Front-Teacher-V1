import {
  NavIconNoticeWhite,
  NavIconOutingWhite,
  NavIconScheduleWhite,
  NavIconScheduleMint,
  NavIconOutingMint,
  NavIconNoticeMint,
  NavIconNoticeBlack,
  NavIconCircleBlack,
  NavIconAllBlack,
  NavIconOutingBlack,
  NavIconCircleMint,
  NavIconUnauthorizedBlack,
  NavIconUnauthorizedMint,
  NavIconAllMint,
  NavIconWriteBlack,
  NavIconWriteMint,
  NavIconPieChart,
  NavIconPieChartMint,
  NavIconWaitBlack,
  NavIconWaitMint,
  NavIconApprovedBlack,
  NavIconApprovedMint
} from "../assets";
import {
  MainSubItem,
  NavItem
} from "../components/Navigation/Main/body/NavigationBody";

export interface RouteData {
  main: NavItem[];
  sub: MainSubItem[];
  isManagementMode?: boolean;
}

export const adminRouter: RouteData = {
  main: [
    {
      name: "학사 일정",
      route: "/",
      white: NavIconScheduleWhite,
      blue: NavIconScheduleMint
    }
  ],
  sub: [
    {
      name: "외출 관리",
      route: "/out/wait",
      subUrl: "승인대기 외출증",
      white: NavIconOutingWhite,
      blue: NavIconOutingMint
    },
    {
      name: "공지사항",
      subUrl: "전체 공지",
      route: "/notice/all",
      white: NavIconNoticeWhite,
      blue: NavIconNoticeMint
    }
  ]
};

interface SubNavItem {
  name: string;
  route: string;
  url: string;
  activeUrl: string;
}

export type SubNavObj = {
  "외출 관리": SubNavItem[];
  공지사항: SubNavItem[];
};

export type PageType = "외출 관리" | "공지사항";

export const subNavRouter: SubNavObj = {
  "외출 관리": [
    {
      name: "승인대기 외출증",
      url: NavIconOutingBlack,
      activeUrl: NavIconOutingMint,
      route: "/out/wait"
    },
    {
      name: "승인된 외출증",
      url: NavIconApprovedBlack,
      activeUrl: NavIconApprovedMint,
      route: "/out/approved"
    },
    {
      name: "현재 외출 학생",
      url: NavIconCircleBlack,
      route: "/out/now",
      activeUrl: NavIconCircleMint
    },
    {
      name: "최종 확인 대기 외출증",
      url: NavIconWaitBlack,
      route: "/out/done",
      activeUrl: NavIconWaitMint
    },
    {
      name: "종료된 외출증",
      url: NavIconUnauthorizedBlack,
      route: "/out/certified",
      activeUrl: NavIconUnauthorizedMint
    },
    {
      name: "외출 통계",
      url: NavIconPieChart,
      route: "/out/statistics",
      activeUrl: NavIconPieChartMint
    }
  ],
  공지사항: [
    {
      name: "전체 공지",
      url: NavIconAllBlack,
      activeUrl: NavIconAllMint,
      route: "/notice/all"
    },
    {
      name: "내가 올린 공지",
      url: NavIconNoticeBlack,
      activeUrl: NavIconNoticeMint,
      route: "/notice/mine"
    },
    {
      name: "공지사항 작성",
      url: NavIconWriteBlack,
      activeUrl: NavIconWriteMint,
      route: "/notice/writing"
    }
  ]
};

export type Tutorial = {
  texts: string[];
  top: string;
  left: string;
  page: string;
  bubbler: {
    width: string;
    top: string;
    left: string;
    color: string;
  };
};

export const tutorials: Tutorial[] = [
  {
    texts: [
      "안녕하세요. 외출 관리 페이지에 오신 것을 환영해요!",
      "외출 관리 페이지는 대덕소프트웨어마이스터고등학교",
      "학생들의 외출증을 관리하는 데 필요한 기능을 제공해요."
    ],
    top: "170px",
    left: "calc(15vw + 15px)",
    page: "/out/wait",
    bubbler: {
      width: "15px 15px 15px 0",
      left: "-15px",
      top: "45px",
      color: "transparent #ffffff"
    }
  },
  {
    texts: [
      "승인대기 외출증을 보여줘요.",
      "학생이 외출증을 신청하면 이곳에 가장 먼저 표시돼요.",
      "선생님은 외출증을 클릭해서 외출증을 승인 혹은 거절할 수 있어요."
    ],
    top: "225px",
    left: "calc(30vw + 15px)",
    page: "/out/wait",
    bubbler: {
      width: "15px 15px 15px 0",
      left: "-15px",
      top: "45px",
      color: "transparent #ffffff"
    }
  },
  {
    texts: [
      "승인된 외출증을 보여줘요.",
      "승인대기 외출증에서 승인된 외출증이 표시돼요.",
      "지킴이 선생님이 외출을 나갈 수 있는 학생을",
      "판단하기 쉽도록 만들었어요."
    ],
    top: "280px",
    left: "calc(30vw + 15px)",
    page: "/out/approved",
    bubbler: {
      width: "15px 15px 15px 0",
      left: "-15px",
      top: "45px",
      color: "transparent #ffffff"
    }
  },
  {
    texts: [
      "승인된 외출증을 보여줘요.",
      "승인대기 외출증에서 승인된 외출증이 표시돼요.",
      "지킴이 선생님이 외출을 나갈 수 있는 학생을",
      "판단하기 쉽도록 만들었어요."
    ],
    top: "335px",
    left: "calc(30vw + 15px)",
    page: "/out/now",
    bubbler: {
      width: "15px 15px 15px 0",
      left: "-15px",
      top: "45px",
      color: "transparent #ffffff"
    }
  },
  {
    texts: [
      "승인된 외출증을 보여줘요.",
      "승인대기 외출증에서 승인된 외출증이 표시돼요.",
      "지킴이 선생님이 외출을 나갈 수 있는 학생을",
      "판단하기 쉽도록 만들었어요."
    ],
    top: "390px",
    left: "calc(30vw + 15px)",
    page: "/out/done",
    bubbler: {
      width: "15px 15px 15px 0",
      left: "-15px",
      top: "45px",
      color: "transparent #ffffff"
    }
  },
  {
    texts: [
      "승인된 외출증을 보여줘요.",
      "승인대기 외출증에서 승인된 외출증이 표시돼요.",
      "지킴이 선생님이 외출을 나갈 수 있는 학생을",
      "판단하기 쉽도록 만들었어요."
    ],
    top: "445px",
    left: "calc(30vw + 15px)",
    page: "/out/certified",
    bubbler: {
      width: "15px 15px 15px 0",
      left: "-15px",
      top: "45px",
      color: "transparent #ffffff"
    }
  },
  {
    texts: [
      "승인된 외출증을 보여줘요.",
      "승인대기 외출증에서 승인된 외출증이 표시돼요.",
      "지킴이 선생님이 외출을 나갈 수 있는 학생을",
      "판단하기 쉽도록 만들었어요."
    ],
    top: "500px",
    left: "calc(30vw + 15px)",
    page: "/out/statistics",
    bubbler: {
      width: "15px 15px 15px 0",
      left: "-15px",
      top: "45px",
      color: "transparent #ffffff"
    }
  },
  {
    texts: [
      "승인된 외출증을 보여줘요.",
      "승인대기 외출증에서 승인된 외출증이 표시돼요.",
      "지킴이 선생님이 외출을 나갈 수 있는 학생을",
      "판단하기 쉽도록 만들었어요."
    ],
    top: "135px",
    left: "calc(30vw + 15px + 25px)",
    page: "/out/wait",
    bubbler: {
      width: "0 15px 15px",
      top: "-15px;",
      left: "110px;",
      color: "#ffffff transparent"
    }
  },
  {
    texts: [
      "승인된 외출증을 보여줘요.",
      "승인대기 외출증에서 승인된 외출증이 표시돼요.",
      "지킴이 선생님이 외출을 나갈 수 있는 학생을",
      "판단하기 쉽도록 만들었어요."
    ],
    top: "135px",
    left: "calc(100% - 360px)",
    page: "/out/wait",
    bubbler: {
      width: "0 15px 15px",
      top: "-15px;",
      left: "110px;",
      color: "#ffffff transparent"
    }
  },
  {
    texts: [
      "승인된 외출증을 보여줘요.",
      "승인대기 외출증에서 승인된 외출증이 표시돼요.",
      "지킴이 선생님이 외출을 나갈 수 있는 학생을",
      "판단하기 쉽도록 만들었어요."
    ],
    top: "360px",
    left: "225px",
    page: "/out/wait",
    bubbler: {
      width: "15px 0 15px 15px",
      top: "45px",
      left: "100%",
      color: "transparent #ffffff"
    }
  },
  {
    texts: [
      "승인된 외출증을 보여줘요.",
      "승인대기 외출증에서 승인된 외출증이 표시돼요.",
      "지킴이 선생님이 외출을 나갈 수 있는 학생을",
      "판단하기 쉽도록 만들었어요."
    ],
    top: "calc(100vh - 275px)",
    left: "calc(100vw - 550px)",
    page: "/out/wait",
    bubbler: {
      width: "15px 0 15px 15px",
      top: "calc(100% - 45px)",
      left: "100%",
      color: "transparent #ffffff"
    }
  }
];
