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
  NavIconWaitBlack,
  NavIconWaitMint
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
  acitveUrl: string;
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
      acitveUrl: NavIconOutingMint,
      route: "/out/wait"
    },
    {
      name: "현재 외출 학생",
      url: NavIconCircleBlack,
      route: "/out/now",
      acitveUrl: NavIconCircleMint
    },
    {
      name: "최종 확인 대기 외출증",
      url: NavIconWaitBlack,
      route: "/out/done",
      acitveUrl: NavIconWaitMint
    },
    {
      name: "종료된 외출증",
      url: NavIconUnauthorizedBlack,
      route: "/out/certified",
      acitveUrl: NavIconUnauthorizedMint
    }
  ],
  공지사항: [
    {
      name: "전체 공지",
      url: NavIconAllBlack,
      acitveUrl: NavIconAllMint,
      route: "/notice/all"
    },
    {
      name: "내가 올린 공지",
      url: NavIconNoticeBlack,
      acitveUrl: NavIconNoticeMint,
      route: "/notice/mine"
    },
    {
      name: "공지사항 작성",
      url: NavIconWriteBlack,
      acitveUrl: NavIconWriteMint,
      route: "/notice/writing"
    }
  ]
};
