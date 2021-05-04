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
      "현재 외출 중인 외출증을 보여줘요.",
      "승인된 외출증을 가지고 있는 학생이 외출을 시작하면",
      "이곳에 표시돼요. 외출을 마친 학생이 외출증을 종료하려면",
      "선생님이 직접 외출증을 클릭하고 종료해야 해요. 외출 종료를",
      "담임 선생님 외의 선생님이 했다면 담임 선생님에게 학생이",
      "종료했다고 문자가 발송돼요! 그러니 걱정말고 종료해도 괜찮아요."
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
      "최종 확인을 대기하고 있는 외출증을 보여줘요.",
      "외출이 종료된 외출증이 표시돼요.",
      "외출 종료는 담임 선생님 외에도 할 수 있어요.",
      "하지만 담임 선생님도 확인을 하는 것이 더 좋겠다는",
      "마음에 담임 선생님이 확인할 수 있는 최종 확인",
      "대기 외출증 칸을 만들었어요."
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
    texts: ["종료된 외출증을 보여줘요.", "최종 확인을 한 외출증이 표시돼요."],
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
      "외출 통계를 보여줘요. 종료된 외출증을 바탕으로",
      "학번, 이름, 외출 횟수, 지각 횟수를 간략하게 보여줘요.",
      "학생을 클릭하면 학생이 외출할 때 입력했던 장소, 사유,",
      "날짜, 도착시간, 상태, 지각 여부도 보여줘요. 또 학년,",
      "반, 이름, 기간을 정해 특정한 외출증을 볼 수도 있어요."
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
      "새로운 외출이 신청 됐어요. 하지만 매번 페이지를",
      "새로고침 하는 시간이 아까워요. 그래서 해당",
      "외출증만 다시 받아올 수 있는 외출증 새로 고침을",
      "만들었어요. 우리 시간은 한정되어 있으니 아껴써요!"
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
      "외출증을 특정 조건에 맞게 확인할 수 있어요.",
      "ON 버튼을 클릭하면 필터가 적용돼요.",
      "그러면 학년, 반 혹은 층으로 조건을 설정할 수 있어요.",
      "외출증을 찾는 시간을 아낄 수 있어요!"
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
      "여러 가지 조건의 외출증을 보여주는 곳이에요.",
      "또, 외출증 조건에 따라 외출증을 클릭 했을 때",
      "뜨는 화면이 달라져요. 승인대기 외출증 페이지는",
      "승인 혹은 거절할 수 있는 창이 뜨고 현재 외출",
      "학생 페이지는 외출을 종료할 수 있는 창이 떠요.",
      "마지막으로 최종 확인 대기 외출증 페이지에서는",
      "마지막으로 확인하는 창이 떠요. 이 3개 외의",
      "부분에서는 외출증을 클릭해도 아무런 변화가 없어요."
    ],
    top: "360px",
    left: "150px",
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
      "혹시라도 모르는 것이나 궁금한 사항이 있으면",
      "채팅 상담으로 마음 껏 물어봐주세요! 열정적으로",
      "대답할 자신이 있어요!"
    ],
    top: "calc(100vh - 250px)",
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
