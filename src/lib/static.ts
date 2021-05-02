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
  color: string;
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
  ],
  color: "#23B2AD"
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
};

export const tutorials: Tutorial[] = [
  {
    texts: [
      "안녕하세요. 외출 관리 페이지에 오신 것을 환영해요!",
      "외출 관리 페이지는 대덕소프트웨어마이스터고등학교",
      "학생들의 외출증을 관리하는 데 필요한 기능을 제공해요."
    ],
    top: "170px",
    left: "calc(15vw + 15px)"
  },
  {
    texts: [
      "승인대기 외출증을 보여줘요.",
      "학생이 외출증을 신청하면 이곳에 가장 먼저 표시돼요.",
      "선생님은 외출증을 클릭해서 외출증을 승인 혹은 거절할 수 있어요."
    ],
    top: "225px",
    left: "calc(30vw + 15px)"
  }
];
