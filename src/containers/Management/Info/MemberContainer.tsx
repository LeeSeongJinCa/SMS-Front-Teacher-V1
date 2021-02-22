import React, {
  FC,
  useState,
  useCallback,
  memo,
  useEffect,
  useMemo
} from "react";
import { toast } from "react-toastify";

import Members from "../../../components/Management/Info/Members";
import MemberItem from "../../../components/Management/Info/MemberItem";
import { ManagementInfoHandler } from "../../../modules/action/management/info";
import {
  deleteMember,
  getClubInfoWithUuid,
  getStudents,
  getStudentUuidsWithValue,
  putClubLeader
} from "../../../lib/api/Management";
import { ResStudents } from "../../../lib/api/payloads/Management";
import { ResStudentInfo } from "../../../lib/api/payloads/Login";
import { getAxiosError } from "../../../lib/utils";
import Confirm from "../../../lib/confirm/confirm";

interface Props {
  leaderUuid: string;
  clubUuid: string;
  memberUuids: string[];
}

const ClubMembers: FC<Props> = ({ leaderUuid, clubUuid, memberUuids }) => {
  const handler = new ManagementInfoHandler();
  const [modal, setModal] = useState(false);
  const [students, setStudents] = useState<ResStudents[]>([]);
  const [leader, setLeader] = useState<ResStudentInfo>(null);
  const [members, setMembers] = useState<ResStudents[]>([]);
  const [removeLoading, setRemoveLoading] = useState<boolean>(false);

  const handleShowModal = useCallback(() => {
    setModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModal(false);
  }, []);

  const startRemoveLoading = useCallback(() => {
    setRemoveLoading(true);
  }, []);

  const endRemoveLoading = useCallback(() => {
    setRemoveLoading(false);
  }, []);

  const removeMember = useCallback(
    async (clubUuid: string, studentUuid: string) => {
      startRemoveLoading();
      try {
        await deleteMember(clubUuid, studentUuid);
        handleRemoveMember(studentUuid);
        toast.info("동아리원을 삭제했습니다.");
      } catch (err) {
        const { status, code } = getAxiosError(err);

        if (status === 404 && code === -1721) {
          toast.error("존재하지 않는 동아리입니다.");
        } else if (status === 404 && code === -1723) {
          toast.error("삭제하려는 동아리원이 존재하지 않습니다.");
        }
      }
      endRemoveLoading();
    },
    [memberUuids]
  );

  const handleRemoveMember = useCallback(
    (memberUuid: string) => {
      handler.handleClubMemberUuids(memberUuids.filter(m => m !== memberUuid));
    },
    [memberUuids]
  );

  const studentsInfo = async (studentUuids: string[]) => {
    try {
      const res = await getStudents(studentUuids);

      setStudents(res.data.students);
    } catch (err) {
      const { status } = getAxiosError(err);

      if (status === 407) {
        toast.error("동아리 원을 정보를 받아오는데 실패했습니다.");
      }
    }
  };

  const searchStudents = async (filter: string, value: string) => {
    if (value.trim() === "") {
      toast.error("검색어를 입력해주세요.");
      return;
    }

    try {
      const res = await getStudentUuidsWithValue(filter, value);

      await studentsInfo(res.data.student_uuids);
    } catch (err) {
      const { status } = getAxiosError(err);

      if (status === 409) {
        toast.error("검색 결과가 없습니다.");
      }
    }
  };

  const memberInfos = async () => {
    try {
      const res = await getStudents(memberUuids);

      setMembers(res.data.students);
    } catch (err) {
      const { status } = getAxiosError(err);

      if (status === 407) {
        toast.error("동아리원이 아닌 사람이 존재합니다.");
      }
    }
  };

  const getClubInfo = async (clubUuid: string) => {
    try {
      const { data } = await getClubInfoWithUuid(clubUuid);

      handler.handleInit(data);
    } catch (err) {
      const { status } = getAxiosError(err);

      if (status === 404) {
        toast.error("수정하려는 동아리가 없습니다.");
      }
    }
  };

  const changeLeader = async (newLeaderUuid: string) => {
    try {
      await putClubLeader(clubUuid, newLeaderUuid);
      await getClubInfo(clubUuid);

      toast.success("동아리 장을 변경했습니다.");

      location.href = "/";
    } catch (err) {
      const { status, code } = getAxiosError(err);

      if (status === 404 && code === -1721) {
        toast.error("동아리가 존재하지 않습니다.");
      } else if (status === 404 && code === -1723) {
        toast.error("동아리장으로 변경하려는 동아리원을 찾지 못했습니다.");
      } else if (status === 409 && code === -1801) {
        toast.error("이미 해당 동아리의 동아리장입니다.");
      } else if (status === 409 && code === -1802) {
        toast.error("현재 다른 동아리의 동아리장인 상태입니다.");
      }
    }
  };

  const changeLeaderHandler = async (newLeaderUuid: string) => {
    const confirm = await Confirm.confirm([
      "동아리장을 변경하면 페이지에서 나가게 됩니다. 동아리장으로 임명하시겠습니까?",
      "취소",
      "확인"
    ]);

    if (confirm) {
      await changeLeader(newLeaderUuid);
    }
  };

  const memberList = useMemo(() => {
    return members
      .filter(({ student_uuid }) => memberUuids.includes(student_uuid))
      .map(member => {
        const { student_uuid, name } = member;
        if (student_uuid !== leaderUuid) {
          const removeMemberHandler = () =>
            removeMember(clubUuid, student_uuid);

          return (
            <MemberItem
              key={student_uuid}
              removeLoading={removeLoading}
              member={member}
              name={name}
              removeMemberHandler={removeMemberHandler}
              changeLeaderHandler={changeLeaderHandler}
            />
          );
        }
      });
  }, [members, leaderUuid, clubUuid, memberUuids]);

  useEffect(() => {
    if (leaderUuid && members.length) {
      setLeader(
        members.find(({ student_uuid }) => student_uuid === leaderUuid)
      );
    }
  }, [leaderUuid, members]);

  useEffect(() => {
    if (memberUuids.length) {
      memberInfos();
    }
  }, [memberUuids]);

  return (
    <Members
      modal={modal}
      leaderUuid={leaderUuid}
      clubUuid={clubUuid}
      memberUuids={memberUuids}
      students={students}
      members={members}
      leader={leader}
      memberList={memberList}
      handleShowModal={handleShowModal}
      handleCloseModal={handleCloseModal}
      searchStudents={searchStudents}
    />
  );
};

export default memo(ClubMembers);
