import React, { FC, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { People } from "../../components/default/Info/default";
import { getStudentData } from "../../lib/api/client";
import { getCircleMembers } from "../../lib/api/club";
import { stateType } from "../../modules/reducer";
import { StudentInfo } from "../../modules/type/user";

interface Props {
  membersUuid: string[];
  leaderUuid: string;
}

type MembersManagement = [string[], string[], string[]];

const PeoepleContainer: FC<Props> = ({ leaderUuid, membersUuid }) => {
  const [leaderData, setLeaderData] = useState<StudentInfo>(null);
  const [circleMembers, setCircleMembers] = useState<MembersManagement>([
    [],
    [],
    []
  ]);

  useEffect(() => {
    leaderUuid &&
      getStudentData(leaderUuid).then(res => {
        setLeaderData(res.data);
      });
  }, [leaderUuid]);

  useEffect(() => {
    if (!membersUuid.length) return;

    getCircleMembers(membersUuid).then(res => {
      const arr: MembersManagement = [[], [], []];
      res.data.students.forEach(({ grade, name }) => {
        arr[grade - 1].push(name);
      });

      setCircleMembers(arr);
    });
  }, [membersUuid]);

  return (
    <People
      leader={leaderData && leaderData.name}
      one={circleMembers[0]}
      two={circleMembers[1]}
      three={circleMembers[2]}
    />
  );
};

export default PeoepleContainer;
