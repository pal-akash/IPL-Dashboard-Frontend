import { React, useEffect, useState } from "react";

import "./HomePage.scss";
import { TeamTile } from "../components/TeamTile";

export const HomePage = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    const fetchAllTeams = async () => {
      const response = await fetch(
        `http://localHost:8080/api/team`
      );
      const data = await response.json();
      setTeams(data);
    };
    fetchAllTeams();
  }, []);

  return (
    <div className="HomePage">
      <div className="header-section">
        <h1 className="app-name">IPL Dashboard</h1>
        <p>By Akash Pal</p>
      </div>
      <div className="team-grid">
        {teams.map(team => <TeamTile key={team.id} teamName={team.teamName}/>)}
      </div>
    </div>
  );
};
